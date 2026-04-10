// App.jsx
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'

import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Loglib from '@loglib/tracker/react'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) return JSON.parse(savedMode)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    AOS.init({ duration: 1000 })
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>

      {/* Global fixed glassmorphism background — always visible behind all sections */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`global-blob-1 absolute w-[700px] h-[700px] rounded-full blur-[120px] ${darkMode ? 'opacity-25 bg-gradient-to-br from-violet-700 via-indigo-600 to-cyan-500' : 'opacity-30 bg-gradient-to-br from-violet-400 via-indigo-300 to-cyan-200'}`} style={{top: '-10%', right: '-10%'}} />
        <div className={`global-blob-2 absolute w-[600px] h-[600px] rounded-full blur-[100px] ${darkMode ? 'opacity-20 bg-gradient-to-tr from-fuchsia-700 via-pink-600 to-rose-500' : 'opacity-25 bg-gradient-to-tr from-fuchsia-400 via-pink-300 to-rose-200'}`} style={{bottom: '20%', left: '-8%'}} />
        <div className={`global-blob-3 absolute w-[500px] h-[500px] rounded-full blur-[90px] ${darkMode ? 'opacity-15 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-400' : 'opacity-20 bg-gradient-to-r from-teal-400 via-emerald-300 to-green-200'}`} style={{top: '40%', left: '30%'}} />
        <div className={`global-blob-4 absolute w-[450px] h-[450px] rounded-full blur-[80px] ${darkMode ? 'opacity-15 bg-gradient-to-bl from-sky-600 via-blue-500 to-indigo-400' : 'opacity-20 bg-gradient-to-bl from-sky-400 via-blue-300 to-indigo-200'}`} style={{bottom: '-5%', right: '20%'}} />
      </div>
      <div className="relative z-10">
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        {/* Blog + Contact share one seamless glassmorphism background */}
        <div className={`relative ${darkMode ? 'bg-transparent' : 'bg-transparent'}`}>
          <Blog darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </div>
        <Footer darkMode={darkMode} />
        <Loglib config={{ id: "getachew_vercel" }} />
      </div>
    </main>
  )
}