import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import "./carousel.css";

export default function Carousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel__wrapper">
      <div className="carousel__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="carousel__grid"
          >
            {/* Visual Image/Media */}
            <div className="carousel__image-box">
              <img
                src={slides[current].src}
                alt={slides[current].title}
                className="carousel__image"
              />
              <div className="carousel__image-overlay" />
              <div className="carousel__badge">
                <Award className="carousel__badge-icon" />
                <span>Verified Achievement</span>
              </div>
            </div>

            {/* Content info */}
            <div className="carousel__content">
              <span className="carousel__tag">
                Certification {current + 1} of {slides.length}
              </span>
              <h3 className="carousel__title">
                {slides[current].title}
              </h3>
              <p className="carousel__description">
                {slides[current].description ||
                  "Demonstrated proficiency, technical mastery, and excellence in software development and competitive problem-solving."}
              </p>
              {slides[current].issuer && (
                <div className="carousel__issuer">
                  Issued by: <span className="carousel__issuer-name">{slides[current].issuer}</span>
                </div>
              )}
              {slides[current].button && (
                <div className="carousel__action">
                  <a
                    href={slides[current].link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="carousel__btn-link"
                  >
                    <span>{slides[current].button}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Nav Buttons */}
        <button
          onClick={handlePrev}
          className="carousel__nav-prev"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="carousel__nav-next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="carousel__indicators">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={cn(
                "carousel__dot",
                current === idx ? "carousel__dot--active" : "carousel__dot--inactive"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
