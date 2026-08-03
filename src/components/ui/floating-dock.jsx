import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

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
    <div className={cn("relative block md:hidden fixed bottom-6 right-6 z-50", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-3 right-0 flex flex-col gap-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#121215]/95 p-3 backdrop-blur-xl shadow-2xl"
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
                    className="flex h-11 items-center gap-3 rounded-xl px-3 text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white w-full"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-blue-500 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.title}</span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    target={item.href?.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex h-11 items-center gap-3 rounded-xl px-3 text-neutral-700 dark:text-neutral-300 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800/80 text-blue-500 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium">{item.title}</span>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#121215]/90 text-neutral-800 dark:text-neutral-200 shadow-2xl backdrop-blur-xl transition-transform active:scale-95"
      >
        {open ? <X className="h-6 w-6 text-purple-500 dark:text-purple-400" /> : <Menu className="h-6 w-6 text-blue-500 dark:text-blue-400" />}
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
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex h-16 items-end gap-3 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white/80 dark:bg-[#121215]/80 px-4 pb-3 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function IconContainer({ mouseX, title, icon, href, onClick }) {
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
      className="relative flex items-center justify-center rounded-full border border-neutral-200/80 dark:border-neutral-700/60 bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-700 dark:text-neutral-300 transition-colors hover:border-blue-500/50 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-10 left-1/2 whitespace-nowrap rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#16161e] px-2.5 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-xl backdrop-blur-md"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex h-5 w-5 items-center justify-center text-blue-500 dark:text-blue-400 group-hover:text-purple-500 dark:group-hover:text-purple-400">
        {icon}
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} type="button">
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
