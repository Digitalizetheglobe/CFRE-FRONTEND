import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Header/cfre-logo.png';

function Header() {
    const [isInvestDropdownOpen, setInvestDropdownOpen] = useState(false);
    const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const navigate = useNavigate();

    // Refs for dropdown menus
    const rentDropdownRef = useRef(null);
    const investDropdownRef = useRef(null);

    const handleNavigate = () => {
        navigate('/third-card'); // Replace with the actual route to the ThirdCards component
      };

    useEffect(() => {
        // Event listener to handle clicks outside of the dropdown
        const handleClickOutside = (event) => {
            if (rentDropdownRef.current && !rentDropdownRef.current.contains(event.target) && isRentDropdownOpen) {
                setRentDropdownOpen(false);
            }
            if (investDropdownRef.current && !investDropdownRef.current.contains(event.target) && isInvestDropdownOpen) {
                setInvestDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isRentDropdownOpen, isInvestDropdownOpen]);

    const toggleInvestDropdown = () => {
        setInvestDropdownOpen(!isInvestDropdownOpen);
        if (isRentDropdownOpen) setRentDropdownOpen(false); // Close rent dropdown if open
    };

    const toggleRentDropdown = async () => {
        setRentDropdownOpen(!isRentDropdownOpen);
        if (isInvestDropdownOpen) setInvestDropdownOpen(false); // Close invest dropdown if open

    };

    const handleDropdownClick = (type) => {
        const filtered = properties.filter((property) => property.furnishing === type);
        setFilteredProperties(filtered);

        // Navigate to the respective component with the filtered properties
        if (type === 'Furnished') {
            navigate('/Furnished', { state: { properties: filtered } });
        } else if (type === 'Un-Furnished') {
            navigate('/UnFurnished', { state: { properties: filtered } });
        } else if (type === 'Coworking') {
            navigate('/Coworking', { state: { properties: filtered } });
        }

        // Close both dropdowns after selection
        setRentDropdownOpen(false);
        setInvestDropdownOpen(false);
    };

    const handleInvestOptionClick = () => {
        // Close the Invest dropdown when an option is selected
        setInvestDropdownOpen(false);
    };

    return (
        <header className='sticky top-0 bg-white shadow-md tracking-wide z-50'>
            <div className='flex items-center justify-between p-4 w-full'>
                {/* Left: Logo */}
                <div className="flex items-center space-x-4 pl-20">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-20 transition-transform duration-300 ease-in-out transform shadow-lg"
                        />
                    </Link>
                </div>

                {/* Center Section: Navigation */}
                <div
                    id="collapseMenu"
                    className='hidden lg:flex gap-x-5'
                >
                    <ul className='flex items-center space-x-5 gap-4'>
                        <li className='relative' ref={rentDropdownRef}>
                            <button
                                onClick={toggleRentDropdown}
                                className='hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none cursor-pointer' style={{fontWeight:'600'}}
                            >
                                Rent
                            </button>
                            {isRentDropdownOpen && (
                                <ul className='absolute left-0 bg-white shadow-lg mt-2 rounded-md  border border-gray-200 w-96 cursor-pointer z-50'>
                                    <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Furnished')}>
                                        Furnished
                                    </li>
                                    <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Un-Furnished')}>
                                        Un-Furnished
                                    </li>
                                    <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Coworking')}>
                                        Coworking / Managed Office Spaces
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className='relative' ref={investDropdownRef}>
                            <button
                                onClick={toggleInvestDropdown}
                                className='hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none'
                                style={{fontWeight:'600'}}
                            >
                                Invest
                            </button>
                            {isInvestDropdownOpen && (
                                <ul className='absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-36 cursor-pointer'>
                                    <li className='py-2 px-4 hover:bg-gray-200' onClick={handleInvestOptionClick}>
                                        <Link to='/preleased'>Pre-Leased</Link>
                                    </li>
                                    <li className='py-2 px-4 hover:bg-gray-200' onClick={handleInvestOptionClick}>
                                        <Link to='/unleased'>Un-Leased</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to='/projectproperty' className='hover:text-[#d84a48] text-gray-800 block text-[19px]' style={{fontWeight:'600'}}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='/Latestblog' className='hover:text-[#d84a48] text-gray-800 block text-[19px]'style={{fontWeight:'600'}}>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to='/contactUs' className='hover:text-[#d84a48] text-gray-800 block text-[19px]'style={{fontWeight:'600'}}>
                            Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Section: "List Your Property" Button */}
                <div className='flex items-center space-x-3 pr-20 hidden md:flex'>
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

            </div>
        </header>
    );
}

export default Header;
