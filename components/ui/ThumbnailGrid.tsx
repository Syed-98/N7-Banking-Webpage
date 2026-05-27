export interface ThumbnailGridProps {
  className?: string;
  compact?: boolean;
}

export function ThumbnailGrid({
  className = "",
  compact = false,
}: ThumbnailGridProps) {
  return (
    <div
      className={`grid grid-cols-3 grid-rows-2 gap-2 rounded-lg bg-banking-thumb p-3 ${compact ? "mb-4 h-32" : "aspect-square w-full max-w-[280px] gap-3 p-4"} ${className}`}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center"
          aria-hidden
        >
          <span
            className={`absolute rotate-45 bg-banking-blue/50 ${compact ? "h-0.5 w-8" : "h-0.5 w-10"}`}
          />
          <span
            className={`absolute -rotate-45 bg-banking-blue/50 ${compact ? "h-0.5 w-8" : "h-0.5 w-10"}`}
          />
        </div>
      ))}
    </div>
  );
}
