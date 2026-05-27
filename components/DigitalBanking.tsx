import { memo, type ReactElement } from "react";
import { digitalBankingSubsections } from "@/constants/data";
import { DigitalBankingBlock } from "@/components/digital-banking/DigitalBankingBlock";

function DigitalBanking(): ReactElement {
  return (
    <section className="overflow-x-hidden bg-banking-light py-16 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:gap-20 md:px-6 lg:gap-24 lg:px-8">
        {digitalBankingSubsections.map((section) => (
          <DigitalBankingBlock key={section.id} section={section} />
        ))}
      </div>
    </section>
  );
}

export default memo(DigitalBanking);
