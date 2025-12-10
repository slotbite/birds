import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch complete bird details from API
 * @param {Object} bird - Bird object with _links.self property
 * @returns {Object} - { details, isLoading, error }
 */
export const useBirdDetails = (bird) => {
    const [details, setDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!bird || !bird._links || !bird._links.self) {
            setIsLoading(false);
            setDetails(null);
            return;
        }

        setIsLoading(true);

        // Use proxy to avoid CORS issues
        const proxyUrl = bird._links.self.replace('https://aves.ninjas.cl', '');

        fetch(proxyUrl)
            .then(response => response.json())
            .then(data => {
                setDetails(data);
                setIsLoading(false);
            })
            .catch(err => {
                setDetails(null);
                setIsLoading(false);
                setError(err);
            });
    }, [bird]);

    return {
        details,
        isLoading,
        error,
        hasDetails: !!details
    };
};
