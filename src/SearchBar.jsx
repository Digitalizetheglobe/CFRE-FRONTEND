// import axios from 'axios';
// import React, { useState, useEffect, useMemo } from 'react';
// import { FaSearch } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';


// const allAreas = [
//     "Shivaji Nagar", "Deccan Gymkhana", "Camp (Pune Cantonment)", "Sadashiv Peth", "Narayan Peth", "Kasba Peth", "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Wadgaon Sheri", "Mundhwa", "Kharadi", "Aundh", "Baner", "Balewadi", "Pashan", "Hinjawadi", "Bavdhan", "Bibwewadi", "Katraj", "Dhankawadi", "Undri", "NIBM Road", "Wanowrie", "Pimpri", "Chinchwad", "Wakad", "Bhosari", "Alandi", "Hadapsar", "Magarpatta City", "Fursungi", "Wagholi", "Manjri", "Sinhagad Road", "Warje", "Kothrud", "Ravet", "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
//     "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
//     "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
//     "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund",
//     "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
//     "Thane West", "Thane East", "Ghodbunder Road", "Kopri", "Vartak Nagar", "Majiwada", "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli", "Kondapur", "Kukatpally", "Manikonda",
//     "Begumpet", "Somajiguda", "Punjagutta", "Ameerpet", "Himayatnagar", "Abids", "Nampally",
//     "Secunderabad", "Trimulgherry", "Alwal", "Malkajgiri", "Sainikpuri",
//     "Attapur", "Rajendra Nagar", "Mehdipatnam", "Tolichowki", "Masab Tank",
//     "LB Nagar", "Dilsukhnagar", "Kothapet", "Nagole", "Uppal",
//     "Miyapur", "Nizampet", "Bachupally", "Chandanagar", "Patancheru",
//     "Shamshabad", "Shamirpet", "Kompally", "Medchal", "Moinabad",
//     "Charminar", "Moghalpura", "Falaknuma", "Bahadurpura", "Yakutpura", "MG Road", "Brigade Road", "Koramangala", "Indiranagar", "Whitefield", "Marathahalli", "Bellandur", "Sarjapur",
//     "Electronic City", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi",
//     "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "RT Nagar",
//     "Yelahanka", "Devanahalli", "Thanisandra", "Nagawara", "Hennur",
//     "KR Puram", "Mahadevapura", "Ramamurthy Nagar", "Kaggadasapura", "Varthur",
//     "Bannerghatta Road", "Arekere", "Hulimavu", "Begur", "Bommanahalli",
//     "Kumaraswamy Layout", "Vijayanagar", "Kengeri", "Nagarbhavi", "Magadi Road"
// ];

// const puneAreas = [
//     "Shivaji Nagar", "Deccan Gymkhana", "Camp (Pune Cantonment)", "Sadashiv Peth", "Narayan Peth", "Kasba Peth",
//     "Koregaon Park", "Kalyani Nagar", "Viman Nagar", "Wadgaon Sheri", "Mundhwa", "Kharadi",
//     "Aundh", "Baner", "Balewadi", "Pashan", "Hinjawadi", "Bavdhan",
//     "Bibwewadi", "Katraj", "Dhankawadi", "Undri", "NIBM Road", "Wanowrie",
//     "Pimpri", "Chinchwad", "Wakad", "Bhosari", "Alandi",
//     "Hadapsar", "Magarpatta City", "Fursungi", "Wagholi", "Manjri", "Sinhagad Road", "Warje", "Kothrud", "Ravet"
// ];

// const mumbaiAreas = [
//     "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
//     "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
//     "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
//     "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund",
//     "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
//     "Thane West", "Thane East", "Ghodbunder Road", "Kopri", "Vartak Nagar", "Majiwada"
// ];

// const hyderabadAreas = [
//     "Banjara Hills", "Jubilee Hills", "Madhapur", "Hitech City", "Gachibowli", "Kondapur", "Kukatpally", "Manikonda",
//     "Begumpet", "Somajiguda", "Punjagutta", "Ameerpet", "Himayatnagar", "Abids", "Nampally",
//     "Secunderabad", "Trimulgherry", "Alwal", "Malkajgiri", "Sainikpuri",
//     "Attapur", "Rajendra Nagar", "Mehdipatnam", "Tolichowki", "Masab Tank",
//     "LB Nagar", "Dilsukhnagar", "Kothapet", "Nagole", "Uppal",
//     "Miyapur", "Nizampet", "Bachupally", "Chandanagar", "Patancheru",
//     "Shamshabad", "Shamirpet", "Kompally", "Medchal", "Moinabad",
//     "Charminar", "Moghalpura", "Falaknuma", "Bahadurpura", "Yakutpura"
// ];

// const bangaloreAreas = [
//     "MG Road", "Brigade Road", "Koramangala", "Indiranagar", "Whitefield", "Marathahalli", "Bellandur", "Sarjapur",
//     "Electronic City", "HSR Layout", "BTM Layout", "Jayanagar", "JP Nagar", "Banashankari", "Basavanagudi",
//     "Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Hebbal", "RT Nagar",
//     "Yelahanka", "Devanahalli", "Thanisandra", "Nagawara", "Hennur",
//     "KR Puram", "Mahadevapura", "Ramamurthy Nagar", "Kaggadasapura", "Varthur",
//     "Bannerghatta Road", "Arekere", "Hulimavu", "Begur", "Bommanahalli",
//     "Kumaraswamy Layout", "Vijayanagar", "Kengeri", "Nagarbhavi", "Magadi Road"
// ];


// const SearchBar = () => {
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [officeType, setOfficeType] = useState('');
//     const [furnishingStatus, setFurnishingStatus] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [suggestions, setSuggestions] = useState([]);
//     const [propertyCategory, setPropertyCategory] = useState('Rent');
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('https://cfrecpune.com/cfreproperties/');
//                 setProperties(response.data);
//             } catch (error) {
//                 console.error('Error fetching properties:', error);
//             }
//         };
//         fetchProperties();
//     }, []);


//     // No debounce: Directly set the search query
//     const handleSearchQueryChange = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     useEffect(() => {
//         const filterProperties = () => {
//             const filtered = properties.filter(property => {
//                 const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
//                 const propertyTypeMatch = officeType ? property.propertyType.toLowerCase() === officeType.toLowerCase() : true;
//                 const furnishingStatusMatch = furnishingStatus ? property.furnishing.toLowerCase().includes(furnishingStatus.toLowerCase()) : true;
//                 const searchMatch = searchQuery ? property.location?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

//                 return cityMatch && propertyTypeMatch && (propertyCategory === 'Invest' || furnishingStatusMatch) && searchMatch;
//             });

//             setFilteredProperties(filtered);
//         };

//         filterProperties();
//     }, [selectedCity, officeType, furnishingStatus, searchQuery, properties, propertyCategory]);


//     const handleCityChange = (e) => {
//         const city = e.target.value;
//         setSelectedCity(city);
//         setSearchQuery('');

//         // Set suggestions based on the selected city
//         if (!city) {
//             setSuggestions(allAreas); // Show all areas when no city is selected
//         } else {
//             switch (city) {
//                 case 'Pune':
//                     setSuggestions(puneAreas);
//                     break;
//                 case 'Mumbai':
//                     setSuggestions(mumbaiAreas);
//                     break;
//                 case 'Hyderabad':
//                     setSuggestions(hyderabadAreas);
//                     break;
//                 case 'Bangalore':
//                     setSuggestions(bangaloreAreas);
//                     break;
//                 default:
//                     setSuggestions(allAreas);
//                     break;
//             }
//         }
//     };

//     // Set Pune as default city on component mount
//     useEffect(() => {
//         setSelectedCity('Pune');
//         setSuggestions(puneAreas);
//     }, []);

//     const handleSearchSuggestionClick = (area) => {
//         setSearchQuery(area);
//         setSuggestions([]);
//     };

//     const handleSearch = () => {
//         navigate('/PropertyList', { state: { properties: filteredProperties } });
//     };

//     return (
//         <div className="bg-white p-4 md:rounded-full  shadow-lg flex flex-wrap items-center space-x-2 w-full max-w-5xl mx-auto">
//         {/* Property Category selection */}
//         <select
//             value={propertyCategory}
//             onChange={(e) => setPropertyCategory(e.target.value)}
//             className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
//         >
//             <option value="Rent">Rent</option>
//             <option value="Invest">Invest</option>
//         </select>

//         {/* City selection */}
//         <select
//             value={selectedCity}
//             onChange={handleCityChange}
//             className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
//         >
//             <option value="Pune">Pune</option>
//             <option value="Mumbai">Mumbai</option>
//             <option value="Banglore">Banglore</option>
//             <option value="Hyderabad">Hyderabad</option>
//         </select>

//         <div className="relative flex-grow w-full sm:w-auto mb-2 sm:mb-0">
//             <input
//                 type="text"
//                 placeholder="Search location..."
//                 value={searchQuery}
//                 onChange={handleSearchQueryChange}
//                 className="w-full p-2 border rounded focus:outline-none"
//             />
//             {searchQuery && suggestions.length > 0 && (
//                 <ul className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg mt-1 z-10">
//                     {suggestions
//                         .filter(area => area.toLowerCase().includes(searchQuery.toLowerCase()))
//                         .map((area, index) => (
//                             <li
//                                 key={index}
//                                 onClick={() => handleSearchSuggestionClick(area)}
//                                 className="p-2 cursor-pointer hover:bg-gray-200"
//                             >
//                                 {area}
//                             </li>
//                         ))}
//                 </ul>
//             )}
//         </div>

//         {/* Property type selection */}
//         <select
//             value={officeType}
//             onChange={(e) => setOfficeType(e.target.value)}
//             className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
//         >
//             <option value="">Property Type</option>
//             <option value="Office Space">Office Space</option>
//             <option value="Showroom Space">Showroom Space</option>
//             <option value="Hospital">Hospital</option>
//             <option value="Independent Building">Independent Building</option>
//             <option value="Warehouse / Godown">Warehouse / Godown</option>
//             <option value="Industrial Factory">Industrial Factory</option>
//             <option value="Industrial Lands / Plot">Industrial Lands / Plot</option>
//             <option value="Commercial Lands / Plot">Commercial Lands / Plot</option>
//             <option value="Restaurant Space">Restaurant Space</option>
//             <option value="Banquet Hall">Banquet Hall</option>
//             <option value="Commercial Row House">Commercial Row House</option>
//             <option value="Hotel Resort">Hotel / Resort</option>
//             <option value="Residential Land / Plot">Residential Land / Plot</option>
//             <option value="Fractional Investment">Fractional Investment</option>
//         </select>

//         {/* Furnishing Status dropdown, shown only when "Rent" is selected */}
//         {propertyCategory === 'Rent' && (
//             <select
//                 value={furnishingStatus}
//                 onChange={(e) => setFurnishingStatus(e.target.value)}
//                 className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
//             >
//                 <option value="">Furnishing Status</option>
//                 <option value="Furnished">Furnished</option>
//                 <option value="Unfurnished">Unfurnished</option>
//             </select>
//         )}

//         <button
//             onClick={handleSearch}
//             className="bg-[#d84a48] hover:bg-[#c34543] text-white p-2 rounded-full flex items-center justify-center w-full sm:w-auto"
//         >
//             <FaSearch className="mr-2" /> Search
//         </button>
//     </div>

//     );
// };

// export default SearchBar;


import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


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
    "ABC- Appa Balwant Chowk", "Akurdi",
    "Ambegoan", "Anand Vihar", "Apte Road", "Aundh", "Aundh Annexe",
    "Bajirao Road", "Balewadi", "Baner", "Baner Highway Side", "Baner Pashan Link Road", "Baner Road", "Bavdhan", "Bhandarkar Road", "Bhawani Peth",
    "Bhosari", "Bhosri MIDC", "Bhugaon", "Bhukum", "Bibwewadi", "BT Kawade Road", "Budhwar Peth", "Bund Garden", "Bundgarden Road", "Camp", "Chakan", "Chakan MIDC", "Chandan Nagar",
    "Chandani Chowk", "Chinchwad", "Dange Chowk", "Dapodi", "Deccan", "Dhankawadi", "Dhanori", "Dhayari", "East Street", "Erandwane", "Fatima Nagar", "FC Road", "Fursungi", "Ganesh Peth",
    "Ghole Road", "Ghorpadi",
    "Hadapsar", "Handewadi", "Hinjewadi", "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Jejuri", "JM Road", "Kahradi", "Kalewadi", "Kalyani Nagar", "Karve Nagar",
    "Karve Road", "Kasarwadi",
    "Kasba Peth", "Katraj",
    "Katraj Kondhwa Road", "Keshav Nagar",
    "Khadakwasla", "Khadki", "Kharadi", "Kondhwa", "Kondhwa BK", "Koregaon Park", "Kothrud", "Kumthekar Road", "Law College Road", "Laxmi Road", "Lohegaon", "Loni Kand", "Lulla Nagar",
    "Madhuvan Colony",
    "Magarpatta",
    "Mahalunge",
    "Mangalwar Peth",
    "Manjiri",
    "Manjiri BK",
    "Market Yard",
    "MG Road",
    "Model Colony",
    "Mohammed Wadi",
    "Mundhwa",
    "Nagar Road",
    "Nal Stop",
    "Nana Peth",
    "Narayan Peth",
    "Narhe",
    "Narhe MIDC",
    "Nashik Highway",
    "Navi Peth",
    "Near Nawle Bridge",
    "NIBM",
    "Nigdi",
    "Pashan",
    "Paud Road",
    "PCMC",
    "Perne Phata",
    "Peth",
    "Phugewadi",
    "Phursungi",
    "Pimple Gurav",
    "Pimple Nilakh",
    "Pimple Saudagar",
    "Pimpri",
    "Pimpri Chinchwad",
    "Prabhat Road",
    "Pul Gate",
    "Pune Satara Pune",
    "Pune Station",
    "Rasta Peth",
    "Ravet",
    "Raviwar Peth",
    "RTO",
    "Sadashiv Peth",
    "Sadhu Waswani",
    "Sadhu Waswani Chowk",
    "Salisbury Park",
    "Salunke Vihar",
    "Sangvi",
    "Saniwar Wada",
    "SB Road",
    "Shaniwar Peth",
    "Shashtri Nagar",
    "Shivaji Nagar",
    "Singhgad Road",
    "Sinhagad Road",
    "Somwar Peth",
    "Sukrawar Peth",
    "Swargate",
    "Talawade",
    "Talegoan Dabhade",
    "Tathawade",
    "Tilak Road",
    "Tingre Nagar",
    "Undri",
    "Viman Nagar",
    "Vishal Nagar",
    "Vishrantwadi",
    "Wagholi",
    "Wakad",
    "Wakdewadi",
    "Wanowari",
    "Warje",
    "Yerwada"
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
    const [propertyCategory, setPropertyCategory] = useState('Rent');
    const navigate = useNavigate();

    const [minSqFt, setMinSqFt] = useState('');
    const [maxSqFt, setMaxSqFt] = useState('');
    const [showSqFtFields, setShowSqFtFields] = useState(false);
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


    // No debounce: Directly set the search query
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };
    useEffect(() => {
        const filtered = properties.filter(property => {
            const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
            const propertyTypeMatch = officeType ? property.propertyType.toLowerCase() === officeType.toLowerCase() : true;
            const furnishingStatusMatch = furnishingStatus ? property.furnishing.toLowerCase() === furnishingStatus.toLowerCase() : true;
            const searchMatch = searchQuery ? property.location?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

            // Square footage filter logic based on carpet area
            const buArea = property.buArea ? parseFloat(property.buArea) : 0;
            const minSqFtMatch = minSqFt ? buArea >= parseFloat(minSqFt) : true;
            const maxSqFtMatch = maxSqFt ? buArea <= parseFloat(maxSqFt) : true;

            return cityMatch && propertyTypeMatch && (propertyCategory === 'Invest' || furnishingStatusMatch) && searchMatch && minSqFtMatch && maxSqFtMatch;
        });

        setFilteredProperties(filtered);
    }, [selectedCity, officeType, furnishingStatus, searchQuery, properties, propertyCategory, minSqFt, maxSqFt]);



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

    // Set Pune as default city on component mount
    useEffect(() => {
        setSelectedCity('Pune');
        setSuggestions(puneAreas);
    }, []);

    const handleSearchSuggestionClick = (area) => {
        setSearchQuery(area);
        setSuggestions([]);
    };

    const handleSearch = () => {
        navigate('/PropertyList', { state: { properties: filteredProperties } });
    };

    return (
        <div className="hidden md:flex bg-white md:p-4 p-4 md:rounded-full shadow-lg flex-wrap items-center space-x-2 w-full md:max-w-7xl mx-auto">
            {/* Property Category selection */}
            <select
                value={propertyCategory}
                onChange={(e) => setPropertyCategory(e.target.value)}
                className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
            >
                <option value="Rent">Rent</option>
                <option value="Invest">Invest</option>
            </select>

            {/* City selection */}
            <select
                value={selectedCity}
                onChange={handleCityChange}
                className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
            >
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Banglore">Banglore</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>

            <div className="relative flex-grow w-full sm:w-auto mb-2 sm:mb-0">
                <input
                    type="text"
                    placeholder="Search location..."
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    className="w-full p-2 border rounded focus:outline-none"
                />
                {searchQuery && suggestions.length > 0 && (
                    <ul className="absolute top-full left-0 right-0 bg-white border rounded shadow-lg mt-1 z-10">
                        {suggestions
                            .filter(area => area.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((area, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleSearchSuggestionClick(area)}
                                    className="p-2 cursor-pointer hover:bg-gray-200"
                                >
                                    {area}
                                </li>
                            ))}
                    </ul>
                )}
            </div>

            {/* Property type selection */}
            <select
                value={officeType}
                onChange={(e) => setOfficeType(e.target.value)}
                className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
            >
                <option value="">Property Type</option>
                <option value="OfficeSpace">Office Space</option>
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
                    className="border p-2 rounded focus:outline-none w-full sm:w-auto mb-2 sm:mb-0"
                >
                    <option value="">Furnishing Status</option>
                    <option value="Furnished">Furnished</option>
                    <option value="Unfurnished">Unfurnished</option>
                </select>
            )}

            {/* Square Footage Search */}
            <div className="relative inline-block text-left">
                <button
                    onClick={() => setShowSqFtFields(!showSqFtFields)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                Area
                </button>
                {showSqFtFields && (
                    <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="p-4 space-y-2">
                            <input
                                type="number"
                                placeholder="Min Sq Ft"
                                value={minSqFt}
                                onChange={(e) => setMinSqFt(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none"
                            />
                            <input
                                type="number"
                                placeholder="Max Sq Ft"
                                value={maxSqFt}
                                onChange={(e) => setMaxSqFt(e.target.value)}
                                className="w-full p-2 border rounded focus:outline-none"
                            />
                        </div>
                    </div>
                )}
            </div>

            <button
                onClick={handleSearch}
                className="bg-[#d84a48] hover:bg-[#c34543] text-white p-2 mt-1 rounded-full flex items-center justify-center w-full sm:w-auto"
            >
                <FaSearch className="mr-2" /> Search
            </button>
        </div>


    );
};

export default SearchBar;