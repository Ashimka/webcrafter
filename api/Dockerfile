# Dockerfile для api
FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma db push

RUN yarn build

EXPOSE 8055
CMD ["yarn", "start"]
