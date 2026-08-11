import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./following-pointer.css";

export function FollowerPointerCard({ children, className, title }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      className={cn("relative", isInside && "cursor-none [&_*]:cursor-none", className)}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer x={position.x} y={position.y} title={title} />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}

function FollowPointer({ x, y, title }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        "--following-pointer-top": `${y}px`,
        "--following-pointer-left": `${x}px`,
      }}
      className="following-pointer__cursor absolute z-50 -translate-x-1/2 -translate-y-1/2 select-none"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="h-6 w-6 -rotate-[70deg] text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="ml-4 mt-1 rounded-full border border-purple-500/40 bg-[#161622]/95 px-3 py-1 text-xs font-semibold text-purple-200 shadow-xl backdrop-blur-md whitespace-nowrap"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
