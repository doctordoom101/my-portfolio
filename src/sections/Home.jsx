"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Instagram, FileText } from "lucide-react"
import foto2 from "../assets/images/foto2.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">

          {/* Content */}
          <div
            className={`w-full lg:w-3/5 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-medium text-cyan-400">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white">Defanda Yeremia</h1>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300">I CODE FOR FUN.</p>
              <p className="text-xl text-slate-300">
                Undergraduate Informatics Engineering Student at Esa Unggul University
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <a
                  href="https://drive.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors shadow-lg shadow-cyan-900/20"
                >
                  <FileText size={20} />
                  <span>View CV</span>
                </a>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/doctordoom101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors shadow-lg"
                  >
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/defanda-yeremia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors shadow-lg"
                  >
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://instagram.com/fandadefjcr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors shadow-lg"
                  >
                    <Instagram size={24} />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}
          <div
            className={`w-full lg:w-2/5 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-3xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 shadow-xl shadow-cyan-900/20">
                <img src={foto2} alt="Defanda Yeremia" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
