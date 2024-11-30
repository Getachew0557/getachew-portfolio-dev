import React, { useState } from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

export default function Education() {
  const [activeTab, setActiveTab] = useState('Education');

  const educationData = [
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      date: '2018 - 2022',
      description: 'Specialized in software engineering and data science.',
    },
    {
      title: 'High School Diploma',
      institution: 'ABC High School',
      date: '2014 - 2018',
      description: 'Focused on mathematics, physics, and computer studies.',
    },
    {
      title: 'Professional Software Development Program',
      institution: 'Tech Institute',
      date: '2023',
      description: 'Advanced training in web development and cloud technologies.',
    },
  ];

  const certificationData = [
    
    {
      name: 'AWS Certified Solutions Architect',
      logo: 'aws-logo.png', // Replace with the actual path to your logo
      link: 'https://www.aws.amazon.com/certification/',
    },
    {
      name: 'Certified Kubernetes Administrator',
      logo: 'kubernetes-logo.png', // Replace with the actual path to your logo
      link: 'https://www.cncf.io/certification/cka/',
    },
    {
      name: 'React Developer Certification',
      logo: 'react-logo.png', // Replace with the actual path to your logo
      link: 'https://reactjs.org/',
    },
  ];

  return (
    <section id="education" className="relative overflow-hidden flex flex-col text-white body-font bg-gray-1200 py-24 px-6 sm:px-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12 py-12 text-center">
          {activeTab}
        </h1>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-6 mb-24">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === 'Education'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
            onClick={() => setActiveTab('Education')}
          >
            Education
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === 'Certification'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            }`}
            onClick={() => setActiveTab('Certification')}
          >
            Certification
          </button>
        </div>

        {/* Content Section */}
        {activeTab === 'Education' ? (
          <div className="flex flex-col space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="flex items-start space-x-6"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <FaGraduationCap size={40} className="text-orange-500" />
                <div>
                  <h2 className="text-xl font-bold text-orange-400">{edu.title}</h2>
                  <h3 className="text-lg text-gray-300">{edu.institution}</h3>
                  <p className="text-sm text-gray-400">{edu.date}</p>
                  <p className="mt-2 text-gray-200">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {certificationData.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-20 h-20 object-contain mb-4"
                  />
                </a>
                <h3 className="text-lg font-medium text-gray-300 text-center">{cert.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
