import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

const allAreas = [
    "Shivaji Nagar", "Deccan Gymkhana", "Camp (Pune Cantonment)", "Sadashiv Peth", "Narayan Peth", "Kasba Peth", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Wadgaon Sheri", "Mundhwa", "Kharadi", "Aundh", "Baner", "Balewadi", "Pashan", "Hinjawadi", "Bavdhan", "Bibwewadi", "Katraj", "Dhankawadi", "Undri", "NIBM Road", "Wanowrie", "Pimpri", "Chinchwad", "Wakad", "Bhosari", "Alandi", "Hadapsar", "Magarpatta City", "Fursungi", "Wagholi", "Manjri", "Sinhagad Road", "Warje", "Kothrud", "Ravet", "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
    "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
    "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
    "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund",
    "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
    "Thane West", "Thane East", "Ghodbunder Road", "Kopri", "Vartak Nagar", "Majiwada", "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli", "Kondapur", "Kukatpally", "Manikonda",
    "Begumpet", "Somajiguda", "Punjagutta", "Ameerpet", "Himayatnagar", "Abids", "Nampally",
    "Secunderabad", "Trimulgherry", "Alwal", "Malkajgiri", "Sainikpuri",
    "Attapur", "Rajendra Nagar", "Mehdipatnam", "Tolichowki", "Masab Tank",
    "LB Nagar", "Dilsukhnagar", "Kothapet", "Nagole", "Uppal",
    "Miyapur", "Nizampet", "Bachupally", "Chandanagar", "Patancheru",
    "Shamshabad", "Shamirpet", "Kompally", "Medchal", "Moinabad",
    "Charminar", "Moghalpura", "Falaknuma", "Bahadurpura", "Yakutpura", "MG Road", "Brigade Road", "Koramangala", "Indiranagar", "Whitefield", "Marathahalli", "Bellandur", "Sarjapur",
    "Electronic City", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi",
    "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "RT Nagar",
    "Yelahanka", "Devanahalli", "Thanisandra", "Nagawara", "Hennur",
    "KR Puram", "Mahadevapura", "Ramamurthy Nagar", "Kaggadasapura", "Varthur",
    "Bannerghatta Road", "Arekere", "Hulimavu", "Begur", "Bommanahalli",
    "Kumaraswamy Layout", "Vijayanagar", "Kengeri", "Nagarbhavi", "Magadi Road"
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

const hyderabadAreas = [
    "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli", "Kondapur", "Kukatpally", "Manikonda",
    "Begumpet", "Somajiguda", "Punjagutta", "Ameerpet", "Himayatnagar", "Abids", "Nampally",
    "Secunderabad", "Trimulgherry", "Alwal", "Malkajgiri", "Sainikpuri",
    "Attapur", "Rajendra Nagar", "Mehdipatnam", "Tolichowki", "Masab Tank",
    "LB Nagar", "Dilsukhnagar", "Kothapet", "Nagole", "Uppal",
    "Miyapur", "Nizampet", "Bachupally", "Chandanagar", "Patancheru",
    "Shamshabad", "Shamirpet", "Kompally", "Medchal", "Moinabad",
    "Charminar", "Moghalpura", "Falaknuma", "Bahadurpura", "Yakutpura"
];

const bangaloreAreas = [
    "MG Road", "Brigade Road", "Koramangala", "Indiranagar", "Whitefield", "Marathahalli", "Bellandur", "Sarjapur",
    "Electronic City", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi",
    "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "RT Nagar",
    "Yelahanka", "Devanahalli", "Thanisandra", "Nagawara", "Hennur",
    "KR Puram", "Mahadevapura", "Ramamurthy Nagar", "Kaggadasapura", "Varthur",
    "Bannerghatta Road", "Arekere", "Hulimavu", "Begur", "Bommanahalli",
    "Kumaraswamy Layout", "Vijayanagar", "Kengeri", "Nagarbhavi", "Magadi Road"
];


const SearchBar = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [officeType, setOfficeType] = useState('');
    const [furnishingStatus, setFurnishingStatus] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [propertyCategory, setPropertyCategory] = useState('Rent'); // New state for category selection
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


    // Debounce search query input to reduce lag
    const debouncedSearchQuery = useMemo(
        () => debounce((query) => setSearchQuery(query), 300),
        []
    );

    useEffect(() => {
        return () => {
            debouncedSearchQuery.cancel(); // Cancel debounce on component unmount
        };
    }, [debouncedSearchQuery]);

    useEffect(() => {
        const filterProperties = () => {
            const filtered = properties.filter(property => {
                const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
                const propertyTypeMatch = officeType ? property.propertyType.toLowerCase() === officeType.toLowerCase() : true;
                const furnishingStatusMatch = furnishingStatus ? property.furnishing.toLowerCase().includes(furnishingStatus.toLowerCase()) : true;
                const searchMatch = searchQuery ? property.location?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

                return cityMatch && propertyTypeMatch && (propertyCategory === 'Invest' || furnishingStatusMatch) && searchMatch;
            });

            setFilteredProperties(filtered);
        };

        filterProperties();
    }, [selectedCity, officeType, furnishingStatus, searchQuery, properties, propertyCategory]);


    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setSearchQuery('');

        // Set suggestions based on the selected city
        if (!city) {
            setSuggestions(allAreas); // Show all areas when no city is selected
        } else {
            switch (city) {
                case 'Pune':
                    setSuggestions(puneAreas);
                    break;
                case 'Mumbai':
                    setSuggestions(mumbaiAreas);
                    break;
                case 'Hyderabad':
                    setSuggestions(hyderabadAreas);
                    break;
                case 'Bangalore':
                    setSuggestions(bangaloreAreas);
                    break;
                default:
                    setSuggestions(allAreas);
                    break;
            }
        }
    };

    const handleSearchSuggestionClick = (area) => {
        setSearchQuery(area);
        setSuggestions([]);
    };

    const handleSearch = () => {
        navigate('/PropertyList', { state: { properties: filteredProperties } });
    };

    return (
        <div className="bg-white p-4 rounded-full shadow-lg flex items-center space-x-2 w-full max-w-5xl mx-auto">
            {/* Property Category selection */}
            <select
                value={propertyCategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
                className="border p-2 rounded focus:outline-none "
            >
                <option value="Rent">Rent</option>
                <option value="Invest">Invest</option>
            </select>

            {/* City selection */}
            <select
                value={selectedCity}
                onChange={handleCityChange}
                className="border p-2 rounded focus:outline-none "
            >
                <option value="">City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Banglore">Banglore</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>

            {/* Location search with suggestions */}
            <div className="relative flex-grow">
                <input
                    type="text"
                    placeholder="Search location..."
                    value={searchQuery}
                    onChange={(e) => debouncedSearchQuery(e.target.value)}
                    className="w-full p-2 border rounded focus:outline-none"
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

            {/* Property type selection */}
            <select
                value={officeType}
                onChange={(e) => setOfficeType(e.target.value)} // Fix here
                className="border p-2 rounded focus:outline-none "
            >
                <option value="">Property Type</option>
                <option value="Office Space">Office Space</option>
                <option value="Showroom Space">Showroom Space</option>
                <option value="Hospital">Hospital</option>
                <option value="Independent Building">Independent Building</option>
                <option value="Warehouse / Godown">Warehouse / Godown</option>
                <option value="Industrial Factory">Industrial Factory</option>
                <option value="Industrial Lands / Plot">Industrial Lands / Plot</option>
                <option value="Commercial Lands / Plot">Commercial Lands / Plot</option>
                <option value="Restaurant Space">Restaurant Space</option>
                <option value="Banquet Hall">Banquet Hall</option>
                <option value="Commercial Row House">Commercial Row House</option>
                <option value="Hotel Resort">Hotel / Resort</option>
                <option value="Residential Land / Plot">Residential Land / Plot</option>
                <option value="Fractional Investment">Fractional Investment</option>

            </select>

            {/* Furnishing Status dropdown, shown only when "Rent" is selected */}
            {propertyCategory === 'Rent' && (
                <select
                    value={furnishingStatus}
                    onChange={(e) => setFurnishingStatus(e.target.value)}
                    className="border p-2 rounded focus:outline-none "
                >
                    <option value="">Furnishing Status</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>

                </select>
            )}

            <button
                onClick={handleSearch}
                className="bg-[#d84a48] hover:bg-[#c34543] text-white p-2 rounded-full flex items-center justify-center w-32"
            >
                <FaSearch className="mr-2" /> Search
            </button>
        </div>
    );
};

export default SearchBar;
