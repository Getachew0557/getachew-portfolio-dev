import React from 'react'

export default function Footer({ darkMode }) {
    const listNavbar = [
        {name: 'Home', link:'#'},
        {name: 'About', link:'#about'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Education', link:'#education'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
        {name: 'Blog', link:'#blog'}
    ];

    const currentYear = new Date().getFullYear();
  
    return (
        <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
            <div className="container mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} sm:text-center`}>
                    © {currentYear} {" "}
                    <a 
                        href="#" 
                        className={`hover:underline ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
                    >
                        Portfolio
                    </a>
                </span>
                
                <ul className="flex flex-wrap items-center mt-3 text-sm md:mt-0">
                    {listNavbar.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.link} 
                                className={`mr-4 md:mr-6 hover:underline transition-colors ${
                                    darkMode 
                                    ? 'text-gray-300 hover:text-orange-400' 
                                    : 'text-gray-600 hover:text-orange-600'
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}