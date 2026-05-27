import type { ReactNode } from "react";
import type { ReactElement } from "react";
import { motion } from "framer-motion";

export interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps): ReactElement {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto h-[380px] w-48 shrink-0 overflow-hidden rounded-[36px] border-4 border-gray-300 bg-white shadow-xl sm:h-[420px] sm:w-52"
    >
      <div className="absolute top-3 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-gray-200" />
      <div className="h-full overflow-hidden pt-8 pb-4">{children}</div>
    </motion.div>
  );
}
