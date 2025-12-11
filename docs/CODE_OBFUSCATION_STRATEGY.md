# 🔐 Estrategia de Ofuscación de Código

## 📋 Resumen

Implementación de **Opción 4 + 1**: Repositorio privado para desarrollo + Ofuscación en build + Publicación en repo público.

## 🎯 Arquitectura

```
GitHub:
├── birds-private (PRIVADO - Tu desarrollo)
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── (código fuente completo y legible)
│
└── birds (PÚBLICO - Solo build ofuscado)
    ├── dist/
    ├── README.md
    ├── LICENSE
    └── (código ofuscado + minificado)
```

## 🔧 Configuración Implementada

### 1. Ofuscación en Vite

**Archivo**: `vite.config.js`

```javascript
import obfuscatorPlugin from 'vite-plugin-obfuscator'

export default defineConfig({
  plugins: [
    react(),
    obfuscatorPlugin({
      include: ['src/**/*.js', 'src/**/*.jsx'],
      options: {
        compact: true,
        identifierNamesGenerator: 'hexadecimal',
        stringArray: true,
        stringArrayThreshold: 0.75,
        rotateStringArray: true
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: false },
      mangle: true,
      output: { comments: false }
    }
  }
})
```

### 2. Dependencia Agregada

**En package.json**:
```json
"vite-plugin-obfuscator": "^0.0.6"
```

### 3. Workflow Automático

**Archivo**: `.github/workflows/deploy.yml`

El workflow actual ya:
- ✅ Instala dependencias
- ✅ Ejecuta build (con ofuscación)
- ✅ Publica en GitHub Pages

## 📝 Pasos para Implementar

### Paso 1: Crear Repo Privado

```bash
# En GitHub:
1. Crea nuevo repositorio "birds-private"
2. Marca como PRIVADO
3. Clona localmente
```

### Paso 2: Migrar Código

```bash
# Copia todo el código actual a birds-private
cp -r src/ package.json vite.config.js ... birds-private/
cd birds-private
git add .
git commit -m "Initial commit: código fuente privado"
git push origin main
```

### Paso 3: Instalar Dependencias

```bash
cd birds-private
npm install
```

### Paso 4: Verificar Ofuscación

```bash
# Build local
npm run build

# Verifica que dist/ esté ofuscado
cat dist/assets/index-*.js | head -20
# Deberías ver código ofuscado (variables como _0x1a2b, etc.)
```

### Paso 5: Publicar en Repo Público

```bash
# Opción A: Manual
cp -r birds-private/dist/* birds/
cd birds
git add .
git commit -m "build: versión ofuscada"
git push

# Opción B: Automático (ver sección siguiente)
```

## 🤖 Automatización con GitHub Actions

### Crear Workflow de Publicación

**Archivo**: `.github/workflows/publish-obfuscated.yml`

```yaml
name: Build and Publish Obfuscated Code

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout private repo
        uses: actions/checkout@v4
        with:
          repository: tuuser/birds-private
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build with obfuscation
        run: npm run build

      - name: Checkout public repo
        uses: actions/checkout@v4
        with:
          repository: tuuser/birds
          token: ${{ secrets.GITHUB_TOKEN }}
          path: public-repo

      - name: Copy obfuscated build
        run: |
          rm -rf public-repo/dist
          cp -r dist public-repo/

      - name: Commit and push
        working-directory: public-repo
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add .
          git commit -m "build: versión ofuscada $(date +%Y-%m-%d)" || true
          git push
```

## 🔒 Niveles de Protección

### Nivel 1: Ofuscación Básica (Actual)
- ✅ Variables renombradas a hexadecimal
- ✅ Strings encriptados
- ✅ Código minificado
- ✅ Comentarios removidos
- **Protección**: Media (puede ser deofuscado con esfuerzo)

### Nivel 2: Ofuscación Avanzada (Opcional)
```javascript
options: {
  compact: true,
  controlFlowFlattening: true,      // Más complejo
  deadCodeInjection: true,           // Código falso
  debugProtection: true,             // Anti-debug
  selfDefending: true,               // Auto-protección
  stringArrayEncoding: 'base64',     // Encriptación
  unicodeEscapeSequence: true        // Unicode
}
```

### Nivel 3: Encriptación de Runtime (Máxima)
- Encriptar funciones críticas
- Desencriptar en runtime
- Máxima protección pero más lento

## 📊 Comparación

| Aspecto | Privado | Ofuscado | Ambos |
|---------|---------|----------|-------|
| Código fuente visible | ❌ | ✅ | ❌ |
| Fácil de debuggear | ✅ | ❌ | ✅ |
| Protección contra plagios | ✅ | ⚠️ | ✅✅ |
| Complejidad | Baja | Media | Alta |
| Mantenimiento | Fácil | Fácil | Medio |

## 🚀 Próximos Pasos

1. **Crear repo privado** `birds-private`
2. **Migrar código** a repo privado
3. **Instalar dependencias** (`npm install`)
4. **Probar build** (`npm run build`)
5. **Verificar ofuscación** en `dist/`
6. **Configurar workflow** automático (opcional)
7. **Publicar** en repo público

## ⚠️ Consideraciones

- **Debugging**: Más difícil en producción (considera source maps privados)
- **Performance**: Ofuscación agrega ~5-10% al tiempo de build
- **Tamaño**: Puede aumentar ligeramente el tamaño del bundle
- **Mantenimiento**: Necesitas 2 repos (pero es manejable)

## 📚 Recursos

- [javascript-obfuscator.com](https://obfuscator.io/)
- [vite-plugin-obfuscator](https://github.com/kuoruan/vite-plugin-obfuscator)
- [Terser Documentation](https://terser.org/)

## 🎯 Resultado Final

✅ Código fuente protegido (privado)
✅ Código ofuscado en producción
✅ Repo público para usuarios
✅ Automatización con GitHub Actions
✅ Máxima protección contra plagios
