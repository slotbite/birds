import { create } from 'zustand';
import { birdsData } from '../data/birds';
import Fuse from 'fuse.js';

const useBirdStore = create((set, get) => ({
    birds: birdsData,
    filteredBirds: birdsData,
    searchQuery: '',

    setSearchQuery: (query) => {
        set({ searchQuery: query });
        const { birds } = get();

        if (!query) {
            set({ filteredBirds: birds });
            return;
        }

        const fuse = new Fuse(birds, {
            keys: ['name.spanish', 'name.english', 'name.latin'],
            threshold: 0.3,
        });

        const results = fuse.search(query);
        set({ filteredBirds: results.map(r => r.item) });
    },
}));

export default useBirdStore;
