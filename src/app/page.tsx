'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DynamicMap from '@/components/DynamicMap';
import MapButtons from '@/components/MapButtons';
import Masters from '@/components/Masters';
import VideoBackground from '@/components/VideoBackground';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      {/* Полноэкранное видео */}
      <VideoBackground />

      <Header />
      <main className="max-w-7xl mx-auto py-0 bg-[#FFFEF8] mt-0">
        {/* Секция с услугами */}
        <div className="mb-8">
          <ServicesSection />
        </div>
        
        {/* Секция с мастерами */}
        <div className="mb-8">
          <Masters />
        </div>
        
        {/* Секция с картой */}
        <div id="how-to-get" className="mb-8">
          <DynamicMap />
          <div className="mt-6 max-w-[1201px] mx-auto">
            <MapButtons />
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
