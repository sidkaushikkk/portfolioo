"use client";
import React, { useState } from "react";
import { Notch } from "@/components/ui/notch";

export function NotchDemo() {
  const [theme, setTheme] = useState("#3b82f6");
  const items = [
    {
      id: "theme",
      label: "Theme",
      options: [
        { id: "#3b82f6", label: "Blue" },
        { id: "#8b5cf6", label: "Violet" },
      ],
      value: theme,
      onChange: (val) => setTheme(val),
    },
  ];

  return <Notch items={items} position="bottom" />;
}
