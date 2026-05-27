import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { ctaBannerContent } from "@/constants/data";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

function CTABanner(): ReactElement {
  return (
    <section className="relative overflow-hidden bg-banking-cta py-14 md:py-16 lg:py-20">
      <span
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 select-none text-[100px] leading-none font-bold text-white/5 md:text-[160px] lg:text-[200px]"
        aria-hidden
      >
        N7
      </span>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 md:gap-10 md:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <motion.div
          className="w-full lg:w-1/2"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInLeft}
        >
          <h2 className="text-[26px] leading-tight font-bold text-white sm:text-[32px] md:text-[36px] lg:text-[40px]">
            {ctaBannerContent.title}
          </h2>
          <p className="mt-4 max-w-lg text-sm text-banking-muted md:text-base">
            {ctaBannerContent.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex w-full flex-col gap-3 lg:w-auto lg:flex-row lg:gap-4"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInRight}
        >
          <a
            href="#contact"
            className="w-full rounded-sm border border-banking-border px-6 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:border-white lg:w-auto"
          >
            CONTACT US
          </a>
          <a
            href="#request-demo"
            className="w-full rounded-sm bg-banking-blue px-6 py-3 text-center text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 lg:w-auto"
          >
            REQUEST DEMO
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CTABanner);
