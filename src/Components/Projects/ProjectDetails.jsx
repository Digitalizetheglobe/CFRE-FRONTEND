import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";
import { BiMobile } from 'react-icons/bi';


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' }); // State to manage form data
    const [project, setProject] = useState(null); // State to manage project data

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`http://192.168.0.105:8000/projects/${id}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };

        fetchProject();
    }, [id]);

    if (!project) return <p>Project not found</p>;

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.0.105:8000/inquire', formData);
            console.log('Form submitted successfully', response.data);
            alert('Your inquiry has been submitted successfully!');
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

    // Handle WhatsApp button click
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
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
                            <div className="relative w-full h-96">
                                <img
                                    className="w-full h-full object-cover"
                                    src={project.imageUrl}
                                    alt="Project"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                <button
                                    className="absolute bottom-4 left-2/4 transform -translate-x-1/2 bg-transparent text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                                    onClick={() => navigate(`/project-images/${project.id}`)}
                                >
                                    View All Images
                                </button>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="flex-1 w-full lg:w-2/5 mt-11">
                            <div className="bg-white border border-gray-500 shadow-md shadow-slate-700 rounded-lg overflow-hidden p-4">
                                <h2 className="text-3xl font-bold mb-4">{project.projectName}</h2>
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-2xl font-bold">₹{project.price}</h3>
                                    <div className="flex items-center mt-1">
                                        <MdOutlinePinDrop className="text-gray-500 mr-1" />
                                        <p className="text-gray-500">{project.location}, {project.city}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <div className="p-2 border border-gray-500 rounded-md text-right">
                                        <p className="text-gray-500 text-xs">Avg. Rental Yield:</p>
                                        <p className="text-lg font-semibold">{project.yield}12%</p>
                                    </div>
                                    <div className="p-2 border border-gray-500 rounded-md text-right">
                                        <p className="text-gray-500 text-xs">Monthly Rental:</p>
                                        <p className="text-lg font-semibold">₹{project.rental}3.5 lacs</p>
                                    </div>
                                </div>

                                <div className="flex space-x-2 mb-4">
                                    <button
                                        className="bg-blue-600 text-white flex-1 py-2 px-4 rounded-md text-lg hover:bg-blue-800 transition-colors duration-300"
                                        onClick={() => setIsModalOpen(true)}
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
                    <div className="mb-20">
                        <h4 className="text-xl font-semibold mb-2">About Project</h4>
                        <p className="text-gray-700">
        This commercial project is designed to meet the dynamic needs of modern businesses. Located in a prime business district, it offers excellent visibility and accessibility.
    </p>
                    </div>

                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Project Insights</h4>
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

                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Details</h4>
                        </div>
                            <p className="text-lg font-medium">{project.projectDetails}</p>
                
                    </div>

                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Description</h4>
                        </div>
                        <p className="text-gray-700">{project.description}</p>
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
