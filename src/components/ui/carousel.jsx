import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { cn } from "@/lib/utils";
import "./carousel.css";

export default function Carousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

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
            {/* Visual Image/Media - Clickable to open animatedModal */}
            <div
              onClick={() => setSelectedImage(slides[current])}
              className="carousel__image-box cursor-pointer group"
              title="Click to view full image"
            >
              <img
                src={slides[current].src}
                alt={slides[current].title}
                className="carousel__image"
              />
              <div className="carousel__image-overlay" />
              <div className="carousel__image-expand-badge">
                <span>Click to view image</span>
              </div>
            </div>

            {/* Content info */}
            <div className="carousel__content">
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

      {/* Animated Modal for Clicked Image */}
      <Modal open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        {selectedImage && (
          <ModalBody className="carousel__modal-container">
            <ModalContent className="p-2 sm:p-4">
              <div className="carousel__modal-header">
                <h3 className="carousel__modal-title">{selectedImage.title}</h3>
                {selectedImage.issuer && (
                  <p className="carousel__modal-issuer">Issued by: {selectedImage.issuer}</p>
                )}
              </div>
              <div className="carousel__modal-image-wrapper">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="carousel__modal-image"
                />
              </div>
            </ModalContent>
          </ModalBody>
        )}
      </Modal>
    </div>
  );
}
