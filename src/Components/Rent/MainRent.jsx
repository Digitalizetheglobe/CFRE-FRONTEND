import React from 'react';
import backgroundImage from '../assets/download.jpeg'; // Adjust the path based on your folder structure
import Header from '../Header/header.jsx';

function MainRent() {
    return (
        <>
        <Header />
        <div className="relative min-h-screen bg-white">
            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover', // Adjust this to 'contain' or specific percentages if needed
                    backgroundPosition: 'center', // Center the image
                    backgroundRepeat: 'no-repeat', // Prevents tiling of the image
                    height: '80vh', // Full viewport height; adjust as needed
                    width: '90%', // Full width of the container
                }}
            ></div>

            {/* Overlay to darken background image for readability */}
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

            {/* Content Card */}
            <div className="relative z-5 flex items-center justify-center min-h-screen ">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">
                        Find your Ideal Office with CFRE Realty <span className="text-blue-500">Fast ⚡</span>
                    </h2>

                    {/* Options */}
                    <p className="mb-4">What are you looking for?</p>
                    <div className="flex items-center mb-4">
                        <label className="flex items-center space-x-2 mr-4">
                            <input
                                type="radio"
                                name="space"
                                className="form-radio text-blue-600"
                                defaultChecked
                            />
                            <span>Office Space</span>
                        </label>
                        {/* <label className="flex items-center space-x-2">
                            <input type="radio" name="space" className="form-radio text-blue-600" />
                            <span>Retail Space</span>
                        </label> */}
                    </div>

                    {/* Location Search */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            className="w-full p-4 border rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:outline-none"
                            placeholder="Add more locations"
                        />
                        <span className="absolute top-3 right-4 text-gray-400 cursor-pointer">X</span>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
                        Let's discover the perfect match!
                    </button>

                    {/* Additional Link */}
                    <p className="mt-4 text-sm text-center">
                        Want to rent/sell your property?
                        <a href="#" className="text-blue-600 font-bold">
                            Click here.
                        </a>
                    </p>
                </div>
            </div>
        </div></>
    );
}

export default MainRent;
