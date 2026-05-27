import type { ReactElement } from "react";
export interface CheckItemProps {
  label: string;
}

export function CheckItem({ label }: CheckItemProps): ReactElement {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-banking-blue text-[10px] font-bold text-white"
        aria-hidden
      >
        ✓
      </span>
      <span className="text-sm text-white">{label}</span>
    </li>
  );
}
