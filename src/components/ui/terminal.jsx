import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, CheckCircle2 } from "lucide-react";
import "./terminal.css";

export function Terminal({
  commands = [],
  outputs = {},
  typingSpeed = 30,
  delayBetweenCommands = 400,
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
        const timer = setTimeout(onComplete, 100);
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
    <div className="terminal__container">
      {/* Terminal Bar */}
      <div className="terminal__bar">
        <div className="terminal__dots-group">
          <div className="terminal__dot terminal__dot--red" />
          <div className="terminal__dot terminal__dot--yellow" />
          <div className="terminal__dot terminal__dot--green" />
        </div>
        <div className="terminal__title">
          <TerminalIcon className="terminal__title-icon" />
          <span>sidkaushik@portfolio ~ zsh</span>
        </div>
        <div className="terminal__version">v2.5.0</div>
      </div>

      {/* Terminal Body */}
      <div className="terminal__body">
        <AnimatePresence>
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="terminal__history-item"
            >
              {item.type === "command" ? (
                <div className="terminal__command-line">
                  <span className="terminal__prompt-arrow">➜</span>
                  <span className="terminal__prompt-name">portfolio</span>
                  <span className="terminal__prompt-symbol">$</span>
                  <span className="terminal__command-text">{item.text}</span>
                </div>
              ) : (
                <div className="terminal__output-line">
                  {item.text.startsWith("✔") ? (
                    <CheckCircle2 className="terminal__check-icon" />
                  ) : null}
                  <span>{item.text}</span>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {!isFinished && (
          <div className="terminal__command-line">
            <span className="terminal__prompt-arrow">➜</span>
            <span className="terminal__prompt-name">portfolio</span>
            <span className="terminal__prompt-symbol">$</span>
            <span className="terminal__command-text">{displayedText}</span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="terminal__cursor"
            />
          </div>
        )}
      </div>
    </div>
  );
}
