# Implementation Plan - Aves de Chile: Guía de avistamientos

**Goal**: Build a premium, relaxing SPA/PWA for birdwatching in Chile using React, Vite, and Tailwind CSS. The app will focus on visual well-being ("Guía Relajante") and functional utility for ornithology enthusiasts.

## User Review Required
> [!IMPORTANT]
> **Legacy Files**: I plan to move the current `index.html`, `script.js`, `style.css` and `New UI-UX` folder into a `_legacy` directory to keep the root clean for the new Vite project.
> **Database**: Validated PouchDB for Phase 1 local storage.

## Proposed Changes

### Project Structure
#### [NEW] [Project Root]
- Initialize Vite Project (React + Javascript/Typescript - *recommending TypeScript for maintainability, but can do JS if preferred. Defaulting to JS/SWC as per implied stack simplicity unless requested otherwise*).
- Install Dependencies:
    - `react-router-dom` (Routing)
    - `zustand` (State)
    - `tailwindcss`, `postcss`, `autoprefixer` (Styling)
    - `framer-motion` (Animations)
    - `howler` (Audio)
    - `fuse.js` (Search)
    - `react-leaflet`, `leaflet` (Maps)
    - `pouchdb` (Local DB)
    - `clsx`, `tailwind-merge` (Utils)

#### [MODIFY] [File Organization]
- Move existing `index.html`, `style.css`, `script.js`, `New UI-UX/` -> `_legacy/`

### Features & Components

#### 1. Home / Search (`/`)
- **Layout**: Full screen flexible layout.
- **Components**:
    - `HeroSearch`: Large search bar, Fuse.js integration. Background: "Paisaje chileno difuminado".
    - `BirdGrid`: Responsive grid showing **6 columns** on desktop.
    - `BirdCard`: Rounded corners, **medium/small images** initially for performance. Hover: Play/stop audio control.

#### 2. Bird Details (`/ave/:id`)
- **Visuals**: "Binocular Effect" or "Professional Photographer Focus" (Depth of field effect).
- **Interactions**: **Click on bird image triggers 2x Zoom**.
- **Content**: Scrollable bottom section with details (Tamaño, Hábitat, etc.).
- **Audio**: Continued playback or distinct control.

#### 3. Logbook & Map (`/bitacora`)
- **Map**: Fullscreen Leaflet map. **Layers control: Satellite vs Standard Map**.
- **Location**: **"Use Current Location" (GPS) button**.
- **Data**: Markers from PouchDB. **Each marker stores the Bird ID.**
- **Interaction**: **Clicking a marker navigates to the Bird Detail view (`/ave/:id`)**. Add sighting modal.

#### 4. Design System (Tailwind)
- **Colors**: Natural palette (Greens, Earth tones, Slate blues).
- **Typography**: Sans-serif modern (Inter/Outfit).
- **Animations**: Page transitions with Framer Motion.

## Verification Plan

### Automated Tests
- Build verification (`npm run build`).
- Lint check.

### Manual Verification
- **Home**: Verify search filters birds correctly. Verify audio loops on hover.
- **Detail**: Verify "Binocular" visual effect works on Desktop/Mobile.
- **Map**: Verify adding a marker saves to PouchDB and persists on reload.
- **PWA**: Verify installability (manifest check).
