# Dockerfile для client
FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn build
