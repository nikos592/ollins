import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 56, height = 56 }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo/logo2.svg"
        alt="Ollin's Studio Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
} 