import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import ContactForm from '../MainBody/ContactForm';

const Prelease = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://192.168.0.105:8000/saleproperty');
                setProperties(response.data);

                console.log("Fetched properties:", response.data);

                const preleasedProperties = response.data.filter(property => property.propertyType === 'Preleased');
                setFilteredProperties(preleasedProperties);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    useEffect(() => {
        filterAndSortProperties(searchTerm, sortOrder);
    }, [searchTerm, sortOrder, properties]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOrder(event.target.value);
    };

    const filterAndSortProperties = (searchTerm, sortOrder) => {
        let filtered = properties.filter(property => property.propertyType === 'Preleased');

        if (searchTerm) {
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.basicPrice - b.basicPrice);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.basicPrice - a.basicPrice);
        }

        console.log('Filtered and sorted properties:', filtered);
        setFilteredProperties(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="text-4xl">Pre-leased Properties</h1>
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
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.length === 0 ? (
                    <p>No pre-leased properties found.</p>
                ) : (
                    filteredProperties.map(property => (
                        <PropertyCard 
                            key={property.id} 
                            property={property}
                            onEnquire={handleButtonClick} // Pass the handler
                        />
                    ))
                )}
            </div>

            {/* Render ContactForm only if isFormVisible is true */}
            {isFormVisible && (
                <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'>
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                    <button onClick={handleCloseForm} className='absolute inset-0'></button>
                </div>
            )}
        </div>
    );
};

export default Prelease;