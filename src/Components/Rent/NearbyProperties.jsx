// NearbyProperties.jsx
import React from 'react';
import PropertyCard from '../MainBody/PropertyCard';

const NearbyProperties = ({ properties }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Properties</h2>
            <div className="flex flex-col space-y-4">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default NearbyProperties;
