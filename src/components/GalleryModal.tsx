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
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full max-w-6xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 text-white z-10 bg-black bg-opacity-50 rounded-full px-3 py-1 text-sm">
          {activeIndex + 1} / {galleryImages.length}
        </div>

        {/* Swiper */}
        <Swiper
          effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="gallery-swiper"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
