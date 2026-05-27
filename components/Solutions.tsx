import { memo, type ReactElement } from "react";
import { motion } from "framer-motion";
import { solutionCards, solutionsHeading } from "@/constants/data";
import { staggerContainer, viewportOnce } from "@/lib/motion";
import { SolutionCard } from "@/components/solutions/SolutionCard";

function Solutions(): ReactElement {
  return (
    <section id="solutions" className="bg-banking-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:flex-row md:items-start md:gap-10 md:px-6 lg:gap-16 lg:px-8">
        <div className="w-full shrink-0 md:w-[38%] md:sticky md:top-[120px] lg:w-[40%] lg:self-start">
          <h2 className="text-[28px] leading-tight font-bold text-white sm:text-[32px] md:text-[36px] lg:text-[40px]">
            {solutionsHeading}
          </h2>
          <a
            href="#request-demo"
            className="mt-6 inline-block rounded-sm border border-banking-blue px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-banking-blue"
          >
            REQUEST DEMO
          </a>
        </div>

        <motion.div
          className="grid w-full grid-cols-1 gap-4 md:w-[62%] md:grid-cols-2 md:gap-6 lg:w-[60%]"
          style={{ willChange: "transform, opacity" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {solutionCards.map((card) => (
            <SolutionCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Solutions);
