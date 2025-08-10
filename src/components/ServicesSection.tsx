'use client';
import { pricingPackages, individualZones, wrapServices, massageServices } from '@/data/pricingData';
import Image from 'next/image';

export default function ServicesSection() {
  const services = [
    { id: 'epilation', title: 'Отдельные зоны', image: '/images/prices/IMG_1939.PNG' },
    { id: 'massage', title: 'Комплекс', image: '/images/prices/IMG_1941.PNG' },
    { id: 'wraps', title: 'Обертывания', image: '/images/prices/IMG_1940.PNG' }
  ];

  return (
    <section className="py-2 bg-[#FFFEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
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
          ))}
        </div>
      </div>
    </section>
  );
}
