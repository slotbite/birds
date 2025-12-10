import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBirdAudio } from '../hooks/useBirdAudio';

const BirdCard = ({ bird }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const { hasAudio, play, stop } = useBirdAudio(bird);

    const handleMouseEnter = () => {
        setIsHovered(true);
        if (hasAudio) {
            play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (hasAudio) {
            stop();
        }
    };

    return (
        <motion.div
            className="relative h-[300px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-2xl group bg-gray-800 border border-gray-700"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/ave/${bird.uid}`)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl">
                {!imageError ? (
                    <img
                        src={bird.images.main}
                        alt={bird.name.spanish}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isHovered ? 'scale-150' : 'scale-100'}`}
                        loading="lazy"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nature-700 to-nature-900">
                        <span className="text-white text-6xl">🐦</span>
                    </div>
                )}

                {/* Dark Overlay on Hover */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            {/* Play Button Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {hasAudio && (
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Musical Notes Icon - Top Right (when has audio) */}
            {hasAudio && !isHovered && (
                <div className="absolute top-3 right-3 z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white drop-shadow-lg animate-pulse"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                </div>
            )}

            {/* Content Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12">
                <h3 className="text-white text-xl font-bold truncate drop-shadow-lg">{bird.name.spanish}</h3>
                <p className="text-white/90 text-sm italic font-serif drop-shadow-md">{bird.name.latin}</p>
            </div>
        </motion.div>
    );
};

export default BirdCard;
