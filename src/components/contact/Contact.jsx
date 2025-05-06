import React from 'react'

export default function Contact({ darkMode }) {
  return (
    <section 
      id='contact' 
      className={`py-12 md:py-16 px-4 sm:px-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
      data-aos='fade-up' 
      data-aos-delay='400'
    >
      <div className='mx-auto max-w-screen-md'>
        <h1
          className={`text-4xl sm:text-5xl font-bold lg:text-6xl mb-8 md:mb-12 text-center ${
            darkMode ? 'text-orange-400' : 'text-orange-600'
          }`}
        >
          Contact Me
          
        </h1>
        
        <form action='#' className='space-y-6'>
          <div>
            <label 
              htmlFor='email' 
              className={`block mb-2 text-sm md:text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Email
            </label>
            <input 
              type='email' 
              id='email' 
              className={`w-full p-3 text-sm md:text-base rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 focus:ring-orange-500 focus:border-orange-500' 
                  : 'bg-gray-100 border-gray-300 text-gray-900 focus:ring-orange-600 focus:border-orange-600'
              }`}
              placeholder='name@example.com' 
              required
            />
          </div>

          <div>
            <label 
              htmlFor='message' 
              className={`block mb-2 text-sm md:text-base font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Message
            </label>
            <textarea 
              rows="6"
              id='message'
              className={`w-full p-3 text-sm md:text-base rounded-lg border transition-colors ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-gray-300 focus:ring-orange-500 focus:border-orange-500' 
                  : 'bg-gray-100 border-gray-300 text-gray-900 focus:ring-orange-600 focus:border-orange-600'
              }`}
              placeholder='Leave a message...'
              required
            />
          </div>

          <div className='flex'>
            <button 
              type='submit'
              className={`inline-flex items-center px-8 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'text-white bg-orange-500 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,165,0,0.4)]' 
                  : 'text-white bg-orange-600 hover:bg-orange-700 hover:shadow-[0_0_20px_rgba(255,140,0,0.3)]'
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}