import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800/80 bg-slate-100 dark:bg-[#09090b] py-12 px-4 pb-28 md:pb-12 transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left Branding */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
            SID KAUSHIK
          </span>
          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
            Software Engineer &bull; AI &bull; MERN &bull; Problem Solver
          </p>
        </div>

        {/* Center Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-400 transition-colors hover:border-neutral-500 hover:text-black dark:hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-400 transition-colors hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-400 transition-colors hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400"
          >
            <Code className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-400 transition-colors hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Right Copyright */}
        <div className="flex flex-col items-center text-center text-xs text-neutral-500 md:items-end md:text-right font-mono">
          <span>&copy; {new Date().getFullYear()} Sid Kaushik. All rights reserved.</span>
          <span className="mt-1 flex items-center gap-1 text-[11px] text-neutral-600 dark:text-neutral-400">
            Built with React + Aceternity UI + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
}
