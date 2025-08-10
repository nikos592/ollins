import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DynamicMap from '@/components/DynamicMap';
import MapButtons from '@/components/MapButtons';
import Masters from '@/components/Masters';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEF8]">
      <Header />
      <Navigation />
      <main className="max-w-7xl mx-auto py-8 bg-[#FFFEF8]">
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
