FROM node:20.18.0-slim

# Set environment
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=2048

WORKDIR /app

# Copy and install only dependencies first (better caching)
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Build your React/Vite app
RUN npm run build

# Serve with nginx
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
