import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard'; // Import PropertyCard component

function PropertyList() {
    const location = useLocation();
    const properties = location.state?.properties || [];
    console.log('444444444==========>',properties);
    

    return (
        <div className="p-4">
            {properties.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>
            ) : (
                <p>No properties found.</p>
            )}
        </div>
    );
}

export default PropertyList;
