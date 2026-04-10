import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaImage, FaVideo, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { fetchResource } from "../../api";
import image from "../../assets/fraud1.png";
import credit1 from "../../assets/credit1.png";
import credit2 from "../../assets/credit2.png";
import image4 from "../../assets/image4.png";
import fraud1 from "../../assets/fraud1.png";
import fraud2 from "../../assets/fraud2.png";
import fraud3 from "../../assets/fraud3.png";
import fraud4 from "../../assets/fraud4.png";
import llm1 from "../../assets/llm.png";
import llm2 from "../../assets/dashboard.png"
import llm3 from "../../assets/llm rag flow.png"
import llm4 from "../../assets/airflow.png"
import kgat from "../../assets/workflow.png";
import kgat2 from "../../assets/workflow1.png"
import kgat3 from "../../assets/workflow2.png"
import kgat4 from "../../assets/workflow3.png"

const fallbackProjects = [
    {
      id: 1, title: "Fraud Detection System",
      description: "Fraud detection for E-Commerce and Banking Transactions",
      video: "https://www.youtube.com/embed/d9EqK4NxlhM",
      github: "https://github.com/Getachew0557/fraud-detection-ecommerce-banking.git",
      live: "https://frauddetection.vercel.app/",
      images: [fraud1, fraud2, fraud3, fraud4],
    },
    {
      id: 2, title: "LLM legal document assistant",
      description: "A Retrieval-Augmented Generation application for querying legal documents",
      video: "", github: "https://github.com/Getachew0557/LLM-legal-document-assistant.git",
      live: "", images: [llm1, llm2, llm3, llm4]
    },
    {
      id: 3, title: "Credit scoring and risk model",
      description: "This project focuses on risk classification, credit scoring analysis, and bank loan insights",
      video: "https://www.youtube.com/embed/PG99-7qm0XY",
      github: "https://github.com/Getachew0557/Credit-Score-Classifications.git",
      live: "https://credit-score-classifications-1.onrender.com/",
      images: [credit1, credit2]
    },
    {
      id: 4, title: "Dev Assistant AI Agent", description: "Dev Assistant AI Agent",
      video: "", github: "https://github.com/example/project4", live: "", images: [image4],
    },
    {
      id: 5, title: "AI based Book Recomndation System", description: "KGAT book recommendation system",
      video: "", github: "https://github.com/Getachew0557/Knowledge-Graph-Attention-Network-Based-Book-Recommendation-System.git",
      live: "https://getachew0557-knowledge-graph-attention-network-based-app-q5zdkw.streamlit.app/",
      images: [kgat, kgat2, kgat3, kgat4],
    },
];

// Auto-cycling image slideshow with video-like Ken Burns effect
function ProjectImageSlider({ images, alt }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setPrev(current);
        setCurrent(c => (c + 1) % images.length);
        setTransitioning(false);
      }, 800);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, [images, current]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-black">

      {/* Previous image fading out */}
      {prev !== null && transitioning && (
        <img
          src={images[prev]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0, transition: 'opacity 0.8s ease-in-out', animation: 'kenburns-out 3.8s ease-in-out forwards' }}
        />
      )}

      {/* Current image with Ken Burns zoom */}
      <img
        key={current}
        src={images[current]}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
          animation: `kenburns-${current % 3 === 0 ? 'zoom' : current % 3 === 1 ? 'pan-right' : 'pan-left'} 3.8s ease-in-out forwards`
        }}
      />

      {/* Cinematic dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block rounded-full transition-all duration-500 ${i === current ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar like a video */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 z-10">
        <div
          key={current}
          className="h-full bg-white/70"
          style={{ animation: 'progress-bar 3s linear forwards' }}
        />
      </div>
    </div>
  );
}

export default function Projects({ darkMode }) {
  const [listProjects, setListProjects] = useState(fallbackProjects);
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchResource('projects').then(data => {
      if (data && data.length > 0) setListProjects(data)
    })
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleNextImage = () => {
    if (activeModal.type === "image" && activeModal.project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % activeModal.project.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (activeModal.type === "image" && activeModal.project.images) {
      setCurrentImageIndex((prev) =>
        (prev - 1 + activeModal.project.images.length) % activeModal.project.images.length
      );
    }
  };

  const handleModalClose = () => {
    setActiveModal(null);
    setCurrentImageIndex(0);
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="projects"
      className={`relative overflow-hidden flex flex-col body-font transition-colors duration-300 ${darkMode ? 'bg-gray-900/60 text-gray-100' : 'bg-gray-50/60 text-gray-900'}`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-float absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-15 bg-gradient-to-bl from-violet-600 to-indigo-500" />
        <div className="blob-float-slow absolute -bottom-10 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 bg-gradient-to-tr from-cyan-500 to-blue-400" />
        <div className="blob-float-drift absolute top-1/3 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 bg-gradient-to-r from-fuchsia-500 to-rose-400" />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className={`font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-12 text-center ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Projects</span>
        </h1>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4 relative group">
              <div className={`h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-2xl overflow-hidden glass-card`}>
                <ProjectImageSlider
                  images={project.images || [project.image]}
                  alt={project.title}
                />
                <div className="p-6 flex-grow flex flex-col justify-start">
                  <h2 className={`font-outfit tracking-widest text-xl font-bold mb-2 line-clamp-1 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {project.title}
                  </h2>
                  <p className={`leading-relaxed mb-3 line-clamp-3 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                </div>
              </div>

              {/* Hover Icons */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center space-x-4 transition-opacity duration-300">
                <button
                  className="text-white text-3xl hover:text-orange-500"
                  onClick={() => setActiveModal({ type: "image", project })}
                >
                  <FaImage title="Show Images" />
                </button>
                <button
                  className="text-white text-3xl hover:text-orange-500"
                  onClick={() => setActiveModal({ type: "video", project })}
                >
                  <FaVideo title="Watch Video" />
                </button>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-orange-500"
                >
                  <FaExternalLinkAlt title="Live Server" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl hover:text-orange-500"
                >
                  <FaGithub title="GitHub" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Image or Video */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          onClick={handleModalClose}
        >
          <div
            className="relative bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl w-full max-w-3xl mx-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-white font-semibold text-base sm:text-lg truncate pr-4">
                {activeModal.project.title}
              </h3>
              <button
                className="text-white/50 hover:text-white text-lg transition-colors flex-shrink-0"
                onClick={handleModalClose}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6">
              {activeModal.type === "image" ? (
                <div className="flex flex-col items-center gap-4">
                  {/* Strict fixed 16:9 frame — uniform for ALL images */}
                  <div
                    className="w-full rounded-xl overflow-hidden bg-gray-800"
                    style={{ aspectRatio: '16/9' }}
                  >
                    <img
                      key={currentImageIndex}
                      src={activeModal.project.images
                        ? activeModal.project.images[currentImageIndex]
                        : activeModal.project.image}
                      alt={activeModal.project.title}
                      className="w-full h-full object-contain"
                      style={{ display: 'block' }}
                    />
                  </div>

                  {/* Navigation */}
                  {activeModal.project.images && activeModal.project.images.length > 1 && (
                    <div className="flex items-center justify-between w-full gap-3">
                      <button
                        onClick={handlePreviousImage}
                        className="flex-1 py-2.5 px-4 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                      >
                        ← Prev
                      </button>
                      <span className="text-white/50 text-xs whitespace-nowrap">
                        {currentImageIndex + 1} / {activeModal.project.images.length}
                      </span>
                      <button
                        onClick={handleNextImage}
                        className="flex-1 py-2.5 px-4 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/20"
                      >
                        Next →
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Video — same 16:9 ratio */
                <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src={activeModal.project.video}
                    title={activeModal.project.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
