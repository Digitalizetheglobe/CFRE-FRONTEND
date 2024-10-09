import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  // Fetch project data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:8001/projects');
        setProjects(response.data);
      } catch (error) {
        setError('Failed to fetch projects');
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Project List</h1>
      {error && <p>{error}</p>}
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
              <h2>{project.projectName}</h2>
              <p><strong>Builder Name:</strong> {project.builderName}</p>
              <p><strong>Project Details:</strong> {project.projectDetails}</p>
              
              {/* Show images if they exist */}
              {project.multipleProjectImages && project.multipleProjectImages.length > 0 ? (
                <div>
                  <h3>Images:</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {project.multipleProjectImages.map((image, index) => (
                      <div key={index} style={{ margin: '10px' }}>
                        <img
                          src={`http://localhost:8001/${image}`} // Use the full URL returned by the API
                          alt={`Project ${project.projectName} Image ${index + 1}`}
                          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No images uploaded for this project.</p>
              )}
            </div>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
