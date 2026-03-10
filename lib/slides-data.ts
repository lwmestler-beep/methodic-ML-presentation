export const TOTAL_SLIDES = 12;

export const slideMeta = [
  { id: 0, title: "Cover" },
  { id: 1, title: "The Team" },
  { id: 2, title: "Operating Team" },
  { id: 3, title: "The Deal" },
  { id: 4, title: "Financials" },
  { id: 5, title: "Deal Structure" },
  { id: 6, title: "Stability" },
  { id: 7, title: "Returns" },
  { id: 8, title: "Value Creation" },
  { id: 9, title: "Growth" },
  { id: 10, title: "Downside" },
  { id: 11, title: "Let's Build" },
];

export const teamData = {
  founders: [
    { name: "Gavin Mestler", role: "Managing Partner & Co-Founder", photo: "/founder-gavin.png" },
    { name: "Logan Mestler", role: "Managing Partner & Co-Founder", photo: "/founder-logan.png" },
    { name: "Dean Farber", role: "Managing Partner & Co-Founder", photo: "/founder-dean.png" },
  ],
  stats: [
    { value: "9", label: "Entrepreneurs" },
    { value: "$4M+", label: "Combined Revenue" },
    { value: "7", label: "Strategic Advisors" },
  ],
};

export const operatingTeam = [
  { name: "Shah Durran", role: "Head of AI Systems" },
  { name: "Daniel Berlin", role: "Strategic Development" },
  { name: "Jacob McKinney", role: "Operations & Talent" },
  { name: "Brock Alpher", role: "Marketing & Growth" },
  { name: "Alexander Sica", role: "Head of Sales" },
  { name: "Vega Guo", role: "Tech-Enabled Ops" },
];

export const advisors = [
  { name: "Brad Johnson", title: "Former VP, Wayfair" },
  { name: "Scott Waxler", title: "Lockebridge Capital" },
  { name: "Evan Farber", title: "Cranemere Group" },
  { name: "Erik Noyes", title: "Babson College" },
  { name: "Edward Gorelick", title: "CPA, Gorelick & Uslaner" },
  { name: "Chad Mestler", title: "Helvetica Group" },
  { name: "Vincent Sica", title: "Vintra Holdings" },
];

export const dealFeatures = [
  {
    title: "Full-Service Landscaping",
    desc: "Hardscape construction, plantings, sod installation, landscape design, and seasonal maintenance across Boston's South Shore.",
    icon: "🌿",
  },
  {
    title: "Recurring Revenue Base",
    desc: "5 maintenance crews serving 80–100 customers monthly. $30K–$40K/month in recurring maintenance revenue year-round.",
    icon: "⚙️",
  },
  {
    title: "Commercial Snow Removal",
    desc: "Contracted snow removal for office parks and institutional clients provides reliable winter revenue floor.",
    icon: "❄️",
  },
  {
    title: "$1.5M Equipment Fleet",
    desc: "Substantial fleet of trucks, excavators, skid steers, and specialized landscaping equipment included in purchase price.",
    icon: "🚛",
  },
];

export const financials = [
  { year: "2023", revenue: "$2.62M", sde: "$779K", margin: "29.7%" },
  { year: "2024", revenue: "$2.40M", sde: "$693K", margin: "28.8%" },
  { year: "2025 (Proj.)", revenue: "$2.50M", sde: "$630K", margin: "25.2%" },
];

export const dealStructure = {
  purchasePrice: "$2,200,000",
  transactionCosts: "$125K",
  workingCapital: "$125K",
  sources: [
    { label: "Loan", amount: "$1,225,000", pct: "50%", color: "#4A7FA8" },
    { label: "Co-Investor Equity", amount: "$785,000", pct: "32%", color: "#89B4D4" },
    { label: "Seller Rollover (20%)", amount: "$440,000", pct: "18%", color: "#C5DCF0" },
  ],
  loanTerms: "Loan: 10-year term  •  10.5% interest  •  $203,665 annual debt service  •  Seller invests alongside co-investors, receives distributions until paid off (~Year 6)",
};

export const operationsData = {
  operator: {
    salary: "$100,000+",
    profitShare: "5%",
    description: "The operator manages estimating, crew scheduling, client relationships, and project oversight.",
    note: "Salary + profit share aligns the operator's incentives directly with business performance.",
  },
  backend: [
    { item: "Digital marketing & lead generation" },
    { item: "AI systems & automation" },
    { item: "Operations & process optimization" },
    { item: "Financial oversight & investor reporting" },
    { item: "Strategic growth planning & pricing" },
    { item: "CRM, scheduling, and technology stack" },
  ],
  footer: "This dual structure ensures the business has experienced leadership on-site and a full team of operators behind it scaling systems, marketing, and efficiency from day one.",
};

export const returnsData = {
  irr: 29.4,
  postPaybackYield: 22,
  principalRepayment: 5.8,
  terms: [
    { label: "Preferred Return", value: "8%" },
    { label: "Co-Investor Share (Pre)", value: "70%" },
    { label: "Co-Investor Share (Post)", value: "40%" },
    { label: "Employee Profit Share", value: "5%" },
    { label: "Capital Reserves", value: "3–5%" },
  ],
  note: "Based on $530K Year 1 cash flow (after $100K+ operator salary)  •  conservative annual growth assumptions",
  tagline: "Zero Management Fee: We only win when you do",
};

export const valueCreationPhases = [
  {
    range: "MONTHS 1–6",
    title: "Stabilize & Systematize",
    items: [
      "Install field service platform (Aspire/Jobber)",
      "Replace QuickBooks + Google Calendar",
      "Improve crew utilization & job costing",
      "Formalize customer contracts",
    ],
    color: "#4A7FA8",
  },
  {
    range: "MONTHS 6–18",
    title: "Market & Convert",
    items: [
      "Launch SEO + Google Ads campaigns",
      "Convert hardscape clients to maintenance",
      "Build digital presence & reviews",
      "Systematize estimating process",
    ],
    color: "#89B4D4",
  },
  {
    range: "YEARS 2–5",
    title: "Scale & Expand",
    items: [
      "Grow recurring revenue from 30% to 50%+",
      "Add landscape design services",
      "Expand commercial snow contracts",
      "Route density into adjacent towns",
    ],
    color: "#C5DCF0",
  },
];

export const growthProjections = [
  { year: 1, pct: -5, note: "Transition dip", revenue: 2375, cashflow: 530 },
  { year: 2, pct: 10, note: "Stabilization", revenue: 2612, cashflow: 620 },
  { year: 3, pct: 5, note: "Systems compound", revenue: 2743, cashflow: 710 },
  { year: 4, pct: 5, note: "Services expand", revenue: 2880, cashflow: 810 },
  { year: 5, pct: 5, note: "Full playbook", revenue: 3024, cashflow: 920 },
];

export const downsideProtection = [
  {
    risk: "Owner Transition Risk",
    mitigation: "Seller committed to 6–12 month advisory role with 20% rollover equity. Non-family office admin staying post-sale. Dedicated $100K+ operator hired from day one.",
  },
  {
    risk: "Revenue Diversification",
    mitigation: "No single customer exceeds 5% of revenue. 80–100 active maintenance clients across residential and commercial. Diversified across hardscape, maintenance, and snow.",
  },
  {
    risk: "Seasonal Cash Flow",
    mitigation: "Commercial snow removal contracts fill winter months. Maintenance revenue continues year-round. $125K working capital reserve buffers slow periods.",
  },
  {
    risk: "Asset Protection",
    mitigation: "$1.5M in FF&E provides tangible downside floor. Equipment liquidation value materially de-risks total capital invested in the deal.",
  },
];
