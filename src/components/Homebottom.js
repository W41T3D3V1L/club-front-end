import React from 'react'

const Homebottom = () => {
  return (
    <div className="relative z-10 mt-auto text-white px-4 py-8 sm:px-8 lg:px-16 xl:px-32 flex flex-col items-center bg-gray-900"> {/* Add your desired color */}
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
            <p className="text-lg text-white-700">
              AIMERS at GVPCEW aims to educate students about Artificial Intelligence (AI) and Machine Learning (ML). We also raise awareness of future technologies and their potential impact on various industries. Through various activities and events, we encourage students to embrace these advanced technologies and prepare them for the future.
            </p>
          </section>

          {/* Card: Vision */}
          <section className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Vision</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/561/561094.png" alt="Vision Icon" className="w-10 h-10" />
            </div>
            <p className="text-lg text-white-700">
              To evolve into a Centre of learning that imparts quality education in Computer Science and Engineering to produce highly competent professionals.
            </p>
          </section>

          {/* Card: Mission */}
          <section className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Mission</h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2830/2830377.png" alt="Mission Icon" className="w-10 h-10" />
            </div>
            <p className="text-lg text-white-700">
              Our mission is to develop industry-ready graduates equipped with the skills needed for success in computer science and beyond.
            </p>
          </section>
          
        </div>
      </div>
  )
}

export default Homebottom