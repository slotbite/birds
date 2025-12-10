import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSightingStore from '../store/useSightingStore';

const AddSightingModal = ({ bird, isOpen, onClose }) => {
    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);
    const [notes, setNotes] = useState('');
    const [photo, setPhoto] = useState(null);
    const { addSighting } = useSightingStore();

    // Get current GPS location when modal opens
    useEffect(() => {
        if (isOpen && !location) {
            getCurrentLocation();
        }
    }, [isOpen]);

    const getCurrentLocation = () => {
        setLoadingLocation(true);

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    });
                    setLoadingLocation(false);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    // Use default location (Santiago, Chile) if GPS fails
                    setLocation({
                        lat: -33.4489,
                        lng: -70.6693,
                        accuracy: null
                    });
                    setLoadingLocation(false);
                }
            );
        } else {
            // Fallback location
            setLocation({
                lat: -33.4489,
                lng: -70.6693,
                accuracy: null
            });
            setLoadingLocation(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!location) {
            alert('No se pudo obtener la ubicación');
            return;
        }

        const sighting = {
            birdId: bird.uid,
            birdName: bird.name.spanish,
            birdLatinName: bird.name.latin,
            birdImage: bird.images.main,
            location: location,
            notes: notes,
            photo: photo,
            date: new Date().toISOString()
        };

        addSighting(sighting);
        onClose();

        // Reset form
        setNotes('');
        setPhoto(null);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                />

                {/* Modal */}
                <motion.div
                    className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Añadir Avistamiento
                            </h2>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Bird Info */}
                        <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <img
                                src={bird.images.main}
                                alt={bird.name.spanish}
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">{bird.name.spanish}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{bird.name.latin}</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Ubicación
                            </label>
                            {loadingLocation ? (
                                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span className="text-sm">Obteniendo ubicación...</span>
                                </div>
                            ) : location ? (
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-green-900 dark:text-green-100">
                                                Ubicación capturada
                                            </p>
                                            <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                                                {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
                                                {location.accuracy && ` (±${Math.round(location.accuracy)}m)`}
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={getCurrentLocation}
                                            className="text-xs text-green-600 dark:text-green-400 hover:underline"
                                        >
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        {/* Notes */}
                        <div>
                            <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Notas (opcional)
                            </label>
                            <textarea
                                id="notes"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-nature-500 focus:border-transparent resize-none"
                                placeholder="Describe tu avistamiento: comportamiento, cantidad de individuos, condiciones climáticas..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!location}
                            className="w-full py-4 bg-nature-500 hover:bg-nature-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-lg"
                        >
                            Guardar Avistamiento
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default AddSightingModal;
