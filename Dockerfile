# Указываем базовый образ
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файл package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Собираем Next.js приложение
RUN npm run build

# Указываем переменную окружения для Next.js
ENV NODE_ENV production

# Открываем порт для доступа
EXPOSE 3000

# Запускаем команду для старта приложения
CMD ["npm", "start"]
