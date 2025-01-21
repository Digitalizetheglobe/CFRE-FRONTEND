import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from './new_16850803601652257231.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
};
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Optional: Remove or add based on your needs
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
        <div className="w-full h-48 object-cover">
            {project?.ProjectImages?.length > 0 ? (
                <Slider {...settings}>
                    {project.ProjectImages.map((image, index) => (
                        <div key={index}>
                            <img
                                src={`https://cfrecpune.com/${image}`}
                                alt={`Project ${index + 1}`}
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <img
                    src={Image}
                    alt="Project Image"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                />
            )}
        </div>
    </Link>
</div>


            <div className="px-6 pt-10 pb-2">
                {/* Link to Project Details using slug */}
                <Link to={`/project/${project.slug}`}>
                    <div className="font-bold md:text-xl hover:text-[#d84a48] hover:underline">
                        {truncateText(project.projectName, 30)} {/* Adjust the maxLength as needed */}
                    </div>
                    <p className="text-gray-700 text-base">RERA REGD :{project.reraRegdNo}</p>
                    <p className="text-gray-700 text-base">{project.location}</p>
                </Link>
            </div>

            <div className="px-6 pt-10 pb-2 flex justify-between items-center">
                {/* Change the Link to use the slug */}
                <Link to={`/project/${project.slug}`}>
                    <button className="bg-[#d84a48] hover:bg-black-700 text-white font-bold md:py-2 py-1 px-4 md:px-8 rounded ">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
