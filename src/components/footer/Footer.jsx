import React from 'react'

export default function Footer({ darkMode }) {
    const listNavbar = [
        { name: 'Home', link: '#' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Education', link: '#education' },
        { name: 'Projects', link: '#projects' },
        { name: 'Blog', link: '#blog' }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className={`relative transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Gradient separator line */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            <div className={`backdrop-blur-xl border-t transition-colors duration-300 ${darkMode ? 'border-gray-700/50 bg-gray-900/80' : 'border-gray-200/50 bg-white/60'}`}>
                <div className="container mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
                    <span className={`text-sm sm:text-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        © {currentYear}{' '}
                        <a
                            href="#"
                            className={`font-semibold hover:underline transition-colors ${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-700'}`}
                        >
                            Getachew Getu
                        </a>
                        {' '}· All Rights Reserved
                    </span>

                    <ul className="flex flex-wrap items-center mt-3 text-sm md:mt-0 gap-x-1">
                        {listNavbar.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.link}
                                    className={`px-2 py-1 rounded-lg transition-all duration-200 ${darkMode
                                        ? 'text-gray-400 hover:text-orange-400 hover:bg-gray-800/80'
                                        : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
                                        }`}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
