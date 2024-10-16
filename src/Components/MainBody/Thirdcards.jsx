
import React, { useState } from 'react';
import sell from '../assets/sell-your-property-step-1 (1).avif';
import sell1 from '../assets/sell-your-property-step-2 (1).avif';
import sell2 from '../assets/sell-your-property-step-3.avif';
import ContactForm from './ContactForm';
import Header from '../Header/header.jsx'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Thirdcards = () => {
  // State to manage which accordion section is open
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState('');

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedPropertyType(event.target.value);
  };
  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  // Function to toggle the accordion section
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <Header />
      <Helmet>
                    <title>Premium Office Spaces & Retail Solutions in Pune - CFRE Realty</title>
                    <meta name="description" content="Discover exceptional office and retail spaces for sale and rent in Pune. CFRE Realty offers tailored real estate solutions to meet your business needs. Contact us today for personalized assistance and expert guidance." />
                    <meta property="og:url" content="https://www.cfrerealty.com/third-card" />
                    </Helmet>
            
      <div>
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
            <div className="md:w-1/2">
              <h1 className="md:text-4xl font-bold text-gray-800">
                Sell your <span className="text-[#d84a48]">Commercial Property</span> in weeks!
              </h1>
              <p className="md:text-lg text-sm text-gray-600 mt-4">
                List your Property for free and get access to 15,000+ Real Estate investors on our platform.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 md:text-xl mr-2">🪙</span>
                  <p className="text-gray-700">Get the best price for your property</p>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 md:text-xl mr-2">👥</span>
                  <p className="text-gray-700">Dedicated experts to assist you</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-600 md:text-xl mr-2">🏷️</span>
                  <p className="text-gray-700">Average selling time is 2 weeks</p>
                </div>
              </div>
              <div className="mt-10 flex space-x-10">
                <div className="flex-shrink-0">
                  <p className="md:text-2xl font-bold text-gray-800">12 years+</p>
                  <p className="text-gray-600 text-xs">of real estate experience</p>
                </div>
                <div className="flex-shrink-0">
                  <p className="md:text-2xl font-bold text-gray-800">500 CR+</p>
                  <p className="text-gray-600 text-xs">Worth of transactions</p>
                </div>

              </div>

            </div>
            <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-10 md:mt-0">
              <h2 className="text-lg font-bold text-center text-gray-800 mb-4">
                I Want to...
              </h2>
              <p className="text-gray-600 mb-4">Select type of property to sale</p>
              <div className="flex justify-between mb-6">
                <label className="flex items-center border rounded-lg p-4 w-1/2 text-center mx-1 cursor-pointer">
                  <input
                    type="radio"
                    name="propertyType"
                    value="pre-leased"
                    className="form-radio text-blue-500 mr-2"
                    checked={selectedPropertyType === 'pre-leased'}
                    onChange={handleRadioChange}
                  />
                  <span className="flex flex-col">
                    🏢 <br />
                    Rent my property
                  </span>
                </label>
                <label className="flex items-center border rounded-lg p-4 w-1/2 text-center mx-1 cursor-pointer">
                  <input
                    type="radio"
                    name="propertyType"
                    value="vacant"
                    className="form-radio text-blue-500 mr-2"
                    checked={selectedPropertyType === 'vacant'}
                    onChange={handleRadioChange}
                  />
                  <span className="flex flex-col">
                    🏢 <br />
                    Sell my property
                  </span>
                </label>
              </div>
              {selectedPropertyType && (
                <Link
                  className="bg-[#d84a48] text-white py-3 rounded-md"
                  to='/SellYourProperty'

                >
                  <button className='w-full'>
                  Connect With Us..
                </button>
                </Link>
              )}
            </div>


          </div>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={sell}
                    alt="Step 1"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 1</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Initial Consultation</h1>
                    <p className="leading-relaxed mb-3">
                      Start with a consultation to understand your property needs and how we can assist.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={sell1}
                    alt="Step 2"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 2</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Marketing</h1>
                    <p className="leading-relaxed mb-3">
                      We market your property to our network of investors and industry professionals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={sell2}
                    alt="Step 3"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">STEP 3</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Close the Deal</h1>
                    <p className="leading-relaxed mb-3">
                      Finalize the sale with our expert guidance and achieve your property goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divide-y rounded-lg max-w-7xl mx-auto px-4 ">
          <div className="mb-8">
            <h2 className="md:text-2xl font-bold text-gray-800">Frequently asked questions</h2>
          </div>
          <div role="accordion">
            <button
              type="button"
              className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
              onClick={() => toggleAccordion(1)}
            >
              <span className="mr-4 text-sm md:text-base">Q. How much do I have to pay to list my property on CFRE?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 1 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
              </svg>
            </button>
            {openAccordion === 1 && (
              <div className="py-4">
                <p className="text-sm md:text-base text-gray-800">
                  It is completely free to list your property on CFRE. We only charge a brokerage fee of 2% + GST once we successfully sell your property on our marketplace, incentivising us to sell faster and get the best deal possible for you.
                </p>
              </div>
            )}
          </div>
          <div role="accordion">
            <button
              type="button"
              className="w-full text-sm  md:text-base text-left font-semibold py-6 text-gray-800 flex items-center"
              onClick={() => toggleAccordion(2)}
            >
              <span className="mr-4">Q. Can I list my property on CFRE?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
              </svg>
            </button>
            {openAccordion === 2 && (
              <div className="py-4">
                <p className="text-sm md:text-base text-gray-800">
                  Yes! Our marketplace allows owners of commercial properties (office, retail, or land) to list their property. Simply fill out our connect form, and our expert will reach out to you to explain the listing process.
                </p>
              </div>
            )}
          </div>
          <div role="accordion">
            <button
              type="button"
              className="w-full text-sm text-left font-semibold py-6 text-gray-800 flex items-center"
              onClick={() => toggleAccordion(3)}
            >
              <span className="mr-4 text-sm md:text-base">Q. How is CFRE different from other brokers?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
              </svg>
            </button>
            {openAccordion === 3 && (
              <div className="py-4">
                <p className="text-sm md:text-base text-gray-800">
                  CFRE distributes your property to more than 1500 verified investors, leading brokers, wealth management firms and financial advisors. Through our ecosystem we generate multiple businesses, a variety of offers, and the best price for your property. Due to our extensive network of investors, we are able to close our deals within weeks rather than months!
                </p>
              </div>
            )}
          </div>

        </div>
        {/* Render ContactForm only if isFormVisible is true */}
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
      </div></>
  );
};

export default Thirdcards;
