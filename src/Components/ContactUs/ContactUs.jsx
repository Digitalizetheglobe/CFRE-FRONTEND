import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import Banner from './Get.png';
import Blogslider from '../MainBody/Blogslider';
import Tagline from './123.png';
import Image from './ranger-4df6c1b6.png';
import { Phone, Mail, MapPin, Map } from 'lucide-react';
import CountUp from 'react-countup';
import Bckgrndimg from '../assets/coundown.jpg'
import Header from '../Header/header.jsx';
// import Bckgrndimg from '../assets/coundown.jpg';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com'; // Import EmailJS
function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
   

    

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        // Validation for mobile number
        if (name === "mobileNumber") {
          const isValid = value.length === 10 && /^\d+$/.test(value); // Check if it's exactly 10 digits and contains only numbers
      
          if (!isValid) {
            setFormData({ ...formData, [name]: value });
            setError("Please enter a valid 10-digit phone number.");
          } else {
            setFormData({ ...formData, [name]: value });
            setError(""); // Clear error if valid
          }
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
      
      const [error, setError] = useState("");
      
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .send(
                "service_tcxetoy", // Replace with your EmailJS service ID
                "template_hpqdgn4", // Replace with your EmailJS template ID
                formData,
                "AEeCWA03cEiyY3oJg" // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    alert("Mail sent successfully!");
                    // Auto-refresh the page
                    window.location.reload();
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    alert("Error sending email!");
                }
            );
    };
    

    return (
        <>
         <Helmet>
                    <title>Get in Touch with CFRE Realty | Contact Us Today!</title>
                    <meta name="description" content="Contact CFRE Realty for expert assistance in finding corporate office spaces and retail properties. Reach out to our team for any inquiries related to property investment, sales, and leasing." />
                    <meta property="og:url" content="https://www.cfrerealty.com/contactUs" />
                    </Helmet>
            
        <Header />
            <div className="relative mb-10 md:mt-10 mt-5">
                {/* Banner Image */}
                <img
                    src={Banner}
                    alt="Blog Banner"
                    className="w-11/12 md:h-72 object-cover rounded-lg shadow-lg md:ml-16 ml-4"
                />
                {/* Text on Banner */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white md:text-5xl text-2xl px-4 py-2 rounded">
                        Contact Us
                    </h1>
                </div>
            </div>
            <div className="bg-gray-50 flex flex-col md:flex-row justify-between p-8 mb-10 rounded-lg">
                <div className="bg-gray-300 p-8 rounded-lg w-full md:w-1/2 mx-auto md:ml-32">
                    <h2 className="md:text-2xl text-lg font-bold md:mb-4">
                        Get help from <span className="text-[#d84a48]">us.</span>
                    </h2>
                    <p className="text-gray-600 mb-8"></p>
                    <form className="space-y-4" onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        // placeholder="Full Name"
        value={formData.user_name}
        onChange={handleChange}
        required
        placeholder="Your name ..."
        className="md:p-4 p-2 rounded-lg w-full focus:outline-none"
   
      />
      <input
        type="email"
        name="user_email"
        // placeholder="Email"
        value={formData.user_email}
        onChange={handleChange}
        required
        placeholder="Email address ..."
        className="md:p-4 p-2 rounded-lg w-full focus:outline-none"
    />
    

    
                        <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder={error || "Phone number ..."}
                        className="md:p-4 p-2 rounded-lg w-full focus:outline-none"
                        />
                        


      <textarea
        name="user_message"
        placeholder="Message"
        value={formData.user_message}
        onChange={handleChange}
        required
        className="md:p-4 p-2 rounded-lg w-full md:h-40 focus:outline-none"
        ></textarea>
      

                        <button
                            type="submit"
                            className="bg-[#d84a48] text-white md:px-6 px-3 py-1.5 md:py-3 rounded-lg mt-4 hover:bg-[#ab3c3b] transition"
                        >
                            Send Message &rarr;
                        </button>
    </form>
                
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-start justify-between mt-8 md:mt-0 mx-auto md:mr-16">
                    <div className="space-y-4 text-left">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="md:text-base text-sm font-bold">Office Number</p>
                                <a
                                    href="tel:+918149977661"
                                    className="md:text-base text-sm text-gray-700 hover:text-[#d84a48] hover:underline"
                                >
                                    +91 8149977661
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="font-bold md:text-base text-sm">Business Email</p>
                                <a
                                    href="mailto:swapnil@cfrerealty.com"
                                    className="md:text-base text-sm text-gray-700 hover:text-[#d84a48] hover:underline"
                                >
                                    sales@cfrerealty.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <MapPin className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="font-bold md:text-base text-sm">Office Location</p>
                                <p className="text-gray-700 md:text-base text-sm">
                                    320, HBC, Hirabaug Chowk, Tilak Road Pune- 411002
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Map className="w-6 h-6 text-gray-600" />
                            <p className="font-bold md:text-base text-sm">Find Us On Google</p>
                        </div>
                        <iframe
                            className="w-full md:h-96 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.548551613884!2d73.85311307465182!3d18.50409726967826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c01328410eb9%3A0x19ebdd52d7fa6ef6!2sHirabaug%20Business%20Center!5e0!3m2!1sen!2sin!4v1725004275510!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Blogslider />
            <div
                className="py-10 border md:ml-16 md:mr-12"
                style={{ 
                    borderRadius: '2rem', 
                    backgroundImage: `url(${Bckgrndimg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}
            >
                <div className="mx-auto  max-w-full px-6 lg:px-8 bg-opacity-75 rounded-lg p-8">
                    <dl className="grid md:grid-cols grid-cols-4 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="md:text-2xl leading-7 text-white">Years</dt>
                            <dd className="order-first text-xl font-semibold tracking-tight text-white md:text-5xl">
                                <CountUp start={0} end={12} duration={7} /> +
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="md:text-2xl leading-7 text-white">Sq.Ft <br />Delivered</dt>
                            <dd className="order-first text-xl font-semibold tracking-tight text-white md:text-5xl">
                                <CountUp start={0} end={2.5} decimals={1} suffix=" M" duration={7} />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="md:text-2xl leading-7 text-white">Clients</dt>
                            <dd className="order-first text-xl font-semibold tracking-tight text-white sm:text-5xl">
                                <CountUp start={0} end={500} duration={7} /> +
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="md:text-2xl leading-7 text-white">Cities</dt>
                            <dd className="order-first text-xl font-semibold tracking-tight text-white md:text-5xl">
                                <CountUp start={0} end={40} duration={7} /> +
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="relative mb-20 mt-10">
                {/* Banner Image */}
                <img
                    src={Tagline} // Use src attribute for the image
                    alt="Blog Banner"
                    className="md:w-11/12 md:h-72 object-cover rounded-lg shadow-lg md:ml-16 "
                />
            </div>
        </>
    );
}

export default ContactUs;
