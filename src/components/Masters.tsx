import Logo from './Logo';
import ReviewsParser from './ReviewsParser';

// Данные о мастерах
const mastersData = [
  {
    id: 1,
    name: "Ольга",
    rating: 5.0,
    reviews: 52
  }
];

export default function Masters() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-full transform translate-x-32 -translate-y-32"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
        <div className="w-full h-full bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full transform -translate-x-48 translate-y-48"></div>
      </div>
      
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        {/* Masters Grid */}
        <div className="flex justify-start items-stretch max-w-[1201px] mx-auto gap-4">
          {mastersData.map((master) => (
                                       <div
                key={master.id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200 group w-1/3 flex-shrink-0 flex flex-col"
              >
                {/* Master Image */}
                <div className="w-full h-[28rem] rounded-lg mb-6 overflow-hidden">
                  <img 
                    src="/images/masters/master.JPG" 
                    alt={`Фото мастера ${master.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Spacer to push content to bottom */}
                <div className="flex-grow"></div>

                {/* Master Info and Rating in one line */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-montserrat">
                    {master.name}
                  </h3>
                  <a 
                    href="https://yandex.ru/maps/org/ollin_s_studio/11176569475/?booking%5Bpage%5D=resource&booking%5Bpermalink%5D=11176569475&booking%5BresourceId%5D=3234637&ll=37.858330%2C55.699807&z=16.61"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(master.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat hover:text-purple-600 transition-colors">
                      {master.rating} ({master.reviews} отзывов)
                    </span>
                  </a>
                </div>

                {/* Book Button */}
                <a 
                  href="https://yandex.ru/maps/org/ollin_s_studio/11176569475/?booking%5Bpage%5D=services&booking%5Bpermalink%5D=11176569475&booking%5BresourceId%5D=3234637&ll=37.858330%2C55.699807&z=16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#4D4D4D] hover:bg-[#3A3A3A] text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 font-montserrat text-center shadow-md hover:shadow-lg"
                >
                  Записаться к мастеру
                </a>
              </div>
                       ))}
            
            {/* Секция с отзывами */}
            <div className="w-2/3 flex items-end">
              <ReviewsParser />
            </div>
          </div>
      </div>
     </div>
   );
}