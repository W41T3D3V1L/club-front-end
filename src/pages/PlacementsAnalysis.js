import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlacementsAnalysis = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    axios.get('https://club-backend-mauve.vercel.app/api/placements')
      .then(response => setPlacements(response.data))
      .catch(error => console.error("Error fetching placements data:", error));
  }, []);

  return (
    <div 
      className="p-4 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/3d/08/e0/3d08e03cb40252526fee2036a67f07f1.gif')" }}
    >
      <h1
        className="text-2xl font-bold mb-6 text-white px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block"
      >
        Placements Analysis
      </h1>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {placements.map((placement, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/30 border border-white/40 rounded-lg shadow-md overflow-hidden p-4"
          >
            <img 
              src={placement.companyLogo} 
              alt={`${placement.companyName} logo`} 
              className="w-full h-40 object-cover rounded-t-lg backdrop-blur-sm bg-white/20"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{placement.companyName}</h2>
              <p className="text-gray-200">Package: {placement.package}</p>
              <p className="text-gray-200">Total Hired: {placement.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementsAnalysis;
