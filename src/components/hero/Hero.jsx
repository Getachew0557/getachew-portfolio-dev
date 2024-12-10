import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import hi from '../../assets/hi.png';
import img from '../../assets/hero.jpg';

export default function Hero() {
  const [text, setText] = useState('');
  const professions = [
    "Machine Learning Engineer",
    "Data Scientist",
    "Full Stack Web Developer",
    "Gen AI Engineer",
    "Researcher",
  ];
  let currentProfessionIndex = 0;

  useEffect(() => {
    const typeProfession = () => {
      let currentText = '';
      let index = 0;

      const typingInterval = setInterval(() => {
        currentText += professions[currentProfessionIndex].charAt(index);
        setText(currentText);
        index++;

        if (index === professions[currentProfessionIndex].length) {
          clearInterval(typingInterval);
          setTimeout(() => {
            const eraseInterval = setInterval(() => {
              currentText = currentText.slice(0, -1);
              setText(currentText);

              if (currentText.length === 0) {
                clearInterval(eraseInterval);
                currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
                typeProfession();
              }
            }, 50);
          }, 1000);
        }
      }, 50);
    };

    typeProfession();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <div
        className="md:h-[720px] h-[480px] md:w-[640px] w-[480px] right-0 bg-gradient-to-r from-orange-600 
          via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-lg"
      ></div>
      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="text-white body-font z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
            <img
              src={hi}
              data-aos="fade-up"
              data-aos-delay="400"
              className="absolute top-[300px] left-20 md:top-[-30px] md:left-[450px] transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
            />
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Hi! I'm GETACHEW
            </h1>
            <p className="mb-8 leading-relaxed text-sm sm:text-base">
              <span className="text-orange-500 text-lg font-semibold">{text}</span>
              <br />
              I'm a web developer with extensive experience for over 3 years. Expertise is to create web design, front-end design, AI model development.
            </p>
            <div className="flex justify-center flex-wrap space-x-4 sm:space-x-2 mt-4">
              <a
                href="https://github.com/Getachew0557"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/getachew-getu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://t.me/@Two_G"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 relative group"
              >
                <FaTelegram size={24} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  +251947831668
                </span>
              </a>
              <a
                href="https://wa.me/+251947831668"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 relative group"
              >
                <FaWhatsapp size={24} />
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-gray-800 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  +251947831668
                </span>
              </a>
              <a
                href="https://web.facebook.com/getachew.getu.56/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={img}
              alt="hero"
              className="object-cover object-center rounded-full w-64 h-64 sm:w-80 sm:h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
