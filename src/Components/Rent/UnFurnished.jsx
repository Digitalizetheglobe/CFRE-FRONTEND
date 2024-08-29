import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import ContactForm from '../MainBody/ContactForm';

const Unfurnished = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/rentproperties');
                setProperties(response.data);
                setFilteredProperties(response.data.filter(property => property.furnishing === 'Unfurnished'));
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        filterAndSortProperties(searchTerm, sortOrder);
    }, [searchTerm, sortOrder, properties]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOrder(event.target.value);
    };

    const filterAndSortProperties = (searchTerm, sortOrder) => {
        let filtered = properties.filter(property => property.furnishing === 'Unfurnished');

        if (searchTerm) {
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.cost - a.cost);
        }

        setFilteredProperties(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="text-4xl">Unfurnished Properties</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={sortOrder}
                        onChange={handleSort}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} onEnquire={handleButtonClick} />
                ))}
            </div>

            {isFormVisible && (
                <div 
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm} // Close on overlay click
                >
                    <div 
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Unfurnished;




// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import ContactForm from '../MainBody/ContactForm';
// import logo from '../Header/cfre-logo.png';

// function Header() {
//     const [isFormVisible, setFormVisible] = useState(false);
//     const navigate = useNavigate();

//     const handleButtonClick = () => {
//         setFormVisible(true);
//     };

//     const handleCloseForm = () => {
//         setFormVisible(false);
//     };

//     const handlePhoneClick = () => {
//         window.location.href = 'tel:+918149977661';
//     };

//     const handleProfileClick = () => {
//         // Navigate to the profile page
//         navigate('/profile');
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
//         <header className='shadow-md tracking-wide relative z-50'>
//             <section className='hidden md:flex items-center justify-between py-2 bg-[#153b63] text-white px-10'>
//                 <p className='text-sm'>
//                     <strong className="mx-3">Address:</strong>320, HBC, Hirabaug Chowk, Tilak Road Pune- 411002
//                     <button className="mx-3" onClick={handlePhoneClick}>Contact No:+91 8149977661 </button>
//                 </p>
//                 <button
//                     onClick={handleButtonClick}
//                     className='px-4 py-2 text-sm rounded-full hover:text-white text-white border-2 border-transparent hover:bg-[#d84a48] transition-all ease-in-out duration-300'>
//                     Enquire Now
//                 </button>
//             </section>

//             <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
//                 <Link to="/">
//                     <img src={logo} alt="logo" className='w-14 mx-10 mt-1' />
//                 </Link>

//                 <div id="collapseMenu"
//                     className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
//                     <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
//                             <path
//                                 d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                                 data-original="#000000"></path>
//                             <path
//                                 d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                                 data-original="#000000"></path>
//                         </svg>
//                     </button>

//                     <ul
//                         className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
//                         <li className='mb-6 hidden max-lg:block'>
//                             <Link to="/">
//                                 <img src={logo} alt="logo" className='w-14' />
//                             </Link>
//                         </li>
//                         <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
//                             <Link to='/invest' className='hover:text-[#d84a48] text-gray-800 block text-[18px]'>
//                                 Invest
//                             </Link>
//                         </li>
//                         <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
//                             <Link to='/rent' className='hover:text-[#d84a48] text-gray-800 block text-[18px]'>
//                                 Rent
//                             </Link>
//                         </li>
//                         <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
//                             <Link to='/about-us' className='hover:text-[#d84a48] text-gray-800 block text-[18px]'>
//                                 About Us
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className='flex max-lg:ml-auto space-x-3'>
//                     <button id="toggleOpen" className='lg:hidden ml-10'>
//                         <svg className="w-12 h-12" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd"
//                                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                                 clipRule="evenodd"></path>
//                         </svg>
//                     </button>

//                     <button
//                         // onClick={handleProfileClick}
//                         className='p-2 text-gray-800 hover:text-[#077bff] transition-all ease-in-out duration-300'>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] hover:fill-[#077bff]"
//                             viewBox="0 0 512 512">
//                             <path
//                                 d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
//                                 data-original="#000000" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {isFormVisible && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//                         <ContactForm 
//                             onSubmit={(data) => {
//                                 console.log('Form data:', data);
//                                 handleCloseForm();
//                             }} 
//                         />
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Header;