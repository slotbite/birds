import React from 'react';
import useBirdStore from '../store/useBirdStore';
import BirdCard from './BirdCard';

const BirdGrid = () => {
    const { filteredBirds } = useBirdStore();

    console.log('BirdGrid rendering with', filteredBirds.length, 'birds');

    if (filteredBirds.length === 0) {
        return (
            <div className="flex justify-center items-center py-20">
                <p className="text-white text-lg">No se encontraron aves con ese nombre.</p>
            </div>
        );
    }

    return (
        <div className="max-w-[1920px] mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {filteredBirds.map((bird) => (
                    <BirdCard key={bird.uid} bird={bird} />
                ))}
            </div>
        </div>
    );
};

export default BirdGrid;
