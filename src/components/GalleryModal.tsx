'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImages = [
    '/images/gallery/IMG_3124.jpg',
    '/images/gallery/IMG_3123.jpg',
    '/images/gallery/IMG_3121.jpg',
    '/images/gallery/IMG_3120.jpg',
    '/images/gallery/IMG_3119.jpg',
    '/images/gallery/IMG_9514.JPG',
    '/images/gallery/IMG_1501.JPG',
    '/images/gallery/IMG_8194.PNG',
    '/images/gallery/IMG_9516.JPG',
    '/images/gallery/IMG_6451.JPG',
    '/images/gallery/IMG_1141.JPG'
  ];

  // Close modal when pressing Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[95vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - Larger on mobile */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2 sm:p-3 hover:bg-opacity-70"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Counter - Better positioned on mobile */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white z-10 bg-black bg-opacity-50 rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium">
          {activeIndex + 1} / {galleryImages.length}
        </div>

        {/* Swiper */}
        <Swiper
          effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.gallery-swiper-next',
            prevEl: '.gallery-swiper-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.gallery-swiper-pagination',
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="gallery-swiper w-full h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Фотография ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 1200px"
                  priority={index < 3}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - Larger and touch-friendly */}
        <button className="gallery-swiper-prev absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 sm:p-3 transition-all duration-200">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="gallery-swiper-next absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2 sm:p-3 transition-all duration-200">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="gallery-swiper-pagination absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
      </div>
    </div>
  );
}
