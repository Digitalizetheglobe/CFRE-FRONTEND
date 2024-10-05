import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Header/cfre-logo.png';

function MobileHeader({ toggleRentDropdown, toggleInvestDropdown, isRentDropdownOpen, isInvestDropdownOpen }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const rentDropdownRef = useRef(null);
    const investDropdownRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (rentDropdownRef.current && !rentDropdownRef.current.contains(event.target) && isRentDropdownOpen) {
                toggleRentDropdown();
            }
            if (investDropdownRef.current && !investDropdownRef.current.contains(event.target) && isInvestDropdownOpen) {
                toggleInvestDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isRentDropdownOpen, isInvestDropdownOpen, toggleRentDropdown, toggleInvestDropdown]);

    return (
        <>
            <div className="flex items-center justify-between">
                <img src={logo} alt="logo" className='w-14 mx-10 mt-1' />
                <button onClick={toggleMobileMenu} className='rounded-full bg-white p-3'>
                    <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex justify-end">
                    <div className="bg-white shadow-lg w-4/5 max-w-xs h-full">
                        <div className="flex justify-between items-center p-4">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button onClick={toggleMobileMenu} className='text-xl'>
                                &times; {/* Cross icon to close the menu */}
                            </button>
                        </div>
                        <ul className="flex flex-col p-4">
                            <li className="mb-4" ref={rentDropdownRef}>
                                <button
                                    onClick={toggleRentDropdown}
                                    className="block text-left text-lg focus:outline-none"
                                >
                                    Rent
                                </button>
                                {isRentDropdownOpen && (
                                    <ul className="ml-4">
                                        <li className="py-2 hover:bg-gray-200">
                                            <Link to="/Furnished">Furnished</Link>
                                        </li>
                                        <li className="py-2 hover:bg-gray-200">
                                            <Link to="/UnFurnished">Un-Furnished</Link>
                                        </li>
                                        <li className="py-2 hover:bg-gray-200">
                                            <Link to="/Coworking">Coworking / Managed Office Spaces</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="mb-4" ref={investDropdownRef}>
                                <button
                                    onClick={toggleInvestDropdown}
                                    className="block text-left text-lg focus:outline-none"
                                >
                                    Invest
                                </button>
                                {isInvestDropdownOpen && (
                                    <ul className="ml-4">
                                        <li className="py-2 hover:bg-gray-200">
                                            <Link to="/preleased">Pre-Leased</Link>
                                        </li>
                                        <li className="py-2 hover:bg-gray-200">
                                            <Link to="/unleased">Un-Leased</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="mb-4">
                                <Link to="/projectproperty" className="block text-lg">Projects</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/Latestblog" className="block text-lg">Blogs</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contactUs" className="block text-lg">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
}

export default MobileHeader;
