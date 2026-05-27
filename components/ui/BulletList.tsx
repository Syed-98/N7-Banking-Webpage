import type { ReactElement } from "react";
export interface BulletListProps {
  items: string[];
  variant?: "light" | "dark";
}

export function BulletList({
  items,
  variant = "light",
}: BulletListProps): ReactElement {
  const textClass =
    variant === "light" ? "text-banking-muted-light" : "text-banking-muted";

  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-3 text-sm ${textClass}`}>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1E6FFF]" />
          {item}
        </li>
      ))}
    </ul>
  );
}
