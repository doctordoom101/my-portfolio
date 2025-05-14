"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react"
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import ppp1 from "../assets/images/ppp1.png";
import ppp2 from "../assets/images/ppp2.png";
import ppp3 from "../assets/images/ppp3.png";
import ldr1 from "../assets/images/ldr1.jpg";
import ldr2 from "../assets/images/ldr2.jpg";
import ldr3 from "../assets/images/ldr3.jpg";
import ws1 from "../assets/images/ws1.jpg";
import ws2 from "../assets/images/ws2.jpg";
import ws3 from "../assets/images/ws3.jpg";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Sentiment Analysis",
      description: "This Project Contains About How I done The Twitter Sentiment Analysis from Data Collecting to Machine Learning Model Implementation. #Project title# : *Analisis Sentiment Terhadap Mental Health Anak Remaja dengan Dataset Twitter berbasis Hybrid Model Machine Learning*",
      images: [
        p1, p2, p3, p4,
      ],
      techStack: ["python", "Google Colab", "NLTK", "Twitter Api"],
      githubUrl: "https://github.com/doctordoom101/Twitter-Sentiment-Analysis---Programming-Language-Lecturer-Final-Project",
    },
    {
      id: 2,
      title: "Sales & Inventory Management",
      description:
        "A collaborative Sales & Inventory Management - POS system, oop project",
      images: [
        ppp1, ppp2, ppp3,
      ],
      techStack: ["Java", "JavaFX", "MySQL"],
      githubUrl: "https://github.com/Zain0205/el-market-inventory-and-sales",
    },
    {
      id: 3,
      title: "Laundry Management Web App",
      description:
        "A collaborative Laundry Management system, Interactive Dasboard and make you able to generate sales reports",
      images: [
        ldr1, ldr2, ldr3,
      ],
      techStack: ["React", "TailwindCSS", "vite"],
      githubUrl: "https://github.com/doctordoom101/web-prog-uts",
    },
    {
      id: 4,
      title: "Web Scraping: Books to Scrape",
      description: "end-to-end web scraping and data analysis pipeline using Python and Jupyter Notebook.I scraped data from a free site called Books to Scrape(books.toscrape.com), which provides dummy data for practicing scraping.",
      images: [
        ws1, ws2, ws3,
      ],
      techStack: ["Jupyter Notebook", "Python"],
      githubUrl: "https://github.com/doctordoom101/webscraping-book2scrape",
    },
  ]

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1))
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-cyan-900/20 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group"
                onClick={() => openProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.images[0] || "/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-700 text-cyan-300 rounded-md text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700 text-cyan-300 rounded-md text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-slate-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 z-10 bg-slate-800 p-2 rounded-full text-white hover:bg-slate-700 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Carousel */}
            <div className="relative h-64 sm:h-80 md:h-96">
              <img
                src={selectedProject.images[currentImageIndex] || "/placeholder.png"}
                alt={`${selectedProject.title} screenshot`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>

              <p className="text-slate-300 mb-6">{selectedProject.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800 text-cyan-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="flex justify-end">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects
