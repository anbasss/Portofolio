'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Home = () => {
  const [text, setText] = useState("Anbas");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = ["Anbas", "Tech Enthusiast", "Web Enthusiast"];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % textArray.length;
    const fullText = textArray[i];

    setText(isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 80 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container max-w-5xl px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left column - Text content */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm <span className="text-blue-400 inline-block border-r-2 border-blue-400 animate-pulse">{text}</span>
          </h1>
          <p className="text-xl mb-6 text-gray-300">
            A passionate developer crafting beautiful web experiences
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Get in touch
          </button>
        </div>

        {/* Right column - Image */}
        <div className="md:w-1/2 order-1 md:order-2">
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
