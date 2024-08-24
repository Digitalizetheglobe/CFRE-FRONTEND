import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};

const ProjectCard = ({ project }) => {
    const shareUrl = `https://yourwebsite.com/project/${project.id}`;
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
                <img className="w-full h-48 object-cover" src={project.imageUrl} alt="Project" />
                <button className="absolute bottom-0 left-0 text-white font-normal py-2 px-4 rounded hover:scale-[1.08]">
                    More Images
                </button>
            </div>

            <div className="px-6 py-4">
                {/* Link to Project Details */}
                <Link to={`/project/${project.id}`}>
                    <div className="font-bold text-xl hover:underline">
                        {truncateText(project.projectName, 30)} {/* Adjust the maxLength as needed */}
                    </div>
                </Link>
                <p className="text-gray-700 text-base">RERA REGD :{project.reraRegdNo}</p>
                <p className="text-gray-700 text-base">{project.location}</p>
            </div>

            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                <Link to={`/project/${project.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded w-4/5">
                        See Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
