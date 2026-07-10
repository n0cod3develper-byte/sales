FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (only package.json needed for caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .
# Build the application
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy only the necessary files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/.next/standalone .

EXPOSE 3000
CMD ["node", "server.js"]
