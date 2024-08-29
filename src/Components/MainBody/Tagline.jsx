import React from 'react';
import Image from './tabline2.png'; // Import the image

const Tagline = () => {
    return (
        <div 
            className="p-8 rounded-lg flex justify-between items-center text-white max-w-7xl mx-auto bg-cover bg-center  mb-12 "
            style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover', // Ensures the image covers the container
                backgroundPosition: 'center', // Centers the image
                height: '400px', // Adjust the height as needed
            }}
        >
            <div className="w-2/3"> {/* Adjusted width */}
                <h1 className="text-2xl font-bold mb-4"> {/* Reduced text size */}
                    Find the Best Space for your Business Operations!
                </h1>
                <ul className="space-y-2 mb-4">
                    <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                        3X Faster Process
                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                        Personal Assistance
                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-white rounded-full mr-2"></span>
                        Save on Brokerage*
                    </li>
                </ul>
                <button className="bg-white text-[#d84a48] font-semibold px-4 py-2 rounded-full inline-flex items-center"> {/* Reduced padding */}
                    Get Started Now!
                    <span className="ml-2 bg-[#d84a48] text-white px-2 py-1 rounded-full">FREE!</span>
                </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg text-[#d84a48] mr-10"> {/* Adjusted width */}
                <p className="text-sm">Multiple options</p>
                <h2 className="text-xl font-bold mb-2">3× Faster</h2> {/* Reduced text size */}
                <div className="bg-[#d84a48] text-white px-4 py-2 rounded-full font-semibold">
                    BETTER DEAL!
                </div>
            </div>
        </div>
    );
};

export default Tagline;
