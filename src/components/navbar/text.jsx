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
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="container mx-auto flex p-5 items-center justify-between">
                {/* Brand Name */}
                <a className="flex items-center text-gray-900">
                    <span className="text-3xl font-bold text-white">Getachew</span>
                </a>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="text-white"
                        onClick={() => setIsMenuOpen(true)} // Open menu
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden lg:flex space-x-5">
                    {listNavbar.map((item, index) => (
                        <a key={index} href={item.link} className="text-white hover:text-yellow-300">
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu (Sidebar) */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex">
                    {/* Overlay */}
                    <div
                        className="bg-black bg-opacity-50 w-full"
                        onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
                    ></div>

                    {/* Sidebar */}
                    <div className="bg-gray-900 text-white w-64 h-full shadow-lg flex flex-col items-start p-5 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setIsMenuOpen(false)} // Close menu
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

                        {/* Navbar Links */}
                        <nav className="mt-10 flex flex-col space-y-4 w-full">
                            {listNavbar.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="text-lg py-2 px-4 w-full hover:bg-yellow-500 rounded"
                                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
