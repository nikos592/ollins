'use client';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import DropdownMenu from './DropdownMenu';
import GalleryModal from './GalleryModal';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint в Tailwind
      setIsMobile(mobile);
      
      // На всех экранах хедер виден сразу
      setIsVisible(true);
      if (!mobile) {
        setIsMobileMenuOpen(false); // Закрываем мобильное меню при переходе на десктоп
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Убираем логику скроллинга - хедер всегда виден
  // useEffect(() => {
  //   // Логика скроллинга только для мобильных устройств
  //   if (!isMobile) return;

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const videoHeight = window.innerHeight;
      
  //     // Показываем хедер когда пользователь проскроллил больше половины высоты видео
  //     if (scrollPosition > videoHeight * 0.5) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [isMobile]);

  // Закрываем мобильное меню при клике на ссылку
  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Навигационное меню для десктопа
  const DesktopNavigationMenu = () => (
    <nav className="flex-1 flex justify-center">
      <ul className="flex items-center gap-6 text-sm font-medium font-montserrat">
        <li>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
          >
            Главная
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
          </button>
        </li>
        <li>
          <DropdownMenu isMobile={false} />
        </li>
        <li>
          <button 
            onClick={() => setShowGallery(true)}
            className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
          >
            Фотографии
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
          </button>
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
            href="#masters" 
            className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
          >
            Отзывы
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </li>
      </ul>
    </nav>
  );

  // Мобильное навигационное меню
  const MobileNavigationMenu = () => (
    <nav className={`absolute top-full left-0 right-0 bg-[#FFFEF8] border-t border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${
      isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <ul className="py-2 px-4 space-y-1 max-w-md mx-auto">
        <li>
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              handleMobileNavClick();
            }}
            className="w-full text-center text-gray-700 hover:text-pink-600 transition-all duration-200 px-3 py-3 rounded-md hover:bg-pink-50 font-montserrat text-base font-medium"
          >
            Главная
          </button>
        </li>
        <li>
          <DropdownMenu isMobile={true} />
        </li>
        <li>
          <button 
            onClick={() => {
              setShowGallery(true);
              handleMobileNavClick();
            }}
            className="w-full text-center text-gray-700 hover:text-pink-600 transition-all duration-200 px-3 py-3 rounded-md hover:bg-pink-50 font-montserrat text-base font-medium"
          >
            Фотографии
          </button>
        </li>
        <li>
                     <a 
             href="#contacts" 
             onClick={handleMobileNavClick}
             className="block w-full text-center text-gray-700 hover:text-pink-600 transition-all duration-200 px-3 py-3 rounded-md hover:bg-pink-50 font-montserrat text-base font-medium"
           >
             Контакты
           </a>
        </li>
        <li>
                     <a 
             href="#how-to-get" 
             onClick={handleMobileNavClick}
             className="block w-full text-center text-gray-700 hover:text-pink-600 transition-all duration-200 px-3 py-3 rounded-md hover:bg-pink-50 font-montserrat text-base font-medium"
           >
             Как добраться
           </a>
        </li>
        <li>
                     <a 
             href="#masters" 
             onClick={handleMobileNavClick}
             className="block w-full text-center text-gray-700 hover:text-pink-600 transition-all duration-200 px-3 py-3 rounded-md hover:bg-pink-50 font-montserrat text-base font-medium"
           >
             Отзывы
           </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop Header */}
      {!isMobile && (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200 bg-[#FFFEF8]">
          <div className="py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 gap-8">
              {/* Logo/Name */}
              <Link href="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <Logo width={180} height={72} className="w-36 h-14 sm:w-44 sm:h-16" />
              </Link>
              
              {/* Navigation */}
              <DesktopNavigationMenu />
              
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
      )}

      {/* Mobile Header */}
      {isMobile && (
        <header className="fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200 bg-[#FFFEF8]">
          <div className="py-2 px-4">
            <div className="flex items-center h-16 gap-4">
              {/* Mobile Menu Toggle - слева */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`font-medium transition-all duration-300 px-4 py-3 rounded-full text-sm shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2 flex-shrink-0 min-h-[48px] ${
                  isMobileMenuOpen 
                    ? 'bg-[#4D4D4D] text-white shadow-xl' 
                    : 'bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white'
                }`}
                aria-label="Toggle mobile menu"
              >
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                   {isMobileMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                   ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                   )}
                 </svg>
                <span className="text-sm font-medium">{isMobileMenuOpen ? 'Закрыть' : 'Меню'}</span>
              </button>
              
              {/* Logo/Name - по центру */}
              <div className="flex-1 flex items-center justify-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Logo width={180} height={72} className="w-28 h-10 sm:w-32 sm:h-12 lg:w-36 lg:h-14" />
                </Link>
              </div>
              
              {/* Contact Info - справа */}
              <div className="flex-shrink-0">
                <a 
                  href="https://wa.me/79645012097" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white font-medium transition-all duration-200 px-3 py-2 rounded-full text-sm shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center min-w-[90px] sm:min-w-[100px]"
                >
                  Записаться
                </a>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            <MobileNavigationMenu />
          </div>
        </header>
      )}

      {/* Gallery Modal */}
      <GalleryModal isOpen={showGallery} onClose={() => setShowGallery(false)} />
    </>
  );
}