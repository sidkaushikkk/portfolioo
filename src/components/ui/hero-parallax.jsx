import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import "./hero-parallax.css";

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
      className="hero-parallax__container"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="hero-parallax__motion-wrapper"
      >
        <motion.div className="hero-parallax__row--reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax__row">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax__row--reverse">
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
    <div className="hero-parallax__header">
      <h1 className="hero-parallax__title">
        Featured Work & <br />
        <span className="hero-parallax__title-gradient">
          Architectural Creations
        </span>
      </h1>
      <p className="hero-parallax__subtitle">
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
      className="hero-parallax__product-card"
    >
      <a
        href={product.link || "#projects"}
        className="hero-parallax__product-link"
      >
        <img
          src={product.thumbnail}
          className="hero-parallax__product-img"
          alt={product.title}
        />
      </a>
      <div className="hero-parallax__product-overlay" />
      <div className="hero-parallax__product-info">
        <h2 className="hero-parallax__product-heading">
          {product.title}
        </h2>
        {product.subtitle && (
          <p className="hero-parallax__product-sub">
            {product.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
