import React from 'react';
import aboutImage from '../../assets/icon.png';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`relative overflow-hidden flex flex-col py-12 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}>
      {/* Background Decorative Element - Similar to Hero */}
      <div
        className={`hidden md:block h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] bg-gradient-to-r rounded-full
          absolute -bottom-20 -left-20 transform -rotate-12 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-orange-600 via-yellow-500 to-red-400 opacity-10'
            : 'from-orange-600 via-yellow-900 to-red-300 opacity-5'
          }`}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <div className="flex justify-center mb-12 md:mb-16">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center relative inline-block mb-10 md:mb-16 ${darkMode ? 'text-orange-400' : 'text-orange-600'
              }`}
          >
            About Me
            {/* <span className={`absolute -bottom-2 left-0 w-full h-1 animate-pulse ${
                darkMode ? 'bg-orange-500' : 'bg-orange-600'
              }`}></span> */}
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
          {/* Image Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="w-full lg:w-1/2 flex justify-center relative group"
          >
            {/* Glow blob */}
            <div className={`absolute inset-0 rounded-full blur-2xl animate-pulse ${darkMode ? 'bg-orange-500/15' : 'bg-orange-600/10'}`} />
            <div className={`relative p-4 rounded-3xl glass-card transition-all duration-300 hover:shadow-2xl ${darkMode ? 'hover:shadow-orange-500/20' : 'hover:shadow-orange-600/20'}`}>
              <img
                src={aboutImage}
                alt="Getachew Getu"
                className="object-cover w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 transform group-hover:scale-[1.03] transition-transform duration-300 rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full lg:w-1/2 flex flex-col space-y-6 text-justify"
          >
            <div className={`p-6 md:p-8 rounded-2xl glass-card`}>
              {/* Top accent */}
              <div className={`w-12 h-1 rounded-full mb-6 bg-gradient-to-r ${darkMode ? 'from-orange-500 to-amber-400' : 'from-orange-600 to-red-500'}`} />
              <p className={`font-outfit text-lg md:text-xl leading-loose tracking-wide ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                I architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-bold">intelligent systems</span> that bridge advanced AI research and enterprise software engineering. As an <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI Engineer</span> and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full-Stack Developer</span>, I build scalable LLM applications, automation platforms, and secure microservice ecosystems that drive operational efficiency and digital transformation. My work spans AI-driven applications, cybersecurity, RAG-based assistants, workflow automation, and cloud-native deployment—turning complex ideas into <span className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>measurable business impact</span>.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}