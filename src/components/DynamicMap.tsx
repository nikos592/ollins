'use client';

import dynamic from 'next/dynamic';

const YandexMap = dynamic(() => import('./YandexMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[605px] max-w-[1201px] mx-auto bg-gray-200 flex items-center justify-center">
      <div className="text-gray-600 text-sm md:text-base">Загрузка карты...</div>
    </div>
  ),
});

export default function DynamicMap() {
  return <YandexMap />;
}

