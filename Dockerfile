# Base image
FROM node:24-alpine AS base

# Enable pnpm
RUN corepack enable

# Working directory
WORKDIR /app

# Copy files
COPY . .

# Install dependencies
RUN pnpm install

# Build turbo apps
RUN pnpm turbo build

# Production stage
FROM node:24-alpine AS runner

RUN corepack enable

WORKDIR /app

COPY --from=base /app .

EXPOSE 3000

CMD ["pnpm", "--filter", "web", "start"]