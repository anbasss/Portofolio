'use client'
import Navbar from '../components/Navbar'
import SocialMedia from "../components/SocialMedia"
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiExpress, SiMongodb } from 'react-icons/si'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1B2A] via-[#1B263B] to-[#2C4159]">
      <Navbar />
      <SocialMedia />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 mt-10 text-white">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Info Section */}
            <div className="bg-[#1B263B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                Who Am I?
              </h2>
              <p className="text-gray-300 mb-4">
                I am a passionate web developer with experience in building
                modern web applications. I love creating intuitive and
                user-friendly interfaces that solve real-world problems.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-[#1B263B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2 text-white">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li className="flex items-center gap-2"><FaReact className="text-blue-400" /> React.js</li>
                    <li className="flex items-center gap-2"><SiNextdotjs className="text-white" /> Next.js</li>
                    <li className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400" /> Tailwind CSS</li>
                    <li className="flex items-center gap-2"><SiTypescript className="text-blue-600" /> JavaScript/TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-white">Backend</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li className="flex items-center gap-2"><FaNodeJs className="text-green-500" /> Node.js</li>
                    <li className="flex items-center gap-2"><SiExpress className="text-white" /> Express.js</li>
                    <li className="flex items-center gap-2"><SiMongodb className="text-green-500" /> MongoDB</li>
                    <li className="flex items-center gap-2"><FaDatabase className="text-blue-400" /> SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
