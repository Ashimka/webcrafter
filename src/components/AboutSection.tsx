"use client";

import { CheckCircle, Users, Award, Clock } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Users,
      title: "Опытная команда",
      description:
        "Более 3 лет опыта в веб-разработке. Наша команда состоит из талантливых дизайнеров, разработчиков и менеджеров проектов.",
    },
    {
      icon: Award,
      title: "Качество гарантировано",
      description:
        "Мы используем только современные технологии и следуем лучшим практикам разработки для создания высококачественных решений.",
    },
    {
      icon: Clock,
      title: "Быстрые сроки",
      description:
        "Понимаем важность времени для бизнеса. Всегда укладываемся в согласованные сроки без ущерба для качества.",
    },
  ];

  const values = [
    "Индивидуальный подход к каждому проекту",
    "Постоянная поддержка и обслуживание",
    "Прозрачное ценообразование",
    "Современные технологии и инструменты",
    'SEO-оптимизация "из коробки"',
    "Адаптивный дизайн для всех устройств",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              О нашей
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                студии
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Web Crafters — это команда профессионалов, которая помогает
              бизнесу расти в цифровой среде через создание эффективных
              веб-решений.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Мы создаем не просто сайты — мы строим цифровое будущее вашего
                бизнеса
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Наша студия специализируется на создании современных,
                функциональных и эффективных веб-решений. От простых лендингов
                до сложных интернет-магазинов — мы воплощаем любые идеи в жизнь.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Каждый проект — это уникальная история успеха. Мы не используем
                шаблоны, а создаем индивидуальные решения, которые идеально
                подходят под задачи и потребности конкретного бизнеса.
              </p>

              {/* Values List */}
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value) => (
                  <div key={value} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Команда экспертов
                  </h4>
                  <p className="text-gray-600">
                    5+ специалистов в области дизайна, разработки и маркетинга
                  </p>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Награды
                    </div>
                    <div className="text-xs text-gray-500">
                      5+ наград в сфере дизайна
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Опыт
                    </div>
                    <div className="text-xs text-gray-500">3+ лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
