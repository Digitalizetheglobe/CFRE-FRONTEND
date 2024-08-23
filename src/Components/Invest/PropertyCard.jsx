import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; // Importing Share icon from react-icons\
import { Link } from 'react-router-dom'; // Import Link for navigation

const PropertyCard = ({ property, onEnquire  }) => {
    const shareUrl = `https://yourwebsite.com/property/${property.id}`;
    const title = property.title;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400  hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2 ">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className=' hover:scale-125' size={18} />
                </a>
            </div>

            <div className="relative">
            <img className="w-full h-48 object-cover" src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg" alt="Property" />
                <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 rounded  hover:scale-125">
                    More Images
                </button>
            </div>

            <div className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold text-2xl text-gray-800">{property.basicPrice}</div>
                
                {/* Property name with link to detailed view */}
                <Link to={`/propertydetail/${property.id}`} className="text-lg text-gray-600 mt-2 block hover:text-blue-600 transition-colors duration-300">
                    {property.buildingName}
                </Link>
                
                {/* Location and city */}
                <div className="text-gray-600 mt-1">{property.location}, {property.city}</div>
            </div>
            {/* <div className="px-6 py-7">
                <div className="font-bold text-xl">{property.basicPrice}</div>
                <div className='grid grid-flow-col'>
                    <p className="text-gray-700 text-base">
                        {property.location},{property.city}
                    </p>
                    <p className="text-gray-600 text-sm border border-spacing-5 border-opacity-30 p-1 ml-5">
                        Avg. Rental Yield: {property.rentalYield}%
                    </p>
                </div>
            </div> */}

            {/* <div className="px-6 py-2 flex text-center items-center">
                <p className="text-gray-800 text-base ml-10">
                    {property.buildingName}
                </p>
            </div> */}
            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded w-4/5"
                  onClick={onEnquire}>
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
