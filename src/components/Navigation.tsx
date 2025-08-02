import DropdownMenu from './DropdownMenu';

export default function Navigation() {
  return (
    <nav className="shadow-lg max-w-7xl mx-auto bg-[#FFFEF8]">
      <div className="py-1 px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-3 text-sm font-medium font-montserrat">
          <li>
            <a 
              href="/" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Главная
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <DropdownMenu />
          </li>
          <li>
            <a 
              href="/masters" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Мастера
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#before-after" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Фотографии
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#contacts" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Контакты
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#how-to-get" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              Как добраться
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-pink-600 transition-all duration-200 px-2 py-1.5 rounded-md hover:bg-pink-50 relative group font-montserrat"
            >
              О нас
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
} 