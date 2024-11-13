import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import FacultyInfo from './pages/FacultyInfo';
import FacultyResearch from './pages/FacultyResearch';
import StudentsInfo from './pages/StudentsInfo';
import StudentsHackathons from './pages/StudentsHackathons';
import StudentsProjects from './pages/StudentsProjects';
import StudentsCertificates from './pages/StudentsCertificates';
import PlacementsAnalysis from './pages/PlacementsAnalysis';
import HigherEducation from './pages/HigherEducation';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <MainNavbar />
      <div>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/faculty/info" element={<FacultyInfo />} />
          <Route path="/faculty/research" element={<FacultyResearch />} />
          <Route path="/students/info" element={<StudentsInfo />} />
          <Route path="/students/hackathons" element={<StudentsHackathons />} />
          <Route path="/students/projects" element={<StudentsProjects />} />
          <Route path="/students/certificates" element={<StudentsCertificates />} />
          <Route path="/placements/analysis" element={<PlacementsAnalysis />} />
          <Route path="/placements/higher-education" element={<HigherEducation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
