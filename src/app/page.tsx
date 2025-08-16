'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DynamicMap from '@/components/DynamicMap';
import MapButtons from '@/components/MapButtons';
import Masters from '@/components/Masters';
import VideoBackground from '@/components/VideoBackground';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#services') || document.querySelector('#masters');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      setShowScrollArrow(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      {/* Полноэкранное видео */}
      <VideoBackground />

      <Header />
      <main className="max-w-7xl mx-auto py-0 bg-[#FFFEF8] mt-0 pt-16">
        {/* Секция с услугами */}
        <div id="services" className="mb-6 sm:mb-8">
          <ServicesSection />
        </div>
        
        {/* Секция с мастерами */}
        <div id="masters" className="mb-6 sm:mb-8">
          <Masters />
        </div>
        
        {/* Секция с картой */}
        <div id="how-to-get" className="mb-6 sm:mb-8">
          <DynamicMap />
          <div className="mt-4 sm:mt-6 max-w-[1201px] mx-auto">
            <MapButtons />
          </div>
        </div>
        
        <Footer />
      </main>

      {/* Стрелка вниз справа - видна только в начале */}
      {showScrollArrow && (
        <button
          onClick={scrollToNextSection}
          className="fixed bottom-8 right-8 z-50 bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-200 border-2 border-white"
          aria-label="Scroll to next section"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}
    </div>
  );
}
