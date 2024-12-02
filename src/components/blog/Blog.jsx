import React from 'react';

export default function Blog() {
  // Sample blog data (You can replace this with dynamic fetching if needed)
  const blogPosts = [
    {
      title: "Natural Language Processing (NLP)",
      description: "Learn the key principles of Natural Language Processing and how it shapes AI and machine learning.",
      link: "https://medium.com/@getachewgetu2010/natural-language-processing-nlp-83eb45c440bb",
      date: "Feb 17, 2024",
    },
    {
      title: "Introduction the application of machine learning",
      description: "Explore how machine learning is transforming industries and shaping the future across various sectors.",
      link: "https://medium.com/@getachewgetu2010/intriduction-the-application-of-machine-learning-58952a2aa86d",
      date: "June 20, 2024",
    },
    {
      title: "Docker",
      description: "Discover the latest trends and technologies in containerization and orchestration for web development in 2024.",
      link: "https://medium.com/@getachewgetu2010/docker-unlocking-the-power-of-containerization-for-developers-f2192b00bf76",
      date: "Dec 2, 2024",
    },
  ];

  return (
    <section id="blog" className="text-gray-600 body-font bg-gray-1200 py-24 px-6 sm:px-12">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12">
          Blogs
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-24">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="p-6 rounded-lg w-full sm:w-1/3 lg:w-1/3 xl:w-1/4 border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <h2 className="text-2xl font-medium text-white mb-4">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.description}</p>
              <span className="text-sm text-gray-500 mb-4 block">{post.date}</span>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:text-yellow-300 text-lg font-semibold"
              >
                See More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
