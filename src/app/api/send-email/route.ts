import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, project, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "ashimka@internet.ru",
    subject: "Новая заявка с сайта",
    text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nПроект: ${project}\nСообщение: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Сообщение отправлено" });
  } catch (err) {
    return NextResponse.json(
      { message: "Не удалось отправить сообщение" },
      { status: 500 }
    );
  }
}
