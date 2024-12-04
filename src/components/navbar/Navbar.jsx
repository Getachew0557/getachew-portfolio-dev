import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu state (open or closed)

    const listNavbar = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Experience', link: '#experience' },
        { name: 'Education', link: '#education' },
        { name: 'Language', link: '#language' },
        { name: 'Projects', link: '#projects' },
        { name: 'Blog', link: '#blog' },
        { name: 'Contact me', link: '#contact' },
    ];

    return (
        <header data-aos="fade-up" className="fixed top-0 left-0 w-full z-50 text-gray-600 body-font bg-transparent">
            <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
                {/* Brand name */}
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-3xl font-bold text-white">Getachew</span>
                </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="text-white text-base flex items-center space-x-5 hidden lg:flex">
                    {listNavbar.map((item, index) => (
                        <a key={index} href={item.link} className="hover:text-yellow-300">
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu (Conditional Rendering) */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
                    <div className="flex justify-end p-4">
                        <button
                            className="text-white text-3xl"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-8 h-8"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center p-5">
                        {listNavbar.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-white py-2 px-4 text-lg hover:bg-yellow-500"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
