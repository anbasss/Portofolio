'use client'

import Link from 'next/link'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed w-full bg-[#0D1B2A] z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-white font-bold text-xl">
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
              className="text-gray-300 hover:text-white hover:bg-[#1B263B] px-3 py-2 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-300 hover:text-white hover:bg-[#1B263B] px-3 py-2 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link 
              href="/project" 
              className="text-gray-300 hover:text-white hover:bg-[#1B263B] px-3 py-2 rounded-lg transition-colors"
            >
              Project
            </Link>
            <Link 
              href="/sertifikat" 
              className="text-gray-300 hover:text-white hover:bg-[#1B263B] px-3 py-2 rounded-lg transition-colors"
            >
              Sertifikat
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-64 opacity-100' 
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-[#1B263B] rounded-lg mt-2 py-2 shadow-lg">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white hover:bg-[#2B3B4B] px-4 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white hover:bg-[#2B3B4B] px-4 py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/project"
              className="block text-gray-300 hover:text-white hover:bg-[#2B3B4B] px-4 py-2"
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link
              href="/sertifikat"
              className="block text-gray-300 hover:text-white hover:bg-[#2B3B4B] px-4 py-2"
              onClick={toggleMenu}
            >
              Sertifikat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
