import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { cloudBankingContent, cloudBankingTableRowWidths } from "@/constants/data";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

function CloudBanking(): ReactElement {
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
          <h2 className="text-[28px] leading-tight font-bold text-white sm:text-[32px] md:text-[38px] lg:text-[44px]">
            {cloudBankingContent.title}
          </h2>
          <p className="mt-4 text-sm text-banking-muted md:text-base">
            {cloudBankingContent.subtitle}
          </p>
          <div className="mt-8 flex flex-col items-start">
            <a
              href="#request-demo"
              className="rounded-sm bg-banking-blue px-6 py-3 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-90"
            >
              REQUEST DEMO
            </a>
            <a
              href="#"
              className="mt-3 text-sm text-banking-blue transition-colors hover:underline"
            >
              LEARN MORE →
            </a>
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
          <div className="w-full min-h-[480px] rounded-xl border border-banking-border bg-banking-card p-5 shadow-2xl md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-banking-border/60 pb-4">
              <h3 className="text-lg font-semibold text-white">AML Dashboard</h3>
              <span className="text-xs text-banking-muted">Live overview</span>
            </div>
            <div className="mb-8 grid grid-cols-2 gap-6">
              {cloudBankingContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-banking-border/60 bg-banking-dark/40 p-4"
                >
                  <p className="text-xs text-banking-muted">{stat.label}</p>
                  <p
                    className={`mt-1 text-4xl font-bold ${stat.tone === "blue" ? "text-banking-blue" : "text-amber-400"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mb-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div
                className="banking-donut relative h-28 w-28 shrink-0 rounded-full"
                aria-hidden
              >
                <div className="absolute inset-4 flex items-center justify-center rounded-full bg-banking-card">
                  <span className="text-sm font-semibold text-white">68%</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-banking-muted">
                {cloudBankingContent.legend.map((item) => (
                  <li key={item.label} className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${item.tone === "blue" ? "bg-banking-blue" : item.tone === "amber" ? "bg-amber-400" : "bg-banking-border"}`}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="h-2 w-1/4 rounded bg-banking-border/80" />
                <div className="h-2 w-1/3 rounded bg-banking-border/80" />
                <div className="h-2 w-1/5 rounded bg-banking-border/80" />
              </div>
              {cloudBankingTableRowWidths.map((width, index) => (
                <div
                  key={index}
                  className={`h-3 rounded bg-banking-border/50 ${width}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(CloudBanking);
