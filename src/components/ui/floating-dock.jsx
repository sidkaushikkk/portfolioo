import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import "./floating-dock.css";

export function FloatingDock({
  items,
  desktopClassName,
  mobileClassName,
}) {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
}

function FloatingDockMobile({ items, className }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("floating-dock-mobile", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="floating-dock-mobile__popover"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { delay: idx * 0.03 } }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                {item.onClick ? (
                  <button
                    onClick={() => {
                      item.onClick();
                      setOpen(false);
                    }}
                    className="floating-dock-mobile__item"
                  >
                    <div className="floating-dock-mobile__icon-box">
                      {item.icon}
                    </div>
                    <span className="floating-dock-mobile__title">{item.title}</span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    target={item.target || (item.href?.startsWith("http") ? "_blank" : "_self")}
                    rel={item.rel || (item.href?.startsWith("http") ? "noopener noreferrer" : undefined)}
                    className="floating-dock-mobile__item"
                  >
                    <div className="floating-dock-mobile__icon-box">
                      {item.icon}
                    </div>
                    <span className="floating-dock-mobile__title">{item.title}</span>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="floating-dock-mobile__toggle-btn"
      >
        {open ? <X className="floating-dock-mobile__icon-purple" /> : <Menu className="floating-dock-mobile__icon-blue" />}
      </button>
    </div>
  );
}

function FloatingDockDesktop({ items, className }) {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn("floating-dock-desktop", className)}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function IconContainer({ mouseX, title, icon, href, onClick, target, rel }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
  let heightSync = useTransform(distance, [-150, 0, 150], [40, 56, 40]);

  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="floating-dock__icon-container"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="floating-dock__tooltip"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="floating-dock__icon-wrapper">
        {icon}
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} type="button" className="floating-dock__btn-reset">
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={target || (href?.startsWith("http") ? "_blank" : "_self")}
      rel={rel || (href?.startsWith("http") ? "noopener noreferrer" : undefined)}
      className="floating-dock__link-reset"
    >
      {content}
    </a>
  );
}
