"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/90 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      } rounded-full w-auto max-w-2xl`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-xl font-bold px-6 text-cyan-400 hover:text-cyan-300 transition-colors">
          Defanda<span className="text-slate-200">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {["home", "about", "projects"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`capitalize px-4 py-2 rounded-full hover:bg-slate-800 hover:text-cyan-400 transition-all ${
                activeSection === section 
                  ? "text-cyan-400 font-medium bg-slate-800/80" 
                  : "text-slate-300"
              }`}
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-sm rounded-2xl py-3 shadow-lg border border-slate-800/50">
          <div className="flex flex-col">
            {["home", "about", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`capitalize text-lg py-3 px-6 hover:bg-slate-800 hover:text-cyan-400 transition-all ${
                  activeSection === section 
                    ? "text-cyan-400 font-medium bg-slate-800/50" 
                    : "text-slate-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar