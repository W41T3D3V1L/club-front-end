import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FacultyInfo = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios.get('https://club-backend-mauve.vercel.app/api/faculty')
      .then(response => setFaculty(response.data))
      .catch(error => console.error("Error fetching faculty data:", error));
  }, []);

  return (
    <div 
      className="p-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://c0.wallpaperflare.com/path/587/286/358/board-mathematics-math-fourier-85de583778cce3970702fd8ba5f8d9dc.jpg')" }}
    >
      <h1
        className="text-2xl font-bold mb-6 text-white px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block"
      >
        Faculty
      </h1>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faculty.map((member, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-lg shadow-md overflow-hidden"
          >
            {/* Image with circular shape */}
            <img 
              src={member.image} 
              alt={`${member.name}`} 
              className="w-32 h-32 object-cover rounded-full mx-auto mt-4" 
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold mb-2 text-white">{member.name}</h2>
              <p className="text-gray-200">Qualification: {member.qualification}</p>
              <p className="text-gray-200">Designation: {member.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyInfo;
