import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { DRAGGABLE_ABOUT_ITEMS } from "@/data/portfolioData";
import { Sparkles, Move } from "lucide-react";
import "./About.css";

const CARD_ROTATIONS = {
  desktop: {
    hackathon: -4,
    mern: 6,
    ai: -8,
    "problem-solver": 5,
    leetcode: -3,
    coffee: 7,
  },
  mobile: {
    hackathon: -3,
    mern: 3,
    ai: 2,
    "problem-solver": -3,
    leetcode: -2,
    coffee: 3,
  },
};

export function About() {
  const containerRef = useRef(null);
  const [activeZIndex, setActiveZIndex] = useState(20);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024;
    }
    return true;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [cardZIndices, setCardZIndices] = useState(() => {
    const initial = {};
    DRAGGABLE_ABOUT_ITEMS.forEach((item, index) => {
      initial[item.id] = index + 10;
    });
    return initial;
  });

  const bringToFront = useCallback((id) => {
    setActiveZIndex((prevMax) => {
      const nextMax = prevMax + 1;
      setCardZIndices((prev) => ({
        ...prev,
        [id]: nextMax,
      }));
      return nextMax;
    });
  }, []);

  return (
    <section id="about" className="about__section">
      <div className="about__container">
        {/* Section Header */}
        <div className="about__header">
          <h2 className="about__title">
            About Me
          </h2>
          <p className="about__subtitle">
            Drag the cards over the canvas to know about me.
          </p>
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

            {DRAGGABLE_ABOUT_ITEMS.map((item) => {
              const rotation = isDesktop
                ? CARD_ROTATIONS.desktop[item.id] || 0
                : CARD_ROTATIONS.mobile[item.id] || 0;
              const cleanClassName = (item.className || "")
                .replace(/rotate-\[.*?\]/g, "")
                .replace(/right-\[.*?\]/g, "")
                .trim();

              return (
                <DraggableCardBody
                  key={item.id}
                  drag={true}
                  dragConstraints={containerRef}
                  initial={{ rotate: rotation }}
                  style={{
                    zIndex: cardZIndices[item.id] || 10,
                    rotate: rotation,
                  }}
                  onDragStart={() => bringToFront(item.id)}
                  onDragEnd={() => bringToFront(item.id)}
                  className={`about__draggable-card about__draggable-card--${item.id} ${cleanClassName}`}
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
                      <span className="about__card-footer-label">
                        {isDesktop ? "DRAG THE CARD OVER THIS CONSOLE" : "DRAG CARD"}
                      </span>
                    </div>
                  </div>
                </DraggableCardBody>
              );
            })}
          </DraggableCardContainer>
        </div>
      </div>
    </section>
  );
}
