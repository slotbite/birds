# Mejoras Pendientes - Aves de Chile

## Diseño y UI/UX
- [ ] Refinar paleta de colores dinámica en BirdDetail
  - Mejorar algoritmo de extracción de colores
  - Crear degradado más elegante y luxury
  - Evitar efecto "PowerPoint"
  - Usar diseño minimalista y sofisticado

## Funcionalidad
- [x] Centralizar nombre de la app en configuración
  - Nombre: "Aves de Chile - Guía de Avistamientos"
- [x] Guardar preferencia de vista binocular en localStorage
- [ ] Implementar vista de avistamientos (Logbook)
  - Modal para añadir avistamiento desde BirdDetail
  - Capturar ubicación GPS del usuario
  - Guardar en localStorage
  - Mostrar marcadores en mapa
  - Tooltip/popup con información del avistamiento

## Configuración
- [ ] Página de configuración (/config)
  - Toggle modo oscuro/claro
  - Control de volumen
  - Opción de borrar datos
  - Tipo de mapa (satélite/calles)

## PWA
- [ ] Implementar Service Worker con Workbox
- [ ] Crear manifest.json
- [ ] Iconos para diferentes tamaños
- [ ] Capacidad offline

## Optimización
- [ ] Lazy loading de imágenes
- [ ] Code splitting por rutas
- [ ] Optimizar bundle size
- [ ] Mejorar performance de extracción de colores

## Datos
- [ ] Considerar migración a Supabase para persistencia en la nube
- [ ] Sincronización de avistamientos entre dispositivos
