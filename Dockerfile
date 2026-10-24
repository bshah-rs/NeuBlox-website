FROM node:24-slim AS build

WORKDIR /workspace
RUN corepack enable && corepack prepare pnpm@10.26.1 --activate

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm --filter @workspace/api-server run build

FROM node:24-slim AS runtime

ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /workspace/artifacts/api-server/dist ./dist

EXPOSE 8080
CMD ["node", "--enable-source-maps", "dist/index.mjs"]
