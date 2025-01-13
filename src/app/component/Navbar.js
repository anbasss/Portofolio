'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Sertifikat", path: "/sertifikat" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed w-full  backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between  items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Anbas
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.title}
                href={link.path}
                className={`text-white hover:text-blue-600 transition-colors ${
                  pathname === link.path ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className={`block py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${
                  pathname === link.path ? 'text-blue-600 bg-blue-50' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar