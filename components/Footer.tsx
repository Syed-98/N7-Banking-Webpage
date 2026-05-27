import { memo, type ReactElement } from "react";
import {
  footerCopyright,
  footerLinkGroups,
  footerOffices,
} from "@/constants/data";
import { FooterLinkColumn } from "@/components/ui/FooterLinkColumn";

function Footer(): ReactElement {
  return (
    <footer className="border-t border-banking-border bg-banking-dark pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:gap-8">
          <div className="shrink-0 text-center lg:text-left">
            <span className="bg-gradient-to-br from-[#1E6FFF] to-[#00C2FF] bg-clip-text text-7xl font-bold text-transparent md:text-8xl lg:text-8xl">
              N7
            </span>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
            {footerOffices.map((office, index) => (
              <div key={`${office.city}-${index}`}>
                <h3 className="mb-3 text-sm font-semibold text-white">
                  {office.city}
                </h3>
                <address className="text-sm leading-relaxed text-banking-muted not-italic">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 md:gap-10 lg:grid-cols-3">
          {footerLinkGroups.map((group) => (
            <FooterLinkColumn key={group.title} group={group} />
          ))}
        </div>

        <div className="mt-12 border-t border-banking-border pt-6">
          <p className="text-center text-xs leading-relaxed text-banking-muted-light">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
