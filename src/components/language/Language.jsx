import React from 'react'

export default function Language({ darkMode }) {
    const languages = [
        { code: 'Am', name: 'Amharic', level: 'Maternal' },
        { code: 'En', name: 'English', level: 'Common' },
        // {code:'Sp', name:'Spanish', level:'Average'},
        // {code:'Fr', name:'French', level:'Good'},
    ];
    return (
        <section
            className={`relative overflow-hidden flex flex-col py-16 md:py-24 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 text-center relative ${darkMode ? 'text-orange-400' : 'text-orange-600'
                        }`}
                >
                    Languages
                </h1>
                <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 text-blue-950'>
                    <div className='grid grid-cols-2 gap-10 md:flex md:gap-20'>
                        {
                            languages.map((language, index) => (
                                <div key={index} className='achievement flex flex-col items-center'>
                                    <div className='circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg'>
                                        <span className='z-10'>{language.code}</span>
                                        <div className='absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#ff9743] to-[#ffe460] shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0'></div>
                                    </div>
                                    <span className={`text-xl md:text-xl font-medium ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{language.name}</span>
                                    <span className='text-[#ffa600] text-lg md:text-xl font-bold'>{language.level}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
