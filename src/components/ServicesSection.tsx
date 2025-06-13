"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  BookOpen,
  Settings,
  ShoppingCart,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Лендинги",
      description:
        "Эффективные одностраничные сайты для продвижения товаров и услуг",
      features: [
        "Конверсионный дизайн",
        "Интеграция с CRM",
        "Мобильная адаптация",
        "SEO оптимизация",
      ],
      price: "от 15 000 ₽",
      timeframe: "3-5 дней",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      id: 2,
      icon: BookOpen,
      title: "Блоги",
      description:
        "Современные платформы для публикации контента и взаимодействия с аудиторией",
      features: [
        "CMS система",
        "Комментарии",
        "Категории и теги",
        "Социальные сети",
      ],
      price: "от 25 000 ₽",
      timeframe: "5-7 дней",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      id: 3,
      icon: Settings,
      title: "Админ панели",
      description:
        "Удобные административные интерфейсы для управления данными и процессами",
      features: [
        "Дашборд с аналитикой",
        "Управление пользователями",
        "Роли и права доступа",
        "Отчеты и статистика",
      ],
      price: "от 35 000 ₽",
      timeframe: "7-14 дней",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: "Интернет-магазины",
      description: "Полнофункциональные e-commerce решения для онлайн торговли",
      features: [
        "Каталог товаров",
        "Корзина и оформление",
        "Платежные системы",
        "Личный кабинет",
      ],
      price: "от 45 000 ₽",
      timeframe: "14-21 день",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Наши
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                услуги
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для создания современных веб-решений. От
              простых лендингов до сложных e-commerce платформ.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <CardHeader
                  className={`bg-gradient-to-br ${service.bgGradient} pb-6`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="text-xs">
                        {service.timeframe}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Что включено:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {service.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        Финальная стоимость
                      </div>
                    </div>
                    <Button
                      onClick={scrollToContact}
                      className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 group-hover:scale-105`}
                    >
                      Заказать
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
