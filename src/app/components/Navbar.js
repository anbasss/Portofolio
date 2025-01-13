'use client'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            Anbas
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </Link>
            <Link href="/sertifikat" className="text-gray-700 hover:text-blue-600">
              Sertifikat
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
