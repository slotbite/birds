# Design Document - Bird Detail View Improvements

## Overview

This design document outlines the technical implementation strategy for improving the Bird Detail view page. The improvements address routing issues, reorganize UI components, and add new functionality for favorites and sharing. The solution maintains the existing visual design while enhancing usability and functionality.

## Architecture

### Current Architecture
- **Frontend Framework**: React 19 with React Router v7
- **State Management**: Zustand for bird data store
- **Styling**: Tailwind CSS with custom color system
- **Animation**: Framer Motion
- **Base URL**: `/birds/` (GitHub Pages deployment)

### Routing Strategy
The application uses React Router with a basename of `/birds/`. The bird detail route is `/ave/:id` where `:id` is the bird's unique identifier (uid) from the birds data.

**Issue**: When users reload or share direct links to bird detail pages, the page may show a 404 because the bird data needs to be loaded from the store before the component can render.

**Solution**: 
1. Ensure bird data is loaded before component renders
2. Use the `uid` parameter to find the bird in the store
3. Implement fallback handling for invalid bird IDs
4. Persist bird context across page reloads

## Components and Interfaces

### Modified Components

#### 1. BirdDetail.jsx (Main Component)
**Responsibilities**:
- Load bird data from store using URL parameter
- Render binocular view with bird image
- Display bird information in detail cards
- Manage audio playback state
- Render action buttons in horizontal layout
- Handle favorite status
- Trigger screenshot capture for sharing

**Key Changes**:
- Move audio button from top-right to information panel
- Reorganize action buttons into horizontal row at bottom
- Add favorite button with heart icon
- Add share button with screenshot functionality
- Fix routing to handle direct URL access

#### 2. New Hook: useFavorites.js
**Purpose**: Manage favorite bird status with local storage persistence

**Interface**:
```javascript
const { isFavorite, toggleFavorite } = useFavorites(birdId);
```

**Responsibilities**:
- Load favorite status from local storage
- Toggle favorite status
- Persist changes to local storage
- Return current favorite state

#### 3. New Hook: useScreenCapture.js
**Purpose**: Capture and export screenshot of bird detail view

**Interface**:
```javascript
const { captureScreenshot, isCapturing } = useScreenCapture();
```

**Responsibilities**:
- Capture visible content (binocular view + details)
- Exclude action buttons from capture
- Generate downloadable image
- Provide copy-to-clipboard option
- Handle filename generation

#### 4. New Component: ActionButtonsBar.jsx
**Purpose**: Render horizontal action buttons at bottom of page

**Props**:
```javascript
{
  onLogbook: () => void,
  onFavorite: () => void,
  onAddSighting: () => void,
  onShare: () => void,
  isFavorite: boolean,
  isCapturing: boolean
}
```

**Responsibilities**:
- Display four buttons in horizontal row
- Show filled/empty heart based on favorite status
- Disable share button while capturing
- Handle button click events

## Data Models

### Bird Data Structure
```javascript
{
  uid: string,              // Unique identifier (e.g., "46-lophonetta-specularioides")
  name: {
    spanish: string,
    english: string,
    latin: string
  },
  images: {
    main: string,           // URL for main display
    full: string,           // URL for full resolution
    thumb: string           // URL for thumbnail
  },
  _links: {
    self: string,
    parent: string
  },
  sort: number
}
```

### Favorite Status (Local Storage)
```javascript
{
  favorites: [
    "46-lophonetta-specularioides",
    "76-buteo-albigula",
    // ... more bird UIDs
  ]
}
```

### Screenshot Capture Target
The capture will include:
- Binocular view container (65vh height)
- Detail information section (remaining height)
- Excludes: action buttons, navigation buttons

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Direct URL Access Resolution
*For any* valid bird UID in the URL, the system should load and display the correct bird data without 404 errors, and the bird information should be fully rendered.

**Validates: Requirements 1.1, 1.2, 1.3**

### Property 2: Favorite Status Persistence Round Trip
*For any* bird, marking it as favorite, reloading the page, and checking the favorite status should result in the same favorite state being restored from local storage.

**Validates: Requirements 4.4, 4.5**

### Property 3: Favorite Status UI Reflection
*For any* bird, when the favorite status is toggled, the heart icon should display as filled when the bird is marked as favorite and empty when it is not marked as favorite.

**Validates: Requirements 4.1, 4.2, 4.3**

### Property 4: Screenshot Capture Content Inclusion
*For any* bird detail view, capturing a screenshot should include the bird image, bird name, scientific name, and detail information, while excluding the action buttons at the bottom.

**Validates: Requirements 5.1, 5.4**

### Property 5: Screenshot Filename Validity
*For any* bird, the generated screenshot filename should include the bird's Spanish name and scientific name in a valid filename format (no invalid characters).

**Validates: Requirements 5.3**

### Property 6: Audio Button State Consistency
*For any* bird with available audio, the audio button should display a pause icon when audio is playing and a play icon when audio is not playing, and clicking the button should toggle the audio playback state.

**Validates: Requirements 2.1, 2.2, 2.3, 2.4**

### Property 7: Action Buttons Horizontal Layout
*For any* bird detail view, all four action buttons (Bitácora, Favorito, Avistamiento, Compartir) should be rendered and displayed in a horizontal row at the bottom of the page.

**Validates: Requirements 3.1**

## Error Handling

### Routing Errors
- **Invalid Bird ID**: Display user-friendly message and provide link to home page
- **Missing Bird Data**: Redirect to home page with notification
- **Network Issues**: Show loading state with retry option

### Screenshot Capture Errors
- **Browser Compatibility**: Fallback to alternative capture method or show error message
- **Permission Denied**: Inform user and suggest alternative sharing methods
- **Large Content**: Handle oversized captures gracefully

### Local Storage Errors
- **Storage Full**: Gracefully handle quota exceeded errors
- **Private Browsing**: Detect and inform user that favorites won't persist
- **Corrupted Data**: Validate and recover from corrupted favorite data

## Testing Strategy

### Unit Tests
- Test favorite toggle functionality with various bird IDs
- Test filename generation for different bird names
- Test local storage persistence and recovery
- Test URL parameter parsing and bird lookup
- Test audio button state management

### Property-Based Tests
- **Property 1**: Generate random valid bird UIDs and verify correct bird loads
- **Property 2**: Generate random favorite toggle sequences and verify persistence
- **Property 3**: Generate random favorite states and verify UI reflects correct state
- **Property 4**: Generate random bird detail views and verify screenshot includes required content
- **Property 5**: Generate random bird names and verify filename validity
- **Property 6**: Generate random audio states and verify button displays correct icon
- **Property 7**: Verify action buttons are always rendered in correct horizontal layout

### Testing Framework
- **Unit Tests**: Vitest with React Testing Library
- **Property-Based Tests**: fast-check for JavaScript
- **Minimum Iterations**: 20 iterations per property test

### Test Configuration
Each property-based test should:
- Run minimum 20 iterations
- Include comment referencing the correctness property
- Use format: `**Feature: bird-detail-improvements, Property {number}: {property_text}**`
- Generate realistic test data using appropriate generators
