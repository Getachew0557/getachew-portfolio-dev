import React from 'react';
import img_experience from '../../assets/img_experience.png';
import { FaReact, FaAws, FaGitAlt, FaCogs, FaPython, FaShieldAlt, FaRobot, FaMicrophone, FaChalkboardTeacher } from 'react-icons/fa';

export default function Experience({ darkMode }) {
  return (
    <section
      id='experience'
      className={`relative overflow-hidden flex flex-col py-12 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >
      {/* Background Decorative Element */}
      <div
        className={`hidden md:block h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] bg-gradient-to-r rounded-full
          absolute -bottom-20 -right-20 transform rotate-12 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-orange-600 via-yellow-500 to-red-400 opacity-10'
            : 'from-orange-600 via-yellow-900 to-red-300 opacity-5'
          }`}
      />


      {/* Title Section */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="300"
        className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-16 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'
          }`}
      >
        Experience
      </h1>

      {/* Main Experience Container */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center'>
        {/* Image Container */}
        <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
          <div className='md:h-[500px] h-[400px] md:w-[350px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
          <img src={img_experience} className='object-cover md:w-[330px] md:h-[480px] object-center rounded relative z-10' alt="Experience" />
        </div>

        {/* Experience Timeline with enhanced spacing */}
        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='lg:flex-grow md:w-1/2 w-full md:pl-12'
        >
          <div className="relative mt-8 md:mt-12 pl-12 md:pl-20">
            {/* Vertical Line Divider with spacing */}
            <div className={`absolute left-4 md:left-8 top-0 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}></div>

            {/* Experience Items with gap */}
            <div className='space-y-16'>
              {/* First Experience: INSA */}
              <div className="relative">
                <div className={`absolute -left-[54px] md:-left-[70px] top-6 p-2 rounded-full border-4 z-10 ${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                  }`}>
                  <FaShieldAlt className={`text-xl ${darkMode ? 'text-orange-500' : 'text-orange-600'
                    }`} />
                </div>
                <div className={`p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                  }`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={`font-outfit text-xl md:text-2xl font-bold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                        AI Engineer | Application Software Developer
                      </h2>
                      <h3 className={`font-outfit text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Information Network Security Administration (INSA)
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <p className={`text-sm font-semibold text-orange-500 whitespace-nowrap`}>
                        April 2023 – Present | Full-time
                      </p>
                      <p className={`text-sm flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>📍</span> Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Experience: UNDP */}
              <div className="relative">
                <div className={`absolute -left-[54px] md:-left-[70px] top-6 p-2 rounded-full border-4 z-10 ${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                  }`}>
                  <FaRobot className={`text-xl ${darkMode ? 'text-orange-500' : 'text-orange-600'
                    }`} />
                </div>
                <div className={`p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                  }`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={`font-outfit text-xl md:text-2xl font-bold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                        Agentic AI Trainer
                      </h2>
                      <h3 className={`font-outfit text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        UNDP
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <p className={`text-sm font-semibold text-orange-500 whitespace-nowrap`}>
                        Sept 2025 – Present | Part-time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Experience: Moti Engineering */}
              <div className="relative">
                <div className={`absolute -left-[54px] md:-left-[70px] top-6 p-2 rounded-full border-4 z-10 ${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                  }`}>
                  <FaCogs className={`text-xl ${darkMode ? 'text-orange-500' : 'text-orange-600'
                    }`} />
                </div>
                <div className={`p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${darkMode ? 'bg-gray-800/80 glass-card' : 'bg-white/90 glass-card'
                  }`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className={`font-outfit text-xl md:text-2xl font-bold mb-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                        Junior Software Engineer
                      </h2>
                      <h3 className={`font-outfit text-lg font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        Moti Engineering Plc
                      </h3>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <p className={`text-sm font-semibold text-orange-500 whitespace-nowrap`}>
                        Dec 2022 – April 2023 | Full-time
                      </p>
                      <p className={`text-sm flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span>📍</span> Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}