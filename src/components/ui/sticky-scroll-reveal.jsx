import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./sticky-scroll-reveal.css";

export function StickyScroll({ content, contentClassName }) {
  const [activeCard, setActiveCard] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);
  const cardLength = content.length;

  const updateStateFromContainer = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
    setScrollProgress(progress);

    const items = el.querySelectorAll("[data-skill-item]");
    if (items.length > 0) {
      const containerTop = el.getBoundingClientRect().top;
      const containerCenter = containerTop + clientHeight / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((itemEl, idx) => {
        const rect = itemEl.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const dist = Math.abs(containerCenter - itemCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });
      setActiveCard(closestIdx);
    } else {
      const step = 1 / (cardLength - 1);
      const index = Math.min(
        cardLength - 1,
        Math.max(0, Math.round(progress / step))
      );
      setActiveCard(index);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Scoped wheel handler: consume scroll inside bounds; pass-through at top/bottom boundaries
    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const maxScroll = scrollHeight - clientHeight;
      const deltaY = e.deltaY;

      // Scroll Down inside bounds
      if (deltaY > 0 && scrollTop < maxScroll - 1) {
        e.preventDefault();
        el.scrollTop += deltaY;
        updateStateFromContainer();
      }
      // Scroll Up inside bounds
      else if (deltaY < 0 && scrollTop > 1) {
        e.preventDefault();
        el.scrollTop += deltaY;
        updateStateFromContainer();
      }
      // At boundaries (scrollTop <= 1 scrolling UP or scrollTop >= maxScroll - 1 scrolling DOWN):
      // Do NOT preventDefault! Allow the main document/website to scroll naturally.
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="relative mx-auto flex h-[60vh] max-h-[560px] min-h-[460px] w-full max-w-6xl items-center justify-between overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white/80 dark:bg-[#0f172a]/60 p-6 md:p-8 shadow-2xl backdrop-blur-xl transition-colors duration-500">
      <div className="relative flex h-full w-full flex-col gap-8 md:flex-row md:items-center md:justify-between">
        
        {/* Left Timeline Viewport with Native Nested Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={updateStateFromContainer}
          className="relative h-full flex-1 overflow-y-auto px-2 md:pl-8 md:pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-behavior-y-contain"
        >
          {/* Scroll progress line on left edge */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-neutral-200/50 dark:bg-neutral-800/60 rounded-full overflow-hidden hidden md:block z-10 pointer-events-none">
            <div
              className="sticky-scroll__progress-fill w-full bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 origin-top transition-all duration-150"
              style={{ "--sticky-scroll-progress-height": `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Categories List */}
          <div className="space-y-12 py-4 max-w-2xl">
            {content.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div key={item.title + index} data-skill-item className="py-2">
                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0.28,
                      x: isActive ? 0 : -8,
                      scale: isActive ? 1 : 0.98,
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Badge & Number */}
                    <div className="flex items-center space-x-3 mb-1.5">
                      <motion.span
                        animate={{
                          scale: isActive ? 1.15 : 1,
                          borderColor: isActive ? "rgba(168, 85, 247, 0.8)" : "rgba(168, 85, 247, 0.3)",
                          backgroundColor: isActive ? "rgba(168, 85, 247, 0.25)" : "rgba(168, 85, 247, 0.1)",
                          boxShadow: isActive ? "0 0 16px -2px rgba(168, 85, 247, 0.5)" : "0 0 0px transparent",
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex h-6 w-6 items-center justify-center rounded-full border text-[11px] font-bold text-purple-600 dark:text-purple-300"
                      >
                        0{index + 1}
                      </motion.span>
                      <motion.span
                        animate={{ opacity: isActive ? 1 : 0.6 }}
                        className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-neutral-400 uppercase"
                      >
                        {item.badge || "Milestone"}
                      </motion.span>
                    </div>

                    {/* Heading */}
                    <motion.h2
                      animate={{ y: isActive ? 0 : 4 }}
                      transition={{ duration: 0.35, delay: isActive ? 0.04 : 0 }}
                      className="text-xl font-bold text-slate-900 dark:text-slate-100 md:text-3xl"
                    >
                      {item.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      animate={{ y: isActive ? 0 : 6 }}
                      transition={{ duration: 0.35, delay: isActive ? 0.08 : 0 }}
                      className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-slate-400 md:text-base"
                    >
                      {item.description}
                    </motion.p>

                    {/* Tech Skill Tags */}
                    {item.tech && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tech.map((t, idx) => (
                          <motion.span
                            key={t}
                            animate={{
                              opacity: isActive ? 1 : 0.45,
                              y: isActive ? 0 : 6,
                              scale: isActive ? 1 : 0.94,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: isActive ? 0.12 + idx * 0.04 : 0,
                              ease: "easeOut",
                            }}
                            className="rounded-md border border-neutral-200 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800/60 px-2.5 py-0.5 text-xs text-neutral-800 dark:text-neutral-300 font-mono transition-colors hover:border-purple-500/50 hover:text-purple-300"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Sticky Visual Preview Container */}
        <motion.div
          animate={{
            boxShadow: activeCard === 0
              ? "0 0 35px -5px rgba(59, 130, 246, 0.25)"
              : activeCard === 1
              ? "0 0 35px -5px rgba(6, 182, 212, 0.25)"
              : activeCard === 2
              ? "0 0 35px -5px rgba(16, 185, 129, 0.25)"
              : activeCard === 3
              ? "0 0 35px -5px rgba(34, 197, 94, 0.25)"
              : activeCard === 4
              ? "0 0 35px -5px rgba(168, 85, 247, 0.25)"
              : "0 0 35px -5px rgba(244, 63, 94, 0.25)",
            borderColor: activeCard === 0
              ? "rgba(59, 130, 246, 0.4)"
              : activeCard === 1
              ? "rgba(6, 182, 212, 0.4)"
              : activeCard === 2
              ? "rgba(16, 185, 129, 0.4)"
              : activeCard === 3
              ? "rgba(34, 197, 94, 0.4)"
              : activeCard === 4
              ? "rgba(168, 85, 247, 0.4)"
              : "rgba(244, 63, 94, 0.4)",
          }}
          transition={{ duration: 0.5 }}
          className={cn(
            "hidden h-80 w-full rounded-2xl border bg-slate-900 dark:bg-[#12121a] overflow-hidden shadow-2xl md:block md:w-96 shrink-0 transition-colors duration-500",
            contentClassName
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full"
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
