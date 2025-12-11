# Implementation Plan - Bird Detail View Improvements

- [x] 1. Fix routing and bird data loading


  - Ensure bird data is loaded from store before component renders
  - Implement fallback handling for invalid bird IDs
  - Test direct URL access with various bird UIDs
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 1.1 Write property test for direct URL access resolution


  - **Feature: bird-detail-improvements, Property 1: Direct URL Access Resolution**
  - **Validates: Requirements 1.1, 1.2, 1.3**



- [ ] 2. Create favorites management system
  - Create useFavorites hook for managing favorite status with local storage
  - Implement toggle functionality
  - Implement persistence to local storage

  - _Requirements: 4.1, 4.4, 4.5_

- [x] 2.1 Write property test for favorite status persistence round trip

  - **Feature: bird-detail-improvements, Property 2: Favorite Status Persistence Round Trip**
  - **Validates: Requirements 4.4, 4.5**



- [ ] 2.2 Write property test for favorite status UI reflection
  - **Feature: bird-detail-improvements, Property 3: Favorite Status UI Reflection**
  - **Validates: Requirements 4.1, 4.2, 4.3**

- [x] 3. Create screenshot capture functionality

  - Create useScreenCapture hook for capturing bird detail view
  - Implement screenshot generation excluding action buttons
  - Implement filename generation with bird name and scientific name

  - Implement download functionality
  - _Requirements: 5.1, 5.2, 5.3, 5.4_



- [ ] 3.1 Write property test for screenshot capture content inclusion
  - **Feature: bird-detail-improvements, Property 4: Screenshot Capture Content Inclusion**
  - **Validates: Requirements 5.1, 5.4**


- [ ] 3.2 Write property test for screenshot filename validity
  - **Feature: bird-detail-improvements, Property 5: Screenshot Filename Validity**


  - **Validates: Requirements 5.3**

- [ ] 4. Reorganize audio button placement
  - Move audio button from top-right corner to information panel
  - Integrate audio button with bird information display
  - Ensure audio button displays correct play/pause icon

  - _Requirements: 2.1, 2.2, 2.3, 2.4_



- [ ] 4.1 Write property test for audio button state consistency
  - **Feature: bird-detail-improvements, Property 6: Audio Button State Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4**

- [ ] 5. Create action buttons bar component
  - Create ActionButtonsBar component with four buttons (Bitácora, Favorito, Avistamiento, Compartir)


  - Implement horizontal layout at bottom of page

  - Integrate favorite button with useFavorites hook
  - Integrate share button with useScreenCapture hook
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 5.1 Write property test for action buttons horizontal layout
  - **Feature: bird-detail-improvements, Property 7: Action Buttons Horizontal Layout**
  - **Validates: Requirements 3.1**

- [ ] 6. Update BirdDetail component
  - Integrate useFavorites hook
  - Integrate useScreenCapture hook
  - Replace floating action buttons with ActionButtonsBar component
  - Move audio button to information panel
  - Update button labels (change "Añadir" to "Avistamiento")
  - _Requirements: 1.1, 2.1, 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 7. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Test error handling

  - Test invalid bird ID handling
  - Test 404 error display
  - Test redirect to home page on invalid ID
  - _Requirements: 1.4_

- [x] 8.1 Write unit tests for error handling

  - Test invalid bird ID scenarios
  - Test error message display
  - Test redirect functionality
  - _Requirements: 1.4_




- [ ] 9. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.
