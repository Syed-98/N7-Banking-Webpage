import type { ReactElement } from "react";
import { lazy, Suspense } from "react";

const Navbar = lazy(() =>
  import("@/components").then((module) => ({ default: module.Navbar })),
);
const Hero = lazy(() =>
  import("@/components").then((module) => ({ default: module.Hero })),
);
const TrustedBy = lazy(() =>
  import("@/components").then((module) => ({ default: module.TrustedBy })),
);
const Solutions = lazy(() =>
  import("@/components").then((module) => ({ default: module.Solutions })),
);
const CloudBanking = lazy(() =>
  import("@/components").then((module) => ({ default: module.CloudBanking })),
);
const CoreBankingFeatures = lazy(() =>
  import("@/components").then((module) => ({ default: module.CoreBankingFeatures })),
);
const CTABanner = lazy(() =>
  import("@/components").then((module) => ({ default: module.CTABanner })),
);
const MarqueeTicker = lazy(() =>
  import("@/components").then((module) => ({ default: module.MarqueeTicker })),
);
const DigitalBanking = lazy(() =>
  import("@/components").then((module) => ({ default: module.DigitalBanking })),
);
const Insights = lazy(() =>
  import("@/components").then((module) => ({ default: module.Insights })),
);
const CaseStudies = lazy(() =>
  import("@/components").then((module) => ({ default: module.CaseStudies })),
);
const Footer = lazy(() =>
  import("@/components").then((module) => ({ default: module.Footer })),
);

export default function Home(): ReactElement {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#050D1A]" />}>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <TrustedBy />
        <Solutions />
        <CloudBanking />
        <CoreBankingFeatures />
        <CTABanner />
        <MarqueeTicker />
        <DigitalBanking />
        <CTABanner />
        <Insights />
        <CaseStudies />
        <CTABanner />
      </main>
      <Footer />
    </Suspense>
  );
}
