import React, { useState, useEffect } from 'react';
import Header from '../Header/header.jsx';
import axios from 'axios';
import sell from '../assets/sell-your-property-step-1 (1).avif';
import sell1 from '../assets/sell-your-property-step-2 (1).avif';
import sell2 from '../assets/sell-your-property-step-3.avif';
import { FaBuilding, FaStore, FaBriefcase, FaUser, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const SellYourProperty = () => {
  const [step, setStep] = useState(1);
  const [selectedSpaceType, setSelectedSpaceType] = useState('');
  const [formData, setFormData] = useState({
    type_of_space: '',
    userDetails: {
      full_name: '',
      email: '',
      phone_number: '',
    },
    localityDetails: {
      building_name: '',
      locality: '',
      city: '',
    },
    propertyDetails: {
      carpet_area: '',
      build_up_area: '',
      floor_number: '',
      unit_no: '',
      rent_per_month: '',
    },
  });

  const [stepsCompleted, setStepsCompleted] = useState({
    overview: false,
    userDetails: false,
    localityDetails: false,
    propertyDetails: false,
  });

  // Function to check if each step is completed
  const validateSteps = () => {
    setStepsCompleted({
      overview: formData.type_of_space !== '',
      userDetails:
        formData.userDetails.full_name !== '' &&
        formData.userDetails.email !== '' &&
        formData.userDetails.phone_number !== '',
      localityDetails:
        formData.localityDetails.building_name !== '' &&
        formData.localityDetails.locality !== '' &&
        formData.localityDetails.city !== '',
      propertyDetails:
        formData.propertyDetails.carpet_area !== '' &&
        formData.propertyDetails.build_up_area !== '' &&
        formData.propertyDetails.floor_number !== '' &&
        formData.propertyDetails.unit_no !== '' &&
        formData.propertyDetails.rent_per_month !== '',
    });
  };

  // Use effect to validate steps every time the form data changes
  useEffect(() => {
    validateSteps();
  }, [formData]);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      userDetails: {
        ...formData.userDetails,
        [name]: value,
      },
    });
  };

  const handleLocalityChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      localityDetails: {
        ...formData.localityDetails,
        [name]: value,
      },
    });
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      propertyDetails: {
        ...formData.propertyDetails,
        [name]: value,
      },
    });
  };

  const handleChanges = (event) => {
    setSelectedSpaceType(event.target.value);
    setFormData({
      ...formData,
      type_of_space: event.target.value,
    });
  };

  console.log('11111==>', formData);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare payload for new API
    const payload = {
      selected_property: formData.type_of_space,
      property_subtype: formData.propertyDetails.property_subtype,
      full_name: formData.userDetails.full_name,
      email: formData.userDetails.email,
      mobile_number: formData.userDetails.phone_number,
      building_name: formData.localityDetails.building_name,
      location: formData.localityDetails.locality,
      city: formData.localityDetails.city,
      carpet_area: formData.propertyDetails.carpet_area,
      built_up_area: formData.propertyDetails.build_up_area,
      floor_number: formData.propertyDetails.floor_number,
      unit_number: formData.propertyDetails.unit_no,
      rent_per_month: formData.propertyDetails.rent_per_month,
      cost: formData.propertyDetails.cost,
      message: formData.propertyDetails.message,
    };
  
    try {
      const response = await axios.post(
        'https://cfrecpune.com/api/customer-properties',
        payload
      );
      console.log('Form submitted successfully:', response.data);
  
      // Open Success Modal
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  // Modal Component
  const SuccessModal = () => (
    <div className="fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative mx-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 60 60"
        >
          <circle cx="30" cy="30" r="29" />
          <path
            fill="#fff"
            d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
          />
        </svg>
        <div className="mt-12">
          <h3 className="text-gray-800 text-2xl font-bold flex-1">User property Request has be Send Successfully!</h3>
          <button
            type="button"
            className="px-6 py-2.5 mt-8 w-full rounded-md text-white text-sm font-semibold tracking-wide border-none outline-none bg-green-500 hover:bg-green-600"
            onClick={() => setIsModalOpen(false)} // Close Modal
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
  


  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <>
      <Header />
      <Helmet>
                    <title>Sell Your Property with CFRE Realty - Trusted Real Estate Services</title>
                    <meta name="description" content="Unlock the potential of your property with CFR Realty. Our expert team provides comprehensive services to help you sell your property efficiently and at the best price. Contact us today for a free consultation!" />
                    <meta property="og:description" content="Unlock the potential of your property with CFR Realty. Our expert team provides comprehensive services to help you sell your property efficiently and at the best price. Contact us today for a free consultation!" />
                    <meta property="og:url" content="https://www.cfrerealty.com/SellYourProperty" />
                    </Helmet>
      <div className="container mx-auto p-8 border rounded-lg shadow-lg md:mt-12 bg-white">
        <form onSubmit={handleSubmit}>
          <div className=" flex gap-8">
            {/* Sidebar with Steps */}
            <div className="hidden md:block  w-1/4 ">
              <div className="rounded-lg p-6 relative bg-white">
                <div className="absolute top-12 bottom-12 left-[50px] border-l-2 border-gray-300"></div>

                {/* Step 1: Overview */}
                <div className="relative z-10 mb-20 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 1 ? stepsCompleted.overview ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Overview</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.overview ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.overview ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 2: User Details */}
                <div className="relative z-10 mb-20 flex items-center gap-4">

                  <div className={`p-3 rounded-lg ${step === 2 ? stepsCompleted.userDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaUser className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">User Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.userDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.userDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 3: Locality Details */}
                <div className="relative z-10 mb-20 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 3 ? stepsCompleted.localityDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Locality Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.localityDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.localityDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 4: Property Details */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 4 ? stepsCompleted.propertyDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaClipboardList className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Property Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.propertyDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.propertyDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Section */}
            <div className="md:w-3/4 w-full md:content-center">
              <div className="bg-white rounded-lg p-8">
                {step === 1 && (
                  <div className="flex flex-col items-center gap-6 md:mb-6">
                    <h2 className="text-xl md:text-3xl text-center font-bold">What type of space are you looking to rent?</h2>
                    <h3 className='hidden md:block md:text-base text-center'>We currently assist in leasing out the following type of spaces</h3>
                    <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-6 w-full">
                      {/* Office Space Option */}
                      <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Office Space' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                        <input type="radio" name="type_of_space" value="Office Space" className="hidden" onChange={handleChanges} />
                        <span className="text-4xl mb-2">🏢</span>
                        <span className="font-bold">Office Space</span>
                      </label>
                      {/* Showroom Option */}
                      <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Showroom' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                        <input type="radio" name="type_of_space" value="Showroom" className="hidden" onChange={handleChanges} />
                        <span className="text-4xl mb-2">🏬</span>
                        <span className="font-bold">Showroom</span>
                      </label>
                      {/* Warehouse Option */}
                      <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Warehouse' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                        <input type="radio" name="type_of_space" value="Warehouse" className="hidden" onChange={handleChanges} />
                        <span className="text-4xl mb-2">🏪</span>
                        <span className="font-bold">Warehouse</span>
                      </label>
                    </div>
                  </div>

                )}

                {/* Step 2: User Details */}
                {step === 2 && (
                  <div>
                    <h2 className="md:text-3xl text-center font-bold mb-4">Tell us a little about yourself</h2>
                    <h3 className='text-xs text-center mb-5'>We will use this information to contact you once we find prospects for your property.</h3>
                    <label>
                      Full Name:
                      <input type="text" name="full_name" value={formData.userDetails.full_name} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" value={formData.userDetails.email} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Phone Number:
                      <input type="tel" name="phone_number" value={formData.userDetails.phone_number} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                  </div>
                )}

                {/* Step 3: Locality Details */}
                {step === 3 && (
                  <div>
                    <h2 className="text-3xl text-center font-bold mb-4">Where's your office space located?</h2>
                    <label>
                      Building Name:
                      <input type="text" name="building_name" value={formData.localityDetails.building_name} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Locality:
                      <input type="text" name="locality" value={formData.localityDetails.locality} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      City:
                      <input type="text" name="city" value={formData.localityDetails.city} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                  </div>
                )}

                {/* Step 4: Property Details */}
                {step === 4 && (
                  <div>
                    <h2 className="md:text-3xl text-center font-bold mb-4">Share more details for a quicker tenant match</h2>
                    <label>
                      Carpet Area:
                      <input type="number" name="carpet_area" value={formData.propertyDetails.carpet_area} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2 " />
                    </label>
                    <label>
                      Build-up Area:
                      <input type="number" name="build_up_area" value={formData.propertyDetails.build_up_area} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Floor Number:
                      <input type="text" name="floor_number" value={formData.propertyDetails.floor_number} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Unit Number:
                      <input type="text" name="unit_no" value={formData.propertyDetails.unit_no} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Cost per Month:
                      <input type="number" name="rent_per_month" value={formData.propertyDetails.rent_per_month} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                  </div>
                )}


                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button type="button" onClick={handlePrev} className={`bg-gray-500 text-white rounded px-4 py-2 ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={step === 1}>
                    Previous
                  </button>
                  {step < 4 ? (
                    <button type="button" onClick={handleNext} className={`bg-[#d84a48] text-white rounded px-4 py-2 ${!stepsCompleted.overview || (step === 2 && !stepsCompleted.userDetails) || (step === 3 && !stepsCompleted.localityDetails) ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!stepsCompleted.overview || (step === 2 && !stepsCompleted.userDetails) || (step === 3 && !stepsCompleted.localityDetails)}>
                      Next
                    </button>
                  ) : (
                    <button type="submit" className={`bg-green-500 text-white rounded px-4 py-2 ${!stepsCompleted.propertyDetails ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!stepsCompleted.propertyDetails}>
                      Submit
                    </button>
                  )}
                  {isModalOpen && <SuccessModal />}
                </div>
              </div>
            </div>
          </div>
        </form>
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
    </>
  );
};

export default SellYourProperty;
