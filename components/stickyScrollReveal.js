"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { EXPERIENCE_TIMELINE } from "@/data/portfolioData";

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={EXPERIENCE_TIMELINE} />
    </div>
  );
}
