import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaImage, FaVideo, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
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

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const listProjects = [
    {
      id: 1,
      image: image,
      title: "Fraud Detection System",
      description: "Fraud detection for E-Commerce and Banking Transactions",
      video: "https://www.youtube.com/embed/d9EqK4NxlhM", 
      github: "https://github.com/Getachew0557/fraud-detection-ecommerce-banking.git",
      live: "https://frauddetection.vercel.app/",
      images: [fraud1, fraud2, fraud3, fraud4], 
    },
    {
      id: 2,
      image: llm2,
      title: "LLM legal document assistant",
      description: "A Retrieval-Augmented Generation application for querying legal documents",
      video: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID", 
      github: "https://github.com/Getachew0557/LLM-legal-document-assistant.git",
      live: "https://example.com/project2",
      images: [llm1, llm2, llm3, llm4]
    },
    {
      id: 3,
      image: credit1,
      title: "Credit scoring and risk model",
      description: " This project focuses on risk classification, credit scoring analysis, and bank loan insights",
      video: "https://www.youtube.com/embed/PG99-7qm0XY", 
      github: "https://github.com/Getachew0557/Credit-Score-Classifications.git",
      live: "https://credit-score-classifications-1.onrender.com/",
      images: [credit1, credit2]
    },
     {
       id: 4,
       image: image4,
       title: "Dev Assistant AI Agent",
       description: "Dev Assistant AI Agent",
       video: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID", // Replace with real video link
      github: "https://github.com/example/project4",
       live: "https://example.com/project4",
     },

     {
      id: 5,
      image: kgat,
      title: "AI based Book Recomndation System",
      description: "KGAT book recommendation system",
      video: "https://www.youtube.com/embed/EXAMPLE_VIDEO_ID", // Replace with real video link
     github: "https://github.com/Getachew0557/Knowledge-Graph-Attention-Network-Based-Book-Recommendation-System.git",
      live: "https://getachew0557-knowledge-graph-attention-network-based-app-q5zdkw.streamlit.app/",
    },
  ];
  

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
      className="relative overflow-hidden flex flex-col text-white body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="sm:text-5xl text-4xl lg:text-6xl font-bold title-font text-orange-400 mb-12 py-12 text-center"
        >
          Projects
        </h1>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-4 relative group">
              <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center transition-all duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xl title-font font-medium text-gray-400 mb-1">
                    {project.title}
                  </h2>
                  <p className="leading-relaxed mb-3">{project.description}</p>
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-gray-800 rounded-lg p-6 w-full max-w-4xl">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleModalClose}
            >
              ✖
            </button>
            {activeModal.type === "image" ? (
              <div className="flex flex-col items-center">
                <img
                  src={
                    activeModal.project.images
                      ? activeModal.project.images[currentImageIndex]
                      : activeModal.project.image
                  }
                  alt={activeModal.project.title}
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                {activeModal.project.images && (
                  <div className="flex justify-between w-full mt-4">
                    <button
                      className="text-white text-xl px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                      onClick={handlePreviousImage}
                    >
                      Previous
                    </button>
                    <button
                      className="text-white text-xl px-4 py-2 bg-orange-500 rounded hover:bg-orange-600"
                      onClick={handleNextImage}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={activeModal.project.video}
                  title={activeModal.project.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
