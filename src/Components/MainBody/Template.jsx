import React from 'react';
import Image from './templateImage.jpg';

function Template() {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-lg mb-10">
            {/* Left Side - Image and Buttons */}
            <div
                className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-2 p-4 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <p className="text-white font-bold text-lg text-center mb-2">
                    Find Your Perfect Office Space With Us !
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <button className="bg-[#d84a48] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#9c2f2d] transition duration-300">
                        Rent Properties
                    </button>
                    <button className="bg-[#d84a48] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#9c2f2d] transition duration-300">
                        Invest Properties
                    </button>
                </div>
            </div>

            {/* Gap between cards */}
            <div className="h-4 md:h-auto md:w-4"></div>

            {/* Right Side - Form */}
            <div className="w-full md:w-1/2 bg-[#1C2439] p-6 rounded-lg shadow-md space-y-4 flex flex-col justify-center">
                <h2 className="text-xl font-bold text-white text-center">
                    Hey there,
                </h2>
                <p className="text-white text-center">
                    How can we serve you today?
                </p>

                <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="service"
                            className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-white text-sm">
                            I want to buy/sell a commercial property
                        </span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="service"
                            className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-white text-sm">I want to lease my property out</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input
                            type="radio"
                            name="service"
                            className="h-4 w-4 text-[#d84a48]"
                        />
                        <span className="text-white text-sm">Something else</span>
                    </label>
                </div>

                <textarea
                    className="w-full h-28 p-3 mt-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Tell us your requirements..."
                ></textarea>

                <button className="w-full bg-[#d84a48] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#9c2f2d] transition duration-300">
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Template;
 