'use client';
import { useState, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint в Tailwind
      setIsMobile(mobile);
      
      // На больших экранах навигация видна сразу
      if (!mobile) {
        setIsVisible(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Логика скроллинга только для мобильных устройств
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoHeight = window.innerHeight;
      
      // Показываем навигацию когда пользователь проскроллил больше половины высоты видео
      if (scrollPosition > videoHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // На больших экранах возвращаем к исходному виду
  if (!isMobile) {
    return (
      <nav className="shadow-lg max-w-7xl mx-auto bg-[#FFFEF8]">
        <div className="py-1 px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm font-medium font-montserrat">
            <li>
              <a 
                href="/" 
                className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
              >
                Главная
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <DropdownMenu />
            </li>

            <li>
              <a 
                href="#before-after" 
                className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
              >
                Фотографии
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#contacts" 
                className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
              >
                Контакты
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#how-to-get" 
                className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
              >
                Как добраться
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
              >
                О нас
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  // На мобильных устройствах - фиксированная навигация с анимацией
  return (
    <nav className={`fixed top-20 left-0 right-0 z-40 shadow-lg bg-[#FFFEF8] transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm font-medium font-montserrat">
          <li>
            <a 
              href="/" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <DropdownMenu />
          </li>

          <li>
            <a 
              href="#before-after" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Фотографии
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contacts" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#how-to-get" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Как добраться
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              О нас
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 