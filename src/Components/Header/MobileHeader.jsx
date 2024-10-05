import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MobileHeader({ toggleRentDropdown, toggleInvestDropdown, isRentDropdownOpen, isInvestDropdownOpen }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const rentDropdownRef = useRef(null);
  const investDropdownRef = useRef(null);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-4 text-lg font-medium text-gray-700">
            <li ref={rentDropdownRef}>
              <button onClick={toggleRentDropdown} className="w-full text-left hover:text-[#d84a48] transition-colors duration-300">
                Rent
              </button>
              {isRentDropdownOpen && (
                <ul className="bg-white shadow-lg rounded-lg mt-2">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link to="/Furnished" className="block w-full h-full">Furnished</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link to="/UnFurnished" className="block w-full h-full">Un-Furnished</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link to="/Coworking" className="block w-full h-full">Coworking</Link>
                  </li>
                </ul>
              )}
            </li>
            <li ref={investDropdownRef}>
              <button onClick={toggleInvestDropdown} className="w-full text-left hover:text-[#d84a48] transition-colors duration-300">
                Invest
              </button>
              {isInvestDropdownOpen && (
                <ul className="bg-white shadow-lg rounded-lg mt-2">
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link to="/preleased">Pre-Leased</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100">
                    <Link to="/unleased">Un-Leased</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/projectproperty" className="block hover:text-[#d84a48] transition-colors duration-300">Projects</Link>
            </li>
            <li>
              <Link to="/Latestblog" className="block hover:text-[#d84a48] transition-colors duration-300">Blogs</Link>
            </li>
            <li>
              <Link to="/contactUs" className="block hover:text-[#d84a48] transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileHeader;
