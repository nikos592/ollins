'use client';

import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { pricingPackages, individualZones } from '@/data/pricingData';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [activeTab, setActiveTab] = useState<'complex' | 'individual'>('complex');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { 
      name: 'Лазерная эпиляция', 
      action: () => {
        setShowPricing(true);
        setIsOpen(false);
      }
    },
    { name: 'Обертывания', href: '#wraps' },
    { name: 'LPG массаж', href: '#lpg-massage' }
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close modal when pressing Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowPricing(false);
      }
    }

    if (showPricing) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPricing]);

  return (
    <>
      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-4 py-2 rounded-md hover:bg-pink-50 relative group flex items-center gap-1 font-montserrat"
        >
          Услуги
          <svg 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={service.action || (() => {
                  window.location.href = service.href || '#';
                  setIsOpen(false);
                })}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 first:rounded-t-md last:rounded-b-md font-montserrat"
              >
                {service.name}
              </button>
            ))}
          </div>
        )}
      </div>

             {/* Pricing Modal */}
       {showPricing && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
           <div className="bg-[#FFFEF8] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setShowPricing(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

                         {/* Modal content */}
             <div className="p-8 relative">
               {/* Decorative background patterns */}
               <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                 <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-16 -translate-y-16"></div>
               </div>
               <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
                 <div className="w-full h-full bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full transform -translate-x-24 translate-y-24"></div>
               </div>

               {/* Tabs */}
               <div className="flex mb-8 relative z-10">
                 <button
                   onClick={() => setActiveTab('complex')}
                   className={`px-6 py-3 text-lg font-medium transition-all duration-200 border-b-2 ${
                     activeTab === 'complex'
                       ? 'border-purple-500 text-purple-600'
                       : 'border-transparent text-gray-500 hover:text-gray-700'
                   }`}
                   style={{
                     fontFamily: 'Montserrat',
                     fontWeight: 600,
                     fontSize: '20px'
                   }}
                 >
                   Комплекс
                 </button>
                 <button
                   onClick={() => setActiveTab('individual')}
                   className={`px-6 py-3 text-lg font-medium transition-all duration-200 border-b-2 ${
                     activeTab === 'individual'
                       ? 'border-purple-500 text-purple-600'
                       : 'border-transparent text-gray-500 hover:text-gray-700'
                   }`}
                   style={{
                     fontFamily: 'Montserrat',
                     fontWeight: 600,
                     fontSize: '20px'
                   }}
                 >
                   Отдельные зоны
                 </button>
               </div>

               {/* Header */}
               <div className="text-left mb-8 relative z-10">
                                   <h2 className="mb-2" style={{
                    fontFamily: 'Vetrino',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '60px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                    color: '#4D4D4D'
                  }}>
                    {activeTab === 'complex' ? 'Комплекс' : 'Отдельные зоны'}
                  </h2>
               </div>

               {/* Pricing List */}
               <div className="space-y-4 relative z-10">
                 {activeTab === 'complex' ? (
                   // Комплексы
                   pricingPackages.map((pkg) => (
                     <div
                       key={pkg.id}
                       className="flex items-center justify-between py-3 border-b-2 border-gray-300 last:border-b-0"
                     >
                       <div className="flex-1">
                         <div className="flex items-center gap-3 mb-1">
                           <h4 className="text-gray-800" style={{
                             fontFamily: 'Montserrat',
                             fontWeight: 600,
                             fontStyle: 'normal',
                             fontSize: '20px',
                             lineHeight: '100%',
                             letterSpacing: '0%'
                           }}>
                             {pkg.name}
                           </h4>
                         </div>
                         <p className="text-gray-600 mb-1" style={{
                           fontFamily: 'Montserrat',
                           fontWeight: 500,
                           fontStyle: 'normal',
                           fontSize: '18px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}>
                           {pkg.description}
                         </p>
                       </div>
                       <div className="text-right ml-4">
                         <p className="text-gray-500 mb-1" style={{
                           fontFamily: 'Montserrat',
                           fontWeight: 500,
                           fontStyle: 'normal',
                           fontSize: '14px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}>
                           {pkg.duration}
                         </p>
                         <div className="text-gray-800" style={{
                           fontFamily: 'Montserrat',
                           fontWeight: 600,
                           fontStyle: 'normal',
                           fontSize: '20px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}>
                           {pkg.price.toLocaleString('ru-RU')} ₽
                         </div>
                       </div>
                     </div>
                   ))
                 ) : (
                   // Отдельные зоны
                   individualZones.map((zone, index) => (
                     <div
                       key={zone.id}
                       className="flex items-center justify-between py-3 border-b-2 border-gray-300 last:border-b-0"
                     >
                       <div className="flex-1">
                         <h4 className="text-gray-800" style={{
                           fontFamily: 'Montserrat',
                           fontWeight: 600,
                           fontStyle: 'normal',
                           fontSize: '20px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}>
                           {zone.name}
                         </h4>
                       </div>
                       <div className="text-right ml-4">
                         <div className="text-gray-800" style={{
                           fontFamily: 'Montserrat',
                           fontWeight: 600,
                           fontStyle: 'normal',
                           fontSize: '20px',
                           lineHeight: '100%',
                           letterSpacing: '0%'
                         }}>
                           {zone.price.toLocaleString('ru-RU')} ₽
                         </div>
                       </div>
                     </div>
                   ))
                 )}
               </div>
             </div>
           </div>
         </div>
       )}
     </>
   );
} 