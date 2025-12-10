import React, { useState, useEffect } from 'react';
import HeroSearch from '../components/HeroSearch';
import BirdGrid from '../components/BirdGrid';
import { APP_CONFIG } from '../config/appConfig';

const Home = () => {
    const [backgroundLoaded, setBackgroundLoaded] = useState(false);

    React.useEffect(() => {
        document.title = APP_CONFIG.fullName;
    }, []);

    // Construct the correct image URL using the base URL from Vite config
    // Support WebP with JPG fallback for better performance

    const baseUrl = import.meta.env.BASE_URL || '/';

    // Preload background image for better performance
    useEffect(() => {
        const imagePath = '/img/background.webp';
        const fullImageUrl = baseUrl.replace(/\/$/, '') + imagePath;

        const img = new Image();
        img.onload = () => setBackgroundLoaded(true);
        img.src = fullImageUrl;
    }, [baseUrl]);

    const imagePath = '/img/background.webp';
    const fullImageUrl = baseUrl.replace(/\/$/, '') + imagePath;
    const backgroundImageStyle = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("${fullImageUrl}")`;

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: backgroundImageStyle,
                backgroundColor: '#1a1a1a', // Fallback color while loading
                transition: 'opacity 0.5s ease-in-out',
                opacity: backgroundLoaded ? 1 : 0.3
            }}
        >
            <HeroSearch />
            <BirdGrid />
        </div>
    );
};

export default Home;
