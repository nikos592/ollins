'use client';

export default function MapButtons() {
  return (
    <div className="flex justify-center items-center w-full">
      <button 
        onClick={() => window.open('https://yandex.ru/maps/?rtext=~Люберцы, Октябрьский проспект, 1&rtt=auto', '_blank')}
        className="bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center gap-2 shadow-md hover:shadow-lg font-montserrat text-sm w-full max-w-[1201px]"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        Построить маршрут
      </button>
    </div>
  );
}
