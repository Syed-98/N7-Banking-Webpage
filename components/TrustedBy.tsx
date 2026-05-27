import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { trustedBrands } from "@/constants/data";
import { fadeInLeft, viewportOnce } from "@/lib/motion";

function TrustedBy(): ReactElement {
  return (
    <motion.section
      className="border-y border-banking-border bg-banking-dark py-5 md:py-6"
      style={{ willChange: "transform, opacity" }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInLeft}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8 md:px-6 lg:px-8">
        <span className="w-full text-center text-xs text-banking-muted sm:w-auto sm:text-sm md:mr-4 lg:mr-8">
          Trusted By:
        </span>
        {trustedBrands.map((brand) => (
          <span
            key={brand.name}
            className="inline-flex items-center gap-1.5 text-xs text-white/60 opacity-60 sm:text-sm"
          >
            <span className="text-xs text-banking-muted" aria-hidden>
              {brand.icon}
            </span>
            {brand.name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export default memo(TrustedBy);
