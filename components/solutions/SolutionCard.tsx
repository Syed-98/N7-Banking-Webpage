import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { SolutionCard as SolutionCardData } from "@/types";
import { fadeInUp } from "@/lib/motion";
import { SolutionIcon } from "./SolutionIcon";

export interface SolutionCardProps {
  card: SolutionCardData;
}

export function SolutionCard({ card }: SolutionCardProps): ReactElement {
  return (
    <motion.article
      variants={fadeInUp}
      className="relative rounded-lg border border-banking-border bg-transparent p-5 transition-colors duration-200 hover:border-banking-blue/50 hover:bg-banking-card md:p-6"
    >
      {card.badge && (
        <span className="absolute top-4 right-4 rounded-full border border-banking-border px-2 py-0.5 text-xs text-banking-muted">
          {card.badge}
        </span>
      )}
      <SolutionIcon type={card.icon} />
      <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-banking-muted">
        {card.description}
      </p>
      <a
        href="#"
        className="mt-4 inline-block text-xs text-banking-blue transition-colors hover:underline"
      >
        LEARN MORE →
      </a>
    </motion.article>
  );
}
