import { Resend } from "resend";

export class EmailService {
  static loadResend = async () => {
    return new Resend(process.env.RESEND_API_KEY);
  };

  public static async sendEmail(
    email: string,
    subject: string,
    body: string
  ): Promise<boolean> {
    const resend = await EmailService.loadResend();

    try {
      const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: subject,
        html: body,
      });

      if (error) {
        console.error(error);
        return false;
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
