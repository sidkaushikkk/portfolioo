import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  Sparkles,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] px-3.5 py-1 text-xs font-mono text-purple-600 dark:text-purple-400 shadow-sm">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm text-neutral-600 dark:text-neutral-400 sm:text-base">
            Whether you have an exciting opportunity, a project collaboration, or just want to talk code — my inbox is always open!
          </p>
        </div>

        <div className="mt-14 flex justify-center">
          {/* Left Column: Direct Links */}
          <div className="flex w-full max-w-xl flex-col justify-between rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#111116]/90 p-8 shadow-xl backdrop-blur-xl text-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's build something extraordinary.
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                I am actively seeking software engineering roles, AI product development opportunities, and high-impact technical collaborations.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-purple-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Direct Email</div>
                    <div className="text-sm font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-blue-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">LinkedIn Profile</div>
                    <div className="text-sm font-semibold">linkedin.com/in/sidhantkaushik</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-300 shrink-0">
                    <Github className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">GitHub Repositories</div>
                    <div className="text-sm font-semibold">github.com/sidkaushikkk</div>
                  </div>
                </a>

                <a
                  href={PERSONAL_INFO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-slate-50 dark:bg-[#161620] p-4 text-slate-900 dark:text-neutral-200 transition-all hover:border-pink-500/50 hover:bg-slate-100 dark:hover:bg-neutral-800"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-600 dark:text-pink-400 shrink-0">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Instagram Profile</div>
                    <div className="text-sm font-semibold">instagram.com/sid.kaushikk_</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800/80 text-xs text-neutral-500">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
