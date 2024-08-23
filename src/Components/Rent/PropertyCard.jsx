import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PropertyCard = ({ property, onEnquire }) => {
    const shareUrl = `https://yourwebsite.com/property/${property.id}`;
    const title = property.buildingName;

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

            <div className="relative">
                {/* Replaced the property image with the provided image */}
                <img className="w-full h-48 object-cover" src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg" alt="Property" />
                <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 bg-black bg-opacity-50 rounded hover:scale-110 transition-transform duration-200">
                    More Images
                </button>
            </div>

            <div className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold text-2xl text-gray-800">{property.cost} Lac</div>
                
                {/* Property name with link to detailed view */}
                <Link to={`/property-detail/${property.id}`} className="text-lg text-gray-600 mt-2 block hover:text-blue-600 transition-colors duration-300">
                    {property.buildingName}
                </Link>
                
                {/* Location and city */}
                <div className="text-gray-600 mt-1">{property.location}, {property.city}</div>
            </div>

            <div className="px-6 pb-4 flex justify-between items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 w-4/5"
                onClick={onEnquire}>
                    Enquire
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded-full flex items-center justify-center h-10 w-10">
                    <FaWhatsapp className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
