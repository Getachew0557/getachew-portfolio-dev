import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import hi from '../../assets/hi.png';
import img from '../../assets/img.png';

export default function Hero() {
  const [text, setText] = useState('');
  const professions = [
    "Machine Learning Engineer",
    "Data Scientist",
    "Full Stack Web Developer",
    "Researcher"
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
            currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
            setText('');
            typeProfession();
          }, 1000);
        }
      }, 200); // typing speed
    };

    typeProfession();
  }, []);

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <div className='md:h-[720px] h-[960px] md:w-[640px] w-[880px] right-0 bg-gradient-to-r from-orange-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'
        >
        </div>
        <Navbar /> 
        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
                    <img src={hi} data-aos='fade-up' data-aos-delay='400'
                     className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] transform
                    -translate-x-1/2 -translate-y-1/2 w-20 h-20'/>
                <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm GETACHEW</h1>
                <p className='mb-8 leading-relaxed'>
                <p className="text-green-500 text-xl font-semibold">{text}</p> {/* Profession typing effect */} 
                I'm a web developer with extensive experiance for over 3 years. Expertise is to create web design, fron end design, AI model development. 
                </p>
                {/* <p className="text-green-500 text-xl font-semibold">{text}</p> Profession typing effect */}
                <div className='flex justify-center'>
                    <a href="https://drive.google.com/file/d/1ybVY2oliC0HvwYRqmFdpFB7RAtXFQJFl/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg '>
                            Get CV
                        </button>
                    </a>
                </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                   <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
                </div>
            </div>
        </section>
    </div>
  );
}
