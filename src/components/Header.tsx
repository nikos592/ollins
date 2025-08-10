'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint в Tailwind
      setIsMobile(mobile);
      
      // На больших экранах хедер виден сразу
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
      
      // Показываем хедер когда пользователь проскроллил больше половины высоты видео
      if (scrollPosition > videoHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // Навигационное меню
  const NavigationMenu = () => (
    <nav className="flex-1 flex justify-center">
      <ul className="flex items-center gap-6 text-sm font-medium font-montserrat">
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
    </nav>
  );

  // На больших экранах - объединенный хедер с навигацией
  if (!isMobile) {
    return (
      <header className="shadow-sm max-w-7xl mx-auto border-b border-gray-200 bg-[#FFFEF8]">
        <div className="py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 gap-8">
            {/* Logo/Name */}
            <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <Logo width={180} height={72} className="w-36 h-14 sm:w-44 sm:h-16" />
            </Link>
            
            {/* Navigation */}
            <NavigationMenu />
            
            {/* Contact Info */}
            <div className="text-right flex-shrink-0">
              <div className="text-xs text-gray-600 flex flex-col items-end font-montserrat gap-2">
                <a 
                  href="tel:89645012097" 
                  className="text-base font-bold text-gray-800 hover:text-[#D573CB] transition-colors duration-200 font-montserrat"
                >
                  +7 (964) 501-20-97
                </a>
                <a 
                  href="https://wa.me/79645012097" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white font-medium transition-all duration-200 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Запись WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // На мобильных устройствах - фиксированный хедер с анимацией
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200 bg-[#FFFEF8] transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
    }`}>
      <div className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo/Name */}
          <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <Logo width={180} height={72} className="w-32 h-12 sm:w-36 sm:h-14" />
          </Link>
          
          {/* Navigation - компактная версия для мобильных */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-3 text-xs font-medium font-montserrat">
              <li>
                <a 
                  href="/" 
                  className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-1.5 py-1 rounded-md hover:bg-pink-50 relative group font-montserrat"
                >
                  Главная
                </a>
              </li>
              <li>
                <DropdownMenu />
              </li>
              <li>
                <a 
                  href="#contacts" 
                  className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-1.5 py-1 rounded-md hover:bg-pink-50 relative group font-montserrat"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div className="text-right flex-shrink-0">
            <div className="text-xs text-gray-600 flex flex-col items-end font-montserrat gap-1">
              <a 
                href="tel:89645012097" 
                className="text-sm font-bold text-gray-800 hover:text-[#D573CB] transition-colors duration-200 font-montserrat"
              >
                +7 (964) 501-20-97
              </a>
              <a 
                href="https://wa.me/79645012097" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white font-medium transition-all duration-200 px-3 py-1.5 rounded-full text-xs shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Запись
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}