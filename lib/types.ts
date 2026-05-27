export type SolutionIconType = "grid" | "diamond" | "hexagon" | "cross";

export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionCard {
  icon: SolutionIconType;
  title: string;
  description: string;
  badge?: string;
}

export interface InsightPost {
  tag: string;
  title: string;
  author: string;
  date: string;
  featured?: boolean;
}

export interface CaseStudySlide {
  id: number;
  client: string;
}

export interface OfficeAddress {
  city: string;
  lines: string[];
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface DigitalBankingSubsection {
  id: string;
  heading: string;
  description: string;
  bullets?: string[];
  complianceTitle?: string;
  complianceDescription?: string;
  phone: "home" | "chart" | "profile";
  layout: "three-col" | "text-phone" | "phone-text";
}

export interface HeroActivity {
  label: string;
  amount: string;
}

export interface Brand {
  name: string;
  icon: string;
}
