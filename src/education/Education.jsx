import React, { useState } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

export default function Education() {
  const [activeTab, setActiveTab] = useState("Education");

  const educationData = [
    {
      side: "right",
      title: "Master of Science in Computer Engineering",
      institution: "Addis Ababa Science and Technology University - Addis Ababa, Ethiopia",
      date: "2021 - 2024",
      description: "Focus on artificial intelligence and machine learning.",
    },
    {
      side: "left",
      title: "Bachelor of Science in Electrical and Computer Engineering",
      institution: "Addis Ababa Science and Technology University - Addis Ababa, Ethiopia",
      date: "2017 - 2022",
      description: "Specialized in electrical systems and automation.",
    },
    {
      side: "right",
      title: "Artificial Intelligence Mastery",
      institution: "10 Academy- Addis Ababa, Ethiopia",
      date: "August 2024 - November 2024",
      description: "Advanced training in AI techniques and applications.",
    },
  ];

  const certificationData = [
    {
      name: "AWS Certified Solutions Architect",
      logo: "aws-logo.png", // Replace with the actual path to your logo
      link: "https://www.aws.amazon.com/certification/",
    },
    {
      name: "Certified Kubernetes Administrator",
      logo: "kubernetes-logo.png", // Replace with the actual path to your logo
      link: "https://www.cncf.io/certification/cka/",
    },
    {
      name: "React Developer Certification",
      logo: "react-logo.png", // Replace with the actual path to your logo
      link: "https://reactjs.org/",
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
                  <div className="w-1/2 text-left pl-6">
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
