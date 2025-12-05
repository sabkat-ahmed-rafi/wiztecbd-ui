"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

interface Props {
  className?: string;
  baseX?: number;
  baseY?: number;
  radius?: number;
  speed?: number;
  offset?: number; // NEW: starting rotation offset
}

export default function FloatingEllipse({
  className = "",
  baseX = 0,
  baseY = 0,
  radius = 150,
  speed = 0.25,
  offset = 0,
}: Props) {
  const x = useMotionValue(baseX);
  const y = useMotionValue(baseY);

  useAnimationFrame((t) => {
    const angle = t * speed * 0.0004 + offset;

    x.set(baseX + Math.cos(angle) * radius);
    y.set(baseY + Math.sin(angle) * radius);
  });

  return <motion.div className={className} style={{ x, y }} />;
}
