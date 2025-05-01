FROM node:20.18.0-slim

ENV NODE_ENV=production
ENV NODE_OPTIONS=--max-old-space-size=2048

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "start"]
