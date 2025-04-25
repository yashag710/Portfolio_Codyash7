"use client"
import React from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { IoTabletPortraitSharp } from "react-icons/io5";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Gradient background with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0f] via-[#0a0b0f]/95 to-transparent backdrop-blur-sm"></div>
      
      {/* Subtle gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Ambient light effect */}
      <div className="absolute -top-24 left-1/3 w-96 h-32 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-24 right-1/3 w-96 h-32 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16 mx-7">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Works', 'Portfolio'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`text-white/80 text-base font-medium ${montserrat.className}
                  relative group transition-all duration-300 ease-in-out hover:text-white`}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-blue-400 to-transparent 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500/50 via-blue-400/50 to-transparent 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 blur-sm"></span>
              </Link>
            ))}
          </div>

          {/* Minimalist Phone Number UI */}
          <div className={`flex items-center ${montserrat.className}`}>
            <a 
              href="tel:+919696320068" 
              className="relative flex items-center group"
            >
              <IoTabletPortraitSharp className="text-blue-400/70 mr-2 text-lg group-hover:text-blue-400 transition-colors duration-300" />
              <span className='text-sm font-medium tracking-wider text-white/70 group-hover:text-white transition-colors duration-300'>
                +91-9696320068
              </span>
              
              {/* Subtle hover effect line */}
              <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-400/50 to-transparent 
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;