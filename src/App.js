import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Login from './pages/Login';
import Home from './components/Home';
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
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <RoutesWrapper />
      </Router>
    </AuthProvider>
  );
};

// A separate wrapper for routes to handle location logic and navbar conditionally
const RoutesWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {/* Render the navbar only if not on the login page */}
      {!isLoginPage && <MainNavbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/faculty/info"
          element={
            <PrivateRoute>
              <FacultyInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="/faculty/research"
          element={
            <PrivateRoute>
              <FacultyResearch />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/info"
          element={
            <PrivateRoute>
              <StudentsInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/hackathons"
          element={
            <PrivateRoute>
              <StudentsHackathons />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/projects"
          element={
            <PrivateRoute>
              <StudentsProjects />
            </PrivateRoute>
          }
        />
        <Route
          path="/students/certificates"
          element={
            <PrivateRoute>
              <StudentsCertificates />
            </PrivateRoute>
          }
        />
        <Route
          path="/placements/analysis"
          element={
            <PrivateRoute>
              <PlacementsAnalysis />
            </PrivateRoute>
          }
        />
        <Route
          path="/placements/higher-education"
          element={
            <PrivateRoute>
              <HigherEducation />
            </PrivateRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <PrivateRoute>
              <Gallery />
            </PrivateRoute>
          }
        />
        <Route
          path="/events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
