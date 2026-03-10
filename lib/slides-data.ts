export const TOTAL_SLIDES = 12;

export const slideMeta = [
  { id: 0, title: "Cover" },
  { id: 1, title: "The Team" },
  { id: 2, title: "Operating Team" },
  { id: 3, title: "The Deal" },
  { id: 4, title: "Financials" },
  { id: 5, title: "Operations" },
  { id: 6, title: "Deal Structure" },
  { id: 7, title: "Growth" },
  { id: 8, title: "Returns" },
  { id: 9, title: "Opportunity" },
  { id: 10, title: "Value Creation" },
  { id: 11, title: "Downside" },
  { id: 12, title: "Let's Build" },
];

export const teamData = {
  founders: [
    { name: "Logan Mestler", role: "Co-Founder & Managing Partner" },
    { name: "Gavin Mestler", role: "Co-Founder & Managing Partner" },
    { name: "Dean Farber", role: "Co-Founder & Partner" },
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

export const dealStats = [
  { label: "Est.", value: "2005" },
  { label: "Revenue", value: "$2.5M" },
  { label: "Crews", value: "5" },
  { label: "Clients", value: "80–100" },
  { label: "Equipment", value: "$1.5M" },
];

export const financials = [
  { year: "2023", revenue: 2.62, sde: 0.779, margin: 29.7 },
  { year: "2024", revenue: 2.4, sde: 0.693, margin: 28.8 },
  { year: "2025", revenue: 2.5, sde: 0.63, margin: 25.2 },
];

export const dealStructure = {
  purchasePrice: 2200000,
  transactionCosts: 125000,
  workingCapital: 125000,
  sources: [
    { label: "SBA Loan", amount: 1225000, pct: 50, color: "#4A7FA8" },
    { label: "Co-Investor Equity", amount: 785000, pct: 32, color: "#89B4D4" },
    { label: "Seller Rollover", amount: 440000, pct: 18, color: "#C5DCF0" },
  ],
  loanTerms: "10-year · 10.5% interest · $203,665 annual debt service",
};

export const growthProjections = [
  { year: 1, note: "Transition dip", pct: -5, revenue: 2375, cashflow: 530 },
  { year: 2, note: "Stabilization", pct: 10, revenue: 2612, cashflow: 620 },
  { year: 3, note: "Systems compound", pct: 5, revenue: 2743, cashflow: 710 },
  { year: 4, note: "Services expand", pct: 5, revenue: 2880, cashflow: 810 },
  { year: 5, note: "Full playbook", pct: 5, revenue: 3024, cashflow: 920 },
];

export const returnsData = {
  irr: 29.4,
  postPaybackYield: 22,
  principalRepayment: 5.8,
  preferredReturn: 8,
  coInvestorSharePre: 70,
  coInvestorSharePost: 40,
  employeeProfitShare: 5,
};

export const opportunityGaps = [
  "No digital marketing, SEO, or Google Ads",
  "Poor website / media presence",
  "No CRM system",
  "No field service platform",
  "No route optimization or job costing",
  "Hardscape clients not converted to maintenance",
  "No formal estimating process",
  "Customer contracts not formalized",
];

export const opportunityUpside = [
  "Landscape design as growth addition",
  "Snow contracts can be expanded",
  "Adjacent towns untapped",
  "Industry growing at 5.2% CAGR through 2029",
];

export const valueCreationPhases = [
  {
    range: "Months 1–6",
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
    range: "Months 6–18",
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
    range: "Years 2–5",
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

export const downsideProtection = [
  {
    risk: "Owner Transition Risk",
    mitigation: "Seller committed to 6–12 month advisory role with 20% rollover equity. Non-family office admin staying post-sale. Dedicated $100K+ operator hired from day one.",
    icon: "👤",
  },
  {
    risk: "Revenue Concentration",
    mitigation: "No single customer exceeds 5% of revenue. 80–100 active maintenance clients across residential and commercial. Diversified across hardscape, maintenance, and snow.",
    icon: "📊",
  },
  {
    risk: "Seasonal Cash Flow",
    mitigation: "Commercial snow removal fills winter months. Maintenance revenue continues year-round. $125K working capital reserve buffers slow periods.",
    icon: "❄️",
  },
  {
    risk: "Capital at Risk",
    mitigation: "$1.5M in FF&E provides tangible downside floor. Equipment liquidation value materially de-risks total capital invested in the deal.",
    icon: "🔒",
  },
];
