'use client'
import Navbar from '../components/Navbar'
import SocialMedia from "../components/SocialMedia"

function About() {
  return (
    <>
      <Navbar />
      <SocialMedia />
      <main className="min-h-screen bg-[#0D1B2A] py-12 px-4 sm:px-6 lg:px-8">
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
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>JavaScript/TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-white">Backend</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default About
