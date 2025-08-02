# Шрифты для проекта

## Шрифт Vertino для заголовков

### Установка шрифта

Для использования шрифта Vertino в проекте, необходимо добавить файлы шрифта в эту папку:

### Требуемые файлы:
- `Vertino-Regular.woff2` - Regular weight (400)
- `Vertino-Regular.woff` - Regular weight (400) 
- `Vertino-Regular.ttf` - Regular weight (400)
- `Vertino-Bold.woff2` - Bold weight (700)
- `Vertino-Bold.woff` - Bold weight (700)
- `Vertino-Bold.ttf` - Bold weight (700)
- `Vertino-Light.woff2` - Light weight (300)
- `Vertino-Light.woff` - Light weight (300)
- `Vertino-Light.ttf` - Light weight (300)

### Где взять шрифт:
Шрифт Vertino является коммерческим шрифтом. Вы можете приобрести его на официальном сайте или у дистрибьютора.

### Альтернатива:
Если у вас нет лицензии на Vertino, вы можете использовать бесплатный альтернативный шрифт:

1. **Playfair Display** (текущая настройка):
   - В файле `src/app/globals.css` уже используется `@import "./fonts-fallback.css";`
   - Это автоматически подключает бесплатный шрифт Playfair Display для заголовков
   - Для переключения на Vertino замените на `@import "./fonts.css";`

2. **Другие бесплатные альтернативы**:
   - Merriweather
   - Lora
   - Source Serif Pro
   - Libre Baskerville

### Проверка установки:
После добавления файлов шрифта или переключения на альтернативный шрифт, заголовки (h1, h2, h3, h4, h5, h6) автоматически будут использовать выбранный шрифт.

## Шрифт Montserrat для основного текста

### Описание:
Шрифт Montserrat используется для всего остального текста на сайте:
- Параграфы (p)
- Ссылки (a)
- Кнопки (button)
- Поля ввода (input, textarea)
- Списки (li)
- И другие текстовые элементы

### Установка:
Montserrat автоматически подключается через Google Fonts и не требует дополнительной установки.

### Настройка:
Шрифт уже настроен в CSS файлах и будет применяться ко всем текстовым элементам, кроме заголовков. 