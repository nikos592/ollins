'use client';

export default function DropdownMenu() {
  return (
    <a 
      href="#services" 
      className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-4 py-2 rounded-md hover:bg-pink-50 relative group font-montserrat"
    >
      Услуги
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
    </a>
  );
} 