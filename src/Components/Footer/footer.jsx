// import { React, useState } from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import ContactForm from '../MainBody/ContactForm';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     const [isFormVisible, setFormVisible] = useState(false);

//     const handleButtonClick = () => {
//         setFormVisible(true);
//     };

//     const handleCloseForm = () => {
//         setFormVisible(false);
//     };

//     return (
//         <>
//             <footer className="bg-gray-800 text-white py-8 mt-5 relative">
//                 {/* Call to Action */}
//                 <div className="flex flex-col md:flex-row items-center justify-between bg-[#d84a48] rounded-md px-4 py-4 absolute top-[-6px] w-full">
//                     <h6 className="text-center text-white text-sm md:text-xl">
//                         Looking To Sell Or Rent Your Property?
//                     </h6>
//                     <button
//                         type="button"
//                         onClick={handleButtonClick}
//                         className="px-4 py-2 text-xs md:text-sm rounded-full text-white bg-black mt-2 md:mt-0 md:ml-auto hover:bg-white hover:text-black transition duration-300"
//                     >
//                         Enquire Now
//                     </button>
//                 </div>

//                 <div className="container mx-auto px-4 sm:px-10 mt-16 w-full ">
//                     <div className="flex flex-wrap justify-between gap-y-8 md:gap-y-0">
//                         {/* About CFRE */}
//                         <div className="w-full md:w-1/3">
//                             <h4 className="text-lg font-semibold mb-4">About CFRE</h4>
//                             <p className="text-gray-400 text-justify">
//                                 CFRE has always been committed to providing the highest quality products and services to its clients by taking an open and honest approach that is centered on the needs of the customer and engaging in business operations that are morally sound.
//                             </p>
//                         </div>

//                         {/* Quick Links */}
//                         <div className="w-full md:w-1/3">
//                             <h4 className="text-lg font-semibold mb-4 md:ml-20">Quick Links</h4>
//                             <ul className="ml-0 md:ml-20">
//                                 <li className="mb-2"><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
//                                 <li className="mb-2"><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
//                                 <li className="mb-2"><Link to="/contactUs" className="text-gray-400 hover:text-white">Contact Us</Link></li>
//                                 <li className="mb-2"><Link to="/Latestblog" className="text-gray-400 hover:text-white">Blog</Link></li>
//                                 <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
//                             </ul>
//                         </div>

//                         {/* Contact Information */}
//                         <div className="w-full md:w-1/3">
//                             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//                             <p className="text-gray-400 mb-2">320, HBC, Hirabaug Chowk, Tilak Road</p>
//                             <p className="text-gray-400 mb-2">Pune- 411002</p>
//                             <p className="text-gray-400 mb-2">
//                                 Phone: <a href="tel:+918149977661" className="text-white hover:text-[#d84a48] hover:underline">+91 8149977661</a>
//                             </p>
//                             <p className="text-gray-400">
//                                 Email: <a href="mailto:sales@cfrerealty.com" className="text-white hover:text-[#d84a48] hover:underline">sales@cfrerealty.com</a>
//                             </p>
//                         </div>


//                     </div>

//                     {/* Social Media Links */}
//                     <div className="flex justify-center mt-8 space-x-4">
//                         <a href="https://www.facebook.com/share/V6WUcvRiRnM9AFyU/?mibextid=qi2Omg" className="text-gray-400 hover:text-white" aria-label="Facebook">
//                             <FaFacebookF />
//                         </a>
//                         <a href="https://youtube.com/@cfrerealty-pune" className="text-gray-400 hover:text-white" aria-label="Twitter">
//                             <FaYoutube />
//                         </a>
//                         <a href="https://www.instagram.com/cfrerealty" className="text-gray-400 hover:text-white" aria-label="Instagram">
//                             <FaInstagram />
//                         </a>
//                         <a href="https://www.linkedin.com/company/cfre-realty/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
//                             <FaLinkedinIn />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Footer Bottom */}
//                 <div className="bg-gray-900 text-center py-2 mt-4">
//                 <p className="text-gray-500 text-sm">
//     &copy; {new Date().getFullYear()} CFRE. All rights reserved.
//     Carefully Crafted By <a 
//         href="https://digitalizetheglobe.com/" 
//         className="text-white-500 hover:text-[#d84a48] transition-colors"
//         target="_blank" 
//         rel="noopener noreferrer"
//     >
//         Digitalize The Globe!
//     </a>
// </p>


//                 </div>

//                 {/* Contact Form Modal */}
//                 {isFormVisible && (
//                     <div
//                         className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
//                         onClick={handleCloseForm} // Close on overlay click
//                     >
//                         <div
//                             className='relative bg-white rounded-lg shadow-lg max-w-[500px] w-full p-4'
//                             onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
//                         >
//                             <ContactForm onClose={handleCloseForm} />
//                         </div>
//                     </div>
//                 )}
//             </footer>
//         </>
//     );
// };

// export default Footer;


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactForm from '../MainBody/ContactForm';
const Footer = ({ handleButtonClick, isFormVisible, handleCloseForm }) => {
    return (
        <footer className="bg-gray-900 text-white pt-10 mt-10">
    {/* Call to Action */}
    <div className="bg-[#d84a48] py-4 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between w-full mb-12 rounded-lg shadow-lg">
        <h6 className="text-lg text-center md:text-left text-white font-semibold">
            Looking to Sell or Rent Your Property?
        </h6>
        <button
            onClick={handleButtonClick}
            className="px-4 py-2 text-xs md:text-sm rounded-full text-white bg-black mt-2 md:mt-0 md:ml-auto hover:bg-white hover:text-black transition duration-300"
        >
            Enquire Now
        </button>
    </div>

    <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* About CFRE */}
            <div>
                <h4 className="text-xl font-semibold mb-4">About CFRE Realty</h4>
                <p className="text-gray-400 leading-relaxed text-justify">
                    CFRE is committed to providing top-quality products and services with an open and honest approach. Our goal is to engage in business operations that are morally sound and customer-focused.
                </p>
            </div>

            {/* Useful Links */}
            <div>
                <h4 className="text-xl font-semibold mb-4 ml-8">Useful Links</h4>
                <ul className="space-y-3 ml-8">
                    <li><Link to="/about-us" className="text-gray-400 hover:text-white">Invest</Link></li>
                    <li><Link to="/contactUs" className="text-gray-400 hover:text-white">Rent</Link></li>
                    <li><Link to="/Latestblog" className="text-gray-400 hover:text-white">Projects</Link></li>
                    <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-white">Blog</Link></li>
                </ul>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                    <li><Link to="/about-us" className="text-gray-400 hover:text-white">About Us</Link></li>
                    <li><Link to="/contactUs" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                    <li><Link to="/Latestblog" className="text-gray-400 hover:text-white">FAQ's</Link></li>
                    <li><Link to="/privacyPolicy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                </ul>
            </div>

            {/* Contact Information */}
            <div>
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <p className="text-gray-400 mb-2">
                    <FaMapMarkerAlt className="inline mr-2 text-white" />
                    320, HBC, Hirabaug Chowk, Tilak Road Pune - 411002
                </p>
                <p className="text-gray-400 mb-2">
                    <FaPhoneAlt className="inline mr-2 text-white" />
                   
                    <a href="tel:+918149977661" className="text-white hover:text-[#d84a48] hover:underline ml-1">
                        +91 8149977661
                    </a>
                </p>
                <p className="text-gray-400">
                    <FaEnvelope className="inline mr-2 text-white" />
                   
                    <a href="mailto:sales@cfrerealty.com" className="text-white hover:text-[#d84a48] hover:underline ml-1">
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
        <p className="text-gray-500 text-sm">
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
        </p>
    </div>

    {/* Contact Form Modal */}
    {isFormVisible && (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseForm}
        >
            <div
                className="relative bg-white rounded-lg shadow-lg max-w-[500px] w-full p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <ContactForm onClose={handleCloseForm} />
            </div>
        </div>
    )}
</footer>

    );
};

export default Footer;

