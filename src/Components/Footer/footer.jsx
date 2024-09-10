import { React, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import ContactForm from '../MainBody/ContactForm';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    return (
        <>
            <footer className="bg-gray-800 text-white py-8 mt-5 relative">
                {/* Call to Action */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#d84a48] rounded-md px-4 py-4 absolute top-[-6px] w-full">
                    <h6 className="text-center text-white text-sm md:text-xl">
                        Looking To Sell Or Rent Your Property?
                    </h6>
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="px-4 py-2 text-xs md:text-sm rounded-full text-white bg-black mt-2 md:mt-0 md:ml-auto hover:bg-white hover:text-black transition duration-300"
                    >
                        Enquire Now
                    </button>
                </div>

                <div className="container mx-auto px-4 sm:px-10 mt-16 w-full ">
                    <div className="flex flex-wrap justify-between gap-y-8 md:gap-y-0">
                        {/* About CFRE */}
                        <div className="w-full md:w-1/3">
                            <h4 className="text-lg font-semibold mb-4">About CFRE</h4>
                            <p className="text-gray-400 text-justify">
                                CFRE has always been committed to providing the highest quality products and services to its clients by taking an open and honest approach that is centered on the needs of the customer and engaging in business operations that are morally sound.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full md:w-1/3">
                            <h4 className="text-lg font-semibold mb-4 md:ml-20">Quick Links</h4>
                            <ul className="ml-0 md:ml-20">
                                <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                                <li className="mb-2"><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
                                <li className="mb-2"><Link to="/contactUs" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                                <li className="mb-2"><Link to="/Latestblog" className="text-gray-400 hover:text-white">Blog</Link></li>
                                <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full md:w-1/3">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <p className="text-gray-400 mb-2">320, HBC, Hirabaug Chowk, Tilak Road</p>
                            <p className="text-gray-400 mb-2">Pune- 411002</p>
                            <p className="text-gray-400 mb-2">
                                Phone: <a href="tel:+918149977661" className="text-white hover:text-[#d84a48] hover:underline">+91 8149977661</a>
                            </p>
                            <p className="text-gray-400">
                                Email: <a href="mailto:sales@cfrerealty.com" className="text-white hover:text-[#d84a48] hover:underline">sales@cfrerealty.com</a>
                            </p>
                        </div>


                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center mt-8 space-x-4">
                        <a href="https://www.facebook.com/share/V6WUcvRiRnM9AFyU/?mibextid=qi2Omg" className="text-gray-400 hover:text-white" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://youtube.com/@cfrerealty-pune" className="text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaYoutube />
                        </a>
                        <a href="https://www.instagram.com/cfrerealty" className="text-gray-400 hover:text-white" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/company/cfre-realty/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-gray-900 text-center py-2 mt-4">
                    <p className="text-white-500 text-sm">
                        &copy; {new Date().getFullYear()} CFRE. All rights reserved.
                        Carefully Crafted By Digitalize The Globe!
                    </p>
                </div>

                {/* Contact Form Modal */}
                {isFormVisible && (
                    <div
                        className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                        onClick={handleCloseForm} // Close on overlay click
                    >
                        <div
                            className='relative bg-white rounded-lg shadow-lg max-w-[500px] w-full p-4'
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                        >
                            <ContactForm onClose={handleCloseForm} />
                        </div>
                    </div>
                )}
            </footer>
        </>
    );
};

export default Footer;
