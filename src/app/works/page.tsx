'use client';

import React, { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { motion, easeInOut } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

// Project data
const projects = [
  {
    title: 'Hackathon Site',
    description: 'I built a clean and interactive hackathon website using React and Tailwind CSS. It made it super easy for teams to register, check event details, and stay updated in real-time.',
    image: '/images/hackthechain5.jpg',
    link: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'I created a smooth and user-friendly e-commerce web app for selling bags, where users can easily browse, add to cart, and checkout. The design is clean, responsive, and focused on a seamless shopping experience.',
    image: '/images/bag.jpg',
    link: '#'
  },
  {
    title: 'Fraud Detection System',
    description: 'I developed a fraud detection system that analyzes transaction patterns to flag suspicious activity. It uses machine learning to improve accuracy over time and help prevent financial fraud in real-time.',
    image: '/images/fraud2.jpg',
    link: '#'
  }
];

// Animation variants
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const underlineVariants = {
  hidden: { width: "0%" },
  visible: { 
    width: "100%", 
    transition: { 
      duration: 0.8,
      delay: 0.4,
      ease: "easeInOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    x: -50,
    opacity: 0,
    filter: "blur(5px)",
    scale: 0.95
  },
  visible: { 
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 0.8,
      duration: 0.8
    }
  }
};

const softwareSkills = [
  {
    name: 'React',
    icon: FaCode,
    progress: 90,
    description: 'Proficient in building modern, responsive web applications using React hooks and context API.'
  },
  // ... other skills with descriptions
];

export default function Works() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="h-screen bg-[#0a0b0f] text-white overflow-hidden">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="container mx-auto px-4 h-[calc(100vh-5rem)] flex flex-col justify-center pt-28 items-center"
      >
        {/* Header with zoom animation */}
        <motion.div
          className="text-center mb-12 relative"
        >
          <div className="relative inline-block">
            <motion.h1 
              variants={headerVariants}
              initial="hidden"
              animate="visible"
              className={`text-3xl sm:text-4xl font-bold tracking-tight ${montserrat.className}`}
            >
              MY WORKS
            </motion.h1>
            <motion.div 
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
            <motion.div 
              className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            ></motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm mt-4"
          >
            Showcasing some of my best work
          </motion.p>
        </motion.div>

        {/* Projects Grid with enhanced staggered animations */}
        <motion.div
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-6 lg:px-12 w-full"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="group relative overflow-hidden w-full max-w-xs mx-auto"
              whileHover={{ scale: 1.06 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Link href={project.link} className="block relative">
                <div className="relative w-full h-80 sm:h-96">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-[#0a0b0f]/90 via-[#0a0b0f]/60 to-transparent">
                  <h3 className={`text-lg font-semibold mb-2 ${montserrat.className}`}>{project.title}</h3>
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: hoveredProject === index ? "auto" : 0,
                      opacity: hoveredProject === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
