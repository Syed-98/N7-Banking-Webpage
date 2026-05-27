import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { coreBankingBarHeights, coreBankingChecklist } from "@/constants/data";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";
import { CheckItem } from "@/components/ui/CheckItem";

function CoreBankingFeatures(): ReactElement {
  return (
    <section className="bg-banking-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 md:flex-row md:items-center md:gap-12 md:px-6 lg:gap-16 lg:px-8">
        <motion.div
          className="w-full md:w-1/2"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInLeft}
        >
          <div className="min-h-[420px] rounded-xl border border-banking-border bg-banking-card p-5 shadow-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-banking-border/60 pb-4">
              <h3 className="text-lg font-semibold text-white">Financial Dashboard</h3>
              <span className="text-xs text-banking-muted">Q1 2026</span>
            </div>
            <div className="mb-8 rounded-lg border border-banking-border/60 bg-banking-dark/40 p-4">
              <p className="mb-4 text-xs text-banking-muted">Revenue overview</p>
              <div className="flex h-36 items-end justify-between gap-2">
                {coreBankingBarHeights.map((height, index) => (
                  <div
                    key={index}
                    className={`w-full max-w-7 rounded-t ${height} ${index % 2 === 0 ? "bg-banking-blue/80" : "bg-banking-blue/30"}`}
                  />
                ))}
              </div>
            </div>
            <div className="mb-6 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-md border border-banking-border/60 bg-banking-dark/40 p-3"
                >
                  <div className="h-2 w-2/3 rounded bg-banking-border/80" />
                  <div
                    className={`mt-2 h-4 w-1/2 rounded ${i === 0 ? "bg-banking-blue/60" : i === 1 ? "bg-emerald-400/60" : "bg-amber-400/60"}`}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <div className="h-2 w-1/4 rounded bg-banking-border" />
                <div className="h-2 w-1/3 rounded bg-banking-border" />
                <div className="h-2 w-1/5 rounded bg-banking-border" />
              </div>
              {[0, 1, 2, 3].map((row) => (
                <div key={row} className="h-3 w-full rounded bg-banking-border/50" />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          style={{ willChange: "transform, opacity" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ ...viewportOnce, amount: 0.3 }}
          variants={fadeInRight}
        >
          <h2 className="text-[26px] leading-tight font-bold text-white sm:text-[30px] md:text-[32px] lg:text-[36px]">
            {coreBankingChecklist.title}
          </h2>
          <p className="mt-6 mb-4 text-sm text-banking-muted">What you will get:</p>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-x-6">
            <ul className="flex flex-col gap-2">
              {coreBankingChecklist.left.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
            <ul className="flex flex-col gap-2">
              {coreBankingChecklist.right.map((item) => (
                <CheckItem key={item} label={item} />
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CoreBankingFeatures);
