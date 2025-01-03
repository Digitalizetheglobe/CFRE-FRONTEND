
import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Header/cfre-logo.png';
import MobileHeader from './MobileHeader';

function Header() {
    const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
    const [isInvestDropdownOpen, setInvestDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const rentDropdownRef = useRef(null);
    const investDropdownRef = useRef(null);

    const handleNavigate = () => {
        navigate('/third-card'); // Replace with the actual route to the ThirdCards component
    };

    const toggleRentDropdown = () => {
        setRentDropdownOpen(!isRentDropdownOpen);
        if (isInvestDropdownOpen) setInvestDropdownOpen(false); // Close Invest dropdown if Rent is opened
    };

    const toggleInvestDropdown = () => {
        setInvestDropdownOpen(!isInvestDropdownOpen);
        if (isRentDropdownOpen) setRentDropdownOpen(false); // Close Rent dropdown if Invest is opened
    };

    return (
        <header className="sticky top-0 bg-white shadow-md tracking-wide z-[999]">
            <div className="flex bg-white items-center justify-between md:p-4 p-2 w-full">
                {/* Left: Logo */}
                <div className="flex bg-white items-center space-x-4 md:pl-20 md:flex hidden">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="md:w-20 w-12 transition-transform duration-300 ease-in-out transform shadow-lg"
                        />
                    </Link>
                </div>

                {/* Center Section: Navigation */}
                <div className="hidden lg:flex gap-x-5 bg-white">
                    <ul className="flex items-center space-x-5 gap-4">
                        <li className="relative" ref={rentDropdownRef}>
                            <button
                                onClick={toggleRentDropdown}
                                className="hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none cursor-pointer"
                                style={{ fontWeight: '600' }}
                            >
                                Rent
                            </button>
                            {isRentDropdownOpen && (
                                <ul className="absolute left-0 bg-white shadow-lg mt-2 rounded-md border border-gray-200 w-96 cursor-pointer z-50">
                                    <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/Furnished')}>
                                        Furnished
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/UnFurnished')}>
                                        Un-Furnished
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/Coworking')}>
                                        Coworking / Managed Office Spaces
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative" ref={investDropdownRef}>
                            <button
                                onClick={toggleInvestDropdown}
                                className="hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none"
                                style={{ fontWeight: '600' }}
                            >
                                Invest
                            </button>
                            {isInvestDropdownOpen && (
                                <ul className="absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-36 cursor-pointer">
                                    <li className="py-2 px-4 hover:bg-gray-200">
                                        <Link to="/preleased">Pre-Leased</Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-200">
                                        <Link to="/unleased"> Sale</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/projectproperty" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/Latestblog" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section: "List Your Property" Button */}
                <div className="hidden md:flex items-center space-x-3 pr-20">
                    <button
                        onClick={handleNavigate}
                        className="bg-[#d84a48] text-white text-sm font-normal py-2 px-4 rounded-full hover:bg-[#ac3c3a] transition-colors duration-300"
                    >
                        List Property
                        <span className="bg-yellow-300 text-black text-sm py-1 px-2 rounded-full ml-1">
                            FREE!
                        </span>
                    </button>
                </div>

                {/* Mobile Header */}
                <div className="md:hidden w-full">
                    <MobileHeader
                        toggleRentDropdown={toggleRentDropdown}
                        toggleInvestDropdown={toggleInvestDropdown}
                        isRentDropdownOpen={isRentDropdownOpen}
                        isInvestDropdownOpen={isInvestDropdownOpen}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
