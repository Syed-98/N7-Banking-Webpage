import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { heroActivities, heroContent } from "@/constants/data";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

function Hero(): ReactElement {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-banking-dark py-12 md:py-16 lg:py-20">
      <div
        className="banking-hero-glow pointer-events-none absolute top-1/3 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 blur-3xl md:h-[480px] md:w-[480px] lg:h-[600px] lg:w-[600px]"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 md:flex-row md:items-center md:gap-10 md:px-6 lg:gap-8 lg:px-8">
        <motion.div
          className="w-full md:w-1/2 md:-mt-4 lg:-mt-8"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInLeft}
        >
          <h1 className="text-[28px] leading-tight font-bold text-white sm:text-[32px] md:text-[44px] lg:text-[56px]">
            {heroContent.title}
          </h1>
          <p className="mt-4 max-w-md text-sm text-banking-muted md:text-base">
            {heroContent.subtitle}
          </p>
          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#request-demo"
              className="w-full rounded-sm bg-banking-blue px-6 py-3 text-center text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90 sm:w-auto"
            >
              REQUEST DEMO
            </a>
            <a
              href="#contact"
              className="w-full rounded-sm border border-banking-border bg-transparent px-6 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:border-white sm:w-auto"
            >
              CONTACT US
            </a>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInRight}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
            className="w-full max-w-md rounded-xl border border-banking-border bg-banking-card p-5 shadow-2xl sm:max-w-none md:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Recent activity</h2>
              <span className="text-xs text-banking-muted">Last 7 days</span>
            </div>
            <ul className="space-y-4">
              {heroActivities.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-banking-border/60 bg-banking-dark/50 px-4 py-3"
                >
                  <span className="text-sm text-banking-muted">{item.label}</span>
                  <span className="text-sm font-medium text-white">{item.amount}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              <div className="h-2 flex-1 rounded-full bg-banking-blue/40" />
              <div className="h-2 flex-1 rounded-full bg-banking-border" />
              <div className="h-2 flex-1 rounded-full bg-banking-border" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Hero);
