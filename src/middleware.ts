import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const AuthCheck = async (req: NextRequest) => {
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
};

export default async function middleware(req: NextRequest) {
  const payload = await AuthCheck(req);
  if (payload) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
