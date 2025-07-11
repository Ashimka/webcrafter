import { ContactFormData, contactFormSchema } from "@/schema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const formData = body as ContactFormData;

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
    const error = err instanceof Error ? err : new Error(String(err));

    console.error("Ошибка отправки почты:", error.message);

    return NextResponse.json(
      { message: `Ошибка: ${error.message}` },
      { status: 500 }
    );
  }
}
