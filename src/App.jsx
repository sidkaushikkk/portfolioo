import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-[#09090b] text-slate-900 dark:text-neutral-100 font-sans selection:bg-purple-500 selection:text-white transition-colors duration-300">
        {/* 1. Loading Terminal Screen (Appears once) */}
        <LoadingScreen onComplete={() => setLoading(false)} />

        {/* Main Website Portfolio Content */}
        <main className={`transition-opacity duration-700 ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {/* 2. Floating Dock Navbar */}
          <Navbar />

          {/* 3. Hero Section */}
          <Hero startAnimation={!loading} />

          {/* 4. About Me (Draggable Cards) */}
          <About />

          {/* 5. Projects (Following Pointer Cards & Modals) */}
          <Projects />

          {/* 6. Skills (Aceternity Sticky Scroll Reveal) */}
          <Skills />

          {/* 7. Achievements & Certifications (Carousel) */}
          <Achievements />

          {/* 8. Contact */}
          <Contact />

          {/* 9. Footer */}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
