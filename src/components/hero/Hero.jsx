import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';
import hi from '../../assets/hi.png';
import img from '../../assets/hero.jpg';

export default function Hero({ darkMode, toggleDarkMode }) {
  const [text, setText] = useState('');
  const professions = [
    'AI/ML Engineer',
    'Data Scientist',
    'Full Stack Developer',
    'Academic Researcher',
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
                currentProfessionIndex =
                  (currentProfessionIndex + 1) % professions.length;
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
    <section
      id="home"
      className={`relative overflow-hidden min-h-screen transition-colors duration-300 flex flex-col
        ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Animated Yellow Circle */}
      <div
        className={`hidden md:block h-[500px] w-[500px] lg:h-[680px] lg:w-[680px] bg-gradient-to-r rounded-full
          absolute -top-20 md:-top-40 lg:-top-20 -right-32 md:-right-44 lg:-right-40 transform rotate-12 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-orange-600 via-yellow-500 to-red-400 opacity-20'
            : 'from-orange-600 via-yellow-900 to-red-300 opacity-15'
          }`}
      />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font flex-grow z-10"
      >
        <div className="container mx-auto flex px-8 pt-12 pb-4 md:pt-24 md:pb-8 flex-col-reverse md:flex-row items-center min-h-[calc(100vh-80px)]">
          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 relative mt-8 md:mt-0">
            <div className="max-w-2xl">
              <img
                src={hi}
                data-aos="fade-up"
                data-aos-delay="400"
                className="w-12 h-12 md:w-16 md:h-16 mb-4 animate-bounce"
                alt="Hi"
              />
              <h1
                className={`title-font text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 
                  ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
              >
                Hi! I'm <span className="text-orange-500">GETACHEW</span>
              </h1>
              <p
                className={`text-lg md:text-xl lg:text-2xl mb-4 
                  ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              >
                I'm a{' '}
                <span className="text-orange-500 font-semibold">{text}</span>
              </p>
              <p
                className={`text-lg md:text-xl leading-relaxed font-medium 
                  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Visionary engineer blending Generative AI, machine learning, and full-stack development. Delivering scalable, high-performance systems and turning ambitious ideas into intelligent realities.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center flex-wrap gap-4 sm:gap-8 mt-12">
                {[
                  {
                    icon: <FaGithub />,
                    link: 'https://github.com/Getachew0557',
                  },
                  {
                    icon: <FaLinkedin />,
                    link: 'https://linkedin.com/in/getachew-getu',
                  },
                  {
                    icon: <FaTelegram />,
                    link: 'https://t.me/@Two_G',
                    tooltip: '+251947831668',
                  },
                  {
                    icon: <FaWhatsapp />,
                    link: 'https://wa.me/+251947831668',
                    tooltip: '+251947831668',
                  },
                  {
                    icon: <FaFacebook />,
                    link: 'https://web.facebook.com/getachew.getu.56/',
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-all duration-300 transform hover:scale-125 relative group 
                      ${darkMode
                        ? 'text-gray-300 hover:text-orange-400'
                        : 'text-gray-700 hover:text-orange-600'
                      }`}
                  >
                    {React.cloneElement(social.icon, { size: 28 })}
                    {social.tooltip && (
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs px-2 py-1 rounded 
                          ${darkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-900'
                          } opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                      >
                        {social.tooltip}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 w-full mt-12 md:mt-0 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div
                className={`absolute inset-0 rounded-full blur-xl animate-pulse 
                  ${darkMode ? 'bg-orange-500/20' : 'bg-orange-900/15'}`}
              />
              <img
                src={img}
                alt="Getachew"
                className={`object-cover object-center rounded-full w-full h-full border-4 
                    ${darkMode
                    ? 'border-orange-500/30 hover:border-orange-500'
                    : 'border-orange-700/30 hover:border-orange-900'
                  } transition-all duration-300 shadow-xl relative z-10`}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
