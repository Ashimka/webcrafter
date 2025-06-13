"use client";

import { useState } from "react";
import { z } from "zod";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock, Send } from "lucide-react";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { ContactFormData, contactFormSchema } from "@/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData({
        ...formData,
        [name]: formattedPhone,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Очищаем ошибку валидации при изменении поля
    if (validationErrors[name as keyof ContactFormData]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setValidationErrors({});

    try {
      // Валидация данных
      const validatedData = contactFormSchema.parse(formData);

      setIsSubmitting(true);
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
      });
      alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errors: Partial<Record<keyof ContactFormData, string>> = {};
        err.errors.forEach((error: z.ZodIssue) => {
          if (error.path[0]) {
            errors[error.path[0] as keyof ContactFormData] = error.message;
          }
        });
        setValidationErrors(errors);
      } else {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Произошла неизвестная ошибка при отправке формы";
        setError(errorMessage);
        console.error("Ошибка при отправке формы:", err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ashimka@internet.ru",
      description: "Напишите нам в любое время",
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (964) 955-22-84",
      description: "Звоните с 9:00 до 18:00",
    },

    {
      icon: Clock,
      title: "Время работы",
      value: "Пн-Пт: 9:00-18:00",
      description: "Суббота и воскресенье — выходные",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Свяжитесь
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                с нами
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами
              удобным способом. Мы ответим в течение 24 часов.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Send className="w-6 h-6 mr-3 text-blue-600" />
                    Расскажите о вашем проекте
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                        {error}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Ваше имя *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Введите ваше имя"
                          className={`h-12 ${
                            validationErrors.name ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {validationErrors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`h-12 ${
                            validationErrors.email ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {validationErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Телефон
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          max={18}
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+7 (999) 123-45-67"
                          className={`h-12 ${
                            validationErrors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {validationErrors.phone && (
                          <p className="mt-1 text-sm text-red-600">
                            {validationErrors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="project"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Тип проекта *
                        </label>
                        <select
                          id="project"
                          name="project"
                          required
                          value={formData.project}
                          onChange={handleChange}
                          className={`w-full h-12 px-3 border rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            validationErrors.project
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        >
                          <option value="">Выберите тип проекта</option>
                          <option value="landing">Лендинг</option>
                          <option value="blog">Блог</option>
                          <option value="admin dashboard">Админ панель</option>
                          <option value="ecommerce">Интернет-магазин</option>
                          <option value="corporate">Корпоративный сайт</option>
                          <option value="other">Другое</option>
                        </select>
                        {validationErrors.project && (
                          <p className="mt-1 text-sm text-red-600">
                            {validationErrors.project}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Описание проекта *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                        rows={6}
                        className={`resize-none ${
                          validationErrors.message ? "border-red-500" : ""
                        }`}
                      />
                      {validationErrors.message && (
                        <p className="mt-1 text-sm text-red-600">
                          {validationErrors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Отправляем...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Отправить заявку
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="px-6 py-1.5">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-900 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Часто задаваемые вопросы
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Сколько времени занимает разработка?
                </h4>
                <p className="text-gray-600 text-sm">
                  В зависимости от сложности проекта: лендинг — 3-5 дней,
                  интернет-магазин — 2-3 недели.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Предоставляете ли вы гарантию?
                </h4>
                <p className="text-gray-600 text-sm">
                  Да, мы предоставляем 6 месяцев гарантии на все виды работ и
                  бесплатную техподдержку.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Можно ли вносить изменения в процессе?
                </h4>
                <p className="text-gray-600 text-sm">
                  Конечно! Мы работаем итеративно и всегда готовы внести
                  корректировки по вашим пожеланиям.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Какие способы оплаты вы принимаете?
                </h4>
                <p className="text-gray-600 text-sm">
                  Банковский перевод, карты. Работаем с предоплатой 50% и
                  окончательным расчетом при сдаче.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
