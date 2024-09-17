
import React, { useState } from 'react';
import Banner from './Get Started Now FREE (1).png';
import Blogslider from '../MainBody/Blogslider';
import Tagline from './123.png';
import Image from './ranger-4df6c1b6.png'
import { Phone, Mail, MapPin, Map } from 'lucide-react'; // Updated import to use MapPin for location
import CountUp from 'react-countup';
import Bckgrndimg from '../assets/coundown.jpg'

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = "Message content is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Submit form (you can integrate form submission logic here)
            console.log("Form submitted", formData);
        }
    };

    return (
        <>
            <div className="relative mb-10 mt-10">
                {/* Banner Image */}
                <img
                    src={Banner}
                    alt="Blog Banner"
                    className="w-11/12 h-72 object-cover rounded-lg shadow-lg ml-16"
                />
                {/* Text on Banner */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-5xl px-4 py-2 rounded">
                        Contact Us
                    </h1>
                </div>
            </div>
            <div className="bg-gray-50 flex flex-col md:flex-row justify-between p-8 mb-10 rounded-lg">
                <div className="bg-gray-300 p-8 rounded-lg w-full md:w-1/2 mx-auto md:ml-32">
                    <h2 className="text-2xl font-bold mb-4">
                        Get help from <span className="text-[#d84a48]">us.</span>
                    </h2>
                    <p className="text-gray-600 mb-8"></p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name ..."
                                className="p-4 rounded-lg w-full focus:outline-none"
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}

                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone number ..."
                                className="p-4 rounded-lg w-full focus:outline-none"
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone}</p>}

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email address ..."
                                className="p-4 rounded-lg w-full focus:outline-none"
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Provide the message content ..."
                            className="p-4 rounded-lg w-full h-40 focus:outline-none"
                        ></textarea>
                        {errors.message && <p className="text-red-500">{errors.message}</p>}

                        <button
                            type="submit"
                            className="bg-[#d84a48] text-white px-6 py-3 rounded-lg mt-4 hover:bg-[#ab3c3b] transition"
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
                                <p className="font-bold">Office Number</p>
                                <a
                                    href="tel:+918149977661"
                                    className="text-gray-700 hover:text-[#d84a48] hover:underline"
                                >
                                    +91 8149977661
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="font-bold">Business Email</p>
                                <a
                                    href="mailto:swapnil@cfrerealty.com"
                                    className="text-gray-700 hover:text-[#d84a48] hover:underline"
                                >
                                    sales@cfrerealty.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <MapPin className="w-6 h-6 text-gray-600" />
                            <div>
                                <p className="font-bold">Office Location</p>
                                <p className="text-gray-700">
                                    320, HBC, Hirabaug Chowk, Tilak Road Pune- 411002
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <Map className="w-6 h-6 text-gray-600" />
                            <p className="font-bold">Find Us On Google</p>
                        </div>
                        <iframe
                            className="w-full h-96 rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.548551613884!2d73.85311307465182!3d18.50409726967826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c01328410eb9%3A0x19ebdd52d7fa6ef6!2sHirabaug%20Business%20Center!5e0!3m2!1sen!2sin!4v1725004275510!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Blogslider />
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


            <div className="relative mb-20 mt-10">
                {/* Banner Image */}
                <img
                    src={Tagline} // Use src attribute for the image
                    alt="Blog Banner"
                    className="w-11/12 h-72 object-cover rounded-lg shadow-lg ml-16"
                />
            </div>
        </>
    );
}

export default ContactUs;
