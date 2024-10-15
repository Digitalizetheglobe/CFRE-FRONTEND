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
    "Kumaraswamy Layout", "Vijayanagar", "Kengeri", "Nagarbhavi", "Magadi Road", "Alkapuri", "Sayajigunj", "Gordhanwadi", "Ellora Park", "Fatehgunj", "Tandalja", "Manjalpur", "Karelibaug", "Vasna", "Sardar Nagar", "Makarpura",
    "Padra", "Bapod", "Gotri", "Bhayli", "Savli", "Gorwa", "Vijay Nagar", "Narmada Canal Road", "Pratap Nagar", "Navrangpura", "Bodakdev", "Satellite", "Vastrapur", "Prahlad Nagar", "Ambawadi", "Ellisbridge", "Paldi", "Thaltej", "Maninagar", "Chandkheda", "Gota", "Sola", "Bopal", "Vastral", "Naroda", "Ashram Road", "Shahibaug", "Memnagar", "Juhapura",
    "MG Road", "Palasia", "Rajwada", "Vijay Nagar", "Sapna Sangeeta", "Chappal Market", "Indore Collectorate", "Nehru Park", "Sarafa Bazaar",
    "Lal Baag", "Dewas Naka", "A.B. Road", "Sukhliya", "Banganga", "Rau", "Khajrana", "Mhow", "Bhanwarkuan", "Ring Road", "Mangal City", "Khan River", "Amer Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jal Mahal", "Albert Hall Museum", "Birla Mandir", "Jaipur Market (Johari Bazaar)", "Chokhi Dhani", "Galta Ji (Galta Temple)",
    "Sisodia Rani Garden", "Ram Niwas Garden", "Elefantastic", "Tonk Road", "Vaishali Nagar", "Malviya Nagar", "Bani Park", "Ajmer Road", "Sanganer", "Albert Ekka Chowk", "Ranchi Airport", "Morabadi", "Kanke Road", "Harmu Housing Colony", "Dhurwa", "Bariatu", "Hindpiri", "Khalari", "Nazaratpur",
    "Ormanjhi", "Ratu Road", "Gumla Road", "Tatisilwai", "Kumar Pahar", "Chetla", "Sukhdeonagar", "Shyamali Colony", "Lalpur", "Main Road",
    "Alkapuri", "Sayajigunj", "Gordhanwadi", "Ellora Park", "Fatehgunj", "Tandalja", "Manjalpur", "Karelibaug", "Vasna", "Sardar Nagar", "Makarpura",
    "Padra", "Bapod", "Gotri", "Bhayli", "Savli", "Gorwa", "Vijay Nagar", "Narmada Canal Road", "Pratap Nagar", "City Palace", "Lake Pichola", "Jaisamand Lake", "Jag Mandir", "Saheliyon-ki-Bari", "Fateh Sagar Lake", "Jagdish Temple", "Sajjangarh Palace (Monsoon Palace)",
    "Bagore Ki Haveli", "Saheliyon Ki Bari", "Shilpgram", "Haldighati", "Kumbhalgarh Fort", "Eklingji Temple", "Neemach Mata Temple",
    "Rudra Vilas Palace", "Sukhadia Circle", "Moti Magri", "Bada Mahal", "Rajiv Gandhi Park", "Thane West", "Thane East", "Mulund", "Dombivli", "Kalyan", "Bhiwandi", "Kasara", "Mumbra", "Shahad", "Ulhasnagar", "Airoli", "Ghodbunder Road",
    "Lokhandwala", "Manpada", "Kalwa", "Mahape", "Palava City", "Sewri", "Majiwada", "Teen Haath Naka", "Adajan", "Vesu", "Palsana", "Olpad", "Hazira", "Katargam", "Ghod Dod Road", "Dumas", "Surat City Center", "Udhana", "Maharashtra Society", "Vesu Village",
    "Sarthana Nature Park", "Dumas Beach", "Ichchhpur", "Saraswati Nagar", "Athwa Lines", "Pandesara", "Lal Darwaza", "Vachhraj Complex", "Darjeeling More", "Sevok Road", "Bidhannagar", "Siliguri Junction", "Pradhannagar", "Matigara", "Kali Mandir", "Sukna", "Bagdogra", "Salugara",
    "Iskon Mandir", "Mahananda Weir", "Ashram Para", "Champasari", "Khudiram Colony", "Rajkot Airport", "Rajkot Railway Station", "Kotecha Chowk", "Saurashtra University", "Ratanakut Hill", "Aji Dam", "Nyari Dam", "Bharat Nagar",
    "Jubilee Garden", "Race Course", "Krishna Nagar", "Shastri Maidan", "Sardar Patel Park", "Gundavadi", "Gokul Nagar", "Shankar Nagar", "Dhamtari Road", "Telibandha", "Puja Park", "Ganjpara", "Kota", "Ravishankar University", "Mahatma Gandhi Road", "Chhattisgarh High Court", "Rajendra Nagar", "Bhatagaon",
    "Old Dhamtari Road", "Amapara", "Civil Lines", "Brahmapuri", "Tatyapara", "Bhatia Bazar", "Fafadih", "Sundernagar", "Shivaji Nagar", "Civil Lines", "Sitabuldi", "Hingna", "Koradi", "Panchpaoli", "Khamla", "Mahal", "Ghatshpar", "Sadar", "Wadi", "Maharajbagh", "Dharampeth", "Nandanvan", "Laxmi Nagar", "Manish Nagar", "Pimpri", "Umred", "Nagpur Airport",
    "Borgaon", "Khare Town", "Adasa", "Bidaadi", "Khadki", "Ajni", "Yadav Nagar", "Diksha Bhoomi", "Ramtek", "Kachnar City", "Vishwakarma Nagar", "Paltan Bazaar", "Bardhona", "Dispur", "Guwahati Zoo", "Fancy Bazaar",
    "Kachari", "Hatigaon", "Nehru Park", "Uzan Bazar", "Sukleswar Ghat", "Bamunimaidan", "Guwahati Railway Station", "Beltola", "Ganeshguri",
    "Bhangagarh", "Nabin Nagar", "Sarabbha Nagar", "Sonapur", "Lakhara", "Mirza", "Chandmari", "Khanapara", "Maligaon", "Rukminigaon", "Sarai Rani", "Panaji", "Margao", "Mapusa", "Ponda", "Vasco da Gama", "Calangute", "Baga", "Anjuna", "Candolim", "Palolem", "Agonda", "Dona Paula", "Cabo de Rama", "Fort Aguada", "Saligao", "Siolim", "Arambol", "Morjim", "Assagao", "Benaulim",
    "Cyber City", "MG Road", "Golf Course Road", "Sector 29", "Sector 14", "Sector 17", "Sohna Road", "Sector 46", "DLF Phase 1",
    "DLF Phase 2", "Sushant Lok", "Baani Square", "Nirvana Country", "Palam Vihar", "Galleria Market", "Ardee City", "Sector 82", "Sector 83", "Sector 95", "Sector 57",


];

const puneAreas = [
    "ABC- Appa Balwant Chowk", "Akurdi", "Ambegoan", "Anand Vihar", "Apte Road", "Aundh", "Aundh Annexe", "Bajirao Road", "Balewadi", "Baner", "Baner Highway Side", "Baner Pashan Link Road", "Baner Road", "Bavdhan", "Bhandarkar Road", "Bhawani Peth",
    "Bhosari", "Bhosri MIDC", "Bhugaon", "Bhukum", "Bibwewadi", "BT Kawade Road", "Budhwar Peth", "Bund Garden", "Bundgarden Road", "Camp", "Chakan", "Chakan MIDC", "Chandan Nagar",
    "Chandani Chowk", "Chinchwad", "Dange Chowk", "Dapodi", "Deccan", "Dhankawadi", "Dhanori", "Dhayari", "East Street", "Erandwane", "Fatima Nagar", "FC Road", "Fursungi", "Ganesh Peth",
    "Ghole Road", "Ghorpadi", "Hadapsar", "Handewadi", "Hinjewadi", "Hinjewadi Phase 1", "Hinjewadi Phase 2", "Hinjewadi Phase 3", "Jejuri", "JM Road", "Kahradi", "Kalewadi", "Kalyani Nagar", "Karve Nagar",
    "Karve Road", "Kasarwadi", "Kasba Peth", "Katraj", "Katraj Kondhwa Road", "Keshav Nagar", "Khadakwasla", "Khadki", "Kharadi", "Kondhwa", "Kondhwa BK", "Koregaon Park", "Kothrud", "Kumthekar Road", "Law College Road", "Laxmi Road", "Lohegaon", "Loni Kand", "Lulla Nagar",
    "Madhuvan Colony", "Magarpatta", "Mahalunge", "Mangalwar Peth", "Manjiri", "Manjiri BK", "Market Yard", "MG Road", "Model Colony", "Mohammed Wadi", "Mundhwa", "Nagar Road", "Nal Stop", "Nana Peth",
    "Narayan Peth", "Narhe", "Narhe MIDC", "Nashik Highway", "Navi Peth", "Near Nawle Bridge", "NIBM", "Nigdi", "Pashan", "Paud Road", "PCMC", "Perne Phata", "Peth",
    "Phugewadi", "Phursungi", "Pimple Gurav", "Pimple Nilakh", "Pimple Saudagar", "Pimpri", "Pimpri Chinchwad", "Prabhat Road", "Pul Gate", "Pune Satara Pune", "Pune Station", "Rasta Peth", "Ravet", "Raviwar Peth", "RTO",
    "Sadashiv Peth", "Sadhu Waswani", "Sadhu Waswani Chowk", "Salisbury Park", "Salunke Vihar", "Sangvi", "Saniwar Wada", "SB Road", "Shaniwar Peth",
    "Shashtri Nagar", "Shivaji Nagar", "Singhgad Road", "Sinhagad Road", "Somwar Peth", "Sukrawar Peth", "Swargate", "Talawade", "Talegoan Dabhade", "Tathawade", "Tilak Road", "Tingre Nagar", "Undri", "Viman Nagar", "Vishal Nagar", "Vishrantwadi", "Wagholi", "Wakad", "Wakdewadi", "Wanowari", "Warje", "Yerwada"
];


const mumbaiAreas = [
    "Colaba", "Churchgate", "Marine Drive", "Malabar Hill", "Nariman Point", "Cuffe Parade", "Fort", "Ballard Estate", "Byculla", "Worli",
    "Dadar", "Parel", "Lower Parel", "Matunga", "Mahalaxmi", "Prabhadevi",
    "Bandra", "Khar", "Santacruz", "Vile Parle", "Andheri", "Juhu", "Versova", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar",
    "Kurla", "Ghatkopar", "Powai", "Vikhroli", "Bhandup", "Mulund", "Vashi", "Nerul", "Belapur", "Kharghar", "Panvel", "Airoli",
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

const AhmedabadAreas = [
    "Navrangpura", "Bodakdev", "Satellite", "Vastrapur", "Prahlad Nagar", "Ambawadi", "Ellisbridge", "Paldi", "Thaltej", "Maninagar", "Chandkheda", "Gota", "Sola", "Bopal", "Vastral", "Naroda", "Ashram Road", "Shahibaug", "Memnagar", "Juhapura"
];



const indoreAreas = [
    "MG Road", "Palasia", "Rajwada", "Vijay Nagar", "Sapna Sangeeta", "Chappal Market", "Indore Collectorate", "Nehru Park", "Sarafa Bazaar",
    "Lal Baag", "Dewas Naka", "A.B. Road", "Sukhliya", "Banganga", "Rau", "Khajrana", "Mhow", "Bhanwarkuan", "Ring Road", "Mangal City", "Khan River",
];

const jaipurAreas = [
    "Amer Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jal Mahal", "Albert Hall Museum", "Birla Mandir", "Jaipur Market (Johari Bazaar)", "Chokhi Dhani", "Galta Ji (Galta Temple)",
    "Sisodia Rani Garden", "Ram Niwas Garden", "Elefantastic", "Tonk Road", "Vaishali Nagar", "Malviya Nagar", "Bani Park", "Ajmer Road", "Sanganer"
];

const jodhpurAreas = [
    "Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Clock Tower and Sardar Market", "Mandore Gardens", "Blue City (Old Jodhpur)", "Kaylana Lake", "Ranisar Padamsar", "Sojati Gate", "Osian Temples",
    "Toorji Ka Jhalra (Step Well)", "Nehru Park", "Jodhpur Museum", "Maha Mandir", "Rao Jodha Desert Rock Park", "Balsamand Lake", "Sardar Government Museum"
];

const kolkataAreas = [
    "Alambazar", "Ballygunge", "Bansdroni", "Behala", "Bhowanipore", "Bowbazar", "Dum Dum",
    "Garia", "Ghatakpukur", "Jadavpur", "Kalighat", "Kankurgachi", "Kasba", "Lake Town", "Lansdowne", "Madhyamgram", "Maniktala", "Moulali", "New Alipore",
    "Park Circus", "Salt Lake", "Sarat Bose Road", "Shyambazar", "Tollygunge", "Vivekananda Nagar", "Rajarhat", "Bidhannagar", "Howrah", "North Kolkata", "South Kolkata"
];

const kochiAreas = [
    "Fort Kochi", "Ernakulam", "Marine Drive", "Mattancherry", "Kochi International Airport", "Kumarakom", "Bolgatty Palace",
    "Jew Town", "Cherai Beach", "Vypin Island", "Subhash Park", "Kochi Biennale", "Chottanikkara", "Hill Palace Museum", "Willingdon Island"
];

const naviMumbaiAreas = [
    "Airoli", "Belapur", "Bhandup", "Digha", "Dronagiri", "Kharghar", "Kopar Khairane", "Mansarovar",
    "Navi Mumbai International Airport", "Nerul", "Panvel", "Rabale", "Sanpada", "Sewri", "Turbhe", "Vashi", "Vashi Creek", "Vijay Nagar", "Wadala", "Sector 17", "CBD Belapur"
];

const nashikAreas = [
    "Nashik Road", "Gangapur", "Panchavati", "Satpur", "Indira Nagar", "Nashik City Center", "CIDCO", "Deolali", "Trimbak", "Ambad", "Sinnar", "Lasalgaon",
    "Khadkale", "Ozar", "Anjneri", "Nanduri", "Nashik Dindori Road", "Nashik Pune Highway", "Nashik Gole Colony", "Nashik IT Park", "Nashik Adgaon"
];


const bhopalAreas = [
    "Arera Colony", "MP Nagar", "Bawadiya Kalan", "Hoshangabad Road", "Shahpura", "Kolar Road", "Indrapuri", "Gulmohar", "Chunabhatti", "Ayodhya Bypass",
    "Katara Hills", "Vidyadhar Nagar", "Raisen Road", "Awadhpuri", "Baghmugalia", "Habibganj", "Karond", "Ashoka Garden", "Airport Road", "Berasia Road"
];

const bhubaneswarAreas = [
    "Khandagiri", "Chandaka", "Sahid Nagar", "Jaydev Vihar", "Patia", "Nayapalli", "Old Town", "Mancheswar", "Bapuji Nagar",
    "Chandrasekharpur", "Rasulgarh", "Acharya Vihar", "Baramunda", "Unit 1", "Unit 4", "Unit 6", "Unit 8", "Vani Vihar", "Maitri Vihar", "Shree Vihar"
];

const chennaiAreas = [
    "T. Nagar", "Adyar", "Velachery", "Anna Nagar", "Nungambakkam", "Besant Nagar", "Kodambakkam", "Royapettah",
    "Thiruvanmiyur", "Porur", "Guindy", "Mylapore", "Vadapalani", "Egmore", "Tambaram", "Perungudi", "Saidapet", "Pallavaram", "Alwarpet", "Kilpauk"
];

const coimbatoreAreas = [
    "Gandhipuram", "Peelamedu", "RS Puram", "Saibaba Colony", "Singanallur", "Sundarapuram", "Ganapathy", "Saravanampatti", "Thudiyalur", "Ukkadam",
    "Vadavalli", "Avinashi Road", "Rathinapuri", "Trichy Road", "Kalapatti", "Race Course", "Kuniamuthur", "Kovaipudur", "Town Hall", "Podanur"
];

const delhiNCRAreas = [
    "Connaught Place", "Saket", "Karol Bagh", "Dwarka", "Vasant Kunj", "Rohini", "Janakpuri", "Lajpat Nagar", "Noida", "Gurgaon",
    "Faridabad", "Ghaziabad", "Greater Noida", "Mayur Vihar", "East of Kailash", "South Extension", "Chanakyapuri", "Punjabi Bagh", "Pitampura", "Rajouri Garden"
];

const durgapurAreas = [
    "City Centre", "Bidhannagar", "Benachity", "DVC Township", "A-Zone", "Steel Township", "Raniganj", "Bamunara", "Muchipara", "Amrai", "Rajbandh", "Nadiha", "Prantika", "Gandhi More", "Mamra Bazaar"
];

const gurgaonAreas = [
    "Cyber City", "MG Road", "Golf Course Road", "Sector 29", "Sector 14", "Sector 17", "Sohna Road", "Sector 46", "DLF Phase 1",
    "DLF Phase 2", "Sushant Lok", "Baani Square", "Nirvana Country", "Palam Vihar", "Galleria Market", "Ardee City", "Sector 82", "Sector 83", "Sector 95", "Sector 57"
];

const goaAreas = [
    "Panaji", "Margao", "Mapusa", "Ponda", "Vasco da Gama", "Calangute", "Baga", "Anjuna", "Candolim", "Palolem", "Agonda", "Dona Paula", "Cabo de Rama", "Fort Aguada", "Saligao", "Siolim", "Arambol", "Morjim", "Assagao", "Benaulim"
];

const guwahatiAreas = [
    "Paltan Bazaar", "Bardhona", "Dispur", "Guwahati Zoo", "Fancy Bazaar",
    "Kachari", "Hatigaon", "Nehru Park", "Uzan Bazar", "Sukleswar Ghat", "Bamunimaidan", "Guwahati Railway Station", "Beltola", "Ganeshguri",
    "Bhangagarh", "Nabin Nagar", "Sarabbha Nagar", "Sonapur", "Lakhara", "Mirza", "Chandmari", "Khanapara", "Maligaon", "Rukminigaon", "Sarai Rani"
];

const nagpurAreas = [
    "Civil Lines", "Sitabuldi", "Hingna", "Koradi", "Panchpaoli", "Khamla", "Mahal", "Ghatshpar", "Sadar", "Wadi", "Maharajbagh", "Dharampeth", "Nandanvan", "Laxmi Nagar", "Manish Nagar", "Pimpri", "Umred", "Nagpur Airport",
    "Borgaon", "Khare Town", "Adasa", "Bidaadi", "Khadki", "Ajni", "Yadav Nagar", "Diksha Bhoomi", "Ramtek", "Kachnar City", "Vishwakarma Nagar",
];

const raipurAreas = [
    "Shankar Nagar", "Dhamtari Road", "Telibandha", "Puja Park", "Ganjpara", "Kota", "Ravishankar University", "Mahatma Gandhi Road", "Chhattisgarh High Court", "Rajendra Nagar", "Bhatagaon",
    "Old Dhamtari Road", "Amapara", "Civil Lines", "Brahmapuri", "Tatyapara", "Bhatia Bazar", "Fafadih", "Sundernagar", "Shivaji Nagar"
];

const rajkotAreas = [
    "Rajkot Airport", "Rajkot Railway Station", "Kotecha Chowk", "Saurashtra University", "Ratanakut Hill", "Aji Dam", "Nyari Dam", "Bharat Nagar",
    "Jubilee Garden", "Race Course", "Krishna Nagar", "Shastri Maidan", "Sardar Patel Park", "Gundavadi", "Gokul Nagar"
];

const ranchiAreas = [
    "Albert Ekka Chowk", "Ranchi Airport", "Morabadi", "Kanke Road", "Harmu Housing Colony", "Dhurwa", "Bariatu", "Hindpiri", "Khalari", "Nazaratpur",
    "Ormanjhi", "Ratu Road", "Gumla Road", "Tatisilwai", "Kumar Pahar", "Chetla", "Sukhdeonagar", "Shyamali Colony", "Lalpur", "Main Road"
];

const siliguriAreas = [
    "Darjeeling More", "Sevok Road", "Bidhannagar", "Siliguri Junction", "Pradhannagar", "Matigara", "Kali Mandir", "Sukna", "Bagdogra", "Salugara",
    "Iskon Mandir", "Mahananda Weir", "Ashram Para", "Champasari", "Khudiram Colony"
];

const suratAreas = [
    "Adajan", "Vesu", "Palsana", "Olpad", "Hazira", "Katargam", "Ghod Dod Road", "Dumas", "Surat City Center", "Udhana", "Maharashtra Society", "Vesu Village",
    "Sarthana Nature Park", "Dumas Beach", "Ichchhpur", "Saraswati Nagar", "Athwa Lines", "Pandesara", "Lal Darwaza", "Vachhraj Complex"
];

const thaneAreas = [
    "Thane West", "Thane East", "Mulund", "Dombivli", "Kalyan", "Bhiwandi", "Kasara", "Mumbra", "Shahad", "Ulhasnagar", "Airoli", "Ghodbunder Road",
    "Lokhandwala", "Manpada", "Kalwa", "Mahape", "Palava City", "Sewri", "Majiwada", "Teen Haath Naka"
];

const udaipurAreas = [
    "City Palace", "Lake Pichola", "Jaisamand Lake", "Jag Mandir", "Saheliyon-ki-Bari", "Fateh Sagar Lake", "Jagdish Temple", "Sajjangarh Palace (Monsoon Palace)",
    "Bagore Ki Haveli", "Saheliyon Ki Bari", "Shilpgram", "Haldighati", "Kumbhalgarh Fort", "Eklingji Temple", "Neemach Mata Temple",
    "Rudra Vilas Palace", "Sukhadia Circle", "Moti Magri", "Bada Mahal", "Rajiv Gandhi Park"
];

const vadodaraAreas = [
    "Alkapuri", "Sayajigunj", "Gordhanwadi", "Ellora Park", "Fatehgunj", "Tandalja", "Manjalpur", "Karelibaug", "Vasna", "Sardar Nagar", "Makarpura",
    "Padra", "Bapod", "Gotri", "Bhayli", "Savli", "Gorwa", "Vijay Nagar", "Narmada Canal Road", "Pratap Nagar",
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
                case 'Ahmedabad':
                    setSuggestions(AhmedabadAreas);
                    break;
                case 'Indore':
                    setSuggestions(indoreAreas);
                    break;
                case 'Jodhpur':
                    setSuggestions(jodhpurAreas);
                    break;
                case 'Jaipur':
                    setSuggestions(jaipurAreas);
                    break;
                case 'Kolkata':
                    setSuggestions(kolkataAreas);
                    break;
                case 'Kochi':
                    setSuggestions(kochiAreas);
                    break;
                case 'Navi Mumbai':
                    setSuggestions(naviMumbaiAreas);
                    break;
                case 'Nashik':
                    setSuggestions(nashikAreas);
                    break;
                case 'Bhopal':
                    setSuggestions(bhopalAreas);
                    break;
                case 'Bhubaneswar':
                    setSuggestions(bhubaneswarAreas);
                    break;
                case 'Chennai':
                    setSuggestions(chennaiAreas);
                    break;
                case 'Coimbatore':
                    setSuggestions(coimbatoreAreas);
                    break;
                case 'Delhi NCR':
                    setSuggestions(delhiNCRAreas);
                    break;
                case 'Durgapur':
                    setSuggestions(durgapurAreas);
                    break;
                case 'Gurgaon':
                    setSuggestions(gurgaonAreas);
                    break;
                case 'Goa':
                    setSuggestions(goaAreas);
                    break;
                case 'Guwahati':
                    setSuggestions(guwahatiAreas);
                    break;
                case 'Nagpur':
                    setSuggestions(nagpurAreas);
                    break;
                case 'Raipur':
                    setSuggestions(raipurAreas);
                    break;
                case 'Rajkot':
                    setSuggestions(rajkotAreas);
                    break;
                case 'Ranchi':
                    setSuggestions(ranchiAreas);
                    break;
                case 'Siliguri':
                    setSuggestions(siliguriAreas);
                    break;
                case 'Surat':
                    setSuggestions(suratAreas);
                    break;
                case 'Thane':
                    setSuggestions(thaneAreas);
                    break;
                case 'Udaipur':
                    setSuggestions(udaipurAreas);
                    break;
                case 'Vadodara':
                    setSuggestions(vadodaraAreas)
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
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Bhubaneswar">Bhubaneswar</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Durgapur">Durgapur</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Goa">Goa</option>
                <option value="Guwahati">Guwahati</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Indore">Indore</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Jodhpur">Jodhpur</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Kochi">Kochi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Navi Mumbai">Navi Mumbai</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Pune">Pune</option>
                <option value="Raipur">Raipur</option>
                <option value="Rajkot">Rajkot</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Siliguri">Siliguri</option>
                <option value="Surat">Surat</option>
                <option value="Thane">Thane</option>
                <option value="Udaipur">Udaipur</option>
                <option value="Vadodara">Vadodara</option>

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