import React, { useState } from 'react';
import logo from './ab.jpg';
import Image from './Untitled123.jpg';
import CountUp from 'react-countup';
import Bckgrndimg from '../assets/coundown.jpg'
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';
import Blogslider from '../MainBody/Blogslider.jsx';
import Image2 from './ab.jpg'


function AboutUs() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };
    return (
        <>
            <Header />
            <Helmet>
                <title>About CFRE-Realty: Premier Real Estate Services for Commercial Spaces</title>
                <meta name="description" content="Learn more about CFR E-Realty, a leading provider of commercial real estate services specializing in corporate offices and retail spaces for sale and rent. Discover our expertise in offering tailor-made solutions for property investment, leasing, and more." />
                <meta property="og:description" content="Learn more about CFR E-Realty, a leading provider of commercial real estate services specializing in corporate offices and retail spaces for sale and rent. Discover our expertise in offering tailor-made solutions for property investment, leasing, and more." />
                <meta property="og:url" content="https://www.cfrerealty.com/aboutUs" />
            </Helmet>

            <div
  className="bg-black md:h-[450px] h-[300px] w-full text-black py-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${Image})` }}
>
  <div className="w-full h-full flex justify-center items-center text-center"> {/* Centered vertically and horizontally */}
    <div className="py-2 md:py-10 w-full flex flex-col justify-center items-center"> {/* Flex column and center alignment */}
      <h1 className="md:text-4xl text-lg text-white font-bold text-center">
      Commercial Real Estate Simplified: Rent, Invest, and Sell with <br />
        <span className=" font-bold ">Trusted, Verified Data</span>
      </h1>
    </div>
  </div>
</div>


            <div
                className="relative w-full h-full"

            >
                <div className="w-full flex items-center justify-center p-4 md:py-14 bg-gray-600 border border-t-pd-neutral-1">
                    <dl className="md:container grid grid-cols-3 md:grid-cols-4 gap-5 gap-y-6 text-center">

                        <div className=" md:flex col-span-1 flex-col items-center justify-center">
                            <dd className="md:text-6xl font-semibold tracking-tight text-white  text-4xl">
                                <CountUp start={0} end={12} duration={7} /> +
                            </dd>
                            <dt className="md:text-2xl leading-7 text-white">Years</dt>
                        </div>

                        <div className= " hidden md:flex col-span-1 flex-col items-center justify-center">
                            <dd className="md:text-6xl font-semibold tracking-tight text-white text-4xl">
                                <CountUp start={0} end={2.5} decimals={1} suffix=" M" duration={7} /> +
                            </dd>
                            <dt className="md:text-2xl leading-7 text-white">Sq.Ft  Delivered</dt>
                        </div>

                        <div className="col-span-1 flex flex-col items-center justify-center">
                            <dd className="md:text-6xl font-semibold tracking-tight text-white text-4xl">
                                <CountUp start={0} end={500} duration={7} /> +
                            </dd>
                            <dt className="md:text-2xl leading-7 text-white">Clients</dt>
                        </div>

                        <div className="col-span-1 flex flex-col items-center justify-center">
                            <dd className="md:text-6xl font-semibold tracking-tight text-white text-4xl">
                                <CountUp start={0} end={40} duration={7} /> +
                            </dd>
                            <dt className="md:text-2xl leading-7 text-white">Cities</dt>
                        </div>

                    </dl>
                </div>

            </div>
            <div className='mx-pd-lg md:container md:mx-auto'>
                <div className='w-full flex flex-col' >
                    {/* <div className="md:h-[400px] md:w-[600px] ">
                        <img src={logo} alt="Company Logo" className="w-full h-full rounded-md object-cover" />
                    </div> */}

                    <h2 className='font-bold md:text-xl text-pd-m-xl md:text-pd-d-xl text-pd-text-1 mb-pd-lg md:mt-14 mt-6 text-2xl '>About Us</h2>
                    <div className="">
                        <h3 className="text-pd-m-md md:text-pd-d-xl italic text-pd-text-1 font-medium md:text-2xl md:mt-4 md:mb-6 mt-4 text-xl"> Welcome to "COMMERCIAL FIELD REAL ESTATE (CFRE)."</h3>

                        <div className="flex mb-pd-sm md:mb-pd-2xl md:mb-6 mt-4">
                            <a href="https://www.facebook.com/share/V6WUcvRiRnM9AFyU/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className='pr-6'>
                                <svg className="text-blue-600 hover:text-blue-800" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S264.43 0 225.36 0c-73.14 0-121 44.38-121 124.72v70.62H32v92.66h72.29V512h89.66V288z"></path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='pr-6'>
                                <svg className="text-blue-500 hover:text-blue-700" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/cfrerealty" target="_blank" rel="noopener noreferrer" className='pr-6'>
                                <svg className="text-pink-500 hover:text-pink-700" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/company/cfre-realty/" target="_blank" rel="noopener noreferrer" className='pr-6'>
                                <svg className="text-red-500 hover:text-red-700" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                                </svg>
                            </a>
                        </div>



                        <p className=" mt-4 md:text-lg leading-relaxed  text-gray-700"> CFRE Realty is a leading commercial real estate
                            firm specializing in office space leasing across
                            major Indian business hubs.

                            With 15 years of experience in the industry,
                            we've established ourselves as trusted advisors
                            for businesses seeking optimal workspace
                            solutions in Pune, Mumbai, Bangalore, and
                            Hyderabad.
                            Our portfolio includes a diverse range of office
                            properties, from modern high-rises to renovated
                            historic buildings, catering to businesses of all
                            sizes across multiple industries
                        </p>
                        {/* <button type="button" className="px-5 py-2.5 mt-8 bg-blue-700 hover:bg-blue-800 text-white tracking-wider rounded text-sm outline-none">Explore</button> */}
                    </div>
                </div>
                <hr class="h-[1px] my-pd-lg md:my-pd-4xl bg-pd-neutral-2 mt-10 "></hr>
            </div>

            <div className='mx-pd-lg md:container md:mx-auto'>
                <div className='w-full flex flex-col md:mt-0 mt-4'>
                    <h2 className='font-bold md:text-xl text-pd-m-2xl md:text-pd-d-xl text-pd-text-1 mb-pd-lg md:mt-14 mb-10 text-2xl'>Our Happy Clients</h2>
                    <div className='h-90'>
                        <Blogslider />
                    </div>
                </div>
                <hr class="h-[1px] my-pd-lg md:my-pd-4xl bg-pd-neutral-2 md:mt-10"></hr>
            </div>

            <div className='mx-pd-lg md:container md:mx-auto'>
                <div className='flex flex-col md:mt-0 mt-4'>
                    <h2 className='font-bold text-pd-m-xl md:text-pd-d-xl text-pd-text-1 mb-pd-lg  md:mt-14 text-2xl'>OUR VALUES</h2>

                    <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
                        <div className='md:col-span-7 rounded-3xl'>
                            <div className='mb-pd-xs md:mb-pd-2xl'>
                                <img alt='Our values' src={Image2} className='w-full md:h-[30rem] h-[15rem]'></img>
                            </div>
                            <div className='flex flex-col w-full'>
                                <h2 className='md:font-semibold md:text-3xl mt-4 mb-4 text-2xl'>Customer first</h2>
                                <p className='text-pd-m-sm md:text-pd-d-md font-normal text-pd-neutral-5'>
                                    For every decision we ask ourselves - Is this making it better for the customer?
                                </p>
                            </div>
                        </div>
                        <div className='md:col-span-5 flex flex-col items-center'>
                            <div className='md:w-full w-[22rem] p-4 md:p-5 border border-solid border-pd-neutral-2 mb-6 rounded-pd-lg'>
                                <h2 className='text-pd-m-sm md:text-pd-d-lg font-semibold mb-pd-3xs md:mb-pd-xs text-pd-text-1'>Why Choose Us</h2>
                                <p className='text-sm md:text-base font-normal text-pd-text-2'>With 15 years of industry expertise and deep market knowledge in key Indian business hubs, we have a proven track record of leasing 2.5 million square feet and serving over 500 satisfied clients.</p>
                            </div>
                            <div className='md:w-full w-[22rem] p-4 md:p-5 border border-solid border-pd-neutral-2 mb-6 rounded-pd-lg'>
                                <h2 className='text-pd-m-sm md:text-pd-d-lg font-semibold mb-pd-3xs md:mb-pd-xs text-pd-text-1'>Our Mission</h2>
                                <p className='text-sm md:text-base font-normal text-pd-text-2'>

                                    Our goal is to be the most sought-after brand by delivering quality, dependability, innovation, and value through a team of top experts and a commitment to exceptional customer service.

                                </p>
                            </div>
                            <div className='md:w-full w-[22rem]  p-4 md:p-5 border border-solid border-pd-neutral-2 mb-6 rounded-pd-lg'>
                                <h2 className='text-pd-m-sm md:text-pd-d-lg font-semibold mb-pd-3xs md:mb-pd-xs text-pd-text-1'>Our Vision</h2>
                                <p className='text-sm md:text-base font-normal text-pd-text-2'>

                                    Our goal is to set new standards of excellence, making sale and rent hassle-free and joyful with tailored, accessible product solutions through an object-oriented approach.
                                </p>
                            </div>
                            <div className='md:w-full w-[22rem]  p-4 md:p-5 border border-solid border-pd-neutral-2 rounded-pd-lg'>
                                <h2 className='text-pd-m-sm md:text-pd-d-lg font-semibold mb-pd-3xs md:mb-pd-xs text-pd-text-1'>Transparency</h2>
                                <p className='class="text-sm md:text-base font-normal text-pd-text-2"'>
                                    At CFRE Realty, our promises are our reality.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                <hr class="h-[1px] my-pd-lg md:my-pd-4xl bg-pd-neutral-2 md:mt-10"></hr>
            </div>



            <div className=" bg-gray-50 w-full">

                <div className="w-full mx-auto bg-white p-6 md:p-12 p-0 rounded-lg">

                    <div className="bg-white p-6 rounded-lg md:w-full w-[22rem]  shadow-slate-400 transition-shadow duration-300 ">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
                        <p className="text-gray-700 md:mb-3 text-justify">
                            At CFRE Realty, we understand
                            that finding the right office space
                            is crucial for your business's
                            success and growth, regardless of
                            your industry.
                            Our team of experienced
                            professionals takes a client-centric
                            approach, focusing on :</p>
                        <p className="text-gray-700 md:mb-3  text-justify">
                            1) Understanding your unique business needs, culture,
                            and industry-specific requirements</p>
                        <p className="text-gray-700 md:mb-3 text-justify"> 2) Leveraging market insights in Pune, Mumbai,
                            Bangalore, and Hyderabad to find the best
                            opportunities</p>
                        <p className="text-gray-700 md:mb-3 text-justify">
                            3) Negotiating favourable lease terms considering
                            industry trends and forecasts
                        </p>
                        <p className="text-gray-700 md:mb-3 text-justify">
                            4)Providing ongoing support throughout
                            the lease term
                        </p>
                    </div>
                </div>


                <div className="divide-y rounded-lg max-w-7xl mx-auto px-4 ">
                    <div className="mb-8">
                        <h2 className="md:text-2xl font-bold text-gray-800 text-center md:mt-8 text-2xl">Frequently asked questions</h2>
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

                    <div role="accordion">
                        <button
                            type="button"
                            className="w-full text-sm text-left font-semibold py-6 text-gray-800 flex items-center"
                            onClick={() => toggleAccordion(4)}
                        >
                            <span className="mr-4 text-sm md:text-base">Q. How do you calculate office space costs?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                            </svg>
                        </button>
                        {openAccordion === 4 && (
                            <div className="py-4">
                                <p className="text-sm md:text-base text-gray-800">
                                    
When looking for a commercial office space for rent, it's important to consider the average rent in your chosen location. Additionally, you should decide on the grade of office space (A, B, or C) that fits your needs. The rent cost will vary depending on both the location and the grade of the space. Once you've identified these factors, you should also calculate the additional costs associated with maintenance, insurance, taxes, and utilities to get a complete picture of your total expenses.
                                </p>
                            </div>
                        )}
                    </div>

                    <div role="accordion">
                        <button
                            type="button"
                            className="w-full text-sm text-left font-semibold py-6 text-gray-800 flex items-center"
                            onClick={() => toggleAccordion(5)}
                        >
                            <span className="mr-4 text-sm md:text-base">Q. What is the right size office space?</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-3.5 fill-current ml-auto shrink-0 transform ${openAccordion === 2 ? 'rotate-90' : ''}`} viewBox="0 0 124 124">
                                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                            </svg>
                        </button>
                        {openAccordion === 5 && (
                            <div className="py-4">
                                <p className="text-sm md:text-base text-gray-800 ">
                                    
                                Determining the right size of office space involves several key factors, starting with the number of employees and the type of work being done, as a general guideline suggests allocating about 150 to 200 square feet per employee for comfort. It's also essential to consider potential business growth, workspace layout preferences, the number of meeting rooms and facilities needed, and any storage requirements for documents or inventory. Additionally, local zoning regulations may impact available space, while budget constraints will ultimately dictate the size you can afford. By carefully evaluating these factors, you can identify an office space that meets your current and future business needs.
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <footer className='bg-white py-7 md:px-0 px-6'>
                <div className='container w-full mx-auto'>
                    <div className='grid grid-cols-1'>
                        <p className='text-neutral-800 text-xl font-medium mb-5 mt-10'> Copyright © 2024 | CFRE Realty All Rights Reserved.</p>
                        <div className='col-span-1 text-neutral-600 text-sm font-normal text-justify'>
                            <p >
                                CFRE does not own the properties and is not responsible for any property information on the platform (www.cfrerealty.com). All information on the platform (www.cfrerealty.com) is subject to negotiation, availability and changes. We are not responsible for any problems (legal, physical,etc.) arising with the property and every property needs to be subject to due diligence and inspection by the investor.
                            </p>
                        </div>

                    </div>


                </div>
            </footer>

        </>
    );
}

export default AboutUs;
