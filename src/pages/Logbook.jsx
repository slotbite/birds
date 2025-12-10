import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSightingStore from '../store/useSightingStore';
import { APP_CONFIG } from '../config/appConfig';

// Custom Bird Icon with Image
const createBirdIcon = (imageUrl) => {
    return L.divIcon({
        className: 'custom-bird-marker',
        html: `
            <div style="
                width: 48px;
                height: 48px;
                border-radius: 50%;
                border: 3px solid #2d9f6a;
                background: white;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            ">
                <img 
                    src="${imageUrl}" 
                    style="
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    "
                    alt="Bird"
                />
            </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 48],
        popupAnchor: [0, -48]
    });
};

const Logbook = () => {
    const { sightings, deleteSighting, addSighting } = useSightingStore();
    const navigate = useNavigate();
    const [selectedSighting, setSelectedSighting] = useState(null);
    const [editingSighting, setEditingSighting] = useState(null);
    const [showSidebar, setShowSidebar] = useState(true);
    const [mapCenter, setMapCenter] = useState([-33.4489, -70.6693]); // Default: Santiago
    const [userLocation, setUserLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(true);
    const markerRefs = useRef({});

    useEffect(() => {
        document.title = `Mi Bitácora - ${APP_CONFIG.name}`;

        // Get user's current location
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPos = [position.coords.latitude, position.coords.longitude];
                    setUserLocation(userPos);
                    // If no sightings, center on user location
                    if (sightings.length === 0) {
                        setMapCenter(userPos);
                    }
                    setLoadingLocation(false);
                },
                (error) => {
                    console.log('Could not get location:', error);
                    setLoadingLocation(false);
                }
            );
        } else {
            setLoadingLocation(false);
        }
    }, []);

    // Update map center when sightings change (center on first sighting if exists)
    useEffect(() => {
        if (sightings.length > 0 && !userLocation) {
            const firstSighting = sightings[0];
            setMapCenter([firstSighting.location.lat, firstSighting.location.lng]);
        }
    }, [sightings]);

    // Draggable Marker Component
    const DraggableMarker = ({ sighting }) => {
        const markerRef = useRef(null);

        const eventHandlers = {
            dragend() {
                const marker = markerRef.current;
                if (marker != null) {
                    const newPos = marker.getLatLng();
                    // Update sighting location
                    const updatedSighting = {
                        ...sighting,
                        location: {
                            ...sighting.location,
                            lat: newPos.lat,
                            lng: newPos.lng
                        }
                    };
                    // Delete old and add updated
                    deleteSighting(sighting._id);
                    addSighting(updatedSighting);
                }
            },
        };

        return (
            <Marker
                draggable={true}
                eventHandlers={eventHandlers}
                position={[sighting.location.lat, sighting.location.lng]}
                icon={createBirdIcon(sighting.birdImage)}
                ref={markerRef}
            >
                <Popup>
                    <div className="text-center min-w-[200px]">
                        <img
                            src={sighting.birdImage}
                            alt={sighting.birdName}
                            className="w-full h-24 object-cover rounded-lg mb-2"
                        />
                        <h3 className="font-bold text-lg text-nature-700">{sighting.birdName}</h3>
                        <p className="text-xs italic text-gray-600">{sighting.birdLatinName}</p>
                        <p className="text-sm text-gray-500 mt-1">
                            {new Date(sighting.date).toLocaleDateString('es-CL', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </p>
                        {sighting.notes && (
                            <p className="text-sm mt-2 text-gray-700">{sighting.notes}</p>
                        )}
                        <div className="flex gap-2 mt-3">
                            <button
                                onClick={() => navigate(`/ave/${sighting.birdId}`)}
                                className="flex-1 bg-nature-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-nature-600 transition"
                            >
                                Ver Ave
                            </button>
                            <button
                                onClick={() => {
                                    if (confirm('¿Eliminar este avistamiento?')) {
                                        deleteSighting(sighting._id);
                                    }
                                }}
                                className="flex-1 bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600 transition"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </Popup>
            </Marker>
        );
    };

    return (
        <div className="h-screen w-full relative flex">
            {/* Sidebar */}
            <AnimatePresence>
                {showSidebar && (
                    <motion.div
                        initial={{ x: -320 }}
                        animate={{ x: 0 }}
                        exit={{ x: -320 }}
                        className="w-80 bg-white dark:bg-gray-900 shadow-2xl z-20 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Mi Bitácora
                                </h1>
                                <button
                                    onClick={() => navigate('/')}
                                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                    title="Cerrar"
                                >
                                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-2 mb-3">
                                <button
                                    onClick={() => navigate('/')}
                                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors text-sm font-medium text-gray-700 dark:text-gray-300"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Inicio
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {sightings.length} {sightings.length === 1 ? 'avistamiento' : 'avistamientos'}
                            </p>
                        </div>

                        {/* Sightings List */}
                        <div className="flex-1 overflow-y-auto">
                            {sightings.length === 0 ? (
                                <div className="p-6 text-center">
                                    <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        No hay avistamientos aún
                                    </p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                                        Ve a la página de un ave y haz clic en "Bitácora"
                                    </p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {sightings.map((sighting) => (
                                        <motion.div
                                            key={sighting._id}
                                            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                                            onClick={() => {
                                                setMapCenter([sighting.location.lat, sighting.location.lng]);
                                                setSelectedSighting(sighting);
                                            }}
                                            whileHover={{ x: 4 }}
                                        >
                                            <div className="flex gap-3">
                                                <img
                                                    src={sighting.birdImage}
                                                    alt={sighting.birdName}
                                                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                                                        {sighting.birdName}
                                                    </h3>
                                                    <p className="text-xs italic text-gray-600 dark:text-gray-400 truncate">
                                                        {sighting.birdLatinName}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                                        {new Date(sighting.date).toLocaleDateString('es-CL', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        })}
                                                    </p>
                                                    {sighting.notes && (
                                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                                                            {sighting.notes}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate(`/ave/${sighting.birdId}`);
                                                    }}
                                                    className="flex-1 text-xs bg-nature-500 text-white px-3 py-1.5 rounded-lg hover:bg-nature-600 transition"
                                                >
                                                    Ver Ave
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (confirm('¿Eliminar este avistamiento?')) {
                                                            deleteSighting(sighting._id);
                                                        }
                                                    }}
                                                    className="px-3 py-1.5 text-xs text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                                💡 Arrastra los marcadores en el mapa para ajustar la ubicación
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Map */}
            <div className="flex-1 relative">
                <MapContainer
                    center={mapCenter}
                    zoom={sightings.length > 0 ? 10 : 5}
                    className="h-full w-full z-0"
                    key={mapCenter.join(',')}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Draggable Markers */}
                    {sightings.map((sighting) => (
                        <DraggableMarker key={sighting._id} sighting={sighting} />
                    ))}

                    {/* User Location Marker */}
                    {userLocation && (
                        <Marker
                            position={userLocation}
                            icon={L.divIcon({
                                className: 'user-location-marker',
                                html: `
                                    <div style="
                                        width: 20px;
                                        height: 20px;
                                        border-radius: 50%;
                                        background: #3b82f6;
                                        border: 3px solid white;
                                        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                                    "></div>
                                `,
                                iconSize: [20, 20],
                                iconAnchor: [10, 10]
                            })}
                        >
                            <Popup>
                                <div className="text-center">
                                    <p className="font-semibold text-blue-600">Tu ubicación actual</p>
                                </div>
                            </Popup>
                        </Marker>
                    )}
                </MapContainer>

                {/* Toggle Sidebar Button */}
                <button
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="absolute top-6 left-6 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {showSidebar ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                        )}
                    </svg>
                </button>

                {/* Stats Badge */}
                {!showSidebar && sightings.length > 0 && (
                    <div className="absolute top-6 left-20 z-10 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {sightings.length} {sightings.length === 1 ? 'avistamiento' : 'avistamientos'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Logbook;
