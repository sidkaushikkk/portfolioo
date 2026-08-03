import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function StickyScroll({ content, contentClassName }) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className="relative flex justify-center rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white/80 dark:bg-[#0f172a]/60 p-6 md:p-12 shadow-2xl backdrop-blur-xl transition-colors duration-500"
      ref={ref}
    >
      <div className="relative flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left timeline text content */}
        <div className="relative flex-1 px-2 md:px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-16 md:my-24 first:mt-0 last:mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.35,
                    x: activeCard === index ? 0 : -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/20 text-xs font-bold text-purple-600 dark:text-purple-300">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
                      {item.badge || "Milestone"}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-slate-400 md:text-lg">
                    {item.description}
                  </p>
                  {item.tech && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-neutral-200 dark:border-neutral-700 bg-slate-100 dark:bg-neutral-800/60 px-2.5 py-1 text-xs text-neutral-800 dark:text-neutral-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sticky visual preview container */}
        <div
          className={cn(
            "sticky top-24 hidden h-80 w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-900 dark:bg-[#12121a] overflow-hidden shadow-2xl md:block md:w-96 shrink-0",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </div>
    </div>
  );
}
