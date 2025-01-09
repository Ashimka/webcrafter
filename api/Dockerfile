# Dockerfile для api
FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Переносим содержимое client/dist в api/views
RUN cp -r ../client/dist/* ./views/

EXPOSE 8055
CMD ["yarn", "start"]
