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

export default function Education() {
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
      description: "Advanced training in AI techniques and applications includes AI, Machine Learning, Gen AI, Time-series forcasting, LLM.",
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
      className="relative overflow-hidden flex flex-col text-white body-font bg-gray-1200 py-24 px-6 sm:px-12"
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12 py-12 text-center">
          {activeTab}
        </h1>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-6 mb-24">
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === "Education"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setActiveTab("Education")}
          >
            Education
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === "Certification"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
            onClick={() => setActiveTab("Certification")}
          >
            Certification
          </button>
        </div>

        {/* Content Section */}
        {activeTab === "Education" ? (
          <div className="relative w-full flex flex-col items-center">
            {/* Vertical Line */}
            <div className="absolute w-1 bg-gray-700 h-full left-1/2 transform -translate-x-1/2"></div>

            {/* Education Items */}
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 my-12 w-full ${
                  edu.side === "left" ? "justify-end" : "justify-start"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Left Side */}
                {edu.side === "left" && (
                  <div className="w-1/2 text-left pr-6 px-24">
                    <h2 className="text-xl font-bold text-orange-400">{edu.title}</h2>
                    <h3 className="text-lg text-gray-300">{edu.institution}</h3>
                    <p className="text-sm text-gray-400">{edu.date}</p>
                    <p className="mt-2 text-gray-200">{edu.description}</p>
                  </div>
                )}

                {/* Icon on the Line (Left Side Graduation Cap) */}
                {edu.side === "left" && (
                  <div
                    className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2"
                    style={{
                      top: "0%", // Positioning from top for overlap
                      left: "calc(50% - 23px)", // Move the left-side cap to overlap the line more
                    }}
                  >
                    <FaGraduationCap size={40} className="text-orange-500 mb-2" />
                    <div className="w-1 bg-gray-700 h-24"></div>
                  </div>
                )}

                {/* Icon on the Line (Right Side Graduation Cap) */}
                {edu.side === "right" && (
                  <div
                    className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2"
                    style={{ top: "0%" }} // Adjust this value to place the right-side cap
                  >
                    <FaGraduationCap size={40} className="text-orange-500 mb-2" />
                    <div className="w-1 bg-gray-700 h-24"></div>
                  </div>
                )}

                {/* Right Side */}
                {edu.side === "right" && (
                  <div className="w-1/2 text-left pl-6 pr-24">
                    <h2 className="text-xl font-bold text-orange-400">{edu.title}</h2>
                    <h3 className="text-lg text-gray-300">{edu.institution}</h3>
                    <p className="text-sm text-gray-400">{edu.date}</p>
                    <p className="mt-2 text-gray-200">{edu.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
{certificationData.map((cert, index) => (
  <div
    key={index}
    className="flex flex-col items-center h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <a href={cert.link} target="_blank" rel="noopener noreferrer">
      <img
        src={cert.logo}
        alt={cert.name}
        inst={cert.institution}
        className="w-20 h-20 object-contain mb-4"
      />
    </a>
    <h3 className="text-lg font-medium text-gray-300 text-center">
        {cert.name} <br />
        <span className="text-sm text-gray-400">{cert.institution}</span>
    </h3>
  </div>
))}

          </div>
        )}
      </div>
    </section>
  );
}
