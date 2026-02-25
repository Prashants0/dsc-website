import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  Check,
  Star,
  BadgeCheck,
  ChevronRight,
  ChevronDown,
  FileText,
  Users,
  Globe,
  Landmark,
  Gavel,
  GraduationCap,
  Train,
  ShoppingCart,
  Receipt,
  Scale,
  Briefcase,
  Clock,
  Headset,
  RefreshCw,
  UserCheck,
  CreditCard,
  Upload,
  Download,
  Truck,
  Phone,
  HelpCircle,
  Zap,
  Lock,
  Award,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/products/class-3-organization-dsc")({
  component: Class3OrganizationDSCPage,
  head: () => ({
    meta: [
      {
        title:
          "Buy Class 3 Organization DSC Online | Company DSC for e-Tenders, MCA, GST | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy Class 3 Organization Digital Signature Certificate online for companies, LLPs & firms. Organization DSC for e-Tendering, MCA filing, GST, ICEGATE & GEM. Authorized reseller of eMudhra, Capricorn, VSign, Pantasign & Safescrypt. Starting at ₹1,099.",
      },
      {
        name: "keywords",
        content:
          "class 3 dsc for company, organization digital signature certificate, dsc for e-tendering, digital signature for mca filing, company dsc for gst, organization dsc online, class 3 dsc for llp, company digital signature, dsc for gem portal, dsc for icegate",
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const CERTIFYING_AUTHORITIES = [
  {
    name: "eMudhra",
    slug: "emudhra",
    description:
      "India's largest Certifying Authority with over 40% market share. Trusted by millions of organizations for government and enterprise compliance.",
    logo: "/assets/partner-emudhra.png",
  },
  {
    name: "Capricorn",
    slug: "capricorn",
    description:
      "Leading CA known for fast processing and excellent support. Preferred choice for e-Tendering and MCA filings across India.",
    logo: "/assets/partner-capricorn.png",
  },
  {
    name: "VSign",
    slug: "vsign",
    description:
      "Government-licensed CA offering competitive pricing and robust digital certificates for organizations of all sizes.",
    logo: "/assets/partner-vsign-favicon.png",
  },
  {
    name: "Pantasign",
    slug: "pantasign",
    description:
      "Growing CA with a focus on simplicity and quick turnaround. Popular among small and medium businesses for compliance filings.",
    logo: "/assets/partner-pantasign-white.svg",
  },
  {
    name: "Safescrypt",
    slug: "safescrypt",
    description:
      "Enterprise-focused CA backed by Tata Consultancy Services. Known for premium security and large-scale deployments.",
    logo: "/assets/partner-safescrypt.svg",
  },
];

const WHO_NEEDS = [
  {
    icon: Building2,
    title: "Private Limited Companies",
    description:
      "For ROC filings, GST returns, e-Tendering, and all compliance on MCA and other government portals under the company name.",
  },
  {
    icon: Users,
    title: "Limited Liability Partnerships (LLPs)",
    description:
      "LLPs need Organization DSC for annual filings (Form 8, Form 11), GST compliance, and participation in government tenders.",
  },
  {
    icon: Briefcase,
    title: "Partnership Firms",
    description:
      "Registered partnership firms use Organization DSC for GST filing, MSME registration, and vendor registrations on government portals.",
  },
  {
    icon: Scale,
    title: "Section 8 Companies (NGOs)",
    description:
      "Non-profit organizations registered under Section 8 require Organization DSC for MCA filings, 80G/12A applications, and FCRA compliance.",
  },
  {
    icon: UserCheck,
    title: "One Person Companies (OPCs)",
    description:
      "OPCs need Organization DSC for annual ROC filings, GST returns, and participation in government procurement portals.",
  },
  {
    icon: Landmark,
    title: "Government Contractors",
    description:
      "Firms bidding on government contracts require Organization DSC for e-Tendering portals like CPPP, GEM, IREPS, and state procurement sites.",
  },
  {
    icon: GraduationCap,
    title: "CA / CS / Law Firms",
    description:
      "Professional firms use Organization DSC for bulk filings on behalf of clients across MCA, GST, Income Tax, and TRACES portals.",
  },
];

const USE_CASES = [
  {
    icon: Gavel,
    title: "e-Tendering (CPPP)",
    portal: "eprocure.gov.in",
    url: "https://eprocure.gov.in",
    description:
      "Submit bids, upload tender documents, and participate in Central Public Procurement Portal auctions. Organization DSC is mandatory for all tender submissions.",
  },
  {
    icon: ShoppingCart,
    title: "GEM Portal",
    portal: "gem.gov.in",
    url: "https://gem.gov.in",
    description:
      "Register as a vendor on Government e-Marketplace, list products and services, bid on government orders, and manage your seller account.",
  },
  {
    icon: FileText,
    title: "MCA Portal",
    portal: "mca.gov.in",
    url: "https://www.mca.gov.in",
    description:
      "File annual returns (AOC-4, MGT-7), register charges, update director details, file resolutions, and submit all company compliance forms.",
  },
  {
    icon: Receipt,
    title: "GST Portal",
    portal: "gst.gov.in",
    url: "https://www.gst.gov.in",
    description:
      "File company GST returns (GSTR-1, GSTR-3B, GSTR-9), apply for registration amendments, submit refund claims, and manage company GST profile.",
  },
  {
    icon: Globe,
    title: "ICEGATE",
    portal: "icegate.gov.in",
    url: "https://www.icegate.gov.in",
    description:
      "File customs declarations, Bills of Entry, Shipping Bills, and manage all import-export documentation for your organization with Indian Customs.",
  },
  {
    icon: Train,
    title: "IREPS",
    portal: "ireps.gov.in",
    url: "https://www.ireps.gov.in",
    description:
      "Participate in Indian Railways e-procurement tenders, submit bids for supply contracts, and register as a vendor for railway supplies and services.",
  },
  {
    icon: Landmark,
    title: "TRACES Portal",
    portal: "tdscpc.gov.in",
    url: "https://www.tdscpc.gov.in",
    description:
      "File TDS/TCS returns, download Form 16/16A, submit correction statements, and manage your company's tax deduction compliance on TRACES.",
  },
  {
    icon: Scale,
    title: "e-Courts",
    portal: "ecourts.gov.in",
    url: "https://www.ecourts.gov.in",
    description:
      "Submit legal filings electronically, file affidavits, appeals, and other court documents on behalf of your organization through e-Courts system.",
  },
  {
    icon: GraduationCap,
    title: "CBSE & Education Portals",
    portal: "cbse.gov.in",
    url: "https://www.cbse.gov.in",
    description:
      "Schools and educational institutions use Organization DSC for CBSE affiliation, exam-related filings, and compliance submissions.",
  },
];

const PRICING_DATA = [
  { ca: "eMudhra", y1: 1099, y2: 1599, y3: 2099 },
  { ca: "Capricorn", y1: 1199, y2: 1699, y3: 2199 },
  { ca: "VSign", y1: 1099, y2: 1549, y3: 1999 },
  { ca: "Pantasign", y1: 1149, y2: 1649, y3: 2149 },
  { ca: "Safescrypt", y1: 1299, y2: 1899, y3: 2499 },
];

const KEY_FEATURES = [
  {
    icon: Building2,
    title: "Organization Name on Certificate",
    description:
      "The DSC carries your company or firm name alongside the authorized signatory's name, establishing organizational identity in every digital transaction.",
  },
  {
    icon: BadgeCheck,
    title: "Multiple CA Choice",
    description:
      "Choose from 5 government-licensed Certifying Authorities — eMudhra, Capricorn, VSign, Pantasign, or Safescrypt — based on your preference and budget.",
  },
  {
    icon: Zap,
    title: "Fast eKYC Process",
    description:
      "Complete the entire application with Aadhaar-based eKYC. No need to visit any office or submit physical documents. Issued in under 30 minutes.",
  },
  {
    icon: Globe,
    title: "Works on All Tender Portals",
    description:
      "Accepted on CPPP, GEM, IREPS, state procurement portals, MCA, GST, ICEGATE, TRACES, and every government portal that requires DSC.",
  },
  {
    icon: Headset,
    title: "Dedicated Account Manager",
    description:
      "Every organization gets a dedicated support manager for assistance with application, document upload, portal configuration, and renewals.",
  },
  {
    icon: RefreshCw,
    title: "Free Re-issuance",
    description:
      "If your DSC gets corrupted or your token is damaged within the validity period, we re-issue your certificate at no additional cost.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is a Class 3 Organization DSC?",
    answer:
      "A Class 3 Organization Digital Signature Certificate is a government-approved electronic credential that identifies an organization (company, LLP, or partnership firm) in digital transactions. It is issued in the name of an authorized signatory but also carries the organization's legal name, CIN/LLPIN, and registered address. This DSC provides the highest level of assurance and is mandatory for e-Tendering, MCA filings, and other government compliance.",
  },
  {
    question:
      "What is the difference between Individual and Organization DSC?",
    answer:
      "An Individual DSC contains only the person's name and personal details, while an Organization DSC includes both the authorized signatory's name and the organization's details (company name, CIN, address). Organization DSC is required when the digital signature must represent the company rather than just an individual. For example, e-Tendering portals verify that the DSC belongs to the bidding organization, not just any individual.",
  },
  {
    question: "Who can be the authorized signatory for Organization DSC?",
    answer:
      "The authorized signatory must be a person who is legally authorized to sign on behalf of the organization. For private limited companies, this is typically a director or company secretary authorized via a Board Resolution. For LLPs, any designated partner can be the authorized signatory. For partnership firms, any partner listed in the partnership deed can apply. The authorized signatory's identity is verified through Aadhaar-based eKYC.",
  },
  {
    question: "Is Organization DSC mandatory for e-Tendering?",
    answer:
      "Yes, Organization DSC is mandatory for participating in e-Tendering on most government procurement portals including CPPP (eprocure.gov.in), GEM (gem.gov.in), IREPS, and state-level procurement websites. The portal verifies that the DSC is issued to the organization that is registered as a bidder. Without an Organization DSC, your bid will be rejected even if all other documents are in order.",
  },
  {
    question: "What documents are needed for a company DSC?",
    answer:
      "For a Private Limited Company, you need: Certificate of Incorporation, Memorandum of Association (MOA), Articles of Association (AOA), a Board Resolution authorizing the signatory, and the authorized signatory's Aadhaar card and PAN card. All documents can be uploaded digitally during the online application process. No physical document submission is required.",
  },
  {
    question: "Can an LLP get an Organization DSC?",
    answer:
      "Yes, LLPs can absolutely get an Organization DSC. You will need to provide the LLP Agreement, Certificate of Incorporation (Form 16 from MCA), and the designated partner's Aadhaar and PAN details. The DSC will carry both the LLP's name and the designated partner's name. This is required for filing Form 8 (Statement of Account & Solvency), Form 11 (Annual Return), and participating in government tenders.",
  },
  {
    question: "How is the authorized signatory verified?",
    answer:
      "The authorized signatory is verified through a two-step process. First, the organization's documents (Board Resolution, MOA/AOA, or Partnership Deed) are checked to confirm the signatory's authorization. Second, the signatory completes Aadhaar-based eKYC, which involves OTP verification linked to their Aadhaar-registered mobile number. This dual verification ensures both organizational authority and individual identity.",
  },
  {
    question:
      "Can multiple people in a company get Organization DSC?",
    answer:
      "Yes, multiple authorized signatories within the same organization can each get their own Organization DSC. For example, a company may have one DSC for the Managing Director (for MCA filings), another for the Finance Head (for GST and TRACES), and a third for the Procurement Manager (for e-Tendering). Each person needs separate authorization via Board Resolution and individual eKYC verification.",
  },
  {
    question: "Is Organization DSC valid for GEM portal?",
    answer:
      "Yes, Organization DSC is fully valid and accepted on the Government e-Marketplace (GEM) portal. In fact, GEM requires that vendors registering as organizations (companies, LLPs, firms) must use an Organization DSC for account creation, bid submission, and catalog management. Individual DSC will not be accepted for organization-level vendor accounts on GEM.",
  },
  {
    question: "What if the authorized signatory changes?",
    answer:
      "If the authorized signatory leaves the organization or changes role, the existing Organization DSC cannot be transferred to another person. You will need to apply for a new Organization DSC with the new authorized signatory's details and a fresh Board Resolution. The old DSC should be revoked to prevent unauthorized use. We offer discounted re-issuance in such cases — contact our support team for assistance.",
  },
  {
    question: "How to renew an Organization DSC?",
    answer:
      "Organization DSC renewal is straightforward. Before your current DSC expires, simply place a new order with the same or different CA and validity period. The new DSC will be issued on a fresh USB token or can be loaded on your existing token (if compatible). All organization documents and eKYC must be submitted again for the renewal. We send timely reminders before expiry so you never miss a renewal deadline.",
  },
  {
    question: "What is the validity period of Organization DSC?",
    answer:
      "Organization DSC is available in 1-year, 2-year, and 3-year validity options. The 2-year option offers the best value for most organizations. Once expired, the DSC cannot be used for signing — you must renew before expiry to avoid any disruption in your filings or tender participation. We recommend the 3-year option for organizations with ongoing tender requirements.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Class 3 Individual DSC",
    description:
      "For individual professionals, proprietors, and freelancers who need personal digital signatures for government filings.",
    price: 899,
    href: "/products/class-3-individual-dsc",
    badge: "Most Affordable",
    badgeColor: "bg-brand-emerald",
  },
  {
    title: "Class 3 Combo DSC",
    description:
      "Signing + Encryption on one token. Mandatory for e-Tendering portals that require encrypted bid submission.",
    price: 1599,
    href: "/products/class-3-combo-dsc",
    badge: "Best for Tenders",
    badgeColor: "bg-brand-saffron",
  },
  {
    title: "DGFT Digital Signature",
    description:
      "Specialized DSC for import-export businesses. Required for all filings on the DGFT and ICEGATE portals.",
    price: 2199,
    href: "/products/dgft-dsc",
    badge: "Import / Export",
    badgeColor: "bg-indigo-500",
  },
  {
    title: "USB Crypto Tokens",
    description:
      "FIPS-certified hardware tokens to securely store your DSC. Multiple brands available with free shipping.",
    price: 500,
    href: "/products#usb-tokens",
    badge: "Hardware",
    badgeColor: "bg-slate-500",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ Accordion Item                                                         */
/* -------------------------------------------------------------------------- */

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-foreground pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 -mt-1">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

function Class3OrganizationDSCPage() {
  const [openFAQ, setOpenFAQ] = useState<number>(0);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/*  Breadcrumb                                                      */}
        {/* ---------------------------------------------------------------- */}
        <nav
          aria-label="Breadcrumb"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-0"
        >
          <ol className="flex items-center gap-1.5 text-xs text-white/50">
            <li>
              <Link to="/" className="hover:text-white/80 transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li>
              <Link
                to="/products"
                className="hover:text-white/80 transition-colors"
              >
                Products
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-white/80 font-medium">
              Class 3 Organization DSC
            </li>
          </ol>
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/*  Product Hero                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative pt-6 pb-20 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-cobalt/[0.07] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/20 border border-brand-cobalt/30 mb-5">
                  <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                  Class 3 Organization{" "}
                  <span className="text-gradient-cobalt">
                    Digital Signature
                  </span>
                </h1>
                <p className="text-lg text-white/60 mb-8">
                  For Companies, LLPs, Partnerships & Firms
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;1,099
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;1,999
                  </span>
                  <span className="text-xs font-bold text-brand-emerald bg-brand-emerald/15 px-2.5 py-1 rounded-full">
                    Save &#8377;900
                  </span>
                </div>

                {/* CA Options */}
                <div className="mb-5">
                  <span className="text-xs text-white/40 font-medium block mb-2.5">
                    Certifying Authority:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["eMudhra", "Capricorn", "VSign", "Pantasign", "Safescrypt"].map(
                      (ca) => (
                        <span
                          key={ca}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white/80 hover:bg-white/[0.1] transition-colors cursor-pointer"
                        >
                          <BadgeCheck className="w-3 h-3 text-brand-cobalt-bright" />
                          {ca}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Validity */}
                <div className="mb-8">
                  <span className="text-xs text-white/40 font-medium block mb-2.5">
                    Validity Period:
                  </span>
                  <div className="flex gap-2">
                    {["1 Year", "2 Years", "3 Years"].map((v) => (
                      <span
                        key={v}
                        className="text-xs font-semibold px-4 py-2 rounded-lg border border-white/[0.12] bg-white/[0.04] text-white/80 hover:bg-white/[0.08] transition-colors cursor-pointer"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20Class%203%20Organization%20DSC" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a href="tel:+919876543210">
                    <Button
                      size="lg"
                      variant="outline"
className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call for Advice
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Quick Highlights Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand-cobalt-bright" />
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {[
                    "Class 3 Digital Signature Certificate",
                    "Organization name printed on certificate",
                    "Aadhaar-based eKYC — 100% paperless",
                    "Issued in under 30 minutes",
                    "Works on all government portals",
                    "2048-bit RSA encryption standard",
                    "Free re-issuance within validity",
                    "24/7 WhatsApp & phone support",
                    "Free USB token shipping (Pan India)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <div className="w-5 h-5 rounded-full bg-brand-cobalt/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-cobalt-bright" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Trust signals */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-3 gap-4">
                  {[
                    { value: "30 min", label: "Delivery" },
                    { value: "5+ CAs", label: "Available" },
                    { value: "100%", label: "Paperless" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display font-bold text-lg text-brand-cobalt-bright">
                        {s.value}
                      </div>
                      <div className="text-[10px] text-white/40 mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  What is Organization DSC                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/10 mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
                  Understanding Organization DSC
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a Class 3 Organization DSC?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                A <strong className="text-foreground">Class 3 Organization Digital Signature Certificate</strong> is a
                cryptographic credential issued to a legal entity — such as a Private Limited Company, LLP,
                Partnership Firm, or Section 8 Company — through a government-licensed Certifying Authority (CA).
                Unlike an Individual DSC that only carries the signer&apos;s personal details, an Organization DSC
                includes the <strong className="text-foreground">organization&apos;s legal name, CIN/LLPIN, and registered address</strong> alongside
                the authorized signatory&apos;s identity. This dual-identity structure is what makes it mandatory for
                e-Tendering portals, corporate MCA filings, and government procurement platforms where the signing
                entity must be an organization, not an individual.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                The concept of an <strong className="text-foreground">authorized signatory</strong> is central to Organization DSC. Since an
                organization itself cannot physically sign a document, it must designate one or more individuals who
                are authorized to digitally sign on its behalf. This authorization is typically established through a
                Board Resolution (for companies), LLP Agreement (for LLPs), or Partnership Deed (for firms). The
                authorized signatory then completes Aadhaar-based eKYC to verify their identity, and the resulting
                DSC links their personal identity to the organization&apos;s legal identity.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Class 3 is the <strong className="text-foreground">highest level of assurance</strong> available for Digital Signature Certificates
                in India. It provides strong identity verification through a multi-step process that includes
                document verification, Aadhaar OTP validation, and CA-level auditing. This level of assurance is
                required by all major government portals including MCA (mca.gov.in), GST (gst.gov.in), CPPP
                (eprocure.gov.in), GEM (gem.gov.in), and ICEGATE (icegate.gov.in). Every Organization DSC issued
                through SignSecure complies with the Information Technology Act, 2000 and CCA (Controller of
                Certifying Authorities) guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Who Needs This                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs Organization DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Any business entity registered under Indian law that needs to
                digitally sign documents or transact on government portals as an
                organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {WHO_NEEDS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Use Cases & Portals                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/10 mb-5">
                <Globe className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
                  Government Portals
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Where You Can Use Organization DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Organization DSC is accepted on all major government portals
                across India. Here are the key platforms and what you can do on
                each.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map(
                ({ icon: Icon, title, portal, url, description }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-cobalt" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">
                      {title}
                    </h3>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-brand-cobalt hover:underline font-medium mb-3 inline-block"
                    >
                      {portal} ↗
                    </a>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Certifying Authorities                                           */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
                <Award className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Licensed CAs
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Choose Your Certifying Authority
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We are an authorized reseller of all major government-licensed
                Certifying Authorities in India. Pick the CA that suits your
                organization&apos;s needs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {CERTIFYING_AUTHORITIES.map((ca) => (
                <div
                  key={ca.slug}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20"
                >
                  <div className="w-16 h-16 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-5 overflow-hidden">
                    <img
                      src={ca.logo}
                      alt={`${ca.name} logo`}
                      className="w-12 h-12 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {ca.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ca.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 px-2 py-1 rounded-full">
                      <BadgeCheck className="w-3 h-3" />
                      CCA Licensed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  How to Apply                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Apply for Organization DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get your Organization DSC in 4 simple steps. The entire process
                is online and typically completes in under 30 minutes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: ShoppingCart,
                  title: "Select CA & Validity",
                  description:
                    "Choose your preferred Certifying Authority (eMudhra, Capricorn, VSign, Pantasign, or Safescrypt) and select 1, 2, or 3-year validity period.",
                },
                {
                  step: "02",
                  icon: Upload,
                  title: "Upload Documents + eKYC",
                  description:
                    "Upload organization documents (COI, Board Resolution, MOA/AOA) and the authorized signatory completes Aadhaar-based eKYC with OTP verification.",
                },
                {
                  step: "03",
                  icon: CreditCard,
                  title: "Make Payment",
                  description:
                    "Pay securely via UPI, net banking, debit/credit card, or bank transfer. GST invoice is provided. Bulk discounts available for 5+ certificates.",
                },
                {
                  step: "04",
                  icon: Download,
                  title: "DSC Issued",
                  description:
                    "Your Organization DSC is issued and loaded onto a USB crypto token. Token is shipped free across India. Download link also sent via email.",
                },
              ].map(({ step, icon: Icon, title, description }) => (
                <div key={step} className="relative">
                  <div className="rounded-2xl border border-border bg-card p-6 h-full hover-lift transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-display font-bold text-2xl text-brand-cobalt/20">
                        {step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-cobalt" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-brand-cobalt/[0.04] border border-brand-cobalt/10 p-5 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-cobalt shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important:</strong> The
                authorized signatory (director, partner, or designated person)
                must complete the Aadhaar eKYC step personally. Their
                Aadhaar-linked mobile number will receive the OTP for
                verification. Ensure the signatory&apos;s Aadhaar is linked to
                an active mobile number before starting the application.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Required Documents                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Required Documents
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Documents needed depend on your organization type. All documents
                can be uploaded digitally — no physical submission required.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Private Limited / OPC / Section 8 */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1">
                  Private Limited / OPC / Section 8
                </h3>
                <p className="text-[11px] text-muted-foreground mb-4">
                  Companies registered under Companies Act
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Certificate of Incorporation",
                    "Memorandum of Association (MOA)",
                    "Articles of Association (AOA)",
                    "Board Resolution (authorizing signatory)",
                    "Authorized signatory's Aadhaar Card",
                    "Authorized signatory's PAN Card",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* LLP */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1">
                  Limited Liability Partnership
                </h3>
                <p className="text-[11px] text-muted-foreground mb-4">
                  LLPs registered under LLP Act, 2008
                </p>
                <ul className="space-y-2.5">
                  {[
                    "LLP Agreement",
                    "Certificate of Incorporation (Form 16)",
                    "Designated Partner's Aadhaar Card",
                    "Designated Partner's PAN Card",
                    "DPIN of the Designated Partner",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partnership Firm */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-1">
                  Partnership Firm
                </h3>
                <p className="text-[11px] text-muted-foreground mb-4">
                  Registered or unregistered partnerships
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Partnership Deed",
                    "Firm Registration Certificate (if registered)",
                    "Partner's Aadhaar Card",
                    "Partner's PAN Card",
                    "Firm's PAN Card",
                  ].map((doc) => (
                    <li
                      key={doc}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Pricing Table                                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Organization DSC Pricing
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Transparent pricing across all Certifying Authorities. All
                prices are inclusive of GST and USB token cost.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left font-display font-bold text-xs text-foreground px-6 py-4">
                        Certifying Authority
                      </th>
                      <th className="text-center font-display font-bold text-xs text-foreground px-4 py-4">
                        1 Year
                      </th>
                      <th className="text-center font-display font-bold text-xs text-foreground px-4 py-4">
                        2 Years
                      </th>
                      <th className="text-center font-display font-bold text-xs text-foreground px-4 py-4">
                        3 Years
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_DATA.map((row, i) => (
                      <tr
                        key={row.ca}
                        className={
                          i % 2 === 0 ? "bg-card" : "bg-muted/20"
                        }
                      >
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                            <BadgeCheck className="w-4 h-4 text-brand-cobalt" />
                            {row.ca}
                          </span>
                        </td>
                        <td className="text-center px-4 py-4">
                          <span className="font-display font-bold text-sm text-foreground">
                            &#8377;{row.y1.toLocaleString("en-IN")}
                          </span>
                        </td>
                        <td className="text-center px-4 py-4">
                          <span className="font-display font-bold text-sm text-foreground">
                            &#8377;{row.y2.toLocaleString("en-IN")}
                          </span>
                        </td>
                        <td className="text-center px-4 py-4">
                          <span className="font-display font-bold text-sm text-foreground">
                            &#8377;{row.y3.toLocaleString("en-IN")}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Prices include GST. USB token charged separately at &#8377;500. Bulk
              discounts available for 5+ certificates.{" "}
              <a
                href="tel:+919876543210"
                className="text-brand-cobalt hover:underline"
              >
                Call for bulk pricing
              </a>
              .
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Key Features                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose SignSecure for Organization DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We make getting your Organization DSC fast, affordable, and
                hassle-free. Here&apos;s what sets us apart.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {KEY_FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FAQ Section                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about Class 3 Organization Digital
                Signature Certificates.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() =>
                    setOpenFAQ(openFAQ === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Related Products                                                 */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore other Digital Signature products that may be relevant
                for your organization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.href}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20 block group"
                >
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold text-white px-2 py-0.5 rounded-full mb-4 ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2 group-hover:text-brand-cobalt transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-lg text-foreground">
                      &#8377;{product.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      onwards
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-cobalt group-hover:gap-2 transition-all">
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA Section                                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-dot-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-cobalt/[0.08] rounded-full blur-[120px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <Building2 className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Organization DSC
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Get Your Organization DSC?
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Start your application in minutes. Our team will guide you through
              document upload, eKYC, and have your Organization DSC issued the
              same day.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20Class%203%20Organization%20DSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-12 px-8 group shimmer"
                >
                  <span className="flex items-center gap-2">
                    Buy Organization DSC — &#8377;1,099
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="tel:+919876543210">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/20 text-white hover:bg-white/10 h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Headset className="w-4 h-4" />
                    Call +91 98765 43210
                  </span>
                </Button>
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                30-min delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                100% paperless
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                Free shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Headset className="w-3.5 h-3.5" />
                24/7 support
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
