"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: number; // 0 to 1, higher is faster
  priority?: boolean;
}

export default function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  speed = 0.5,
  priority = false,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // For a speed of 0.5, the image will move from -10% to 10%
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 20}%`, `${speed * 20}%`]);

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden w-full h-full", className)}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={src}
          alt={alt}
          className={cn("w-full h-full object-cover", imageClassName)}
        />
      </motion.div>
    </div>
  );
}
