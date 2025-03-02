import React from 'react';
import { BookOpen, Code, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-3xl font-bold">P. Lakshmi Prasanna</h1>
          <p className="text-xl mt-2">Computer Science Engineering Student</p>
        </div>
        
        <div className="p-6">
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Objective</h2>
            </div>
            <div className="pl-8 border-l-2 border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                I am a dedicated and enthusiastic Computer Science Engineering undergraduate seeking an
                internship opportunity to apply my skills in software development, data analysis, and artificial
                intelligence/machine learning (AIML). I aspire to gain hands-on experience and contribute to
                innovative projects while fostering continuous learning and professional growth.
              </p>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Education</h2>
            </div>
            <div className="pl-8 border-l-2 border-blue-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Computer Science And Engineering</h3>
                <p className="text-gray-600">GITAM Hyderabad</p>
                <p className="text-gray-600">Expected Graduation: May 2027</p>
                <p className="text-gray-600">CGPA: 7.84</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Intermediate Education</h3>
                <p className="text-gray-600">Narayana Jr. College</p>
                <p className="text-gray-600">Telangana State Board of Intermediate Education</p>
                <p className="text-gray-600">April 2023</p>
                <p className="text-gray-600">Grade: 87.1%</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Secondary School</h3>
                <p className="text-gray-600">Life Line High School</p>
                <p className="text-gray-600">Telangana Board of Secondary Education</p>
                <p className="text-gray-600">March 2021</p>
                <p className="text-gray-600">GPA: 10</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Technical Skills</h2>
            </div>
            <div className="pl-8 border-l-2 border-blue-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Programming Languages</h3>
                <p className="text-gray-700">C, Python, Java (learning)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Tools/Technologies</h3>
                <p className="text-gray-700">GitHub, VS code, MS Office Suite, Data Analysis, MySQL</p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Soft Skills</h2>
            </div>
            <div className="pl-8 border-l-2 border-blue-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Problem-Solving</h3>
                <p className="text-gray-700">
                  Developed an innovative smart gas and smoke detector by addressing challenges in sensor
                  calibration and ensuring accurate detection. Successfully implemented a feature to send SMS alerts
                  during emergencies, enhancing safety and usability.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Teamwork</h3>
                <p className="text-gray-700">
                  Worked closely with a team to design a multipurpose safety device for homes. Actively participated in
                  brainstorming, shared technical inputs, and contributed to the smooth integration of components,
                  leading to a functional and efficient prototype.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Extracurricular Activities</h2>
            </div>
            <div className="pl-8 border-l-2 border-blue-200">
              <ul className="list-disc list-inside text-gray-700">
                <li>Participated in a hackathon organised by IIT Madras.</li>
                <li>First place in the Camlin School Drawing Competition.</li>
                <li>Member of the Kho-Kho team in school.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;