import React from 'react';
import aboutImage from '../../assets/icon.png';

export default function About({ darkMode }) {
  return (
    <section id="about" className={`relative overflow-hidden flex flex-col py-12 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900/60 text-gray-100' : 'bg-gray-50/60 text-gray-900'}`}>
      {/* Glassmorphism mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`blob-float absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30 ${darkMode ? 'bg-gradient-to-br from-violet-600 to-indigo-500' : 'bg-gradient-to-br from-violet-500 to-indigo-400'}`} />
        <div className={`blob-float-slow absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-gradient-to-tl from-cyan-500 to-teal-400' : 'bg-gradient-to-tl from-cyan-400 to-teal-300'}`} />
        <div className={`blob-float-drift absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500' : 'bg-gradient-to-r from-fuchsia-400 to-pink-400'}`} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <div className="flex justify-center mb-0">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center relative inline-block mb-6 md:mb-12 ${darkMode ? 'text-orange-400' : 'text-orange-600'
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
            className="w-full lg:w-1/3 flex justify-center relative group"
          >
            {/* Glow blob */}
            <div className={`absolute inset-0 rounded-full blur-2xl animate-pulse ${darkMode ? 'bg-orange-500/15' : 'bg-orange-600/10'}`} />
            <div className={`relative p-4 rounded-3xl glass-card transition-all duration-300 hover:shadow-2xl ${darkMode ? 'hover:shadow-orange-500/20' : 'hover:shadow-orange-600/20'}`}>
              <img
                src={aboutImage}
                alt="Getachew Getu"
                className="object-cover w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-full lg:h-auto lg:max-w-[320px] transform group-hover:scale-[1.03] transition-transform duration-300 rounded-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            data-aos="fade-left"
            data-aos-delay="400"
            className="w-full lg:w-2/3 flex flex-col space-y-6 text-justify"
          >
            <div className={`p-6 md:p-8 rounded-2xl glass-card`}>
              {/* Top accent */}
              <div className={`w-12 h-1 rounded-full mb-6 bg-gradient-to-r ${darkMode ? 'from-orange-500 to-amber-400' : 'from-orange-600 to-red-500'}`} />
              
              <div className={`font-outfit text-base md:text-lg leading-relaxed flex flex-col gap-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  I am an <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI Engineer</span>, <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Full-Stack Developer</span>, and <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Academic Researcher</span> with a passion for building intelligent systems that solve real-world problems — from AI-powered cybersecurity tools to multilingual assistants and automation platforms. I focus on delivering reliable, production-ready solutions with clean architecture and strong engineering practices.
                </p>
                <p>
                  I hold a <span className={`font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>MSc in Computer Engineering</span> from Addis Ababa Science and Technology University, earned through a fast-track scholarship. My research spans four journal publications, three conference papers, and a Best Research Paper award. I also served as an <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AI Trainer with UNDP</span>, leading hands-on training on modern AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}