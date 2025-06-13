"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Globe, BookOpen, Settings, ShoppingCart } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Лендинг",
      description:
        "Современный лендинг для IT-стартапа с анимациями и интерактивными элементами",
      image: "/images/portfolio/landing.webp",
      technologies: ["React", "Next", "Tailwind CSS"],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Блог",
      description:
        "Стильный блог о моде с системой комментариев и социальных функций",
      image: "/images/portfolio/blog.avif",
      technologies: ["React", "Express", "PostgreSQL"],
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Комплексная админ панель с аналитикой и управлением данными",
      image: "/images/portfolio/admin.jpg",
      technologies: ["React", "Express", "Chart"],
      icon: Settings,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Интернет-магазин",
      description:
        "Экологичный интернет-магазин с современным интерфейсом и удобной навигацией",
      image: "/images/portfolio/eshop.webp",
      technologies: ["React", "Node", "Stripe"],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Корпоративный сайт",
      description:
        "Многостраничный корпоративный сайт с CMS и мультиязычностью",
      image: "/images/portfolio/corporate.jpg",
      technologies: ["Next", "NestJS", "i18n"],
      icon: Globe,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Веб-приложение",
      description:
        "Платформа для организации и управления мероприятиями с системой бронирования",
      image: "/images/portfolio/platform.webp",
      technologies: ["React", "Express", "MongoDB"],
      icon: Settings,
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Наше
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                портфолио
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ — от простых лендингов до сложных
              веб-приложений. Каждый проект создан с любовью к деталям и
              вниманием к пользователям.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <CardContent className="p-6">
                  {/* Project Info */}
                  <div className="flex items-center mb-3">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mr-3`}
                    >
                      <project.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Проектов завершено</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Отраслей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
