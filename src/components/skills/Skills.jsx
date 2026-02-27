import React, { useState } from 'react';
import {
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt,
  FaSlack, FaJira, FaBootstrap, FaBrain, FaCommentDots, FaEye, FaRobot
} from 'react-icons/fa';
import {
  SiJavascript, SiPostgresql, SiMongodb, SiTensorflow, SiNumpy, SiPandas,
  SiKeras, SiPytorch, SiScikitlearn, SiTailwindcss, SiStreamlit, SiJenkins,
  SiTrello, SiApachekafka, SiApacheairflow, SiHuggingface, SiOpenai
} from 'react-icons/si';

export default function Skills({ darkMode }) {
  const [activeSkill, setActiveSkill] = useState('Data Science');

  const skillData = {
    'Data Science': [
      { name: 'Python', icon: <FaPython size={40} className="text-yellow-400" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={40} className="text-orange-500" /> },
      { name: 'PyTorch', icon: <SiPytorch size={40} className="text-orange-400" /> },
      { name: 'Deep Learning', icon: <FaBrain size={40} className="text-purple-500" /> },
      { name: 'NLP', icon: <FaCommentDots size={40} className="text-yellow-500" /> },
      { name: 'Computer Vision', icon: <FaEye size={40} className="text-pink-500" /> },
      { name: 'LLM', icon: <SiOpenai size={40} className="text-blue-400" /> },
      { name: 'NumPy', icon: <SiNumpy size={40} className="text-gray-300" /> },
      { name: 'Pandas', icon: <SiPandas size={40} className="text-blue-500" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={40} className="text-green-500" /> },
      { name: 'Keras', icon: <SiKeras size={40} className="text-red-500" /> },
      { name: 'Hugging Face', icon: <SiHuggingface size={40} className="text-yellow-300" /> },
      { name: 'Kafka', icon: <SiApachekafka size={40} className="text-red-500" /> },
      { name: 'Airflow', icon: <SiApacheairflow size={40} className="text-teal-500" /> },



    ],
    'Frontend': [
      { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      { name: 'React.js', icon: <FaReact size={40} className="text-blue-400" /> },
      { name: 'Streamlit', icon: <SiStreamlit size={40} className="text-pink-400" /> },
      { name: 'MERN Stack', icon: <FaReact size={40} className="text-green-400" /> },
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: 'PHP', icon: <FaPython size={40} className="text-indigo-500" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-400" /> },
      { name: 'Docker', icon: <FaDocker size={40} className="text-blue-400" /> },
      { name: 'Jenkins', icon: <SiJenkins size={40} className="text-gray-500" /> },
      { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-400" /> },
      { name: 'CI/CD', icon: <FaReact size={40} className="text-purple-500" /> },
    ],
  };

  return (
    <section
      id="skills"
      className={`relative overflow-hidden flex flex-col py-12 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >
      {/* Background Decorative Element */}
      <div
        className={`hidden md:block h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] bg-gradient-to-r rounded-full
          absolute -top-10 -right-20 transform rotate-45 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-blue-600 via-purple-500 to-pink-400 opacity-10'
            : 'from-blue-600 via-purple-900 to-pink-300 opacity-5'
          }`}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Title */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-16 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'
            }`}
        >
          Skills

        </h1>

        {/* Skill Category Buttons - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-24">
          {Object.keys(skillData).map((skill) => (
            <button
              key={skill}
              className={`font-outfit px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-full font-semibold transition-all duration-300 ${activeSkill === skill
                ? darkMode
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg'
                : darkMode
                  ? 'bg-gray-800/80 hover:bg-gray-700 text-gray-300 glass'
                  : 'bg-white/80 hover:bg-white text-gray-700 glass shadow-md'
                }`}
              onClick={() => setActiveSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Active Skill Technology List - Grid Layout */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
          {skillData[activeSkill].map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 transform transition-all duration-300 
                hover:-translate-y-2 hover:shadow-2xl ${darkMode ? 'hover:shadow-orange-500/20' : 'hover:shadow-orange-600/20'} glass-card group cursor-pointer relative overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Internal Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500`} />
              <div className={`p-4 rounded-full transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'}`}>
                {tech.icon}
              </div>
              <p className={`mt-4 text-center font-outfit text-sm md:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}