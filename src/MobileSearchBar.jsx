import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import MobileSearchBarComponent from './MobileSearchBarComponent';
import { useNavigate } from 'react-router-dom'

function MobileSearchBar() {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/MobileSearchBarComponent');
    }
  return (

    <div className="flex items-center w-full max-w-sm p-2 bg-white shadow-md rounded-full mx-auto md:hidden">
    <FaMapMarkerAlt className="text-[#d84a48] text-lg ml-3 mr-2" />
    <input
      type="text"
      placeholder="Search By City, Locality, Project"
      className="flex-grow outline-none text-[10px] text-gray-700 placeholder-gray-900 px-2"
    />
    <button className="bg-[#d84a48] p-2 rounded-full"
    onClick={handleSearch}> 
      <FiSearch className="text-white text-lg" />
    </button>
  </div>
  )


}

export default MobileSearchBar