import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { LoadingScreen } from "@/components/sections/LoadingScreen";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="app-container">
        {/* 1. Loading Terminal Screen (Appears once) */}
        <LoadingScreen onComplete={() => setLoading(false)} />

        {/* Main Website Portfolio Content */}
        <main className={`app-main ${loading ? "app-main--loading" : ""}`}>
          {/* 2. Floating Dock Navbar */}
          <Navbar />

          {/* 3. Hero Section */}
          <Hero startAnimation={!loading} />

          {/* 4. About Me (Draggable Cards) */}
          <About />

          {/* 5. Experience (Skiper52 Expand on Hover) */}
          <Experience />

          {/* 6. Projects (Following Pointer Cards & Modals) */}
          <Projects />

          {/* 7. Skills (Categorized Stack & Brand Badges) */}
          <Skills />

          {/* 8. Achievements & Certifications (Carousel) */}
          <Achievements />

          {/* 9. Contact */}
          <Contact />

          {/* 10. Footer */}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
