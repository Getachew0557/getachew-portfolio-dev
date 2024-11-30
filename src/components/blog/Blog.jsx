import React from 'react';

export default function Blog() {
  // Sample blog data (You can replace this with dynamic fetching if needed)
  const blogPosts = [
    {
      title: "How to Master Python",
      description: "Learn the key principles that will help you master Python in just a few months.",
      link: "https://medium.com/@getachewgetu2010/how-to-master-python-1234567890",
      date: "Oct 15, 2024",
    },
    {
      title: "The Power of Machine Learning",
      description: "Explore how machine learning is transforming industries and changing the world.",
      link: "https://medium.com/@getachewgetu2010/the-power-of-machine-learning-1234567890",
      date: "Sep 20, 2024",
    },
    {
      title: "Web Development in 2024",
      description: "Discover the latest trends and technologies in web development for the year 2024.",
      link: "https://medium.com/@getachewgetu2010/web-development-in-2024-1234567890",
      date: "Aug 30, 2024",
    },
  ];

  return (
    <section id="blog" className="text-gray-600 body-font bg-gray-1200 py-24 px-6 sm:px-12">
      <div className="container mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-bold title-font text-orange-400 mb-12">
          Blog
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg w-full sm:w-1/3 lg:w-1/3 xl:w-1/4"
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
