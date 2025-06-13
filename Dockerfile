
FROM node:20-alpine AS builder

WORKDIR /app

COPY /package*.json ./

RUN npm ci

COPY / ./

RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app

COPY /package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]


FROM node:20-alpine AS development

WORKDIR /app

COPY /package*.json ./

RUN npm install

COPY / ./

EXPOSE 3000

CMD ["npm", "run", "dev"] 