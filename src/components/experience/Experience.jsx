import React from 'react';
import img_experience from '../../assets/img_experience.png';
import { FaReact, FaAws, FaGitAlt, FaRegHandPointRight } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id='experience' className='relative overflow-hidden flex flex-col text-gray-600 body-font'>
        {/* Decorative Gradient Circles */}
        <div className='absolute top-[100px] left-64 inset-x-0 flex items-start justify-center'>
            <div className='h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full'></div>
            <div className='h-96 w-96 bg-gradient-to-r from-[#ffdb12] opacity-40 blur-2xl rounded-full'></div>
        </div>

        {/* Title Section */}
        <div className="text-center my-8">
            <h1 className='title-font sm:text-4xl text-3xl font-medium text-orange-500'>Experience</h1>
        </div>

        {/* Main Experience Container */}
        <div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
            {/* Image Container */}
            <div data-aos='fade-right' data-aos-delay='400' className='relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0'>
                <div className='md:h-[450px] h-[400px] md:w-[300px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(225,165,0,0.7)] z-0'></div>
                <img src={img_experience} className='object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10' alt="Experience" />
            </div>

            {/* Text and Experience Details */}
            <div data-aos='fade-left' data-aos-delay='400' className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
                {/* Container for Image and Text to Align the Line */}
                <div className="flex items-start justify-start w-full relative">
                    {/* Vertical Line Divider (Full Height, ends slightly below last text) */}
                    <div className="absolute left-[-8%] h-[calc(100%+24px)] w-px bg-gray-400"></div>

                    {/* Text Section */}
                    <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center'>
                        {/* First Experience Section */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 mb-4 relative z-10">
                                <FaRegHandPointRight className="text-orange-500 text-2xl absolute left-[-60px] -top-2 mt-3" />
                                <div className="flex flex-col items-start">
                                    <h2 className='title-font font-bold text-white sm:text-2xl'>Software Application Developer</h2>
                                    <h3 className='text-orange-400 text-lg'>
                                        <span className="text-white">at </span>
                                        Information Network Security Administration (INSA)
                                    </h3>
                                    <p className="text-gray-300 text-sm">March 2023 - Ongoing - Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                            <ul className='list-disc list-inside text-white mb-8 pl-4'>
                                <li className='flex items-center mb-4'>
                                    <FaReact className='text-orange-500 mr-2' />
                                    Developed and maintained scalable web applications using Python and AWS infrastructure services.
                                </li>
                                <li className='flex items-center mb-4'>
                                    <FaAws className='text-orange-500 mr-2' />
                                    Contributed to the Web Application Firewall and Antivirus, ensuring the protection of organizational assets.
                                </li>
                                <li className='flex items-center mb-4'>
                                    <FaGitAlt className='text-orange-500 mr-2' />
                                    Implemented and managed CI/CD pipelines using Git, facilitating continuous integration and deployment.
                                </li>
                                <li className='flex items-center'>
                                    <FaAws className='text-orange-500 mr-2' />
                                    Integrated machine learning models for advanced threat intelligence, enhancing network security measures.
                                </li>
                            </ul>
                        </div>

                        {/* Second Experience Section */}
                        <div className="mb-8">
                            <div className="flex items-center space-x-4 mb-4 relative z-10">
                                <FaRegHandPointRight className="text-orange-500 text-2xl absolute left-[-60px] -top-2 mt-3" />
                                <div className="flex flex-col items-start">
                                    <h2 className='title-font font-bold text-white sm:text-2xl'>Junior Software Support Engineer</h2>
                                    <h3 className='text-orange-400 text-lg'>
                                        <span className="text-white">at </span>
                                        Moti Engineering PLC
                                    </h3>
                                    <p className="text-gray-300 text-sm">December 2022 - March 2023 - Addis Ababa, Ethiopia</p>
                                </div>
                            </div>
                            <ul className='list-disc list-inside text-white pl-4'>
                                <li className='flex items-center mb-4'>
                                    <FaReact className='text-orange-500 mr-2' />
                                    Developed a Voice Guidance application, assisted clients with software troubleshooting.
                                </li>
                                <li className='flex items-center'>
                                    <FaReact className='text-orange-500 mr-2' />
                                    Conducted training sessions on new software features.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
