
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const Rent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(''); // State for sorting order
    const [furnishingFilter, setFurnishingFilter] = useState(''); // State for furnishing filter
    const [properties, setProperties] = useState([]); // State to store fetched properties
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        // Fetch properties from the API
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setProperties(response.data);
                setFilteredProperties(response.data); // Initialize filtered properties
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        filterAndSortProperties(searchTerm, sortOrder, furnishingFilter);
    };

    const handleSort = (event) => {
        const sortOrder = event.target.value;
        setSortOrder(sortOrder);
        filterAndSortProperties(searchTerm, sortOrder, furnishingFilter);
    };

    const handleFurnishingFilter = (event) => {
        const furnishingFilter = event.target.value;
        setFurnishingFilter(furnishingFilter);
        filterAndSortProperties(searchTerm, sortOrder, furnishingFilter);
    };

    const filterAndSortProperties = (searchTerm, sortOrder, furnishingFilter) => {
        let filtered = properties;

        // Filter by search term (location)
        if (searchTerm) {
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by furnishing type
        if (furnishingFilter) {
            filtered = filtered.filter(property =>
                property.furnishing.toLowerCase() === furnishingFilter.toLowerCase()
            );
        }

        // Sort by price
        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.cost - a.cost);
        }

        setFilteredProperties(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="text-4xl">Properties for Rent</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={sortOrder}
                        onChange={handleSort}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                    <select
                        value={furnishingFilter}
                        onChange={handleFurnishingFilter}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Filter by Furnishing</option>
                        <option value="Fully Furnished">Fully Furnished</option>
                        <option value="Semi Furnished">Semi Furnished</option>
                        <option value="Unfurnished">Unfurnished</option>
                        <option value="Coworking">Coworking</option> {/* Added Coworking option */}
                    </select>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {/* <h1 className="text-4xl mb-4 mt-10">Trading Properties</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div> */}
        </div>
    );
};

export default Rent;
