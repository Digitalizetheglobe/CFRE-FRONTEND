import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from './new_16850803601652257231.jpg';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const ProjectCard = ({ project }) => {
    const shareUrl = `https://cfrecpune.com/cfreprojects/${project.slug}`;
    const title = project.title;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className='hover:scale-125' size={18} />
                </a>
            </div>

            <div className="relative">
                {/* Change the Link to use the slug */}
                <Link to={`/project/${project.slug}`}>
                    <img className="w-full md:h-48 h-36 object-cover" src={Image} alt="Project" />
                </Link>
            </div>

            <div className="px-6 py-4">
                {/* Link to Project Details using slug */}
                <Link to={`/project/${project.slug}`}>
                    <div className="font-bold md:text-xl hover:text-[#d84a48] hover:underline">
                        {truncateText(project.projectName, 30)} {/* Adjust the maxLength as needed */}
                    </div>
                    <p className="text-gray-700 text-base">RERA REGD :{project.reraRegdNo}</p>
                    <p className="text-gray-700 text-base">{project.location}</p>
                </Link>
            </div>

            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                {/* Change the Link to use the slug */}
                <Link to={`/project/${project.slug}`}>
                    <button className="bg-[#d84a48] hover:bg-black-700 text-white font-bold md:py-2 py-1 px-4 md:px-8 rounded ">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
