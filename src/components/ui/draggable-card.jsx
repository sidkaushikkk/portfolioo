import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DraggableCardContainer = React.forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-neutral-800/60 bg-[#0d0d12]/60 p-8 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
});

export function DraggableCardBody({ children, className, dragConstraints, style, onPointerDown, onDragStart, ...props }) {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      whileDrag={{ scale: 1.08, cursor: "grabbing" }}
      whileHover={{ scale: 1.03 }}
      onPointerDown={onPointerDown}
      onDragStart={onDragStart}
      style={style}
      className={cn(
        "cursor-grab touch-none select-none rounded-2xl border border-neutral-700/60 bg-[#16161e]/90 p-1.5 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl hover:border-purple-500/40",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
