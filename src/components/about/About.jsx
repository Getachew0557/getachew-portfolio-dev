import React from 'react';
import aboutImage from '../../assets/icon.png'; // Change this path to your actual image

export default function About() {
    return (
      <section id="about" className="relative overflow-hidden flex flex-col text-white body-font bg-gray-1200">
        <div className="container flex flex-col items-center mx-auto px-5 py-24">
          {/* Central Title */}
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12 text-center"
          >
            About Me
          </h1>
          
          <div className="flex flex-col md:flex-row items-center w-full">
            {/* Left Side - Image */}
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="md:w-1/2 w-full flex justify-center md:justify-start mb-10 md:mb-0"
            >
              <img
                src={aboutImage}
                alt="About Me"
                className="rounded-lg shadow-lg object-cover w-72 h-72 md:w-96 md:h-96"
              />
            </div>
            
            {/* Right Side - Text */}
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="md:w-1/2 w-full md:pl-12 text-center md:text-left"
            >
              <p className="leading-relaxed text-lg mb-6 text-gray-300">
                Hello! I'm <span className="text-orange-400 font-bold">Getachew Getu</span>, a passionate Full Stack Developer, 
                Machine Learning Engineer, and Data Scientist. I specialize in developing end-to-end solutions and tackling 
                challenging problems through innovative approaches in programming, data analysis, and machine learning.
              </p>
              <p className="leading-relaxed text-lg mb-6 text-gray-300">
                Over the years, I have gained expertise in modern technologies and frameworks, allowing me to create efficient, 
                scalable applications and systems. My goal is to continue growing while contributing to impactful projects 
                that make a difference.
              </p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://drive.google.com/file/d/17SsX_4k20JH12lBalstW5B7xQa9m6LDr/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-lg rounded-full text-lg">
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