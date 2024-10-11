import React, { useState } from "react";
import axios from "axios";
import Banner from './CFRE BLOG BANNER (72 x 20 in).jpg';
import Image from './blog7.webp'
import gifmodal from "../../Components/assets/double-check.gif";
import Header from '../Header/header.jsx'


function Blog7() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error for the current field when the user starts typing
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    // Handle validation on blur
    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    // Field validation
    const validateField = (name, value) => {
        let error = "";

        if (name === "phone") {
            const phoneRegex = /^[0-9]{10}$/; // Example: for a 10-digit phone number
            error = phoneRegex.test(value)
                ? ""
                : "Invalid phone number, must be 10 digits.";
        } else if (name === "email") {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            error = emailRegex.test(value)
                ? ""
                : "Please enter a valid email address.";
        }

        // Update the specific field's error
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate all fields before submitting
        let allValid = true;
        const newErrors = {};

        Object.keys(formData).forEach((field) => {
            const value = formData[field];
            let error = "";

            if (field === "phone") {
                const phoneRegex = /^[0-9]{10}$/;
                error = phoneRegex.test(value)
                    ? ""
                    : "Invalid phone number, must be 10 digits.";
            } else if (field === "email") {
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                error = emailRegex.test(value)
                    ? ""
                    : "Please enter a valid email address.";
            }

            if (error) {
                allValid = false;
                newErrors[field] = error;
            }
        });

        setErrors(newErrors);

        if (allValid) {
            console.log("Form submitted successfully:", formData);

            // Show success modal
            setIsSubmitted(true);

            // Reset form
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
            });
        } else {
            console.log("Please correct the errors in the form.");
        }
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsSubmitted(false);
    };

    return (
        <>
            <Header />
            <div className="relative md:mb-8">
                {/* Banner Image */}
                <img
                    src={Banner} // Use src attribute for the image
                    alt="Blog Banner"
                    className="w-full md:h-64 h-32 object-cover rounded-lg shadow-lg"
                />
                {/* Text on Banner */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white md:text-4xl  bg-black bg-opacity-50 px-4 py-2 rounded">
                    Why to Invest in Commercial Property in 2024
                    </h1>
                </div>
            </div>



            <div className="max-w-4xl mx-auto p-6">


                {/* Blog Heading */}
                <h1 className="md:text-4xl text-sm font-bold mb-4">
                Why to Invest in Commercial Property in 2024 and Which are the Best Option to Invest in Baner-Balewadi?              </h1>

                {/* Email and Date */}
                <div className="flex items-center justify-between text-gray-600 mb-6 text-xs">
                    <span>By cfrerealtypune@gmail.com </span>
                    <span> August 3, 2024</span>
                </div>

                {/* Blog Content */}
                {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Heading 2 Title</h2> */}
                <p className="md:text-base text-sm text-gray-800 mb-6">
                Commercial properties typically generate higher rental yields compared to residential properties. This can provide a stable and potentially higher income stream.                </p>
                {/* Banner Image */}
                <div className="relative mb-8">
                    <img
                        src={Image} // Use src attribute for the image
                        alt="Blog Banner"
                        className="w-full md:h-64 h-32 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <h2 className="md:text-2xl font-semibold md:mt-8 md:mb-4 mb-2">Rental Income:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Commercial properties typically generate higher rental yields compared to residential properties. This can provide a stable and potentially higher income stream.            </p>

                <h2 className="md:text-2xl font-semibold mt-8 mb-4">Asset Appreciation: </h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Commercial properties in well-developed or developing areas tend to appreciate over time, potentially providing capital gains upon resale.            </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">Long-term Stability:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Lease agreements for commercial properties are usually longer-term, providing stability and predictability in income compared to residential leases.            </p>
                <h2 className="md:text-2xl font-semibold mt-8 md:mb-4">Diversification: </h2>
                <p>Investing in commercial real estate can diversify your investment portfolio, spreading risk across different asset classes.</p>
                
                <h2 className="md:text-2xl font-semibold mt-8 md:mb-4">Tax Benefits: </h2>
                <p>Depending on the location and local laws, there may be tax advantages associated with commercial property ownership, such as deductions for depreciation and expenses.</p>
                
                
                
                
                <div className="max-w-6xl mx-auto px-8 py-4 rounded-xl shadow-xl md:mt-20 mt-5 mb-12 relative overflow-hidden">
                    {/* Background Image */}
                    <img
                        src="https://readymadeui.com/cardImg.webp"
                        alt="Banner Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-80"></div>

                    {/* Content */}
                    <div className="relative max-w-lg mx-auto text-center z-10">
                        <h4 className="text-white md:text-2xl font-bold mb-2 z-10">
                            Navigating Every Aspect of Commercial Real Estate
                        </h4>

                        <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
                            {/* Grid Layout for Form Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                                        placeholder="Enter your Email"
                                        required
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                </div>
                                <div>
                                    <input
                                        id="message"
                                        name="message"
                                        type="text"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                                        placeholder="Message"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center mt-8">
                                <button
                                    type="submit"
                                    className="px-8 py-3 text-sm font-semibold text-white bg-[#d84a48] rounded hover:bg-gray-400 transition-all"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Modal for Success Message */}
                    {isSubmitted && (
                        <div
                            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center relative z-50">
                                <img
                                    src={gifmodal}
                                    alt="Verified"
                                    className="w-16 h-16 mx-auto mb-4"
                                />
                                <h2 className="text-2xl font-bold mb-2">Success!</h2>
                                <p>Your form has been submitted successfully.</p>
                                <button
                                    onClick={handleCloseModal}
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <p>Regarding Baner-Balewadi specifically, this area in Pune has been developing rapidly as an IT and commercial hub. Here are some considerations and options for investing in commercial property there:</p>

                <h2 className="md:text-2xl font-semibold mt-8 mb-4">1. IT Parks and Tech Hubs:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6"> Baner-Balewadi is known for its IT parks and tech companies. Investing in office spaces or buildings within these hubs can attract tech-savvy tenants and ensure a steady demand for commercial space.
                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">2. Retail Spaces:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                With the growing residential population in Baner-Balewadi, there is an increasing demand for retail outlets, restaurants, and entertainment venues. Investing in retail spaces in well-trafficked areas can be profitable.
                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">3. Mixed-use Developments:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Properties that offer a mix of retail, office, and residential spaces can cater to diverse tenant needs and maximize rental income potential.                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">4. Infrastructure Development:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Consider properties that are close to upcoming infrastructure projects such as metro lines, highways, or commercial complexes, as these can significantly enhance property value over time.                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">5. Property Management:</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                Ensure the property you invest in has good property management services in place. This is crucial for maintaining the property, attracting tenants, and ensuring smooth operations.                </p>
                
                <h2 className="md:text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                    Investing in real estate in Warje, Pune, presents an array of opportunities for significant returns, especially with the growing demand for office space for rent in Warje, Pune. By considering factors such as location, infrastructure, market trends, rental yields, and future growth potential, you can make a well-informed investment decision. Ensure that you conduct thorough research, consult with experts, and evaluate all aspects to maximize the benefits of your real estate investment in Warje. With the right approach, Warje can be a lucrative destination for your commercial real estate ventures.Top of FormBottom of Form            </p>

                <h2 className="md:text-2xl font-semibold mt-8 mb-4"></h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4"></h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                </p>
                <h2 className="md:text-2xl font-semibold mt-8 mb-4"></h2>
                <p className="md:text-base text-xs text-gray-800 mb-6">
                </p>
                {/* Leave a Comment Section */}
                <h3 className="md:text-2xl font-bold mt-12 mb-6">Leave a Comment</h3>
                <form className="space-y-6">
                    <div>
                        <textarea
                            className="w-full md:h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your comment"
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-[#d84a48] hover:bg-[#c34543] text-white font-bold py-3 px-6 rounded-lg"
                        >
                            Post Comment
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Blog7;
