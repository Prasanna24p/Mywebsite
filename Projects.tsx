import React from 'react';
import { Puzzle, Shield } from 'lucide-react';

const Projects = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Puzzle Game Project */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 h-48 flex items-center justify-center">
            <Puzzle className="h-20 w-20 text-white" />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Puzzle Game</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-gray-600">
                Developed a fun and interactive puzzle game where players solve puzzles by
                arranging tiles to form a complete image or pattern. The game includes various difficulty levels, a
                timer, and a scoring system to track the player's performance.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Pygame</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Multiple difficulty levels</li>
                <li>Timer and scoring system</li>
                <li>Interactive user interface</li>
                <li>Progress tracking</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Outcome</h3>
              <p className="text-gray-600">
                Created an engaging game that enhances problem-solving skills and provides users a challenging and entertaining experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Multipurpose Safety Knob Project */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 h-48 flex items-center justify-center">
            <Shield className="h-20 w-20 text-white" />
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Multipurpose Safety Knob</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Description</h3>
              <p className="text-gray-600">
                Designed and implemented a safety knob for homes, which senses damage to household items
                and triggers safety mechanisms. The device provides real-time alerts, helping ensure home
                safety by preventing accidents caused by unnoticed damage.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Arduino</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Sensors</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">3D Modeling Software</span>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Real-time damage detection</li>
                <li>Instant alert system</li>
                <li>Safety mechanism triggering</li>
                <li>Low power consumption</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Outcome</h3>
              <p className="text-gray-600">
                Collaborated with a team of 4 students to deliver the project on time. The device successfully detects potential hazards and provides timely alerts to prevent accidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;