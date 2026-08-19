import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ResumeModal } from "@/components/ResumeModal";
import { useTheme } from "@/context/ThemeContext";
import {
  Home,
  User,
  Briefcase,
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
import "./Navbar.css";

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
    if (theme === "system") return <Laptop className="navbar__icon navbar__icon--cyan" />;
    if (theme === "dark") return <Moon className="navbar__icon navbar__icon--purple" />;
    return <Sun className="navbar__icon navbar__icon--amber" />;
  };

  const getThemeTitle = () => {
    if (theme === "system") return "Theme: System ";
    if (theme === "dark") return "Theme: Dark Mode";
    return "Theme: Light Mode";
  };

  const navItems = [
    { title: "Home", icon: <Home className="navbar__icon" />, href: "#hero" },
    { title: "About", icon: <User className="navbar__icon" />, href: "#about" },
    { title: "Experience", icon: <Briefcase className="navbar__icon" />, href: "#experience" },
    { title: "Projects", icon: <FolderGit2 className="navbar__icon" />, href: "#projects" },
    { title: "Skills", icon: <Cpu className="navbar__icon" />, href: "#skills" },
    { title: "Achievements", icon: <Award className="navbar__icon" />, href: "#achievements" },
    { title: "Contact", icon: <Mail className="navbar__icon" />, href: "#contact" },

    {
      title: "GitHub",
      icon: <Github className="navbar__icon navbar__icon--github" />,
      href: PERSONAL_INFO.github,
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="navbar__icon navbar__icon--blue" />,
      href: PERSONAL_INFO.linkedin,
    },
    {
      title: "Email",
      icon: <Mail className="navbar__icon navbar__icon--emerald" />,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      title: "Resume",
      icon: <FileText className="navbar__icon navbar__icon--purple" />,
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
            className="navbar__dock-wrapper"
          >
            <div className="navbar__dock-container">
              <FloatingDock items={navItems} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ResumeModal open={resumeModalOpen} onOpenChange={setResumeModalOpen} />
    </>
  );
}
