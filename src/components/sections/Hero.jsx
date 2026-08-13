import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin } from "lucide-react";
import "./Hero.css";

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
    <section id="hero" className="hero-section">
      {/* Editorial Outer Frame Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hero-card"
      >
        {/* Ambient Radial Gradient & Slatted Light Curtain Background */}
        <div className="hero-ambient-bg" />
        <div className="hero-curtain-texture" />

        {/* 1. TOP CENTER: Rounded Pill Scrolling Service/Category Strip */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hero-top-pill"
        >
          <div className="hero-marquee-track">
            {marqueeItems.map((service, idx) => (
              <div key={idx} className="hero-marquee-item-wrapper">
                <span className="hero-marquee-text">
                  {service}
                </span>
                <span className="hero-marquee-dot">&bull;</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* MIDDLE ART-DIRECTED GRID COMPOSITION */}
        <div className="hero-middle-grid">
          
          {/* TOP ROW: Upper Left Identity & Upper Right Tagline */}
          <div className="hero-top-row">
            
            {/* Upper Left Identity Block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-identity-block"
            >
              <h1 className="hero-identity-name">
                {PERSONAL_INFO.name}
              </h1>
              <p className="hero-identity-subtitle">
                {PERSONAL_INFO.subtitle}
              </p>
            </motion.div>

            {/* Upper Right Tagline Block */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-tagline-block"
            >
              <p className="hero-tagline-line">
                Heyy There ,
              </p>
              <p className="hero-tagline-line">
                I am a software developer
              </p>
            </motion.div>
          </div>

          {/* OVERSIZED TYPOGRAPHY (BEHIND PORTRAIT - LAYER Z-10) */}
          <div className="hero-oversized-wrapper">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 0.85, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero-oversized-text"
            >
              SOFTWARE
            </motion.h2>
          </div>

          {/* PORTRAIT CUTOUT (OVERLAPPING TYPOGRAPHY - LAYER Z-20) */}
          <div className="hero-portrait-wrapper">
            <motion.img
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={PERSONAL_INFO.avatar}
              alt={PERSONAL_INFO.name}
              className="hero-portrait-img"
            />
          </div>

          {/* BOTTOM ROW (FOREGROUND - LAYER Z-30): Social Links & Large Role Title */}
          <div className="hero-bottom-row">
            
            {/* Social Links (Lower Left) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-social-list"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-badge"
              >
                <div className="hero-badge-icon-box github">
                  <Github />
                </div>
                <span>sidkaushikkk</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-badge"
              >
                <div className="hero-badge-icon-box linkedin">
                  <Linkedin />
                </div>
                <span>sidhantkaushik</span>
              </a>
            </motion.div>

            {/* Large Role Title (Lower Right) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-role-block"
            >
              <h3 className="hero-role-title">
                DEVELOPER
              </h3>
            </motion.div>
          </div>
        </div>

        {/* 4. BOTTOM LONG DESCRIPTIVE PARAGRAPH (LAYER Z-30) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="hero-bottom-description-box"
        >
          <p className="hero-bottom-description-text">
            Between logic and creativity lies the space where I write software. From building scalable backend architectures to shaping digital interfaces, my work revolves around clarity, structure, and high-performance execution.
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
}
