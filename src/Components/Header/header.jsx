import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../Header/cfre-logo.png';

function Header() {
    const [isInvestDropdownOpen, setInvestDropdownOpen] = useState(false);
    const [isRentDropdownOpen, setRentDropdownOpen] = useState(false);
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const toggleOpen = document.getElementById('toggleOpen');
        const toggleClose = document.getElementById('toggleClose');
        const collapseMenu = document.getElementById('collapseMenu');

        function handleClick() {
            if (collapseMenu.style.display === 'block') {
                collapseMenu.style.display = 'none';
            } else {
                collapseMenu.style.display = 'block';
            }
        }

        if (toggleOpen && toggleClose) {
            toggleOpen.addEventListener('click', handleClick);
            toggleClose.addEventListener('click', handleClick);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (toggleOpen && toggleClose) {
                toggleOpen.removeEventListener('click', handleClick);
                toggleClose.removeEventListener('click', handleClick);
            }
        };
    }, []);

    const toggleInvestDropdown = async () => {
        setInvestDropdownOpen(!isInvestDropdownOpen);
        if (isRentDropdownOpen) setRentDropdownOpen(false); // Close rent dropdown if open

        // Fetch properties when the Invest dropdown is opened
        if (!isInvestDropdownOpen) {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setProperties(response.data);
                // const unleasedProperties = response.data.filter(property => property.propertyType === 'Unleased');
                setFilteredProperties(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        }



    };

    const toggleRentDropdown = async () => {
        setRentDropdownOpen(!isRentDropdownOpen);
        if (isInvestDropdownOpen) setInvestDropdownOpen(false); // Close invest dropdown if open

        // Fetch properties when the Rent dropdown is opened
        if (!isRentDropdownOpen) {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setProperties(response.data);
                setFilteredProperties(response.data); // Initialize filtered properties
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        }
    };

    const handleDropdownClick = (type) => {
        const filtered = properties.filter(property => property.furnishing === type);
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
        <header className='shadow-md tracking-wide relative z-50'>

            <div className='flex  items-center justify-between p-4 w-full ml-2'>
                
                    <Link to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-20  transition-transform duration-300 ease-in-out transform  shadow-lg"
                        />
                    </Link>
                

                <div id="collapseMenu"
                    className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul
                        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <Link to="/">
                                <img src={logo} alt="logo" className='w-14' />
                            </Link>
                        </li>
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative'>
                            <button
                                onClick={toggleRentDropdown}
                                className='hover:text-[#d84a48] text-gray-800 block text-[18px] focus:outline-none cursor-pointer'>
                                Rent
                            </button>
                            {isRentDropdownOpen && (
                                <ul className='absolute left-0 bg-white shadow-lg mt-2 rounded-md z-50 border border-gray-200 w-96 cursor-pointer'>
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
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3 relative'>
                            <button
                                onClick={toggleInvestDropdown}
                                className='hover:text-[#d84a48] text-gray-800 block text-[18px] focus:outline-none'>
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
                        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                            <Link to='/projectproperty' className='hover:text-[#d84a48] text-gray-800 block text-[18px]'>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='flex max-lg:ml-auto space-x-3'>
                    <button id="toggleOpen" className='lg:hidden ml-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-black" viewBox="0 0 100 80">
                            <rect width="100" height="20" rx="8"></rect>
                            <rect y="30" width="100" height="20" rx="8"></rect>
                            <rect y="60" width="100" height="20" rx="8"></rect>
                        </svg>
                    </button>

                </div>
            </div>

        </header>
    );
}

export default Header;