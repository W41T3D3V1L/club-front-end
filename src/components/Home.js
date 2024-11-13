import React from 'react';
import SocialMediaNavbar from './SocialMediaNavbar';
import Homebottom from './Homebottom';

const Home = () => {
  return (
    <div>


    
    <div className="relative w-full h-screen overflow-hidden flex flex-col">
      {/* Background video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="bg.mp4" type="video/mp4" />
      </video>
      
      {/* Social Media Navbar */}
      <SocialMediaNavbar />

      {/* Main Content with Glass Blur, positioned at the bottom */}
      
    </div>
    <Homebottom />
    </div>
  );
};

export default Home;
