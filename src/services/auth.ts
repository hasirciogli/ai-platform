import { NextRequest } from "next/server";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { User } from "../models/user";
import prisma from "@prisma";
import bcrypt from "bcrypt";
import fs from "fs";
import { EmailService } from "./email";
import { AUTH_ERRORS } from "../enums";

export class AuthService {
  private static readEmailTemplate(template: string): string {
    return fs.readFileSync("./email-templates/" + template + ".html", "utf8");
  }

  private static replaceEmailTemplateVariables(
    template: string,
    key: string,
    value: string
  ): string {
    // example variables = {{name}} or {{ name }}
    let first = template.replaceAll("{{" + key + "}}", value);
    let second = first.replaceAll("{{ " + key + " }}", value);

    return second;
  }

  public static async signIn(
    email: string,
    password: string
  ): Promise<User | AUTH_ERRORS> {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return AUTH_ERRORS.INVALID_CREDENTIALS;
      }

      const passHash = await bcrypt.compare(password, user.password);

      if (!passHash) {
        return AUTH_ERRORS.INVALID_CREDENTIALS;
      }

      return user as User;
    } catch (error) {
      console.error(error);
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }

  public static async signUp(
    email: string,
    password: string,
    fullName: string
  ): Promise<User | AUTH_ERRORS> {
    try {
      const passHash = await bcrypt.hash(password, 10);

      const user = await prisma.users.create({
        data: {
          email: email,
          password: passHash,
          fullName: fullName,
        },
      });

      return user as User;
    } catch (error) {
      console.error(error);
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }
  }

  public static async forgotPassword(email: string): Promise<AUTH_ERRORS> {
    return AUTH_ERRORS.NOT_IMPLEMENTED;
  }

  public static async checkAuthFromMiddleware(
    req: NextRequest
  ): Promise<false | JWTPayload> {
    const token = req.cookies.get("auth-token")?.value;

    if (!token) {
      return false;
    }
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.AUTH_JWT_SECRET)
      );

      return payload;
    } catch (error) {
      return false;
    }
  }

  public static async generateToken(
    payload: JWTPayload,
    ttl?: number
  ): Promise<string> {
    if (!ttl) {
      ttl = 1000 * 60 * 60 * 24;
      return await new SignJWT(payload)
        .setProtectedHeader({
          alg: "HS256",
          typ: "JWT",
        })
        .setExpirationTime(new Date(Date.now() + ttl))
        .sign(new TextEncoder().encode(process.env.AUTH_JWT_SECRET));
    }

    return await new SignJWT(payload)
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .sign(new TextEncoder().encode(process.env.AUTH_JWT_SECRET));
  }

  public static async sendPasswordResetEmail(
    email: string
  ): Promise<AUTH_ERRORS> {
    const token = await AuthService.generateToken({
      email: email,
      rndx: Math.random().toString(36).substring(2, 15),
    });

    const emailTemplate = AuthService.readEmailTemplate("password-reset");
    const emailTemplateWithVariables =
      AuthService.replaceEmailTemplateVariables(
        emailTemplate,
        "link",
        process.env.NEXT_PUBLIC_URL + "/reset-password?token=" + token
      );

    const newToken = await prisma.password_resets.create({
      data: {
        email: email,
        token: token,
        expiresAt: new Date(Date.now() + 1000 * 60 * 10), // 10 min
      },
    });

    if (!newToken) {
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }

    const emailSent = await EmailService.sendEmail(
      email,
      "Reset your password",
      emailTemplateWithVariables
    );

    if (!emailSent) {
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }

    return AUTH_ERRORS.OK;
  }

  public static async verifyPasswordResetToken(
    newPassword: string,
    __token: string
  ): Promise<AUTH_ERRORS> {
    const token = await prisma.password_resets.findUnique({
      where: {
        token: __token,
      },
    });

    if (!token) {
      return AUTH_ERRORS.INVALID_CREDENTIALS;
    }

    const passHash = await bcrypt.hash(newPassword, 10);

    await prisma.users.update({
      where: {
        email: token.email,
      },
      data: {
        password: passHash,
      },
    });

    await prisma.password_resets.delete({
      where: {
        token: __token,
      },
    });

    return AUTH_ERRORS.OK;
  }

  public static async sendEmailVerificationEmail(
    email: string
  ): Promise<AUTH_ERRORS> {
    // password reset token
    const token = await AuthService.generateToken({
      email: email,
      rndx: Math.random().toString(36).substring(2, 15),
    });

    const emailTemplate = AuthService.readEmailTemplate("email-verify");
    const emailTemplateWithVariables =
      AuthService.replaceEmailTemplateVariables(
        emailTemplate,
        "link",
        process.env.NEXT_PUBLIC_URL + "/verify-email?token=" + token
      );

    const newToken = await prisma.email_verifications.create({
      data: {
        email: email,
        token: token,
        expiresAt: new Date(Date.now() + 1000 * 60 * 10), // 10 min
      },
    });

    if (!newToken) {
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }

    const emailSent = await EmailService.sendEmail(
      email,
      "Verify your email",
      emailTemplateWithVariables
    );

    if (!emailSent) {
      return AUTH_ERRORS.INTERNAL_SERVER_ERROR;
    }

    return AUTH_ERRORS.OK;
  }

  public static async verifyEmail(
    email: string,
    __token: string
  ): Promise<AUTH_ERRORS> {
    const token = await prisma.email_verifications.findUnique({
      where: {
        token: __token,
      },
    });

    if (!token) {
      return AUTH_ERRORS.INVALID_CREDENTIALS;
    }

    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return AUTH_ERRORS.INVALID_CREDENTIALS;
    }

    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        emailVerifiedAt: new Date(Date.now()),
      },
    });

    await prisma.email_verifications.deleteMany({
      where: {
        email: email,
        token: __token,
      },
    });

    return AUTH_ERRORS.OK;
  }
}
