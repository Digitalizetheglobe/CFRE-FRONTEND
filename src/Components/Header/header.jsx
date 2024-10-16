// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import logo from '../Header/cfre-logo.png';

// function Header() {
//     const [isInvestDropdownOpen, setInvestDropdownOpen] = useState(false);
//     const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
//     const [properties, setProperties] = useState([]);
//     const [filteredProperties, setFilteredProperties] = useState([]);
//     const navigate = useNavigate();

//     // Refs for dropdown menus
//     const rentDropdownRef = useRef(null);
//     const investDropdownRef = useRef(null);

//     const handleNavigate = () => {
//         navigate('/third-card'); // Replace with the actual route to the ThirdCards component
//       };

//     useEffect(() => {
//         // Event listener to handle clicks outside of the dropdown
//         const handleClickOutside = (event) => {
//             if (rentDropdownRef.current && !rentDropdownRef.current.contains(event.target) && isRentDropdownOpen) {
//                 setRentDropdownOpen(false);
//             }
//             if (investDropdownRef.current && !investDropdownRef.current.contains(event.target) && isInvestDropdownOpen) {
//                 setInvestDropdownOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isRentDropdownOpen, isInvestDropdownOpen]);

//     const toggleInvestDropdown = () => {
//         setInvestDropdownOpen(!isInvestDropdownOpen);
//         if (isRentDropdownOpen) setRentDropdownOpen(false); // Close rent dropdown if open
//     };

//     const toggleRentDropdown = async () => {
//         setRentDropdownOpen(!isRentDropdownOpen);
//         if (isInvestDropdownOpen) setInvestDropdownOpen(false); // Close invest dropdown if open

//     };

//     const handleDropdownClick = (type) => {
//         const filtered = properties.filter((property) => property.furnishing === type);
//         setFilteredProperties(filtered);

//         // Navigate to the respective component with the filtered properties
//         if (type === 'Furnished') {
//             navigate('/Furnished', { state: { properties: filtered } });
//         } else if (type === 'Un-Furnished') {
//             navigate('/UnFurnished', { state: { properties: filtered } });
//         } else if (type === 'Coworking') {
//             navigate('/Coworking', { state: { properties: filtered } });
//         }

//         // Close both dropdowns after selection
//         setRentDropdownOpen(false);
//         setInvestDropdownOpen(false);
//     };

//     const handleInvestOptionClick = () => {
//         // Close the Invest dropdown when an option is selected
//         setInvestDropdownOpen(false);
//     };

//     useEffect(() => {
//         const toggleOpen = document.getElementById('toggleOpen');
//         const toggleClose = document.getElementById('toggleClose');
//         const collapseMenu = document.getElementById('collapseMenu');

//         function handleClick() {
//             if (collapseMenu.style.display === 'block') {
//                 collapseMenu.style.display = 'none';
//             } else {
//                 collapseMenu.style.display = 'block';
//             }
//         }

//         if (toggleOpen && toggleClose) {
//             toggleOpen.addEventListener('click', handleClick);
//             toggleClose.addEventListener('click', handleClick);
//         }

//         // Cleanup function to remove event listeners
//         return () => {
//             if (toggleOpen && toggleClose) {
//                 toggleOpen.removeEventListener('click', handleClick);
//                 toggleClose.removeEventListener('click', handleClick);
//             }
//         };
//     }, []);

//     return (
//         <header className='sticky top-0 bg-white shadow-md tracking-wide z-50'>
//             <div className='flex items-center justify-between p-4 w-full'>
//                 {/* Left: Logo */}
//                 <div className="flex items-center space-x-4 pl-20">
//                     <Link to="/">
//                         <img
//                             src={logo}
//                             alt="logo"
//                             className="w-20 transition-transform duration-300 ease-in-out transform shadow-lg"
//                         />
//                     </Link>
//                 </div>

//                 {/* Center Section: Navigation */}
//                 <div
//                     id="collapseMenu"
//                     className='hidden lg:flex gap-x-5'
//                 >
//                      <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
//                             <path
//                                 d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                                 data-original="#000000"></path>
//                             <path
//                                 d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                                 data-original="#000000"></path>
//                         </svg>
//                     </button>
//                     <ul className='flex items-center space-x-5 gap-4'>
//                         <li className='relative' ref={rentDropdownRef}>
//                             <button
//                                 onClick={toggleRentDropdown}
//                                 className='hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none cursor-pointer' style={{fontWeight:'600'}}
//                             >
//                                 Rent
//                             </button>
//                             {isRentDropdownOpen && (
//                                 <ul className='absolute left-0 bg-white shadow-lg mt-2 rounded-md  border border-gray-200 w-96 cursor-pointer z-50'>
//                                     <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Furnished')}>
//                                         Furnished
//                                     </li>
//                                     <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Un-Furnished')}>
//                                         Un-Furnished
//                                     </li>
//                                     <li className='py-2 px-4 hover:bg-gray-200' onClick={() => handleDropdownClick('Coworking')}>
//                                         Coworking / Managed Office Spaces
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li className='relative' ref={investDropdownRef}>
//                             <button
//                                 onClick={toggleInvestDropdown}
//                                 className='hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none'
//                                 style={{fontWeight:'600'}}
//                             >
//                                 Invest
//                             </button>
//                             {isInvestDropdownOpen && (
//                                 <ul className='absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-36 cursor-pointer'>
//                                     <li className='py-2 px-4 hover:bg-gray-200' onClick={handleInvestOptionClick}>
//                                         <Link to='/preleased'>Pre-Leased</Link>
//                                     </li>
//                                     <li className='py-2 px-4 hover:bg-gray-200' onClick={handleInvestOptionClick}>
//                                         <Link to='/unleased'>Un-Leased</Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <Link to='/projectproperty' className='hover:text-[#d84a48] text-gray-800 block text-[19px]' style={{fontWeight:'600'}}>
//                                 Projects
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/Latestblog' className='hover:text-[#d84a48] text-gray-800 block text-[19px]'style={{fontWeight:'600'}}>
//                                 Blogs
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to='/contactUs' className='hover:text-[#d84a48] text-gray-800 block text-[19px]'style={{fontWeight:'600'}}>
//                             Contact Us
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Section: "List Your Property" Button */}
//                 <div className='flex items-center space-x-3 pr-20 hidden md:flex'>
//     <button
//         onClick={handleNavigate}
//         className="bg-[#d84a48] text-white text-sm font-normal py-2 px-4 rounded-full hover:bg-[#ac3c3a] transition-colors duration-300"
//     >
//         List Property 
//         <span className="bg-yellow-300 text-black text-sm py-1 px-2 rounded-full ml-1">
//             FREE!
//         </span>
//     </button>
// </div>
// <div className='flex max-lg:ml-auto space-x-3'>
//                     <button id="toggleOpen" className='lg:hidden'>
//                         <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd"
//                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                 clipRule="evenodd"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../Header/cfre-logo.png';

// function Header() {
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
//     const [isInvestDropdownOpen, setInvestDropdownOpen] = useState(false);

//     const navigate = useNavigate();

//     // Refs for dropdown menus
//     const rentDropdownRef = useRef(null);
//     const investDropdownRef = useRef(null);

//     const handleNavigate = () => {
//         navigate('/third-card'); // Replace with the actual route to the ThirdCards component
//     };

//     useEffect(() => {
//         // Event listener to handle clicks outside of the dropdown
//         const handleClickOutside = (event) => {
//             if (rentDropdownRef.current && !rentDropdownRef.current.contains(event.target) && isRentDropdownOpen) {
//                 setRentDropdownOpen(false);
//             }
//             if (investDropdownRef.current && !investDropdownRef.current.contains(event.target) && isInvestDropdownOpen) {
//                 setInvestDropdownOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isRentDropdownOpen, isInvestDropdownOpen]);
//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const toggleRentDropdown = () => {
//         setRentDropdownOpen(!isRentDropdownOpen);
//     };

//     const toggleInvestDropdown = () => {
//         setInvestDropdownOpen(!isInvestDropdownOpen);
//     };


//     return (
//         <header className="sticky top-0 bg-white shadow-md tracking-wide z-50">
//             <div className="flex items-center justify-between  md:p-4 p-2 w-full">
//                 {/* Left: Logo */}
//                 <div className="flex items-center space-x-4  md:pl-20">
//                     <Link to="/">
//                         <img
//                             src={logo}
//                             alt="logo"
//                             className="md:w-20 w-12 transition-transform duration-300 ease-in-out transform shadow-lg"
//                         />
//                     </Link>
//                 </div>

//                 {/* Center Section: Navigation */}
//                 <div className="hidden lg:flex gap-x-5">
//                     <ul className="flex items-center space-x-5 gap-4">
//                         <li className="relative" ref={rentDropdownRef}>
//                             <button
//                                 onClick={toggleRentDropdown}
//                                 className="hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none cursor-pointer"
//                                 style={{ fontWeight: '600' }}
//                             >
//                                 Rent
//                             </button>
//                             {isRentDropdownOpen && (
//                                 <ul className="absolute left-0 bg-white shadow-lg mt-2 rounded-md border border-gray-200 w-96 cursor-pointer z-50">
//                                     <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/Furnished')}>
//                                         Furnished
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/UnFurnished')}>
//                                         Un-Furnished
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-200" onClick={() => navigate('/Coworking')}>
//                                         Coworking / Managed Office Spaces
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li className="relative" ref={investDropdownRef}>
//                             <button
//                                 onClick={toggleInvestDropdown}
//                                 className="hover:text-[#d84a48] text-gray-800 block text-[19px] focus:outline-none"
//                                 style={{ fontWeight: '600' }}
//                             >
//                                 Invest
//                             </button>
//                             {isInvestDropdownOpen && (
//                                 <ul className="absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-36 cursor-pointer">
//                                     <li className="py-2 px-4 hover:bg-gray-200">
//                                         <Link to="/preleased">Pre-Leased</Link>
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-200">
//                                         <Link to="/unleased">Un-Leased</Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <Link to="/projectproperty" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
//                                 Projects
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/Latestblog" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
//                                 Blogs
//                             </Link>
//                         </li>
//                         <li>
//                             <Link to="/contactUs" className="hover:text-[#d84a48] text-gray-800 block text-[19px]" style={{ fontWeight: '600' }}>
//                                 Contact Us
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Right Section: "List Your Property" Button */}
//                 <div className="hidden md:flex items-center space-x-3 pr-20">
//                     <button
//                         onClick={handleNavigate}
//                         className="bg-[#d84a48] text-white text-sm font-normal py-2 px-4 rounded-full hover:bg-[#ac3c3a] transition-colors duration-300"
//                     >
//                         List Property
//                         <span className="bg-yellow-300 text-black text-sm py-1 px-2 rounded-full ml-1">
//                             FREE!
//                         </span>
//                     </button>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <div className="lg:hidden flex items-center">
//                     <button onClick={toggleMobileMenu}>
//                         <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd"
//                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                 clipRule="evenodd"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMobileMenuOpen && (
//                 <div className="lg:hidden bg-white shadow-lg">
//                     <ul className="py-4 px-6 space-y-4 text-lg font-medium text-gray-700">
//                         <li>
//                             <button onClick={toggleRentDropdown} className="w-full text-left hover:text-[#d84a48] transition-colors duration-300">
//                                 Rent
//                             </button>
//                             {isRentDropdownOpen && (
//                                 <ul className="bg-white shadow-lg rounded-lg mt-2">
//                                     <li className="py-2 px-4 hover:bg-gray-100">
//                                         <Link to="/Furnished" className="block w-full h-full">Furnished</Link>
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-100">
//                                         <Link to="/UnFurnished" className="block w-full h-full">Un-Furnished</Link>
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-100">
//                                         <Link to="/Coworking" className="block w-full h-full">Coworking</Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <button onClick={toggleInvestDropdown} className="w-full text-left hover:text-[#d84a48] transition-colors duration-300">
//                                 Invest
//                             </button>
//                             {isInvestDropdownOpen && (
//                                 <ul className="bg-white shadow-lg rounded-lg mt-2">
//                                     <li className="py-2 px-4 hover:bg-gray-100">
//                                         <Link to="/preleased">Pre-Leased</Link>
//                                     </li>
//                                     <li className="py-2 px-4 hover:bg-gray-100">
//                                         <Link to="/unleased">Un-Leased</Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                         <li>
//                             <Link to="/projectproperty" className="block hover:text-[#d84a48] transition-colors duration-300">Projects</Link>
//                         </li>
//                         <li>
//                             <Link to="/Latestblog" className="block hover:text-[#d84a48] transition-colors duration-300">Blogs</Link>
//                         </li>
//                         <li>
//                             <Link to="/contactUs" className="block hover:text-[#d84a48] transition-colors duration-300">Contact Us</Link>
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Header;


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
        <header className="sticky top-0 bg-white shadow-md tracking-wide z-10">
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
                                        <Link to="/unleased">Un-Leased</Link>
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
