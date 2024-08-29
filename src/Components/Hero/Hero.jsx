// import { Search } from 'lucide-react';
// import BannerVideo from './bannerVideo.mp4'; // Import your video
// // import { LuSearchSlash } from 'react-icons/lu';
// // import BannerVideo1 from './bannerVideo1.mp4';


// function Hero() {
//     return (
//         <div className="flex justify-center items-center my-8 mx-4">
//             <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
//                 <video
//                     className="absolute inset-0 w-full h-full object-cover  bg-black bg-opacity-50"
//                     autoPlay
//                     loop
//                     muted
//                 >
//                     {/* <source src={BannerVideo1} type="video/mp4" /> */}
//                     <source src={BannerVideo} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 text-center">
//                         End-to-End Commercial Real Estate Platform
//                     </h1>
//                     <p className="hidden md:flex text-lg sm:text-xl md:text-2xl lg:text-xl text-white mb-6 text-center">
//                         Invest, Sell and Rent Commercial Real Estate backed by verified data.
//                     </p>
//                     <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full sm:w-2/3 md:w-3/4 lg:w-2/3 space-y-4 sm:space-y-0">
//                         <div className="flex items-center space-x-2 w-full sm:w-auto">
//                             <label htmlFor="city" className="text-sm sm:text-base lg:text-lg">
//                                 City
//                             </label>
//                             <select
//                                 id="city"
//                                 className="border p-2 rounded w-full sm:w-auto flex-1 sm:flex-none"
//                             >
//                                 <option>Pune</option>
//                                 <option>Mumbai</option>
//                                 <option>Bangalore</option>
//                                 <option>Hyderabad</option>
//                                 {/* Add other city options here */}
//                             </select>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="What locations do you prefer?"
//                             className="border p-2 rounded w-full flex-1"
//                         />
//                         <button className="p-2 rounded border border-gray-500 w-full sm:w-auto flex justify-center items-center">
//                             <Search size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BannerVideo from './bannerVideo.mp4'; // Import your video

function Hero() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch properties from the API
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/combinedproperties');
                setProperties(response.data);
                console.log('111111111====>', response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    useEffect(() => {
        // Filter properties based on city and search query
        const filterProperties = () => {
            const filtered = properties.filter(property => {
                // Check if the selected city is part of the location (ignoring case)
                const cityMatch = selectedCity ? property.city.toLowerCase().includes(selectedCity.toLowerCase()) : true;
                // Check if the search query matches the description (ignoring case)
                const searchMatch = searchQuery ? property.description?.toLowerCase().includes(searchQuery.toLowerCase()) : true;

                return cityMatch && searchMatch;
            });
            setFilteredProperties(filtered);
        };

        filterProperties();
    }, [selectedCity, searchQuery, properties]);

        console.log('222222222====>',filteredProperties);
        
    const handleSearch = () => {
        navigate('/PropertyList', { state: { properties: filteredProperties } });
    };

    return (
        <div className="flex justify-center items-center my-8 mx-4">
            <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
                    autoPlay
                    loop
                    muted
                >
                    <source src={BannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-xl lg:text-3xl text-white font-bold mb-2 text-center">
                        End-to-End Commercial Real Estate Platform
                    </h1>
                    <p className="hidden md:flex text-lg sm:text-sm md:text-2xl lg:text-base text-white mb-6 text-center">
                        Invest, Sell and Rent Commercial Real Estate backed by verified data.
                    </p>
                    <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full sm:w-2/3 md:w-3/4 lg:w-1/3 space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                            <label htmlFor="city" className="text-sm sm:text-base lg:text-lg">
                                City
                            </label>
                            <select
                                id="city"
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="border p-2 rounded w-full sm:w-auto flex-1 sm:flex-none"
                            >
                                <option value="">Select City</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Hyderabad">Hyderabad</option>
                                {/* Add other city options here */}
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="Search locations.."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border p-2 rounded w-full flex-1"
                        />
                        <button onClick={handleSearch} className="p-2 rounded border border-gray-500 w-full sm:w-auto flex justify-center items-center">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Search } from 'lucide-react';
// import BannerVideo from './bannerVideo.mp4'; // Import your video

// function Hero() {
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [searchQuery, setSearchQuery] = useState('');

//     useEffect(() => {
//         // Fetch properties from the API
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('http://192.168.0.105:8001/properties');
//                 setProperties(response.data);
//                 console.log('222222=====>',response.data);
                
//                 setFilteredProperties(response.data); // Initialize filtered properties
//             } catch (error) {
//                 console.error('Error fetching properties:', error);
//             }
//         };

//         fetchProperties();
//     }, []);

//     // useEffect(() => {
//     //     // Filter properties based on city and search query
//     //     const filterProperties = () => {
//     //         const filtered = properties.filter(property => 
//     //             (selectedCity ? property.location === selectedCity : true) &&
//     //             (searchQuery ? property.description.toLowerCase().includes(searchQuery.toLowerCase()) : true)
//     //         );
//     //         setFilteredProperties(filtered);
//     //     };

//     //     filterProperties();
//     // }, [selectedCity, searchQuery, properties]);

//     return (
//         <div className="flex justify-center items-center my-8 mx-4">
//             <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
//                 <video
//                     className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
//                     autoPlay
//                     loop
//                     muted
//                 >
//                     <source src={BannerVideo} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 text-center">
//                         End-to-End Commercial Real Estate Platform
//                     </h1>
//                     <p className="hidden md:flex text-lg sm:text-xl md:text-2xl lg:text-xl text-white mb-6 text-center">
//                         Invest, Sell and Rent Commercial Real Estate backed by verified data.
//                     </p>
//                     <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full sm:w-2/3 md:w-3/4 lg:w-2/3 space-y-4 sm:space-y-0">
//                         <div className="flex items-center space-x-2 w-full sm:w-auto">
//                             <label htmlFor="city" className="text-sm sm:text-base lg:text-lg">
//                                 City
//                             </label>
//                             <select
//                                 id="city"
//                                 value={selectedCity}
//                                 onChange={(e) => setSelectedCity(e.target.value)}
//                                 className="border p-2 rounded w-full sm:w-auto flex-1 sm:flex-none"
//                             >
//                                 <option value="">Select City</option>
//                                 <option value="Pune">Pune</option>
//                                 <option value="Mumbai">Mumbai</option>
//                                 <option value="Bangalore">Bangalore</option>
//                                 <option value="Hyderabad">Hyderabad</option>
//                                 {/* Add other city options here */}
//                             </select>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="What locations do you prefer?"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="border p-2 rounded w-full flex-1"
//                         />
//                         <button className="p-2 rounded border border-gray-500 w-full sm:w-auto flex justify-center items-center">
//                             <Search size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {/* Display filtered properties if needed */}
//             <div>
//                 {filteredProperties.map(property => (
//                     <div key={property.id} className="p-4 border-b">
//                         <h3 className="text-lg font-semibold">{property.title}</h3>
//                         <p>{property.description}</p>
//                         {/* Add other property details here */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Hero;



















// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Search } from 'lucide-react';
// import BannerVideo from './bannerVideo.mp4';

// function Hero() {
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const [city, setCity] = useState('Pune');
//     const [searchQuery, setSearchQuery] = useState('');

//     // Fetch properties from the API
//     useEffect(() => {
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('http://192.168.0.105:8001/properties');
//                 setProperties(response.data);
//             } catch (error) {
//                 console.error('Error fetching properties:', error);
//             }
//         };

//         fetchProperties();
//     }, []);

//     // Filter properties based on city and search query
//     useEffect(() => {
//         const filtered = properties.filter((property) => 
//             property.city.toLowerCase() === city.toLowerCase() &&
//             property.location.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredProperties(filtered);
//     }, [city, searchQuery, properties]);

//     return (
//         <div className="flex justify-center items-center my-8 mx-4">
//             <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
//                 <video
//                     className="absolute inset-0 w-full h-full object-cover bg-black bg-opacity-50"
//                     autoPlay
//                     loop
//                     muted
//                 >
//                     <source src={BannerVideo} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
//                     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 text-center">
//                         End-to-End Commercial Real Estate Platform
//                     </h1>
//                     <p className="hidden md:flex text-lg sm:text-xl md:text-2xl lg:text-xl text-white mb-6 text-center">
//                         Invest, Sell and Rent Commercial Real Estate backed by verified data.
//                     </p>
//                     <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full sm:w-2/3 md:w-3/4 lg:w-2/3 space-y-4 sm:space-y-0">
//                         <div className="flex items-center space-x-2 w-full sm:w-auto">
//                             <label htmlFor="city" className="text-sm sm:text-base lg:text-lg">
//                                 City
//                             </label>
//                             <select
//                                 id="city"
//                                 value={city}
//                                 onChange={(e) => setCity(e.target.value)}
//                                 className="border p-2 rounded w-full sm:w-auto flex-1 sm:flex-none"
//                             >
//                                 <option value="Pune">Pune</option>
//                                 <option value="Mumbai">Mumbai</option>
//                                 <option value="Bangalore">Bangalore</option>
//                                 <option value="Hyderabad">Hyderabad</option>
//                                 {/* Add other city options here */}
//                             </select>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="What locations do you prefer?"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="border p-2 rounded w-full flex-1"
//                         />
//                         <button className="p-2 rounded border border-gray-500 w-full sm:w-auto flex justify-center items-center">
//                             <Search size={20} />
//                         </button>
//                     </div>
//                     <div className="mt-4 w-full sm:w-2/3 md:w-3/4 lg:w-2/3 text-white">
//                         {filteredProperties.length > 0 ? (
//                             filteredProperties.map((property) => (
//                                 <div key={property.id} className="border-b border-gray-500 py-2">
//                                     <h3 className="text-lg font-semibold">{property.location}</h3>
//                                     <p>{property.description}</p>
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No properties found for the selected criteria.</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;




// import { Search } from 'lucide-react';

// function Hero() {
//     return (
//         <div className="flex justify-center items-center my-8 mx-4 md:mx-8">
//             <div
//                 className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center rounded-lg"
//                 style={{ backgroundImage: "url('/yibei-geng--UdYbiywGeg-unsplash.jpg')" }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12">
//                     <h1 className="text-3xl sm:text-2xl md:text-2xl lg:text-6xl text-white font-bold mb-2">
//                         End-to-End Commercial Real Estate Platform
//                     </h1>
//                     <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
//                         Invest, Sell and Rent Commercial Real Estate backed by verified data.
//                     </p>
//                     <div className="bg-white p-2 sm:p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full max-w-xl">
//                         <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//                             <label htmlFor="city" className="mr-2 text-sm sm:text-base">City</label>
//                             <select id="city" className="border p-2 rounded text-sm sm:text-base">
//                                 <option>Pune</option>
//                                 <option>Mumbai</option>
//                                 <option>Bangalore</option>
//                                 <option>Hyderabad</option>
//                                 {/* Add other city options here */}
//                             </select>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="What locations do you prefer?"
//                             className="border p-2 rounded ml-0 sm:ml-4 flex-1 text-sm sm:text-base"
//                         />
//                         <button className="p-2 rounded ml-0 sm:ml-4 border-gray-900 mt-2 sm:mt-0">
//                             <Search size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;
