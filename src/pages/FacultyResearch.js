import React, { useEffect, useState } from 'react'; 
import axios from 'axios';  

// Helper function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Helper function to check if the background color is dark or light
const getTextColor = (bgColor) => {
  // Extract the RGB values from hex color
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);
  
  // Calculate luminance using the formula
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  // Return light or dark text color based on luminance
  return luminance > 128 ? 'black' : 'white';
};

const FacultyResearch = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    axios.get('https://club-backend-mauve.vercel.app/api/facultyresearch')
      .then(response => setFaculty(response.data))
      .catch(error => console.error("Error fetching faculty data:", error));
  }, []);

  return (
    <div className="p-4 min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('https://img.freepik.com/free-photo/ai-cloud-with-robot-face_23-2149739758.jpg?t=st=1731452553~exp=1731456153~hmac=c0699e40594c3bdaba12cc94e34b4429cfe0c6ad0335ae965dc95da8111b389d&w=826')" }}>
      <h1 className="text-3xl font-extrabold mb-8 text-white px-6 py-3 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block shadow-lg">
        Faculty Research
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {faculty.map((member, index) => {
          // Generate random background color for each member
          const randomColor = getRandomColor();
          const textColor = getTextColor(randomColor); // Determine appropriate text color based on the background

          return (
            <div 
              key={index} 
              className="rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out h-full flex flex-col"
              style={{ minHeight: '350px' }} // Set a fixed minimum height for all cards
            >
              {/* Circular Image */}
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
              />
              <div 
                className="p-6 text-center flex-grow"
                style={{ backgroundColor: randomColor }} // Apply random background color
              >
                <h2 className={`text-xl font-semibold ${textColor} mb-2`}>{member.name}</h2>
                <p className={`text-sm ${textColor} mt-2`}>Qualification: {member.qualification}</p>
                <p className={`text-sm ${textColor} mt-2`}>Duration: {member.Duration}</p>
                <p className={`text-sm ${textColor} mt-2`}>Organization: {member.Organization}</p>
                <p className={`text-sm ${textColor} mt-2`}>Days: {member.Days}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacultyResearch;
