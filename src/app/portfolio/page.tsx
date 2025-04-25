"use client"
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar';
import { FaCode, FaLaptopCode, FaRegFileCode} from 'react-icons/fa';
import { IoBookOutline, IoAirplaneOutline, IoGameControllerOutline, IoCamera } from 'react-icons/io5';
import { motion } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Skill data
const softwareSkills = [
  {
    name: 'React',
    icon: FaCode,
    progress: 90
  },
  {
    name: 'Node.js',
    icon: FaLaptopCode,
    progress: 85
  },
  {
    name: 'TypeScript',
    icon: FaRegFileCode,
    progress: 80
  },
  {
    name: 'C++',
    icon: FaRegFileCode,
    progress: 80
  },
  {
    name: 'NextJs',
    icon: FaRegFileCode,
    progress: 80
  },
];

const experience = [
  {
    company: 'TEAM GREEN ORGANIZATION',
    position: 'Junior Web Team',
    period: '2025 - Present',
    logo: '/images/company1.png'
  },
  {
    company: 'CODEBASE(CLUB IIIT KOTA)',
    position: 'Web Lead',
    period: '2024 - Present',
    logo: '/images/company1.png'
  },
  {
    company: 'MANTECH',
    position: 'App Development(UI)',
    period: '2025(APRIL) - 2025(MAY)',
    logo: '/images/company1.png'
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const slideIn = {
  initial: { 
    x: -50,
    opacity: 0,
    filter: "blur(5px)",
    scale: 0.95
  },
  animate: { 
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

export default function Portfolio() {
  const [isSkillsHovered, setIsSkillsHovered] = useState(false);
  const [isLanguagesHovered, setIsLanguagesHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0b0f] text-white overflow-x-hidden">
      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Left Column */}
          <motion.div 
            variants={slideIn}
            className="space-y-8"
          >
            {/* Software Skills */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onHoverStart={() => setIsSkillsHovered(true)}
              onHoverEnd={() => setIsSkillsHovered(false)}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <div className="relative inline-block mb-6">
                <h2 className={`text-xl font-semibold ${montserrat.className}`}>
                  SOFTWARE SKILLS
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: isSkillsHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: isSkillsHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {softwareSkills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="group"
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <skill.icon className="text-blue-400" />
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className={`ml-auto text-xs text-gray-400 transition-opacity duration-300 ${isSkillsHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="h-[2px] bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isSkillsHovered ? { 
                          width: `${skill.progress}%`,
                          transition: { 
                            duration: 0.7,
                            ease: "easeOut",
                            delay: index * 0.05
                          }
                        } : { 
                          width: 0,
                          transition: { 
                            duration: 0.3,
                            ease: "easeIn" 
                          }
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                    <motion.div
                      className="mt-2 text-xs text-gray-400 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: hoveredCard === index ? "auto" : 0,
                        opacity: hoveredCard === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="leading-relaxed">
                        {skill.description || "Click to learn more about this skill"}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Languages
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onHoverStart={() => setIsLanguagesHovered(true)}
              onHoverEnd={() => setIsLanguagesHovered(false)}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <div className="relative inline-block mb-6">
                <h2 className={`text-xl font-semibold ${montserrat.className}`}>
                  LANGUAGES
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                  initial={{ width: "0%" }}
                  animate={{ width: isLanguagesHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                {/* Glow effect */}
                {/* <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                  initial={{ width: "0%" }}
                  animate={{ width: isLanguagesHovered ? "100%" : "0%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-6"
              >
                {languages.map((lang, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-300">{lang.name}</span>
                      <span className={`ml-auto text-xs text-gray-400 transition-opacity duration-300 ${isLanguagesHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {lang.progress}%
                      </span>
                    </div>
                    <div className="h-[1px] bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isLanguagesHovered ? { 
                          width: `${lang.progress}%`,
                          transition: { 
                            duration: 0.7,
                            ease: "easeOut",
                            delay: index * 0.05
                          }
                        } : { 
                          width: 0,
                          transition: { 
                            duration: 0.3,
                            ease: "easeIn" 
                          }
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}
          </motion.div>

          {/* Middle Column - Experience */}
          <motion.div 
            variants={slideIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Experience */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <div className="relative inline-block mb-6">
                <h2 className={`text-xl font-semibold ${montserrat.className}`}>
                  EXPERIENCE
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                {/* Glow effect */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <div className="relative">
                <motion.div 
                  className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20"
                  initial={{ height: 0, y: "100%" }}
                  animate={{ height: '100%', y: 0 }}
                  transition={{ 
                    duration: 2,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.3
                  }}
                />

                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                  className="space-y-8"
                >
                  {experience.map((exp, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="relative pl-16 group"
                    >
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.2 + 1.7,
                          duration: 0.5
                        }}
                      >
                        <h3 className="text-lg font-medium text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {exp.position}
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                          {exp.period}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            variants={slideIn}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* What Can I Do */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <div className="relative inline-block mb-4">
                <h2 className={`text-2xl font-semibold ${montserrat.className} text-white/90`}>
                  WHAT CAN I DO ?
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 gap-1"
              >
                {[
                  "Frontend Development(Web)",
                  "Backend Development(Web)",
                  "UI/UX"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.p 
                      className="text-gray-400 text-base tracking-wide group-hover:text-gray-200 transition-colors duration-300"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Hobbies & Interests */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <h2 className={`text-xl font-semibold mb-6 ${montserrat.className}`}>HOBBIES & INTERESTS</h2>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: IoBookOutline, text: 'Reading' },
                  { icon: IoCamera, text: 'Photography' },
                  { icon: IoGameControllerOutline, text: 'Gaming' },
                  { icon: IoAirplaneOutline, text: 'Travel' }
                ].map((hobby, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-gray-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <hobby.icon className="text-blue-400" size={20} />
                    <span className="text-sm">{hobby.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            {/* Personal Skills */}
            {/* <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm clip-edges p-6 shadow-lg relative before:absolute before:inset-0 before:bg-blue-500/5 before:-z-10 before:backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
              }}
            >
              <div className="relative inline-block mb-6">
                <h2 className={`text-xl font-semibold ${montserrat.className}`}>
                  PERSONAL SKILLS
                </h2>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
        
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent blur-sm"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                {['Creativity', 'Team Work', 'Organization'].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-blue-500"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      />
                      <motion.span 
                        className="text-sm text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        {skill}
                      </motion.span>
                      <motion.div
                        className="h-[1px] flex-1 bg-gray-700/50"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}