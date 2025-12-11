# Mejoras Pendientes - Aves de Chile

## 🎯 Project Status: Stage 1 - Core Features (In Progress)
**Bird Detail Improvements: ✅ COMPLETE** - All 25 tests passing, all requirements met
**ActionButtonsBar Tests: ✅ REFACTORED** - Removed obsolete favorite button tests, now 3 focused tests

---

## ✅ Completed Features (Stage 1)

### Core Functionality
- [x] Centralizar nombre de la app en configuración
- [x] Guardar preferencia de vista binocular en localStorage
- [x] Sistema de favoritos con persistencia en localStorage
- [x] Captura y descarga de screenshots
  - ✅ Opción 1: Detalle + Imagen (Canvas API nativa)
  - ✅ Opción 2: Solo Imagen (descarga directa)
  - ✅ Resuelto problema oklab() sin html2canvas
- [x] Reorganización de botones de acción (horizontal bar at bottom)
- [x] Audio button integrado en panel de información
- [x] Routing fix para acceso directo a URLs de aves
- [x] Error handling para bird IDs inválidos

### Testing & Quality
- [x] Property-based tests para todas las características (25 tests, 100% passing)
- [x] Unit tests para favoritos, audio, screenshots, y error handling
- [x] ActionButtonsBar component con tests completos (3 focused tests)
  - ✅ Horizontal layout with 3 buttons (Bitácora, Avistamiento, Compartir)
  - ✅ Share button disabled during capture
  - ✅ Dropdown menu with composite and image-only options
- [x] BirdDetail component refactored y testeado
- [x] Favorite button moved to BirdDetail header (inline with bird name)

---

## 📋 Next Priority Tasks (Stage 1 Continuation)

### Logbook Implementation (High Priority)
- [ ] Implementar vista de avistamientos (Logbook page)
  - [ ] Modal para añadir avistamiento desde BirdDetail
  - [ ] Capturar ubicación GPS del usuario
  - [ ] Guardar en localStorage con timestamp
  - [ ] Mostrar lista de avistamientos en Logbook
  - [ ] Integración con mapa (Leaflet)
  - [ ] Tooltip/popup con información del avistamiento
  - [ ] Tests para useSightingStore hook

### UI/UX Refinements (Medium Priority)
- [ ] Refinar paleta de colores dinámica en BirdDetail
  - [ ] Mejorar algoritmo de extracción de colores
  - [ ] Crear degradado más elegante y luxury
  - [ ] Evitar efecto "PowerPoint"
  - [ ] Usar diseño minimalista y sofisticado
- [ ] Mejorar responsive design en mobile
- [ ] Optimizar animaciones para performance

### Configuration Page (Medium Priority)
- [ ] Página de configuración (/config)
  - [ ] Toggle modo oscuro/claro
  - [ ] Control de volumen
  - [ ] Opción de borrar datos
  - [ ] Tipo de mapa (satélite/calles)
  - [ ] Tests para configuración

---

## 🚀 Future Stages

### Stage 2: Cloud Synchronization
- [ ] Migración a Supabase para persistencia en la nube
- [ ] Sincronización de avistamientos entre dispositivos
- [ ] Google Drive integration para backups
- [ ] Autenticación de usuarios

### Stage 3: Database & Infrastructure
- [ ] Database enhancement con AI assistance
- [ ] CI/CD pipeline setup (GitHub Actions)
- [ ] Monitoring con Sentry
- [ ] Performance analytics

### Stage 4: PWA & Performance
- [ ] Service Worker con Workbox
- [ ] manifest.json
- [ ] Iconos para diferentes tamaños
- [ ] Capacidad offline
- [ ] Lazy loading de imágenes
- [ ] Code splitting por rutas
- [ ] Optimizar bundle size

### Stage 5: Mobile & Monetization
- [ ] Mobile app development (React Native)
- [ ] App store publication
- [ ] Donation support integration
- [ ] Premium features

---

## 🔍 Code Quality Notes

### Recent Fixes
- **React downgraded to v18.3.1** for testing library compatibility
- Resolved CI/CD pipeline dependency conflicts
- Fixed JSX closing tag issue in BirdDetail.jsx
- Removed unused React import
- Removed unused props from ActionButtonsBar (onFavorite, isFavorite)
- All components now pass ESLint checks
- Screenshot capture handles oklab() colors correctly

### Test Coverage
- **Total Tests**: 25 (all passing)
- **Test Files**: 6
- **Property-Based Tests**: 7 correctness properties validated
- **Coverage Areas**: Routing, Favorites, Screenshots, Audio, Error Handling, UI Layout

### Performance Considerations
- Audio auto-plays with 500ms delay to ensure loading
- Screenshot capture uses cloned elements to avoid DOM mutations
- Color extraction runs on image load
- Binocular mode uses SVG masks for efficient rendering
