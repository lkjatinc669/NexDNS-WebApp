FROM alpine:3.21
ENV NODE_VERSION=22.15.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "start"]
