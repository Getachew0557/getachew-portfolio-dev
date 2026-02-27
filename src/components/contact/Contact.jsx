import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact({ darkMode }) {
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMounted) return;

    setFormStatus({ status: 'loading', message: '' });

    const formData = {
      email: e.target.email.value.trim(),
      message: e.target.message.value.trim()
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setFormStatus({ status: 'success', message: data.message });
      e.target.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        if (isMounted) setFormStatus({ status: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      setFormStatus({ status: 'error', message: error.message });

      // Clear error message after 5 seconds
      setTimeout(() => {
        if (isMounted) setFormStatus({ status: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <section
      id='contact'
      className={`relative overflow-hidden py-12 md:py-16 px-4 sm:px-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}
      data-aos='fade-up'
      data-aos-delay='400'
    >
      {/* Background Decorative Element */}
      <div
        className={`hidden lg:block h-[300px] w-[300px] bg-gradient-to-r rounded-full
          absolute -bottom-20 -right-20 transform -rotate-12 shadow-lg animate-pulse
          transition-all duration-300
          ${darkMode
            ? 'from-orange-600 via-yellow-500 to-red-400 opacity-10'
            : 'from-orange-600 via-yellow-900 to-red-300 opacity-5'
          }`}
      />
      <div className='mx-auto max-w-screen-md'>
        <h1
          className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10 md:mb-16 text-center ${darkMode ? 'text-orange-400' : 'text-orange-600'
            }`}
        >
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className={`block mb-2 text-sm md:text-base font-outfit font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className={`w-full p-3 text-sm md:text-base rounded-2xl transition-colors glass ${darkMode
                ? 'text-gray-100 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500'
                : 'text-gray-900 placeholder-gray-500 focus:ring-orange-600 focus:border-orange-600'
                }`}
              placeholder='name@example.com'
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className={`block mb-2 text-sm md:text-base font-outfit font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
            >
              Message
            </label>
            <textarea
              rows="6"
              id='message'
              name='message'
              className={`w-full p-3 text-sm md:text-base rounded-2xl transition-colors glass ${darkMode
                ? 'text-gray-100 placeholder-gray-400 focus:ring-orange-500 focus:border-orange-500'
                : 'text-gray-900 placeholder-gray-500 focus:ring-orange-600 focus:border-orange-600'
                }`}
              placeholder='Leave a message...'
              required
              minLength="10"
              maxLength="1000"
            />
          </div>

          <div className='flex flex-col items-center gap-4'>
            <button
              type='submit'
              className={`inline-flex font-outfit items-center px-8 py-3 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${darkMode
                ? 'text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30'
                : 'text-white bg-gradient-to-r from-orange-600 to-red-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-600/30'
                } ${formStatus.status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={formStatus.status === 'loading'}
            >
              {formStatus.status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>

            {formStatus.message && (
              <p className={`text-sm text-center ${formStatus.status === 'success'
                ? (darkMode ? 'text-green-400' : 'text-green-600')
                : (darkMode ? 'text-red-400' : 'text-red-600')
                }`}>
                {formStatus.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}