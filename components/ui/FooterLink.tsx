import type { ReactElement } from "react";
export interface FooterLinkProps {
  label: string;
  href?: string;
}

export function FooterLink({ label, href = "#" }: FooterLinkProps): ReactElement {
  return (
    <a
      href={href}
      className="flex items-center gap-1 text-sm text-banking-muted transition-colors hover:text-white"
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
