// import React from 'react';
// import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import OfficeImage from './Office space.jpeg'

// const PropertyCard = ({ property }) => {
//     const shareUrl = `https://yourwebsite.com/property/${property.id}`;
//     const title = property.title;

//     return (
//         <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
//             {/* Share button */}
//             <div className="absolute top-0 right-0 z-10 p-2">
//                 <a
//                     href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white font-normal py-2 px-2 rounded flex items-center"
//                 >
//                     <FaShareAlt className='hover:scale-125' size={18} />
//                 </a>
//             </div>

//             <div className="relative">
//             <img className="w-full h-40 object-cover" src={property.image || OfficeImage} alt="Property" />
//                 {/* <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 rounded hover:scale-125">
//                     More Images
//                 </button> */}
//             </div>

//             <div className="px-6 py-4">
//                 {/* Property cost */}
//                 {/* <div className="font-bold text-2xl text-gray-800">Rs.{property.totalPrice}</div> */}
                
//                 {/* Property name with link to detailed view */}
//                 <Link to={`/propertydetail/${property.id}`} className="text-lg text-gray-800 mt-2 block hover:text-[#d84a48] transition-colors duration-300">
//                     {property.buildingName}
//                 </Link>
                
//                 {/* Location and city */}
//                 <div className="text-gray-800  text-sm mt-1">{property.location}, {property.city}</div>
//                 <div className="text-gray-800 text-sm mt-1">Built Up Area: {property.builtUpArea} Sq.Ft</div>
//                 <div className="text-gray-800 text-sm mt-1">Carpet Area: {property.carpetArea} Sq.Ft</div>
//             </div>

//             <div className="px-6 pt-1 pb-2 flex justify-between items-center">
//                 <button className="bg-[#d84a48] hover:bg-[#a33735] text-white font-bold py-2 px-8 rounded w-4/5">
//                     Enquire
//                 </button>
//                 <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-1 rounded flex items-center h-10 w-10">
//                     <FaWhatsapp className="ml-2" />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PropertyCard;
import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OfficeImage from './Office space.jpeg';

const PropertyCard = ({ property }) => {
    const shareUrl = `https://yourwebsite.com/property/${property.id}`;
    const title = property.title;

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-2 right-2 z-10 p-1">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-1 px-1 rounded flex items-center"
                >
                    <FaShareAlt className='hover:scale-125' size={16} />
                </a>
            </div>

            <div className="relative">
                <img className="w-full h-32 object-cover" src={property.image || OfficeImage} alt="Property" />
            </div>

            <div className="px-4 py-2">
                {/* Property name with link to detailed view */}
                <Link to={`/propertydetail/${property.id}`} className="text-sm text-bold text-gray-800 mt-1 block hover:text-[#d84a48] transition-colors duration-300">
                    {property.buildingName}
                </Link>
                
                {/* Location and city */}
                <div className="text-gray-800 text-xs mt-1">{property.location}, {property.city}</div>
                <div className="text-gray-800 text-xs mt-1">Built Up Area: {property.builtUpArea} Sq.Ft</div>
                <div className="text-gray-800 text-xs mt-1">Carpet Area: {property.carpetArea} Sq.Ft</div>
            </div>

            <div className="px-4 pt-1 pb-2 flex justify-between items-center">
    <button className="bg-[#d84a48] hover:bg-[#a33735] text-white font-bold py-1 px-4 rounded text-xs flex-grow">
        Enquire
    </button>
    <button className="bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-2 rounded flex items-center h-6 w-8 text-xs ml-2">
        <FaWhatsapp className="ml-0.5" size={14} />
    </button>
</div>

        </div>
    );
};

export default PropertyCard;
