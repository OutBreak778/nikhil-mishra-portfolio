import nodemailer from "nodemailer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { name, email, services, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
      <h2 style="color:#ffb536;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#1a73e8;">${email}</a></p>
      <p><strong>Services:</strong> ${services}</p>
      <p><strong>Message:</strong></p>
      <p style="padding: 10px 15px; background-color: #f4f4f4; border-left: 4px solid #ffb536; border-radius:4px;">
        ${message.replace(/\n/g, "<br>")}
      </p>
      <hr style="border:none; border-top:1px solid #ddd; margin:20px 0;">
      <p style="font-size: 0.9rem; color:#666;">This message was sent from your portfolio contact form.</p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
