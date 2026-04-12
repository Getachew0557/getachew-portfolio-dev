// Navbar.jsx
import React, { useState, useEffect } from 'react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home',       link: '#home' },
    { name: 'About',      link: '#about' },
    { name: 'Skills',     link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Education',  link: '#education' },
    { name: 'Projects',   link: '#projects' },
    { name: 'Blog',       link: '#blog' },
    { name: 'Contact',    link: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map(i => i.link.replace('#', ''))
      let current = 'home'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id
          }
        }
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled
        ? darkMode
          ? 'backdrop-blur-xl bg-gray-900/80 border-b border-gray-700/50 shadow-lg shadow-black/20'
          : 'backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg shadow-gray-900/10'
        : darkMode
          ? 'bg-gray-900/95'
          : 'bg-white/95'
      }`}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <a href="#home" className={`font-outfit text-2xl md:text-3xl font-bold transition-colors
            ${darkMode ? 'text-gray-100 hover:text-orange-400' : 'text-gray-900 hover:text-orange-600'}`}>
            Getachew
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.link.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    className={`relative font-outfit text-xs font-bold tracking-widest uppercase px-3 py-2 transition-all duration-200 group`}
                  >
                    <span className={`transition-colors duration-200 ${
                      isActive
                        ? darkMode ? 'text-gray-100' : 'text-gray-900'
                        : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-700'
                    }`}>
                      {item.name}
                    </span>
                    {/* Active amber underline — animates left to right */}
                    <span className={`absolute bottom-0 left-3 h-0.5 rounded-full bg-amber-500 transition-all duration-500 ease-out ${
                      isActive ? 'w-[calc(100%-24px)] opacity-100' : 'w-0 opacity-0'
                    }`} />
                  </a>
                )
              })}
            </nav>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-200
                ${darkMode
                  ? 'text-orange-400 hover:bg-gray-800/80 hover:scale-110'
                  : 'text-orange-600 hover:bg-orange-50 hover:scale-110'
                }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors
              ${darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'}`}
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Glassmorphism Panel */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Slide-in panel */}
          <div
            className={`absolute right-0 top-0 h-full w-72 flex flex-col shadow-2xl
              ${darkMode
                ? 'bg-gray-900/90 border-l border-gray-700/50 backdrop-blur-xl'
                : 'bg-white/90 border-l border-gray-200/50 backdrop-blur-xl'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Panel top gradient separator */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

            <div className="flex justify-between items-center px-6 py-5">
              <span className={`font-outfit text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className={`mx-6 h-px ${darkMode ? 'bg-gray-700/60' : 'bg-gray-200/60'}`} />

            <nav className="flex flex-col gap-1 px-4 pt-6 flex-grow">
              {navItems.map((item) => {
                const isActive = activeSection === item.link.replace('#', '')
                return (
                  <a
                    key={item.name}
                    href={item.link}
                    className={`py-3 px-4 font-outfit font-bold text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-between
                      ${isActive
                        ? darkMode ? 'text-gray-100' : 'text-gray-900'
                        : darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-700'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {isActive && <span className="w-6 h-0.5 rounded-full bg-amber-500" />}
                  </a>
                )
              })}
            </nav>

            <div className="px-4 pb-6">
              <div className={`h-px mb-4 ${darkMode ? 'bg-gray-700/60' : 'bg-gray-200/60'}`} />
              <button
                onClick={toggleDarkMode}
                className={`w-full py-3 px-4 rounded-xl font-outfit text-base font-medium flex items-center gap-3 transition-all duration-200
                  ${darkMode
                    ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800/80'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
              >
                {darkMode ? (
                  <>
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    Dark Mode
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                    </svg>
                    Light Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

