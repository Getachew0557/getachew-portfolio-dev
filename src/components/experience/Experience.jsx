import React from 'react';
import img_experience from '../../assets/img_experience.png';
import { FaReact, FaAws, FaGitAlt, FaCogs } from 'react-icons/fa';

export default function Experience({ darkMode }) {
  return (
    <section
      id='experience'
      className={`relative overflow-hidden flex flex-col py-16 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >


      {/* Title Section */}
      <h1
        data-aos="zoom-in"
        data-aos-delay="300"
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'
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
              {/* First Experience */}
              <div className="relative">
                <div className={`absolute -left-[54px] md:-left-[70px] top-6 p-2 rounded-full border-4 z-10 ${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                  }`}>
                  <FaCogs className={`text-xl ${darkMode ? 'text-orange-500' : 'text-orange-600'
                    }`} />
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}>
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                    Software Application Developer
                  </h2>
                  <h3 className={`text-lg mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                    Information Network Security Administration (INSA)
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    March 2023 - Ongoing - Addis Ababa, Ethiopia
                  </p>
                  <ul className='space-y-4'>
                    {[
                      { icon: <FaReact />, text: 'Developed scalable web applications using Python and AWS' },
                      { icon: <FaAws />, text: 'Contributed to Web Application Firewall and Antivirus systems' },
                      { icon: <FaGitAlt />, text: 'Implemented CI/CD pipelines using Git' },
                      { icon: <FaAws />, text: 'Integrated ML models for threat intelligence' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <span className={`shrink-0 mt-1 ${darkMode ? 'text-orange-500' : 'text-orange-600'
                          }`}>
                          {item.icon}
                        </span>
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Second Experience with spacing */}
              <div className="relative">
                <div className={`absolute -left-[54px] md:-left-[70px] top-6 p-2 rounded-full border-4 z-10 ${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-white border-orange-600'
                  }`}>
                  <FaCogs className={`text-xl ${darkMode ? 'text-orange-500' : 'text-orange-600'
                    }`} />
                </div>
                <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                  }`}>
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                    Junior Software Support Engineer
                  </h2>
                  <h3 className={`text-lg mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'
                    }`}>
                    Moti Engineering PLC
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    December 2022 - March 2023 - Addis Ababa, Ethiopia
                  </p>
                  <ul className='space-y-4'>
                    {[
                      { icon: <FaReact />, text: 'Developed Voice Guidance application' },
                      { icon: <FaReact />, text: 'Conducted software training sessions' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3"
                      >
                        <span className={`shrink-0 mt-1 ${darkMode ? 'text-orange-500' : 'text-orange-600'
                          }`}>
                          {item.icon}
                        </span>
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}