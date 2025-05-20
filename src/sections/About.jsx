"use client"

import { useState, useEffect } from "react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    languages: ["Python", "Go", "Javascript", "C++", "Java"],
    frameworks: ["Django", "Flask", "Gin", "React.js", "Tailwind CSS", "Bootstrap"],
    tools: ["Git", "VS Code", "Jupyter Notebook", "Figma", "Docker", "Apache Airfow", "DBT"],
    databases: ["MySQL", "PostgreSQL", "BigQuery", "Snowflake"],
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cyan-300">Defanda Yeremia</h3>

              <div className="space-y-4 text-slate-300">
                <p>
                    I'm an IT student who’s currently diving into the world of Data Engineering.
                    Right now, I'm learning how to work with data pipelines, databases, cloud tools, and anything that helps move, clean, or store data efficiently.
                </p>
                <p>
                    I enjoy using Python, SQL, Airflow, and playing around with tools like Docker and Airflow. Still learning every day and always open to new stuff!
                </p>
              </div>

              <div className="pt-4">
                <h4 className="text-xl font-semibold text-cyan-300 mb-3">Education</h4>
                <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-4">
                    {/* First education entry */}
                    <div>
                        <h5 className="font-medium text-white">Esa Unggul University</h5>
                        <p className="text-slate-400">IT Student • 2023 - Present</p>
                    </div>
                    
                    {/* Second education entry */}
                    <div>
                        <h5 className="font-medium text-white">SMA Negeri 2 Jakarta</h5>
                        <p className="text-slate-400">Science • 2020 - 2023</p>
                    </div>
                </div>
            </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-300">My Skills</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-slate-800/50 p-5 rounded-lg border border-slate-700">
                    <h4 className="text-lg font-semibold text-white capitalize mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-700 text-cyan-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
