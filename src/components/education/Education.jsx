import React, { useState } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import courseraLogo from "../../assets/coursera_logo.png";
import alxLogo from "../../assets/alx.png";
import ibmLogo from "../../assets/IBM.png";
import ciscoLogo from "../../assets/cisco.jpg";
import googleLogo from "../../assets/google_logo.png";
import authorLogo from "../../assets/author.png";
import udacityLogo from "../../assets/udacity.png"

import fortinetLogo from "../../assets/fortinet.png";

export default function Education({ darkMode }) {
  const [activeTab, setActiveTab] = useState("Education");

  const educationData = [
    {
      side: "right",
      title: "Master of Science in Computer Engineering",
      institution: "Addis Ababa Science and Technology University - Addis Ababa, Ethiopia",
      date: "2021 - 2024 - Addis Ababa, Ethiopia",
      description: "Focus on artificial intelligence, machine learning, Image and Video Processing, Highperformance Computing, Parallel Computing, Distrbuted System, and Cyber Security.",
    },
    {
      side: "left",
      title: "Bachelor of Science in Electrical and Computer Engineering",
      institution: "Addis Ababa Science and Technology University - Addis Ababa, Ethiopia",
      date: "2017 - 2022 ",
      description: "Specialized in Software Engineering, OOP, Database, programming, data structure and algorthim.",
    },
    {
      side: "right",
      title: "Artificial Intelligence Mastery",
      institution: "10 Academy- Addis Ababa, Ethiopia",
      date: "August 2024 - November 2024",
      description: "Advanced training in AI techniques and applications includes AI, Machine Learning, Gen AI, Time-series forcasting, LLM and Data Analysis.",
    },
  ];

  const certificationData = [
    {
      name: "Machine Learning Certified",
      institution: "Stamford Online",
      logo: courseraLogo,
      link: "https://drive.google.com/file/d/1YGIw7KRlEHeDhag50Ict47f_WA2y1UuE/view",
    },
    {
      name: "Certified AI Career Essential",
      institution: "ALX",
      logo: alxLogo,
      link: "https://drive.google.com/file/d/1x98T7hU1hakSxPw5JuqzSpjAZEny4Kb5/view",
    },
    {
      name: "Artificial Intellligence Certification",
      institution: "IBM",
      logo: ibmLogo,
      link: "https://www.credly.com/badges/3ac35dc1-8fd0-4a2f-9fed-0298982a7c30",
    },
    {
      name: "Data Analysis Fundamental",
      institution: "Udacity",
      logo: udacityLogo,
      link: "https://www.udacity.com/certificate/e/c799bb20-4a9b-11ef-abb6-fb4251be614c",
    },

    {
      name: "Android Developer Nanodegree",
      institution: "Udacity",
      logo: udacityLogo,
      link: "https://www.udacity.com/certificate/e/230a58ec-97be-11ef-b7d5-37a75f522899",
    },

    {
      name: "Author Certification",
      institution: "International Journal of Innovative Science and Research Technology (IJISRT)",
      logo: authorLogo,
      link: "https://drive.google.com/file/d/16vnw45yxywnXsJL9etgyI2TA0jsztaTs/view",
    },
    {
      name: "The Fundamentals of Digital Marketing",
      institution: "Google Digital Guarage",
      logo: googleLogo,
      link: "https://drive.google.com/file/d/1ayg8kTdc6SrgVWm0zuYHyIXf4gclFNrE/view",
    },

    {
      name: "Computer Networking",
      institution: "CISCO",
      logo: ciscoLogo,
      link: "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3",
    },

  ];
  return (
    <section
      id="education"
      className={`relative overflow-hidden flex flex-col py-12 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >
      {/* Background Decorative Element */}
      <div
        className={`hidden md:block h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] bg-gradient-to-r rounded-full
          absolute top-20 -left-20 transform -rotate-45 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-blue-600 via-purple-500 to-teal-400 opacity-10'
            : 'from-blue-600 via-purple-900 to-teal-300 opacity-5'
          }`}
      />
      <div className="container mx-auto flex flex-col items-center">
        <h1 className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-16 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'
          }`}>
          {activeTab}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-24">
          <button
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${activeTab === "Education"
              ? darkMode
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                : 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg shadow-orange-600/20'
              : darkMode
                ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 glass'
                : 'bg-white/80 hover:bg-white text-gray-700 glass shadow-md'
              }`}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${activeTab === "Certification"
              ? darkMode
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                : 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg shadow-orange-600/20'
              : darkMode
                ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 glass'
                : 'bg-white/80 hover:bg-white text-gray-700 glass shadow-md'
              }`}
            onClick={() => setActiveTab("Certification")}
          >
            Certification
          </button>
        </div>

        {activeTab === "Education" ? (
          <div className="relative w-full max-w-12xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className={`absolute left-1/2 -translate-x-1/2 w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} h-full`}></div>
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-20`}
                  data-aos="fade-up"
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <div className={`relative rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                      }`}>
                      <div className={`absolute top-8 -translate-y-1/2 ${index % 2 === 0 ? '-right-24' : '-left-24'
                        }`}>
                        <div className={`p-3 rounded-full border-2 ${darkMode
                          ? 'bg-gray-800 border-orange-500'
                          : 'bg-white border-orange-600'
                          }`}>
                          <FaGraduationCap size={32} className={`${darkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                        </div>
                      </div>
                      <h2 className={`font-outfit text-xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                        {edu.title}
                      </h2>
                      <h3 className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {edu.institution}
                      </h3>
                      <p className={`text-xs mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {edu.date}
                      </p>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden relative">
              <div className={`absolute left-8 w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} h-full`}></div>
              {educationData.map((edu, index) => (
                <div key={index} className="flex mb-12 pl-20 relative" data-aos="fade-up">
                  <div className={`absolute left-8 -translate-x-1/2 top-0`}>
                    <div className={`p-3 rounded-full border-4 relative z-10 ${darkMode
                      ? 'bg-gray-800 border-orange-500'
                      : 'bg-white border-orange-600'
                      }`}>
                      <FaGraduationCap size={24} className={`${darkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                    </div>
                  </div>
                  <div className={`rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                    }`}>
                    <h2 className={`font-outfit text-lg font-bold mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                      {edu.title}
                    </h2>
                    <h3 className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.institution}
                    </h3>
                    <p className={`text-xs mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {edu.date}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {certificationData.map((cert, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl glass-card ${darkMode
                  ? 'hover:shadow-orange-500/20'
                  : 'hover:shadow-orange-600/20'
                  }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Top accent */}
                <div className={`w-12 h-1 rounded-full mb-5 bg-gradient-to-r ${darkMode ? 'from-orange-500 to-amber-400' : 'from-orange-600 to-red-500'}`} />
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mb-4">
                  <div className={`p-3 rounded-full transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'}`}>
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </a>
                <div className="text-center">
                  <h3 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {cert.name}
                  </h3>
                  <span className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-medium ${darkMode
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    : 'bg-orange-100 text-orange-600 border border-orange-200'
                    }`}>
                    {cert.institution}
                  </span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 text-xs font-semibold flex items-center gap-1 transition-colors ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'}`}
                >
                  View Certificate
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}