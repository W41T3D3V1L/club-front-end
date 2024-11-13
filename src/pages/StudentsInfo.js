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
  const r = parseInt(bgColor.substr(1, 2), 16);
  const g = parseInt(bgColor.substr(3, 2), 16);
  const b = parseInt(bgColor.substr(5, 2), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? 'black' : 'white';
};

const StudentsInfo = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('https://club-backend-mauve.vercel.app/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error("Error fetching students data:", error));
  }, []);

  return (
    <div className="p-4 min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('https://c0.wallpaperflare.com/path/587/286/358/board-mathematics-math-fourier-85de583778cce3970702fd8ba5f8d9dc.jpg')" }}>
      <h1 className="text-3xl font-extrabold mb-8 text-white px-6 py-3 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block shadow-lg">
        Students Information
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student, index) => {
          // Generate random background color for each student
          const randomColor = getRandomColor();
          const textColor = getTextColor(randomColor); // Determine appropriate text color based on the background

          return (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full"
              style={{ minHeight: '350px' }} // Ensure each card has a consistent height
            >
              {/* Image */}
              <img
                src={student.image}
                alt={`${student.name}`}
                className="w-full h-40 object-cover"
              />
              <div 
                className="p-6 flex-grow text-center"
                style={{ backgroundColor: randomColor }} // Apply random background color
              >
                <h2 className={`text-xl font-semibold ${textColor} mb-2`}>{student.name}</h2>
                <p className={`text-sm ${textColor} mt-2`}>Roll No: {student.rollno}</p>
                <p className={`text-sm ${textColor} mt-2`}>Class: {student.class}</p>
                <p className={`text-sm ${textColor} mt-2`}>Position: {student.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsInfo;
