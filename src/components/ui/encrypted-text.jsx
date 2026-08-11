import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./encrypted-text.css";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export function EncryptedText({
  text = "",
  encryptedClassName = "text-neutral-500",
  revealedClassName = "text-white",
  revealDelayMs = 15,
  className,
  enabled = true,
}) {
  const [displayText, setDisplayText] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayText(
        text
          .split("")
          .map((char) => (char === " " ? " " : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]))
          .join("")
      );
      setRevealedCount(0);
      return;
    }

    let iteration = 0;
    const totalChars = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      setRevealedCount(Math.floor(iteration));

      if (iteration >= totalChars) {
        clearInterval(interval);
        setRevealedCount(totalChars);
      }

      iteration += 1.2;
    }, revealDelayMs);

    return () => clearInterval(interval);
  }, [text, revealDelayMs, enabled]);

  return (
    <span className={cn("encrypted-text", className)}>
      {displayText.split("").map((char, idx) => {
        const isRevealed = idx < revealedCount || text[idx] === " ";
        return (
          <span
            key={idx}
            className={cn(
              "encrypted-text__char",
              isRevealed ? revealedClassName : encryptedClassName
            )}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}
