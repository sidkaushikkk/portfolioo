import React, { useState } from "react";
import { motion } from "framer-motion";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Notch } from "@/components/ui/notch";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { PERSONAL_INFO, HERO_PARALLAX_PRODUCTS } from "@/data/portfolioData";
import { ArrowRight, Sparkles, FolderGit2, Mail } from "lucide-react";

export function Hero({ startAnimation = true }) {
  const [activeTheme, setActiveTheme] = useState("#3b82f6");

  const notchItems = [
    {
      id: "theme",
      label: "Accent",
      options: [
        { id: "#3b82f6", label: "Blue" },
        { id: "#8b5cf6", label: "Purple" },
        { id: "#10b981", label: "Emerald" },
      ],
      value: activeTheme,
      onChange: (val) => setActiveTheme(val),
    },
  ];

  return (
    <section id="hero" className="relative w-full pt-16 md:pt-24">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-600/10 dark:bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 left-1/3 h-80 w-80 rounded-full bg-purple-600/10 dark:bg-purple-600/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headline & Bio */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Welcome Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#121218]/90 px-4 py-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-300 shadow-xl backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-purple-500 dark:text-purple-400" />
              <span>Software Engineer & AI Architect</span>
            </motion.div>

            {/* Encrypted Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-tight"
            >
              <EncryptedText
                text={PERSONAL_INFO.headlineEncrypted}
                encryptedClassName="text-neutral-400 dark:text-neutral-600 font-mono"
                revealedClassName="text-slate-900 dark:text-white font-sans"
                revealDelayMs={15}
                enabled={startAnimation}
              />
            </motion.div>

            {/* Subtitle & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 space-y-2"
            >
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 sm:text-xl font-medium">
                {PERSONAL_INFO.title} &bull;{" "}
                <span className="text-purple-600 dark:text-purple-300">{PERSONAL_INFO.tagline}</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <FolderGit2 className="h-4 w-4" />
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2.5 rounded-2xl border border-neutral-300 dark:border-neutral-700/80 bg-white dark:bg-neutral-900/80 px-6 py-3.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-xl backdrop-blur-md transition-all hover:border-purple-500/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:scale-105 active:scale-95"
              >
                <Mail className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Photo / Notch Card */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative flex w-full max-w-sm flex-col items-center"
            >
              <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] p-3 shadow-2xl backdrop-blur-xl">
                <div
                  className="absolute inset-0 opacity-20 transition-colors duration-300"
                  style={{ background: activeTheme }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700/50">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop";
                    }}
                    className="h-88 sm:h-96 w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="rounded-full border border-blue-500/40 bg-blue-950/80 px-2.5 py-1 text-[10px] font-mono font-semibold text-blue-300">
                      DEVELOPER CARD
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-neutral-300">
                      Full Stack Engineer & AI Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Notch items={notchItems} position="bottom" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Parallax Section */}
      <div className="mt-10">
        <HeroParallax products={HERO_PARALLAX_PRODUCTS} />
      </div>
    </section>
  );
}
