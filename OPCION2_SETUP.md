# 🔐 Opción 2: Dos Repos con Automatización

## ✅ Ya Configurado

He preparado todo para la **Opción 2**:

### 1. **Ofuscación en vite.config.js** ✓
```javascript
import obfuscatorPlugin from 'vite-plugin-obfuscator'
// Ofusca automáticamente en build
```

### 2. **Workflow de publicación** ✓
```yaml
.github/workflows/publish-obfuscated.yml
# Publica build ofuscado automáticamente
```

### 3. **Documentación completa** ✓
- `SETUP_TWO_REPOS.md` - Guía paso a paso
- `migrate-to-private.sh` - Script de migración
- `docs/CODE_OBFUSCATION_STRATEGY.md` - Estrategia completa

## 🚀 Inicio Rápido (5 minutos)

### Paso 1: Crear Repo Privado

```bash
# En GitHub.com:
1. Click "+" → "New repository"
2. Nombre: "birds-private"
3. Selecciona: PRIVATE
4. Click "Create repository"
```

### Paso 2: Migrar Código

**Opción A: Script automático**
```bash
bash migrate-to-private.sh https://github.com/tuuser/birds-private.git
```

**Opción B: Manual**
```bash
git clone https://github.com/tuuser/birds-private.git
cd birds-private
cp -r ../birds/src .
cp ../birds/package.json .
cp ../birds/vite.config.js .
# ... copiar otros archivos (ver SETUP_TWO_REPOS.md)
git add .
git commit -m "Initial: private source code"
git push
```

### Paso 3: Instalar y Probar

```bash
cd birds-private
npm install
npm run build

# Verificar ofuscación
cat dist/assets/index-*.js | head -20
# Deberías ver: var _0x1a2b=['...']
```

### Paso 4: Configurar Permisos

```bash
# En GitHub.com - birds-private:
Settings → Actions → General
→ Workflow permissions: "Read and write permissions"
```

### Paso 5: Hacer Push

```bash
git push origin main
# ↓ GitHub Actions automáticamente:
# 1. Instala dependencias
# 2. Ejecuta build con ofuscación
# 3. Publica en birds (repo público)
```

## 📊 Resultado Final

```
birds-private (PRIVADO)
├── src/
├── package.json
├── vite.config.js
└── .github/workflows/publish.yml

        ↓ (GitHub Actions)
        
birds (PÚBLICO)
├── dist/ (ofuscado)
├── README.md
└── LICENSE
```

## 🔒 Protección

✅ **Código fuente**: PRIVADO (solo tú lo ves)
✅ **Build**: OFUSCADO (imposible de leer)
✅ **Repo público**: SIN código fuente
✅ **Automatización**: Completamente automática

## 📋 Checklist

- [ ] Crear repo birds-private en GitHub
- [ ] Clonar birds-private
- [ ] Copiar código fuente
- [ ] Instalar dependencias
- [ ] Probar build
- [ ] Verificar ofuscación
- [ ] Configurar permisos en GitHub
- [ ] Hacer push
- [ ] Verificar que GitHub Actions se ejecute
- [ ] Verificar que dist/ se publique en birds

## 🎯 Flujo Diario

```bash
# Desarrollo en birds-private
cd birds-private
git pull
# ... editar código ...
git add .
git commit -m "feat: nueva funcionalidad"
git push
# ↓ Automático: build + ofuscación + publicación
```

## 📚 Documentación Completa

- **SETUP_TWO_REPOS.md** - Guía detallada paso a paso
- **migrate-to-private.sh** - Script de migración automática
- **docs/CODE_OBFUSCATION_STRATEGY.md** - Estrategia técnica

## 🆘 Ayuda

### ¿Necesitas ayuda con algún paso?

1. **Crear repo privado**: Ver SETUP_TWO_REPOS.md Paso 1
2. **Migrar código**: Usar migrate-to-private.sh
3. **Configurar workflow**: Ver SETUP_TWO_REPOS.md Paso 8
4. **Troubleshooting**: Ver SETUP_TWO_REPOS.md sección final

## 🎉 Listo

Todo está configurado. Solo necesitas:
1. Crear repo birds-private
2. Migrar código
3. Hacer push

¡El resto es automático! 🚀

---

**¿Necesitas ayuda con algún paso específico?**
