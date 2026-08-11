import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
import { DRAGGABLE_ABOUT_ITEMS } from "@/data/portfolioData";
import { Sparkles, Move } from "lucide-react";

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
    <section id="about" className="relative w-full pt-[50px] pb-20 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-purple-600 dark:text-purple-400 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INTERACTIVE HIGHLIGHTS</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Drag the cards around to explore my core technical pillars, achievements, and developer mindset!
          </p>
        </div>

        {/* Draggable Cards Playground */}
        <div className="mt-12 relative">
          <DraggableCardContainer ref={containerRef} className="min-h-[680px] md:min-h-[780px] border-neutral-200 dark:border-neutral-800/60 bg-white/70 dark:bg-[#0d0d12]/60 shadow-xl">
            <div className="absolute top-6 left-6 flex items-center space-x-2 text-xs font-mono text-neutral-500 pointer-events-none select-none">
              <Move className="h-4 w-4 text-purple-500 dark:text-purple-400 animate-pulse" />
              <span>Interactive Draggable Canvas — Drag any card</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
              <span className="text-6xl md:text-9xl font-black text-slate-900 dark:text-neutral-400 tracking-tighter">
                SID KAUSHIK
              </span>
            </div>

            {DRAGGABLE_ABOUT_ITEMS.map((item) => (
              <DraggableCardBody
                key={item.id}
                dragConstraints={containerRef}
                style={{ zIndex: cardZIndices[item.id] || 10 }}
                onPointerDown={() => bringToFront(item.id)}
                onDragStart={() => bringToFront(item.id)}
                className={`${item.className} w-60 md:w-72 border-neutral-200 dark:border-neutral-700/60 bg-white/95 dark:bg-[#16161e]/90`}
              >
                <div className={`rounded-xl border bg-gradient-to-br p-3 shadow-2xl backdrop-blur-xl ${item.color}`}>
                  {item.image && (
                    <div className="relative mb-2.5 h-[200px] w-full overflow-hidden rounded-lg border border-white/20 dark:border-white/10 bg-black/20 pointer-events-none select-none">
                      <img
                        src={item.image}
                        alt={item.title}
                        draggable={false}
                        className="h-full w-full object-cover pointer-events-none select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 pointer-events-none" />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide select-none">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-neutral-600 dark:text-neutral-300 font-medium leading-tight select-none">
                    {item.subtitle}
                  </p>
                  <div className="mt-2.5 flex items-center justify-between border-t border-neutral-200/60 dark:border-white/10 pt-1.5 text-[9px] text-neutral-500 dark:text-neutral-400 font-mono select-none">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-purple-600 dark:text-purple-300 font-semibold">DRAG ME</span>
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
