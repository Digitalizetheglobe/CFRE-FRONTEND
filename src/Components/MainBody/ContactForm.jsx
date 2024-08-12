import React, { useState } from 'react';
import logo from '../Header/cfre-logo.png';
import { Link } from 'react-router-dom';

const ContactForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit function passed as a prop
        onSubmit(formData);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto font-serif relative">
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
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
                    <input
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300">
                    Enquire Now
                </button>
            </form>
            {/* Close Button Inside Form */}
            <button
                onClick={() => window.location.href = '/'}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                Close
            </button>
        </div>
    );
};

export default ContactForm;
