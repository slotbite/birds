# Requirements Document - Bird Detail View Improvements

## Introduction

This document specifies improvements to the Bird Detail view page to enhance user experience and fix routing issues. The improvements include fixing 404 errors when reloading the detail page, reorganizing the audio button placement, renaming action buttons, adding new favorite and share functionality, and reorganizing all action buttons into a horizontal row at the bottom of the page.

## Glossary

- **Bird Detail View**: The page displaying comprehensive information about a specific bird species
- **Binocular Mode**: A visual effect that creates a binocular-like viewing experience for the bird image
- **Sighting**: A user-recorded observation of a bird in the wild
- **Logbook (Bitácora)**: The page where users can view their recorded bird sightings
- **Favorite (Favorito)**: A heart icon button to mark a bird as a favorite
- **Share (Compartir)**: A button that generates and exports a screenshot of the current bird detail view
- **Action Buttons**: Interactive buttons at the bottom of the page for user interactions (Logbook, Favorite, Sighting, Share)

## Requirements

### Requirement 1

**User Story:** As a user, I want the bird detail page to load correctly when I reload the page or share a direct link, so that I can access bird information without encountering 404 errors.

#### Acceptance Criteria

1. WHEN a user navigates directly to a bird detail URL (e.g., `/birds/ave/46-lophonetta-specularioides`) THEN the system SHALL load the bird data and display the detail page without errors
2. WHEN a user reloads the bird detail page THEN the system SHALL maintain the current bird context and display all information correctly
3. WHEN a user shares a direct link to a bird detail page THEN the system SHALL resolve the bird ID from the URL and load the correct bird data
4. IF a bird ID cannot be resolved THEN the system SHALL display a user-friendly error message or redirect to the home page

### Requirement 2

**User Story:** As a user, I want the audio control button to be positioned within the bird information section on the right side, so that it's more integrated with the detail content.

#### Acceptance Criteria

1. WHEN the bird detail page loads and audio is available THEN the system SHALL display the audio control button within the right-side information panel
2. WHEN the audio button is clicked THEN the system SHALL play or pause the bird's audio correctly
3. WHILE audio is playing THEN the system SHALL display a pause icon on the button
4. WHEN audio is not playing THEN the system SHALL display a play icon on the button

### Requirement 3

**User Story:** As a user, I want action buttons to be clearly labeled and organized, so that I understand what each button does and can easily access all features.

#### Acceptance Criteria

1. WHEN the bird detail page loads THEN the system SHALL display four action buttons in a horizontal row at the bottom: Bitácora, Favorito, Avistamiento, and Compartir
2. WHEN a user clicks the "Bitácora" button THEN the system SHALL navigate to the logbook page
3. WHEN a user clicks the "Avistamiento" button THEN the system SHALL open the add sighting modal
4. WHEN a user clicks the "Favorito" button THEN the system SHALL toggle the favorite status for the current bird
5. WHEN a user clicks the "Compartir" button THEN the system SHALL generate a screenshot of the bird detail view and provide download/share options

### Requirement 4

**User Story:** As a user, I want to mark birds as favorites, so that I can keep track of birds I'm interested in.

#### Acceptance Criteria

1. WHEN a user clicks the favorite button THEN the system SHALL toggle the favorite status for the current bird
2. WHEN a bird is marked as favorite THEN the system SHALL display a filled heart icon
3. WHEN a bird is not marked as favorite THEN the system SHALL display an empty heart icon
4. WHEN a bird is marked as favorite THEN the system SHALL persist this preference to local storage
5. WHEN the page reloads THEN the system SHALL restore the favorite status from local storage

### Requirement 5

**User Story:** As a user, I want to share bird information with others, so that I can easily export or save bird details.

#### Acceptance Criteria

1. WHEN a user clicks the share button THEN the system SHALL capture the visible content (binocular view and detail information) excluding the action buttons
2. WHEN a screenshot is captured THEN the system SHALL provide options to download or copy the image
3. WHEN a user downloads the screenshot THEN the system SHALL save the image with a descriptive filename (e.g., "Chucao-sceorchilus-rubecula.png")
4. WHEN a screenshot is captured THEN the system SHALL include the bird image, name, scientific name, and detail information visible in the view
