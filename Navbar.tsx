import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, FileText, Briefcase, LogOut } from 'lucide-react';

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };
  
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">P. Lakshmi Prasanna</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink 
              to="/welcome" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
                }`
              }
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </NavLink>
            
            <NavLink 
              to="/resume" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
                }`
              }
            >
              <FileText className="h-4 w-4 mr-1" />
              Resume
            </NavLink>
            
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
                }`
              }
            >
              <Briefcase className="h-4 w-4 mr-1" />
              Projects
            </NavLink>
            
            <NavLink 
              to="/exit" 
              className={({ isActive }) => 
                `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-blue-700' : 'hover:bg-blue-700'
                }`
              }
            >
              <LogOut className="h-4 w-4 mr-1" />
              Exit
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;