import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const allAreas = [
    "Shivaji Nagar", "Deccan Gymkhana", "Camp (Pune Cantonment)", "Sadashiv Peth", "Narayan Peth", "Kasba Peth",
    "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Wadgaon Sheri", "Mundhwa", "Kharadi",
    "Aundh", "Baner", "Balewadi", "Pashan", "Hinjawadi", "Bavdhan",
    "Bibwewadi", "Katraj", "Dhankawadi", "Undri", "NIBM Road", "Wanowrie",
    "Pimpri", "Chinchwad", "Wakad", "Bhosari", "Alandi",
    "Hadapsar", "Magarpatta City", "Fursungi", "Wagholi", "Manjri", "Sinhagad Road", "Warje", "Kothrud", "Ravet",
    "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
    "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
    "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
    "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund",
    "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
    "Thane West", "Thane East", "Ghodbunder Road", "Kopri", "Vartak Nagar", "Majiwada"
];

const puneAreas = [
    "Shivaji Nagar", "Deccan Gymkhana", "Camp (Pune Cantonment)", "Sadashiv Peth", "Narayan Peth", "Kasba Peth",
    "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Wadgaon Sheri", "Mundhwa", "Kharadi",
    "Aundh", "Baner", "Balewadi", "Pashan", "Hinjawadi", "Bavdhan",
    "Bibwewadi", "Katraj", "Dhankawadi", "Undri", "NIBM Road", "Wanowrie",
    "Pimpri", "Chinchwad", "Wakad", "Bhosari", "Alandi",
    "Hadapsar", "Magarpatta City", "Fursungi", "Wagholi", "Manjri", "Sinhagad Road", "Warje", "Kothrud", "Ravet"
];

const mumbaiAreas = [
    "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
    "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
    "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
    "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund",
    "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
    "Thane West", "Thane East", "Ghodbunder Road", "Kopri", "Vartak Nagar", "Majiwada"
];

const SearchBar = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [activeTab, setActiveTab] = useState('Rent');
    const [selectedCity, setSelectedCity] = useState('');
    const [officeType, setOfficeType] = useState('');
    const [furnishingStatus, setFurnishingStatus] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
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
        const filterProperties = () => {
            const filtered = properties.filter(property => {
                const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
                const officeTypeMatch = officeType ? property.propertyType.toLowerCase() === officeType.toLowerCase() : true;
                const furnishingStatusMatch = furnishingStatus ? property.furnishing.toLowerCase().includes(furnishingStatus.toLowerCase()) : true;
                const searchMatch = searchQuery ? property.location?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

                return cityMatch && officeTypeMatch && furnishingStatusMatch && searchMatch;
            });

            setFilteredProperties(filtered);
        };
        filterProperties();
    }, [selectedCity, officeType, furnishingStatus, searchQuery, properties]);

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setSearchQuery(''); // Reset search query when city changes

        if (city === 'Pune') {
            setSuggestions(puneAreas);
        } else if (city === 'Mumbai') {
            setSuggestions(mumbaiAreas);
        } else {
            setSuggestions(allAreas); // If no city is selected, show all areas
        }
    };

    const handleSearch = () => {
        navigate('/PropertyList', { state: { properties: filteredProperties } });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearchSuggestionClick = (area) => {
        setSearchQuery(area);
        setSuggestions([]); // Clear suggestions after selecting an area
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-2 w-full max-w-2xl mx-auto">
            <div className="flex justify-center space-x-2 mb-2">
                <button
                    onClick={() => setActiveTab('Rent')}
                    className={`py-1 px-4 rounded ${activeTab === 'Rent' ? 'bg-[#d84a48] text-white' : 'bg-gray-200 text-black'}`}
                >
                    Rent
                </button>
                <button
                    onClick={() => setActiveTab('Invest')}
                    className={`py-1 px-4 rounded ${activeTab === 'Invest' ? 'bg-[#d84a48] text-white' : 'bg-gray-200 text-black'}`}
                >
                    Invest
                </button>
            </div>

            <div className="flex items-center mb-2">
                <div className="flex-shrink-0 border rounded-md p-1">
                    <select
                        value={selectedCity}
                        onChange={handleCityChange}
                        className="border-none bg-transparent p-1 focus:outline-none"
                    >
                        <option value="">Select City</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        {/* Add more cities */}
                    </select>
                </div>

                <div className="w-4"></div>

                <div className="flex-grow flex items-center border rounded-md p-1 relative">
                    <input
                        type="text"
                        placeholder="What locations do you prefer?"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-1 border-none bg-transparent outline-none"
                    />
                    <FaSearch
                        onClick={handleSearch}
                        className="text-gray-500 ml-2 cursor-pointer"
                    />
                    {searchQuery && suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg mt-1 z-10">
                            {suggestions
                                .filter(area => area.toLowerCase().includes(searchQuery.toLowerCase()))
                                .map(area => (
                                    <div
                                        key={area}
                                        onClick={() => handleSearchSuggestionClick(area)}
                                        className="p-2 cursor-pointer hover:bg-gray-200"
                                    >
                                        {area}
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {activeTab === 'Rent' && (
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="flex flex-col">
                        <select
                            value={officeType}
                            onChange={(e) => setOfficeType(e.target.value)}
                            className="border p-1 rounded focus:outline-none"
                        >
                            <option value="">Select Office Type</option>
                            <option value="OfficeSpace">Office Space</option>
                            {/* Add more office types */}
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
                            {/* Add more asset types */}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
