"use client";

import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Web Crafters
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Мы создаем современные веб-решения, которые помогают бизнесу
                расти и достигать новых высот в цифровом мире. Ваш успех — наша
                миссия.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    ashimka@internet.ru
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    +7 (964) 955-22-84
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2021 - {currentYear} Web Crafters. Все права защищены.
              </div>
              <div className="flex flex-col gap-4 sm:flex-row space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
