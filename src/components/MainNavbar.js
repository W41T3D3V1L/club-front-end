import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = (menuName) => {
    setActiveMenu((prevMenu) => (prevMenu === menuName ? null : menuName));
  };

  const toggleAchievements = () => {
    setIsAchievementsOpen((prev) => !prev);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveMenu(null);
        setIsAchievementsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-indigo-600 text-white p-4 shadow-lg relative z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="logo.jpg" alt="Logo" className="h-12 w-12 object-cover rounded-full" />
          <span className="text-xl font-semibold">AIMERS CSE Department</span>
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-indigo-200 transition duration-200">Home</Link>
          </li>

          {/* Faculty Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('faculty')}
              className="hover:text-indigo-200 transition duration-200"
            >
              Faculty
            </button>
            {activeMenu === 'faculty' && (
              <ul className="absolute left-0 mt-2 space-y-2 p-2 bg-white text-indigo-600 rounded-md shadow-lg w-40 z-50">
                <li>
                  <Link to="/faculty/info" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Info</Link>
                </li>
                <li>
                  <Link to="/faculty/research" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Research & Papers</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Students Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('students')}
              className="hover:text-indigo-200 transition duration-200"
            >
              Students
            </button>
            {activeMenu === 'students' && (
              <ul className="absolute left-0 mt-2 space-y-2 p-2 bg-white text-indigo-600 rounded-md shadow-lg w-40 z-50">
                <li>
                  <Link to="/students/info" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Info</Link>
                </li>
                <li className="relative">
                  <button
                    onClick={toggleAchievements}
                    className="block w-full text-left px-4 py-2 hover:bg-indigo-100 rounded-md"
                  >
                    Achievements
                  </button>
                  {isAchievementsOpen && (
                    <ul className="absolute left-full top-0 mt-2 space-y-2 p-2 bg-white text-indigo-600 rounded-md shadow-lg w-40 z-50">
                      <li>
                        <Link to="/students/hackathons" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Hackathons</Link>
                      </li>
                      <li>
                        <Link to="/students/projects" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Projects</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/students/certificates" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Certificates</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Placements Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleMenu('placements')}
              className="hover:text-indigo-200 transition duration-200"
            >
              Placements
            </button>
            {activeMenu === 'placements' && (
              <ul className="absolute left-0 mt-2 space-y-2 p-2 bg-white text-indigo-600 rounded-md shadow-lg w-40 z-50">
                <li>
                  <Link to="/placements/analysis" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Placement Analysis</Link>
                </li>
                <li>
                  <Link to="/placements/higher-education" className="block px-4 py-2 hover:bg-indigo-100 rounded-md">Higher Education</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/gallery" className="hover:text-indigo-200 transition duration-200">Gallery</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-indigo-200 transition duration-200">Events</Link>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
