import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

interface ExitProps {
  onLogout: () => void;
}

const Exit: React.FC<ExitProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Automatically redirect to login after 5 seconds
    const timer = setTimeout(() => {
      onLogout();
      navigate('/login');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [navigate, onLogout]);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <LogOut className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Thank You for Visiting!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for exploring P. Lakshmi Prasanna's portfolio. I hope you enjoyed learning about my skills, projects, and experiences.
        </p>
        
        <p className="text-lg text-gray-500 mb-8">
          You will be automatically redirected to the login page in 5 seconds...
        </p>
        
        <button
          onClick={handleLogoutClick}
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default Exit;