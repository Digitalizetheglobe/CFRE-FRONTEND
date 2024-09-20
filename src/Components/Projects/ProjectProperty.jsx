// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ProjectCard from './projectCard';
// import BannerImage from './1.png' // Replace with your actual image path

// function ProjectProperty() {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await axios.get('https://cfrecpune.com/projects');
//                 setProjects(response.data);
//                 console.log('Fetched projects:', response.data);
                
//             } catch (error) {
//                 console.error('Error fetching projects:', error);
//             }
//         };

//         fetchProjects();
//     }, []);

//     return (
//         <div className="relative overflow-hidden">
//             {/* Banner Image */}
//             <div className="relative">
//                 <img
//                     src={BannerImage}
//                     alt="Banner"
//                     className="w-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                     <h1 className="text-6xl text-white">Projects Listing</h1>
//                 </div>
//             </div>
//             <div className="relative container mx-auto p-4 ">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {projects.map(project => (
//                         <ProjectCard key={project.id} project={project} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProjectProperty;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard';
import BannerImage from './1.png'; // Replace with your actual image path
import Error from '../Error/Error'; // Import the Error component
import Header from '../Header/header.jsx';

function ProjectProperty() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/projects');
                setProjects(response.data);
                console.log('Fetched projects:', response.data);
                setError(null); // Clear any previous errors
            } catch (error) {
                setError('Error fetching projects. Please try again later.'); // Set error message
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
        <Header />
        <div className="relative overflow-hidden">
            {/* Banner Image */}
            <div className="relative">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-6xl text-white">Projects Listing</h1>
                </div>
            </div>
            <div className="relative container mx-auto p-4">
                {error ? (
                    <Error message={error} /> // Show Error component if there's an error
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.length > 0 ? (
                            projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default ProjectProperty;
