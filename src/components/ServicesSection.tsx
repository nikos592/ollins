'use client';
import { pricingPackages, individualZones, wrapServices, massageServices } from '@/data/pricingData';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function ServicesSection() {
  const services = [
    { id: 'wraps', title: 'Обертывания', image: '/images/prices/IMG_1940.PNG' },
    { id: 'massage', title: 'Комплекс', image: '/images/prices/IMG_1941.PNG' },
    { id: 'epilation', title: 'Отдельные зоны', image: '/images/prices/IMG_1939.PNG' }
  ];

  return (
    <section className="pt-16 md:pt-20 pb-2 bg-[#FFFEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          initialSlide={0}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 max-w-md mx-auto">
                {/* Image */}
                <div className="relative h-[700px] sm:h-[900px] md:h-[1000px] lg:h-[1100px] xl:h-[1200px] 2xl:h-[1300px] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button className="swiper-button-prev !static !w-12 !h-12 !bg-white !text-gray-700 !rounded-full !shadow-md hover:!bg-gray-50 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next !static !w-12 !h-12 !bg-white !text-gray-700 !rounded-full !shadow-md hover:!bg-gray-50 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
