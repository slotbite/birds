import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to fetch and manage bird audio
 * @param {Object} bird - Bird object with _links.self property
 * @returns {Object} - { audioUrl, isPlaying, play, stop, isLoading, error }
 */
export const useBirdAudio = (bird) => {
    const [audioUrl, setAudioUrl] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const audioRef = useRef(null);

    // Fetch audio URL from API
    useEffect(() => {
        if (!bird || !bird._links || !bird._links.self) {
            setIsLoading(false);
            setAudioUrl(null);
            return;
        }

        setIsLoading(true);

        // In development, use proxy to avoid CORS. In production, request directly.
        // Note: This assumes the API supports CORS for the production domain.
        const fetchUrl = import.meta.env.DEV
            ? bird._links.self.replace('https://aves.ninjas.cl', '')
            : bird._links.self;

        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                // Log complete data for inspection
                console.log('🐦 Bird API Response for:', bird.name.spanish, data);

                if (data.audio && data.audio.file) {
                    setAudioUrl(data.audio.file);
                } else {
                    setAudioUrl(null);
                }
                setIsLoading(false);
            })
            .catch(err => {
                // Silently handle errors - bird simply has no audio
                setAudioUrl(null);
                setIsLoading(false);
            });
    }, [bird]);

    // Create Audio object when URL is available
    useEffect(() => {
        if (!audioUrl) return;

        const audio = new Audio(audioUrl);
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = 0.5;

        audio.addEventListener('error', (e) => {
            console.error('Audio loading error:', e);
            setError(e);
        });

        audioRef.current = audio;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [audioUrl]);

    // Play audio
    const play = () => {
        if (!audioRef.current) return;

        audioRef.current.currentTime = 0;
        audioRef.current.play()
            .then(() => {
                setIsPlaying(true);
            })
            .catch(err => {
                console.error('play() failed:', err);
                setError(err);
            });
    };

    // Stop audio
    const stop = () => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

    return {
        audioUrl,
        isPlaying,
        play,
        stop,
        isLoading,
        error,
        hasAudio: !!audioUrl
    };
};
