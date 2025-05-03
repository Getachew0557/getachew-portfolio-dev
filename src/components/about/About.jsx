import React from 'react';
import aboutImage from '../../assets/icon.png';

export default function About() {
    return (
      <section id="about" className="relative overflow-hidden flex flex-col text-white bg-gray-1200 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Title */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-500 text-center relative inline-block"
            >
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 animate-pulse"></span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Image Section */}
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              className="w-full lg:w-1/2 flex justify-center relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-shadow duration-300">
                <img
                  src={aboutImage}
                  alt="Getachew Getu"
                  className="object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div
              data-aos="fade-left"
              data-aos-delay="400"
              className="w-full lg:w-1/2 flex flex-col space-y-6 text-justify"
            >
              <div className="space-y-4">
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
                  Hello! I'm <span className="text-orange-500 font-bold">Getachew Getu</span>, a passionate 
                  <span className="text-orange-400"> Full Stack Developer</span>, 
                  <span className="text-orange-400"> Machine Learning Engineer</span>, and 
                  <span className="text-orange-400"> Data Scientist</span>. I specialize in crafting end-to-end solutions 
                  and solving complex problems through innovative approaches in software development and AI.
                </p>

                <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-medium">
                  With expertise in modern tech stacks and frameworks, I build efficient, scalable systems. 
                  My mission is to drive technological innovation while contributing to impactful projects 
                  that create meaningful change in the world.
                </p>
              </div>

              {/* Enhanced CV Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://drive.google.com/file/d/17SsX_4k20JH12lBalstW5B7xQa9m6LDr/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
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