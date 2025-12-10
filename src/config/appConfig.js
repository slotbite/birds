// App Configuration
export const APP_CONFIG = {
    name: 'Aves de Chile',
    fullName: 'Aves de Chile - Guía de Avistamientos',
    description: 'Guía interactiva de aves de Chile con registro de avistamientos',
    version: '1.0.0'
};

// Theme Colors (fallback when no image colors available)
export const DEFAULT_COLORS = {
    nature: {
        50: '#f0f9f4',
        100: '#dcf3e5',
        200: '#bae6cf',
        300: '#88d4af',
        400: '#4fbb88',
        500: '#2d9f6a',
        600: '#1f7f54',
        700: '#1a6545',
        800: '#175138',
        900: '#14422f'
    }
};

// User Preferences (stored in localStorage)
export const PREFERENCES_KEY = 'aves-chile-preferences';

export const DEFAULT_PREFERENCES = {
    binocularMode: true,
    darkMode: false,
    volume: 0.5,
    mapType: 'satellite'
};

// Get user preferences from localStorage
export const getPreferences = () => {
    try {
        const stored = localStorage.getItem(PREFERENCES_KEY);
        return stored ? { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) } : DEFAULT_PREFERENCES;
    } catch (error) {
        console.error('Error loading preferences:', error);
        return DEFAULT_PREFERENCES;
    }
};

// Save user preferences to localStorage
export const savePreferences = (preferences) => {
    try {
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences));
        return true;
    } catch (error) {
        console.error('Error saving preferences:', error);
        return false;
    }
};

// Update a single preference
export const updatePreference = (key, value) => {
    const preferences = getPreferences();
    preferences[key] = value;
    return savePreferences(preferences);
};
