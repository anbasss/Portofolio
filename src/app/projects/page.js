'use client'
import Navbar from '../component/Navbar'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg"
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      tech: ["Next.js", "Tailwind", "PostgreSQL"],
      image: "/project2.jpg"
    },
    // Add more projects as needed
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D1B2A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">
            My Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1B263B] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200">
                  {/* Add project image here */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
