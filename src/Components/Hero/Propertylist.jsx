
import React from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard'; // Import PropertyCard component
import Error from '../Error/Error'; // Import Error component
import Header from '../Header/header.jsx';

function PropertyList() {
    const location = useLocation();
    const properties = location.state?.properties || [];
    console.log('444444444==========>', properties);

    return (
        <>
        <Header />
        <div>
            {/* Property List Section */}
            <div className="p-4">
                {/* <h1 className="text-4xl">Searched Properties</h1> */}
                {properties.length > 0 ? (
                    <div className="flex flex-wrap -mx-2 mt-5">
                        {properties.map(property => (
                            <div key={property.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                <PropertyCard property={property} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Error message="No properties found." /> // Show Error component when no properties are found
                )}
            </div>
        </div>
        </>
    );
}

export default PropertyList;
