# Настройка шрифта Vertino

## ✅ Что уже сделано:

1. **CSS файлы настроены**: `src/app/fonts.css` содержит все необходимые `@font-face` правила для Vertino
2. **Tailwind конфигурация**: Добавлены классы `font-vertino` и `font-montserrat`
3. **Глобальные стили**: 
   - Заголовки автоматически используют шрифт Vertino
   - Весь остальной текст автоматически использует шрифт Montserrat
4. **Компоненты обновлены**: 
   - Header использует Vertino для заголовка и Montserrat для всего остального текста
   - Navigation использует Montserrat для всех ссылок
   - Главная страница использует Vertino для заголовка и Montserrat для описания
   - Footer использует Montserrat
   - DropdownMenu использует Montserrat

## 📁 Что нужно добавить:

Для полной работы шрифта Vertino добавьте следующие файлы в папку `public/fonts/`:

### Обязательные файлы:
- `Vertino-Regular.woff2` - Regular weight (400)
- `Vertino-Regular.woff` - Regular weight (400) 
- `Vertino-Regular.ttf` - Regular weight (400)
- `Vertino-Bold.woff2` - Bold weight (700)
- `Vertino-Bold.woff` - Bold weight (700)
- `Vertino-Bold.ttf` - Bold weight (700)
- `Vertino-Light.woff2` - Light weight (300)
- `Vertino-Light.woff` - Light weight (300)
- `Vertino-Light.ttf` - Light weight (300)

## 🎯 Как использовать:

### Автоматически (рекомендуется):
Все заголовки `h1`, `h2`, `h3`, `h4`, `h5`, `h6` автоматически используют шрифт Vertino.

### Вручную через Tailwind классы:
```jsx
<h1 className="font-vertino text-3xl font-bold">
  Заголовок с Vertino
</h1>

<p className="font-montserrat">
  Обычный текст с Montserrat
</p>
```

## 🔄 Альтернатива (если нет файлов Vertino):

Если у вас нет лицензии на Vertino, замените в `src/app/layout.tsx`:

```typescript
// Заменить эту строку:
import "./fonts.css";

// На эту:
import "./fonts-fallback.css";
```

Это автоматически переключит на бесплатный шрифт Playfair Display для заголовков.

## ✅ Проверка работы:

После добавления файлов шрифта:
1. Перезапустите сервер разработки: `npm run dev`
2. Откройте сайт в браузере
3. Заголовки должны отображаться шрифтом Vertino
4. Весь остальной текст должен отображаться шрифтом Montserrat:
   - Параграфы и описания
   - Ссылки в навигации
   - Контактная информация
   - Текст в футере
   - Все остальные текстовые элементы

## 📝 Примечания:

- Шрифт Vertino является коммерческим
- Для продакшена убедитесь, что у вас есть лицензия
- Файлы `.woff2` обеспечивают лучшую производительность
- Файлы `.ttf` служат как fallback для старых браузеров 