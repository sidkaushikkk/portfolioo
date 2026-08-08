import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Hero() {
  const servicesList = PERSONAL_INFO.services || [
    "SOFTWARE DEVELOPMENT",
    "FULL STACK ENGINEERING",
    "AI & MACHINE LEARNING",
    "FRONTEND ARCHITECTURE",
    "CLOUD & DATABASE SOLUTIONS",
  ];

  // Repeat items for infinite marquee scrolling effect
  const marqueeItems = [...servicesList, ...servicesList, ...servicesList];

  return (
    <section id="hero" className="relative w-full min-h-[92vh] flex items-center justify-center p-3 sm:p-5 md:p-8 lg:p-10 select-none overflow-hidden">
      {/* Editorial Outer Frame Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[1440px] min-h-[85vh] md:min-h-[88vh] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#c8ad8d]/30 bg-[#141416] p-4 sm:p-6 md:p-10 pb-16 sm:pb-20 md:pb-20 flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        {/* Ambient Radial Gradient & Slatted Light Curtain Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#26252d]/40 via-[#141416] to-[#0b0b0d]" />
        
        {/* Slatted curtain shadow texture simulation */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 45px, transparent 45px, transparent 130px)`
          }}
        />

        {/* 1. TOP CENTER: Rounded Pill Scrolling Service/Category Strip */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-30 mx-auto w-full max-w-2xl sm:max-w-3xl overflow-hidden rounded-full border border-[#c8ad8d]/25 bg-[#202026]/80 backdrop-blur-xl py-2 px-4 shadow-lg"
        >
          <div className="flex w-max animate-marquee space-x-6 whitespace-nowrap">
            {marqueeItems.map((service, idx) => (
              <div key={idx} className="flex items-center space-x-6">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#c8ad8d] font-sans">
                  {service}
                </span>
                <span className="text-[#c8ad8d]/50 text-xs">&bull;</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MIDDLE ART-DIRECTED GRID COMPOSITION */}
        <div className="relative z-10 my-auto w-full min-h-[460px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[620px] flex flex-col justify-between pt-2">
          
          {/* TOP ROW: Upper Left Identity & Upper Right Tagline */}
          <div className="relative z-30 flex flex-row items-start justify-between w-full pt-2 md:pt-4 px-2 sm:px-4">
            
            {/* Upper Left Identity Block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col space-y-1 text-left max-w-xs sm:max-w-sm md:max-w-md"
            >
              <h1 className="font-syne font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#e5d4c0] via-[#c8ad8d] to-[#b89975] leading-none drop-shadow-sm">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#a39382] font-normal tracking-wide leading-snug">
                {PERSONAL_INFO.subtitle}
              </p>
            </motion.div>

            {/* Upper Right Tagline Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-end text-right space-y-0.5 max-w-[180px] sm:max-w-xs md:max-w-sm"
            >
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#b8a892] font-light tracking-wide leading-tight">
                heyy there ,
              </p>
              <p className="font-sans text-xs sm:text-sm md:text-base text-[#b8a892] font-light tracking-wide leading-tight">
                i am a software developer
              </p>
            </motion.div>
          </div>

          {/* OVERSIZED TYPOGRAPHY (BEHIND PORTRAIT - LAYER Z-10) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-syne font-black uppercase text-[#9e8668] tracking-tighter leading-none text-[11.5vw] sm:text-[12.5vw] md:text-[13vw] lg:text-[13.5vw] xl:text-[185px] select-none text-center w-full transform -translate-y-3 sm:-translate-y-5"
              style={{
                textShadow: '0 4px 25px rgba(0,0,0,0.5)'
              }}
            >
              DEVELOPER
            </motion.h2>
          </div>

          {/* PORTRAIT CUTOUT (OVERLAPPING TYPOGRAPHY - LAYER Z-20) */}
          <div className="absolute inset-0 flex items-end justify-center z-20 pointer-events-none pb-0 sm:pb-2">
            <motion.img
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="h-[50vh] sm:h-[58vh] md:h-[64vh] lg:h-[70vh] max-h-[640px] object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)] filter contrast-[1.05]"
            />
          </div>

          {/* BOTTOM ROW (FOREGROUND - LAYER Z-30): Social Links & Large Role Title */}
          <div className="relative z-30 flex flex-col md:flex-row items-end justify-between w-full pb-2 md:pb-4 px-2 sm:px-4 gap-4 mt-auto">
            
            {/* Social Links (Lower Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3 pointer-events-auto"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 rounded-xl border border-[#c8ad8d]/30 bg-[#1c1b20]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-[#dfcfbe] shadow-lg backdrop-blur-md transition-all hover:border-[#c8ad8d] hover:bg-[#25242a] hover:text-white"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#2563eb] text-white">
                  <Github className="h-3.5 w-3.5" />
                </div>
                <span>Sidhant Kaushik</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 rounded-xl border border-[#c8ad8d]/30 bg-[#1c1b20]/90 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium text-[#dfcfbe] shadow-lg backdrop-blur-md transition-all hover:border-[#c8ad8d] hover:bg-[#25242a] hover:text-white"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#e1306c] text-white">
                  <Linkedin className="h-3.5 w-3.5" />
                </div>
                <span>sidhant-kaushik</span>
              </a>
            </motion.div>

            {/* Large Role Title (Lower Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-right pointer-events-auto"
            >
              <h3 className="font-syne font-extrabold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#e5d4c0] via-[#c8ad8d] to-[#b89975] leading-none drop-shadow-md">
                SOFTWARE DEVELOPER
              </h3>
            </motion.div>
          </div>
        </div>

        {/* 4. BOTTOM LONG DESCRIPTIVE PARAGRAPH (LAYER Z-30) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative z-30 w-full pt-4 border-t border-[#c8ad8d]/20 px-2 sm:px-4"
        >
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#a39382] font-normal leading-relaxed text-left max-w-6xl tracking-wide">
            demo description. Between logic and creativity lies the space where I write software. From building scalable backend architectures to shaping digital interfaces, my work revolves around clarity, structure, and high-performance execution.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
