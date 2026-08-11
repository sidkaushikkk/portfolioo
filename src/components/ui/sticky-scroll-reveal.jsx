import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./sticky-scroll-reveal.css";

export function StickyScroll({ content, contentClassName }) {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  const backgroundColors = [
    "var(--slate-900, #09090b)",
    "var(--black, #000000)",
    "var(--neutral-900, #111115)",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500, #06b6d4), var(--emerald-500, #10b981))",
    "linear-gradient(to bottom right, var(--pink-500, #ec4899), var(--indigo-500, #6366f1))",
    "linear-gradient(to bottom right, var(--orange-500, #f97316), var(--yellow-500, #eab308))",
    "linear-gradient(to bottom right, var(--purple-500, #a855f7), var(--blue-500, #3b82f6))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollTop / maxScroll)));
    }

    const cardsCount = content.length;
    const cardLength = maxScroll / cardsCount;
    const currentCard = Math.min(
      cardsCount - 1,
      Math.floor((scrollTop + cardLength / 2) / cardLength)
    );
    setActiveCard(Math.max(0, currentCard));
  };

  return (
    <motion.div
      ref={ref}
      onScroll={handleScroll}
      className={cn("sticky-scroll__container", contentClassName)}
    >
      <div className="sticky-scroll__left-col">
        <div className="sticky-scroll__content-list">
          {content.map((item, index) => (
            <div key={item.title + index} className="sticky-scroll__item">
              {item.badge && (
                <span className="sticky-scroll__badge">
                  {item.badge}
                </span>
              )}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll__item-title"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="sticky-scroll__item-desc"
              >
                {item.description}
              </motion.p>
              {item.tech && (
                <div className="sticky-scroll__tech-list">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="sticky-scroll__tech-pill"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>

        {/* Scroll progress line on left edge */}
        <div className="sticky-scroll__progress-line">
          <div
            className="sticky-scroll__progress-fill"
            style={{ "--sticky-scroll-progress-height": `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className="sticky-scroll__right-col"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-full w-full"
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
