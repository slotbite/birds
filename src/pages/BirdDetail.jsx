import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBirdStore from '../store/useBirdStore';
import { motion } from 'framer-motion';
import { useBirdAudio } from '../hooks/useBirdAudio';
import { useBirdDetails } from '../hooks/useBirdDetails';
import { useImageColors } from '../hooks/useImageColors';
import { useFavorites } from '../hooks/useFavorites';
import { useScreenCapture } from '../hooks/useScreenCapture';
import { getPreferences, updatePreference, APP_CONFIG } from '../config/appConfig';
import AddSightingModal from '../components/AddSightingModal';
import ActionButtonsBar from '../components/ActionButtonsBar';

const BirdDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { birds } = useBirdStore();
    const [bird, setBird] = useState(null);
    const [zoom, setZoom] = useState(false);
    const [binocularMode, setBinocularMode] = useState(() => getPreferences().binocularMode);
    const [showSightingModal, setShowSightingModal] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const { hasAudio, isPlaying, play, stop } = useBirdAudio(bird);
    const { details, isLoading: detailsLoading } = useBirdDetails(bird);
    const { colors } = useImageColors(bird?.images?.full);
    const { isFavorite, toggleFavorite } = useFavorites(bird?.uid);
    const { captureScreenshot, isCapturing } = useScreenCapture();

    // Save binocular mode preference when it changes
    useEffect(() => {
        updatePreference('binocularMode', binocularMode);
    }, [binocularMode]);

    useEffect(() => {
        if (!id || birds.length === 0) return;

        const found = birds.find(b => b.uid === id);
        if (found) {
            setBird(found);
            setNotFound(false);
            document.title = `${found.name.spanish} - ${APP_CONFIG.name}`;
        } else {
            setNotFound(true);
            setBird(null);
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

    if (notFound) {
        return (
            <div className="bg-black h-screen text-white flex flex-col items-center justify-center gap-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Ave no encontrada</h1>
                    <p className="text-gray-400 mb-6">No pudimos encontrar el ave que buscas.</p>
                </div>
                <button
                    onClick={() => navigate('/')}
                    className="bg-nature-500 hover:bg-nature-400 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                    Volver al inicio
                </button>
            </div>
        );
    }

    if (!bird) return <div className="bg-black h-screen text-white flex items-center justify-center">Cargando...</div>;

    return (
        <div className="h-screen w-full bg-black overflow-hidden flex flex-col">
            {/* Capture Target - Excludes action buttons */}
            <div className="flex-1 overflow-hidden flex flex-col" data-capture-target>
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

                {/* Bottom Section - Premium Luxury Dark Design */}
                <div
                    className="flex-1 rounded-t-[3rem] -mt-12 z-40 relative flex flex-col overflow-hidden border-t-2 shadow-[0_-10px_50px_rgba(0,0,0,0.5)]"
                    style={{
                        backgroundColor: colors.deep,
                        borderColor: `${colors.accent}40`
                    }}
                >
                    {/* Ambient Glows */}
                    <div
                        className="absolute top-0 inset-x-0 h-64 pointer-events-none opacity-40 mix-blend-screen"
                        style={{
                            background: `radial-gradient(circle at center top, ${colors.glow}, transparent 70%)`
                        }}
                    ></div>

                    {/* Content Container */}
                    <div className="relative overflow-y-auto px-8 py-8 pb-40 scrollbar-hide flex-1">

                        {/* Header Section */}
                        <div className="mb-12 relative">
                            {/* Title Row with Favorite Button */}
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-5xl font-black tracking-tight flex-1"
                                    style={{ color: colors.text }}
                                >
                                    {bird.name.spanish}
                                </motion.h1>

                                {/* Favorite Button - Inline with Title */}
                                <motion.button
                                    onClick={toggleFavorite}
                                    className={`flex-shrink-0 p-2 rounded-full transition-colors ${isFavorite
                                        ? 'text-red-500 hover:text-red-400'
                                        : 'text-white hover:text-red-400'
                                        }`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                                >
                                    {isFavorite ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    )}
                                </motion.button>
                            </div>

                            {/* Subtitle Row */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-4 flex-wrap"
                            >
                                <p className="italic font-serif text-xl" style={{ color: colors.accent }}>
                                    {bird.name.latin}
                                </p>
                                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                {bird.name.english && (
                                    <p className="text-sm font-medium tracking-wide uppercase opacity-60" style={{ color: colors.text }}>
                                        {bird.name.english}
                                    </p>
                                )}
                            </motion.div>

                            {/* Info Row: Size Badge + Audio Button */}
                            <div className="flex items-center gap-3 mt-6 flex-wrap">
                                {/* Size Badge */}
                                {details?.size && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="px-4 py-2 rounded-full text-sm font-bold border backdrop-blur-md whitespace-nowrap"
                                        style={{
                                            backgroundColor: `${colors.accent}15`,
                                            color: colors.accent,
                                            borderColor: `${colors.accent}40`,
                                            boxShadow: `0 4px 20px ${colors.accent}30`
                                        }}
                                    >
                                        {details.size}
                                    </motion.div>
                                )}

                                {/* Audio Control Button */}
                                {hasAudio && (
                                    <motion.button
                                        onClick={() => isPlaying ? stop() : play()}
                                        className="p-3 rounded-full transition-colors"
                                        style={{
                                            backgroundColor: `${colors.accent}20`,
                                            color: colors.accent
                                        }}
                                        whileHover={{
                                            backgroundColor: `${colors.accent}40`
                                        }}
                                        title={isPlaying ? "Pausar sonido" : "Reproducir sonido"}
                                    >
                                        {isPlaying ? (
                                            // Pause icon
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                            </svg>
                                        ) : (
                                            // Play icon
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {detailsLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                                <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
                                    style={{ borderColor: `${colors.accent}40`, borderTopColor: colors.accent }}></div>
                                <p className="opacity-50" style={{ color: colors.text }}>Descifrando datos...</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                                {details?.habitat && (
                                    <DetailCard title="Hábitat" content={details.habitat} delay={0.3} colors={colors} />
                                )}
                                {details?.distribution && (
                                    <DetailCard title="Distribución" content={details.distribution} delay={0.4} colors={colors} />
                                )}
                                {details?.description && (
                                    <DetailCard title="Descripción" content={details.description} fullWidth delay={0.5} colors={colors} />
                                )}
                                {details?.diet && (
                                    <DetailCard title="Dieta" content={details.diet} delay={0.6} colors={colors} />
                                )}
                                {details?.reproduction && (
                                    <DetailCard title="Reproducción" content={details.reproduction} delay={0.7} colors={colors} />
                                )}
                                {details?.conservation && (
                                    <DetailCard title="Conservación" content={details.conservation} delay={0.8} colors={colors} />
                                )}
                                {details?.dimorphism && (
                                    <DetailCard title="Dimorfismo" content={details.dimorphism} fullWidth delay={0.9} colors={colors} />
                                )}
                                {details?.map_caption && (
                                    <DetailCard title="Mapa" content={details.map_caption} fullWidth delay={1.0} colors={colors} />
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Action Buttons Bar - Outside capture target */}
            <ActionButtonsBar
                onLogbook={() => navigate('/bitacora')}
                onAddSighting={() => setShowSightingModal(true)}
                onShare={(mode) => captureScreenshot(
                    bird.images.full,
                    bird.name.spanish,
                    bird.name.latin,
                    details,
                    mode
                )}
                isCapturing={isCapturing}
            />

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
        className={`p-6 rounded-2xl border ${fullWidth ? 'md:col-span-2' : ''} group relative overflow-hidden`}
        style={{
            backgroundColor: `${colors.surface}80`, // 50% opacity surface
            borderColor: `${colors.accent}20`,
            backdropFilter: 'blur(10px)'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
            y: -5,
            borderColor: `${colors.accent}50`,
            backgroundColor: `${colors.surface}E6` // Higher opacity on hover
        }}
        transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
        {/* Subtle accent gradient on hover */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{
                background: `linear-gradient(45deg, transparent, ${colors.accent}, transparent)`
            }}
        ></div>

        <h3
            className="text-xs uppercase tracking-[0.25em] mb-4 font-bold"
            style={{ color: colors.accent }}
        >
            {title}
        </h3>
        <p
            className="leading-relaxed text-[15px] font-light"
            style={{ color: colors.text }}
        >
            {content || "Información no disponible"}
        </p>
    </motion.div>
);

export default BirdDetail;
