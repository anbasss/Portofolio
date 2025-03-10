'use client'
import Navbar from '../components/Navbar'
import SocialMedia from "../components/SocialMedia"
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion } from "framer-motion"

function Project() {
  const projects = [
    {
      id: 1,
      title: "Website Baca Komik",
      description: "Website untuk membaca komik secara online",
      image: "/project/komikgue1.png",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      githubLink: "https://github.com/anbasss/KomikGue",
      liveLink: "https://komik-gue.vercel.app/"
    },
    {
      id: 2,
      title: "Website Password Generator",
      description: "Website  untuk membuat password secara random yang aman",
      image: "/project/passwordgenerator.png",
      technologies: ["HTML", "CSS", "JS"],
      githubLink: "https://github.com/anbasss/Password-Generator",
      liveLink: "https://anbasss.github.io/Password-Generator/"
    },
    {
      id: 3,
      title: "Website Untuk Membaca Al-Quran",
      description: "Website untuk membaca Al-Quran secara online",
      image: "/project/alquran.png",
      technologies: ["Next.js", "Tailwind CSS", "React"],
      githubLink: "",
      liveLink: "https://al-quran-wheat.vercel.app/"
    },
    {
      id: 4,
      title: "Website Untuk Manajemen Kesehatan",
      description: "Website yang saya kembangkan saat masa magang di Afila Media Karya",
      image: "/project/sikeris.png",
      technologies: ["PHP", "Laravel"],
      githubLink: "",
      liveLink: "https://al-quran-wheat.vercel.app/"
    },
    // Add more projects here
  ]

  return (
    <>
      <Navbar />
      <SocialMedia />
      <section className="min-h-screen bg-[#0D1B2A] pt-20 pb-10">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-8 text-white text-center"
          >
            My Projects
          </motion.h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1 
                }}
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
                    className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaGithub className="text-xl" />
                    GitHub
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
