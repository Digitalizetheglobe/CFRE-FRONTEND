import React from "react";
import { Link } from "react-router-dom";
import Image from "../Blogs/blog1.jpg";
import Image1 from "../Blogs/Blog2.jpg";
import Image2 from "../Blogs/Blog3.jpg";
import Image3 from "../Blogs/blog4.webp";
import Image5 from "../Blogs/blog5.jpg";
import Image6 from "../Blogs/blog6.jpg";
import Image7 from "./blog7.webp"
import Header from '../Header/header.jsx'
const Latestblog = () => {
    return (
        <>
            <Header />
            {/* Background Section */}
            <div className="relative before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-70 before:z-10">
                {/* Background Image */}
                <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Banner Image"
                    className="absolute inset-0 w-full md:h-full object-cover"
                />

                {/* Content Overlay */}
                <div className="md:min-h-[350px] min-h-[250px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-white md:text-4xl text-lg items-center">
                        The Latest News and Updates from the Indian Real Estate Industry!
                    </h2>
                    <Link
                        to="#"
                        className="md:mt-12 mt-4 text-base font-semibold md:py-2.5 px-5 border-2 border-yellow-600 hover:border-yellow-400 bg-transparent text-yellow-500 rounded"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Jumbotron Section */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-50 max-sm:px-8 px-12 py-2 w-full rounded pl-2">
                    <h1 className="md:text-3xl text-lg text-gray-700 mt-6">Featured</h1>
                    <div className="mt-4"></div>
                </div>

                {/* Flex Section */}
                <div className="flex flex-col md:flex-row gap-4  w-full">
                    {/* Image Card */}
                    <Link href="#" className="flex-shrink-0 md:w-1/2 mt-5">
                        <img
                            alt="Company Branding"
                            src={Image}
                            className="h-56 md:w-full md:ml-0 ml-10 rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                        />
                    </Link>

                    {/* Content Card */}
                    <div className="bg-gray-50 max-sm:px-8 px-12 py-2 w-full rounded md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-gray-800 md:text-2xl font-bold py-2">
                            {" "}
                            Why Commercial Property ?
                        </h2>
                        <span className="text-gray-500 py-2">
                            {" "}
                            Why Commercial Property in Baner is a Prime Choice for Business
                            Growth?
                        </span>
                        <div className="">
                            <p
                                className="text-sm leading-relaxed"
                                style={{ textAlign: "justify" }}
                            >
                                If you’re considering expanding or relocating your business,
                                commercial property in Baner should be at the top of your list.
                                Baner, a rapidly growing locality in Pune, offers a wealth of
                                opportunities for businesses looking to thrive in a vibrant and
                                strategic environment.
                            </p>
                            <div className="flex items-center justify-between text-gray-400 mt-4">
                                <span>BY CFRE REALITY PUNE </span>
                                <span> July 6, 2024</span>
                            </div>
                        </div>
                        <Link to="/commercial-property-in-baner-2">
                            <button
                                type="button"
                                className="mt-4 md:px-2  py-1.5 md:py-3 text-sm rounded text-white border-none outline-none bg-[#d84a48] hover:text-black hover:bg-gray-300 w-36"
                            >
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-50 max-sm:px-8 px-12 py-2 w-full rounded pl-2">
                    <h1 className="text-3xl text-gray-700 mt-4">Trending News</h1>
                    {/* <div className="mt-4"></div> */}
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-5 w-full">
                    {/* Image Card */}
                    <div className="flex items-center p-6 bg-white shadow-lg rounded-lg border border-gray-300">
                        {/* Image Section */}
                        <Link to="/coworking-space" className="flex-shrink-0">
                            <img
                                alt="Company Branding"
                                src={Image2}
                                className="w-[200px] h-[134px] object-cover"
                            />
                        </Link>

                        {/* Side Content Section */}
                        <div className="ml-4 flex-1">
                            <h3 className="md:text-xl font-semibold">
                                Find Your Perfect Workspace
                            </h3>
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                                Find Your Perfect Workspace at Amar Business Zone with CFRE
                                Realty!
                            </p>
                            <div className="flex items-center text-xs justify-between text-gray-700 mt-4">
                                <span>BY CFRE REALITY PUNE </span>
                                <span> July 25, 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex items-center p-6 bg-white shadow-lg rounded-lg border border-gray-300">
                        {/* Image Section */}
                        <Link
                            to="/commercial-property-in-balewadi"
                            className="flex-shrink-0"
                        >
                            <img
                                alt="Company Branding"
                                src={Image1}
                                className="w-[200px] h-[134px] object-cover"
                            />
                        </Link>

                        {/* Side Content Section */}
                        <Link to='/Investing in Commercial Property in Balewadi: A Smart Choice for 2024'>
                        <div className="ml-4 flex-1">
                            <h3 className="md:text-xl font-semibold">
                                {" "}
                                Investing in Commercial Property
                            </h3>
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                                Investing in Commercial Property in Balewadi: A Smart Choice for
                                2024
                            </p>
                            <div className="flex items-center text-xs justify-between text-gray-700 mt-4">
                                <span>BY CFRE REALITY PUNE </span>
                                <span> July 30, 2024</span>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>

                <div className="bg-gray-50 max-sm:px-8 px-12 py-2 w-full rounded pl-2">
                    <h1 className="md:text-3xl text-xl text-gray-700 mt-8">
                        Insights from CFRE Reality
                    </h1>
                    {/* <div className="mt-4"></div> */}
                </div>
                <div className="bg-white my-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
                            {/* Blog Post 1 */}
                            <Link to="/Why to Invest in Commercial Property in 2024 and Which are the Best Option to Invest in Baner-Balewadi?">
                                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                                    <img
                                        src={Image5}
                                        alt="Blog Post 1"
                                        className="w-full md:h-60 h-40  object-cover"
                                    />
                                    <div className="p-6">
                                        <span className="text-sm block text-gray-400 mb-2">
                                            1 AUG 2024 | BY CFRE REALITY PUNE
                                        </span>
                                        <h3 className="md:text-xl font-bold text-[#333]">
                                            How to Evaluate Real Estate
                                        </h3>
                                        <hr className="my-6" />
                                        <p className="text-gray-700 text-sm">
                                            How to Evaluate Real Estate Investment Opportunities in
                                            Warje, Pune
                                        </p>
                                    </div>
                                </div>
                            </Link>









                            {/* Blog Post 2 */}
                            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                                <img
                                    src={Image1}
                                    alt="Blog Post 2"
                                    className="w-full md:h-60 h-40 object-cover"
                                />
                                <div className="p-6">
                                    <span className="text-sm block text-gray-400 mb-2">
                                        3 SEP 2023 | BY CFRE REALITY PUNE
                                    </span>
                                    <h3 className="md:text-xl font-bold text-[#333]">
                                        Investing in Commercial Property
                                    </h3>
                                    <hr className="my-6" />
                                    <p className="text-gray-700 text-sm">
                                        Investing in Commercial Property in Balewadi: A Smart Choice
                                        for 2024
                                    </p>
                                </div>
                            </div>














                            {/* Blog Post 3 */}
                            <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                                <img
                                    src={Image6}
                                    alt="Blog Post 3"
                                    className="w-full md:h-60 h-40 object-cover"
                                />
                                <div className="p-6">
                                    <span className="text-sm block text-gray-400 mb-2">
                                        25 AUG 2024 | BY CFRE REALITY PUNE
                                    </span>
                                    <h3 className="md:text-xl font-bold text-[#333]">
                                        Why to Invest in Commercial Property
                                    </h3>
                                    <hr className="my-6" />
                                    <p className="text-gray-700 text-sm">
                                        Why to Invest in Commercial Property in 2024 and Which are
                                        the Best Option to Invest in Baner-Balewadi?
                                    </p>
                                </div>
                            </div>
                            <Link to="/How to Evaluate Real Estate Investment Opportunities in Warje, Pune">
                                {/* Blog Post 4 */}
                                <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
                                    <img
                                        src={Image7}
                                        alt="Blog Post 3"
                                        className="w-full md:h-60 h-40 object-cover"
                                    />
                                    <div className="p-6">
                                        <span className="text-sm block text-gray-400 mb-2">
                                            3 AUG 2024 | BY CFRE REALITY PUNE
                                        </span>
                                        <h3 className="md:text-xl font-bold text-[#333]">
                                        Why to Invest in Commercial Property in 2024
                                        </h3>
                                        <hr className="my-6" />
                                        <p className="text-gray-700 text-sm">
                                        Why to Invest in Commercial Property in 2024 and Which are the Best Option to Invest in Baner-Balewadi?
                                        </p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto flex md:items-center max-md:flex-col bg-blue-900 px-8 py-4 min-h-[100px] rounded-xl shadow-xl md:mt-20 md:mb-12 ">
                    <p className="text-white md:text-base text-sm flex-1">
                        Begin Your Property Search Today – Let's Find Your Perfect Match
                        Together!
                    </p>
                    <div className="md:mt-6">
                        <Link to="/contactUs">
                            <button
                                type="button"
                                className="mt-4 md:px-2 px-1 py-1.5 md:py-3 text-sm rounded text-white border-none outline-none bg-[#d84a48] hover:text-black hover:bg-gray-300 w-36"
                            >
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Latestblog;
