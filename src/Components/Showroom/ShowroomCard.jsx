
import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; // Importing Share icon from react-icons
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image from '../assets/ABC.jpeg';
const ShowroomCard = ({ property }) => {
    const shareUrl = `https://cfrecpune.com/cfreproperties/${property.slug}`;
    const title = property.title;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] transition-transform duration-300 ease-in-out relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className="hover:scale-125 transition-transform duration-200" size={18} />
                </a>
            </div>

            <Link to={`/property-detail/${property.slug}`}>
    {/* Replaced the property image with the provided image */}
    <img 
        className="w-full h-48 object-cover"
        src={property.multiplePropertyImages.length > 0 ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}` : Image}
        alt="Property"
    />
</Link>


            <div className="px-6 py-4">
                {/* Showroom Price */}
                <div className="font-bold text-xl">{property.basicPrice}</div>

                {/* Showroom Location */}
                <Link to={`/property-detail/${property.id}`} className="text-lg text-gray-600 mt-2 block hover:text-[#d84a48] transition-colors duration-300">
                    {property.buildingName}
                </Link>
                <div className="text-gray-600 mt-1">{property.location}, {property.city}</div>

            </div>

            <div className="px-6 flex text-center items-center">
                {/* Monthly Rental */}
                {/* <p className="text-gray-800 text-base ml-10">
                    Monthly Rental: ₹{property.monthlyRental} L
                </p> */}
            </div>

            <div className="px-6 pb-4 flex justify-between items-center">
                <Link to={`/property-detail/${property.slug}`} className="bg-[#d84a48] hover:bg-black-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 w-4/5"

                >
                    See Details
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded-full flex items-center justify-center h-10 w-10">
                    <FaWhatsapp className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default ShowroomCard;
