import type { ReactElement } from "react";
import type { SolutionIconType } from "@/types";

export interface SolutionIconProps {
  type: SolutionIconType;
}

export function SolutionIcon({ type }: SolutionIconProps): ReactElement {
  const className = "h-8 w-8 text-banking-blue";

  switch (type) {
    case "grid":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "diamond":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3L21 12L12 21L3 12L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hexagon":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cross":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}
