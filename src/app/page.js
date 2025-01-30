"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [greeting, setGreeting] = useState("Hi");
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    { text: "Hi", language: "English" },
    { text: "你好", language: "Chinese" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Hallo", language: "German" },
    { text: "Привет", language: "Russian" },
    { text: "안녕하세요", language: "Korean" }
  ];

  useEffect(() => {
    // Loading timer
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Increased from 2500 to 4000ms

    // Greeting rotation timer
    const greetingTimer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % greetings.length;
        setGreeting(greetings[nextIndex].text);
        return nextIndex;
      });
    }, 500); // Increased from 2000 to 3500ms

    // Cleanup function
    return () => {
      clearTimeout(loadingTimer);
      clearInterval(greetingTimer);
    };
  }, []); // Empty dependency array

  const waveAnimation = {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-[#0D1B2A] via-[#1B263B] to-[#2C4159]">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ x: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              opacity: 0,
              transition: {
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1]
              }
            }}
            className="fixed inset-0 bg-gradient-to-b from-[#0D1B2A] via-[#1B263B] to-[#2C4159] flex items-center justify-center text-white text-6xl font-bold z-50"
          >
            <motion.span
              key={greeting} // Add key to force re-render
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {greeting}{" "}
            </motion.span>
            <motion.span
              variants={waveAnimation}
              animate="animate"
              className="inline-block origin-bottom-right"
            >
              👋
            </motion.span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1]
            }}
          >
            <Navbar />
            <SocialMedia />
            <div className="pt-16">
              <Home />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
