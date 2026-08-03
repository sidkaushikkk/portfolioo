"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HERO_PARALLAX_PRODUCTS } from "@/data/portfolioData";

export function HeroParallaxDemo() {
  return <HeroParallax products={HERO_PARALLAX_PRODUCTS} />;
}
export const products = HERO_PARALLAX_PRODUCTS;
