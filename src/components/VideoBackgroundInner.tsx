'use client';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';

export default function VideoBackgroundInner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Минимум боли, максимум результата!";

  // Эффект печатной машинки
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 70); // Скорость печати

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useLayoutEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint в Tailwind
      setIsMobile(mobile);
      setShowVideo(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useLayoutEffect(() => {
    // Показываем видео только после монтирования компонента и только на мобильных
    if (!isMobile) return;
    
    const video = videoRef.current;
    if (video && showVideo) {
      const handleCanPlay = () => {
        // Используем requestAnimationFrame для более надежного воспроизведения
        requestAnimationFrame(() => {
          video.play().catch((error) => {
            console.error('Ошибка воспроизведения:', error);
          });
        });
      };

      const handleLoadedData = () => {
        video.play().catch((error) => {
          console.error('Ошибка воспроизведения после loadeddata:', error);
        });
      };

      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [showVideo, isMobile]);

  // Не показываем видео на больших экранах
  if (!isMobile) {
    return null;
  }

  if (!showVideo) {
    return (
      <div className="relative w-full h-screen overflow-hidden">
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/IMG_6769.MP4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Текст со скидкой - слева внизу */}
      <div className="absolute bottom-8 left-4 sm:left-8 z-10 max-w-[300px] sm:max-w-[400px]">
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-montserrat drop-shadow-lg leading-tight italic">
          {displayText}
          <span className="animate-pulse">|</span>
        </p>
      </div>
      
      {/* Стрелка вниз - справа */}
      <button
        onClick={() => {
          const servicesSection = document.querySelector('#services');
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="absolute bottom-8 right-4 sm:right-8 z-10 bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-200"
        aria-label="Scroll to prices"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}
