import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBirdStore from '../store/useBirdStore';
import { motion } from 'framer-motion';
import { useBirdAudio } from '../hooks/useBirdAudio';
import { useBirdDetails } from '../hooks/useBirdDetails';
import { useImageColors } from '../hooks/useImageColors';
import { getPreferences, updatePreference, APP_CONFIG } from '../config/appConfig';
import AddSightingModal from '../components/AddSightingModal';

const BirdDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { birds } = useBirdStore();
    const [bird, setBird] = useState(null);
    const [zoom, setZoom] = useState(false);
    const [binocularMode, setBinocularMode] = useState(() => getPreferences().binocularMode);
    const [showSightingModal, setShowSightingModal] = useState(false);
    const { hasAudio, isPlaying, play, stop } = useBirdAudio(bird);
    const { details, isLoading: detailsLoading } = useBirdDetails(bird);
    const { colors } = useImageColors(bird?.images?.full);

    // Save binocular mode preference when it changes
    useEffect(() => {
        updatePreference('binocularMode', binocularMode);
    }, [binocularMode]);

    useEffect(() => {
        const found = birds.find(b => b.uid === id);
        if (found) {
            setBird(found);
            document.title = `${found.name.spanish} - ${APP_CONFIG.name}`;
        } else {
            // navigate('/'); // Optional: redirect if not found
        }
    }, [id, birds]);

    // Auto-play audio when available
    useEffect(() => {
        if (hasAudio && bird) {
            // Small delay to ensure audio is loaded
            const timer = setTimeout(() => {
                play();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [hasAudio, bird]);

    if (!bird) return <div className="bg-black h-screen text-white flex items-center justify-center">Cargando...</div>;

    return (
        <div className="h-screen w-full bg-black overflow-hidden flex flex-col">
            {/* Top Section - Binocular View (65% height) */}
            <div className="relative h-[65vh] w-full flex items-center justify-center bg-black overflow-hidden group">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                {/* Binocular Toggle Button */}
                <button
                    onClick={() => setBinocularMode(!binocularMode)}
                    className="absolute top-6 right-6 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                    title={binocularMode ? "Desactivar vista binocular" : "Activar vista binocular"}
                >
                    {binocularMode ? (
                        // Binoculars icon (active)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    ) : (
                        // Eye slash icon (disabled)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    )}
                </button>

                {/* Audio Control Button (below binocular button) */}
                {hasAudio && (
                    <button
                        onClick={() => isPlaying ? stop() : play()}
                        className="absolute top-20 right-6 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors"
                        title={isPlaying ? "Pausar sonido" : "Reproducir sonido"}
                    >
                        {isPlaying ? (
                            // Pause icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                            </svg>
                        ) : (
                            // Play icon
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                )}

                {/* Bird Image Container - Centered, 2/3 width */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={bird.images.full}
                        alt={bird.name.spanish}
                        className={`w-2/3 h-auto object-contain cursor-pointer transition-all duration-700 ${zoom ? 'scale-[2]' : 'scale-100'}`}
                        onClick={() => setZoom(!zoom)}
                    />
                </div>

                {/* Binocular Mask Overlay - Full Screen (only when active) */}
                {binocularMode && (
                    <div className="absolute inset-0 pointer-events-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                {/* Radial gradient for blur effect on edges */}
                                <radialGradient id="blur-left">
                                    <stop offset="0%" stopColor="black" stopOpacity="1" />
                                    <stop offset="85%" stopColor="black" stopOpacity="1" />
                                    <stop offset="92%" stopColor="black" stopOpacity="0.6" />
                                    <stop offset="97%" stopColor="black" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="black" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="blur-right">
                                    <stop offset="0%" stopColor="black" stopOpacity="1" />
                                    <stop offset="85%" stopColor="black" stopOpacity="1" />
                                    <stop offset="92%" stopColor="black" stopOpacity="0.6" />
                                    <stop offset="97%" stopColor="black" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="black" stopOpacity="0" />
                                </radialGradient>

                                {/* Mask: Black everywhere except circles */}
                                <mask id="binocular-inverse-mask">
                                    {/* White background = show black overlay */}
                                    <rect width="100" height="100" fill="white" />

                                    {/* Black circles with gradient = hide overlay (show bird) */}
                                    <circle cx="40" cy="50" r="20" fill="url(#blur-left)" />
                                    <circle cx="60" cy="50" r="20" fill="url(#blur-right)" />
                                </mask>
                            </defs>

                            {/* Black overlay with holes for binoculars */}
                            <rect
                                width="100"
                                height="100"
                                fill="black"
                                mask="url(#binocular-inverse-mask)"
                            />
                        </svg>
                    </div>
                )}

                {/* Subtle vignette for depth */}
                <div className="absolute inset-0 pointer-events-none z-30" style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.3) 100%)'
                }}></div>
            </div>

            {/* Bottom Section - Minimalist Luxury Design */}
            <div
                className="flex-1 rounded-t-3xl -mt-8 z-40 relative flex flex-col overflow-hidden border-t"
                style={{
                    background: `linear-gradient(to bottom, ${colors.pastel}f2, ${colors.pastel}e6)`,
                    borderTopColor: `${colors.vibrant}40`,
                    backdropFilter: 'blur(40px)'
                }}
            >
                {/* Subtle top accent */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                        background: `linear-gradient(to right, transparent, ${colors.vibrant}80, transparent)`
                    }}
                ></div>

                {/* Minimal indicator */}
                <div
                    className="w-10 h-1 rounded-full mx-auto mt-3 mb-4 opacity-30"
                    style={{ backgroundColor: colors.text }}
                ></div>

                <div className="overflow-y-auto px-8 py-2 pb-20 scrollbar-hide">
                    <div className="flex justify-between items-end mb-6">
                        <div>
                            <h1 className="text-3xl font-bold mb-1" style={{ color: colors.text }}>
                                {bird.name.spanish}
                            </h1>
                            <p className="italic font-serif text-lg" style={{ color: colors.textMuted }}>
                                {bird.name.latin}
                            </p>
                            {bird.name.english && (
                                <p className="text-sm mt-1" style={{ color: `${colors.textMuted}99` }}>
                                    {bird.name.english}
                                </p>
                            )}
                        </div>
                        {details?.size && (
                            <div
                                className="px-3 py-1 rounded-lg text-sm border"
                                style={{
                                    backgroundColor: `${colors.vibrant}33`,
                                    color: colors.text,
                                    borderColor: `${colors.vibrant}66`
                                }}
                            >
                                {details.size}
                            </div>
                        )}
                    </div>

                    {detailsLoading ? (
                        <div className="text-center py-8 text-nature-400">
                            <p>Cargando detalles...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-nature-100">
                            {details?.habitat && (
                                <DetailCard title="Hábitat" content={details.habitat} delay={0.1} colors={colors} />
                            )}
                            {details?.distribution && (
                                <DetailCard title="Distribución" content={details.distribution} delay={0.2} colors={colors} />
                            )}
                            {details?.description && (
                                <DetailCard title="Descripción" content={details.description} fullWidth delay={0.3} colors={colors} />
                            )}
                            {details?.diet && (
                                <DetailCard title="Dieta" content={details.diet} delay={0.4} colors={colors} />
                            )}
                            {details?.reproduction && (
                                <DetailCard title="Reproducción" content={details.reproduction} delay={0.5} colors={colors} />
                            )}
                            {details?.conservation && (
                                <DetailCard title="Conservación" content={details.conservation} delay={0.6} colors={colors} />
                            )}
                            {details?.dimorphism && (
                                <DetailCard title="Dimorfismo" content={details.dimorphism} fullWidth delay={0.7} colors={colors} />
                            )}
                            {details?.map_caption && (
                                <DetailCard title="Mapa" content={details.map_caption} fullWidth delay={0.8} colors={colors} />
                            )}
                        </div>
                    )}

                    {/* Floating Action Buttons */}
                    <div className="fixed bottom-6 right-6 z-50 flex gap-3">
                        {/* View Logbook Button */}
                        <motion.button
                            onClick={() => navigate('/bitacora')}
                            className="bg-nature-600 hover:bg-nature-500 text-white rounded-full p-4 shadow-xl flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            title="Ver Bitácora"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </motion.button>

                        {/* Add Sighting Button */}
                        <motion.button
                            onClick={() => setShowSightingModal(true)}
                            className="bg-nature-500 hover:bg-nature-400 text-white rounded-full p-4 shadow-xl flex items-center gap-2 pr-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            title="Añadir Avistamiento"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-semibold">Añadir</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Add Sighting Modal */}
            {bird && (
                <AddSightingModal
                    bird={bird}
                    isOpen={showSightingModal}
                    onClose={() => setShowSightingModal(false)}
                />
            )}
        </div>
    );
};

const DetailCard = ({ title, content, fullWidth, delay, colors }) => (
    <motion.div
        className={`p-6 rounded-lg border-l-2 ${fullWidth ? 'md:col-span-2' : ''}`}
        style={{
            backgroundColor: `${colors.isDark ? '#ffffff' : '#000000'}08`,
            borderLeftColor: colors.vibrant,
            borderTop: `1px solid ${colors.vibrant}15`,
            borderRight: `1px solid ${colors.vibrant}15`,
            borderBottom: `1px solid ${colors.vibrant}15`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.4 }}
    >
        <h3
            className="text-[10px] uppercase tracking-[0.2em] mb-3 font-semibold opacity-60"
            style={{ color: colors.text }}
        >
            {title}
        </h3>
        <p
            className="leading-relaxed text-[15px]"
            style={{ color: colors.text }}
        >
            {content || "Información no disponible"}
        </p>
    </motion.div>
);

export default BirdDetail;
