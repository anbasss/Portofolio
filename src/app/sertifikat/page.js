'use client'

import Image from 'next/image'
import Navbar from '../components/Navbar'
import SocialMedia from "../components/SocialMedia" 
import { useState } from 'react'

function SertifikatPage() {
  const [selectedImages, setSelectedImages] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const certificates = [
    {
      id: 1,
      title: "Backend Development for beginner",
      issuer: "Dicoding Indonesia",
      year: "2025",
      image: "/sertifikat/backend/sertifikat_course_261_4141723_241224154811_page-0001.jpg",
      images: [
        "/sertifikat/backend/sertifikat_course_261_4141723_241224154811_page-0001.jpg",
        "/sertifikat/backend/sertifikat_course_261_4141723_241224154811_page-0002.jpg",
      ],
      description: "Front-end Web Development"
    },
    {
      id: 2,
      title: "Docker For Beginner",
      issuer: "Code Politan",
      year: "2024",
      image: "/sertifikat/docker/docker_page-0001.jpg",
      images: [
        "/sertifikat/docker/docker_page-0001.jpg",
      ],
      description: "Front-end Web Development",
      rotate: true // Add this property
    },
    {
      id: 3,
      title: "Git for beginner",
      issuer: "Code Politan",
      year: "2024",
      image: "/sertifikat/git/git_page-0001.jpg",
      images: [
        "/sertifikat/git/git_page-0001.jpg",
      ],
      description: "Front-end Web Development",
      rotate : true
    },
    {
      id: 4,
      title: "Golang for beginner",
      issuer: "Code Politan",
      year: "2023",
      image: "/sertifikat/golang-pemula/golang pemula_page-0001.jpg",
      images: [
        "/sertifikat/golang-pemula/golang pemula_page-0001.jpg",
      ],
      description: "Front-end Web Development",
      rotate : true
    },
    {
      id: 5,
      title: "Javascript for befinner",
      issuer: "Dicoding Indonesia",
      year: "2024",
      image: "/sertifikat/javascript/sertifikat_course_256_4141723_241224100330_page-0001.jpg",
      images: [
        "/sertifikat/javascript/sertifikat_course_256_4141723_241224100330_page-0001.jpg",
        "/sertifikat/javascript/sertifikat_course_256_4141723_241224100330_page-0002.jpg",
        "/sertifikat/javascript/sertifikat_course_256_4141723_241224100330_page-0003.jpg",      ],
      description: "Front-end Web Development"
    },
    {
      id: 6,
      title: "Js sync ",
      issuer: "Code Politan",
      year: "2024",
      image: "/sertifikat/js-asycn/js asycn_page-0001.jpg",
      images: [
       "/sertifikat/js-asycn/js asycn_page-0001.jpg",
      ],
      description: "Front-end Web Development",
      rotate : true
    },
  ]

  const openImages = (images) => {
    setSelectedImages(images)
    setCurrentImageIndex(0)
  }

  const closeImages = () => {
    setSelectedImages(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedImages.length - 1 : prev - 1
    )
  }

  return (
    <>
      <SocialMedia />
      <Navbar />
      <section className="min-h-screen bg-[#0D1B2A] pt-20 pb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-center">
            Sertifikat
          </h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-[#1B263B] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
              >
                <div className="aspect-[4/3] relative bg-gray-50 rounded-lg mb-4 overflow-hidden">
                  <Image 
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className={`object-cover hover:scale-105 transition-transform duration-300 ${
                      cert.rotate ? 'rotate-90' : ''
                    }`}
                    onError={(e) => {
                      console.error(`Failed to load image: ${cert.image}`);
                      e.target.src = '/placeholder.jpg'; // Make sure to add a placeholder image
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
                <p className="text-blue-400 mb-2 font-medium">
                  {cert.issuer} • {cert.year}
                </p>
                <p className="text-sm text-gray-300">{cert.description}</p>
                <div className="mt-4 flex justify-end">
                  <button 
                    className="px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    onClick={() => openImages(cert.images)}
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Images Modal */}
          {selectedImages && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
              <div className="relative w-[95vw] h-[95vh] max-w-5xl bg-white rounded-lg">
                <button 
                  onClick={closeImages}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 text-2xl shadow-lg"
                >
                  ×
                </button>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full text-black w-10 h-10 flex items-center justify-center shadow-lg z-10"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full text-black w-10 h-10 flex items-center justify-center shadow-lg z-10"
                >
                  →
                </button>

                {/* Image Container */}
                <div className="w-full h-full p-4">
                  <Image 
                    src={selectedImages[currentImageIndex]}
                    alt={`Certificate detail ${currentImageIndex + 1}`}
                    fill
                    className={`object-contain p-2 ${
                      certificates.find(cert => cert.images.includes(selectedImages[currentImageIndex]))?.rotate ? 'rotate-90' : ''
                    }`}
                    quality={100}
                    priority
                  />
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-2 rounded-full shadow-lg">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default SertifikatPage
