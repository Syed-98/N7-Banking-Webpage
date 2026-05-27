import { memo, type ReactElement } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudiesContent, caseStudySlides } from "@/constants/data";
import { slideCarousel } from "@/lib/motion";
import { CaseStudySlide } from "@/components/case-studies/CaseStudySlide";
import { CaseStudyControls } from "@/components/case-studies/CaseStudyControls";

function CaseStudies(): ReactElement {
  const [[activeIndex, direction], setSlide] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number): void => {
    const nextIndex =
      (activeIndex + newDirection + caseStudySlides.length) %
      caseStudySlides.length;
    setSlide([nextIndex, newDirection]);
  };

  const goToSlide = (index: number): void => {
    if (index === activeIndex) return;
    setSlide([index, index > activeIndex ? 1 : -1]);
  };

  return (
    <section className="overflow-x-hidden bg-banking-dark py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-[26px] font-bold text-white sm:text-[30px] md:mb-12 md:text-[32px] lg:text-[36px]">
          {caseStudiesContent.title}
        </h2>

        <div className="min-h-[360px] overflow-hidden rounded-xl border border-banking-border bg-banking-card p-5 md:min-h-[320px] md:p-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideCarousel}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ willChange: "transform, opacity" }}
            >
              <CaseStudySlide client={caseStudySlides[activeIndex].client} />
            </motion.div>
          </AnimatePresence>
        </div>

        <CaseStudyControls
          slideCount={caseStudySlides.length}
          activeIndex={activeIndex}
          onPrev={() => paginate(-1)}
          onNext={() => paginate(1)}
          onSelect={goToSlide}
          viewAllLabel={caseStudiesContent.viewAllLabel}
        />
      </div>
    </section>
  );
}

export default memo(CaseStudies);
