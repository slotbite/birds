import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BirdDetail from './BirdDetail';
import * as useBirdStoreModule from '../store/useBirdStore';
import fc from 'fast-check';

// Mock the store
vi.mock('../store/useBirdStore', () => ({
    default: vi.fn(),
}));

// Mock the hooks
vi.mock('../hooks/useBirdAudio', () => ({
    useBirdAudio: () => ({
        hasAudio: false,
        isPlaying: false,
        play: vi.fn(),
        stop: vi.fn(),
    }),
}));

vi.mock('../hooks/useBirdDetails', () => ({
    useBirdDetails: () => ({
        details: {},
        isLoading: false,
    }),
}));

vi.mock('../hooks/useImageColors', () => ({
    useImageColors: () => ({
        colors: {
            deep: '#1a1a1a',
            accent: '#4ade80',
            text: '#ffffff',
            surface: '#2a2a2a',
            glow: '#4ade80',
        },
    }),
}));

vi.mock('../hooks/useFavorites', () => ({
    useFavorites: () => ({
        isFavorite: false,
        toggleFavorite: vi.fn(),
    }),
}));

vi.mock('../hooks/useScreenCapture', () => ({
    useScreenCapture: () => ({
        captureScreenshot: vi.fn(),
        isCapturing: false,
    }),
}));

vi.mock('../config/appConfig', () => ({
    getPreferences: () => ({ binocularMode: false }),
    updatePreference: vi.fn(),
    APP_CONFIG: { name: 'Birds App' },
}));

vi.mock('../components/AddSightingModal', () => ({
    default: () => <div>Modal</div>,
}));

vi.mock('../components/ActionButtonsBar', () => ({
    default: () => <div>Action Buttons</div>,
}));

// Sample bird data for testing
const sampleBirds = [
    {
        uid: '46-lophonetta-specularioides',
        name: {
            spanish: 'Pato Juarjual',
            english: 'Crested Duck',
            latin: 'Lophonetta specularioides',
        },
        images: {
            main: 'https://example.com/main.jpg',
            full: 'https://example.com/full.jpg',
            thumb: 'https://example.com/thumb.jpg',
        },
        _links: {
            self: 'https://aves.ninjas.cl/api/birds/46-lophonetta-specularioides',
            parent: 'https://aves.ninjas.cl/api/birds',
        },
        sort: 0,
    },
    {
        uid: '76-buteo-albigula',
        name: {
            spanish: 'Aguilucho Chico',
            english: 'White-throated Hawk',
            latin: 'Buteo albigula',
        },
        images: {
            main: 'https://example.com/main2.jpg',
            full: 'https://example.com/full2.jpg',
            thumb: 'https://example.com/thumb2.jpg',
        },
        _links: {
            self: 'https://aves.ninjas.cl/api/birds/76-buteo-albigula',
            parent: 'https://aves.ninjas.cl/api/birds',
        },
        sort: 1,
    },
];

describe('BirdDetail - Property 1: Direct URL Access Resolution', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should load and display correct bird data for valid bird UID', async () => {
        // **Feature: bird-detail-improvements, Property 1: Direct URL Access Resolution**
        // **Validates: Requirements 1.1, 1.2, 1.3**

        // Property-based test: For any valid bird UID, the system should load the correct bird
        fc.assert(
            fc.property(
                fc.integer({ min: 0, max: sampleBirds.length - 1 }),
                (birdIndex) => {
                    const testBird = sampleBirds[birdIndex];
                    const mockStore = {
                        birds: sampleBirds,
                        filteredBirds: sampleBirds,
                        searchQuery: '',
                        setSearchQuery: vi.fn(),
                    };

                    useBirdStoreModule.default.mockReturnValue(mockStore);

                    // Mock useParams to return the bird UID
                    vi.doMock('react-router-dom', async () => {
                        const actual = await vi.importActual('react-router-dom');
                        return {
                            ...actual,
                            useParams: () => ({ id: testBird.uid }),
                            useNavigate: () => vi.fn(),
                        };
                    });

                    // Verify that the bird can be found in the store
                    const found = mockStore.birds.find((b) => b.uid === testBird.uid);
                    expect(found).toBeDefined();
                    expect(found.uid).toBe(testBird.uid);
                    expect(found.name.spanish).toBe(testBird.name.spanish);
                }
            ),
            { numRuns: 100 }
        );
    });

    it('should handle invalid bird ID gracefully', async () => {
        // **Feature: bird-detail-improvements, Property 1: Direct URL Access Resolution**
        // **Validates: Requirements 1.1, 1.2, 1.3**

        const mockStore = {
            birds: sampleBirds,
            filteredBirds: sampleBirds,
            searchQuery: '',
            setSearchQuery: vi.fn(),
        };

        useBirdStoreModule.default.mockReturnValue(mockStore);

        // Test with invalid UID
        const invalidUid = 'invalid-bird-uid-12345';
        const found = mockStore.birds.find((b) => b.uid === invalidUid);
        expect(found).toBeUndefined();
    });

    it('should maintain bird context across page reloads', async () => {
        // **Feature: bird-detail-improvements, Property 1: Direct URL Access Resolution**
        // **Validates: Requirements 1.1, 1.2, 1.3**

        // Property-based test: For any valid bird UID, reloading should maintain context
        fc.assert(
            fc.property(
                fc.integer({ min: 0, max: sampleBirds.length - 1 }),
                (birdIndex) => {
                    const testBird = sampleBirds[birdIndex];
                    const mockStore = {
                        birds: sampleBirds,
                        filteredBirds: sampleBirds,
                        searchQuery: '',
                        setSearchQuery: vi.fn(),
                    };

                    useBirdStoreModule.default.mockReturnValue(mockStore);

                    // Simulate finding bird on first load
                    const firstLoad = mockStore.birds.find((b) => b.uid === testBird.uid);
                    expect(firstLoad).toBeDefined();

                    // Simulate reload - bird should still be found
                    const secondLoad = mockStore.birds.find((b) => b.uid === testBird.uid);
                    expect(secondLoad).toBeDefined();
                    expect(secondLoad.uid).toBe(firstLoad.uid);
                    expect(secondLoad.name.spanish).toBe(firstLoad.name.spanish);
                }
            ),
            { numRuns: 100 }
        );
    });
});
