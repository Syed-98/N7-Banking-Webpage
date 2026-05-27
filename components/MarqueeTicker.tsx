import { marqueeSegments } from "@/constants/data";
import { memo, type ReactElement } from "react";

function TickerContent(): ReactElement {
  return (
    <span className="flex shrink-0 items-center gap-4 px-4 text-sm font-medium tracking-wider whitespace-nowrap text-white uppercase">
      {marqueeSegments.map((segment, index) => (
        <span key={segment} className="flex items-center gap-4">
          {index > 0 && <span className="text-banking-blue">✳</span>}
          <span>{segment}</span>
        </span>
      ))}
      <span className="text-banking-blue">✳</span>
    </span>
  );
}

function MarqueeTicker(): ReactElement {
  return (
    <section
      className="overflow-hidden border-t border-banking-border bg-banking-cta py-4"
      aria-label="Scrolling announcement"
    >
      <div className="marquee-track flex w-max">
        <TickerContent />
        <TickerContent />
      </div>
    </section>
  );
}

export default memo(MarqueeTicker);
