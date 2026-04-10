import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Blog({ darkMode }) {
  const [blogPosts, setBlogPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@getachewgetu2010')
      .then(res => res.json())
      .then(data => {
        if (data && data.items) {
          const formattedPosts = data.items.map(item => {
            // Strip HTML tags for the description excerpt
            const plainTextDesc = item.description.replace(/<[^>]+>/g, '').trim();
            const decodedDesc = plainTextDesc.replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
            return {
              title: item.title,
              description: decodedDesc.length > 120 ? decodedDesc.substring(0, 120) + '...' : decodedDesc,
              link: item.link,
              date: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              }),
              // Capitalize tag words nicely
              tag: item.categories && item.categories.length > 0
                ? item.categories[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                : "Technology",
            };
          });
          setBlogPosts(formattedPosts);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching Medium articles:", error);
        setLoading(false);
      });
  }, []);

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
      className={`relative overflow-hidden body-font py-12 md:py-24 px-6 sm:px-12 transition-colors duration-300 ${darkMode ? 'bg-transparent' : 'bg-transparent'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`blob-float absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30 ${darkMode ? 'bg-gradient-to-tr from-fuchsia-600 to-violet-500' : 'bg-gradient-to-tr from-fuchsia-400 to-violet-300'}`} />
        <div className={`blob-float-slow absolute -top-20 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-gradient-to-bl from-cyan-500 to-sky-400' : 'bg-gradient-to-bl from-cyan-400 to-sky-300'}`} />
        <div className={`blob-float-drift absolute top-1/2 left-1/2 w-60 h-60 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-emerald-400 to-teal-300'}`} />
      </div>

      <div className="container mx-auto text-center">
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-12 text-center relative inline-block ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}
        >
          Blogs
        </h1>

        <div className="mt-10 md:mt-16 w-full">
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
                  <div className={`h-1 w-full bg-gradient-to-r ${darkMode ? 'from-violet-500 to-cyan-400' : 'from-violet-400 to-cyan-300'}`} />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Tag badge */}
                    <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${darkMode
                      ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                      : 'bg-violet-100 text-violet-600 border border-violet-200'
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

                  <div className="px-6 py-4 flex items-center justify-between">
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