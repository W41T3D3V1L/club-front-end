import React, { useEffect, useState } from 'react';

const StudentsCertificates = () => {
  const [certificates, setCertificates] = useState([]); // Set initial state to an empty array

  // Fetching data from the API on component mount
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch('https://club-backend-mauve.vercel.app/api/studentsCerti');
        const data = await response.json();

        // Check if the response is an array directly, without checking for 'studentsCerti'
        if (Array.isArray(data)) {
          setCertificates(data); // Set the fetched data to state
        } else {
          console.error('Unexpected response format', data);
        }
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };

    fetchCertificates();
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div 
      className="p-4 min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20211116/pngtree-light-blue-background-for-certificate-and-design-template-image_916130.png')" }}
    >
      {/* Glass blur effect on the header */}
      <h1 className="text-2xl font-bold mb-6 px-4 py-2 rounded-lg backdrop-blur-md bg-white/30 border border-white/40 inline-block">
        Students Certificates
      </h1>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.length === 0 ? (
          <p className="col-span-full text-center">Loading certificates...</p>
        ) : (
          certificates.map((certificate, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{certificate.name}</h2>
                <p className="text-gray-600 mt-2">Roll No: {certificate.rollno}</p>
                <p className="text-gray-600 mt-2">Achievement: {certificate.acheivement}</p>
                <p className="text-gray-600 mt-2">Organization: {certificate.organization}</p>
                <button
                  href={certificate.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 hover:underline transition-colors duration-300"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentsCertificates;
