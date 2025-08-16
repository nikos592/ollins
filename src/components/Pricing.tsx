'use client';
import { pricingPackages } from '@/data/pricingData';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-32 -translate-y-32"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full transform -translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">


        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200 group"
            >
                             <div className="text-center">
                 <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                   {pkg.description}
                 </p>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span>Длительность:</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="text-2xl font-bold text-purple-600 font-montserrat">
                  {pkg.price.toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Logo */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-gray-800 font-montserrat">
              ollin's studio
            </span>
          </div>
        </div>
      </div>
    </div>
  );
} 