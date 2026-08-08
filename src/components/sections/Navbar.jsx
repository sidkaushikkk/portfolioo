import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ResumeModal } from "@/components/ResumeModal";
import { useTheme } from "@/context/ThemeContext";
import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Award,
  Mail,
  Github,
  Linkedin,
  Code,
  FileText,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function Navbar() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [showDock, setShowDock] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    if (!heroElement) {
      setShowDock(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide dock when Hero section is visible; show dock when scrolled past Hero
        setShowDock(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(heroElement);
    return () => observer.disconnect();
  }, []);

  const cycleTheme = () => {
    if (theme === "system") setTheme("dark");
    else if (theme === "dark") setTheme("light");
    else setTheme("system");
  };

  const getThemeIcon = () => {
    if (theme === "system") return <Laptop className="h-5 w-5 text-cyan-400" />;
    if (theme === "dark") return <Moon className="h-5 w-5 text-purple-400" />;
    return <Sun className="h-5 w-5 text-amber-400" />;
  };

  const getThemeTitle = () => {
    if (theme === "system") return "Theme: System Preference";
    if (theme === "dark") return "Theme: Dark Mode";
    return "Theme: Light Mode";
  };

  const navItems = [
    { title: "Home", icon: <Home className="h-5 w-5" />, href: "#hero" },
    { title: "About", icon: <User className="h-5 w-5" />, href: "#about" },
    { title: "Projects", icon: <FolderGit2 className="h-5 w-5" />, href: "#projects" },
    { title: "Skills", icon: <Cpu className="h-5 w-5" />, href: "#skills" },
    { title: "Achievements", icon: <Award className="h-5 w-5" />, href: "#achievements" },
    { title: "Contact", icon: <Mail className="h-5 w-5" />, href: "#contact" },

    {
      title: "GitHub",
      icon: <Github className="h-5 w-5 text-neutral-400 dark:text-neutral-300" />,
      href: PERSONAL_INFO.github,
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-5 w-5 text-blue-400" />,
      href: PERSONAL_INFO.linkedin,
    },
    {
      title: "LeetCode",
      icon: <Code className="h-5 w-5 text-amber-400" />,
      href: PERSONAL_INFO.leetcode,
    },
    {
      title: "Email",
      icon: <Mail className="h-5 w-5 text-emerald-400" />,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      title: "Resume",
      icon: <FileText className="h-5 w-5 text-purple-400" />,
      onClick: () => setResumeModalOpen(true),
    },
    {
      title: getThemeTitle(),
      icon: getThemeIcon(),
      onClick: cycleTheme,
    },
  ];

  return (
    <>
      <AnimatePresence>
        {showDock && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 bottom-0 pointer-events-none z-50"
          >
            <div className="pointer-events-auto">
              <FloatingDock items={navItems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeModal open={resumeModalOpen} onOpenChange={setResumeModalOpen} />
    </>
  );
}
