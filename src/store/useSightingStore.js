import { create } from 'zustand';

// Simple localStorage-based persistence
const STORAGE_KEY = 'aves_chile_sightings';

const loadFromStorage = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return [];
    }
};

const saveToStorage = (sightings) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sightings));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

const useSightingStore = create((set, get) => ({
    sightings: loadFromStorage(),
    loading: false,
    error: null,

    loadSightings: () => {
        const sightings = loadFromStorage();
        set({ sightings, loading: false });
    },

    addSighting: (sighting) => {
        const newSighting = {
            ...sighting,
            _id: `sighting_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            createdAt: new Date().toISOString(),
        };

        const updatedSightings = [newSighting, ...get().sightings];
        set({ sightings: updatedSightings });
        saveToStorage(updatedSightings);

        return newSighting;
    },

    deleteSighting: (id) => {
        const updatedSightings = get().sightings.filter(s => s._id !== id);
        set({ sightings: updatedSightings });
        saveToStorage(updatedSightings);
    }
}));

export default useSightingStore;
