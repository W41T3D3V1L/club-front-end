import React, { useEffect, useState } from 'react';

const StudentsProjects = () => {
  const [projects, setProjects] = useState([]); // Set initial state to an empty array

  // Fetching data from the API on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://club-backend-mauve.vercel.app/api/studentsProj');
        const data = await response.json();
        
        // Check if the response is an array directly, without checking for 'studentsProj'
        if (Array.isArray(data)) {
          setProjects(data); // Set the fetched data to state
        } else {
          console.error('Unexpected response format', data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div className="relative p-4 min-h-screen">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://static.vecteezy.com/system/resources/previews/044/305/944/mp4/technology-background-stock-footage-artificial-intelligence-intro-free-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10">
        {/* Glass blur effect on the header */}
        <h1 className="text-2xl font-bold mb-6 px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block text-white">
  Students Projects
</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p className="col-span-full text-center">Loading projects...</p>
          ) : (
            projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src= {project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                  <p className="text-gray-600 mt-2">Class: {project.class}</p>
                  <p className="text-gray-600 mt-1">Project: {project.project}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsProjects;
