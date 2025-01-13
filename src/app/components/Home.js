'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Home = () => {
  const [displayText, setDisplayText] = useState("Anbas");
  const texts = ["Anbas", "Tech Enthusiast", "Web Enthusiast"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingInterval = 150;
    const deletingInterval = 100;
    const pauseInterval = 2000;

    const typewriter = () => {
      const currentText = texts[currentIndex];
      
      if (!isDeleting) {
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseInterval);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length + 1));
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return;
        }
        setDisplayText(currentText.substring(0, displayText.length - 1));
      }
    };

    const timer = setTimeout(
      typewriter,
      isDeleting ? deletingInterval : typingInterval
    );

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container max-w-5xl px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left column - Text content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-blue-400 inline-block min-w-[200px]">{displayText}</span>
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            A passionate developer crafting beautiful web experiences
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get in touch
          </button>
        </div>

        {/* Right column - Image */}
        <div className="md:w-1/2">
          <div className="relative w-[400px] h-[400px] mx-auto">
            <Image
              src="/luffy.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-blue-400 
              shadow-[0_0_15px_#60A5FA,0_0_ 50px_#60A5FA,0_0_100px_#60A5FA] animate-pulse"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
