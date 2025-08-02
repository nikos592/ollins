export default function Header() {
  return (
    <header className="shadow-sm w-full border-b border-gray-200" style={{ backgroundColor: '#fcfcfc' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Ollin's Studio
            </h1>
            <p className="text-xs text-gray-600 mt-0.5">Студия красоты и релаксации</p>
          </div>
          
          {/* Contact Info */}
          <div className="text-left">
            <div className="text-xs text-gray-600 flex flex-col items-start">
              <a href="tel:84954808385" className="text-lg font-bold text-gray-800 hover:text-pink-600 transition-colors duration-200 mb-0.5">
                8 (495) 480 83 85
              </a>
              <p className="mb-1 text-xs">Мы работаем ежедневно с 09:00 до 21:00</p>
              <div className="flex gap-3 flex-nowrap">
                <a href="tel:84954808385" className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200 whitespace-nowrap text-xs">
                  Перезвонить мне
                </a>
                <a href="https://wa.me/74954808385" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 font-medium transition-colors duration-200 whitespace-nowrap text-xs">
                  Запись WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 