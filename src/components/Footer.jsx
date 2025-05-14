import { Github, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400">© {new Date().getFullYear()} Defanda Yeremia. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/doctordoom101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/defanda-yeremia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://instagram.com/fandadefjcr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
