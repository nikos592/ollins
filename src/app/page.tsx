import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-vertino">
            Добро пожаловать в Ollin's Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat">
            Мы предлагаем профессиональные услуги депиляции, эпиляции и массажа. 
            Наши мастера используют современное оборудование и качественные материалы 
            для достижения наилучших результатов. Подарите себе заботу и красоту!
          </p>
        </div>

        <Footer />
      </main>
    </div>
  );
}
