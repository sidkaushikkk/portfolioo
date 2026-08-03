import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const ModalContext = createContext(undefined);

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export function Modal({ children, open: externalOpen, onOpenChange }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = externalOpen !== undefined;

  const open = isControlled ? externalOpen : internalOpen;
  const setOpen = (val) => {
    if (onOpenChange) onOpenChange(val);
    if (!isControlled) setInternalOpen(val);
  };

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export function ModalTrigger({ children, className }) {
  const { setOpen } = useModal();
  return (
    <div
      className={cn("cursor-pointer inline-block", className)}
      onClick={() => setOpen(true)}
    >
      {children}
    </div>
  );
}

export function ModalBody({ children, className }) {
  const { open, setOpen } = useModal();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 sm:p-6 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className={cn(
              "relative my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-[#0d0d11] shadow-2xl text-neutral-100",
              className
            )}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ModalContent({ children, className }) {
  return (
    <div className={cn("flex flex-1 flex-col overflow-y-auto p-6 md:p-8", className)}>
      {children}
    </div>
  );
}

export function ModalFooter({ children, className }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-end gap-3 border-t border-neutral-800/80 bg-[#14141a]/90 p-4 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
