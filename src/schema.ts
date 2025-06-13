import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя не должно превышать 50 символов"),
  email: z.string().email("Введите корректный email адрес"),
  phone: z.string().refine((val) => {
    // Если строка пустая, пропускаем валидацию
    if (!val) return true;
    // Иначе проверяем формат
    return /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(val);
  }, "Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX"),
  project: z.string().min(1, "Выберите тип проекта"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(1000, "Сообщение не должно превышать 1000 символов"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
