import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyCard from './PropertyCard'; // Import PropertyCard component
import Error from '../Error/Error'; // Import Error component
import Header from '../Header/header.jsx';
import Pagination from '@mui/material/Pagination';
import { Helmet } from 'react-helmet-async';

function PropertyList() {
    const location = useLocation(); 
    const properties = location.state?.properties || []; // Ensure properties is an array
    const { filteredProperties = [] } = location.state || {}; // Ensure filteredProperties is an array

    // Determine which set of properties to use
    const displayedProperties = filteredProperties.length > 0 ? filteredProperties : properties;

    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 8; // Set how many properties per page you want to show

    // Sort properties by createdAt or updatedAt in descending order to show latest properties first
    const sortedProperties = [...displayedProperties].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Handle page change for pagination
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Calculate the indices for slicing the properties array
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

    // Get the current properties for the current page
    const currentProperties = sortedProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    return (
        <>
        <Header />
        <Helmet>
                    <title>Explore Premium Office Spaces & Retail Properties for Sale or Rent | CFRE Realty</title>
                    <meta name="description" content="Discover a curated list of high-quality office spaces and retail properties for sale or rent at CFRE Realty. Our comprehensive listings cater to all business needs, ensuring the perfect location for your investment." />
                    <meta property="og:url" content="https://www.cfrerealty.com/PropertyList" />
                    </Helmet> 
        <div>
            {/* Property List Section */}
            <div className="p-4">
                {/* Check if there are any properties to display */}
                {sortedProperties.length > 0 ? (
                    <div className="flex flex-wrap -mx-2 mt-5">
                        {currentProperties.map(property => (
                            <div key={property.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                                <PropertyCard property={property} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Error message="No properties found." /> // Show Error component when no properties are found
                )}
            </div>

            {/* Add pagination component */}
            {sortedProperties.length > propertiesPerPage && (
                <div className="flex justify-center mt-6">
                    <Pagination
                        count={Math.ceil(sortedProperties.length / propertiesPerPage)} // Calculate total number of pages
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                    />
                </div>
            )}
        </div>
        </>
    );
}

export default PropertyList;
