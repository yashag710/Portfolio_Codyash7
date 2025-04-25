"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export default function About() {
  // Ref for the cursor follower effect
  const cursorFollowerRef = useRef(null);
  
  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (!cursorFollowerRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Add some delay and smoothing to the movement
      cursorFollowerRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Text animation variants
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom : any) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    })
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      rotateY: 5
    },
    visible: { 
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const locationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.8,
        ease: [0.34, 1.56, 0.64, 1] // Spring-like bounce effect
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

  return (
    <main className="relative min-h-screen bg-[#0a0b0f] text-white overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/20 via-[#0a0b0f] to-[#0a0b0f]"></div>
      <div className="absolute inset-0 bg-[#0a0b0f]/30 mix-blend-multiply"></div>
      
      {/* Animated background glow effect */}
      <div 
        ref={cursorFollowerRef}
        className="hidden lg:block absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        style={{ 
          transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
          willChange: "transform",
          zIndex: 0 
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <div className="relative container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 min-h-screen z-10">
        <div className="max-w-6xl mx-auto h-full py-4">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left Column - Text Content */}
            <div className="w-full lg:w-[55%] space-y-4 sm:space-y-6 order-2 lg:order-1">

              {/* Header Section */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                <div className="relative inline-block">
                  <motion.h1 
                    className={`text-3xl sm:text-4xl font-bold tracking-tight ${montserrat.className}`}
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    ABOUT
                  </motion.h1>
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                  ></motion.div>
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                    variants={underlineVariants}
                    initial="hidden"
                    animate="visible"
                  ></motion.div>
                </div>
                <motion.p 
                  className="text-gray-400 text-xs sm:text-sm"
                  variants={paragraphVariants}
                  custom={1}
                  initial="hidden"
                  animate="visible"
                >
                  yashag1810@gmail.com
                </motion.p>
              </div>
              <div className={`prose prose-invert max-w-none ${nunito.className}`}>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300"
                  variants={paragraphVariants}
                  custom={2}
                  initial="hidden"
                  animate="visible"
                >
                  I&apos;m a passionate and driven developer with a strong focus on creating impactful digital experiences. With a background in full-stack web development, I love building efficient, scalable, and user-friendly applications that solve real-world problems.
                </motion.p>
                <motion.p 
                  className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mt-4 sm:mt-6"
                  variants={paragraphVariants}
                  custom={3}
                  initial="hidden"
                  animate="visible"
                >
                  I can implement effective coding Strategies at local
                  and global levels. My greatest strength is
                  business awareness, which enables me to
                  permanently streamline infrastructure
                  and applications.
                </motion.p>
              </div>

              {/* Location */}
              <motion.div 
                className="pt-4 sm:pt-8"
                variants={locationVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="inline-flex items-center px-4 sm:px-6 py-2 border border-gray-700 rounded-full text-sm sm:text-base relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Animated hover effect for location */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="text-gray-400 relative z-10">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=IIIT+Kota" 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className="hover:text-blue-300 transition-colors duration-300"
                    >
                      Kota, Rajasthan
                    </a>
                  </span>
                  <span className="mx-2 sm:mx-4 text-gray-600">|</span>
                  <span className="text-gray-400 relative z-10">Kuber Extension</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Image */}
            <motion.div 
              className="relative w-full lg:w-[45%] aspect-[3/4] max-h-[65vh] order-1 lg:order-2"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0">
                {/* Image container */}
                <div className="relative h-full w-full">
                  <Image
                    src="/images/yash_image.jpg"
                    alt="Personal portrait"
                    fill
                    className="object-cover object-[center_top] brightness-90"
                    priority
                    sizes="(max-width: 768px) 100vw, 45vw"
                    quality={100}
                  />
                  
                  {/* Enhanced gradient edges for seamless blending */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0f]/80 via-transparent to-[#0a0b0f]/80"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 via-transparent to-[#0a0b0f]"></div>
                  <div className="absolute inset-0 bg-[#0a0b0f]/10"></div>
                  
                  {/* Corner gradients for better blending */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-radial from-[#0a0b0f] to-transparent"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-[#0a0b0f] to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0a0b0f] to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}