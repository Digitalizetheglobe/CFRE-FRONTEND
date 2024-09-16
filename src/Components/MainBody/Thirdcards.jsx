// import React from 'react'
// import sell from '../assets/sell-your-property-step-1 (1).avif'
// import sell1 from '../assets/sell-your-property-step-2 (1).avif'
// import sell2 from '../assets/sell-your-property-step-3.avif'

// const Thirdcards = () => {
//   return (
//     <div>
//       <div className="bg-gray-100 py-16">
//   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
   
//     <div className="md:w-1/2">
//       <h1 className="text-4xl font-bold text-gray-800">
//         Sell your <span className="text-[#d84a48]">Commercial Property</span> in weeks!
//       </h1>
//       <p className="text-lg text-gray-600 mt-4">
//         List your Property for free and get access to 15,000+ Real Estate investors on our platform.
//       </p>
//       <div className="mt-6 space-y-4">
//         <div className="flex items-center">
//           <span className="text-blue-600 text-xl mr-2">🪙</span>
//           <p className="text-gray-700">Get the best price for your property</p>
//         </div>
//         <div className="flex items-center">
//           <span className="text-green-600 text-xl mr-2">👥</span>
//           <p className="text-gray-700">Dedicated experts to assist you</p>
//         </div>
//         <div className="flex items-center">
//           <span className="text-yellow-600 text-xl mr-2">🏷️</span>
//           <p className="text-gray-700">Average selling time is 2 weeks</p>
//         </div>
//       </div>
//       <div className="mt-10 flex space-x-8">
//         <div>
//           <p className="text-2xl font-bold text-gray-800">12 years+</p>
//           <p className="text-gray-600">of real estate experience</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">90 Cr+</p>
//           <p className="text-gray-600">Worth of transactions</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">2 property</p>
//           <p className="text-gray-600">Visits per day</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">1 Property</p>
//           <p className="text-gray-600">Rent every 2 days</p>
//         </div>
//       </div>
//     </div>

   
//     <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-10 md:mt-0">
//       <h2 className="text-lg font-bold text-gray-800 mb-4">
//         Fill this form to <span className="text-[#d84a48]">Sell your property</span>
//       </h2>
//       <p className="text-gray-600 mb-4">Select type of property to sale</p>
//       <div className="flex justify-between mb-6">
//         <div className="border rounded-lg p-4 w-1/2 text-center mx-1">
//           🏢 <br /> Pre-leased Commercial
//         </div>
//         <div className="border rounded-lg p-4 w-1/2 text-center mx-1">
//           🏢 <br /> Vacant Commercial
//         </div>
//       </div>
//       <button className="bg-[#d84a48] text-white w-full py-3 rounded-md">
//         Connect With Us !
//       </button>
//     </div>
//   </div>
// </div>

//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           <div className="p-4 md:w-1/3">
//             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//               <img
//                 className="lg:h-48 md:h-36 w-full object-cover object-center"
//                 src={sell}
//                 alt="blog"
//               />
//               <div className="p-6">
//                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//                 <p className="leading-relaxed mb-3">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
//                 </p>

//               </div>
//             </div>
//           </div>

//           {/* Second Blog Card */}
//           <div className="p-4 md:w-1/3">
//             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//               <img
//                 className="lg:h-48 md:h-36 w-full object-cover object-center"
//                 src={sell1}
//                 alt="blog"
//               />
//               <div className="p-6">
//                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
//                 <p className="leading-relaxed mb-3">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
//                 </p>

//               </div>
//             </div>
//           </div>

//           {/* Third Blog Card */}
//           <div className="p-4 md:w-1/3">
//             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//               <img
//                 className="lg:h-48 md:h-36 w-full object-cover object-center"
//                 src={sell2}
//                 alt="blog"
//               />
//               <div className="p-6">
//                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
//                 <p className="leading-relaxed mb-3">
//                   Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
//                 </p>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <div class=" divide-y rounded-lg max-w-7xl mx-auto px-4">
//       <div class="mb-8">
//         <h2 class="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
//       </div>
//       <div role="accordion">
//         <button type="button"
//           class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
//           <span class="mr-4">Q. How much do I have to pay to list my property on CFRE?.</span>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 124 124">
//             <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
//           </svg>
//         </button>
//         <div class="py-4">
//           <p class="text-sm text-gray-800">It is completely free to list your property on CFRE. We only charge a brokerage fee of 2% + GST once we successfully sell your property on our marketplace, incentivising us to sell faster and get the best deal possible for you.
//           </p>
//         </div>
//       </div>
//       <div role="accordion">
//         <button type="button"
//           class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
//           <span class="mr-4">Q. Can I list my property on CFRE?</span>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
//             <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
//           </svg>
//         </button>
//         <div class="hidden py-4">
//           <p class="text-sm text-gray-800">We allow owners and brokers to list only commercial properties that are either vacant or pre-leased (where are already receiving rent from tenants for a long-term period). We list these types of investment properties to ensure attractive rental returns for our investor base.</p>
//         </div>
//       </div>
//       <div role="accordion">
//         <button type="button"
//           class="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center">
//           <span class="mr-4"> How is CFRE different from other brokers?</span>
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 fill-current ml-auto shrink-0" viewBox="0 0 42 42">
//             <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
//           </svg>
//         </button>
//         <div class="hidden py-4">
//           <p class="text-sm text-gray-800">CFRE distributes your property to more than 1500 verified investors, leading brokers, wealth management firms and financial advisors. Through our ecosystem we generate multiple businesses, a variety of offers, and the best price for your property. Due to our extensive network of investors, we are able to close our deals within weeks rather than months!</p>
//         </div>
//       </div>
      
      
//     </div>

//     </div>
//   );
// };


// export default Thirdcards;
import React, { useState } from 'react';
import sell from '../assets/sell-your-property-step-1 (1).avif';
import sell1 from '../assets/sell-your-property-step-2 (1).avif';
import sell2 from '../assets/sell-your-property-step-3.avif';
import ContactForm from './ContactForm';


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
    <div>
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">
              Sell your <span className="text-[#d84a48]">Commercial Property</span> in weeks!
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              List your Property for free and get access to 15,000+ Real Estate investors on our platform.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">🪙</span>
                <p className="text-gray-700">Get the best price for your property</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 text-xl mr-2">👥</span>
                <p className="text-gray-700">Dedicated experts to assist you</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-600 text-xl mr-2">🏷️</span>
                <p className="text-gray-700">Average selling time is 2 weeks</p>
              </div>
            </div>
            <div className="mt-10 flex space-x-10">
  <div className="flex-shrink-0">
    <p className="text-2xl font-bold text-gray-800">12 years+</p>
    <p className="text-gray-600">of real estate experience</p>
  </div>
  <div className="flex-shrink-0">
    <p className="text-2xl font-bold text-gray-800">500 CR+</p>
    <p className="text-gray-600">Worth of transactions</p>
  </div>
 
</div>

          </div>
          <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-10 md:mt-0">
  <h2 className="text-lg font-bold text-gray-800 mb-4">
    Fill this form to <span className="text-[#d84a48]">Sell your property</span>
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
            Pre-leased Commercial
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
            Vacant Commercial
          </span>
        </label>
      </div>
      {selectedPropertyType && (
        <button
        className="bg-[#d84a48] text-white w-full py-3 rounded-md"
        onClick={handleButtonClick}
      >
        Connect With Us!
      </button>
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
          <h2 className="text-2xl font-bold text-gray-800">Frequently asked questions</h2>
        </div>
        <div role="accordion">
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(1)}
          >
            <span className="mr-4">Q. How much do I have to pay to list my property on CFRE?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 1 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
            </svg>
          </button>
          {openAccordion === 1 && (
            <div className="py-4">
              <p className="text-sm text-gray-800">
                It is completely free to list your property on CFRE. We only charge a brokerage fee of 2% + GST once we successfully sell your property on our marketplace, incentivising us to sell faster and get the best deal possible for you.
              </p>
            </div>
          )}
        </div>
        <div role="accordion">
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(2)}
          >
            <span className="mr-4">Q. Can I list my property on CFRE?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
            </svg>
          </button>
          {openAccordion === 2 && (
            <div className="py-4">
              <p className="text-sm text-gray-800">
                Yes! Our marketplace allows owners of commercial properties (office, retail, or land) to list their property. Simply fill out our connect form, and our expert will reach out to you to explain the listing process.
              </p>
            </div>
          )}
        </div>
        <div role="accordion">
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(3)}
          >
            <span className="mr-4">Q. How is CFRE different from other brokers?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
              <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
            </svg>
          </button>
          {openAccordion === 3 && (
            <div className="py-4">
              <p className="text-sm text-gray-800">
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
    </div>
  );
};

export default Thirdcards;
