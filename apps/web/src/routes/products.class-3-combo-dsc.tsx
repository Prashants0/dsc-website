import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  Lock,
  ShieldCheck,
  ArrowRight,
  Check,
  X,
  Star,
  BadgeCheck,
  Clock,
  Headset,
  FileCheck,
  KeyRound,
  Layers,
  Users,
  Building2,
  Globe,
  Landmark,
  ChevronRight,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Fingerprint,
  Download,
  UsbIcon,
  Truck,
  Zap,
  Phone,
  HelpCircle,
  CircleDot,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/products/class-3-combo-dsc")({
  component: Class3ComboDSCPage,
  head: () => ({
    meta: [
      {
        title:
          "Buy Class 3 Combo DSC (Sign + Encrypt) | Best for e-Tendering | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy Class 3 Combo Digital Signature Certificate with both Signing and Encryption on one USB token. Mandatory for e-Tendering on CPPP, GEM, IREPS & ICEGATE. Starting at Rs.1,599. eMudhra & Capricorn authorized. 30-min delivery via Aadhaar eKYC.",
      },
      {
        name: "keywords",
        content:
          "combo digital signature certificate, dsc signing and encryption, class 3 combo dsc for e-tendering, sign and encrypt dsc, digital signature with encryption, combo dsc online, e-tendering dsc, encryption certificate for tenders, buy combo dsc",
      },
      {
        property: "og:title",
        content:
          "Buy Class 3 Combo DSC (Sign + Encrypt) | Best for e-Tendering | SignSecure",
      },
      {
        property: "og:description",
        content:
          "Class 3 Combo DSC with Signing + Encryption on one token. Mandatory for e-Tendering portals. Starting Rs.1,599. eMudhra & Capricorn authorized reseller.",
      },
      {
        property: "og:type",
        content: "product",
      },
      {
        name: "robots",
        content: "index, follow",
      },
    ],
  }),
});

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const PRICING_DATA = [
  {
    ca: "eMudhra",
    logo: "eMudhra",
    prices: [
      { validity: "1 Year", price: 1599, mrp: 2799 },
      { validity: "2 Years", price: 2299, mrp: 3999 },
      { validity: "3 Years", price: 2999, mrp: 4999 },
    ],
  },
  {
    ca: "Capricorn",
    logo: "Capricorn",
    prices: [
      { validity: "1 Year", price: 1649, mrp: 2899 },
      { validity: "2 Years", price: 2399, mrp: 4099 },
      { validity: "3 Years", price: 3099, mrp: 5199 },
    ],
  },
];

const PORTAL_DATA = [
  {
    name: "CPPP (eprocure.gov.in)",
    description: "Central Public Procurement Portal",
    encryption: "mandatory" as const,
    note: "Encryption certificate is MANDATORY to encrypt bid documents before submission. Without it, you cannot submit bids.",
  },
  {
    name: "GEM (gem.gov.in)",
    description: "Government e-Marketplace",
    encryption: "required" as const,
    note: "Required for certain high-value tenders and encrypted bid submissions on GEM portal.",
  },
  {
    name: "IREPS (ireps.gov.in)",
    description: "Indian Railways e-Procurement System",
    encryption: "mandatory" as const,
    note: "Railway procurement mandates encryption for bid security. Both signing and encryption certificates needed.",
  },
  {
    name: "ICEGATE (icegate.gov.in)",
    description: "Indian Customs Electronic Gateway",
    encryption: "mandatory" as const,
    note: "All customs filings including Bills of Entry, Shipping Bills, and other EXIM documents require encryption.",
  },
  {
    name: "Maharashtra e-Procurement",
    description: "mahatenders.gov.in",
    encryption: "mandatory" as const,
    note: "State government tenders mandate combo DSC for encrypted bid submissions.",
  },
  {
    name: "Karnataka e-Procurement",
    description: "eproc.karnataka.gov.in",
    encryption: "mandatory" as const,
    note: "All state tenders on Karnataka portal require both signing and encryption certificates.",
  },
  {
    name: "Tamil Nadu e-Procurement",
    description: "tntenders.gov.in",
    encryption: "mandatory" as const,
    note: "Combo DSC mandatory for all tender bid submissions on the Tamil Nadu portal.",
  },
  {
    name: "UP e-Procurement",
    description: "etender.up.nic.in",
    encryption: "mandatory" as const,
    note: "Uttar Pradesh state tenders require encryption-enabled DSC for bid security.",
  },
  {
    name: "GST Portal",
    description: "gst.gov.in",
    encryption: "signing-only" as const,
    note: "Only signing certificate required. Your combo DSC works here too - the signing cert is used automatically.",
  },
  {
    name: "MCA Portal",
    description: "mca.gov.in",
    encryption: "signing-only" as const,
    note: "Company filings require only signing. Combo DSC works perfectly - uses the signing certificate.",
  },
  {
    name: "Income Tax e-Filing",
    description: "incometax.gov.in",
    encryption: "signing-only" as const,
    note: "Tax returns need only signing certificate. Combo DSC is fully compatible for all ITR filings.",
  },
];

const FEATURES = [
  {
    icon: Layers,
    title: "Sign + Encrypt on One Token",
    description:
      "Both your signing certificate and encryption certificate are loaded on a single USB token. No need to carry or manage two separate devices.",
  },
  {
    icon: Landmark,
    title: "Mandatory Tender Compliance",
    description:
      "Meets the mandatory requirement of all major e-Tendering portals including CPPP, GEM, IREPS, and state procurement systems.",
  },
  {
    icon: ShieldCheck,
    title: "Highest Security Level",
    description:
      "Class 3 certificates with 2048-bit RSA encryption provide the highest level of identity assurance and document security available in India.",
  },
  {
    icon: KeyRound,
    title: "Unified Certificate Management",
    description:
      "Both certificates share the same validity period and are managed together. One renewal, one token, one password - simplified management.",
  },
  {
    icon: UsbIcon,
    title: "Free USB Crypto Token",
    description:
      "Every Combo DSC comes with a FIPS 140-2 certified USB crypto token at no extra charge. Securely stores both your certificates.",
  },
  {
    icon: Headset,
    title: "Priority Support & Installation",
    description:
      "Get priority WhatsApp and phone support for installation, portal configuration, and troubleshooting. We help you get started on any portal.",
  },
];

const FAQ_DATA = [
  {
    question: "What is a Combo DSC?",
    answer:
      "A Combo DSC (Digital Signature Certificate) is a combination of two separate Class 3 certificates - a Signing Certificate and an Encryption Certificate - both loaded onto a single USB crypto token. The signing certificate is used to digitally sign documents, providing legal validity under the IT Act 2000. The encryption certificate is used to encrypt documents so that only the intended recipient can decrypt and read them. Together, they provide both authentication and confidentiality for your digital transactions.",
  },
  {
    question: "Why do I need both signing and encryption certificates?",
    answer:
      "Signing and encryption serve two fundamentally different purposes in digital security. Your signing certificate proves that a document was signed by you and hasn't been tampered with - it provides authentication and integrity. Your encryption certificate allows you to encrypt documents so that only the intended recipient can read them - it provides confidentiality. Many government e-Tendering portals require both because tender bids must be both authenticated (signed by an authorized person) and encrypted (to prevent competitors from viewing your bid before the opening date).",
  },
  {
    question: "Is Combo DSC mandatory for e-Tendering?",
    answer:
      "Yes, for most government e-Tendering portals in India, a Combo DSC is mandatory. Portals like CPPP (eprocure.gov.in), IREPS (Indian Railways), and most state e-Procurement portals require bidders to encrypt their bid documents before submission. Without an encryption certificate, you simply cannot upload encrypted bids on these portals. If you participate in government tenders regularly, a Combo DSC is not optional - it is a mandatory requirement that you must have.",
  },
  {
    question: "Which portals require an encryption certificate?",
    answer:
      "The major portals that mandate encryption certificates include CPPP (Central Public Procurement Portal), IREPS (Indian Railways e-Procurement System), ICEGATE (Indian Customs), and virtually all state e-Procurement portals including Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Rajasthan, Gujarat, and others. GEM (Government e-Marketplace) also requires encryption for certain high-value tenders. Even portals that currently don't mandate encryption may require it in the future, so getting a Combo DSC is a future-proof investment.",
  },
  {
    question: "Can I use a Combo DSC for GST, ITR, and MCA filings too?",
    answer:
      "Absolutely yes. A Combo DSC includes a full Class 3 Signing Certificate, which works on every portal that a regular signing-only DSC works on. This includes GST filing, Income Tax e-Filing, MCA/ROC filings, Director KYC, EPFO claims, patent filings, and any other portal. The encryption certificate is simply an additional capability - it doesn't restrict or change the signing functionality in any way. Think of Combo DSC as a regular DSC with bonus encryption capability.",
  },
  {
    question:
      "What is the difference between a Combo DSC and a regular Class 3 DSC?",
    answer:
      "A regular Class 3 DSC contains only a Signing Certificate, which allows you to digitally sign documents. A Combo DSC contains both a Signing Certificate AND an Encryption Certificate on the same USB token. The signing functionality is identical in both. The key difference is that Combo DSC additionally gives you the ability to encrypt documents, which is mandatory for e-Tendering portals. In terms of cost, a Combo DSC typically costs Rs.500-700 more than a signing-only DSC, but buying signing and encryption separately would cost significantly more.",
  },
  {
    question: "Which Certifying Authorities issue Combo DSC?",
    answer:
      "Currently, only eMudhra and Capricorn Certifying Authorities issue Combo DSCs in India. Other major CAs like VSign, Pantasign, and Safescrypt only issue signing-only certificates and do not offer the encryption component. This is important to know because if you need a Combo DSC, you must choose either eMudhra or Capricorn as your Certifying Authority. Both are fully licensed by the Controller of Certifying Authorities (CCA) and their certificates are accepted on all government portals.",
  },
  {
    question: "How are both certificates stored on one USB token?",
    answer:
      "A USB crypto token is a hardware security module that can securely store multiple digital certificates and their corresponding private keys. When a Combo DSC is issued, the Certifying Authority generates two separate key pairs - one for signing and one for encryption - and loads both certificates onto the same physical token. The token's firmware manages both certificates independently. When you use the DSC on a portal, the portal's software automatically selects the appropriate certificate based on the operation being performed.",
  },
  {
    question: "Can I upgrade from a signing-only DSC to a Combo DSC?",
    answer:
      "You cannot directly upgrade an existing signing-only DSC to a Combo DSC. The encryption certificate is a separate certificate that must be issued at the time of application. If you already have a signing-only DSC and now need encryption capability, you have two options: purchase a separate encryption certificate (if your CA offers it) and load it on the same token, or purchase a new Combo DSC which comes with both fresh certificates. In most cases, buying a new Combo DSC is more cost-effective and convenient than trying to add encryption separately.",
  },
  {
    question: "Is Combo DSC available for individuals?",
    answer:
      "Yes, Combo DSC is available for both individuals and organizations. Individual proprietors and professionals who participate in government tenders need Combo DSC just as much as registered companies do. The application process is the same as a regular individual DSC - you need Aadhaar-based eKYC, PAN card, and an email address. For organization-level Combo DSC, you additionally need company registration documents. The pricing is the same regardless of whether it's issued to an individual or an organization.",
  },
  {
    question: "How long does it take to get a Combo DSC?",
    answer:
      "With our Aadhaar-based eKYC process, your Combo DSC can be issued in as little as 30 minutes. The process is completely paperless - you verify your identity using Aadhaar OTP, upload your PAN and a photograph, and both certificates (signing and encryption) are generated simultaneously. The certificates are then loaded onto your USB token. If you already have a USB token, you can start using your Combo DSC within the hour. If you need a new token shipped, add 2-3 business days for delivery.",
  },
  {
    question: "What happens if my Combo DSC expires while a tender is ongoing?",
    answer:
      "If your DSC expires during an active tender process, you will not be able to submit new bids or modify existing ones on the portal. However, bids already submitted and encrypted before expiry remain valid. To avoid disruption, we strongly recommend renewing your Combo DSC at least 2-3 weeks before expiry. We send renewal reminders via email and WhatsApp starting 30 days before expiry. You can also opt for a 2-year or 3-year validity period to reduce the frequency of renewals.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Class 3 Individual DSC",
    subtitle: "Signing Only",
    price: 899,
    link: "/products",
    description:
      "For professionals who only need document signing without encryption capability.",
  },
  {
    title: "Class 3 Organization DSC",
    subtitle: "For Companies & LLPs",
    price: 1099,
    link: "/products",
    description:
      "Organization-level signing DSC for corporate filings and compliance.",
  },
  {
    title: "DGFT DSC",
    subtitle: "For Import/Export",
    price: 2199,
    link: "/products",
    description:
      "Specialized DSC for DGFT portal access, IEC registration, and EXIM filings.",
  },
  {
    title: "USB Crypto Tokens",
    subtitle: "Hardware Security",
    price: 500,
    link: "/products",
    description:
      "FIPS-certified USB tokens from ePass, Proxkey, MToken, TrustKey & SafeNet.",
  },
];

/* -------------------------------------------------------------------------- */
/*  COMPONENTS                                                                */
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
    <div className="border border-border rounded-xl overflow-hidden transition-colors hover:border-brand-saffron/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
      >
        <span className="font-display font-semibold text-sm sm:text-base text-foreground">
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

function Class3ComboDSCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/*  BREADCRUMB                                                      */}
        {/* ---------------------------------------------------------------- */}
        <nav
          className="bg-muted/40 border-b border-border"
          aria-label="Breadcrumb"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <Link
                  to="/products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="text-foreground font-medium">
                Class 3 Combo DSC
              </li>
            </ol>
          </div>
        </nav>

        {/* ---------------------------------------------------------------- */}
        {/*  HERO                                                            */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-saffron/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-cobalt/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/15 border border-brand-saffron/20 mb-6">
                  <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
                  <span className="text-xs font-bold text-brand-saffron tracking-wide uppercase">
                    Best for Tenders
                  </span>
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  Class 3 Combo DSC
                </h1>
                <p className="text-xl sm:text-2xl text-brand-saffron-bright font-display font-semibold mb-6">
                  Signing + Encryption in One Token
                </p>
                <p className="text-base text-white/55 leading-relaxed mb-8 max-w-lg">
                  The complete digital signature solution that combines both
                  signing and encryption certificates on a single USB token.
                  Mandatory for e-Tendering on CPPP, GEM, IREPS, ICEGATE, and
                  all state procurement portals.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;1,599
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;2,799
                  </span>
                  <span className="text-xs font-bold text-brand-emerald bg-brand-emerald/15 px-2.5 py-1 rounded-full">
                    Save &#8377;1,200
                  </span>
                </div>
                <p className="text-xs text-white/35 mb-8">
                  Starting price for 1 Year validity. Inclusive of USB token.
                </p>

                {/* CAs and validity */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs text-white/45 font-medium">
                    Certifying Authorities:
                  </span>
                  {["eMudhra", "Capricorn"].map((ca) => (
                    <span
                      key={ca}
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/80"
                    >
                      <BadgeCheck className="w-3 h-3 text-brand-saffron" />
                      {ca}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="text-xs text-white/45 font-medium">
                    Validity:
                  </span>
                  {["1 Year", "2 Years", "3 Years"].map((v) => (
                    <span
                      key={v}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/70"
                    >
                      {v}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20Class%203%20Combo%20DSC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Combo DSC Now
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
                        +91 98765 43210
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Key stats card */}
              <div className="relative">
                <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 backdrop-blur-sm">
                  <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-brand-saffron" />
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Class 3 Signing Certificate (legally valid digital signature)",
                      "Class 3 Encryption Certificate (encrypt documents & bids)",
                      "Both certificates on one USB crypto token",
                      "FIPS 140-2 certified USB token included free",
                      "Aadhaar-based eKYC - no paperwork needed",
                      "Issued in under 30 minutes",
                      "Free re-issuance within validity period",
                      "Priority 24/7 WhatsApp & phone support",
                      "Works on ALL government portals in India",
                      "Free pan-India shipping for USB token",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-saffron/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-brand-saffron" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Trust stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "2-in-1", label: "Sign + Encrypt" },
                { value: "30 min", label: "Delivery via eKYC" },
                { value: "100%", label: "Tender Compliant" },
                { value: "Free", label: "USB Token Included" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-4 py-4 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <div className="font-display font-bold text-2xl text-brand-saffron mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/45">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  WHAT IS COMBO DSC                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Understanding Combo DSC
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a Class 3 Combo DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                A comprehensive digital identity solution that combines two
                distinct cryptographic certificates on a single USB token.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Signing Certificate */}
              <div className="rounded-2xl border border-border bg-card p-8 hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.08] flex items-center justify-center mb-5">
                  <FileCheck className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Signing Certificate
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The signing certificate creates a legally valid digital
                  signature under the Information Technology Act, 2000. When you
                  sign a document with this certificate, it proves three things:
                  the document was signed by you (authentication), the document
                  has not been altered after signing (integrity), and you cannot
                  deny having signed it (non-repudiation).
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This is the same certificate used in a regular Class 3 DSC.
                  It's legally equivalent to a handwritten signature and is
                  accepted across all government portals including GST, MCA,
                  Income Tax, and e-Tendering platforms.
                </p>
              </div>

              {/* Encryption Certificate */}
              <div className="rounded-2xl border border-brand-saffron/20 bg-brand-saffron/[0.02] p-8 hover-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6 text-brand-saffron" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  Encryption Certificate
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  The encryption certificate enables you to encrypt documents so
                  that only the intended recipient can decrypt and read them.
                  This is critical for e-Tendering, where your bid documents
                  must be encrypted to prevent unauthorized access before the
                  official tender opening date. The encryption uses public-key
                  cryptography - you encrypt with the recipient's public key,
                  and only their private key can decrypt it.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  This certificate is what makes Combo DSC different from a
                  regular signing-only DSC. Many e-Tendering portals like CPPP,
                  IREPS, and state procurement systems will not allow you to
                  submit bids without an encryption certificate.
                </p>
              </div>
            </div>

            {/* Combined explanation */}
            <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/[0.08] flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6 text-brand-emerald" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    Why Both on One Token?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    A Combo DSC loads both the signing and encryption
                    certificates onto a single USB crypto token. This is not
                    just a convenience - it's a practical necessity. When you
                    participate in e-Tendering, the portal software needs access
                    to both certificates during the bid submission process. You
                    sign the bid documents (using the signing certificate) and
                    encrypt them (using the encryption certificate) as part of
                    the same workflow. Having both on one token makes this
                    seamless.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Both certificates are issued under the Indian IT Act, 2000
                    and are validated by the Controller of Certifying Authorities
                    (CCA), Government of India. They carry the same legal weight
                    as certificates issued individually. The USB token itself is
                    FIPS 140-2 certified, ensuring that your private keys never
                    leave the secure hardware environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  COMBO VS SEPARATE                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Combo DSC vs Buying Separately
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                See why Combo DSC is the smarter, more cost-effective choice
                over purchasing signing and encryption certificates separately.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Combo - Recommended */}
              <div className="rounded-2xl border-2 border-brand-saffron/30 bg-card p-8 relative">
                <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-saffron text-brand-navy-deep text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2 mt-2">
                  Combo DSC
                </h3>
                <p className="text-sm text-brand-saffron font-semibold mb-6">
                  Sign + Encrypt on One Token
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display font-bold text-3xl text-foreground">
                    &#8377;1,599
                  </span>
                  <span className="text-xs text-muted-foreground">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    "Both certificates on 1 USB token",
                    "Single application process",
                    "One-time eKYC verification",
                    "Unified validity & renewal",
                    "Single password to manage",
                    "Lower combined cost",
                    "Mandatory tender compliance",
                    "Free USB token included",
                    "Priority support",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20Class%203%20Combo%20DSC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-11 shimmer">
                    Buy Combo DSC
                  </Button>
                </a>
              </div>

              {/* Separate */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display font-bold text-xl text-foreground mb-2 mt-2">
                  Separate Certificates
                </h3>
                <p className="text-sm text-muted-foreground font-semibold mb-6">
                  Sign + Encrypt as Separate Purchases
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display font-bold text-3xl text-foreground">
                    &#8377;2,400+
                  </span>
                  <span className="text-xs text-muted-foreground">/year</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {[
                    {
                      text: "May need 2 separate USB tokens",
                      negative: true,
                    },
                    {
                      text: "Two separate applications needed",
                      negative: true,
                    },
                    { text: "eKYC required twice", negative: true },
                    {
                      text: "Different validity dates to track",
                      negative: true,
                    },
                    { text: "Two passwords to manage", negative: true },
                    { text: "Higher total cost", negative: true },
                    {
                      text: "May have portal compatibility issues",
                      negative: true,
                    },
                    { text: "USB tokens charged separately", negative: true },
                    { text: "Standard support only", negative: false },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex items-start gap-2.5 text-sm text-foreground/60"
                    >
                      {item.negative ? (
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      ) : (
                        <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full rounded-xl h-11 font-semibold"
                  disabled
                >
                  Not Recommended
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  WHO NEEDS COMBO DSC                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs a Combo DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                If you fall into any of these categories, a Combo DSC is either
                mandatory or strongly recommended for your work.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Landmark,
                  title: "e-Tendering Bidders",
                  description:
                    "Anyone submitting bids on government e-Tendering portals. Encryption is mandatory for bid security - your financial quotes must be encrypted so they can only be opened after the bid deadline.",
                  mandatory: true,
                },
                {
                  icon: Building2,
                  title: "Government Contractors",
                  description:
                    "Contractors executing government projects who need to regularly participate in tender processes and submit encrypted work orders, invoices, and compliance documents through procurement portals.",
                  mandatory: true,
                },
                {
                  icon: ClipboardCheck,
                  title: "CPPP / GEM Vendors",
                  description:
                    "Registered vendors on the Central Public Procurement Portal (CPPP) and Government e-Marketplace (GEM) who bid on central government tenders and supply contracts.",
                  mandatory: true,
                },
                {
                  icon: Globe,
                  title: "ICEGATE Users",
                  description:
                    "Import-export businesses filing Bills of Entry, Shipping Bills, and other customs documents on ICEGATE. Encryption is required for secure transmission of customs data.",
                  mandatory: true,
                },
                {
                  icon: Shield,
                  title: "Organizations with Encryption Needs",
                  description:
                    "Companies that need to exchange encrypted documents with government bodies, regulatory authorities, or business partners who require encrypted communication channels.",
                  mandatory: false,
                },
                {
                  icon: Users,
                  title: "Anyone Submitting Encrypted Bids",
                  description:
                    "Whether it's central, state, or PSU tenders - if the tender document mentions 'encryption certificate required' or 'combo DSC required', you need this certificate.",
                  mandatory: true,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-saffron" />
                    </div>
                    {item.mandatory && (
                      <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <AlertTriangle className="w-2.5 h-2.5" />
                        MANDATORY
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  PORTALS WHERE COMBO IS MANDATORY                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/[0.08] border border-red-500/15 mb-5">
                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                <span className="text-xs font-semibold text-red-500 tracking-wide uppercase">
                  Portal Compatibility
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Portals Where Combo DSC is Required
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Check whether your portal requires encryption or only signing.
                Portals marked "Mandatory" will not accept bids without an
                encryption certificate.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-3">
              {PORTAL_DATA.map((portal) => (
                <div
                  key={portal.name}
                  className="rounded-xl border border-border bg-card p-5 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  <div className="flex items-center gap-3 sm:min-w-[280px]">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        portal.encryption === "mandatory"
                          ? "bg-red-500/10"
                          : portal.encryption === "required"
                            ? "bg-amber-500/10"
                            : "bg-brand-emerald/10"
                      }`}
                    >
                      {portal.encryption === "mandatory" ? (
                        <Lock className="w-4 h-4 text-red-500" />
                      ) : portal.encryption === "required" ? (
                        <Lock className="w-4 h-4 text-amber-500" />
                      ) : (
                        <FileCheck className="w-4 h-4 text-brand-emerald" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground">
                        {portal.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground">
                        {portal.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          portal.encryption === "mandatory"
                            ? "bg-red-500/10 text-red-500"
                            : portal.encryption === "required"
                              ? "bg-amber-500/10 text-amber-600"
                              : "bg-brand-emerald/10 text-brand-emerald"
                        }`}
                      >
                        {portal.encryption === "mandatory"
                          ? "ENCRYPTION MANDATORY"
                          : portal.encryption === "required"
                            ? "ENCRYPTION REQUIRED"
                            : "SIGNING ONLY"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {portal.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-4xl mx-auto rounded-xl bg-brand-saffron/[0.04] border border-brand-saffron/15 p-5">
              <p className="text-sm text-foreground/80 leading-relaxed">
                <strong className="text-foreground">Pro Tip:</strong> Even if a
                portal currently only requires signing, many are transitioning to
                mandatory encryption. Getting a Combo DSC now means you're
                future-proofed and won't need to purchase a separate encryption
                certificate later. The small additional cost today can save you
                significant hassle and expense in the future.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  HOW COMBO DSC WORKS                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How Combo DSC Works
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Understanding the technical process behind your Combo DSC - from
                certificate generation to portal usage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Technical flow */}
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Two Key Pairs Generated",
                    description:
                      "When you apply for a Combo DSC, the Certifying Authority generates two separate 2048-bit RSA key pairs - one dedicated to signing operations and one dedicated to encryption operations. Each key pair consists of a private key (kept secret on your token) and a public key (embedded in the certificate).",
                  },
                  {
                    step: "02",
                    title: "Both Certificates Loaded on Token",
                    description:
                      "Both certificates along with their private keys are securely loaded onto a single FIPS 140-2 certified USB crypto token. The token's secure microcontroller ensures that private keys can never be extracted or copied - all cryptographic operations happen inside the token hardware.",
                  },
                  {
                    step: "03",
                    title: "Automatic Certificate Selection",
                    description:
                      "When you use your Combo DSC on a portal, the portal's software (typically a Java applet or browser extension) automatically detects both certificates on your token. When signing is needed, the signing certificate is selected. When encryption is needed, the encryption certificate is used. You don't need to manually choose.",
                  },
                  {
                    step: "04",
                    title: "Seamless Portal Integration",
                    description:
                      "On e-Tendering portals, the typical workflow is: you upload your bid documents, the portal software signs them with your signing certificate, then encrypts the signed package with the tender authority's public key using your encryption certificate. This ensures your bid is both authenticated and confidential.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-brand-saffron">
                        {item.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-foreground mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual diagram card */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display font-bold text-base text-foreground mb-6 text-center">
                  Your USB Token Contains
                </h3>
                <div className="space-y-4">
                  <div className="rounded-xl bg-brand-cobalt/[0.04] border border-brand-cobalt/10 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-cobalt/10 flex items-center justify-center">
                        <FileCheck className="w-4 h-4 text-brand-cobalt" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-foreground">
                          Signing Certificate
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          Class 3 - Individual / Organization
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-cobalt" />
                        Purpose: Digital signing of documents
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-cobalt" />
                        Key Usage: Non-Repudiation
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-cobalt" />
                        Algorithm: 2048-bit RSA / SHA-256
                      </li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-[10px] font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      + COMBINED ON SINGLE TOKEN +
                    </div>
                  </div>

                  <div className="rounded-xl bg-brand-saffron/[0.04] border border-brand-saffron/10 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-saffron/10 flex items-center justify-center">
                        <Lock className="w-4 h-4 text-brand-saffron" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-foreground">
                          Encryption Certificate
                        </h4>
                        <p className="text-[11px] text-muted-foreground">
                          Class 3 - Individual / Organization
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-saffron" />
                        Purpose: Encrypting documents & bids
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-saffron" />
                        Key Usage: Key Encipherment
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleDot className="w-3 h-3 text-brand-saffron" />
                        Algorithm: 2048-bit RSA / SHA-256
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-muted/50 p-4">
                  <p className="text-[11px] text-muted-foreground leading-relaxed text-center">
                    Both certificates are issued by the same Certifying
                    Authority (eMudhra or Capricorn), share the same validity
                    period, and are protected by the same token PIN. The USB
                    token securely stores both private keys in its tamper-proof
                    hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CERTIFYING AUTHORITIES                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Certifying Authorities for Combo DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Only two CCA-licensed Certifying Authorities in India issue
                Combo DSCs with both signing and encryption certificates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              {/* eMudhra */}
              <div className="rounded-2xl border border-border bg-card p-8 hover-lift transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.08] flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      eMudhra
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      India's Largest Certifying Authority
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {[
                    "Largest CA in India by market share",
                    "Issued 50M+ digital certificates",
                    "Licensed by CCA, Government of India",
                    "Combo DSC with Sign + Encrypt",
                    "Fastest eKYC-based issuance",
                    "Widest portal compatibility tested",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-display font-bold text-foreground">
                  Starting at &#8377;1,599/year
                </div>
              </div>

              {/* Capricorn */}
              <div className="rounded-2xl border border-border bg-card p-8 hover-lift transition-all duration-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-brand-saffron" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      Capricorn
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Trusted CA for Government & Enterprise
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-5">
                  {[
                    "Preferred by government contractors",
                    "Strong presence in e-Tendering segment",
                    "Licensed by CCA, Government of India",
                    "Combo DSC with Sign + Encrypt",
                    "Reliable eKYC-based issuance",
                    "Proven compatibility with all portals",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-display font-bold text-foreground">
                  Starting at &#8377;1,649/year
                </div>
              </div>
            </div>

            {/* Note about other CAs */}
            <div className="max-w-4xl mx-auto rounded-xl bg-amber-500/[0.04] border border-amber-500/15 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    Important: Not All CAs Offer Combo DSC
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    VSign, Pantasign, and Safescrypt currently issue only
                    signing certificates and do not offer the encryption
                    component needed for a Combo DSC. If you need Combo DSC for
                    e-Tendering, you must choose either eMudhra or Capricorn.
                    Both are equally accepted across all government portals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  HOW TO APPLY                                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Apply for Combo DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get your Combo DSC in 4 simple steps. The entire process is
                online and paperless via Aadhaar eKYC.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: 1,
                  icon: ClipboardCheck,
                  title: "Choose CA & Validity",
                  description:
                    "Select your preferred Certifying Authority (eMudhra or Capricorn) and validity period (1, 2, or 3 years). Contact us via WhatsApp or phone to place your order.",
                },
                {
                  step: 2,
                  icon: Fingerprint,
                  title: "Complete Aadhaar eKYC",
                  description:
                    "Verify your identity using Aadhaar-based OTP authentication. Enter your Aadhaar number, receive OTP on your registered mobile, and authenticate. Takes under 2 minutes.",
                },
                {
                  step: 3,
                  icon: FileText,
                  title: "Upload Documents",
                  description:
                    "Upload your PAN card, a passport-size photograph, and organization documents (if applying for org-level DSC). All uploads are digital - no physical documents needed.",
                },
                {
                  step: 4,
                  icon: Download,
                  title: "Download & Install",
                  description:
                    "Both your signing and encryption certificates are generated and loaded onto your USB token. Download the certificates, install drivers, and you're ready to sign and encrypt.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border bg-card p-6 text-center hover-lift transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-saffron/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-bold text-sm text-brand-saffron">
                      {item.step}
                    </span>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-5 h-5 text-brand-saffron" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Average processing time:{" "}
                <strong className="text-foreground">Under 30 minutes</strong>{" "}
                from application to certificate download.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20apply%20for%20Class%203%20Combo%20DSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-11 px-8 shimmer">
                  <span className="flex items-center gap-2">
                    Start Application
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  REQUIRED DOCUMENTS                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Documents Required
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The documents you need depend on whether you're applying as an
                individual or on behalf of an organization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Individual */}
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-cobalt/[0.08] flex items-center justify-center">
                    <Users className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      For Individuals
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Proprietors, Professionals, Freelancers
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      doc: "Aadhaar Card",
                      note: "For eKYC OTP verification",
                    },
                    {
                      doc: "PAN Card",
                      note: "Clear copy of PAN card",
                    },
                    {
                      doc: "Passport-size Photograph",
                      note: "Recent color photo",
                    },
                    {
                      doc: "Email Address",
                      note: "Active email for certificate",
                    },
                    {
                      doc: "Mobile Number",
                      note: "Linked to Aadhaar for OTP",
                    },
                  ].map((item) => (
                    <li
                      key={item.doc}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-brand-cobalt shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">
                          {item.doc}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          - {item.note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Organization */}
              <div className="rounded-2xl border border-brand-saffron/20 bg-brand-saffron/[0.02] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-brand-saffron" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      For Organizations
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Companies, LLPs, Partnerships, Trusts
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      doc: "All Individual Documents",
                      note: "As listed for the authorized signatory",
                    },
                    {
                      doc: "Organization PAN Card",
                      note: "PAN of the company / LLP / firm",
                    },
                    {
                      doc: "Registration Certificate",
                      note: "COI / LLP Agreement / Partnership Deed",
                    },
                    {
                      doc: "GST Certificate",
                      note: "If registered under GST",
                    },
                    {
                      doc: "Authorization Letter",
                      note: "On letterhead authorizing the signatory",
                    },
                  ].map((item) => (
                    <li
                      key={item.doc}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-brand-saffron shrink-0 mt-0.5" />
                      <div>
                        <span className="text-foreground font-medium">
                          {item.doc}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          - {item.note}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  PRICING TABLE                                                   */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
                <Zap className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Transparent Pricing
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Combo DSC Pricing
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                All prices include both signing and encryption certificates plus
                a free USB crypto token. No hidden charges.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {PRICING_DATA.map((ca) => (
                <div
                  key={ca.ca}
                  className="rounded-2xl border border-border bg-card overflow-hidden"
                >
                  <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-brand-saffron" />
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {ca.ca}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      - CCA Licensed Certifying Authority
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                    {ca.prices.map((tier) => (
                      <div
                        key={tier.validity}
                        className="p-6 text-center hover:bg-muted/20 transition-colors"
                      >
                        <div className="text-sm font-semibold text-muted-foreground mb-3">
                          {tier.validity}
                        </div>
                        <div className="flex items-baseline justify-center gap-2 mb-1">
                          <span className="font-display font-bold text-2xl text-foreground">
                            &#8377;
                            {tier.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground line-through mb-3">
                          MRP &#8377;{tier.mrp.toLocaleString("en-IN")}
                        </div>
                        <span className="text-[10px] font-bold text-brand-emerald bg-brand-emerald/10 px-2 py-0.5 rounded-full">
                          Save &#8377;
                          {(tier.mrp - tier.price).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-4xl mx-auto text-center">
              <p className="text-xs text-muted-foreground">
                All prices inclusive of taxes. Free USB token and free pan-India
                shipping included. Prices subject to change without notice.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FEATURES                                                        */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 -right-40 w-80 h-80 bg-brand-saffron/[0.06] rounded-full blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
                Why Choose Our Combo DSC
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                Every Combo DSC from SignSecure comes with these features as
                standard. No upsells, no surprises.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-white/[0.04] border border-white/[0.06] p-6 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-saffron/15 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-brand-saffron" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FAQ                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about Class 3 Combo DSC, signing,
                encryption, and e-Tendering requirements.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {FAQ_DATA.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onToggle={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  RELATED PRODUCTS                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore our other Digital Signature Certificates and USB tokens.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.link}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20 block"
                >
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-brand-cobalt font-semibold mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-bold text-lg text-foreground">
                      From &#8377;
                      {product.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA                                                             */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 -left-40 w-80 h-80 bg-brand-saffron/[0.08] rounded-full blur-[120px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/15 border border-brand-saffron/20 mb-6">
              <Zap className="w-3.5 h-3.5 text-brand-saffron" />
              <span className="text-xs font-bold text-brand-saffron tracking-wide uppercase">
                Ready to Get Started?
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Get Your Combo DSC Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-4 max-w-xl mx-auto">
              Don't let the absence of an encryption certificate block your
              tender submissions. Get your Class 3 Combo DSC issued in under 30
              minutes with our Aadhaar eKYC process.
            </p>
            <p className="text-lg text-white/70 font-display font-bold mb-8">
              Starting at just &#8377;1,599 with free USB token
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20Class%203%20Combo%20DSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 shimmer"
                >
                  <span className="flex items-center gap-2">
                    Buy Combo DSC on WhatsApp
                    <ArrowRight className="w-4 h-4" />
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
                    <Phone className="w-4 h-4" />
                    Call +91 98765 43210
                  </span>
                </Button>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto">
              {[
                { icon: Clock, label: "30-Min Issuance" },
                { icon: Truck, label: "Free Shipping" },
                { icon: Headset, label: "24/7 Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <Icon className="w-5 h-5 text-brand-saffron mx-auto mb-1.5" />
                  <div className="text-[11px] text-white/45 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
