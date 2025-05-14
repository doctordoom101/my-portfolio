"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const mainRef = useRef(null)

  // Fungsi untuk scroll ke section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Implementasi scroll spy dan scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects"]
      
      // Update active section
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Jika section berada di viewport (dengan toleransi)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
      
      // Calculate scroll progress (0 to 1)
      if (mainRef.current) {
        const scrollTop = window.scrollY
        const scrollHeight = mainRef.current.scrollHeight - window.innerHeight
        const progress = Math.min(scrollTop / scrollHeight, 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate background gradient based on scroll progress
  const calculateBgColor = () => {
    // Start with dark slate, move to slightly lighter slate
    const startColor = [15, 23, 42] // slate-900
    const endColor = [30, 41, 59] // slate-800
    
    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollProgress)
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollProgress)
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollProgress)
    
    return `rgb(${r}, ${g}, ${b})`
  }

  const SectionDivider = ({ isActive }) => {
    return (
      <div className="divider-container max-w-4xl mx-auto px-4 my-4">
        <div className="relative h-0.5 bg-slate-800 overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-700 ease-in-out ${
              isActive ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="min-h-screen text-slate-200 transition-colors duration-300"
      style={{ backgroundColor: calculateBgColor() }}
    >
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      <main ref={mainRef}>
        <section id="home" className="min-h-screen pt-16 pb-8">
          <Home />
          <div className="opacity-15">
            <div className="relative h-0.5 bg-slate-800 overflow-hidden">
              <div className={`absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-300 ${activeSection === "home" ? "w-full" : "w-0"}`}></div>
            </div>
          </div>
        </section>
        
        <section id="about" className="min-h-screen pt-8 pb-8">
          <About />
          <div className="opacity-15">
            <div className="relative h-0.5 bg-slate-800 overflow-hidden">
              <div className={`absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-300 ${activeSection === "about" ? "w-full" : "w-0"}`}></div>
            </div>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen pt-8 pb-16">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App