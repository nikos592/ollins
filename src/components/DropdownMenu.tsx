'use client';

interface DropdownMenuProps {
  isMobile?: boolean;
}

export default function DropdownMenu({ isMobile = false }: DropdownMenuProps) {
  const baseClasses = "text-gray-700 hover:text-pink-600 transition-all duration-200 rounded-md hover:bg-pink-50 group font-montserrat";
  const desktopClasses = "px-4 py-2 relative";
  const mobileClasses = "block w-full text-center px-3 py-3 text-base font-medium";
  
  const classes = `${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`;

  return (
    <a 
      href="#services" 
      className={classes}
    >
      Услуги
      {!isMobile && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 transition-all duration-200 group-hover:w-full"></span>
      )}
    </a>
  );
} 