'use client';
import { useLayoutEffect, useRef, useState } from 'react';

export default function VideoBackgroundInner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    </div>
  );
}
