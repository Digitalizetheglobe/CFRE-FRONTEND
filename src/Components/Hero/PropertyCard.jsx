import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OfficeImage from './Office space.jpeg'

const PropertyCard = ({ property }) => {
    const shareUrl = `https://yourwebsite.com/property/${property.id}`;
    const title = property.title;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className='hover:scale-125' size={18} />
                </a>
            </div>

            <div className="relative">
            <img className="w-full h-48 object-cover" src={property.image || OfficeImage} alt="Property" />
                <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 rounded hover:scale-125">
                    More Images
                </button>
            </div>

            <div className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold text-2xl text-gray-800">Rs.{property.totalPrice}</div>
                
                {/* Property name with link to detailed view */}
                <Link to={`/propertydetail/${property.id}`} className="text-lg text-gray-600 mt-2 block hover:text-blue-600 transition-colors duration-300">
                    {property.buildingName}
                </Link>
                
                {/* Location and city */}
                <div className="text-gray-600 mt-1">{property.location}, {property.city}</div>
                <div className="text-gray-600 mt-1">Built Up Area: {property.builtUpArea} Sq.Ft</div>
                <div className="text-gray-600 mt-1">Carpet Area: {property.carpetArea} Sq.Ft</div>
            </div>

            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded w-4/5">
                    Enquire
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded flex items-center h-10 w-10">
                    <FaWhatsapp className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;