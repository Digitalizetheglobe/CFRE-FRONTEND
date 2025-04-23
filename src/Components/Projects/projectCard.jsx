import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import defaultImage from './new_16850803601652257231.jpg';

const ProjectCard = ({ project }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const shareUrl = `https://cfrecpune.com/cfreprojects/${project.slug}`;
  const title = project.title;
  
  // Get the first image from ProjectImages array or use default
  const displayImage = project?.ProjectImages?.length > 0 
    ? `https://cfrecpune.com/${project.ProjectImages[0]}`
    : defaultImage;

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
          <FaShareAlt className="hover:scale-125" size={18} />
        </a>
      </div>

      <div className="relative">
        <Link to={`/project/${project.slug}`}>
          <div className="w-full h-48 object-cover">
            <img
              src={displayImage}
              alt={project.projectName || "Project Image"}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </Link>
      </div>

      <div className="px-6 pt-10 pb-2">
        <Link to={`/project/${project.slug}`}>
          <div className="font-bold md:text-xl hover:text-[#d84a48] hover:underline">
            {truncateText(project.projectName, 30)}
          </div>
          <p className="text-gray-700 text-base">RERA REGD: {project.reraRegdNo}</p>
          <p className="text-gray-700 text-base">{project.location}</p>
        </Link>
      </div>

      <div className="px-6 pt-10 pb-2 flex justify-between items-center">
        <Link to={`/project/${project.slug}`}>
          <button className="bg-[#d84a48] hover:bg-black-700 text-white font-bold md:py-2 py-1 px-4 md:px-8 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;