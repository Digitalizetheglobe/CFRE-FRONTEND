import React from 'react';
import logo from './ab.jpg';
import Image from './privacyPolicy.webp';
import CountUp from 'react-countup';
import Bckgrndimg from '../assets/coundown.jpg'
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';

function AboutUs() {
    return (
        <>
    <Header/>
    <Helmet>
                    <title>About CFRE-Realty: Premier Real Estate Services for Commercial Spaces</title>
                    <meta name="description" content="Learn more about CFR E-Realty, a leading provider of commercial real estate services specializing in corporate offices and retail spaces for sale and rent. Discover our expertise in offering tailor-made solutions for property investment, leasing, and more." />
                    <meta property="og:description" content="Learn more about CFR E-Realty, a leading provider of commercial real estate services specializing in corporate offices and retail spaces for sale and rent. Discover our expertise in offering tailor-made solutions for property investment, leasing, and more." />
                    <meta property="og:url" content="https://www.cfrerealty.com/aboutUs" />
                    </Helmet>
            <div
                className="bg-blue-400 text-black py-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h1 className="text-4xl text-white font-bold text-center">About Us</h1>
                </div>
            </div>
            <div className="bg-white-500  p-6 bg">
                <div className="grid md:grid-cols-2 items-center gap-10 max-full max-md:max-w-md mx-auto">
                    <div className="md:h-[400px] md:w-[600px] ">
                        <img src={logo} alt="Company Logo" className="w-full h-full rounded-md object-cover" />
                    </div>

                    <div className="max-md:text-center">
                        <h3 className="text-black font-semibold md:text-xl text-xl md:leading-10"> Welcome to COMMERCIAL FIELD REAL ESTATE (CFRE)</h3>
                        <p className=" mt-4 text-xl leading-relaxed mb-6 text-gray-700"> CFRE Realty is a leading commercial real estate
                            firm specializing in office space leasing across
                            major Indian business hubs. </p>
                        <p className=" mt-4 text-xl leading-relaxed mb-6 text-gray-700">
                            With 15 years of experience in the industry,
                            we've established ourselves as trusted advisors
                            for businesses seeking optimal workspace
                            solutions in Pune, Mumbai, Bangalore, and
                            Hyderabad.
                        </p>
                        <p className=" mt-4 text-xl leading-relaxed mb-6 text-gray-700">
                            Our portfolio includes a diverse range of office
                            properties, from modern high-rises to renovated
                            historic buildings, catering to businesses of all
                            sizes across multiple industries
                        </p>
                        {/* <button type="button" className="px-5 py-2.5 mt-8 bg-blue-700 hover:bg-blue-800 text-white tracking-wider rounded text-sm outline-none">Explore</button> */}
                    </div>
                </div>
            </div>



            <div className=" bg-gray-50 w-full">

                <div className="w-full mx-auto bg-white p-6 md:p-12 shadow-md rounded-lg">

                    <div className="bg-slate-800 p-6 rounded-lg shadow-md shadow-slate-400 mt-8 hover:shadow-lg transition-shadow duration-300  hover:scale-[1.02]">
                        <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us</h2>
                        <p className="text-white">
                            15 years of industry expertise and deep market knowledge in key Indian
                            business hubs
                            Proven track record: 2.5 million square feet leased and over 500 satisfied
                            clients
                        </p>
                        <p className="text-white">
                            Extensive network of industry connections across Pune, Mumbai, Bangalore,
                            and Hyderabad
                        </p>
                        <p className="text-white">
                            Diverse portfolio of prime office locations suitable for IT, automobile,
                            finance, medical, banking, hospitality, and other sectors
                            Tailored solutions for businesses of all sizes, from startups to large
                            corporations
                        </p>
                        <p className="text-white">
                            Commitment to long-term client relationships across various industries
                            Expertise in emerging office trends and technologies relevant to the Indian
                            market and specific sectors

                        </p>

                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400 mt-8 hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-700">
                            To be the brand that is most sought after by consumers due to its quality, dependability, innovations, and value! We are able to do this by sticking stringently to a few core principles, the most important of which is to work with the most qualified individuals who have the most expertise. Our dedication to providing first-rate service to each and every one of our customers is at the very heart of the promise we make to them.
                        </p>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-lg shadow-md shadow-slate-400 mt-8 hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
                        <p className="text-white">
                            To establish new standards of excellence while consistently outperforming those standards! You can accomplish your objectives more quickly with the assistance of our object-oriented approach to the suitable products we provide. Our goal is to make Sale and Rent a hassle-free and joyful experience by offering individualized product solutions that are accessible to every prospective customer.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md shadow-slate-400 mt-8 hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
                        <p className="text-gray-700">
                            At CFRE Realty, we understand
                            that finding the right office space
                            is crucial for your business's
                            success and growth, regardless of
                            your industry.
                            Our team of experienced
                            professionals takes a client-centric
                            approach, focusing on :</p>
                        <p className="text-gray-700">
                            1) Understanding your unique business needs, culture,
                            and industry-specific requirements</p>
                        <p className="text-gray-700"> 2) Leveraging market insights in Pune, Mumbai,
                            Bangalore, and Hyderabad to find the best
                            opportunities</p>
                        <p className="text-gray-700">
                            3) Negotiating favourable lease terms considering
                            industry trends and forecasts
                        </p>
                        <p className="text-gray-700">
                            4)Providing ongoing support throughout
                            the lease term
                        </p>
                    </div>
                </div>


                <div
    className="py-12 sm:py-16 border ml-16 mr-12"
    style={{ 
        borderRadius: '2rem', 
        backgroundImage: `url(${Bckgrndimg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    }}
>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 bg-opacity-75 rounded-lg p-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-white">Years</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <CountUp start={0} end={12} duration={7} /> +
                </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-white">Sq.Ft <br />Delivered</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <CountUp start={0} end={2.5} decimals={1} suffix=" M" duration={7} />
                </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-white">Clients</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <CountUp start={0} end={500} duration={7} /> +
                </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-2xl leading-7 text-white">Cities</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    <CountUp start={0} end={40} duration={7} /> +
                </dd>
            </div>
        </dl>
    </div>
</div>


            </div>
        </>
    );
}

export default AboutUs;
