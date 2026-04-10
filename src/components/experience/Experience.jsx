import React from 'react';
import img_experience from '../../assets/img_experience.png';
import { FaShieldAlt, FaRobot, FaCogs, FaCode } from 'react-icons/fa';

export default function Experience({ darkMode }) {
  const [expandedIndices, setExpandedIndices] = React.useState({});
  const toggleExpand = (index) => {
    setExpandedIndices((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const experiences = [
    {
      title: "AI Engineer | Software Developer",
      company: "Information Network Security Administration",
      date: "April 2023 – Present",
      location: "Addis Ababa",
      icon: <FaShieldAlt />,
      tasks: [
        "Architected AI-powered Antivirus, IDS, and WAF systems for real-time threat detection.",
        "Built a multilingual legal RAG chatbot and scalable microservices for HR automation.",
        "Engineered backend inference APIs, Docker deployments, and CI/CD MLOps pipelines.",
        "Led engineering teams and mentored junior AI developers to maximize delivery efficiency."
      ]
    },
    {
      title: "AI Engineer",
      company: "Afri Software Solutions",
      date: "Nov 2024 – Present",
      location: "Addis Ababa",
      icon: <FaCode />,
      tasks: [
        "Developed KcartBot, a Multilingual RAG Assistant for Agri-Commerce recommendations.",
        "Engineered an AI-powered Intelligent Pricing engine using LLMs and vector embeddings."
      ]
    },
    {
      title: "Agentic AI Trainer",
      company: "UNDP",
      date: "Sept 2025 – Feb 2026",
      location: "Addis Ababa",
      icon: <FaRobot />,
      tasks: [
        "Designed hands-on Agentic AI and LLM training programs bridging theory and practice.",
        "Guided participants to build end-to-end multi-agent AI solutions and RAG architectures.",
        "Mentored teams to improve system design, code quality, and deployment readiness."
      ]
    },
    {
      title: "Junior Software Support Engineer",
      company: "Moti Engineering Plc",
      date: "Dec 2022 – April 2023",
      location: "Addis Ababa",
      icon: <FaCogs />,
      tasks: [
        "Built a Voice Guidance application with automated Text-to-Speech functionality.",
        "Resolved technical issues in customer systems to enhance overall reliability."
      ]
    }
  ];

  return (
    <section
      id='experience'
      className={`relative overflow-hidden flex flex-col py-10 md:py-16 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* Glassmorphism mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`blob-float absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 ${darkMode ? 'bg-gradient-to-tl from-indigo-600 to-violet-500' : 'bg-gradient-to-tl from-indigo-400 to-violet-300'}`} />
        <div className={`blob-float-slow absolute top-10 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-gradient-to-br from-sky-500 to-cyan-400' : 'bg-gradient-to-br from-sky-400 to-cyan-300'}`} />
        <div className={`blob-float-drift absolute top-1/2 right-1/4 w-60 h-60 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-gradient-to-r from-rose-500 to-pink-400' : 'bg-gradient-to-r from-rose-400 to-pink-300'}`} />
      </div>

      {/* Title Section */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="300"
        className={`font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 md:mb-12 text-center relative inline-block ${
          darkMode ? 'text-orange-400' : 'text-orange-600'
        }`}
      >
        Experience
      </h1>

      {/* Main Experience Container */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row items-center xl:items-start'>
        {/* Image Container */}
        <div data-aos='fade-right' data-aos-delay='400' className='relative xl:sticky xl:top-24 lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-12 xl:mb-0 xl:mr-10'>
          <div className={`md:h-[450px] h-[350px] md:w-[300px] w-[250px] xl:mx-auto absolute rounded-2xl transform rotate-3 -top-6 z-0 backdrop-blur-xl border ${darkMode ? 'bg-gradient-to-br from-violet-600/30 to-cyan-500/20 border-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.2)]' : 'bg-gradient-to-br from-indigo-200/40 to-cyan-100/30 border-indigo-200/40 shadow-[0_0_40px_rgba(99,102,241,0.15)]'}`}></div>
          <img src={img_experience} className='object-cover md:w-[280px] md:h-[430px] xl:mx-auto object-center rounded-xl relative z-10' alt="Experience" />
        </div>

        {/* Experience Timeline */}
        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='xl:w-2/3 w-full'
        >
          <div className="relative mt-2 pl-10 md:pl-16">
            {/* Vertical Line Divider */}
            <div className={`absolute left-3 md:left-6 top-0 h-full w-1 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            {/* Experience Items */}
            <div className='space-y-8'>
              {experiences.map((exp, index) => {
                const isExpanded = expandedIndices[index];
                const displayedTasks = isExpanded ? exp.tasks : exp.tasks.slice(0, 2);

                return (
                  <div key={index} className="relative">
                    {/* Icon */}
                    <div className={`absolute -left-[45px] md:-left-[58px] top-6 p-1.5 md:p-2 rounded-full border-2 md:border-4 z-10 ${
                      darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                    }`}>
                      <div className={`text-base md:text-lg ${darkMode ? 'text-orange-500' : 'text-orange-600'}`}>
                        {exp.icon}
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className={`p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl ${
                      darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                    }`}>
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-3">
                        <div className="flex-1">
                          <h2 className={`font-outfit text-lg md:text-xl font-bold mb-1 leading-tight ${
                            darkMode ? 'text-gray-100' : 'text-gray-900'
                          }`}>
                            {exp.title}
                          </h2>
                          <h3 className={`font-outfit text-base font-semibold ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {exp.company}
                          </h3>
                        </div>
                        <div className="flex flex-col md:items-end gap-0.5">
                          <p className={`text-xs md:text-sm font-semibold text-orange-500 whitespace-nowrap`}>
                            {exp.date}
                          </p>
                          <p className={`text-xs flex items-center gap-1 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <span>📍</span> {exp.location}
                          </p>
                        </div>
                      </div>

                      {/* Tasks/Works */}
                      <ul className={`list-disc ml-4 space-y-1.5 text-xs md:text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {displayedTasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="leading-snug">
                            {task}
                          </li>
                        ))}
                      </ul>

                      {/* See More Toggle */}
                      {exp.tasks.length > 2 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className={`mt-3 text-xs md:text-sm font-semibold flex items-center gap-1 transition-colors duration-300 ${
                            darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'
                          }`}
                        >
                          {isExpanded ? 'See Less' : 'See More'}
                          <svg
                            className={`w-3 h-3 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}