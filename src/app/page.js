"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Increased slightly for smoother transition
  }, []);

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
    <div className="min-h-screen bg-[#0D1B2A] overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ x: 0, opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: "-100%", opacity: 0.8 }}
            transition={{ 
              duration: 1,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="fixed inset-0 bg-[#0D1B2A] flex items-center justify-center text-white text-6xl font-bold z-50"
          >
            Hi{" "}
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
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 1,
              ease: [0.645, 0.045, 0.355, 1],
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
