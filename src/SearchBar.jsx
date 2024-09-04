import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SearchBar = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [activeTab, setActiveTab] = useState('Rent');
    const [selectedCity, setSelectedCity] = useState('');
    const [officeType, setOfficeType] = useState('');
    const [furnishingStatus, setFurnishingStatus] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Fetch properties from the API
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    useEffect(() => {
        // Filter properties based on city, office type, furnishing status, and search query
        const filterProperties = () => {
            const filtered = properties.filter(property => {
                const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
                const officeTypeMatch = officeType ? property.propertyType.toLowerCase() === officeType.toLowerCase() : true;
                const furnishingStatusMatch = furnishingStatus ? property.furnishing.toLowerCase() === furnishingStatus.toLowerCase() : true;
                const searchMatch = searchQuery ? property.location?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

                return cityMatch && officeTypeMatch && furnishingStatusMatch && searchMatch;
            });

            setFilteredProperties(filtered);
        };

        filterProperties();
    }, [selectedCity, officeType, furnishingStatus, searchQuery, properties]);

    const handleSearch = () => {
        navigate('/PropertyList', { state: { properties: filteredProperties } });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-2 w-full max-w-2xl mx-auto">
            {/* Rent and Invest Tabs */}
            <div className="flex justify-center space-x-2 mb-2">
                <button
                    onClick={() => setActiveTab('Rent')}
                    className={`py-1 px-4 rounded ${activeTab === 'Rent' ? 'bg-[#d84a48] text-white' : 'bg-gray-200 text-black'}`}
                >
                    Rent
                </button>
                <button
                    onClick={() => setActiveTab('Invest')}
                    className={`py-1 px-4 rounded ${activeTab === 'Invest' ? 'bg-[#d84a48]   text-white' : 'bg-gray-200 text-black'}`}
                >
                    Invest
                </button>
            </div>

            {/* Search Bar with City Dropdown and Icon */}
            <div className="flex items-center mb-2">
    {/* City Dropdown */}
    <div className="flex-shrink-0 border rounded-md p-1">
        <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="border-none bg-transparent p-1 focus:outline-none border rounded "
        >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
        </select>
    </div>

    {/* Gap between City Dropdown and Search Bar */}
    <div className="w-4"></div> {/* Adjust this value to control the gap */}

    {/* Search Bar */}
    <div className="flex-grow flex items-center border rounded-md p-1">
        <input
            type="text"
            placeholder="What locations do you prefer?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} // Add onKeyDown event handler
            className="w-full p-1 border-none bg-transparent outline-none"
        />
        <FaSearch
            onClick={handleSearch} // Attach handleSearch to the onClick event
            className="text-gray-500 ml-2 cursor-pointer w-16"
        />
    </div>
</div>


            {/* Rent Tab Content */}
            {activeTab === 'Rent' && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="flex flex-col">
                        <select
                            value={officeType}
                            onChange={(e) => setOfficeType(e.target.value)}
                            className="border p-1 rounded focus:outline-none"
                        >
                            <option value="">Select Office Type</option>
                            <option value="OfficeSpace">Office</option>
                            <option value="Retail">Retail</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <select
                            value={furnishingStatus}
                            onChange={(e) => setFurnishingStatus(e.target.value)}
                            className="border p-1 rounded focus:outline-none"
                        >
                            <option value="">Furnishing Status</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                        </select>
                    </div>
                </div>
            )}

            {/* Invest Tab Content */}
            {activeTab === 'Invest' && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="flex flex-col">
                        <select
                            value={officeType}
                            onChange={(e) => setOfficeType(e.target.value)}
                            className="border p-1 rounded focus:outline-none"
                        >
                            <option value="">Select Asset Type</option>
                            <option value="OfficeSpace">Office</option>
                            <option value="Warehouse">Warehouse</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
