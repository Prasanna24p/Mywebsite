import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Exit from './components/Exit';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/welcome" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Welcome />
            </ProtectedRoute>
          } />
          <Route path="/resume" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Resume />
            </ProtectedRoute>
          } />
          <Route path="/projects" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Projects />
            </ProtectedRoute>
          } />
          <Route path="/exit" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Exit onLogout={handleLogout} />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;