"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0b0f] text-white overflow-hidden">
      {/* Background Image with overlay - Modified blur and brightness */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/working_room.jpg"
          alt="Background image"
          fill
          priority
          className="object-cover object-center filter brightness-[0.6] blur-[0.5px]"
          quality={100}
        />
        {/* Modified gradient overlay - much lighter on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0f]/95 via-[#0a0b0f]/40 to-[#0a0b0f]/10"></div>
      </div>

      {/* Adjusted ambient light effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl opacity-50"></div>
      
      <div className="relative container mx-auto h-screen flex items-center px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left Column - Text Content with adjusted positioning */}
          <div className="w-full lg:w-1/2 space-y-12 z-10 lg:translate-x-20">
            <div className="space-y-6 relative">
              {/* Subtle text glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-70"></div>
              <h1 className="relative text-7xl font-bold tracking-tighter leading-none">
                <span className="text-gray-100 opacity-90 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">YASH</span>
                <br />
                <span className="text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">AGARWAL</span>
              </h1>
              <p className="relative text-xl text-gray-400 tracking-wide font-light">Web & Blockchain Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <Link 
                href="/resume" 
                className="px-10 py-3 bg-transparent border-2 border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-300 text-base font-medium backdrop-blur-sm"
              >
                Resume
              </Link>
              <Link 
                href="/portfolio" 
                className="px-10 py-3 bg-white/10 border-2 border-white/20 rounded-full hover:bg-white/20 hover:border-white/40 hover:text-white transition-all duration-300 text-base font-medium backdrop-blur-sm"
              >
                Portfolio
              </Link>
            </div>

            <div className="flex space-x-4 text-gray-400 pt-4">
              {[FaFacebook, FaTwitter, FaLinkedin,FaGithub].map((Icon, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Now more visible */}
          <div className="w-full lg:w-1/2 h-full relative z-10">
            {/* Add any additional content here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
