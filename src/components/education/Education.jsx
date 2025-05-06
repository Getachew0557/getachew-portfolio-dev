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
      institution:"CISCO",
      logo: ciscoLogo, 
      link: "https://www.credly.com/badges/70802195-a2dd-42f8-a156-8236609378d3",
    },

  ];
 return (
    <section
      id="education"
      className={`relative overflow-hidden flex flex-col py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center relative inline-block ${
          darkMode ? 'text-orange-400' : 'text-orange-600'
        }`}>
          {activeTab}
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-24 ">
          <button
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-colors duration-300 ${
              activeTab === "Education"
                ? darkMode 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-orange-600 text-white'
                : darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 rounded-full font-semibold text-sm md:text-base transition-colors duration-300 ${
              activeTab === "Certification"
                ? darkMode 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-orange-600 text-white'
                : darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
            onClick={() => setActiveTab("Certification")}
          >
            Certification
          </button>
        </div>

        {activeTab === "Education" ? (
          <div className="relative w-full max-w-12xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className={`absolute left-1/2 -translate-x-1/2 w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} h-full`}></div>
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-20`}
                  data-aos="fade-up"
                >
                  <div className={`w-1/2 p-6 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <div className={`relative rounded-xl p-8 shadow-xl transition-all hover:shadow-2xl ${
                      darkMode ? 'bg-gray-800' : 'bg-white'
                    }`}>
                      <div className={`absolute top-8 -translate-y-1/2 ${
                        index % 2 === 0 ? '-right-24' : '-left-24'
                      }`}>
                        <div className={`p-3 rounded-full border-2 ${
                          darkMode 
                            ? 'bg-gray-800 border-orange-500' 
                            : 'bg-white border-orange-600'
                        }`}>
                          <FaGraduationCap size={32} className={`${darkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                        </div>
                      </div>
                      <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
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
                <div key={index} className="flex mb-12 pl-16" data-aos="fade-up">
                  <div className={`absolute left-8 -translate-x-1/2 ${index === 0 ? 'top-4' : 'top-1/4'}`}>
                    <div className={`p-3 rounded-full border-4 ${
                      darkMode 
                        ? 'bg-gray-800 border-orange-500' 
                        : 'bg-white border-orange-600'
                    }`}>
                      <FaGraduationCap size={32} className={`${darkMode ? 'text-orange-500' : 'text-orange-600'}`} />
                    </div>
                    {index !== educationData.length - 1 && (
                      <div className={`w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} h-32 mt-4 ml-3`}></div>
                    )}
                  </div>
                  <div className={`rounded-xl p-6 shadow-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <h2 className={`text-lg font-bold mb-3 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
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
                className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-gray-800 border border-orange-500 hover:shadow-[0_0_15px_rgba(255,165,0,0.3)]' 
                    : 'bg-white border border-orange-400 shadow-lg hover:shadow-xl'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mb-4">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="w-24 h-24 object-contain hover:scale-105 transition-transform"
                  />
                </a>
                <div className="text-center">
                  <h3 className={`text-base font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {cert.name}
                  </h3>
                  <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}