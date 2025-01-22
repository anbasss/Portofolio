'use client'
import Navbar from '../components/Navbar'
import SocialMedia from "../components/SocialMedia"
import Image from 'next/image'

function Project() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Personal portfolio website built with Next.js and Tailwind CSS",
      image: "/project-1.jpg",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com"
    },
    // Add more projects here
  ]

  return (
    <>
      <Navbar />
      <SocialMedia />
      <section className="min-h-screen bg-[#0D1B2A] pt-20 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">
            My Projects
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#1B263B] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <div className="aspect-[16/9] relative bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
