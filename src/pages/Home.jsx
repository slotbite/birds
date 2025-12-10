import React from 'react';
import HeroSearch from '../components/HeroSearch';
import BirdGrid from '../components/BirdGrid';

import { APP_CONFIG } from '../config/appConfig';

const Home = () => {
    React.useEffect(() => {
        document.title = APP_CONFIG.fullName;
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/background.jpg")',
            }}
        >
            <HeroSearch />
            <BirdGrid />
        </div>
    );
};

export default Home;
