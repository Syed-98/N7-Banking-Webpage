import type { FooterLinkGroup } from "@/types";
import type { ReactElement } from "react";
import { FooterLink } from "./FooterLink";

export interface FooterLinkColumnProps {
  group: FooterLinkGroup;
}

export function FooterLinkColumn({ group }: FooterLinkColumnProps): ReactElement {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{group.title}</h3>
      <ul className="flex flex-col gap-2">
        {group.links.map((link) => (
          <li key={link}>
            <FooterLink label={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
