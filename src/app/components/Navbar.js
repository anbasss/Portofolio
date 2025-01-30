'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    // Set initial visibility
    if (navRef.current) {
      navRef.current.style.visibility = 'visible'
    }

    // Navbar entrance animation
    gsap.fromTo(navRef.current,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    )

    // Links animation
    gsap.fromTo(".nav-link",
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5
      }
    )
  }, [])

  useEffect(() => {
    // Mobile menu animation
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
          opacity: 1
        })
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
          opacity: 0
        })
      }
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav 
      ref={navRef} 
      className="fixed w-full bg-[#0D1B2A] z-50"
      style={{ visibility: 'hidden' }} // Initial hidden state
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl nav-link">
            Anbas
          </Link>

          {/* Hamburger button */}
          <button
            className="md:hidden text-white p-2 hover:bg-[#1B263B] rounded-lg transition-colors"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-white"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-white"
            >
              About
            </Link>
            <Link 
              href="/project" 
              className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-white"
            >
              Project
            </Link>
            <Link 
              href="/sertifikat" 
              className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-white"
            >
              Sertifikat
            </Link>
            <Link 
              href="/galery" 
              className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-white"
            >
              Galery
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          ref={menuRef}
          className="md:hidden overflow-hidden"
          style={{ height: 0 }}
        >
          <div className="bg-[#1B263B] rounded-lg mt-2 py-2 shadow-lg">
            <Link
              href="/"
              className="nav-link block text-gray-300 hover:text-white px-4 py-2 transition-all duration-300 hover:brightness-125"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="nav-link block text-gray-300 hover:text-white px-4 py-2 transition-all duration-300 hover:brightness-125"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/project"
              className="nav-link block text-gray-300 hover:text-white px-4 py-2 transition-all duration-300 hover:brightness-125"
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link
              href="/sertifikat"
              className="nav-link block text-gray-300 hover:text-white px-4 py-2 transition-all duration-300 hover:brightness-125"
              onClick={toggleMenu}
            >
              Sertifikat
            </Link>
            <Link
              href="/galery" 
              className="nav-link block text-gray-300 hover:text-white px-4 py-2 transition-all duration-300 hover:brightness-125"
              onClick={toggleMenu}
            >
              Galery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
