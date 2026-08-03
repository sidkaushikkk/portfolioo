import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroParallax({ products }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[130vh] md:h-[150vh] flex-col overflow-hidden py-12 md:py-16 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="space-y-8 md:space-y-12"
      >
        <motion.div className="flex flex-row-reverse space-x-12 space-x-reverse mb-6 md:mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-12 mb-6 md:mb-10">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-12 space-x-reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-6 md:py-12">
      <h1 className="text-3xl font-extrabold md:text-7xl text-slate-900 dark:text-white">
        Featured Work & <br />
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Architectural Creations
        </span>
      </h1>
      <p className="mt-6 max-w-2xl text-base text-neutral-600 dark:text-neutral-400 md:text-xl leading-relaxed">
        Explore a curated gallery of high-impact full-stack products, AI tools, and fintech applications engineered with speed, precision, and modern design standards.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15,
      }}
      key={product.title}
      className="group/product relative h-72 md:h-80 w-[20rem] md:w-[24rem] shrink-0 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121218] shadow-xl"
    >
      <a
        href={product.link || "#projects"}
        className="block h-full w-full group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover/product:scale-105"
          alt={product.title}
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity group-hover/product:opacity-80" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h2 className="text-xl font-bold tracking-wide text-white group-hover/product:text-purple-300">
          {product.title}
        </h2>
        {product.subtitle && (
          <p className="mt-1 text-xs text-neutral-300 line-clamp-1">
            {product.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
