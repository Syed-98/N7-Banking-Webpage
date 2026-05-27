import type { MotionProps } from "framer-motion";

export function useScrollAnimation(): Pick<
  MotionProps,
  "initial" | "whileInView" | "viewport" | "transition"
> {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };
}

