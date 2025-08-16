'use client';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Анна',
      text: 'Отличный сервис! Очень довольна результатом. Мастер профессионал своего дела.',
      rating: 5
    },
    {
      id: 2,
      name: 'Мария',
      text: 'Прекрасное качество услуг. Рекомендую всем!',
      rating: 5
    },
    {
      id: 3,
      name: 'Елена',
      text: 'Очень внимательный персонал и высокое качество процедур.',
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-[#FFFEF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-vertino">
            Отзывы наших клиентов
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 font-montserrat leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold font-montserrat">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800 font-montserrat">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
