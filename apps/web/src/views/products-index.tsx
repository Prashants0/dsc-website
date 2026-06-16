"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  User,
  Building2,
  ShieldCheck,
  Globe,
  Lock,
  ArrowRight,
  Star,
  Check,
  FileCheck,
  Stamp,
  Scale,
  Truck,
  BadgeCheck,
  Clock,
  Headset,
  UsbIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PRODUCT_CATEGORIES = [
  {
    id: "class3-individual",
    icon: User,
    badge: "Most Affordable",
    badgeColor: "bg-brand-emerald",
    title: "Class 3 DSC - Individual",
    subtitle: "For Individuals & Proprietors",
    description:
      "Perfect for individual professionals, freelancers, and proprietors who need to file returns, sign documents, and comply with government regulations digitally.",
    startingPrice: 899,
    originalPrice: 1599,
    validity: ["1 Year", "2 Years", "3 Years"],
    authorities: ["eMudhra", "Capricorn", "Pantasign", "SignX"],
    detailHref: "/products/class-3-individual-dsc",
    useCases: [
      "GST Filing & Returns",
      "Income Tax e-Filing",
      "MCA / ROC Filing",
      "Director's KYC (DIR-3 KYC)",
      "EPFO & PF Claims",
      "Patent & Trademark e-Filing",
      "IEC Registration",
      "Startup India Registration",
    ],
    features: [
      "Aadhaar-based eKYC - No paperwork",
      "Issued in under 30 minutes",
      "Free re-issuance within validity",
      "Works on all government portals",
      "2048-bit RSA encryption",
      "Free Online Support",
    ],
  },
  {
    id: "class3-org",
    icon: Building2,
    badge: "Most Popular",
    badgeColor: "bg-brand-cobalt",
    title: "Class 3 DSC - Organization",
    subtitle: "For Companies, LLPs & Firms",
    description:
      "Designed for businesses that need organization-level digital signatures for corporate filings, tenders, procurement, and compliance across all government platforms.",
    startingPrice: 1099,
    originalPrice: 1999,
    validity: ["1 Year", "2 Years", "3 Years"],
    authorities: ["eMudhra", "Capricorn", "Pantasign", "SignX"],
    detailHref: "/products/class-3-organization-dsc",
    useCases: [
      "e-Tendering & e-Procurement",
      "MCA / ROC Company Filings",
      "GST Filing & Returns",
      "ICEGATE / Customs Portal",
      "e-Bidding & e-Auction",
      "GEM (Government e-Marketplace)",
      "IREPS (Indian Railways)",
      "CBSE & Educational Filings",
    ],
    features: [
      "Organization name on certificate",
      "Paperless application via eKYC",
      "Issued in under 30 minutes",
      "Free re-issuance within validity",
      "Multiple CA options to choose from",
      "Dedicated account support",
    ],
  },
  {
    id: "class3-combo",
    icon: Lock,
    badge: "Best for Tenders",
    badgeColor: "bg-brand-saffron",
    title: "Class 3 Combo DSC",
    subtitle: "Signature + Encryption",
    description:
      "The complete package combining both Signing and Encryption certificates. Mandatory for e-Tendering portals and provides maximum security for encrypted document submissions.",
    startingPrice: 1599,
    originalPrice: 2799,
    validity: ["1 Year", "2 Years", "3 Years"],
    authorities: ["eMudhra", "Capricorn"],
    detailHref: "/products/class-3-combo-dsc",
    useCases: [
      "e-Tendering (Mandatory requirement)",
      "ICEGATE Submissions",
      "Encrypted Document Exchange",
      "All Government Portals",
      "e-Procurement with encryption",
      "Secure Contract Signing",
      "All Class 3 Signature uses",
      "All Class 3 Encryption uses",
    ],
    features: [
      "Both Sign + Encrypt on one token",
      "Mandatory for most tender portals",
      "Highest level of document security",
      "Paperless Aadhaar eKYC process",
      "Free USB token included",
      "Priority processing & support",
    ],
  },
  {
    id: "dgft",
    icon: Globe,
    badge: "Import / Export",
    badgeColor: "bg-indigo-500",
    title: "DGFT Digital Signature",
    subtitle: "For Foreign Trade",
    description:
      "Specialized DSC required for all Import-Export (EXIM) related filings and transactions on the DGFT portal. Essential for IEC holders and foreign trade businesses.",
    startingPrice: 2199,
    originalPrice: 3599,
    validity: ["1 Year", "2 Years"],
    authorities: ["eMudhra", "Capricorn"],
    detailHref: "/products/dgft-dsc",
    useCases: [
      "DGFT Portal Access & Filings",
      "Import/Export License Applications",
      "IEC Code Registration",
      "AD Code Registration",
      "Branch Addition on DGFT",
      "Name/Address Change on DGFT",
      "Foreign Trade Applications",
      "Country of Origin Certificates",
    ],
    features: [
      "DGFT-specific certificate profile",
      "Required for all EXIM businesses",
      "Organization-level DSC",
      "Fast issuance via eKYC",
      "Accepted on DGFT & ICEGATE",
      "Expert guidance for EXIM filings",
    ],
  },
  {
    id: "foreign-national",
    icon: Scale,
    badge: "For NRIs & Foreign Directors",
    badgeColor: "bg-rose-500",
    title: "Foreign National DSC",
    subtitle: "For Non-Indian Residents",
    description:
      "Specially designed for foreign nationals, NRIs, and overseas directors who need a DSC to sign Indian documents, incorporate companies, or file with Indian authorities.",
    startingPrice: 8999,
    originalPrice: 12999,
    validity: ["1 Year", "2 Years", "3 Years"],
    authorities: ["eMudhra"],
    detailHref: "/products/foreign-national-dsc",
    useCases: [
      "Company Incorporation in India",
      "MCA Director Filings",
      "GST Registration & Filings",
      "Income Tax Filing in India",
      "Foreign Investment Compliance",
      "Board Resolutions & Contracts",
      "FEMA Compliance Documents",
      "Power of Attorney Signing",
    ],
    features: [
      "No Aadhaar required",
      "Video-based KYC for foreign nationals",
      "Passport-based identity verification",
      "Attested document acceptance",
      "Global courier for USB token",
      "Dedicated NRI support team",
    ],
  },
  {
    id: "document-signer",
    icon: Stamp,
    badge: "For Bulk & Automated Signing",
    badgeColor: "bg-teal-500",
    title: "Document Signer Certificate",
    subtitle: "For Organizations & Automated Signing",
    description:
      "An organization-level certificate used to digitally sign documents in bulk or through automated systems — invoices, payslips, agreements, and PDFs — without manual intervention. Issued in the organization's name and ideal for ERP, HR, and accounting software integration.",
    startingPrice: 2999,
    originalPrice: 4999,
    validity: ["1 Year", "2 Years", "3 Years"],
    authorities: ["eMudhra", "Capricorn", "Pantasign", "SignX"],
    detailHref: "/products/document-signer-certificate",
    useCases: [
      "Bulk Invoice Signing",
      "Automated PDF Signing",
      "Payslip & HR Documents",
      "ERP / Accounting Integration",
      "e-Invoicing under GST",
      "Digitally Signed Agreements",
      "Board Resolutions at Scale",
      "API-based Document Signing",
    ],
    features: [
      "Issued in the organization's name",
      "Sign unlimited documents automatically",
      "Works with ERP, HR & accounting software",
      "HSM or USB token storage options",
      "Paperless organizational eKYC",
      "Free Online Support",
    ],
  },
];

const USB_TOKENS = [
  {
    name: "ePass 2003 Auto Token",
    brand: "HyperSecu",
    logo: "/assets/token-epass-logo.png",
    price: 500,
    description: "Auto-detect USB token with robust build. Industry standard for DSC storage.",
    features: ["Auto-detect driver", "FIPS 140-2", "Windows/Mac/Linux", "Plug & Play"],
    popular: true,
    detailHref: "/products/epass-2003-usb-token",
  },
  {
    name: "Proxkey USB Token",
    brand: "WatchData",
    logo: "/assets/token-proxkey-logo.svg",
    price: 500,
    description: "FIPS certified cryptographic USB token. Compatible with all CAs and portals.",
    features: ["FIPS 140-2 Level 2", "WatchData chip", "Wide compatibility", "Durable build"],
    popular: false,
    detailHref: "/products/proxkey-usb-token",
  },
  {
    name: "MToken USB Token",
    brand: "MToken",
    logo: "/assets/token-mtoken.svg",
    price: 500,
    description: "Compact and lightweight USB crypto token. Growing in popularity across India.",
    features: ["Compact design", "FIPS certified", "Budget friendly", "All CAs supported"],
    popular: false,
    detailHref: "/products/mtoken-usb-token",
  },
  {
    name: "TrustKey USB Token",
    brand: "TrustKey",
    logo: "/assets/token-trustkey.svg",
    price: 600,
    description: "Newer entrant with modern chip architecture. Enhanced security features.",
    features: ["Modern chip", "Enhanced security", "Fast read/write", "Cross-platform"],
    popular: false,
    detailHref: "/products/trustkey-usb-token",
  },
];

const OTHER_PRODUCTS = [
  { label: "DSC for GST", desc: "GST registration & return filing", href: "/products/dsc-for-gst", icon: FileCheck },
  { label: "DSC for MCA", desc: "Company & ROC filings on MCA21", href: "/products/dsc-for-mca", icon: Building2 },
  { label: "DSC for Income Tax", desc: "ITR e-filing & audit reports", href: "/products/dsc-for-income-tax", icon: Scale },
  { label: "DSC for e-Tendering", desc: "Bid & tender submissions", href: "/products/dsc-for-e-tendering", icon: Globe },
  { label: "DSC for EPFO", desc: "PF & employer compliance", href: "/products/dsc-for-epfo", icon: User },
  { label: "DSC for ICEGATE", desc: "Customs & import-export filings", href: "/products/dsc-for-icegate", icon: Globe },
  { label: "DSC for DGFT", desc: "Foreign trade & IEC on DGFT", href: "/products/dsc-for-dgft", icon: Globe },
  { label: "DSC for Trademark", desc: "IP India trademark e-filing", href: "/products/dsc-for-trademark", icon: BadgeCheck },
  { label: "DSC for GeM Registration", desc: "Government e-Marketplace sellers", href: "/products/dsc-for-gem-registration", icon: Star },
  { label: "DSC for IRCTC", desc: "Railway e-ticketing agents", href: "/products/dsc-for-irctc", icon: Truck },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-cobalt/[0.06] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                  Authorized Reseller of Leading Certifying Authorities
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                Digital Signature Certificates{" "}
                <span className="text-gradient-cobalt">for Every Need</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl mx-auto">
                As an authorized reseller of eMudhra, Capricorn, Pantasign
                & SignX, we offer the widest selection of
                government-approved DSCs at the best prices in India.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#all-products">
                  <Button
                    size="lg"
                    className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-12 px-8 group shimmer"
                  >
                    <span className="flex items-center gap-2">
                      Browse All DSC Products
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats bar */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "4", label: "Certifying Authorities" },
                { value: "30 min", label: "Average Delivery" },
                { value: "100%", label: "Paperless Process" },
                { value: "Pan India", label: "Token Delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-4 py-4 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <div className="font-display font-bold text-2xl text-brand-cobalt-bright mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="all-products" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Our DSC Product Range
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Choose from India's widest selection of Digital Signature
                Certificates, issued through multiple government-licensed
                Certifying Authorities.
              </p>
            </div>

            <div className="space-y-20">
              {PRODUCT_CATEGORIES.map((product, index) => (
                <div
                  key={product.id}
                  id={product.id}
                  className="grid lg:grid-cols-2 gap-10 items-start"
                >
                  {/* Left: Info */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${product.badgeColor} text-white mb-4`}
                    >
                      <product.icon className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold tracking-wide uppercase">
                        {product.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-brand-cobalt font-semibold mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="font-display font-bold text-3xl text-foreground">
                        &#8377;{product.startingPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        &#8377;{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-brand-emerald font-bold bg-brand-emerald/10 px-2 py-0.5 rounded-full">
                        Save &#8377;
                        {(
                          product.originalPrice - product.startingPrice
                        ).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* Validity options */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-xs text-muted-foreground font-medium">
                        Validity:
                      </span>
                      {product.validity.map((v) => (
                        <span
                          key={v}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-muted/50 text-foreground"
                        >
                          {v}
                        </span>
                      ))}
                    </div>

                    {/* Authorities */}
                    <div className="mb-6">
                      <span className="text-xs text-muted-foreground font-medium block mb-2">
                        Available from:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.authorities.map((ca) => (
                          <span
                            key={ca}
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-cobalt/[0.04] border border-brand-cobalt/[0.08] text-brand-cobalt"
                          >
                            <BadgeCheck className="w-3 h-3" />
                            {ca}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={product.detailHref}>
                        <Button className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-11 px-8 group shimmer">
                          <span className="flex items-center gap-2">
                            View Details
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </Button>
                      </Link>
                      <Link href={product.detailHref}>
                        <Button variant="outline" className="rounded-xl h-11 px-6 font-semibold">
                          Buy {product.title.split(" - ")[0]}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right: Features & Use Cases */}
                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    {/* Use Cases Card */}
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <h4 className="font-display font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                        <Stamp className="w-4 h-4 text-brand-cobalt" />
                        Accepted For
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {product.useCases.map((use) => (
                          <div
                            key={use}
                            className="flex items-start gap-2 text-sm text-foreground/80"
                          >
                            <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                            {use}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features Card */}
                    <div className="rounded-2xl border border-border bg-muted/30 p-6">
                      <h4 className="font-display font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                        <Star className="w-4 h-4 text-brand-saffron" />
                        What You Get
                      </h4>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                          >
                            <div className="w-5 h-5 rounded-full bg-brand-cobalt/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-brand-cobalt" />
                            </div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Products — DSC by Use Case */}
        <section id="other-products" className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
                <FileCheck className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
                  Other Products
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                DSC by Use Case
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Need a Digital Signature for a specific government portal? Explore
                our dedicated, purpose-built DSC solutions — each with its own
                guide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {OTHER_PRODUCTS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover-lift hover:border-brand-cobalt/25"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center shrink-0 group-hover:bg-brand-cobalt/[0.12] transition-colors">
                    <item.icon className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-base text-foreground group-hover:text-brand-cobalt transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-cobalt opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* USB Tokens Section */}
        <section id="usb-tokens" className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
                <UsbIcon className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Hardware Tokens
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                USB Crypto Tokens for DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                FIPS-certified USB tokens to securely store your digital
                signature. Required for all new DSC certificates as per CCA
                guidelines. We sell all major token brands in India.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {USB_TOKENS.map((token) => (
                <div
                  key={token.name}
                  className={`rounded-2xl border bg-card p-6 transition-all duration-300 hover-lift flex flex-col ${
                    token.popular
                      ? "border-brand-cobalt/30 shadow-lg shadow-brand-cobalt/5"
                      : "border-border hover:border-brand-cobalt/20"
                  }`}
                >
                  {token.popular && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-cobalt bg-brand-cobalt/10 px-2 py-0.5 rounded-full self-start mb-3">
                      <Star className="w-2.5 h-2.5 fill-brand-cobalt" />
                      MOST POPULAR
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/[0.04] dark:bg-white/5 flex items-center justify-center mb-4 overflow-hidden">
                    <img src={token.logo} alt={token.name} className="w-11 h-11 object-contain" loading="lazy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-0.5">
                    {token.name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground/60 font-medium mb-2">
                    by {token.brand}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {token.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display font-bold text-2xl text-foreground">
                      &#8377;{token.price}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      incl. GST
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {token.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link href={token.detailHref} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full rounded-xl font-semibold text-xs h-9"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button
                      className="rounded-xl font-semibold text-xs h-9 bg-brand-cobalt text-white hover:bg-brand-cobalt-bright px-4"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8">
              USB token is mandatory for new DSC issuance as per CCA Guidelines. Free shipping across India.
            </p>
          </div>
        </section>

        {/* Benefits Banner */}
        <section className="py-16 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "30-Min Delivery",
                  desc: "From application to download in under 30 minutes",
                },
                {
                  icon: Truck,
                  title: "Free Pan-India Shipping",
                  desc: "USB token delivered free to any address in India",
                },
                {
                  icon: Headset,
                  title: "Free Online Support",
                  desc: "WhatsApp, phone & email support — free of charge",
                },
                {
                  icon: BadgeCheck,
                  title: "4 Certifying Authorities",
                  desc: "Choose from eMudhra, Capricorn, Pantasign & SignX",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-cobalt-bright" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-white/45">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              Not Sure Which DSC You Need?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Our DSC experts are available online to help you choose the right
              certificate for your specific requirements. Get free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/917990740623" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-12 px-8"
                >
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919324462329">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Headset className="w-4 h-4" />
                    Call +91 93244 62329
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
