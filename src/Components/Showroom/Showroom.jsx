// import React from 'react';
// import ShowroomCard from './ShowroomCard';
// import ShowroomVideo from './showroomvideo.mp4'; // Import your video file

// const Showroom = () => {
//     const showroomProperties = [
//         {
//             id: 1,
//             title: 'Luxury Showroom Space',
//             imageUrl: '/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg',
//             price: '22.00',
//             location: 'HinjeWadi phase1, Pune',
//             rentalYield: '7.5',
//             monthlyRental: '8.00',
//         },
//         {
//             id: 2,
//             title: 'Luxury Showroom Space',
//             imageUrl: '/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg',
//             price: '23.00',
//             location: 'Baner,Pune',
//             rentalYield: '7.5',
//             monthlyRental: '8.00',
//         },
//         // Add more showroom properties here
//     ];

//     return (
//         <div className="relative overflow-hidden">
//             <div className="absolute inset-0 w-full h-[75vh] overflow-hidden ">
//                 <video
//                     className="w-full h-full object-cover"
//                     src={ShowroomVideo}
//                     autoPlay
//                     loop
//                     muted
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                     <h1 className="text-6xl text-white">Showroom Properties</h1>
//                 </div>
//             </div>

//             {/* Main content */}
//             <div className="relative container mx-auto p-4 mt-[80vh]">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {showroomProperties.map(property => (
//                         <ShowroomCard key={property.id} property={property} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Showroom;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ShowroomCard from './ShowroomCard';
// import ContactForm from '../MainBody/ContactForm';
// import ShowroomVideo from './showroomvideo.mp4'; // Import your video file
// import Error from '../Error/Error';


// const Showroom = () => {
//     const [properties, setProperties] = useState([]);
//     const [isFormVisible, setFormVisible] = useState(false);

//     const handleButtonClick = () => {
//         setFormVisible(true);
//     };

//     const handleCloseForm = () => {
//         setFormVisible(false);
//     };

//     useEffect(() => {
//         const fetchProperties = async () => {
//             try {
//                 const response = await axios.get('https://cfrecpune.com/showroomproperty');
//                 setProperties(response.data);
//                 console.log("Fetched showroom properties:", response.data);
//             } catch (error) {
//                 console.error('Error fetching showroom properties:', error);
//             }
//         };

//         fetchProperties();
//     }, []);

//     return (
//         <div className="relative overflow-hidden">
//             <div className="absolute inset-0 w-full h-[75vh] overflow-hidden ">
//                 <video
//                     className="w-full h-full object-cover"
//                     src={ShowroomVideo}
//                     autoPlay
//                     loop
//                     muted
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                     <h1 className="text-4xl text-white">Showroom Properties</h1>
//                 </div>
//             </div>

//             <div className="relative container mx-auto p-4 mt-[80vh]">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {properties.length === 0 ? (
//                         <p>No showroom properties found.</p>
//                     ) : (
//                         properties.map(property => (
//                             <ShowroomCard
//                                 key={property.id}
//                                 property={property}
//                                 onEnquire={handleButtonClick} // Pass the handler
//                             />
//                         ))
//                     )}
//                 </div>
//             </div>

//             {/* Render ContactForm only if isFormVisible is true */}
//             {isFormVisible && (
//                 <div
//                     className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
//                     onClick={handleCloseForm} // Close on overlay click
//                 >
//                     <div
//                         className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
//                         onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
//                     >
//                         <ContactForm onClose={handleCloseForm} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Showroom;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowroomCard from './ShowroomCard';
import ContactForm from '../MainBody/ContactForm';
import ShowroomVideo from './showroomvideo.mp4'; // Import your video file
import Error from '../Error/Error'; // Import the Error component
import Header from '../Header/header.jsx'
const Showroom = () => {
    const [properties, setProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null); // State for error handling

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/showroomproperty');
                setProperties(response.data);
                setError(null); // Clear error if data fetch is successful
            } catch (error) {
                console.error('Error fetching showroom properties:', error);
                setError('Failed to load showroom properties. Please try again later.'); // Set error message
            }
        };

        fetchProperties();
    }, []);

    return (
        <>
        <Header />
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 w-full h-[75vh] overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src={ShowroomVideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-4xl text-white">Showroom Properties</h1>
                </div>
            </div>

            <div className="relative container mx-auto p-4 mt-[80vh]">
                {error ? (
                    <Error message={error} /> // Render Error component if there's an error
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {properties.length === 0 ? (
                            <p>No showroom properties found.</p>
                        ) : (
                            properties.map(property => (
                                <ShowroomCard
                                    key={property.id}
                                    property={property}
                                    onEnquire={handleButtonClick} // Pass the handler
                                />
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Render ContactForm only if isFormVisible is true */}
            {isFormVisible && (
                <div
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm} // Close on overlay click
                >
                    <div
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div></>
    );
};

export default Showroom;
