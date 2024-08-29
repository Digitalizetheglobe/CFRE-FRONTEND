import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard'; // Import PropertyCard component

function PropertyList() {
    const location = useLocation();
    const properties = location.state?.properties || [];
    console.log('444444444==========>', properties);

    return (
        <div className="p-4">
            {properties.length > 0 ? (
                <div className="flex flex-wrap -mx-2">
                    {properties.map(property => (
                        <div key={property.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  px-2 mb-4">
                            <PropertyCard property={property} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No properties found.</p>
            )}
        </div>
    );
}

export default PropertyList;
