import { React, useState} from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '../MainBody/ContactForm';

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
            <footer className="bg-gray-800 text-white py-8 relative mt-5">

                <div className="hidden md:flex bg-[#d84a48]  rounded-md  flex-col sm:flex-row items-center justify-center sm:px-12 max-sm:px-4 py-4 absolute top-[-6px] w-full ">
                    <h6 className="text-center text-white sm:text-xl max-sm:text-sm ">
                        Looking To Sell Or Rent Your Property?
                    </h6>
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="sm:px-4 max-sm:px-2 py-2 sm:text-sm max-sm:text-xs rounded-full text-[#d84a48] bg-white mt-2 sm:mt-0 sm:ml-auto"
                    >
                        Enquire Now
                    </button>
                </div>
                <div className="container mx-auto px-10 mt-12">
                    <div className="flex flex-wrap justify-between gap-0">
                        {/* About CFRE */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold mb-4">About CFRE</h4>
                            <p className="text-gray-400">
                                CFRE has always been committed to providing the highest quality products and services to its clients by taking an open and honest approach that is centered on the needs of the customer and engaging in business operations that are morally sound
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul>
                                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                                {/* <li><a href="/categories" className="text-gray-400 hover:text-white">Categories</a></li> */}
                                <li><a href="/about-us" className="text-gray-400 hover:text-white">About Us</a></li>
                                {/* <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li> */}
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <p className="text-gray-400 mb-2">320, HBC , Hirabaug Chowk, Tilak Road</p>
                            <p className="text-gray-400 mb-2">Pune- 411002</p>
                            <p className="text-gray-400 mb-2">Phone:  +91 8149977661</p>
                            <p className="text-gray-400">Email: swapnil@cfrerealty.com</p>
                            <p className="text-gray-400 mb-2">RERA:  A52100013991</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center mt-8">
                        <a href="https://facebook.com" className="mx-2 text-gray-400 hover:text-white" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className="mx-2 text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="mx-2 text-gray-400 hover:text-white" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" className="mx-2 text-gray-400 hover:text-white" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="bg-gray-900 text-center py-2 mt-2">
    <p className="text-white-500 text-sm">
        &copy; {new Date().getFullYear()} CFRE. All rights reserved.
        Carefully Crafted By Digitalize The Globe!
    </p>
</div>


                {isFormVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                        <ContactForm onSubmit={(data) => { console.log('Form data:', data); handleCloseForm(); }} />
                        {/* <button
                            onClick={handleCloseForm}
                            className="mt-4 text-red-500 hover:text-red-700">
                            Close
                        </button> */}
                    </div>
                </div>
            )}
            </footer>
        </>
    );
};

export default Footer;
