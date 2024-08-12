// // import React, { useRef } from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaWhatsapp, FaBookmark, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// // import { MdOutlinePinDrop } from 'react-icons/md';
// // import PropertyCard from './PropertyCard';

// // const PropertyList = () => {
// //     const properties = [
// //         {
// //             id: '1',
// //             image: '/ATP-Ongoing.jpg',
// //             price: 9,
// //             location: 'Baner',
// //             yield: 8.33,
// //             rental: 7.09,
// //             propertyType: 'Office Space',
// //             buildingType: 'A Grade',
// //             area: 1430,
// //             rent: '--',  
// //             roi: 5.5
// //         },
// //     ];

// //     const scrollRef = useRef(null);

// //     const scrollLeft = () => {
// //         if (scrollRef.current) {
// //             scrollRef.current.scrollBy({
// //                 left: -window.innerWidth / 3,
// //                 behavior: 'smooth'
// //             });
// //         }
// //     };

// //     const scrollRight = () => {
// //         if (scrollRef.current) {
// //             scrollRef.current.scrollBy({
// //                 left: window.innerWidth / 3,
// //                 behavior: 'smooth'
// //             });
// //         }
// //     };

// //     return (
// //         <div className="container mx-auto">
// //             <div className="flex justify-between items-center mb-4">
// //                 <div>
// //                     <h2 className="text-xl font-bold">Trending Commercial Properties For Sale</h2>
// //                     <p className="text-sm text-gray-600">Stay up to date with the top-performing commercial properties to invest better!</p>
// //                 </div>
// //                 <button className="flex items-center px-4 py-2 text-sm font-bold text-[#d84a48] border-2 border-[#d84a48] rounded-full hover:text-white hover:bg-[#d84a48] transition-all ease-in-out duration-300">
// //                     <span className="mr-2">Explore Properties</span>
// //                     <FaArrowRight />
// //                 </button>
// //             </div>

// //             <div className="relative">
// //                 {/* <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 z-10">
// //                     <FaChevronLeft className="text-[#d84a48]" />
// //                 </button> */}

// //                 <div
// //                     ref={scrollRef}
// //                     className="flex overflow-x-scroll scroll-smooth space-x-6 no-scrollbar"
// //                     style={{ scrollSnapType: 'x mandatory' }}
// //                 >
// //                     {properties.map((property) => (
// //                         <div key={property.id} className="scroll-snap-align-start w-80">
// //                             <Link to={`/property/${property.id}`}>
// //                                 <PropertyCard property={property} />
// //                             </Link>
// //                         </div>
// //                     ))}
// //                 </div>

// //                 {/* <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 z-10">
// //                     <FaChevronRight className="text-[#d84a48]" />
// //                 </button> */}
// //             </div>
// //         </div>
// //     );
// // };

// // export default PropertyList;



// // PropertyList.js
// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import PropertyCard from './PropertyCard'; // Ensure this path is correct
// import Image from '../assets/ABZ.jpg'; // Ensure the path to your image is correct

// // Sample property data
// const properties = [
//     {
//         id: 1,
//         image: Image,
//         propertyType: 'Office Space',
//         location: 'Baner Pune',
//         buildingType: 'A Grade',
//         area: '1180 Sq.Ft',
//         rent: '--',
//         roi: '5.5%'
//     },
//     {
//         id: 2,
//         image: Image,
//         propertyType: 'Office Space',
//         location: 'Baner Pune',
//         buildingType: 'A Grade',
//         area: '1180 Sq.Ft',
//         rent: '--',
//         roi: '5.5%'
//     },
//     {
//         id: 3,
//         image: Image,
//         propertyType: 'Office Space',
//         location: 'Baner Pune',
//         buildingType: 'A Grade',
//         area: '1180 Sq.Ft',
//         rent: '--',
//         roi: '5.5%'
//     },
//     {
//         id: 4,
//         image: Image,
//         propertyType: 'Office Space',
//         location: 'Baner Pune',
//         buildingType: 'A Grade',
//         area: '1180 Sq.Ft',
//         rent: '--',
//         roi: '5.5%'
//     },
//     {
//         id: 5,
//         image: Image,
//         propertyType: 'Office Space',
//         location: 'Baner Pune',
//         buildingType: 'A Grade',
//         area: '1180 Sq.Ft',
//         rent: '--',
//         roi: '5.5%'
//     },
//     // Add more properties here
// ];

// const PropertyList = () => {
//     // Ref to access the Swiper instance
//     const swiperRef = useRef(null);

//     return (
//         <div className='my-8 mx-12'>
//             <div className='flex flex-row'>
//                 <div className='w-4 h-6 bg-black rounded-md md:w-6 md:h-10'></div>
//                 <h1 className="md:text-3xl text-semibold mx-2 mb-2">Trending Commercial Properties For Sale</h1>
//             </div>
//             <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                     1280: {
//                         slidesPerView: 3,
//                     },
//                 }}
//                 onSwiper={(swiper) => (swiperRef.current = swiper)}
//             >
//                 {properties.map((property) => (
//                     <SwiperSlide key={property.id}>
//                         <div
//                             onMouseEnter={() => swiperRef.current.autoplay.stop()}
//                             onMouseLeave={() => swiperRef.current.autoplay.start()}
//                         >
//                             <PropertyCard property={property} />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default PropertyList;
