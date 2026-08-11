import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import "./animated-modal.css";

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
      className={cn("animated-modal__trigger", className)}
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
          className="animated-modal__backdrop"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className={cn("animated-modal__container", className)}
          >
            <button
              onClick={() => setOpen(false)}
              className="animated-modal__close-btn"
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
    <div className={cn("animated-modal__content", className)}>
      {children}
    </div>
  );
}

export function ModalFooter({ children, className }) {
  return (
    <div className={cn("animated-modal__footer", className)}>
      {children}
    </div>
  );
}
