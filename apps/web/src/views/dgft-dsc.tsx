"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  Globe,
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  BadgeCheck,
  Ship,
  FileText,
  Building2,
  ClipboardList,
  Phone,
  Upload,
  CreditCard,
  Download,
  Star,
  Clock,
  Headset,
  UsbIcon,
  Zap,
  Users,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  Landmark,
  Package,
  Award,
  Scale,
  FileCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                       */
/* -------------------------------------------------------------------------- */

const WHO_NEEDS = [
  {
    title: "Import / Export Businesses",
    desc: "Any company or proprietorship involved in the import or export of goods and services from India.",
  },
  {
    title: "IEC Holders",
    desc: "Every business holding an Import Export Code (IEC) must use a DGFT DSC for online filings and modifications.",
  },
  {
    title: "Customs House Agents (CHA)",
    desc: "Licensed customs brokers who file shipping bills and bills of entry on behalf of importers and exporters.",
  },
  {
    title: "Freight Forwarders",
    desc: "Logistics companies that manage cargo movement and need to interact with DGFT for authorizations.",
  },
  {
    title: "Export Houses & Star Export Houses",
    desc: "Recognized exporters applying for status recognition or benefits under the Foreign Trade Policy.",
  },
  {
    title: "SEZ Units & EOUs",
    desc: "Units operating in Special Economic Zones and Export Oriented Units that file regularly on the DGFT portal.",
  },
  {
    title: "Trading Companies",
    desc: "Merchant exporters, trading houses, and commodity traders engaged in cross-border trade.",
  },
  {
    title: "Manufacturers with Export Operations",
    desc: "Manufacturing units that export finished goods and need EPCG licenses, Advance Authorizations, or duty exemptions.",
  },
];

const DGFT_OPERATIONS = [
  {
    title: "IEC Registration & Modification",
    desc: "The Import Export Code is a mandatory 10-digit code issued by DGFT for any person or entity involved in import/export. New IEC applications, as well as modifications to existing IEC details (like adding products, directors, or changing address), must be digitally signed on the DGFT portal.",
  },
  {
    title: "IEC Amendment",
    desc: "Changes to your IEC such as address update, addition or removal of directors/partners, change in product codes, or bank account details all require DSC-authenticated submissions on the DGFT portal.",
  },
  {
    title: "AD Code Registration",
    desc: "Authorized Dealer Code registration links your bank account to your IEC for foreign exchange remittances. Every exporter must register their AD Code on DGFT using a DSC before they can receive export proceeds.",
  },
  {
    title: "Branch Addition",
    desc: "If your business opens a new branch office, warehouse, or manufacturing facility that will be involved in import/export, you must add the branch on the DGFT portal using your digital signature.",
  },
  {
    title: "EPCG License Application",
    desc: "The Export Promotion Capital Goods scheme allows import of capital goods at zero or reduced customs duty for export production. EPCG license applications on DGFT require DSC authentication.",
  },
  {
    title: "Advance Authorization",
    desc: "Advance Authorization permits duty-free import of raw materials and inputs needed to manufacture export goods. Applications must be filed and digitally signed on the DGFT portal.",
  },
  {
    title: "DFIA (Duty Free Import Authorization)",
    desc: "DFIA allows duty-free import of inputs after exports have been completed. Unlike Advance Authorization, DFIA is transferable and must be applied for with DSC on DGFT.",
  },
  {
    title: "RoDTEP / RoSCTL Scrip Application",
    desc: "Remission of Duties and Taxes on Exported Products (RoDTEP) and Rebate of State and Central Taxes and Levies (RoSCTL) replaced the earlier MEIS/SEIS schemes. Exporters claim duty credit scrips digitally via the DGFT portal.",
  },
  {
    title: "Country of Origin Certificates",
    desc: "Certificates of Origin are required to claim preferential tariff rates under various Free Trade Agreements (FTAs). DGFT issues electronic Certificates of Origin (eCoO) that require DSC for application.",
  },
  {
    title: "Export Obligation Discharge",
    desc: "After fulfilling export obligations under EPCG or Advance Authorization, you must submit an Export Obligation Discharge Certificate (EODC) application on DGFT, digitally signed with your DSC.",
  },
  {
    title: "Star Export House Application",
    desc: "Businesses that achieve specified export performance thresholds can apply for One Star to Five Star Export House status, which provides various privileges and priority processing on government portals.",
  },
  {
    title: "RCMC (Registration cum Membership Certificate)",
    desc: "Export Promotion Councils issue RCMC to exporters, which is required for availing export incentives. The application and renewal process on DGFT requires digital signature authentication.",
  },
];

const RELATED_PORTALS = [
  {
    name: "ICEGATE",
    url: "icegate.gov.in",
    icon: Landmark,
    desc: "Indian Customs Electronic Gateway for filing Bills of Entry, Shipping Bills, and all customs EDI transactions. DGFT DSC is accepted on ICEGATE for customs clearance, duty payment, and document submission.",
  },
  {
    name: "ECGC",
    url: "ecgc.in",
    icon: ShieldCheck,
    desc: "Export Credit Guarantee Corporation provides export credit insurance to Indian exporters. Policy applications, claims, and premium payments can be signed using your DGFT DSC.",
  },
  {
    name: "FIEO",
    url: "fieo.org",
    icon: Globe,
    desc: "Federation of Indian Export Organisations is the apex body for Indian exporters. Membership applications, RCMC processing, and trade facilitation services accept DGFT-profile digital signatures.",
  },
];

const CERTIFYING_AUTHORITIES = [
  {
    name: "eMudhra",
    desc: "India's largest Certifying Authority, licensed by CCA (Controller of Certifying Authorities). eMudhra issues DGFT-profile DSCs with Aadhaar-based eKYC for fast paperless issuance. Trusted by millions of businesses nationwide.",
    features: [
      "Aadhaar eKYC - 30 minute issuance",
      "CCA licensed since 2008",
      "DGFT-specific certificate profile",
      "Free online revocation support",
    ],
  },
  {
    name: "Capricorn",
    desc: "Capricorn Identity Services (Capricorn CA) is a government-licensed Certifying Authority known for competitive pricing and reliable DGFT DSC issuance. Capricorn DSCs are recognized across all DGFT and ICEGATE operations.",
    features: [
      "Competitive DGFT DSC pricing",
      "CCA licensed Certifying Authority",
      "Full DGFT portal compatibility",
      "Dedicated EXIM support team",
    ],
  },
];

const APPLY_STEPS = [
  {
    step: 1,
    icon: Building2,
    title: "Select Certifying Authority",
    desc: "Choose between eMudhra or Capricorn based on your preference. Both issue fully compatible DGFT DSCs recognized on DGFT, ICEGATE, and related portals.",
  },
  {
    step: 2,
    icon: Upload,
    title: "Submit Documents & eKYC",
    desc: "Upload your IEC certificate, company incorporation documents, board resolution, and complete Aadhaar-based eKYC verification for the authorized signatory.",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Make Payment",
    desc: "Pay securely via UPI, net banking, credit/debit card, or bank transfer. Your order is confirmed instantly and processing begins immediately.",
  },
  {
    step: 4,
    icon: Download,
    title: "DSC Issued on USB Token",
    desc: "Your DGFT Digital Signature Certificate is issued and loaded onto a FIPS-certified USB crypto token. Token is shipped free of charge across India.",
  },
];

const REQUIRED_DOCS = [
  "IEC Certificate (Import Export Code issued by DGFT)",
  "Certificate of Incorporation (for Company) or LLP Agreement (for LLP)",
  "MOA & AOA (Memorandum and Articles of Association) for Companies",
  "Board Resolution authorizing the signatory to obtain DSC on behalf of the organization",
  "PAN Card of the company / organization",
  "Aadhaar Card of the authorized signatory (must be linked to mobile number)",
  "PAN Card of the authorized signatory",
  "Mobile number linked to Aadhaar (for OTP-based eKYC)",
  "Passport-size photograph of the authorized signatory",
  "Email address of the authorized signatory",
];

const PRICING = [
  {
    ca: "eMudhra",
    plans: [
      { validity: "1 Year", price: 2199, mrp: 3599 },
      { validity: "2 Years", price: 3299, mrp: 4999 },
    ],
  },
  {
    ca: "Capricorn",
    plans: [
      { validity: "1 Year", price: 2399, mrp: 3799 },
      { validity: "2 Years", price: 3499, mrp: 5199 },
    ],
  },
];

const FEATURES = [
  {
    icon: Globe,
    title: "DGFT-Specific Certificate Profile",
    desc: "Certificate issued with the specialized profile required by the DGFT portal. Not a generic DSC - specifically configured for DGFT and EXIM operations.",
  },
  {
    icon: Landmark,
    title: "Accepted on DGFT + ICEGATE",
    desc: "Works seamlessly on the DGFT portal (dgft.gov.in) and ICEGATE (icegate.gov.in) for all customs and foreign trade operations.",
  },
  {
    icon: Building2,
    title: "Organization-Level DSC",
    desc: "Issued in the name of your organization along with the authorized signatory. Contains your company name, IEC details, and signatory information.",
  },
  {
    icon: Users,
    title: "Expert EXIM Filing Guidance",
    desc: "Our team includes EXIM trade specialists who can guide you through DGFT portal operations, IEC filings, and authorization applications.",
  },
  {
    icon: UsbIcon,
    title: "Free USB Crypto Token",
    desc: "Every DGFT DSC comes with a free FIPS-certified USB crypto token. Free pan-India shipping included with every order.",
  },
  {
    icon: Zap,
    title: "Priority Processing",
    desc: "DGFT DSC orders are processed on priority. With Aadhaar eKYC, your certificate can be issued in as little as 30 minutes.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is a DGFT Digital Signature Certificate?",
    a: "A DGFT Digital Signature Certificate is a specialized Class 3 Organization DSC that contains a specific certificate profile recognized by the DGFT (Directorate General of Foreign Trade) portal. It is mandatory for all online filings and transactions on the DGFT portal, including IEC registration, license applications, authorization requests, and scrip claims. Unlike a regular Class 3 DSC, the DGFT DSC is issued with an organization-specific profile that identifies your business and its IEC details.",
  },
  {
    q: "Is DGFT DSC different from a regular Class 3 DSC?",
    a: "Yes. While both are Class 3 certificates, a DGFT DSC has a specific certificate profile that is configured to work with the DGFT portal. A regular Class 3 Individual or Organization DSC may not be accepted on the DGFT portal because it lacks the DGFT-specific certificate attributes. If you need to file on the DGFT portal, you must obtain a DSC with the DGFT profile from an authorized CA like eMudhra or Capricorn.",
  },
  {
    q: "Do I need a DGFT DSC for IEC registration?",
    a: "Yes. To register for a new IEC (Import Export Code) on the DGFT portal, you need a valid DGFT Digital Signature Certificate. The IEC application form must be digitally signed before submission. Without a DGFT DSC, you cannot complete the IEC registration process online. Since DGFT has moved entirely to online processing, there is no offline alternative.",
  },
  {
    q: "Can I use a regular DSC on the DGFT portal?",
    a: "Generally, no. The DGFT portal requires a DSC with a specific certificate profile. A standard Class 3 Individual DSC or Organization DSC without the DGFT profile will typically be rejected by the portal during signing. To avoid issues, always purchase a DSC explicitly issued for DGFT use from an authorized Certifying Authority.",
  },
  {
    q: "Which Certifying Authorities issue DGFT DSC?",
    a: "Currently, eMudhra and Capricorn are the primary Certifying Authorities that issue DGFT-profile Digital Signature Certificates in India. Both are licensed by the Controller of Certifying Authorities (CCA) under the IT Act 2000. At SignSecure, we are authorized resellers of both eMudhra and Capricorn, so you can choose the CA that best suits your needs and budget.",
  },
  {
    q: "What documents are needed for DGFT DSC?",
    a: "You will need: (1) IEC Certificate, (2) Certificate of Incorporation or LLP Agreement, (3) MOA & AOA for companies, (4) Board Resolution authorizing the signatory, (5) PAN of the organization, (6) Aadhaar Card of the authorized signatory (linked to mobile), (7) PAN of the authorized signatory, and (8) a passport-size photograph. The Aadhaar must be linked to a mobile number for OTP-based eKYC verification.",
  },
  {
    q: "How long does DGFT DSC issuance take?",
    a: "With Aadhaar-based eKYC, a DGFT DSC can be issued in as little as 30 minutes after all documents are submitted and verified. The eKYC process involves Aadhaar OTP verification, which is instant. However, if there are discrepancies in documents or if manual verification is required, it may take up to 24-48 hours. At SignSecure, we prioritize DGFT DSC orders to ensure the fastest possible turnaround.",
  },
  {
    q: "Can I use DGFT DSC on ICEGATE too?",
    a: "Yes. The DGFT DSC is also accepted on ICEGATE (Indian Customs Electronic Gateway) for filing Bills of Entry, Shipping Bills, and other customs documents. Since both DGFT and ICEGATE are part of India's foreign trade ecosystem, the DGFT-profile certificate is designed to work across both platforms. This means you don't need separate DSCs for DGFT and customs operations.",
  },
  {
    q: "What is the validity of DGFT DSC?",
    a: "DGFT DSC is available in 1-year and 2-year validity options. We recommend the 2-year option for cost savings, as it works out significantly cheaper per year. Once the DSC expires, you will need to obtain a new one - DSCs cannot be renewed, only re-issued. Plan your DSC purchase to align with your IEC renewal cycle for maximum convenience.",
  },
  {
    q: "Is DGFT DSC required for all import/export activities?",
    a: "Yes. Since DGFT has migrated to a fully online system, all import-export related filings, applications, and modifications must be submitted electronically with a valid DGFT DSC. This includes IEC registration, license applications (EPCG, Advance Authorization, DFIA), scrip claims (RoDTEP, RoSCTL), Certificates of Origin, AD Code registration, and Export Obligation Discharge. There is no manual or paper-based alternative.",
  },
  {
    q: "What if my IEC is in my personal name (proprietorship)?",
    a: "If your IEC is registered as a proprietorship in your personal name, you can still obtain a DGFT DSC. In this case, the DSC will be issued in your individual name with the DGFT profile. You will need your personal PAN, Aadhaar, and IEC certificate. The process is simpler since you don't need a board resolution or company incorporation documents. Sole proprietors form a significant portion of India's EXIM community and the process is streamlined for them.",
  },
  {
    q: "Can multiple people in my company get DGFT DSC?",
    a: "Yes. If your company has multiple authorized signatories who need to access the DGFT portal, each person can obtain their own DGFT DSC. The board resolution should authorize each signatory individually. This is common in larger organizations where different departments handle different DGFT filings - for example, the finance team may handle AD Code registration while the export team handles license applications.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Class 3 Organization DSC",
    desc: "For MCA, GST, e-Tendering, and all government portals. Starting at Rs. 1,099.",
    link: "/products",
    badge: "Most Popular",
    badgeColor: "bg-brand-cobalt",
  },
  {
    title: "Class 3 Combo DSC",
    desc: "Signature + Encryption certificate. Required for e-Tendering portals. Starting at Rs. 1,599.",
    link: "/products",
    badge: "Best for Tenders",
    badgeColor: "bg-brand-saffron",
  },
  {
    title: "Foreign National DSC",
    desc: "For NRIs and foreign directors who need Indian DSC. Starting at Rs. 8,999.",
    link: "/products",
    badge: "For NRIs",
    badgeColor: "bg-rose-500",
  },
  {
    title: "USB Crypto Tokens",
    desc: "FIPS-certified USB tokens from ePass, Proxkey, MToken & more. Starting at Rs. 500.",
    link: "/products",
    badge: "Hardware",
    badgeColor: "bg-brand-emerald",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ Accordion Item                                                         */
/* -------------------------------------------------------------------------- */

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-foreground">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function DgftDscPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/*  HERO                                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-indigo-500/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/40 mb-8">
              <Link href="/" className="hover:text-white/70 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href="/products"
                className="hover:text-white/70 transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/70 font-medium">DGFT DSC</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/20 mb-6">
                  <Ship className="w-3.5 h-3.5 text-indigo-300" />
                  <span className="text-xs font-semibold text-indigo-200 tracking-wide uppercase">
                    Import / Export
                  </span>
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-white mb-4 leading-tight">
                  DGFT Digital Signature{" "}
                  <span className="text-gradient-cobalt">Certificate</span>
                </h1>

                <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-lg">
                  For Import-Export Business & EXIM Compliance. The specialized
                  DSC required for all filings on the DGFT portal, ICEGATE, and
                  foreign trade operations in India.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;2,199
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;3,599
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                    Save &#8377;1,400
                  </span>
                </div>

                {/* Validity & CAs */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40">Validity:</span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/80">
                      1 Year
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-white/80">
                      2 Years
                    </span>
                  </div>
                  <div className="w-px h-5 bg-white/10 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40">CAs:</span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
                      <BadgeCheck className="w-3 h-3 text-indigo-300" />
                      eMudhra
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80">
                      <BadgeCheck className="w-3 h-3 text-indigo-300" />
                      Capricorn
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/917990740623?text=Hi%2C%20I%20need%20a%20DGFT%20Digital%20Signature%20Certificate">
                    <Button
                      size="lg"
                      className="rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy DGFT DSC Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a href="tel:+919324462329">
                    <Button
                      size="lg"
                      variant="outline"
className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call +91 93244 62329
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right - Key highlights card */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 backdrop-blur-sm">
                <h3 className="font-display font-bold text-lg text-white mb-6">
                  Why You Need DGFT DSC
                </h3>
                <ul className="space-y-4">
                  {[
                    "Mandatory for all DGFT portal filings",
                    "Required for IEC registration & modification",
                    "Needed for EPCG, Advance Authorization & DFIA",
                    "Works on ICEGATE for customs operations",
                    "Accepted for RoDTEP/RoSCTL scrip claims",
                    "Required for Certificates of Origin",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-indigo-300" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/[0.06]">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-display font-bold text-xl text-indigo-300">
                        30 min
                      </div>
                      <div className="text-[10px] text-white/40 mt-1">
                        Issuance Time
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-xl text-indigo-300">
                        100%
                      </div>
                      <div className="text-[10px] text-white/40 mt-1">
                        Paperless
                      </div>
                    </div>
                    <div>
                      <div className="font-display font-bold text-xl text-indigo-300">
                        Free
                      </div>
                      <div className="text-[10px] text-white/40 mt-1">
                        USB Token
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  WHAT IS DGFT DSC                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15 mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                  Understanding DGFT DSC
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a DGFT Digital Signature Certificate?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-base">
                  <strong className="text-foreground">
                    DGFT stands for Directorate General of Foreign Trade
                  </strong>
                  , a government body under the Ministry of Commerce & Industry
                  that is responsible for formulating and implementing India's
                  Foreign Trade Policy. DGFT regulates and promotes foreign trade
                  by issuing Import Export Codes (IEC), granting export/import
                  licenses, and administering trade-related incentive schemes.
                </p>

                <p className="text-base">
                  Any business involved in the import or export of goods and
                  services from India must interact with the DGFT portal (
                  <strong className="text-foreground">dgft.gov.in</strong>) for
                  a wide range of operations. Since DGFT has migrated to a
                  completely online system, all applications, filings,
                  modifications, and communications must be submitted
                  electronically through their portal - and every electronic
                  submission requires authentication via a{" "}
                  <strong className="text-foreground">
                    DGFT Digital Signature Certificate
                  </strong>
                  .
                </p>

                <p className="text-base">
                  A DGFT DSC is a{" "}
                  <strong className="text-foreground">
                    specialized Class 3 Organization Digital Signature
                    Certificate
                  </strong>{" "}
                  with a specific certificate profile that is recognized by the
                  DGFT portal. Unlike a standard Class 3 DSC (which works for
                  MCA, GST, and other portals), the DGFT DSC contains additional
                  certificate attributes that identify the signer as an
                  authorized representative of an EXIM (Export-Import) business.
                  This profile is mandatory - the DGFT portal will not accept a
                  regular DSC that lacks the DGFT-specific certificate
                  attributes.
                </p>

                <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 p-6 not-prose">
                  <h4 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-500" />
                    What is IEC (Import Export Code)?
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The{" "}
                    <strong className="text-foreground">
                      Import Export Code (IEC)
                    </strong>{" "}
                    is a unique 10-digit code issued by DGFT that is mandatory
                    for any person or entity involved in importing or exporting
                    goods and services from India. Without an IEC, customs
                    authorities will not allow clearance of any import/export
                    consignment. The IEC is linked to your PAN and remains valid
                    for the lifetime of the entity (subject to annual update on
                    the DGFT portal). Obtaining an IEC is the very first step
                    for any new import-export business, and the IEC application
                    itself requires a DGFT DSC for online submission.
                  </p>
                </div>

                <p className="text-base">
                  DGFT's complete migration to the online system means that
                  there is no paper-based or manual alternative for any filing.
                  Whether you are registering a new IEC, applying for an EPCG
                  license, claiming export incentives under RoDTEP, or
                  discharging export obligations - everything must go through
                  the DGFT portal with a valid DGFT Digital Signature
                  Certificate. This has made the DGFT DSC an essential tool for
                  every import-export business in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  WHO NEEDS DGFT DSC                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs a DGFT Digital Signature?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                If your business is involved in any form of cross-border trade,
                you almost certainly need a DGFT DSC. Here are the primary users.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHO_NEEDS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/[0.08] flex items-center justify-center mb-4">
                    <Ship className="w-5 h-5 text-indigo-500" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  DGFT PORTAL OPERATIONS                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/15 mb-5">
                <ClipboardList className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                  DGFT Portal Operations
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What Can You Do with DGFT DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your DGFT Digital Signature Certificate is required for every
                operation on the DGFT portal. Here is a comprehensive list of
                filings and transactions that require DGFT DSC authentication.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {DGFT_OPERATIONS.map((op, i) => (
                <div
                  key={op.title}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-indigo-500/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-indigo-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-foreground mb-2">
                        {op.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {op.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  RELATED PORTALS                                                 */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Works Beyond DGFT Portal
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your DGFT DSC is accepted on other government portals related to
                India's foreign trade ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {RELATED_PORTALS.map((portal) => (
                <div
                  key={portal.name}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/10 flex items-center justify-center mb-4">
                    <portal.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {portal.name}
                  </h3>
                  <p className="text-xs text-indigo-500 font-medium mb-3 flex items-center gap-1">
                    {portal.url}
                    <ExternalLink className="w-3 h-3" />
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {portal.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CERTIFYING AUTHORITIES                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Authorized Certifying Authorities
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We are authorized resellers of both CAs that issue DGFT-profile
                Digital Signature Certificates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {CERTIFYING_AUTHORITIES.map((ca) => (
                <div
                  key={ca.name}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/[0.08] flex items-center justify-center">
                      <BadgeCheck className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {ca.name}
                      </h3>
                      <p className="text-xs text-indigo-500 font-medium">
                        CCA Licensed Certifying Authority
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {ca.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {ca.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  HOW TO APPLY                                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Apply for DGFT DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get your DGFT Digital Signature Certificate in 4 simple steps.
                100% paperless process with Aadhaar-based eKYC.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {APPLY_STEPS.map((step) => (
                <div key={step.step} className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 h-full">
                    <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center mb-4">
                      <span className="font-display font-bold text-sm">
                        {step.step}
                      </span>
                    </div>
                    <step.icon className="w-6 h-6 text-indigo-500 mb-3" />
                    <h3 className="font-display font-bold text-sm text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {step.step < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  REQUIRED DOCUMENTS                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Documents Required for DGFT DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Keep these documents ready before starting your DGFT DSC
                application. All documents are submitted digitally.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {REQUIRED_DOCS.map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/40 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-indigo-500/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <FileCheck className="w-3.5 h-3.5 text-indigo-500" />
                    </div>
                    <span className="text-sm text-foreground/80 leading-relaxed">
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> For
                  proprietorship firms, company incorporation documents are not
                  required. Proprietors can use their personal PAN, Aadhaar, and
                  IEC certificate. Board Resolution is also not applicable for
                  sole proprietors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  PRICING TABLE                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                DGFT DSC Pricing
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Transparent pricing with no hidden charges. All prices include
                GST and a free USB crypto token.
              </p>
            </div>

            <div className="space-y-6">
              {PRICING.map((ca) => (
                <div
                  key={ca.ca}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className="px-6 py-4 bg-indigo-500/[0.04] border-b border-border flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-indigo-500" />
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {ca.ca}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      CCA Licensed CA
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {ca.plans.map((plan) => (
                        <div
                          key={plan.validity}
                          className="rounded-xl border border-border p-5 hover:border-indigo-500/30 transition-colors"
                        >
                          <div className="text-xs text-muted-foreground font-medium mb-2">
                            {plan.validity} Validity
                          </div>
                          <div className="flex items-baseline gap-2 mb-3">
                            <span className="font-display font-bold text-2xl text-foreground">
                              &#8377;
                              {plan.price.toLocaleString("en-IN")}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              &#8377;{plan.mrp.toLocaleString("en-IN")}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs text-brand-emerald font-bold bg-brand-emerald/10 px-2 py-0.5 rounded-full">
                              Save &#8377;
                              {(plan.mrp - plan.price).toLocaleString("en-IN")}
                            </span>
                          </div>
                          <ul className="space-y-1.5 mb-4">
                            {[
                              "Free USB crypto token",
                              "Free pan-India shipping",
                              "DGFT portal compatible",
                              "eKYC-based issuance",
                            ].map((f) => (
                              <li
                                key={f}
                                className="flex items-center gap-1.5 text-xs text-muted-foreground"
                              >
                                <Check className="w-3 h-3 text-indigo-500" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <a href={`https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20DGFT%20DSC%20from%20${encodeURIComponent(ca.ca)}%20for%20${encodeURIComponent(plan.validity)}`}>
                            <Button className="w-full rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 h-10 text-sm">
                              Buy Now - &#8377;
                              {plan.price.toLocaleString("en-IN")}
                            </Button>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              All prices are inclusive of GST (18%). USB token and pan-India
              shipping included at no extra charge.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FEATURES                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Buy DGFT DSC from SignSecure?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We are India's trusted platform for DGFT Digital Signature
                Certificates with specialized EXIM expertise.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FAQ                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about DGFT Digital Signature
                Certificates for import-export business.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq) => (
                <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  RELATED PRODUCTS                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Explore Other DSC Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Looking for a different type of Digital Signature Certificate?
                Browse our complete product range.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  href={product.link}
                  className="group rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-indigo-500/20 block"
                >
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full ${product.badgeColor} text-white text-[10px] font-bold tracking-wide uppercase mb-4`}
                  >
                    {product.badge}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-indigo-500 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-500">
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/[0.12] rounded-full blur-[120px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <Ship className="w-3.5 h-3.5 text-indigo-300" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Ready to Start Exporting?
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Start Exporting with{" "}
              <span className="text-indigo-300">DGFT DSC</span> Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get your DGFT Digital Signature Certificate in under 30 minutes.
              100% paperless process. Free USB token and pan-India shipping
              included.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/917990740623?text=Hi%2C%20I%20need%20a%20DGFT%20Digital%20Signature%20Certificate">
                <Button
                  size="lg"
                  className="rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 h-12 px-8 group shimmer"
                >
                  <span className="flex items-center gap-2">
                    Buy DGFT DSC - Starting &#8377;2,199
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="tel:+919324462329">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Headset className="w-4 h-4" />
                    Call +91 93244 62329
                  </span>
                </Button>
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                30-Min Issuance
              </span>
              <span className="flex items-center gap-1.5">
                <UsbIcon className="w-3.5 h-3.5" />
                Free USB Token
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Headset className="w-3.5 h-3.5" />
                Free Online Support
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
