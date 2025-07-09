# Базовый образ для сборки (общий для всех стадий)
FROM node:20-alpine AS base

WORKDIR /app
COPY package*.json ./

# Стадия для разработки
FROM base AS development
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Стадия для сборки (builder)
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

# Стадия для production
FROM base AS production
RUN npm ci --only=production

COPY --from=builder /app/.next ./.next
RUN chown -R nextjs:nodejs .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
USER nextjs

EXPOSE 3000

CMD ["npm", "start"]