// src/components/SocialMediaNavbar.js
import React from 'react';

const SocialMediaNavbar = () => {
  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-l-lg flex flex-col items-center space-y-4">
      <a href="https://www.instagram.com/aimers_gvpcew?igsh=c2x2bDRob3Z6cG9u" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="Instagram" className="h-6" />
      </a>
      <a href="https://www.linkedin.com/redir/redirect?url=http%3A%2F%2Faimers%2Eco%2Ekr&urlhash=u0QB&trk=about_website" target="_blank" rel="noopener noreferrer">
        <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="LinkedIn" className="h-6" />
      </a>
      <a href="https://www.youtube.com/@kpnaiduacademy" target="_blank" rel="noopener noreferrer">
        <img src="https://static.vecteezy.com/system/resources/previews/023/986/480/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="YouTube" className="h-6" />
      </a>
    </nav>
  );
};

export default SocialMediaNavbar;
