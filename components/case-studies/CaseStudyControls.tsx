export interface CaseStudyControlsProps {
  slideCount: number;
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  viewAllLabel: string;
}

export function CaseStudyControls({
  slideCount,
  activeIndex,
  onPrev,
  onNext,
  onSelect,
  viewAllLabel,
}: CaseStudyControlsProps) {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-banking-border text-white transition-colors hover:border-banking-blue sm:order-1"
        aria-label="Previous case study"
      >
        ←
      </button>
      <div className="order-3 flex justify-center gap-2 sm:order-2 sm:flex-1">
        {Array.from({ length: slideCount }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-banking-blue"
                : "w-2 bg-banking-border hover:bg-banking-blue/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-banking-border text-white transition-colors hover:border-banking-blue sm:order-3"
        aria-label="Next case study"
      >
        →
      </button>
      <a
        href="#"
        className="order-2 shrink-0 text-sm text-banking-blue transition-colors hover:underline sm:order-4 sm:ml-auto"
      >
        {viewAllLabel}
      </a>
    </div>
  );
}
