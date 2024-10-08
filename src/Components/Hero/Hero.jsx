
import React from 'react';
import SearchBar from '../../SearchBar';
import Banner from './Banner 5.jpg';
import MobileSearchBar from '../../MobileSearchBar';



function Hero() {
    return (
        <>
        
        <div className="flex justify-center items-center my-8 mx-4">
        <div className="relative w-full h-[25vh] md:h-[75vh] rounded-lg overflow-hidden">

            <img
                className="absolute inset-0 md:w-full w-full h-full  md:h-full object-cover"
                src={Banner}
                alt="Banner"
            />
            <div className="justify-center absolute inset-0 bg-black bg-opacity-50 flex flex-col md:justify-center items-center px-4">
                <h1 className="text-sm  md:text-xl lg:text-5xl text-white font-bold mb-2 text-center">
                    Commercial Real Estate Platform
                </h1>
                <p className="text-[10px] md:flex sm:text-sm md:text-2xl lg:text-xl text-white mb-6 md:text-center">
                    Rent, Invest, Sale Commercial Real Estate with Verified Data
                </p>
                <SearchBar/>
                <MobileSearchBar />
            </div>
        </div>
    </div>
    </>
    );
}

export default Hero;
