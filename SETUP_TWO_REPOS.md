# 🔐 Setup Opción 2: Dos Repositorios con Automatización

## 📋 Resumen

Configuración de máxima protección:
- **birds-private** (PRIVADO): Tu código fuente completo
- **birds** (PÚBLICO): Solo build ofuscado + automatización

## 🎯 Arquitectura Final

```
GitHub:
├── birds-private (PRIVADO)
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   ├── .github/workflows/
│   └── (código fuente legible)
│
└── birds (PÚBLICO)
    ├── dist/
    ├── README.md
    ├── LICENSE
    ├── .github/workflows/publish-obfuscated.yml
    └── (solo build ofuscado)
```

## 🚀 Paso a Paso

### Paso 1: Crear Repo Privado en GitHub

```bash
# En GitHub.com:
1. Click en "+" → "New repository"
2. Nombre: "birds-private"
3. Descripción: "Private source code for Birds App"
4. Selecciona: PRIVATE
5. Click "Create repository"
```

### Paso 2: Clonar Repo Privado Localmente

```bash
# En tu terminal
git clone https://github.com/tuuser/birds-private.git
cd birds-private
```

### Paso 3: Copiar Código Fuente

```bash
# Desde el directorio birds-private
# Copia TODOS los archivos de desarrollo

# Opción A: Copiar desde el repo actual
cp -r ../birds/src .
cp ../birds/package.json .
cp ../birds/package-lock.json .
cp ../birds/vite.config.js .
cp ../birds/vitest.config.js .
cp ../birds/vitest.setup.js .
cp ../birds/eslint.config.js .
cp ../birds/postcss.config.js .
cp ../birds/index.html .
cp ../birds/.gitignore .
cp ../birds/README.md .
cp ../birds/LICENSE .
cp -r ../birds/public .
cp -r ../birds/.kiro .
cp -r ../birds/docs .

# Opción B: Usar git (si ya tienes el repo)
# Copia manualmente los archivos importantes
```

### Paso 4: Crear .gitignore Apropiado

```bash
# En birds-private/.gitignore
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.vscode/
.idea/
```

### Paso 5: Commit Inicial

```bash
cd birds-private
git add .
git commit -m "Initial commit: private source code"
git push origin main
```

### Paso 6: Instalar Dependencias

```bash
npm install
```

### Paso 7: Probar Build Local

```bash
# Verificar que todo funciona
npm run build

# Verificar ofuscación
cat dist/assets/index-*.js | head -30
# Deberías ver código ofuscado como: var _0x1a2b=['...']
```

### Paso 8: Configurar Workflow en birds-private

```bash
# Crear directorio de workflows
mkdir -p .github/workflows

# Crear archivo de workflow
cat > .github/workflows/publish.yml << 'EOF'
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
          # Clonar repo público
          git clone https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/tuuser/birds.git public-repo
          
          # Copiar build
          rm -rf public-repo/dist
          cp -r dist public-repo/
          
          # Commit y push
          cd public-repo
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add dist/
          git commit -m "build: obfuscated build $(date +%Y-%m-%d)" || true
          git push
EOF

git add .github/workflows/publish.yml
git commit -m "feat: agregar workflow de publicación"
git push
```

### Paso 9: Configurar Permisos en GitHub

```bash
# En GitHub.com - birds-private:
1. Settings → Actions → General
2. Workflow permissions: "Read and write permissions"
3. Allow GitHub Actions to create and approve pull requests: ✓
```

### Paso 10: Actualizar Repo Público (birds)

```bash
# En el repo birds actual
# Reemplazar deploy.yml con publish-obfuscated.yml

# El workflow ya está en .github/workflows/publish-obfuscated.yml
# Solo necesitas hacer push
git add .github/workflows/publish-obfuscated.yml
git commit -m "feat: workflow de publicación automática"
git push
```

## 🔄 Flujo de Trabajo Diario

### Desarrollo

```bash
# En birds-private
cd birds-private
git pull origin main

# Hacer cambios
# ... editar código ...

# Commit
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# ↓ GitHub Actions automáticamente:
# 1. Instala dependencias
# 2. Ejecuta build con ofuscación
# 3. Publica en birds (repo público)
```

### Verificar Publicación

```bash
# Ver que se publicó en birds
cd ../birds
git pull origin main
ls -la dist/

# Verificar que está ofuscado
cat dist/assets/index-*.js | head -20
```

## 🧪 Verificación

### Verificar Ofuscación

```bash
# En birds-private
npm run build

# Comparar código
echo "=== ORIGINAL (src) ==="
head -20 src/App.jsx

echo "=== OFUSCADO (dist) ==="
head -20 dist/assets/index-*.js
```

### Verificar Workflow

```bash
# En GitHub.com - birds-private:
1. Click en "Actions"
2. Deberías ver "Publish Obfuscated Build"
3. Click para ver logs
```

## 📊 Estructura Final

```
birds-private/ (PRIVADO)
├── src/
├── public/
├── docs/
├── .github/workflows/publish.yml
├── package.json
├── vite.config.js
├── README.md
└── LICENSE

birds/ (PÚBLICO)
├── dist/
├── .github/workflows/publish-obfuscated.yml
├── README.md
├── LICENSE
└── (sin código fuente)
```

## ✅ Checklist

- [ ] Crear repo birds-private en GitHub
- [ ] Clonar birds-private localmente
- [ ] Copiar código fuente a birds-private
- [ ] Instalar dependencias: `npm install`
- [ ] Probar build: `npm run build`
- [ ] Verificar ofuscación en dist/
- [ ] Crear workflow en birds-private
- [ ] Commit y push a birds-private
- [ ] Verificar que GitHub Actions se ejecute
- [ ] Verificar que dist/ se publique en birds
- [ ] Verificar que birds/dist/ esté ofuscado

## 🎉 Resultado

✅ Código fuente privado y seguro
✅ Build ofuscado publicado automáticamente
✅ Máxima protección contra plagios
✅ Workflow completamente automatizado
✅ Fácil de mantener

## 🔐 Seguridad

- ✅ Código fuente: PRIVADO (solo tú lo ves)
- ✅ Build: OFUSCADO (imposible de leer)
- ✅ Repo público: SIN código fuente (solo build)
- ✅ Automatización: GitHub Actions (seguro)

## 📝 Notas

- El workflow se ejecuta automáticamente en cada push a birds-private
- El build ofuscado se publica en birds automáticamente
- Puedes hacer push manual si es necesario
- Los logs del workflow son privados (en birds-private)

## 🆘 Troubleshooting

### El workflow no se ejecuta
```bash
# Verificar permisos en GitHub
Settings → Actions → General
→ Workflow permissions: "Read and write permissions"
```

### El build no se publica
```bash
# Verificar token de GitHub
# El token debe tener permisos de escritura en ambos repos
```

### El código no está ofuscado
```bash
# Verificar vite.config.js
# Asegúrate que obfuscatorPlugin esté configurado
npm run build
cat dist/assets/index-*.js | grep "_0x"
```

## 🚀 Próximos Pasos

1. Crear repo birds-private
2. Migrar código
3. Configurar workflow
4. Hacer primer push
5. Verificar automatización
6. ¡Listo! Código protegido

¿Necesitas ayuda con algún paso?
