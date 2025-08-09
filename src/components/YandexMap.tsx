'use client';

import { useEffect, useRef, useState } from 'react';

export default function YandexMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Создаем уникальный ID для карты
    const mapId = 'yandex-map-' + Math.random().toString(36).substr(2, 9);
    
    if (mapContainerRef.current) {
      mapContainerRef.current.id = mapId;
      console.log('Map container ID:', mapId);
    }

    // Создаем и вставляем скрипт карты
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = `https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A252ab28edc448b5d0449adf77d43853228655d23c7a030480d10cd1bbbfce0c5&amp;width=1201&amp;height=605&amp;lang=ru_RU&amp;scroll=true&amp;id=${mapId}`;
    
    script.onload = () => {
      console.log('Map script loaded successfully');
      
      // Ждем создания карты и перемещаем ее в наш контейнер
      setTimeout(() => {
        const mapElement = document.getElementById(mapId);
        const createdMap = document.querySelector('iframe[src*="yandex.ru/map-widget"]');
        
        if (mapElement && createdMap) {
          console.log('Moving map to container');
          // Очищаем контейнер
          mapElement.innerHTML = '';
          // Перемещаем карту в наш контейнер
          mapElement.appendChild(createdMap);
          
          // Применяем стили к iframe
          if (createdMap instanceof HTMLIFrameElement) {
            createdMap.style.width = '100%';
            createdMap.style.height = '100%';
            createdMap.style.border = 'none';
          }
        }
        
        setIsLoading(false);
      }, 2000);
    };
    
    script.onerror = () => {
      console.error('Failed to load map script');
      setError('Ошибка загрузки карты');
      setIsLoading(false);
    };
    
    document.head.appendChild(script);

    // Очистка при размонтировании
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="w-full h-[605px] max-w-[1201px] mx-auto bg-gray-200 flex items-center justify-center">
          <div className="text-gray-600">Загрузка карты...</div>
        </div>
      )}
      
      {error && (
        <div className="w-full h-[605px] max-w-[1201px] mx-auto bg-red-100 flex items-center justify-center">
          <div className="text-red-600">{error}</div>
        </div>
      )}
      
      <div 
        ref={mapContainerRef}
        className="w-full h-[605px] max-w-[1201px] mx-auto border-2 border-gray-300"
        style={{ 
          minHeight: '605px',
          backgroundColor: '#f0f0f0',
          position: 'relative'
        }}
      />
    </div>
  );
}

