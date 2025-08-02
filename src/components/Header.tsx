import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="shadow-sm max-w-7xl mx-auto border-b border-gray-200 bg-[#FFFEF8]">
      <div className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo width={180} height={72} className="w-36 h-14 sm:w-44 sm:h-16 flex-shrink-0" />
          </Link>
          
          {/* Contact Info */}
          <div className="text-right">
            <div className="text-xs text-gray-600 flex flex-col items-end font-montserrat gap-2">
              <a 
                href="tel:89645012097" 
                className="text-base font-bold text-gray-800 hover:text-[#D573CB] transition-colors duration-200 font-montserrat"
              >
                +7 (964) 501-20-97
              </a>
              <a 
                href="https://wa.me/79645012097" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white font-medium transition-all duration-200 px-4 py-2 rounded-full text-sm shadow-md hover:shadow-lg transform hover:scale-105"
              >
                Запись WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}