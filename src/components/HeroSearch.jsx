import React from 'react';
import useBirdStore from '../store/useBirdStore';
import { APP_CONFIG } from '../config/appConfig';

const HeroSearch = () => {
    const { searchQuery, setSearchQuery } = useBirdStore();

    return (
        <div className="w-full py-12 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-xl tracking-wide font-sans">
                {APP_CONFIG.name}
            </h1>
            <p className="text-white/90 text-xl mb-8 font-light drop-shadow-lg tracking-wide">
                {APP_CONFIG.subtitle}
            </p>

            <div className="relative group w-full max-w-2xl">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar ave (Nombre, Español, Latín)..."
                    className="w-full px-6 py-4 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-2xl focus:outline-none focus:ring-4 focus:ring-nature-400/50 transition-all text-lg"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default HeroSearch;
