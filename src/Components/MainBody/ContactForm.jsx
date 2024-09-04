import React, { useState } from 'react';
import axios from 'axios';
import logo from '../Header/cfre-logo.png';
import { Link } from 'react-router-dom';

const ContactForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile number is required.';
        else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            newErrors.mobileNumber = 'Mobile number must be 10 digits.';
        }
        if (!formData.message) newErrors.message = 'Message is required.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('https://cfrecpune.com/contactform', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Form submitted successfully:', response.data);
            setIsSubmitted(true); // Show the thank you message
            setFormData({
                name: '',
                email: '',
                mobileNumber: '',
                message: '',
            });
            setErrors({});
        } catch (error) {
            console.error('Error submitting the form:', error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto relative">
            <Link to="/" className="flex justify-center mb-4">
                <img src={logo} alt="logo" className="w-20" />
            </Link>

            <h1 className='text-center text-2xl font-semibold mb-6'>Post Your Requirement</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.mobileNumber && <p className="text-red-500 text-xs">{errors.mobileNumber}</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm text-black font-medium">Tell Us Your Requirement</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                    Submit
                </button>
            </form>

            {/* Close Button Inside Form */}
            <button
                onClick={onClose} // Use the onClose prop to close the form
                className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                Close
            </button>

            {/* Thank You Message Popup */}
            {isSubmitted && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
                        <h2 className="text-xl text-black font-semibold mb-4">Thank You!</h2>
                        <p className="mb-4 text-black">Thank you for posting your requirement. We will connect with you soon!</p>
                        <button
                            onClick={onClose} // Use the onClose prop here as well
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
