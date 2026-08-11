import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import "./following-pointer.css";

export function FollowerPointerCard({ children, className, title }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPoint({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("follower-pointer__container", className)}
    >
      <AnimatePresence>
        {isHovered && <FollowPointer x={point.x} y={point.y} title={title} />}
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
      className="following-pointer__cursor"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className="following-pointer__svg"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="following-pointer__title-tag"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
