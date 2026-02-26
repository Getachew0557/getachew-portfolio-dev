import React from 'react';
import aboutImage from '../../assets/icon.png';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`relative overflow-hidden flex flex-col py-16 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <div className="flex justify-center mb-12 md:mb-16">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-center relative inline-block ${darkMode ? 'text-orange-500' : 'text-orange-600'
              }`}
          >
            About Me
            {/* <span className={`absolute -bottom-2 left-0 w-full h-1 animate-pulse ${
                darkMode ? 'bg-orange-500' : 'bg-orange-600'
              }`}></span> */}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="w-full lg:w-1/2 flex justify-center relative group"
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-300 ${darkMode ? 'hover:shadow-orange-500/20' : 'hover:shadow-orange-600/20'
              }`}>
              <img
                src={aboutImage}
                alt="Getachew Getu"
                className="object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900/40' : 'from-gray-50/40'
                } to-transparent`}></div>
            </div>
          </div>

          {/* Content Section */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full lg:w-1/2 flex flex-col space-y-6 text-justify"
          >
            <div className="space-y-6">
              <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                Greetings! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Getachew Getu</span>, an innovative
                <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}> GenAI Engineer</span>,
                <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}> Machine Learning Enthusiast</span>, and
                <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}> Full Stack Developer</span>. I architect robust, intelligent solutions that bridge the gap between cutting-edge AI research and real-world software applications.
              </p>

              <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                Armed with expertise in modern frameworks and scalable architectures, my mission is to drive digital transformation. Whether it's training LLMs, deploying machine learning pipelines, or building beautifully responsive web apps, I thrive on turning complex concepts into high-impact digital experiences.
              </p>
            </div>

            {/* Enhanced CV Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/17Ss_4k20JH12lBalstW5B7xQa9m6LDr/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 ${darkMode ? 'from-orange-500 to-amber-600' : 'from-orange-400 to-amber-500'
                  }`}></div>
                <button className={`relative flex items-center justify-center bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'from-orange-500 to-amber-600 hover:shadow-orange-500/30'
                  : 'from-orange-400 to-amber-500 hover:shadow-orange-400/30'
                  }`}>
                  <span className="mr-2">📄</span>
                  View My CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}