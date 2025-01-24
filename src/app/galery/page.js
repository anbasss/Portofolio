'use client'
import Image from 'next/image'
import styles from './gallery.module.css'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Gallery = () => {
  const images = [
    { id: 1, src: '/fotomeme/waduh.jpg', alt: 'Gallery Image 1' },
    { id: 2, src: '/fotomeme/tertawa.jpg', alt: 'Gallery Image 2' },
    { id:32, src: '/fotomeme/minggir.jpg', alt: 'Gallery Image 2' },

    // Add more images as needed
  ]

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center mt-8">My Gallery</h1>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
              className="mb-4 relative group"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
