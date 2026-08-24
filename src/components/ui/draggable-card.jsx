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

export function DraggableCardBody({
  children,
  className,
  dragConstraints,
  style,
  onDragStart,
  onDragEnd,
  drag = true,
  initial,
  ...props
}) {
  return (
    <motion.div
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={0.2}
      dragMomentum={true}
      whileDrag={{ scale: 1.06, cursor: "grabbing", zIndex: 100 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      initial={initial}
      style={style}
      className={cn("draggable-card__body", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
