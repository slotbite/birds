import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'bird_favorites';

// Helper function to get all favorite IDs
export const getFavoriteIds = () => {
    try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error loading favorites:', error);
        return [];
    }
};

export const useFavorites = (birdId) => {
    const [isFavorite, setIsFavorite] = useState(false);

    // Load favorite status from local storage on mount
    useEffect(() => {
        if (!birdId) return;

        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            const favorites = stored ? JSON.parse(stored) : [];
            setIsFavorite(favorites.includes(birdId));
        } catch (error) {
            console.error('Error loading favorites:', error);
            setIsFavorite(false);
        }
    }, [birdId]);

    const toggleFavorite = () => {
        if (!birdId) return;

        try {
            const stored = localStorage.getItem(FAVORITES_KEY);
            let favorites = [];

            try {
                favorites = stored ? JSON.parse(stored) : [];
            } catch (parseError) {
                // If stored data is corrupted, start fresh
                console.error('Error parsing favorites:', parseError);
                favorites = [];
            }

            if (favorites.includes(birdId)) {
                favorites = favorites.filter(id => id !== birdId);
                setIsFavorite(false);
            } else {
                favorites.push(birdId);
                setIsFavorite(true);
            }

            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));

            // Notify the store to refresh the bird list
            // This will re-sort with favorites first
            if (typeof window !== 'undefined' && window.dispatchEvent) {
                window.dispatchEvent(new CustomEvent('favoritesChanged'));
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return { isFavorite, toggleFavorite };
};

export default useFavorites;
