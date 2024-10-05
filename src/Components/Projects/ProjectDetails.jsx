import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";
import Image from './ABZ-1-1.jpg';
import ContactForm from '../MainBody/ContactForm';
import Header from '../Header/header';


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null); // State to manage project data
    const [isFormVisible, setFormVisible] = useState(false);


    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`https://cfrecpune.com/projects/${id}`);
                setProject(response.data);
                console.log("5555555==>", response.data);

            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) return <p>Project not found</p>;



    // Handle WhatsApp button click
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    // Parse the amenities JSON string
    const amenities = JSON.parse(JSON.parse(project.amenities));

    const specification = (project.specification);

    return (
        <>
            <Header />

            <div className="bg-white py-8 px-4 sm:px-10">
                <div className="max-w-8xl mx-auto">
                    {/* Photo and Details Section */}
                    <div className="relative mb-8">
                        {/* Close Button */}
                        <button
                            onClick={() => navigate('/')}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl mt-11"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Image Section */}
                            <div className="relative flex-none w-full lg:w-3/5">
                                <div className="relative w-full h-40 md:h-96">
                                    <img
                                        className="w-full md:h-full h-40 object-cover"
                                        src={Image}
                                        alt="Project"
                                    />
                                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
                                    {/* <button
                                    className="absolute bottom-4 left-2/4 transform -translate-x-1/2 bg-transparent text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                                    onClick={() => navigate(`/project-images/${project.id}`)}
                                >
                                    View All Images
                                </button> */}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 w-full lg:w-2/5 md:mt-11">
                                <div className="bg-white border border-gray-500 md:shadow-md shadow-slate-700 rounded-lg overflow-hidden p-4">
                                    <h2 className="md:text-3xl  font-bold mb-4">{project.projectName}</h2>
                                    <div className="flex flex-col mb-4">
                                        <h3 className="md:text-2xl font-bold">₹{project.price}</h3>
                                        <div className="flex items-center mt-1">
                                            <MdOutlinePinDrop className="text-gray-500 mr-1" />
                                            <p className="text-gray-500">{project.location}, {project.city}</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 mb-4">
                                        <button
                                            className="bg-[#d84a48] text-white flex-1  md:py-2  py-1 px-2 md:px-4 rounded-md text-lg hover:bg-black-800 transition-colors duration-300"
                                            onClick={() => handleButtonClick()}
                                        >
                                            Contact Us
                                        </button>
                                        <button
                                            onClick={handleWhatsAppClick}
                                            className="bg-green-500 text-white flex-none py-2 px-4 rounded-full flex items-center justify-center text-sm hover:bg-green-600 transition-colors duration-300"
                                        >
                                            <FaWhatsapp style={{ fontSize: '20px' }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details and Amenities Section */}
                    <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6">
                        <div className="md:mb-12 mb-4">
                            <h4 className="md:text-xl font-semibold mb-2">About Project</h4>
                            <p className="text-gray-700 md:text-base text-sm">
                                This commercial project is designed to meet the dynamic needs of modern businesses. Located in a prime business district, it offers excellent visibility and accessibility.
                            </p>
                        </div>

                        <div className="md:mb-12 mb-4">
                            <div className="flex items-center mb-4">
                                <RiProgress2Line className="md:text-xl text-[#d84a48] mr-2" />
                                <h4 className="md:text-xl  font-semibold">Project Insights</h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Project Area:</p>
                                    <p className="text-lg font-medium">{project.projectArea}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Area:</p>
                                    <p className="text-lg font-medium">{project.area}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Price:</p>
                                    <p className="text-lg font-medium">{project.price}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Building Type:</p>
                                    <p className="text-lg font-medium">{project.propertyType}Commercial</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:mb-12 mb-4 justify-center">
                            <div className="flex items-center mb-4">
                                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="md:text-xl  font-semibold">Available Areas</h4>
                            </div>


                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2 px-4 border border-gray-300">Type</th>
                                            <th className="py-2 px-4 border border-gray-300">Unit Cost</th>
                                            <th className="py-2 px-4 border border-gray-300">Area</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.projectPlans && project.projectPlans.length > 0 ? (
                                            project.projectPlans.map((plan, index) => (
                                                <tr key={index} className="text-center">
                                                    <td className="py-2 px-4 border border-gray-300">{plan.Type}</td>
                                                    <td className="py-2 px-4 border border-gray-300">{plan["Unit Cost"]}</td>
                                                    <td className="py-2 px-4 border border-gray-300">{plan["Carpet Area"]}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="py-4 px-4 text-center text-gray-700">
                                                    No project plans available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="md:mb-12 mb-4">
                            <div className="flex items-center mb-4">
                                <AiFillRead className="text-xl text-[#d84a48] mr-2" />

                                <h4 className="md:text-xl font-semibold">Amenities</h4>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {amenities.map((amenity, index) => (
                                    <div key={index} className="p-4 bg-gray-100 rounded shadow-md">
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:mb-12 mb-4">
                            <div className="flex items-center mb-4">
                                <h4 className="md:text-xl font-semibold">Specifications</h4>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2 px-4 border border-gray-300">Category</th>
                                            <th className="py-2 px-4 border border-gray-300">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(specification).map(([category, details]) => (
                                            <tr key={category}>
                                                <td className="py-2 px-4 border border-gray-300">{category}</td>
                                                <td className="py-2 px-4 border border-gray-300">{details}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:mb-20 mb-4">
                            <h4 className="text-xl font-semibold mb-2">Rera Register No</h4>
                            <p className="text-gray-700">{project.reraRegdNo}
                            </p>
                        </div>

                    </div>
                </div>
                {/* Render ContactForm only if isFormVisible is true */}
                {isFormVisible && (
                    <div
                        className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                        onClick={handleCloseForm} // Close on overlay click
                    >
                        <div
                            className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                        >
                            <ContactForm onClose={handleCloseForm} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProjectDetails;
