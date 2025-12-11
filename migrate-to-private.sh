#!/bin/bash

# Script para migrar código a repo privado
# Uso: bash migrate-to-private.sh <url-repo-privado>

set -e

if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar la URL del repo privado"
    echo "Uso: bash migrate-to-private.sh https://github.com/tuuser/birds-private.git"
    exit 1
fi

PRIVATE_REPO="$1"
CURRENT_DIR=$(pwd)
TEMP_DIR="/tmp/birds-private-migration"

echo "🚀 Iniciando migración a repo privado..."
echo "📍 Repo privado: $PRIVATE_REPO"

# Crear directorio temporal
mkdir -p "$TEMP_DIR"
cd "$TEMP_DIR"

# Clonar repo privado
echo "📥 Clonando repo privado..."
git clone "$PRIVATE_REPO" .

# Copiar archivos del repo actual
echo "📋 Copiando archivos de desarrollo..."
cp -r "$CURRENT_DIR/src" .
cp "$CURRENT_DIR/package.json" .
cp "$CURRENT_DIR/package-lock.json" .
cp "$CURRENT_DIR/vite.config.js" .
cp "$CURRENT_DIR/vitest.config.js" .
cp "$CURRENT_DIR/vitest.setup.js" .
cp "$CURRENT_DIR/eslint.config.js" .
cp "$CURRENT_DIR/postcss.config.js" .
cp "$CURRENT_DIR/index.html" .
cp "$CURRENT_DIR/.gitignore" .
cp "$CURRENT_DIR/README.md" .
cp "$CURRENT_DIR/LICENSE" .
cp -r "$CURRENT_DIR/public" .
cp -r "$CURRENT_DIR/.kiro" . 2>/dev/null || true
cp -r "$CURRENT_DIR/docs" . 2>/dev/null || true

# Crear directorio de workflows
mkdir -p .github/workflows

# Crear workflow de publicación
cat > .github/workflows/publish.yml << 'WORKFLOW'
name: Publish Obfuscated Build

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build with obfuscation
        run: npm run build

      - name: Upload to public repo
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          git clone https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository_owner }}/birds.git public-repo
          rm -rf public-repo/dist
          cp -r dist public-repo/
          cd public-repo
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add dist/
          git commit -m "build: obfuscated build $(date +%Y-%m-%d)" || true
          git push
WORKFLOW

# Commit
echo "💾 Haciendo commit..."
git add .
git commit -m "Initial commit: private source code with obfuscation setup"

# Push
echo "🚀 Haciendo push..."
git push origin main

echo ""
echo "✅ Migración completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. cd $TEMP_DIR"
echo "2. npm install"
echo "3. npm run build"
echo "4. Verificar que dist/ esté ofuscado"
echo ""
echo "🔐 Seguridad:"
echo "✓ Código fuente: PRIVADO (birds-private)"
echo "✓ Build: OFUSCADO (se publica en birds)"
echo "✓ Workflow: AUTOMÁTICO (en cada push)"
echo ""
echo "📍 Ubicación: $TEMP_DIR"
