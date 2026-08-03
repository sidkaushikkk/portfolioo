import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function DraggableCardContainer({ children, className }) {
  return (
    <div
      className={cn(
        "relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-800/60 bg-[#0d0d12]/60 p-8 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function DraggableCardBody({ children, className, dragConstraints }) {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints || { left: -200, right: 200, top: -150, bottom: 150 }}
      dragElastic={0.15}
      whileDrag={{ scale: 1.08, zIndex: 40, cursor: "grabbing" }}
      whileHover={{ scale: 1.03 }}
      className={cn(
        "cursor-grab touch-none select-none rounded-2xl border border-neutral-700/60 bg-[#16161e]/90 p-4 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl hover:border-purple-500/40",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
