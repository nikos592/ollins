'use client';

import { useState, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewsParser() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint в Tailwind
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        
        // Парсим отзывы с Яндекс Карт
        const reviewsData = await parseYandexReviews();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Ошибка при загрузке отзывов:', error);
        // Fallback отзывы в случае ошибки - реальные отзывы с Яндекс Карт
        setReviews([
          {
            id: '1',
            author: 'Анастасия Л.',
            rating: 5,
            text: 'Прекрасное место. Спасибо большое мастеру Ольге 🫶',
            date: '2024-07-19'
          },
          {
            id: '2',
            author: 'Anna P.',
            rating: 5,
            text: 'Потрясающее место, максимальный комфорт, эстетика и качество выполняемых услуг. Хожу к Ольге на лазер всего тела и массаж LPG. Лазер супер, результат просто вау!',
            date: '2024-06-30'
          },
          {
            id: '3',
            author: 'Анастасия Ч.',
            rating: 5,
            text: 'Сказать, что это лучший мастер, ничего не сказать. Ходила к разным мастерам, но именно Ольга профессионал своего дела. Если вы хотите увидеть действительно результат, вам обязательно к ней.',
            date: '2024-07-01'
          },
          {
            id: '4',
            author: 'Анна К.',
            rating: 5,
            text: 'Недавно снова посетила лазерную эпиляцию у Ольги, и не могу не поделиться своими впечатлениями! В кабинете очень чисто и аккуратно. Во время первого сеанса весь процесс был подробно объяснен.',
            date: '2024-01-27'
          },
          {
            id: '5',
            author: 'Ирина К.',
            rating: 5,
            text: 'Хожу к Ольге на лазерную процедуру и массаж LPG - остаюсь всегда довольна результатом, так как специалист выполняет добросовестно, ответственно и профессионально процедуры! 💖',
            date: '2024-08-05'
          },
          {
            id: '6',
            author: 'Владислава Ф.',
            rating: 5,
            text: 'Удобное расположение. Очень уютное место, для клиентов продуманы все мелочи. Была на LPG массаже тела, уже замечаю изменения - тело становится более подтянутым. Ольга профессионал своего дела!',
            date: '2024-03-24'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const parseYandexReviews = async (): Promise<Review[]> => {
    try {
      // Используем прокси для обхода CORS
      const response = await fetch('/api/reviews');
      const data = await response.json();
      return data.reviews || [];
    } catch (error) {
      console.error('Ошибка парсинга:', error);
      throw error;
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <div className="flex-1 max-w-lg flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  // Выбираем количество отзывов в зависимости от устройства
  const displayReviews = isMobile ? reviews.slice(0, 3) : reviews;

  return (
    <div className="flex-1 flex flex-col justify-end space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {displayReviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <span className="font-semibold text-gray-800 font-montserrat text-sm truncate">
                  {review.author}
                </span>
              </div>
              <div className="flex flex-shrink-0">
                {renderStars(review.rating)}
              </div>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed font-montserrat mb-2 line-clamp-3">
              "{review.text}"
            </p>
            
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-gray-500 font-montserrat">
                {new Date(review.date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              
              {/* Показываем ссылку только в последней карточке */}
              {index === displayReviews.length - 1 && (
                <a 
                  href="https://yandex.ru/maps/org/ollin_s_studio/11176569475/reviews/?ll=37.856028%2C55.699807&z=16.84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 font-semibold text-sm font-montserrat transition-colors flex-shrink-0"
                >
                  Смотреть все отзывы
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
