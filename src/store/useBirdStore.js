import { create } from 'zustand';
import { birdsData } from '../data/birds';
import Fuse from 'fuse.js';
import { getFavoriteIds } from '../hooks/useFavorites';

// Listen for favorites changes and refresh the store
if (typeof window !== 'undefined') {
    window.addEventListener('favoritesChanged', () => {
        const store = useBirdStore.getState();
        store.refreshFilters();
    });
}

const useBirdStore = create((set, get) => ({
    birds: birdsData,
    filteredBirds: birdsData,
    searchQuery: '',
    showOnlyFavorites: false,

    // Helper function to sort birds with favorites first
    sortBirdsByFavorites: (birds) => {
        const favoriteIds = getFavoriteIds();
        const favorites = birds.filter(bird => favoriteIds.includes(bird.uid));
        const nonFavorites = birds.filter(bird => !favoriteIds.includes(bird.uid));
        return [...favorites, ...nonFavorites];
    },

    // Apply filters and sorting
    applyFilters: () => {
        const { birds, searchQuery, showOnlyFavorites, sortBirdsByFavorites } = get();
        let result = birds;

        // Apply search filter
        if (searchQuery) {
            const fuse = new Fuse(birds, {
                keys: ['name.spanish', 'name.english', 'name.latin'],
                threshold: 0.3,
            });
            const searchResults = fuse.search(searchQuery);
            result = searchResults.map(r => r.item);
        }

        // Apply favorites filter
        if (showOnlyFavorites) {
            const favoriteIds = getFavoriteIds();
            result = result.filter(bird => favoriteIds.includes(bird.uid));
        }

        // Sort with favorites first (unless filtering only favorites)
        if (!showOnlyFavorites) {
            result = sortBirdsByFavorites(result);
        }

        set({ filteredBirds: result });
    },

    setSearchQuery: (query) => {
        set({ searchQuery: query });
        get().applyFilters();
    },

    toggleShowOnlyFavorites: () => {
        set({ showOnlyFavorites: !get().showOnlyFavorites });
        get().applyFilters();
    },

    // Call this when favorites change to refresh the list
    refreshFilters: () => {
        get().applyFilters();
    },
}));

export default useBirdStore;
