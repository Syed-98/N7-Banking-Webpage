import type { ReactElement } from "react";
import { motion } from "framer-motion";
import type { DigitalBankingSubsection } from "@/types";
import { fadeInUp, viewportOnce } from "@/lib/motion";
import { BulletList } from "@/components/ui/BulletList";
import { PhoneScreen } from "./PhoneScreens";

export interface DigitalBankingBlockProps {
  section: DigitalBankingSubsection;
}

export function DigitalBankingBlock({
  section,
}: DigitalBankingBlockProps): ReactElement {
  const copyBlock = (
    <>
      <h2 className="text-[28px] leading-tight font-bold text-banking-cta sm:text-[32px] md:text-[36px] lg:text-[40px]">
        {section.heading}
      </h2>
      <p className="mt-4 text-sm text-banking-muted-light">{section.description}</p>
      {section.layout === "three-col" && (
        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#request-demo"
            className="w-full rounded-sm bg-banking-blue px-6 py-3 text-center text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            REQUEST DEMO
          </a>
          <a
            href="#"
            className="text-sm text-banking-blue transition-colors hover:underline"
          >
            LEARN MORE →
          </a>
        </div>
      )}
      {section.bullets && section.layout !== "three-col" && (
        <BulletList items={section.bullets} variant="light" />
      )}
    </>
  );

  const complianceBlock =
    section.complianceTitle && section.bullets ? (
      <div>
        <h3 className="text-lg font-semibold text-banking-cta">
          {section.complianceTitle}
        </h3>
        {section.complianceDescription && (
          <p className="mt-2 text-sm leading-relaxed text-banking-muted-light">
            {section.complianceDescription}
          </p>
        )}
        <BulletList items={section.bullets} variant="light" />
      </div>
    ) : null;

  if (section.layout === "three-col") {
    return (
      <motion.div
        className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12 lg:gap-8"
        style={{ willChange: "transform, opacity" }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <div className="lg:col-span-4">{copyBlock}</div>
        <div className="flex justify-center lg:col-span-4">
          <PhoneScreen type={section.phone} />
        </div>
        <div className="lg:col-span-4">{complianceBlock}</div>
      </motion.div>
    );
  }

  const textFirst = section.layout === "text-phone";

  return (
    <motion.div
      className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
      style={{ willChange: "transform, opacity" }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeInUp}
    >
      <div className={textFirst ? "order-2 lg:order-1" : "order-2"}>
        <h3 className="text-2xl leading-tight font-bold text-banking-cta sm:text-[28px] md:text-3xl">
          {section.heading}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-banking-muted-light">
          {section.description}
        </p>
        {section.bullets && <BulletList items={section.bullets} variant="light" />}
      </div>
      <div
        className={`flex justify-center ${textFirst ? "order-1 lg:order-2" : "order-1"}`}
      >
        <PhoneScreen type={section.phone} />
      </div>
    </motion.div>
  );
}
