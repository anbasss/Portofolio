'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';

const SocialMedia = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, href: "https://github.com/anbasss" },
    { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/anbas" },
    { icon: <FiInstagram size={20} />, href: "https://www.instagram.com/annbaass" },
    { icon: <FaTiktok  size={20} />, href: "https://www.tiktok.com/@formforit" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
    >
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-[#1B263B] text-gray-300 rounded-full hover:text-white hover:bg-[#2B3B4F] transition-all duration-300 shadow-lg"
        >
          {social.icon}
        </Link>
      ))}
    </motion.div>
  );
};

export default SocialMedia;
