import React, { useState } from 'react';
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt, 
  FaSlack, FaJira, FaBootstrap 
} from 'react-icons/fa';
import { 
  SiJavascript, SiPostgresql, SiMongodb, SiTensorflow, SiNumpy, SiPandas, 
  SiKeras, SiPytorch, SiScikitlearn, SiTailwindcss, SiStreamlit, SiJenkins, 
  SiTrello 
} from 'react-icons/si';

export default function Skills() {
  // State to track the active skill section
  const [activeSkill, setActiveSkill] = useState('Data Science');

  // Skill data categorized
  const skillData = {
    'Data Science': [
      { name: 'Python', icon: <FaPython size={40} className="text-yellow-400" /> },
      { name: 'NumPy', icon: <SiNumpy size={40} className="text-gray-300" /> },
      { name: 'Pandas', icon: <SiPandas size={40} className="text-blue-500" /> },
      { name: 'TensorFlow', icon: <SiTensorflow size={40} className="text-orange-500" /> },
      { name: 'Keras', icon: <SiKeras size={40} className="text-red-500" /> },
      { name: 'PyTorch', icon: <SiPytorch size={40} className="text-orange-400" /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={40} className="text-green-500" /> },
      { name: 'Deep Learning', icon: <FaReact size={40} className="text-purple-500" /> }, // Placeholder
      { name: 'NLP', icon: <FaReact size={40} className="text-yellow-500" /> }, // Placeholder
      { name: 'Computer Vision', icon: <FaReact size={40} className="text-pink-500" /> }, // Placeholder
    ],
    'Frontend': [
      { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
      { name: 'JavaScript', icon: <SiJavascript size={40} className="text-yellow-400" /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      { name: 'React.js', icon: <FaReact size={40} className="text-blue-400" /> },
      { name: 'Streamlit', icon: <SiStreamlit size={40} className="text-pink-400" /> },
      { name: 'MERN Stack', icon: <FaReact size={40} className="text-green-400" /> }, // Placeholder
    ],
    'Backend': [
      { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: 'PHP', icon: <FaPython size={40} className="text-indigo-500" /> }, // Placeholder for PHP icon
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-500" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-400" /> },
      { name: 'Docker', icon: <FaDocker size={40} className="text-blue-400" /> },
      { name: 'Jenkins', icon: <SiJenkins size={40} className="text-gray-500" /> },
      { name: 'Git', icon: <FaGitAlt size={40} className="text-orange-400" /> },
      { name: 'CI/CD', icon: <FaReact size={40} className="text-purple-500" /> }, // Placeholder
    ],
  };

  return (
    <section id="skills" className="relative overflow-hidden flex flex-col text-white body-font bg-gray-1200 py-24 px-6 sm:px-12">
      <div className="container mx-auto flex flex-col items-center">
        {/* Section Title */}
        <h1
          data-aos="zoom-in"
          className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12 py-12 text-center"
        >
          Skills
        </h1>

        {/* Skill Category Buttons */}
        <div className="flex justify-center space-x-6 mb-24">
          {Object.keys(skillData).map((skill) => (
            <button
              key={skill}
              className={`px-6 py-2 rounded-full font-semibold text-lg ${
                activeSkill === skill
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
              }`}
              onClick={() => setActiveSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </div>

        {/* Active Skill Technology List */}
        <div className="flex flex-wrap justify-center gap-12">
          {skillData[activeSkill].map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center transform transition-all duration-500 ease-in-out hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Stagger animations
            >
              {tech.icon}
              <p className="mt-4 mb-24 text-lg font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
