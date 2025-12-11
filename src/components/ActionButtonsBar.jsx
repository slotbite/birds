import { motion } from 'framer-motion';

const ActionButtonsBar = ({
    onLogbook,
    onAddSighting,
    onShare,
    isCapturing
}) => {
    console.log('🎨 [ActionButtonsBar] Renderizado, isCapturing:', isCapturing);

    return (
        <div className="w-full bg-gradient-to-t from-black via-black to-transparent pt-8 pb-6 px-6 z-40">
            <div className="flex justify-center gap-6 max-w-2xl mx-auto">
                {/* Bitácora Button */}
                <motion.button
                    onClick={onLogbook}
                    className="flex items-center gap-2 text-white hover:text-nature-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Ver Bitácora"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-sm font-semibold">Bitácora</span>
                </motion.button>

                {/* Avistamiento Button */}
                <motion.button
                    onClick={onAddSighting}
                    className="flex items-center gap-2 text-white hover:text-nature-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Añadir Avistamiento"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-semibold">Avistamiento</span>
                </motion.button>

                {/* Compartir - Botón de compartir en redes sociales */}
                {/* Botón de imagen comentado temporalmente
                <motion.button
                    onClick={() => {
                        console.log('🖼️ [BUTTON] Click en Solo Imagen');
                        onShare('image-only');
                    }}
                    disabled={isCapturing}
                    className={`flex items-center gap-2 transition-colors ${isCapturing
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-white hover:text-green-400'
                        }`}
                    whileHover={!isCapturing ? { scale: 1.1 } : {}}
                    whileTap={!isCapturing ? { scale: 0.95 } : {}}
                    title="Descargar Solo Imagen"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-semibold">Imagen</span>
                </motion.button>
                */}

                <motion.button
                    onClick={() => {
                        console.log('📋 [BUTTON] Click en Compartir');
                        onShare('composite');
                    }}
                    disabled={isCapturing}
                    className={`flex items-center gap-2 transition-colors ${isCapturing
                        ? 'text-gray-500 cursor-not-allowed'
                        : 'text-white hover:text-blue-400'
                        }`}
                    whileHover={!isCapturing ? { scale: 1.1 } : {}}
                    whileTap={!isCapturing ? { scale: 0.95 } : {}}
                    title="Compartir"
                >
                    {isCapturing ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span className="text-sm font-semibold">Capturando</span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <span className="text-sm font-semibold">Compartir</span>
                        </>
                    )}
                </motion.button>
            </div>
        </div>
    );
};

export default ActionButtonsBar;
