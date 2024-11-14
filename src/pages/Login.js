import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // List of valid credentials
  const validCredentials = [
    { username: '322103282099', password: '322103282099' },
    { username: '322103282157', password: '322103282099' },
    { username: '322103282211', password: '322103282099' },
    { username: '322103282098', password: '322103282099' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the provided credentials are valid
    const isValid = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValid) {
      login(); // Set the user as authenticated
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://img.freepik.com/free-vector/gradient-connection-background_52683-116380.jpg?semt=ais_hybrid)', // Add the path to your background image
      }}
    >
      <div className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
