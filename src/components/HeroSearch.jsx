import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useBirdStore from '../store/useBirdStore';
import { APP_CONFIG } from '../config/appConfig';

const HeroSearch = () => {
    const { searchQuery, setSearchQuery, showOnlyFavorites, toggleShowOnlyFavorites } = useBirdStore();
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    // Extract subtitle from fullName (everything after the dash)
    const subtitle = APP_CONFIG.fullName.includes(' - ')
        ? APP_CONFIG.fullName.split(' - ')[1]
        : 'Guía de Avistamientos';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Title Section - Scrolls away */}
            <div className={`w-full pt-20 pb-10 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-xl tracking-wide font-sans">
                    {APP_CONFIG.name}
                </h1>
                <p className="text-white/90 text-xl font-light drop-shadow-lg tracking-wide">
                    {subtitle}
                </p>
            </div>

            {/* Sticky Search Section */}
            <div className={`sticky top-0 z-50 w-full transition-all duration-300 px-4 flex justify-center ${isScrolled
                ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg'
                : 'py-2 pb-12'
                }`}>
                <div className={`relative flex items-center gap-3 w-full transition-all duration-300 ${isScrolled ? 'max-w-4xl' : 'max-w-xl'}`}>

                    {/* Search Input */}
                    <div className="relative flex-1 group">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar ave..."
                            className={`w-full rounded-full bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 shadow-2xl focus:outline-none focus:ring-2 focus:ring-nature-400/50 transition-all ${isScrolled ? 'py-3 px-5 pr-20 text-base' : 'py-4 px-6 pr-24 text-lg'
                                }`}
                        />

                        {/* Favorites Filter Toggle - Inside search bar */}
                        <button
                            onClick={toggleShowOnlyFavorites}
                            className={`absolute right-12 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all duration-200 ${showOnlyFavorites
                                ? 'text-red-500 bg-red-50 hover:bg-red-100'
                                : 'text-gray-400 hover:text-red-400 hover:bg-gray-100'
                                }`}
                            title={showOnlyFavorites ? "Mostrar todas las aves" : "Mostrar solo favoritos"}
                        >
                            {showOnlyFavorites ? (
                                // Filled heart
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            ) : (
                                // Outline heart
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            )}
                        </button>

                        {/* Search Icon */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Logbook Button (Bitácora) */}
                    <button
                        onClick={() => navigate('/bitacora')}
                        className={`flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-nature-500 hover:text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-300 group/btn ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'
                            }`}
                        title="Ir a mi Bitácora"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${isScrolled ? 'h-5 w-5' : 'h-6 w-6'} transition-transform group-hover/btn:scale-110`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </button>

                </div>
            </div>
        </>
    );
};

export default HeroSearch;

