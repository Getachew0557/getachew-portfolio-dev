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
      className={`relative overflow-hidden flex flex-col py-16 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Title */}
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'
            }`}
        >
          Skills

        </h1>

        {/* Skill Category Buttons - Mobile Responsive */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-24">
          {Object.keys(skillData).map((skill) => (
            <button
              key={skill}
              className={`px-4 py-2 text-sm md:text-base md:px-6 md:py-2 rounded-full font-semibold transition-colors duration-300 ${activeSkill === skill
                  ? darkMode
                    ? 'bg-orange-500 text-white'
                    : 'bg-orange-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
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
              className="flex flex-col items-center justify-center p-4 transform transition-all duration-300 
                hover:scale-105 hover:shadow-lg rounded-xl"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                {tech.icon}
              </div>
              <p className={`mt-4 text-center text-sm md:text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
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