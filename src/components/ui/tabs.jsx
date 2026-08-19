import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./tabs.css";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Pill-shaped Tab Navigation Bar */}
      <div
        className={cn(
          "tabs-nav-bar flex flex-row items-center justify-start sm:justify-center [perspective:1000px] relative overflow-x-auto no-visible-scrollbar max-w-full w-full py-2 px-2 gap-1.5 sm:gap-2 rounded-full border border-gold-500/30 dark:border-gold-500/20 bg-white/80 dark:bg-neutral-950/70 backdrop-blur-xl shadow-md dark:shadow-lg",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 shrink-0 cursor-pointer select-none",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gold-500/20 dark:bg-gold-500/20 border border-gold-500/40 rounded-full shadow-[0_0_15px_rgba(200,173,141,0.25)]",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={cn(
                "relative block z-10",
                active.value === tab.value
                  ? "text-gold-700 dark:text-gold-300 font-bold"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
              )}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Stacked Cards Container (FadeInDiv) */}
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        className={cn("mt-6 sm:mt-10", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-[520px] min-[420px]:h-[460px] min-[540px]:h-[400px] sm:h-[340px] md:h-[290px]">
      {tabs.map((tab, idx) => {
        const activeCard = isActive(tab);

        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            initial={false}
            animate={{
              y: activeCard ? [50, -6, 0] : 0,
              scale: activeCard ? [0.93, 1.02, 1] : 1 - idx * 0.04,
              opacity: idx < 4 ? (activeCard ? 1 : 1 - idx * 0.15) : 0,
              zIndex: 30 - idx,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              mass: 0.7,
            }}
            className={cn("w-full absolute top-0 left-0 transition-all duration-300", className)}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
