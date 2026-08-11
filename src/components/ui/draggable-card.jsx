import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import "./draggable-card.css";

export const DraggableCardContainer = React.forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("draggable-card__container", className)}
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
      className={cn("draggable-card__body", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
