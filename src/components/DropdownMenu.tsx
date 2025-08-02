'use client';

import { useState, useEffect, useRef } from 'react';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Лазерная эпиляция', href: '#laser-epilation' },
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

  return (
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
            <a
              key={index}
              href={service.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200 first:rounded-t-md last:rounded-b-md font-montserrat"
              onClick={() => setIsOpen(false)}
            >
              {service.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
} 