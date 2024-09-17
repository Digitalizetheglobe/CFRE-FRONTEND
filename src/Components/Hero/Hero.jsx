
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import SearchBar from '../../SearchBar';
import Banner from './Banner 5.jpg';

function Hero() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center my-8 mx-4">
        <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src={Banner}
                alt="Banner"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
                <h1 className="text-5xl sm:text-3xl md:text-xl lg:text-5xl text-white font-bold mb-2 text-center">
                    Commercial Real Estate Platform
                </h1>
                <p className="hidden md:flex text-lg sm:text-sm md:text-2xl lg:text-xl text-white mb-6 text-center">
                    Rent, Invest, Sale Commercial Real Estate with Verified Data
                </p>
                <SearchBar/>
            </div>
        </div>
    </div>
    );
}

export default Hero;
