import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { InsightPost } from "@/types";
import { fadeInUp } from "@/lib/motion";
import { ThumbnailGrid } from "@/components/ui/ThumbnailGrid";

export interface InsightCardProps {
  post: InsightPost;
}

export function InsightCard({ post }: InsightCardProps): ReactElement {
  return (
    <motion.article
      variants={fadeInUp}
      className="min-h-[200px] rounded-xl border border-banking-border bg-banking-card p-6"
    >
      {post.featured && <ThumbnailGrid compact />}
      <span className="text-xs tracking-wider text-banking-blue uppercase">
        {post.tag}
      </span>
      <h3 className="mt-2 text-base leading-snug font-semibold text-white">
        {post.title}
      </h3>
      <p className="mt-2 text-xs text-banking-muted">
        {post.author} · {post.date}
      </p>
      <a
        href="#"
        className="mt-4 inline-block rounded-sm border border-banking-border px-4 py-1.5 text-xs text-white transition-colors hover:border-banking-blue"
      >
        READ MORE
      </a>
    </motion.article>
  );
}
