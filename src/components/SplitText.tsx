"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  // Split text by lines based on newline characters or just words for simple animations
  // Here we split by lines. If you want word by word, change the split logic.
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        ease: [0.22, 1, 0.36, 1],
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span variants={child} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
