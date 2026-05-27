import type {
  Brand,
  CaseStudy,
  DigitalBankingSubsection,
  FooterLinkGroup,
  HeroActivity,
  InsightPost,
  NavLink,
  OfficeAddress,
  SolutionCard,
  PhoneFeature,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Solutions ▾", href: "#solutions" },
  { label: "Resources ▾", href: "#resources" },
  { label: "About Us", href: "#about" },
];

export const trustedBrands: Brand[] = [
  { name: "SHELLS", icon: "◆" },
  { name: "SmartFinder", icon: "◎" },
  { name: "Zoomer", icon: "▲" },
  { name: "ArtVenue", icon: "✦" },
  { name: "kontrastt", icon: "◐" },
  { name: "WAVESMARATHON", icon: "≋" },
];

export const trustedByLogos: Brand[] = trustedBrands;

export const heroContent = {
  title: "The new foundation of modern banking",
  subtitle:
    "We drive innovation and growth, provide seamless customer experience and operational excellence",
};

export const heroActivities: HeroActivity[] = [
  { label: "Wire transfer received", amount: "+$12,450.00" },
  { label: "Loan payment processed", amount: "-$2,180.00" },
  { label: "Savings interest credited", amount: "+$84.32" },
];

export const solutionsHeading =
  "All of our solutions are tailor-made to your needs";

export const solutionCards: SolutionCard[] = [
  {
    icon: "grid",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "diamond",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
  },
  {
    icon: "hexagon",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.",
  },
  {
    icon: "diamond",
    badge: "NBFC",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
  },
  {
    icon: "cross",
    badge: "NBFC",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation.",
  },
];

export const solutionsCards: SolutionCard[] = solutionCards;

export const cloudBankingContent = {
  title: "A complete cloud-based core banking.",
  subtitle:
    "Faster time to market with our cloud-based core banking services",
  stats: [
    { label: "Transactions screened", value: "450", tone: "blue" as const },
    { label: "High-risk alerts", value: "3", tone: "amber" as const },
  ],
  legend: [
    { label: "Cleared — 306", tone: "blue" as const },
    { label: "Review — 141", tone: "amber" as const },
    { label: "Blocked — 3", tone: "muted" as const },
  ],
};

export const coreBankingChecklist = {
  title:
    "Run a more efficient, flexible, and digitally connected corebanking system",
  left: [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  ],
  right: [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances interest rates number of withdrawals allowed and so on.",
  ],
};

export const ctaBannerContent = {
  title: "Take the full advantage of going paper-less now.",
  subtitle:
    "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations",
};

export const marqueeSegments = [
  "N7",
  "Say",
  "to the new way of banking",
  "CB7",
  "Say",
] as const;

export const digitalBankingSubsections: DigitalBankingSubsection[] = [
  {
    id: "out-of-box",
    layout: "three-col",
    phone: "home",
    heading: "Digital banking out-of-the-box",
    description:
      "N7 helps your financial institution improve the client experience, automate and optimize procedures",
    complianceTitle: "Fully compliant with regulatory requirement",
    complianceDescription:
      "Our platform delivers enterprise-grade security and compliance frameworks designed for modern financial institutions operating at scale.",
    bullets: [
      "Pre-integrated Security System",
      "Fully Compliant With Regulatory Requirement",
      "Digitally Connected Core",
    ],
  },
  {
    id: "legacy",
    layout: "text-phone",
    phone: "chart",
    heading: "No legacy IT systems",
    description:
      "Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation",
    bullets: [
      "Adaptive & Intelligent API monetization",
      "Ambient User Experience",
      "Cloud-native With lower TCO",
    ],
  },
  {
    id: "branches",
    layout: "phone-text",
    phone: "profile",
    heading: "No traditional branches",
    description:
      "Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs",
    bullets: [
      "Branchless & Paperless Banking",
      "Digital Transformation Capability",
      "Optimized, Adoptable and Scalable",
    ],
  },
];

export const insightsContent = {
  title: "Get yourself up-to-speed on all the things happening in fintech",
  ctaLabel: "INSIGHTS",
  readAllLabel: "READ ALL INSIGHTS →",
};

export const insightPosts: InsightPost[] = [
  {
    featured: true,
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "INNOVATION",
    title: "Open banking APIs reshaping customer expectations",
    author: "Sarah Chen",
    date: "02/07/24",
  },
  {
    tag: "COMPLIANCE",
    title: "Navigating regulatory change in cloud-native banking",
    author: "James Miller",
    date: "19/06/24",
  },
  {
    tag: "OPERATIONS",
    title: "Reducing TCO with a modern core banking stack",
    author: "Elena Rossi",
    date: "11/05/24",
  },
];

export const caseStudiesContent = {
  title: "Our Case Studies",
  tag: "GETTING STARTED",
  slideTitle: "How we help brand reach out to more people",
  viewAllLabel: "VIEW ALL →",
};

export const caseStudySlides: CaseStudy[] = Array.from(
  { length: 4 },
  (_, id) => ({ id, client: "Zoomerr" }),
);

export const caseStudies: CaseStudy[] = caseStudySlides;

export const footerOffices: OfficeAddress[] = [
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "26 Main Road Sundridge, TN14 6EP,",
      "England, United Kingdom",
    ],
  },
  {
    city: "Dubai",
    lines: [
      "Linktia Infosystems Ltd – CB7,",
      "Jumeirah Business Center, Cluster 5,",
      "Cluster W, Jumeirah Lakes Towers,",
      "Dubai, United Arab Emirates",
    ],
  },
  {
    city: "London",
    lines: [
      "Linktia Infosystems Ltd – CB7, Nirmal,",
      "Anand Nagar, Suncity Road, Pune,",
      "Maharashtra, 411041, India",
    ],
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Solutions",
    links: [
      "Core Banking CB7",
      "Digital Banking N7",
      "Open Banking",
      "Loan Origination System",
      "Loan Management System",
      "Digital Transformation",
    ],
  },
  {
    title: "N7 Banking",
    links: [
      "About Us",
      "Solutions",
      "Contact",
      "Company",
      "Careers",
      "Insights",
      "Core Team",
      "Brand Center",
    ],
  },
  {
    title: "Our Socials",
    links: ["LinkedIn", "X"],
  },
];

export const footerSolutions: string[] =
  footerLinkGroups.find((group) => group.title === "Solutions")?.links ?? [];

export const footerN7Banking: string[] =
  footerLinkGroups.find((group) => group.title === "N7 Banking")?.links ?? [];

export const officeAddresses: OfficeAddress[] = footerOffices;

export const digitalBankingFeatures: PhoneFeature[] = [
  {
    type: "home",
    actions: ["Fund Transfer", "Add Money", "More"],
    transactions: [
      { label: "Starbucks", amount: "-$12.50" },
      { label: "Salary deposit", amount: "+$3,200.00" },
      { label: "Electric bill", amount: "-$89.00" },
    ],
  },
  {
    type: "chart",
    chartHeights: ["h-8", "h-14", "h-10", "h-16", "h-12"],
    chartTransactions: [
      { label: "Transfer to savings", amount: "-$500.00" },
      { label: "Refund received", amount: "+$24.99" },
    ],
  },
  {
    type: "profile",
    menuItems: ["Profile setting", "Setting", "Support", "Sign out"],
  },
];

export const cloudBankingTableRowWidths = [
  "w-full",
  "w-5/6",
  "w-4/5",
  "w-full",
  "w-3/4",
] as const;

export const coreBankingBarHeights = [
  "h-16",
  "h-24",
  "h-12",
  "h-28",
  "h-20",
  "h-32",
  "h-14",
] as const;

export const footerCopyright =
  "Copyright © 2022 by Linktia Infosystems Limited — CB7 and N7 as Commercial Brand — Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13000802";
