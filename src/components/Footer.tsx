export default function Footer() {
  return (
    <footer className="text-center text-gray-500 text-xs sm:text-sm mt-12 sm:mt-16 md:mt-20 font-montserrat bg-[#FFFEF8] px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Ollin&apos;s Studio. Все права защищены.</p>
        <p className="mt-2 text-xs text-gray-400">
          Профессиональные услуги лазерной эпиляции в Москве
        </p>
      </div>
    </footer>
  );
} 