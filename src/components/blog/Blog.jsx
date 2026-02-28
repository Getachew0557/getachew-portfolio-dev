import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog({ darkMode }) {
  const blogPosts = [
    {
      title: "Natural Language Processing (NLP)",
      description: "Learn the key principles of Natural Language Processing and how it shapes AI and machine learning.",
      link: "https://medium.com/@getachewgetu2010/natural-language-processing-nlp-83eb45c440bb",
      date: "Feb 17, 2024",
      tag: "AI & ML",
    },
    {
      title: "Introduction the application of machine learning",
      description: "Explore how machine learning is transforming industries and shaping the future across various sectors.",
      link: "https://medium.com/@getachewgetu2010/intriduction-the-application-of-machine-learning-58952a2aa86d",
      date: "June 20, 2024",
      tag: "Machine Learning",
    },
    {
      title: "Docker",
      description: "Discover the latest trends and technologies in containerization and orchestration for web development in 2024.",
      link: "https://medium.com/@getachewgetu2010/docker-unlocking-the-power-of-containerization-for-developers-f2192b00bf76",
      date: "Dec 2, 2024",
      tag: "DevOps",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 780,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="blog"
      className={`relative overflow-hidden body-font py-12 md:py-24 px-6 sm:px-12 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      {/* Background Decorative Element */}
      <div
        className={`hidden md:block h-[350px] w-[350px] lg:h-[450px] lg:w-[450px] bg-gradient-to-r rounded-full
          absolute -bottom-20 -left-20 transform rotate-12 shadow-lg animate-pulse 
          transition-all duration-300
          ${darkMode
            ? 'from-orange-600 via-yellow-500 to-red-400 opacity-10'
            : 'from-orange-600 via-yellow-900 to-red-300 opacity-5'
          }`}
      />

      <div className="container mx-auto text-center">
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
        >
          Blogs
        </h1>

        <div className="mt-16 sm:mt-24 w-full">
          <Slider {...settings}>
            {blogPosts.map((post, index) => (
              <div key={index} className="p-4 relative group h-full">
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl glass-card ${darkMode
                    ? 'hover:shadow-orange-500/20'
                    : 'hover:shadow-orange-600/20'
                    }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  {/* Top color accent bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${darkMode ? 'from-orange-500 to-amber-400' : 'from-orange-600 to-red-500'}`} />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tag badge */}
                    <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${darkMode
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      : 'bg-orange-100 text-orange-600 border border-orange-200'
                      }`}>
                      {post.tag}
                    </span>

                    <h2 className={`font-outfit text-xl font-bold mb-3 text-left ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {post.title}
                    </h2>
                    <p className={`text-sm leading-relaxed text-left flex-grow ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {post.description}
                    </p>
                  </div>

                  <div className={`px-6 py-4 flex items-center justify-between border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      {post.date}
                    </span>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-300 ${darkMode
                        ? 'text-orange-400 hover:text-orange-300'
                        : 'text-orange-600 hover:text-orange-700'
                        }`}
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}