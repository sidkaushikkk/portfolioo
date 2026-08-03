import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { DRAGGABLE_ABOUT_ITEMS } from "@/data/portfolioData";

export function DraggableCardDemo() {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      {DRAGGABLE_ABOUT_ITEMS.map((item) => (
        <DraggableCardBody key={item.id} className={item.className}>
          <div className="p-4 bg-neutral-900 text-white rounded-xl">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-xs text-neutral-400">{item.subtitle}</p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
