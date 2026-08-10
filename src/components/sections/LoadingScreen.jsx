import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "@/components/ui/terminal";

export function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  const commands = [
    "Initializing Portfolio...",
    "Loading Projects...",
    "Fetching Experience...",
    "Loading Skills...",
    "Connecting GitHub...",
    "Loading Resume...",
    "Portfolio Ready.",
  ];

  const outputs = {
    // 0: ["✔ Environment initialized"],
    // 1: ["✔ 5 Major Projects loaded"],
    // 2: ["✔ Career timeline & milestones mapped"],
    // 3: ["✔ Technical skills & AI stack ready"],
    // 4: ["✔ GitHub & LeetCode connected"],
    // 5: ["✔ Official resume loaded"],
    // 6: ["✔ Welcome to Sid Kaushik's Portfolio!"],
  };

  const handleTerminalFinished = () => {
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#09090b] px-4"
        >
          <div className="w-full max-w-2xl text-center">
            <Terminal
              commands={commands}
              outputs={outputs}
              typingSpeed={20}
              delayBetweenCommands={250}
              onComplete={handleTerminalFinished}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
