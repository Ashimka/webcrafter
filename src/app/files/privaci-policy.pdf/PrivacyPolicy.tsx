import Link from "next/link";

export function PrivacyPolicy() {
  return (
    <object
      data="/files/privacy-policy.pdf"
      type="application/pdf"
      aria-label="Политика конфиденциальности"
    >
      <p>
        Ваш браузер не поддерживает PDF.
        <Link href="/files/privacy-policy.pdf" download>
          Скачать файл
        </Link>
        .
      </p>
    </object>
  );
}
