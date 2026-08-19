import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "@/components/ui/terminal";
import "./LoadingScreen.css";

export function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  const commands = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Fetching Experience...",
    "Loading Skills...",
    "Portfolio Ready.",
  ];

  const outputs = {};

  const handleTerminalFinished = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="loading-screen__overlay"
        >
          <div className="loading-screen__container">
            <Terminal
              commands={commands}
              outputs={outputs}
              typingSpeed={15}
              delayBetweenCommands={125}
              onComplete={handleTerminalFinished}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
