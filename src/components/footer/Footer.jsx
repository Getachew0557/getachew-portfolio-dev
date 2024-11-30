import React from 'react'

export default function Footer() {
    const listNavbar = [
        {name: 'Home', link:'#'},
        {name: 'about', link:'#about'},
        {name: 'Skills', link:'#skills'},
        {name: 'Experience', link:'#experience'},
        {name: 'Language', link:'#language'},
        {name: 'Projects', link:'#projects'},
        { name: 'Medium', link: '#blog' }
        
    ];

// Get the current year
const currentYear = new Date().getFullYear();
  
  return (
   <footer className='bg-gray-700 rounded-lg shadow'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-ms text-gray-200 sm:text-center'>
        {currentYear} <a href='#' className='hover:underline'>Portfolio.</a>
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-100 sm:mt-0'>
            {
                listNavbar.map((item, index) =>(
                    <a key={index} href={item.link} className='hover:text-orange-400 me-4 md:me-6'>
                        {item.name}
                    </a>
                ))
            }
        </ul>
      </div>
   </footer>
  )
}
