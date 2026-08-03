import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, CheckCircle2, Play } from "lucide-react";

export function Terminal({
  commands = [],
  outputs = {},
  typingSpeed = 30,
  delayBetweenCommands = 600,
  onComplete,
}) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [history, setHistory] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      setIsFinished(true);
      if (onComplete) {
        const timer = setTimeout(onComplete, 800);
        return () => clearTimeout(timer);
      }
      return;
    }

    const commandToType = commands[currentCommandIndex];
    let charIndex = 0;
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < commandToType.length) {
        setDisplayedText(commandToType.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "command", text: commandToType },
            ...(outputs[currentCommandIndex] || []).map((out) => ({
              type: "output",
              text: out,
            })),
          ]);
          setDisplayedText("");
          setCurrentCommandIndex((prev) => prev + 1);
        }, delayBetweenCommands);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval);
  }, [currentCommandIndex, commands, outputs, typingSpeed, delayBetweenCommands]);

  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d11]/90 shadow-2xl backdrop-blur-xl">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between border-b border-neutral-800/80 bg-[#16161e]/80 px-4 py-3">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex items-center space-x-2 text-xs font-medium text-neutral-400 font-mono">
          <TerminalIcon className="h-3.5 w-3.5 text-purple-400" />
          <span>sidkaushik@portfolio ~ zsh</span>
        </div>
        <div className="text-xs text-neutral-600 font-mono">v2.5.0</div>
      </div>

      {/* Terminal Body */}
      <div className="min-h-[260px] p-5 font-mono text-sm leading-relaxed text-neutral-200">
        <AnimatePresence>
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="mb-2"
            >
              {item.type === "command" ? (
                <div className="flex items-center space-x-2 text-blue-400">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">portfolio</span>
                  <span className="text-neutral-500">$</span>
                  <span className="text-neutral-100 font-semibold">{item.text}</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 pl-4 text-emerald-400/90 font-medium">
                  {item.text.startsWith("✔") ? (
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 inline" />
                  ) : null}
                  <span>{item.text}</span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {!isFinished && (
          <div className="flex items-center space-x-2 text-blue-400">
            <span className="text-emerald-400">➜</span>
            <span className="text-purple-400">portfolio</span>
            <span className="text-neutral-500">$</span>
            <span className="text-neutral-100 font-semibold">{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="h-4 w-2 rounded-sm bg-purple-500 inline-block ml-0.5"
            />
          </div>
        )}

        {isFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs text-emerald-300"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>All assets loaded successfully. Welcome to Sid Kaushik's Portfolio!</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
