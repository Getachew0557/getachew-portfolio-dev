import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Language from './components/language/Language';
import Projects from './components/projects/Projects';
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education'
import Loglib from '@loglib/tracker/react';


export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Hero />
    <About/>
    <Skills />
    <Experience />
    <Education/>
    <Language />
    <Projects />
    <Blog/>
    <Contact />
    <Footer />
    <Loglib
        config={{
          id: "getachew_vercel", 
        }}
      />
   </main>
  )
}

