import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { insightPosts, insightsContent } from "@/constants/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { InsightCard } from "@/components/insights/InsightCard";

function Insights(): ReactElement {
  return (
    <section id="insights" className="bg-banking-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:gap-12 md:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        <div className="w-full shrink-0 md:max-w-md lg:max-w-none lg:w-[35%]">
          <h2 className="text-[26px] leading-tight font-bold text-white sm:text-[30px] md:text-[32px] lg:text-[36px]">
            {insightsContent.title}
          </h2>
          <a
            href="#insights"
            className="mt-8 inline-block rounded-sm border border-banking-border px-6 py-2 text-sm text-white transition-colors hover:border-white"
          >
            {insightsContent.ctaLabel}
          </a>
        </div>

        <div className="w-full lg:w-[65%]">
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            style={{ willChange: "transform, opacity" }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {insightPosts.map((post) => (
              <InsightCard key={post.title} post={post} />
            ))}
          </motion.div>
          <a
            href="#"
            className="mt-6 block text-center text-sm text-banking-blue transition-colors hover:underline sm:text-right"
          >
            {insightsContent.readAllLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(Insights);
