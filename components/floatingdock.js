import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";

export function FloatingDockDemo() {
  const items = [
    { title: "Home", href: "#hero" },
    { title: "Projects", href: "#projects" },
  ];
  return <FloatingDock items={items} />;
}
