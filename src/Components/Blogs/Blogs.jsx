import React from 'react';
import { Link } from 'react-router-dom';
import Image from './privacyPolicy.webp';
import Blog1 from './blog1.jpg';
import Blog2 from './Blog2.jpg';
import Blog3 from './Blog3.jpg';
import Blog4 from './blog4.webp';
import Header from '../Header/header.jsx';

function Blogs() {
    return (
        <>
        <Header />
            <div
                className="bg-blue-400 text-black py-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h1 className="text-4xl text-white font-bold text-center">Blogs</h1>
                </div>
            </div>
            <div className="bg-white font-[sans-serif] p-4">
                <div className="max-w-6xl max-md:max-w-lg mx-auto mt-6">
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                        <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                            <img 
                                src={Blog1} 
                                alt="Blog Post 1" 
                                className="lg:w-2/5 h-64 w-full object-cover" 
                            />
                            <div className="p-6 lg:w-3/5">
                                <h3 className="text-xl font-bold text-[#333]">Why Commercial Property in Baner is a Prime Choice for Business Growth?</h3>
                                <span className="text-sm block text-gray-400 mt-2">July 6, 2024 | BY CFRE</span>
                                <p className="text-sm mt-4">
                                    If you’re considering expanding or relocating your business, commercial property in Baner should be at the top of your list.
                                </p>
                                <Link to="/commercial-property-in-baner-2" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</Link>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                            <img 
                                src={Blog2} 
                                alt="Blog Post 2" 
                                className="lg:w-2/5 h-64 w-full object-cover" 
                            />
                            <div className="p-6 lg:w-3/5">
                                <h3 className="text-xl font-bold text-[#333]">Investing in Commercial Property in Balewadi: A Smart Choice for 2024</h3>
                                <span className="text-sm block text-gray-400 mt-2">July 6, 2024 | BY CFRE</span>
                                <p className="text-sm mt-4">One of Balewadi’s standout features is its strategic location in northwestern Pune.</p>
                                <Link to="/commercial-property-in-balewadi" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</Link>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                            <img 
                                src={Blog3} 
                                alt="Blog Post 3" 
                                className="lg:w-2/5 h-64 w-full object-cover" 
                            />
                            <div className="p-6 lg:w-3/5">
                                <h3 className="text-xl font-bold text-[#333]">Find Your Perfect Workspace at Amar Business Zone with CFRE Realty!</h3>
                                <span className="text-sm block text-gray-400 mt-2">July 6, 2024 | BY CFRE</span>
                                <p className="text-sm mt-4">Are you a growing business seeking a dynamic and collaborative environment?</p>
                                <Link to="/coworking-space" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</Link>
                            </div>
                        </div>
                        <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
                            <img 
                                src={Blog4} 
                                alt="Blog Post 4" 
                                className="lg:w-2/5 h-64 w-full object-cover" 
                            />
                            <div className="p-6 lg:w-3/5">
                                <h3 className="text-xl font-bold text-[#333]">How to Evaluate Real Estate Investment Opportunities in Warje, Pune</h3>
                                <span className="text-sm block text-gray-400 mt-2">August 3 | BY CFRE</span>
                                <p className="text-sm mt-4">Real estate investment is a significant financial decision that requires thorough research and careful consideration.</p>
                                <Link to="/office-space-for-rent-in-warje-pune" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
