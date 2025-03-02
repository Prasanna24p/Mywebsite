import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, User } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setUserName(user.name);
    }
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <GraduationCap className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome to P. Lakshmi Prasanna's Portfolio
        </h1>
        
        <div className="flex items-center justify-center mb-6">
          <User className="h-5 w-5 text-blue-600 mr-2" />
          <p className="text-lg text-gray-600">
            Hello, <span className="font-semibold">{userName}</span>!
          </p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a dedicated and enthusiastic Computer Science Engineering undergraduate seeking an
            internship opportunity to apply my skills in software development, data analysis, and artificial
            intelligence/machine learning (AIML). I aspire to gain hands-on experience and contribute to
            innovative projects while fostering continuous learning and professional growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
            <p className="text-gray-700">
              B.Tech in CSE, GITAM Hyderabad<br />
              2nd Year Student<br />
              CGPA: 7.84
            </p>
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Technical Skills</h3>
            <p className="text-gray-700">
              Programming: C, Python, Java (learning)<br />
              Tools: GitHub, VS Code, MS Office, MySQL
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate('/resume')}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            View Resume
          </button>
          
          <button
            onClick={() => navigate('/projects')}
            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Explore Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;