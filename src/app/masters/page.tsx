import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Masters from '@/components/Masters';

// Кэширование страницы
export const revalidate = 3600; // кэш на 1 час

export default function MastersPage() {
  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      <Navigation />
      <Masters />
    </div>
  );
} 