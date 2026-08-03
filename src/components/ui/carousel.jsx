import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Carousel({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-5xl px-4 py-8">
      <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#0d0d14]/90 p-6 md:p-12 shadow-2xl backdrop-blur-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2"
          >
            {/* Visual Image/Media */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700/80 bg-neutral-100 dark:bg-neutral-900 shadow-xl group">
              <img
                src={slides[current].src}
                alt={slides[current].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 rounded-full border border-purple-500/40 bg-purple-950/80 px-3 py-1 text-xs font-semibold text-purple-300 backdrop-blur-md">
                <Award className="h-3.5 w-3.5" />
                <span>Verified Achievement</span>
              </div>
            </div>

            {/* Content info */}
            <div className="flex flex-col justify-center text-left">
              <span className="text-xs font-mono tracking-widest text-purple-600 dark:text-purple-400 uppercase">
                Certification {current + 1} of {slides.length}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-white md:text-3xl">
                {slides[current].title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
                {slides[current].description ||
                  "Demonstrated proficiency, technical mastery, and excellence in software development and competitive problem-solving."}
              </p>
              {slides[current].issuer && (
                <div className="mt-4 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                  Issued by: <span className="text-blue-600 dark:text-blue-400 font-semibold">{slides[current].issuer}</span>
                </div>
              )}
              {slides[current].button && (
                <div className="mt-6">
                  <a
                    href={slides[current].link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-slate-900 dark:text-white shadow-xl backdrop-blur-md transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-slate-900 dark:text-white shadow-xl backdrop-blur-md transition-colors hover:bg-slate-100 dark:hover:bg-neutral-800"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === idx ? "w-8 bg-purple-500" : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
