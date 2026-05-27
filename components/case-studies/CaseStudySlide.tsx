import type { ReactElement } from "react";
import { caseStudiesContent } from "@/constants/data";
import { ThumbnailGrid } from "@/components/ui/ThumbnailGrid";

export interface CaseStudySlideProps {
  client: string;
}

export function CaseStudySlide({ client }: CaseStudySlideProps): ReactElement {
  return (
    <div className="flex min-h-[320px] flex-col gap-8 lg:min-h-0 lg:flex-row lg:items-center">
      <div className="flex shrink-0 justify-center lg:w-[280px]">
        <ThumbnailGrid />
      </div>
      <div className="flex-1">
        <span className="text-xs tracking-wider text-banking-blue uppercase">
          {caseStudiesContent.tag}
        </span>
        <h3 className="mt-2 text-[22px] leading-tight font-bold text-white sm:text-2xl md:text-[28px]">
          {caseStudiesContent.slideTitle}
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full bg-banking-border text-xs text-banking-muted"
            aria-hidden
          >
            Z
          </span>
          <span className="text-sm text-banking-muted">{client}</span>
        </div>
        <a
          href="#"
          className="mt-6 inline-block rounded-sm border border-banking-border px-6 py-2 text-sm text-white transition-colors hover:border-banking-blue"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
}
