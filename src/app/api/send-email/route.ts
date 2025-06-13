import { ContactFormData, contactFormSchema } from "@/schema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const formData = body as ContactFormData;

  // Валидация данных на сервере
  const validationResult = contactFormSchema.safeParse(formData);

  if (!validationResult.success) {
    return NextResponse.json(
      {
        error: "Ошибка валидации",
        details: validationResult.error.format(),
      },
      { status: 400 }
    );
  }

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
    text: `Имя: ${body.name}\nEmail: ${body.email}\nТелефон: ${body.phone}\nПроект: ${body.project}\nСообщение: ${body.message}`,
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
