import React, { useEffect, useState } from 'react';

const StudentsHackathons = () => {
  const [hackathons, setHackathons] = useState([]); // Set initial state to an empty array

  // Fetching data from the API on component mount
  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const response = await fetch('https://club-backend-mauve.vercel.app/api/studentsHackthon');
        const data = await response.json();
        
        // Check if the response is an array directly, without checking for `studentsHackthon`
        if (Array.isArray(data)) {
          setHackathons(data); // Set the fetched data to state
        } else {
          console.error('Unexpected response format', data);
        }
      } catch (error) {
        console.error('Error fetching hackathons:', error);
      }
    };

    fetchHackathons();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div 
      className="p-4 min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://waccinge.netlify.app/static/media/bg.e88e42bb.gif')" }}
    >
      {/* Glass blur effect on the header */}
      <h1 className="text-2xl font-bold mb-6 px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block text-white">
      Students Hackathons
</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.length === 0 ? (
          <p className="col-span-full text-center">Loading hackathons...</p>
        ) : (
          hackathons.map((hackathon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src= {hackathon.image}
                alt={hackathon.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{hackathon.name}</h2>
                <p className="text-gray-600 mt-2">Date: {hackathon.Date}</p>
                <p className="text-gray-600 mt-1">Enrolled: {hackathon.enrolled}</p>
                <p className="text-gray-600 mt-1">Organization: {hackathon.Organization}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentsHackathons;
