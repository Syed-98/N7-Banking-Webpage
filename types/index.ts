export interface NavLink {
  label: string;
  href: string;
}

export type SolutionIconType = "grid" | "diamond" | "hexagon" | "cross";

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

export interface CaseStudy {
  id: number;
  client: string;
}

export interface OfficeAddress {
  city: string;
  lines: string[];
}

export interface FooterLink {
  title: string;
  links: string[];
}

export interface Brand {
  name: string;
  icon: string;
}

export type PhoneScreenType = "home" | "chart" | "profile";

export interface PhoneFeatureTransaction {
  label: string;
  amount: string;
}

export interface PhoneFeatureChartTransaction {
  label: string;
  amount: string;
}

export interface PhoneFeature {
  type: PhoneScreenType;
  actions?: string[];
  transactions?: PhoneFeatureTransaction[];
  chartHeights?: string[];
  chartTransactions?: PhoneFeatureChartTransaction[];
  menuItems?: string[];
}

export interface DigitalBankingSubsection {
  id: string;
  heading: string;
  description: string;
  bullets?: string[];
  complianceTitle?: string;
  complianceDescription?: string;
  phone: PhoneScreenType;
  layout: "three-col" | "text-phone" | "phone-text";
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export interface HeroActivity {
  label: string;
  amount: string;
}
