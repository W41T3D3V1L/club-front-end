import React from 'react';
import SocialMediaNavbar from './SocialMediaNavbar';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="bg.mp4" type="video/mp4" />
      </video>
      
      {/* Social Media Navbar */}
      <SocialMediaNavbar />

      {/* Main Content with Glass Blur */}
      <div className="relative z-10 text-white px-4 py-16 sm:px-8 lg:px-16 xl:px-32 flex flex-col items-center">
        {/* Glass blur effect for the welcome section */}
        <div className="bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6 mb-8 w-full max-w-5xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to AIMERS at GVPCEW
          </h1>
          <p className="text-lg mb-6">
            We educate about AI and ML, raising awareness about future technology across Vizag.
          </p>
        </div>

        {/* Grid Layout for Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          
          {/* Card: About the Club */}
          <section className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">About the Club</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/7674/7674898.png" alt="About Icon" className="w-10 h-10" />
            </div>
            <p className="text-lg text-gray-700">
              AIMERS at GVPCEW aims to educate students about Artificial Intelligence (AI) and Machine Learning (ML). We also raise awareness of future technologies and their potential impact on various industries. Through various activities and events, we encourage students to embrace these advanced technologies and prepare them for the future.
            </p>
          </section>

          {/* Card: Vision */}
          <section className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Vision</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/561/561094.png" alt="Vision Icon" className="w-10 h-10" />
            </div>
            <p className="text-lg text-gray-700">
              To evolve into a Centre of learning that imparts quality education in Computer Science and Engineering to produce highly competent professionals.
            </p>
          </section>

          {/* Card: Mission */}
          <section className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
              <img src="https://cdn-icons-png.freepik.com/512/4898/4898740.png" alt="Mission Icon" className="w-10 h-10" />
            </div>
            <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
              <li>Impart computing and technical skills with an emphasis on professional competency and human values.</li>
              <li>Enrich the learning aptitude to face the dynamic environment of the Computer Industry.</li>
              <li>Enhance the analytical and problem-solving capability through contests and technical seminars.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
