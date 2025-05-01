# Build step
FROM alpine:3.21 AS builder

ENV NODE_VERSION=22.15.0
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Nginx serve step
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
