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
    <section className="pt-20 pb-2 bg-[#FFFEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
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
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="services-swiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 max-w-md mx-auto">
                {/* Image */}
                <div className="relative h-[800px] w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
