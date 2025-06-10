import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import ContactForm from '../MainBody/ContactForm';


const Footer = () => {
    const [isFormVisible, setFormVisible] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate hook

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    return (
        <>
        <footer className="bg-gray-900 text-white pt-10 mt-10">
            {/* Call to Action */}
            <div className="bg-[#d84a48] py-4 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between w-full mb-12 rounded-lg shadow-lg">
                <h6 className="md:text-lg text-sm text-center md:text-left text-white font-semibold">
                    Looking to Sell or Rent Your Property?
                </h6>
                <button
                    onClick={handleButtonClick}
                    className="md:px-4 md:py-2 px-2 py-1 text-xs md:text-sm rounded-full text-white bg-black mt-2 md:mt-0 md:ml-auto hover:bg-white hover:text-black transition duration-300"
                >
                    Enquire Now
                </button>
            </div>

            {/* Contact Form Modal */}
            {isFormVisible && (
                <div
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm}
                >
                    <div
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}

            <div className="container mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* About CFRE */}
                    <div>
                        <h4 className="md:text-xl font-semibold mb-4">About CFRE Realty</h4>
                        <p className="text-white leading-relaxed text-justify md:text-base text-sm ">
                            CFRE is committed to providing top-quality products and services with an open and honest approach. Our goal is to engage in business operations that are morally sound and customer-focused.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h4 className="md:text-xl font-semibold mb-4  md:ml-8">Useful Links</h4>
                        <ul className="space-y-3 md:ml-8">
                            <li><Link to="/Preleased" className="text-white hover:text-white  md:text-base text-sm">Preleased</Link></li>
                            <li><Link to="/Unleased" className="text-white hover:text-white  md:text-base text-sm">Sale</Link></li>
                            <li><Link to="/furnished" className="text-white hover:text-white  md:text-base text-sm">Rent</Link></li>
                            <li><Link to="/projectproperty" className="text-white hover:text-white  md:text-base text-sm">Projects</Link></li>
                            <li><Link to="/Latestblog" className="text-white hover:text-white  md:text-base text-sm">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="md:text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/aboutUs" className="text-white hover:text-white  md:text-base text-sm">About Us</Link></li>
                            <li><Link to="/contactUs" className="text-white hover:text-white  md:text-base text-sm">Contact Us</Link></li>
                            <li><Link to="/fAQs" className="text-white hover:text-white  md:text-base text-sm">FAQ's</Link></li>
                            <li><Link to="/privacyPolicy" className="text-white hover:text-white  md:text-base text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="md:text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-white mb-2  md:text-base text-sm">
                            <FaMapMarkerAlt className="inline mr-2 text-white md:text-base text-sm" />
                            320, HBC, Hirabaug Chowk, Tilak Road Pune - 411002
                        </p>
                        <p className="text-gray-400 mb-2  md:text-base text-sm">
                            <FaPhoneAlt className="inline mr-2 text-white  md:text-base text-sm" />
                            <a href="tel:+918149977661" className="text-white hover:text-[#d84a48] hover:underline ml-1">
                                +91 8149977661
                            </a>
                        </p>
                        <p className="text-gray-400">
                            <FaEnvelope className="inline mr-2 text-white  md:text-base text-sm" />
                            <a href="mailto:sales@cfrerealty.com" className="text-white hover:text-[#d84a48] hover:underline ml-1  md:text-base text-sm">
                                sales@cfrerealty.com
                            </a>
                        </p>

                        {/* Social Media Links */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.facebook.com/share/V6WUcvRiRnM9AFyU/?mibextid=qi2Omg" className="text-gray-400 hover:text-white">
                                <img src={require('../assets/icons/facebook.png')} alt="Facebook" width={22} height={22} />
                            </a>
                            <a href="https://youtube.com/@cfrerealty-pune" className="text-gray-400 hover:text-white">
                                <img src={require('../assets/icons/youtube.png')} alt="YouTube" width={22} height={22} />
                            </a>
                            <a href="https://www.instagram.com/cfrerealty" className="text-gray-400 hover:text-white">
                                <img src={require('../assets/icons/instagram.png')} alt="Instagram" width={22} height={22} />
                            </a>
                            <a href="https://www.linkedin.com/company/cfre-realty/" className="text-gray-400 hover:text-white">
                                <img src={require('../assets/icons/linkedin.png')} alt="LinkedIn" width={22} height={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-gray-800 text-center py-4 mt-8">
                {/* <p className="text-white md:text-sm text-xs">
                    &copy; {new Date().getFullYear()} CFRE Realty. All rights reserved. 
                    Crafted with care by 
                    <a 
                        href="https://digitalizetheglobe.com/" 
                        className="text-[#d84a48] hover:text-white transition ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Digitalize The Globe
                    </a>.
                </p> */}
            </div>
        </footer>
        </>
    );
};

export default Footer;
