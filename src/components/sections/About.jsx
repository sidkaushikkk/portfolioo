import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { DRAGGABLE_ABOUT_ITEMS } from "@/data/portfolioData";
import { Sparkles, Move } from "lucide-react";
import "./About.css";

export function About() {
  const containerRef = useRef(null);
  const [activeZIndex, setActiveZIndex] = useState(10);
  const [cardZIndices, setCardZIndices] = useState(() => {
    const initial = {};
    DRAGGABLE_ABOUT_ITEMS.forEach((item, index) => {
      initial[item.id] = index + 10;
    });
    return initial;
  });

  const bringToFront = (id) => {
    setActiveZIndex((prevMax) => {
      const nextMax = prevMax + 1;
      setCardZIndices((prev) => ({
        ...prev,
        [id]: nextMax,
      }));
      return nextMax;
    });
  };

  return (
    <section id="about" className="about__section">
      <div className="about__container">
        {/* Section Header */}
        <div className="about__header">
          <h2 className="about__title">
            About Me
          </h2>
        </div>

        {/* Draggable Cards Playground */}
        <div className="about__canvas-wrapper">
          <DraggableCardContainer ref={containerRef} className="about__card-container">
            <div className="about__instruction">
              <Move className="about__instruction-icon" />
              <span>Interactive Draggable Canvas — Drag any card</span>
            </div>

            <div className="about__background-text-wrapper">
              <span className="about__background-text">
                SID KAUSHIK
              </span>
            </div>

            {DRAGGABLE_ABOUT_ITEMS.map((item) => (
              <DraggableCardBody
                key={item.id}
                dragConstraints={containerRef}
                style={{ "--about-card-z-index": cardZIndices[item.id] || 10 }}
                onPointerDown={() => bringToFront(item.id)}
                onDragStart={() => bringToFront(item.id)}
                className={`about__draggable-card ${item.className}`}
              >
                <div className={`about__card-inner about__card-inner--${item.id}`}>
                  {item.image && (
                    <div className="about__card-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable={false}
                        className="about__card-image"
                      />
                      <div className="about__card-image-overlay" />
                    </div>
                  )}
                  <h3 className="about__card-title">
                    {item.title}
                  </h3>
                  <p className="about__card-subtitle">
                    {item.subtitle}
                  </p>
                  <div className="about__card-footer">
                    <span className="about__card-footer-label">DRAG THE CARD OVER THIS CONSOLE</span>
                  </div>
                </div>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
}
