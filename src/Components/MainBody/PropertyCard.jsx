// import React from 'react';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';
// import Image from './office.jpg'

// const PropertyCard = ({ property }) => (
//     <div className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
//         <div className="min-h-[280px] h-full">
//             <img src={property.image} alt="Property" className="w-full h-full object-cover" />
//         </div> 
//         <div className="flex-grow font-serif">
//         <h2 className="text-base font-semibold">Prelease Property</h2>
//             <div className="my-2 text-sm">
//                 <p><strong>Property Type:</strong> {property.propertyType}</p>
//                 <p><strong>Location:</strong> {property.location}</p>
//                 <p><strong>Building Type:</strong> {property.buildingType}</p>
//                 <p><strong>Area:</strong> {property.area} Sq.Ft.</p>
//                 <p><strong>Rent / Month:</strong> --</p>
//                 <p><strong>ROI:</strong> {property.roi}%</p>
//             </div>
//             <div className="flex justify-between items-center">

//                 <div className="flex space-x-2">
//                     <button className="text-green-600">
//                         <BsWhatsapp size={24} />
//                     </button>
//                     <button className="text-black">
//                         <FaPhoneAlt size={24} />
//                     </button>
//                 </div>
//                 {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors duration-300">
//                     Know More 
//                 </button> */}
//             </div>

//         </div>

//     </div>
// );

// export default PropertyCard;








import React, { useRef } from 'react';
// import ContactForm from './ContactForm';
import { FaPhoneAlt } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from '../assets/ABC.jpeg'; // Ensure you import your image correctly
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; 

// Sample property data
const properties = [
    {
        id: 1,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 2,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 3,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 4,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 5,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 1,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 2,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 3,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 4,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 5,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    // Add more properties here
];

function PropertyCard({ property }) {

    const navigate = useNavigate(); // Initialize useNavigate



    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+918149977661';
    };

    const handleImageClick = () => {
        navigate(`/property/${property.id}`); // Navigate to the property detail page
    };

    return (
        // <div>
        //     <div className="border border-gray-950 bg-white grid sm:grid-cols-2 items-center   w-auto md:w-[430px] max-w-md max-sm:max-w-xs rounded-lg overflow-hidden mx-2 my-2 ho hover:scale-105 ">
        //         <div className="min-h-[220px] h-full ">
        //             <img src={property.image} className="w-full h-full object-cover" alt="Property" />
        //         </div>

        //         <div className="p-3">
        //             <h3 className="text-lg font-semibold ">Prelease Property</h3>
        //             <div className="mt-1 text-sm ">
        //                 <p className="mb-1 flex justify-between">
        //                     Property Type
        //                     <span className="font-semibold">{property.propertyType}</span>
        //                 </p>
        //                 <p className="mb-1 flex justify-between">
        //                     Location
        //                     <span className="font-semibold">{property.location}</span>
        //                 </p>
        //                 <p className="mb-1 flex justify-between">
        //                     Building Type
        //                     <span className="font-semibold">{property.buildingType}</span>
        //                 </p>
        //                 <p className="mb-1 flex justify-between">
        //                     Area
        //                     <span className="font-semibold">{property.area}</span>
        //                 </p>
        //                 <p className="mb-1 flex justify-between">
        //                     Rent / Month
        //                     <span className="font-semibold">{property.rent}</span>
        //                 </p>
        //                 <p className="flex justify-between">
        //                     ROI
        //                     <span className="font-semibold">{property.roi}</span>
        //                 </p>
        //             </div>

        //             <div className="flex flex-wrap items-center cursor-pointer  rounded-lg w-full px-2 py-1 mt-4">
        //                 <button
        //                     onClick={handleImageClick}
        //                     className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-full transition-colors duration-300 font-serif hover:scale-105 text-xs">
        //                     Know More
        //                 </button>
        //                 <div className="ml-auto flex space-x-2">
        //                     <button
        //                         onClick={handleWhatsAppClick}
        //                         className="text-green-600 hover:scale-150">
        //                         <BsWhatsapp size={18} />
        //                     </button>
        //                     <button
        //                         onClick={handlePhoneClick}
        //                         className="text-black hover:scale-150">
        //                         <FaPhoneAlt size={18} />
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
    {/* Share button */}
    <div className="absolute top-0 right-0 z-10 p-2">
        <a
            href={`https://wa.me/?text=${encodeURIComponent('Check out this property: ' + property.image)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-normal py-2 px-2 rounded flex items-center"
        >
            <FaShareAlt className="hover:scale-125" size={18} />
        </a>
    </div>

    <div className="relative">
        <img className="w-full h-48 object-cover" src={property.image} alt="Property" />
        <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 rounded hover:scale-125">
            More Images
        </button>
    </div>

    <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">Prelease Property</h3>
        <div className="text-gray-700 text-base mb-2">
            <p className="mb-1 flex justify-between">
                Property Type
                <span className="font-semibold">{property.propertyType}</span>
            </p>
            <p className="mb-1 flex justify-between">
                Location
                <span className="font-semibold">{property.location}</span>
            </p>
            <p className="mb-1 flex justify-between">
                Building Type
                <span className="font-semibold">{property.buildingType}</span>
            </p>
            <p className="mb-1 flex justify-between">
                Area
                <span className="font-semibold">{property.area}</span>
            </p>
            <p className="mb-1 flex justify-between">
                Rent / Month
                <span className="font-semibold">{property.rent}</span>
            </p>
            <p className="flex justify-between">
                ROI
                <span className="font-semibold">{property.roi}</span>
            </p>
        </div>
    </div>

    <div className="px-6 pt-1 pb-2 flex justify-between items-center">
        <button 
        onClick={handleImageClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
        Know More
        </button>
        <div className="ml-2 flex space-x-2">
            <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded flex items-center"
            >
                <FaWhatsapp className="ml-1" />
            </button>
            <button
                onClick={handlePhoneClick}
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded flex items-center"
            >
                <FaPhoneAlt className="ml-1" />
            </button>
        </div>
    </div>
</div>

    );
}



function PropertyList() {
    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Handle form submission, e.g., send data to an API
    };

    // Ref to access the Swiper instance
    const swiperRef = useRef(null);

    return (
        <div className='my-8 mx-12 '>
            <div className='flex flex-row'>

                <h1 className=" md:text-3xl text-semibold mx-2 mb-5">Trending Commercial Properties</h1>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 3,
                    },

                    1280: {
                        slidesPerView: 3,
                    },

                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {properties.map(property => (
                    <SwiperSlide key={property.id}>
                        <div
                            onMouseEnter={() => swiperRef.current.autoplay.stop()}
                            onMouseLeave={() => swiperRef.current.autoplay.start()}
                        >
                            <PropertyCard
                                property={property}
                                onFormSubmit={handleFormSubmit}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PropertyList;

































// PropertyCard.js




// import React from 'react';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';
// import { useNavigate } from 'react-router-dom';

// const PropertyCard = ({ property }) => {
//     const navigate = useNavigate();

//     const handleWhatsAppClick = () => {
//         window.open('https://wa.me/918149977661', '_blank');
//     };

//     const handlePhoneClick = () => {
//         window.location.href = 'tel:+918149977661';
//     };

//     const handleImageClick = () => {
//         navigate(`/property/${property.id}`); // Navigate to the property detail page
//     };

//     return (
//         <div>
//             <div className="border border-gray-950 bg-white grid sm:grid-cols-2 items-center w-auto md:w-[430px] max-w-md max-sm:max-w-xs rounded-lg overflow-hidden mx-2 my-2 hover:scale-105">
//                 <div className="min-h-[220px] h-full">
//                     <img src={property.image} className="w-full h-full object-cover" alt="Property" />
//                 </div>

//                 <div className="p-3">
//                     <h3 className="text-lg font-semibold">Prelease Property</h3>
//                     <div className="mt-1 text-sm">
//                         <p className="mb-1 flex justify-between">
//                             Property Type
//                             <span className="font-semibold">{property.propertyType}</span>
//                         </p>
//                         <p className="mb-1 flex justify-between">
//                             Location
//                             <span className="font-semibold">{property.location}</span>
//                         </p>
//                         <p className="mb-1 flex justify-between">
//                             Building Type
//                             <span className="font-semibold">{property.buildingType}</span>
//                         </p>
//                         <p className="mb-1 flex justify-between">
//                             Area
//                             <span className="font-semibold">{property.area}</span>
//                         </p>
//                         <p className="mb-1 flex justify-between">
//                             Rent / Month
//                             <span className="font-semibold">{property.rent}</span>
//                         </p>
//                         <p className="flex justify-between">
//                             ROI
//                             <span className="font-semibold">{property.roi}</span>
//                         </p>
//                     </div>

//                     <div className="flex flex-wrap items-center cursor-pointer rounded-lg w-full px-2 py-1 mt-4">
//                         <button
//                             onClick={handleImageClick}
//                             className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-full transition-colors duration-300 font-serif hover:scale-105 text-xs">
//                             Know More
//                         </button>
//                         <div className="ml-auto flex space-x-2">
//                             <button
//                                 onClick={handleWhatsAppClick}
//                                 className="text-green-600 hover:scale-150">
//                                 <BsWhatsapp size={18} />
//                             </button>
//                             <button
//                                 onClick={handlePhoneClick}
//                                 className="text-black hover:scale-150">
//                                 <FaPhoneAlt size={18} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PropertyCard;
