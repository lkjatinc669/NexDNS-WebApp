# Use Alpine as base image
FROM alpine:3.21

# Set Node version environment variable
ENV NODE_VERSION 22.15.0

# Install dependencies and build tools
RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node \
    && apk add --no-cache \
    libstdc++ \
    && apk add --no-cache --virtual .build-deps \
    curl \
    && ARCH=x64 OPENSSL_ARCH='linux*' && alpineArch="$(apk --print-arch)" \
    && case "${alpineArch##*-}" in \
    x86_64) ARCH='x64' CHECKSUM="60198941802e88659bb3b30b9a45b694b1c695cf33c1ef58863f854996d11d5d" OPENSSL_ARCH=linux-x86_64;; \
    x86) OPENSSL_ARCH=linux-elf;; \
    aarch64) OPENSSL_ARCH=linux-aarch64;; \
    arm*) OPENSSL_ARCH=linux-armv4;; \
    ppc64le) OPENSSL_ARCH=linux-ppc64le;; \
    s390x) OPENSSL_ARCH=linux-s390x;; \
    *) ;; \
    esac \
    && curl -fsSLO --compressed "https://unofficial-builds.nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" \
    && echo "$CHECKSUM  node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" | sha256sum -c - \
    && tar -xJf "node-v$NODE_VERSION-linux-$ARCH-musl.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
    && apk del .build-deps

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose the backend API port
EXPOSE 5000

# Start the API server
CMD ["npm", "start"]
