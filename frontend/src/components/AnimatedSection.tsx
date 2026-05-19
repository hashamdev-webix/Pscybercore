import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export function AnimatedSection({ children, className = "", direction = "up", delay = 0 }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    left:  { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } },
    up:    { hidden: { opacity: 0, y: 60 },   visible: { opacity: 1, y: 0 } },
    down:  { hidden: { opacity: 0, y: -60 },  visible: { opacity: 1, y: 0 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
