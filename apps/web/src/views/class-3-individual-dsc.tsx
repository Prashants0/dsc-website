"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  User,
  Briefcase,
  Scale,
  Lightbulb,
  Landmark,
  PenTool,
  Globe,
  FileText,
  Building2,
  BadgeCheck,
  Clock,
  Fingerprint,
  CreditCard,
  Download,
  Lock,
  Zap,
  RefreshCw,
  Headset,
  UsbIcon,
  Phone,
  MessageCircle,
  Star,
  Award,
  HelpCircle,
  ExternalLink,
  Package,
} from "lucide-react";

/* --------------- Data --------------- */

const CA_OPTIONS = [
  {
    id: "emudhra",
    name: "eMudhra",
    logo: "/assets/partner-emudhra.png",
    description:
      "India's largest Certifying Authority. Licensed by CCA, Government of India. Trusted by over 30 million users nationwide.",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    logo: "/assets/partner-capricorn.png",
    description:
      "CCA-licensed CA with a strong presence across India. Known for reliable issuance and a wide partner network.",
  },
  {
    id: "pantasign",
    name: "Pantasign",
    logo: "/assets/partner-pantasign.png",
    description:
      "Pantasign (Pantasoft) is a CCA-licensed CA providing digital signature certificates with seamless online issuance.",
  },
  {
    id: "signx",
    name: "SignX",
    logo: "/assets/partner-signx.png",
    description:
      "SignX is a CCA-licensed Certifying Authority offering fast, reliable Digital Signature Certificates for individuals and organizations across India.",
  },
];

const PRICING_TABLE = [
  {
    ca: "eMudhra",
    year1: 899,
    year2: 1399,
    year3: 1799,
    bestValue: true,
  },
  {
    ca: "Capricorn",
    year1: 949,
    year2: 1449,
    year3: 1849,
    bestValue: false,
  },
  {
    ca: "Pantasign",
    year1: 999,
    year2: 1499,
    year3: 1899,
    bestValue: false,
  },
  {
    ca: "SignX",
    year1: 899,
    year2: 1399,
    year3: 1799,
    bestValue: false,
  },
];

const USER_PERSONAS = [
  {
    icon: User,
    title: "Individual Professionals",
    description:
      "Salaried individuals who need to file income tax returns electronically, claim refunds, or digitally sign documents for banking and legal purposes.",
  },
  {
    icon: Scale,
    title: "CA, CS & Lawyers",
    description:
      "Chartered Accountants, Company Secretaries, and legal professionals who file on behalf of clients on MCA, GST, and Income Tax portals.",
  },
  {
    icon: PenTool,
    title: "Freelancers & Consultants",
    description:
      "Independent consultants and freelancers who need to file GST returns, sign contracts digitally, and register on government procurement portals.",
  },
  {
    icon: Briefcase,
    title: "Proprietors",
    description:
      "Sole proprietors running businesses who require DSC for GST registration, MSME/Udyam registration, and government portal compliance.",
  },
  {
    icon: Lightbulb,
    title: "Startup Founders",
    description:
      "Entrepreneurs incorporating companies, filing with MCA, registering on Startup India, and signing investor agreements digitally.",
  },
  {
    icon: Landmark,
    title: "Government Contractors",
    description:
      "Individuals bidding on government tenders via GeM, CPPP, IREPS, and state e-procurement portals where DSC is mandatory for bid submission.",
  },
];

const GOVERNMENT_PORTALS = [
  {
    name: "GST Portal",
    url: "gst.gov.in",
    icon: FileText,
    color: "bg-blue-500/10 text-blue-600",
    uses: [
      "GST registration and amendment",
      "Monthly/quarterly GSTR filing",
      "GST refund claims",
      "E-way bill generation",
      "LUT filing for exporters",
    ],
  },
  {
    name: "Income Tax Portal",
    url: "incometax.gov.in",
    icon: Landmark,
    color: "bg-emerald-500/10 text-emerald-600",
    uses: [
      "ITR filing for all return types",
      "Income tax refund claims",
      "Response to notices",
      "Tax audit report filing",
      "Transfer pricing documentation",
    ],
  },
  {
    name: "MCA Portal",
    url: "mca.gov.in",
    icon: Building2,
    color: "bg-purple-500/10 text-purple-600",
    uses: [
      "DIR-3 KYC for directors",
      "Annual ROC filings (AOC-4, MGT-7)",
      "Company incorporation (SPICe+)",
      "Charge registration",
      "Change in director/address forms",
    ],
  },
  {
    name: "EPFO Portal",
    url: "epfindia.gov.in",
    icon: User,
    color: "bg-orange-500/10 text-orange-600",
    uses: [
      "ECR (Electronic Challan cum Return) filing",
      "PF withdrawal claims",
      "Employer registration",
      "KYC approval for employees",
      "Transfer claims processing",
    ],
  },
  {
    name: "e-Tendering Portals",
    url: "gem.gov.in / eprocure.gov.in",
    icon: Globe,
    color: "bg-indigo-500/10 text-indigo-600",
    uses: [
      "GeM (Government e-Marketplace) seller registration",
      "CPPP tender submissions",
      "IREPS (Indian Railways) bids",
      "State government procurement portals",
      "Defence procurement (BEL, HAL portals)",
    ],
  },
  {
    name: "IP India Portal",
    url: "ipindia.gov.in",
    icon: Award,
    color: "bg-rose-500/10 text-rose-600",
    uses: [
      "Patent application filing",
      "Trademark registration",
      "Design registration",
      "Response to examination reports",
      "Opposition and hearing filings",
    ],
  },
  {
    name: "Startup India Portal",
    url: "startupindia.gov.in",
    icon: Lightbulb,
    color: "bg-amber-500/10 text-amber-600",
    uses: [
      "DPIIT recognition application",
      "Tax exemption applications",
      "Seed fund scheme applications",
      "Self-certification compliance",
      "Intellectual property facilitation",
    ],
  },
  {
    name: "MSME / Udyam Portal",
    url: "udyamregistration.gov.in",
    icon: Package,
    color: "bg-teal-500/10 text-teal-600",
    uses: [
      "Udyam registration for MSMEs",
      "MSME certificate download",
      "Enterprise classification update",
      "Aadhaar-linked MSME verification",
      "Subsidy and scheme applications",
    ],
  },
];

const APPLICATION_STEPS = [
  {
    step: 1,
    icon: ShieldCheck,
    title: "Choose CA & Validity",
    description:
      "Select your preferred Certifying Authority (eMudhra, Capricorn, Pantasign, or SignX) and choose the validity period — 1, 2, or 3 years based on your needs.",
    time: "2 minutes",
  },
  {
    step: 2,
    icon: Fingerprint,
    title: "Complete eKYC Verification",
    description:
      "Verify your identity using Aadhaar OTP-based eKYC. Enter your Aadhaar number, receive an OTP on your registered mobile, and complete verification instantly — no physical documents needed.",
    time: "5 minutes",
  },
  {
    step: 3,
    icon: CreditCard,
    title: "Make Payment",
    description:
      "Pay securely via UPI, net banking, credit card, debit card, or wallet. All transactions are encrypted and secured. You will receive an instant payment confirmation.",
    time: "1 minute",
  },
  {
    step: 4,
    icon: Download,
    title: "Download Your DSC",
    description:
      "Once payment and eKYC are verified, your Class 3 DSC is generated and ready for download. Install it on your USB token using the simple setup wizard provided.",
    time: "15–20 minutes",
  },
];

const REQUIRED_DOCUMENTS = [
  {
    name: "Aadhaar Card",
    description:
      "Valid Aadhaar card with mobile number linked for OTP-based eKYC verification.",
  },
  {
    name: "PAN Card",
    description:
      "Permanent Account Number card for identity verification and linking with the DSC.",
  },
  {
    name: "Mobile Number (Linked to Aadhaar)",
    description:
      "Active mobile number registered with your Aadhaar for receiving OTP during eKYC.",
  },
  {
    name: "Email Address",
    description:
      "Valid email ID where the DSC download link and certificate details will be sent.",
  },
];

const KEY_FEATURES = [
  {
    icon: Lock,
    title: "2048-bit RSA Encryption",
    description:
      "Your digital signature is secured with 2048-bit RSA cryptographic keys, the industry standard mandated by CCA for all Class 3 certificates issued in India.",
  },
  {
    icon: Fingerprint,
    title: "Aadhaar eKYC — No Paperwork",
    description:
      "Complete your identity verification entirely online using Aadhaar OTP. No need to visit any office, courier documents, or get attestations. 100% paperless process.",
  },
  {
    icon: Zap,
    title: "1-Day Delivery",
    description:
      "From the moment you complete eKYC and payment, your DSC is generated and ready for download within a day. No waiting days or weeks.",
  },
  {
    icon: UsbIcon,
    title: "Free USB Token Included",
    description:
      "Every new DSC comes with a free FIPS-certified USB crypto token (ePass 2003 or equivalent) for secure storage. Token is delivered across India.",
  },
  {
    icon: RefreshCw,
    title: "Free Re-Issuance",
    description:
      "If your token is lost, damaged, or you need to revoke and re-issue your certificate, we provide free re-issuance within the validity period at no extra cost.",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description:
      "Our DSC support team is available online via WhatsApp, phone, and email. Get help with installation, portal configuration, or any technical issues.",
  },
];

const FAQ_DATA = [
  {
    question: "What is a Class 3 Digital Signature Certificate?",
    answer:
      "A Class 3 Digital Signature Certificate (DSC) is the highest level of individual digital signature issued by licensed Certifying Authorities in India. It provides the strongest level of identity assurance, as the applicant's identity is verified through Aadhaar-based eKYC or in-person verification. Class 3 DSCs are legally valid under the Information Technology Act, 2000, and are accepted across all government portals including GST, Income Tax, MCA, EPFO, and e-Tendering platforms. They use 2048-bit RSA encryption and are stored on secure USB crypto tokens to prevent unauthorized use.",
  },
  {
    question: "Who needs a Class 3 DSC?",
    answer:
      "Any individual who needs to digitally sign documents or file on Indian government portals needs a Class 3 DSC. This includes salaried professionals filing income tax returns, business owners filing GST returns, directors filing KYC and annual returns on MCA, chartered accountants and company secretaries filing on behalf of clients, freelancers registering on government procurement portals, and anyone applying for patents, trademarks, or MSME registration. If you interact with any Indian government portal that requires a digital signature, you need a Class 3 DSC.",
  },
  {
    question: "How long does it take to get a Class 3 DSC?",
    answer:
      "With our Aadhaar-based eKYC process, you can receive your Class 3 DSC within a day from the time you complete the application and payment. The eKYC verification is instant — you simply enter your Aadhaar number, receive an OTP on your registered mobile, and your identity is verified. Once verified, the certificate is generated and available for download. The USB token is shipped separately and typically arrives within 2-3 business days via courier, though the DSC itself can be used immediately on download.",
  },
  {
    question: "What documents are required for a Class 3 DSC?",
    answer:
      "For individuals applying via Aadhaar eKYC, you need just four things: your Aadhaar card (with mobile number linked for OTP), PAN card, an active mobile number registered with Aadhaar, and a valid email address. No physical documents, attestations, or office visits are required. The entire process is 100% paperless and can be completed from your home or office. For individuals without Aadhaar, alternative verification methods may be available depending on the Certifying Authority.",
  },
  {
    question: "How much does a Class 3 DSC cost?",
    answer:
      "Class 3 Individual DSC prices start from ₹899 for a one-year certificate. The price varies based on the Certifying Authority you choose and the validity period. A two-year certificate typically costs between ₹1,399 and ₹1,499, while a three-year certificate ranges from ₹1,799 to ₹1,899. All prices include GST and a free USB crypto token. We offer certificates from our CCA-licensed authorities — eMudhra, Capricorn, Pantasign, and SignX — so you can compare and choose the best option for your budget.",
  },
  {
    question: "What is the validity of a Class 3 DSC?",
    answer:
      "Class 3 Digital Signature Certificates are available in three validity options: 1 year, 2 years, and 3 years. The validity period begins from the date of issuance. Longer validity periods offer better value as the per-year cost decreases. For example, a 3-year DSC costs significantly less per year than renewing a 1-year DSC three times. Once the certificate expires, you need to apply for a new one — renewal is essentially a fresh issuance with new eKYC verification. We recommend the 2-year or 3-year option for most users.",
  },
  {
    question: "Can I use a Class 3 DSC for GST filing?",
    answer:
      "Yes, a Class 3 Individual DSC is fully accepted on the GST portal (gst.gov.in) for all GST-related activities. This includes new GST registration, filing monthly and quarterly returns (GSTR-1, GSTR-3B, GSTR-9), claiming GST refunds, filing LUT for exporters, generating e-way bills, and responding to notices. While GST filing can also be done via EVC (Electronic Verification Code) for some return types, a DSC is mandatory for certain categories of taxpayers and provides a higher level of security and legal validity for all filings.",
  },
  {
    question: "Is Class 3 DSC valid for MCA/ROC filings?",
    answer:
      "Absolutely. A Class 3 DSC is mandatory for all filings on the MCA (Ministry of Corporate Affairs) portal at mca.gov.in. This includes company incorporation via SPICe+, annual filings like AOC-4 and MGT-7, director KYC (DIR-3 KYC) which is required annually, charge registration and modification, change in directors or registered address, and all other e-forms filed with the Registrar of Companies (ROC). Directors, company secretaries, and chartered accountants all need a valid Class 3 DSC to sign and file these forms digitally.",
  },
  {
    question: "What is the difference between Class 2 and Class 3 DSC?",
    answer:
      "As of the latest CCA (Controller of Certifying Authorities) guidelines, the distinction between Class 2 and Class 3 DSC has been largely merged. Previously, Class 2 DSC required basic identity verification and was used for lower-assurance applications, while Class 3 DSC required stricter in-person or Aadhaar-based verification. Today, all DSCs issued in India follow the Class 3 standard, which mandates strong identity verification. If you see references to Class 2 DSC online, they are outdated — all current certificates are effectively Class 3 with 2048-bit encryption and Aadhaar eKYC or in-person verification.",
  },
  {
    question: "Can NRIs get a Class 3 Individual DSC?",
    answer:
      "NRIs (Non-Resident Indians) can obtain a Class 3 DSC, but the process differs slightly since Aadhaar-based eKYC may not be available for those without an active Indian mobile number linked to Aadhaar. For NRIs, the DSC can be issued through video-based KYC or document attestation from the Indian Embassy/Consulate in their country of residence. The required documents typically include a valid Indian passport, PAN card, and address proof. Some Certifying Authorities like eMudhra have specific processes for NRI applicants. We also offer a dedicated Foreign National DSC product for non-Indian citizens.",
  },
  {
    question: "What is eKYC and how does it work for DSC?",
    answer:
      "eKYC (Electronic Know Your Customer) is a paperless identity verification process that uses your Aadhaar number and OTP. When applying for a DSC, you enter your Aadhaar number on the application form. UIDAI sends a one-time password (OTP) to the mobile number registered with your Aadhaar. You enter this OTP to verify your identity. The system then pulls your name, date of birth, gender, and photo from the UIDAI database and uses this information to issue the digital signature certificate. The entire process takes under 5 minutes and eliminates the need for physical document submission, notarization, or office visits.",
  },
  {
    question: "What USB token is provided with the DSC?",
    answer:
      "Every Class 3 DSC from SignSecure comes with a free FIPS 140-2 certified USB crypto token. The standard token provided is the ePass 2003 Auto (by HyperSecu), which is the most widely used and compatible token in India. It works on Windows, macOS, and Linux, has auto-detect drivers, and is compatible with all government portals. If you prefer a different token brand (Proxkey or MToken), you can choose it during checkout for a small upgrade fee. The token securely stores your private key and ensures your digital signature cannot be copied or misused.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Class 3 Organization DSC",
    description:
      "For companies, LLPs, and firms needing organization-level digital signatures for corporate filings and tenders.",
    price: 1099,
    link: "/products#class3-org",
    badge: "For Companies",
  },
  {
    title: "Class 3 Combo DSC",
    description:
      "Signing + Encryption on one token. Mandatory for e-Tendering portals and encrypted document submissions.",
    price: 1599,
    link: "/products#class3-combo",
    badge: "Sign + Encrypt",
  },
  {
    title: "DGFT Digital Signature",
    description:
      "Specialized DSC for import-export filings on the DGFT portal. Required for all IEC holders.",
    price: 2199,
    link: "/products#dgft",
    badge: "Import/Export",
  },
  {
    title: "USB Crypto Tokens",
    description:
      "FIPS-certified USB tokens from HyperSecu, WatchData & MToken for secure DSC storage.",
    price: 500,
    link: "/products#usb-tokens",
    badge: "Hardware",
  },
];

/* --------------- Component --------------- */

export default function Class3IndividualDSCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [selectedValidity, setSelectedValidity] = useState<string>("1 Year");

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ─── Breadcrumb ─── */}
        <nav className="bg-muted/30 border-b border-border" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link href="/products" className="hover:text-foreground transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                Class 3 Individual DSC
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Section 1: Product Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-cobalt/[0.07] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.05] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                    CCA-Licensed &bull; Legally Valid
                  </span>
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-4 leading-tight">
                  Class 3 Digital Signature{" "}
                  <span className="text-gradient-cobalt">for Individuals</span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-xl">
                  For Individuals, Proprietors &amp; Freelancers
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  Government-approved Class 3 DSC accepted on GST, Income Tax,
                  MCA, EPFO, e-Tendering and all Indian government portals.
                  Aadhaar eKYC-based issuance within a day.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;899
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;1,599
                  </span>
                  <span className="text-xs font-bold bg-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-full">
                    Save &#8377;700
                  </span>
                </div>

                {/* Validity Selector */}
                <div className="mb-6">
                  <span className="text-xs text-white/50 font-medium block mb-2">
                    Select Validity:
                  </span>
                  <div className="flex gap-2">
                    {["1 Year", "2 Years", "3 Years"].map((v) => (
                      <button
                        key={v}
                        onClick={() => setSelectedValidity(v)}
                        className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all ${
                          selectedValidity === v
                            ? "border-brand-cobalt-bright bg-brand-cobalt/20 text-white"
                            : "border-white/10 text-white/60 hover:border-white/25 hover:text-white/80"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CA Options */}
                <div className="mb-8">
                  <span className="text-xs text-white/50 font-medium block mb-2">
                    Available from 4 CCA-licensed authorities:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["eMudhra", "Capricorn", "Pantasign", "SignX"].map(
                      (ca) => (
                        <span
                          key={ca}
                          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/70"
                        >
                          <BadgeCheck className="w-3 h-3 text-brand-cobalt-bright" />
                          {ca}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20a%20Class%203%20Individual%20DSC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now — &#8377;899
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/917990740623"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us
                      </span>
                    </Button>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Zap, label: "1-Day Delivery" },
                    { icon: Fingerprint, label: "100% Paperless" },
                    { icon: UsbIcon, label: "Free USB Token" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-white/50"
                    >
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                        <Icon className="w-3 h-3 text-brand-cobalt-bright" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Quick Summary Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                  <h2 className="font-display font-bold text-lg text-white mb-6">
                    Product Summary
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "Certificate Type", value: "Class 3 (Signature)" },
                      { label: "Applicant Type", value: "Individual / Proprietor" },
                      { label: "Encryption", value: "2048-bit RSA" },
                      { label: "Verification", value: "Aadhaar OTP eKYC" },
                      { label: "Validity Options", value: "1 / 2 / 3 Years" },
                      { label: "Token", value: "Free USB Token (FIPS 140-2)" },
                      { label: "Delivery", value: "Within a day" },
                      { label: "Legal Validity", value: "IT Act 2000, CCA approved" },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-2 border-b border-white/[0.06] last:border-0"
                      >
                        <span className="text-sm text-white/45">{label}</span>
                        <span className="text-sm font-medium text-white/80">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2 text-sm text-white/50">
                      <ShieldCheck className="w-4 h-4 text-brand-cobalt-bright" />
                      Licensed by Controller of Certifying Authorities, Govt. of India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: What is Class 3 DSC ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a Class 3 Digital Signature Certificate?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                A Class 3 Digital Signature Certificate (DSC) is the highest
                assurance level of digital signature issued to individuals in
                India. It is issued by Certifying Authorities (CAs) licensed by
                the Controller of Certifying Authorities (CCA) under the
                Ministry of Electronics and Information Technology, Government of
                India. Class 3 DSCs provide cryptographic proof of the
                signer&apos;s identity and ensure that digitally signed documents
                are legally valid and tamper-proof under the Information
                Technology Act, 2000.
              </p>

              <p className="text-base leading-relaxed">
                Unlike simple electronic signatures, a Class 3 DSC requires
                rigorous identity verification — either through Aadhaar-based
                eKYC (Electronic Know Your Customer) or in-person verification.
                This ensures that the person holding the DSC is exactly who they
                claim to be. The certificate is stored on a FIPS 140-2 certified
                USB crypto token, making it virtually impossible to duplicate or
                misuse. Every document signed with a Class 3 DSC carries the same
                legal weight as a handwritten signature, as recognized by Indian
                courts and government authorities.
              </p>

              <p className="text-base leading-relaxed">
                Class 3 Individual DSCs are accepted across all Indian government
                portals and regulatory platforms. Whether you need to file GST
                returns, submit income tax returns, complete MCA filings, bid on
                government tenders, or register intellectual property, a Class 3
                DSC is your digital identity for all official transactions.
                Following CCA guidelines issued in 2021, the earlier distinction
                between Class 2 and Class 3 certificates has been unified — all
                DSCs now follow the Class 3 standard, ensuring the highest level
                of security and trust for every user.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Who Needs This DSC ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs a Class 3 Individual DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                A Class 3 Individual DSC is essential for anyone who interacts
                with Indian government portals or needs to sign documents
                digitally.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {USER_PERSONAS.map((persona) => (
                <div
                  key={persona.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <persona.icon className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {persona.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 4: Government Portals & Use Cases ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Use Cases &amp; Government Portals
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your Class 3 Individual DSC is accepted on all major Indian
                government portals. Here is exactly where and how you can use it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GOVERNMENT_PORTALS.map((portal) => (
                <div
                  key={portal.name}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift flex flex-col"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${portal.color} flex items-center justify-center mb-4`}
                  >
                    <portal.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {portal.name}
                  </h3>
                  <p className="text-xs text-brand-cobalt font-medium mb-4 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    {portal.url}
                  </p>
                  <ul className="space-y-2 flex-1">
                    {portal.uses.map((use) => (
                      <li
                        key={use}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 5: Certifying Authorities ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Choose Your Certifying Authority
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We offer Class 3 Individual DSCs from 4 CCA-licensed Certifying
                Authorities. All certificates are equally valid and accepted
                across all government portals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CA_OPTIONS.map((ca) => (
                <div
                  key={ca.id}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover-lift"
                >
                  <div className="w-16 h-16 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                    <img
                      src={ca.logo}
                      alt={`${ca.name} logo`}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {ca.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ca.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/[0.1]">
                <BadgeCheck className="w-4 h-4 text-brand-cobalt" />
                <span className="text-xs font-medium text-brand-cobalt">
                  All CAs are licensed by the Controller of Certifying
                  Authorities (CCA), Government of India
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 6: How to Apply ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Apply for Class 3 DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get your Class 3 Individual DSC in 4 simple steps. The entire
                process is online and completes within a day.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {APPLICATION_STEPS.map((step) => (
                <div key={step.step} className="relative">
                  {step.step < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px border-t-2 border-dashed border-border -translate-x-4 z-0" />
                  )}
                  <div className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-cobalt text-white flex items-center justify-center font-display font-bold text-sm">
                        {step.step}
                      </div>
                      <step.icon className="w-5 h-5 text-brand-cobalt/60" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-cobalt font-medium">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 7: Required Documents ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Documents Required for Class 3 DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The Class 3 Individual DSC application is 100% paperless. You
                only need the following:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {REQUIRED_DOCUMENTS.map((doc, index) => (
                <div
                  key={doc.name}
                  className="rounded-2xl border border-border bg-card p-6 flex gap-4 transition-all duration-300 hover-lift"
                >
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-brand-cobalt">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-foreground mb-1">
                      {doc.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-emerald/[0.06] border border-brand-emerald/15">
                <Fingerprint className="w-4 h-4 text-brand-emerald" />
                <span className="text-sm font-medium text-brand-emerald">
                  100% Paperless — No physical documents, attestation, or office
                  visit required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 8: Pricing Table ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Class 3 Individual DSC Pricing
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Compare prices across all Certifying Authorities. All prices
                include GST and a free USB crypto token.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-6 py-4">
                        Certifying Authority
                      </th>
                      <th className="text-center font-display font-bold px-6 py-4">
                        1 Year
                      </th>
                      <th className="text-center font-display font-bold px-6 py-4">
                        2 Years
                      </th>
                      <th className="text-center font-display font-bold px-6 py-4 relative">
                        3 Years
                        <span className="absolute -top-1 right-2 text-[10px] font-bold bg-brand-saffron text-white px-1.5 py-0.5 rounded-b-md">
                          BEST VALUE
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {PRICING_TABLE.map((row) => (
                      <tr
                        key={row.ca}
                        className={`${row.bestValue ? "bg-brand-cobalt/[0.02]" : "bg-card"} hover:bg-muted/50 transition-colors`}
                      >
                        <td className="px-6 py-4 font-medium text-foreground flex items-center gap-2">
                          {row.bestValue && (
                            <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
                          )}
                          {row.ca}
                        </td>
                        <td className="px-6 py-4 text-center text-foreground font-semibold">
                          &#8377;{row.year1.toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-4 text-center text-foreground font-semibold">
                          &#8377;{row.year2.toLocaleString("en-IN")}
                        </td>
                        <td className="px-6 py-4 text-center text-foreground font-semibold">
                          &#8377;{row.year3.toLocaleString("en-IN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              All prices include 18% GST. Free USB crypto token included with
              every new DSC. Prices are for new issuance and may vary for
              renewals.
            </p>
          </div>
        </section>

        {/* ─── Section 9: Key Features ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Buy Class 3 DSC from SignSecure?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Every Class 3 Individual DSC from SignSecure comes with these
                features as standard.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {KEY_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 10: FAQ ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about Class 3 Digital Signature
                Certificates for individuals.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-base text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 11: Related Products ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore our other Digital Signature products and accessories.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  href={product.link}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift block"
                >
                  <span className="inline-block text-[10px] font-bold text-brand-cobalt bg-brand-cobalt/[0.08] px-2 py-1 rounded-md mb-4 uppercase tracking-wide">
                    {product.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-cobalt transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-foreground">
                      &#8377;{product.price.toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-cobalt opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 12: Final CTA ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-cobalt/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-saffron/[0.06] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Starting at &#8377;899
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy Your Class 3 DSC Now
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get your government-approved Class 3 Digital Signature Certificate
              within a day. 100% online, paperless, and delivered to your
              doorstep.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20a%20Class%203%20Individual%20DSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
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

            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
              {[
                "1-Day Delivery",
                "Free USB Token",
                "100% Paperless",
                "4 CA Options",
                "Dedicated Support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-brand-cobalt-bright" />
                  {item}
                </span>
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
