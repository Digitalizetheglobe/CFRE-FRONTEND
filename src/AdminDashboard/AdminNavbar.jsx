import React from 'react'
import logo from '../Components/Header/cfre-logo.png'
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <>
    
    <header className='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide relative z-50 '>
  <div className='flex flex-wrap items-center gap-5 w-full'>
   <Link
               to="/dashboard"><img src={logo} alt="logo"
        className='w-20 max-lg:mr-5' />
    </Link>

    <div id="collapseMenu"
      className='max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 align-center'>
      <Link
      
      
      id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </Link>

      <ul
        className='lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li className='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40' />
          </a>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'>
          <Link to='/dashboard'
            className='hover:text-[#d84a48] text-[#333] font-semibold block text-[15px]'>Dashboard</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'>
          <Link to='/addnewproperty'
            className='hover:text-[#d84a48] text-[#333]  font-semibold block text-[15px]'>Add Property</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><Link to='/bulkproperty'
            className='hover:text-[#d84a48] text-[#333] font-semibold block text-[15px]'>Bulk Upload Property</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><Link to='/enquirydetails'
            className='hover:text-[#d84a48] text-[#333] font-semibold block text-[15px]'>Enquiry Response</Link>
        </li>
        <li className='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            className='hover:text-[#d84a48] text-[#333] font-semibold block text-[15px]'>All Property</a>
        </li>
      </ul>
    </div>

    <div className='flex items-center max-lg:ml-auto space-x-6'>
      <Link 
      to="/adminlogin"
        className='px-4 py-2 text-[15px] rounded font-semibold text-[#000000] bg-[#d84a48] border-2 border-[#d84a48] hover:bg-[#d84a48] transition-all ease-in-out duration-300 bg-transparent hover:text-white'>Log Out</Link>

      <button id="toggleOpen" className='lg:hidden'>
        <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
    </>
  )
}

export default AdminNavbar