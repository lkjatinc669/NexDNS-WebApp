#!/bin/bash

set -e  # Exit immediately on error

echo "🛠️  Starting deployment..."

# --- Variables ---
FRONTEND_DIR=frontend
BACKEND_DIR=backend
TARGET_DIR=/var/www/nexdns-webapp

# --- Step 1: Build Frontend ---
echo "🚧 Building frontend..."
cd $FRONTEND_DIR
npm install
npm run build
cd ..

# --- Step 2: Copy Frontend Files ---
echo "📦 Deploying frontend to $TARGET_DIR/frontend..."
rm -rf $TARGET_DIR/frontend
mkdir -p $TARGET_DIR/frontend
cp -r $FRONTEND_DIR/dist/* $TARGET_DIR/frontend/

# --- Step 3: Deploy Backend ---
echo "🔁 Restarting backend server..."

# Option 1: PM2 (recommended)
cd $BACKEND_DIR
npm install
pm2 delete nexdns-backend || true
pm2 start src/index.js --name nexdns-backend
cd ..

# Option 2 (if not using PM2): use nohup or systemd
# nohup node backend/src/index.js &

echo "✅ Deployment finished successfully."
