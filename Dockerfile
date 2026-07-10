FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (only package.json needed for caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Generate Prisma Client (needed before build for type-checking and runtime)
RUN npx prisma generate

# Build the application
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Standalone output already contains a minimal server + traced node_modules
COPY --from=builder /app/.next/standalone ./

# Static assets and public files are NOT included in standalone by default
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Prisma schema + generated client (safety net in case tracing misses engine binaries)
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

EXPOSE 3000
CMD ["node", "server.js"]