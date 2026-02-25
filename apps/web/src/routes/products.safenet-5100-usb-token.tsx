import { createFileRoute } from "@tanstack/react-router";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  UsbIcon,
  Phone,
  MessageCircle,
  Star,
  Award,
  HelpCircle,
  Lock,
  Zap,
  Headset,
  Building2,
  Shield,
  Cpu,
  Server,
  Landmark,
  Globe,
  FileText,
  BadgeCheck,
  Download,
  ExternalLink,
  Monitor,
  Layers,
  Crown,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/products/safenet-5100-usb-token")({
  component: SafeNet5100USBTokenPage,
  head: () => ({
    meta: [
      {
        title:
          "Buy SafeNet 5100 eToken Online | Enterprise-Grade Thales Crypto Token | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy SafeNet 5100 eToken (Thales) online in India. FIPS 140-2 Level 3 certified enterprise-grade USB crypto token for Digital Signature Certificates. Preferred by banks, government & large corporations. RSA 4096 support, 80KB storage, military-grade encryption. Price ₹1,200 with free shipping.",
      },
      {
        name: "keywords",
        content:
          "safenet 5100 usb token, safenet etoken 5100, thales safenet token, buy safenet 5100 online india, enterprise dsc token, safenet authentication client, FIPS 140-2 level 3 token, gemalto etoken, thales usb token india, safenet 5110 token price",
      },
    ],
  }),
});

/* --------------- Data --------------- */

const TECH_SPECS = [
  { label: "Manufacturer", value: "Thales Group (formerly Gemalto)" },
  { label: "Model", value: "SafeNet eToken 5110 / 5100" },
  { label: "Certification", value: "FIPS 140-2 Level 3" },
  { label: "Additional Certifications", value: "Common Criteria EAL4+, RoHS" },
  { label: "Interface", value: "USB 2.0 Type-A" },
  { label: "Storage Capacity", value: "80KB" },
  { label: "Key Size Support", value: "RSA 1024 / 2048 / 4096" },
  { label: "Operating Systems", value: "Windows 7/8/10/11, macOS, Linux" },
  { label: "Required Driver", value: "SafeNet Authentication Client (SAC)" },
  { label: "Chip", value: "Thales certified secure element" },
  { label: "Dimensions", value: "~5.4cm × 1.6cm × 0.8cm" },
  { label: "Weight", value: "~5g" },
  { label: "Material", value: "Plastic + metal reinforced housing" },
  { label: "Operating Temperature", value: "0°C to 70°C" },
  { label: "Tamper Protection", value: "Physical tamper-resistance (Level 3)" },
];

const ENTERPRISE_ADVANTAGES = [
  {
    icon: Shield,
    title: "FIPS 140-2 Level 3 Certified",
    description:
      "The highest certification level available in commercial USB tokens sold in India. Level 3 requires physical tamper-resistance — meaning the token will destroy its keys if physical intrusion is detected. Level 2 tokens (like ePass 2003) only provide tamper-evidence, which shows if someone tried to access the hardware but cannot prevent it.",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description:
      "The SafeNet 5100 uses a Thales-certified secure element with hardware-based RSA 4096-bit key generation. Private keys are generated inside the token and never leave the secure element. The cryptographic operations happen entirely on-chip, making it immune to key extraction attacks that software-based solutions are vulnerable to.",
  },
  {
    icon: Building2,
    title: "Enterprise Build Quality",
    description:
      "Unlike consumer-grade tokens with all-plastic construction, the SafeNet 5100 features a metal-reinforced housing designed for daily enterprise use. The USB connector is rated for 50,000+ insertion cycles. The premium build ensures longevity in environments where tokens are used multiple times daily across multiple workstations.",
  },
  {
    icon: Server,
    title: "Enterprise Management Ready",
    description:
      "SafeNet 5100 is designed for centralized management using SafeNet Authentication Client (SAC) Enterprise edition. IT administrators can deploy, manage, and audit tokens across hundreds of users via group policies. This is critical for banks and government organizations with strict compliance and audit requirements.",
  },
  {
    icon: Crown,
    title: "Global Trust & Compliance",
    description:
      "Thales Group is a French multinational defense and cybersecurity company serving 50+ government agencies worldwide. Their tokens are used by NATO, US Department of Defense, European Central Bank, and major banking institutions globally. When you choose SafeNet 5100, you are choosing the token trusted by the world's most security-conscious organizations.",
  },
  {
    icon: Cpu,
    title: "Advanced Secure Element",
    description:
      "The Thales secure element chip inside the SafeNet 5100 is Common Criteria EAL4+ evaluated — the same evaluation level used for smart cards in national ID programs and military applications. The chip implements multiple countermeasures against side-channel attacks, fault injection, and power analysis attacks.",
  },
];

const FIPS_COMPARISON = [
  {
    feature: "Certification Level",
    level2: "FIPS 140-2 Level 2",
    level3: "FIPS 140-2 Level 3",
  },
  {
    feature: "Tamper Protection",
    level2: "Tamper-evidence only (shows if tampered)",
    level3: "Tamper-resistance (actively prevents & destroys keys)",
  },
  {
    feature: "Physical Security",
    level2: "Pick-resistant locks or seals",
    level3: "Tamper-detection circuits that zeroize keys",
  },
  {
    feature: "Key Protection",
    level2: "Keys may survive physical attack",
    level3: "Keys are destroyed upon physical intrusion",
  },
  {
    feature: "Who Requires It",
    level2: "Standard government and business use",
    level3: "Banking, defense, classified data, high-security environments",
  },
  {
    feature: "Typical Tokens",
    level2: "ePass 2003, Proxkey, MToken, TrustKey",
    level3: "SafeNet 5100 / 5110 (Thales)",
  },
  {
    feature: "Cost Range",
    level2: "₹500 – ₹800",
    level3: "₹1,200+",
  },
];

const COMPATIBILITY_PORTALS = [
  { name: "GST Portal", url: "gst.gov.in" },
  { name: "Income Tax Portal", url: "incometax.gov.in" },
  { name: "MCA Portal", url: "mca.gov.in" },
  { name: "EPFO Portal", url: "epfindia.gov.in" },
  { name: "GeM Portal", url: "gem.gov.in" },
  { name: "CPPP / e-Tendering", url: "eprocure.gov.in" },
  { name: "DGFT Portal", url: "dgft.gov.in" },
  { name: "IREPS (Railways)", url: "ireps.gov.in" },
  { name: "IP India", url: "ipindia.gov.in" },
  { name: "TCS iON", url: "tcsion.com" },
  { name: "TRACES", url: "tdscpc.gov.in" },
  { name: "Startup India", url: "startupindia.gov.in" },
];

const COMPATIBLE_CAS = [
  "eMudhra",
  "Capricorn",
  "VSign",
  "Pantasign",
  "Safescrypt",
  "n(Code) / TCS",
  "(n)Code Solutions",
];

const WHO_SHOULD_CHOOSE = [
  {
    icon: Building2,
    title: "Large Corporations",
    description:
      "Companies with 50+ DSC users who need centralized token management, enterprise-grade security policies, and audit trails. SafeNet 5100 integrates with Active Directory and enterprise IAM solutions for streamlined management.",
  },
  {
    icon: Landmark,
    title: "Banks & Financial Institutions",
    description:
      "Banks, NBFCs, insurance companies, and financial institutions where regulatory compliance mandates the highest level of key protection. RBI and SEBI guidelines recommend FIPS Level 3 hardware for signing operations.",
  },
  {
    icon: Shield,
    title: "Government Departments",
    description:
      "Central and state government departments handling classified or sensitive data. Defense procurement, intelligence agencies, and critical infrastructure organizations where security cannot be compromised.",
  },
  {
    icon: Lock,
    title: "Companies Handling Sensitive Data",
    description:
      "Healthcare organizations (HIPAA-like compliance), legal firms handling confidential documents, and companies in regulated industries where data breach consequences are severe and tamper-resistance is a hard requirement.",
  },
  {
    icon: FileText,
    title: "Compliance-Driven Organizations",
    description:
      "Companies subject to ISO 27001, SOC 2, PCI-DSS, or other compliance frameworks that specifically require FIPS 140-2 Level 3 certified cryptographic hardware for digital signature operations.",
  },
  {
    icon: Globe,
    title: "Users Wanting Premium Security",
    description:
      "Individual professionals, CAs, and directors who simply want the best available security for their digital signature. If your DSC protects transactions worth lakhs or crores, the ₹400–₹700 premium over standard tokens is negligible.",
  },
];

const TOKEN_COMPARISON = [
  {
    name: "ePass 2003",
    manufacturer: "Feitian (HyperSecu)",
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    rsa: "RSA 2048",
    build: "Plastic",
    driver: "Auto-detect",
    price: "₹500",
    best: "Budget / Standard use",
    highlight: false,
  },
  {
    name: "Proxkey",
    manufacturer: "WatchData",
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    rsa: "RSA 2048",
    build: "Plastic",
    driver: "Auto-detect",
    price: "₹600",
    best: "Mac & Linux users",
    highlight: false,
  },
  {
    name: "MToken",
    manufacturer: "Longmai / MicroStrategy",
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    rsa: "RSA 2048",
    build: "Plastic",
    driver: "Manual install",
    price: "₹550",
    best: "Budget alternative",
    highlight: false,
  },
  {
    name: "TrustKey",
    manufacturer: "TrustKey Solutions",
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    rsa: "RSA 2048",
    build: "Plastic",
    driver: "Auto-detect",
    price: "₹600",
    best: "Multi-platform use",
    highlight: false,
  },
  {
    name: "SafeNet 5100",
    manufacturer: "Thales Group",
    fips: "FIPS 140-2 Level 3",
    storage: "80KB",
    rsa: "RSA 4096",
    build: "Metal + Plastic",
    driver: "SAC Required",
    price: "₹1,200",
    best: "Enterprise / Banking / Govt",
    highlight: true,
  },
];

const FAQ_DATA = [
  {
    question: "What is the SafeNet 5100 eToken?",
    answer:
      "The SafeNet 5100 eToken (also sold as SafeNet eToken 5110) is an enterprise-grade USB crypto token manufactured by Thales Group, a French multinational defense and cybersecurity company. It is the successor to the Gemalto eToken line (Thales acquired Gemalto in 2019). The SafeNet 5100 is designed to securely store digital signature certificates, encryption keys, and PKI credentials. It is FIPS 140-2 Level 3 certified, which is the highest certification level among USB tokens commercially available in India. The token is used globally by banks, government agencies, defense organizations, and large enterprises for its superior security, tamper-resistant hardware, and compliance with the strictest international standards.",
  },
  {
    question: "Why is the SafeNet 5100 more expensive than other USB tokens?",
    answer:
      "The SafeNet 5100 costs more (₹1,200 vs ₹500–₹600 for standard tokens) because of three key factors: First, it holds FIPS 140-2 Level 3 certification, which requires physical tamper-resistance — the token will actively destroy cryptographic keys if physical intrusion is detected. Standard tokens are only Level 2 (tamper-evidence). Second, it uses a Thales-certified secure element chip with Common Criteria EAL4+ evaluation, providing military-grade protection against side-channel attacks and fault injection. Third, it supports RSA 4096-bit keys and has 80KB storage (vs 64KB in standard tokens). The premium is justified for organizations handling high-value transactions, sensitive data, or operating under compliance frameworks that mandate Level 3 hardware.",
  },
  {
    question: "What is FIPS 140-2 Level 3 and why does it matter?",
    answer:
      "FIPS 140-2 is a US government standard for cryptographic hardware security. It has four levels: Level 1 (basic software encryption), Level 2 (tamper-evident seals — shows if someone tried to open the device), Level 3 (tamper-resistant — the device actively detects intrusion and destroys keys), and Level 4 (highest — full physical protection against environmental attacks). The SafeNet 5100 is Level 3 certified, which means if anyone attempts to physically disassemble the token to extract private keys, the secure element will detect the intrusion and immediately zeroize (permanently erase) all stored keys. This is a critical difference from Level 2 tokens, where physical attacks could potentially succeed in extracting keys. For organizations in banking, defense, or handling classified data, Level 3 is often a mandatory compliance requirement.",
  },
  {
    question: "Is the SafeNet 5100 better than the ePass 2003?",
    answer:
      "Yes, the SafeNet 5100 is objectively superior in terms of security certification, build quality, and capabilities. The ePass 2003 is FIPS Level 2 (tamper-evident), while the SafeNet 5100 is Level 3 (tamper-resistant). The SafeNet supports RSA 4096-bit keys vs RSA 2048 in ePass. It has 80KB storage vs 64KB. It has a metal-reinforced body vs all-plastic. However, the ePass 2003 has advantages of its own: it costs 60% less, has auto-detect drivers (no SAC installation needed), and is perfectly adequate for standard DSC use cases like GST filing, MCA compliance, and e-tendering. The SafeNet 5100 is the right choice when you need enterprise-grade security, compliance with strict frameworks, or simply want the best available protection for high-value digital signatures.",
  },
  {
    question: "Who manufactures SafeNet tokens?",
    answer:
      "SafeNet tokens are manufactured by Thales Group, a French multinational company headquartered in Paris with operations in 68 countries. Thales is one of the world's largest defense and cybersecurity companies, with annual revenues exceeding €17 billion. They acquired Gemalto (the original maker of eToken) in 2019 for €4.8 billion, and the product line was rebranded under the Thales SafeNet brand. Thales serves over 30,000 organizations worldwide, including 50+ government agencies, and their products protect 80% of the world's card payment transactions. When you buy a SafeNet 5100, you are buying from the same company that provides encryption solutions to NATO, the US Department of Defense, and major global banks.",
  },
  {
    question: "Does the SafeNet 5100 work with all Certifying Authorities in India?",
    answer:
      "Yes, the SafeNet 5100 is compatible with all CCA-licensed Certifying Authorities in India, including eMudhra, Capricorn, VSign, Pantasign, Safescrypt, n(Code) Solutions, and others. All CAs use standard PKCS#11 and Microsoft CAPI/CNG interfaces for token communication, and the SafeNet Authentication Client (SAC) driver fully supports these standards. You can store DSCs from any CA on the SafeNet 5100. The token is also accepted on all Indian government portals — GST, Income Tax, MCA, EPFO, GeM, DGFT, IREPS, and every state e-procurement portal. There are zero compatibility issues.",
  },
  {
    question: "How do I install the SafeNet Authentication Client (SAC)?",
    answer:
      "Unlike auto-detect tokens like ePass 2003, the SafeNet 5100 requires installation of the SafeNet Authentication Client (SAC) driver software. Here's how: 1) Download the SAC installer from the Thales support portal or from our downloads page at /downloads. 2) Run the installer as Administrator on your Windows PC. 3) Follow the setup wizard — accept the license agreement, choose the installation directory, and click Install. 4) Restart your computer after installation. 5) Plug in your SafeNet 5100 token — Windows will recognize it automatically through SAC. 6) Open the SAC Tools application to manage certificates, change PIN, and view token information. SAC is available for Windows, macOS, and Linux. The installation takes about 5 minutes.",
  },
  {
    question: "Can I use the SafeNet 5100 for regular DSC use like GST and ITR filing?",
    answer:
      "Absolutely. The SafeNet 5100 works perfectly for all standard DSC use cases — GST filing, income tax ITR filing, MCA/ROC filings, e-tendering, DGFT submissions, and every other application that a regular USB token supports. There is no limitation. In fact, the SafeNet 5100 provides better security for these everyday operations compared to standard tokens. The only additional step is that you need to install the SafeNet Authentication Client (SAC) driver, which is a one-time 5-minute setup. After that, the token works seamlessly with all portals and signing applications. Think of it as driving a Mercedes to the office — it works for the same commute, just with better safety features.",
  },
  {
    question: "What is the storage capacity of the SafeNet 5100?",
    answer:
      "The SafeNet 5100 has 80KB of secure storage, which is 25% more than the 64KB offered by standard tokens like ePass 2003, Proxkey, and TrustKey. This 80KB is sufficient to store 3-4 digital signature certificates along with their associated key pairs. For most users, even one DSC is all they need, so 80KB is more than adequate. The extra storage is particularly useful for enterprise users who may need to store multiple certificates (e.g., one for signing, one for encryption, one for authentication) on a single token. The storage is managed by the Thales secure element and cannot be expanded or modified externally.",
  },
  {
    question: "Is the SafeNet 5100 worth the extra cost over standard tokens?",
    answer:
      "It depends on your specific needs and risk profile. If you are an individual filing GST returns or a small business owner with standard compliance needs, a ₹500-₹600 ePass 2003 or Proxkey is perfectly adequate and offers excellent value. However, the SafeNet 5100 is worth the ₹1,200 investment if: you handle high-value financial transactions (where the DSC authorizes payments or contracts worth lakhs/crores), your organization has compliance requirements mandating FIPS Level 3 hardware, you work in banking/defense/government sectors with strict security policies, or you simply want the highest available protection for your digital identity. The ₹600-₹700 premium is negligible compared to the value of the transactions your DSC protects.",
  },
  {
    question: "Does the SafeNet 5100 work on macOS and Linux?",
    answer:
      "Yes, the SafeNet 5100 is compatible with macOS and Linux in addition to Windows. Thales provides the SafeNet Authentication Client (SAC) for all three operating systems. On macOS, SAC supports macOS 10.15 (Catalina) and later, including Apple Silicon Macs via Rosetta 2. On Linux, SAC supports major distributions including Ubuntu, Red Hat Enterprise Linux, CentOS, and SUSE. The installation process is similar across all platforms — download the SAC package for your OS, install it, and plug in the token. Cross-platform compatibility is one of the advantages of choosing an enterprise-grade token from a global manufacturer like Thales.",
  },
  {
    question: "What is the difference between SafeNet 5100 and SafeNet 5110?",
    answer:
      "The SafeNet eToken 5100 and 5110 are essentially the same product line with minor revisions. The 5110 is the newer iteration with slightly updated firmware and packaging, but the core hardware, secure element chip, certifications (FIPS 140-2 Level 3, CC EAL4+), and capabilities are identical. Both support RSA 4096, have 80KB storage, and use the same SafeNet Authentication Client driver. In the Indian market, both model numbers are used interchangeably by resellers. When you buy a 'SafeNet 5100' from SignSecure, you may receive either a 5100 or 5110 unit — both are genuine Thales products with identical security and functionality.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "ePass 2003 USB Token",
    description:
      "India's most popular USB token. Auto-detect drivers, FIPS Level 2 certified. Perfect for standard DSC use.",
    price: 500,
    link: "/products/epass-2003-usb-token",
    badge: "Best Seller",
  },
  {
    title: "Proxkey USB Token",
    description:
      "Premium token with excellent macOS and Linux support. Auto-detect, FIPS Level 2. Great multi-platform choice.",
    price: 600,
    link: "/products/proxkey-usb-token",
    badge: "Multi-Platform",
  },
  {
    title: "TrustKey USB Token",
    description:
      "Reliable FIPS Level 2 token with broad compatibility. Auto-detect drivers and durable build quality.",
    price: 600,
    link: "/products/trustkey-usb-token",
    badge: "Reliable",
  },
  {
    title: "Class 3 Individual DSC",
    description:
      "Government-approved Class 3 Digital Signature Certificate for GST, ITR, MCA, and all Indian portals.",
    price: 899,
    link: "/products/class-3-individual-dsc",
    badge: "DSC Certificate",
  },
];

/* --------------- Component --------------- */

function SafeNet5100USBTokenPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ─── Breadcrumb ─── */}
        <nav
          className="bg-muted/30 border-b border-border"
          aria-label="Breadcrumb"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
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
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <span className="hover:text-foreground transition-colors">
                  USB Tokens
                </span>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                SafeNet 5100
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Section 1: Product Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-navy/[0.12] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-cobalt/[0.08] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/[0.15] border border-brand-navy/[0.2] mb-6">
                  <Crown className="w-3.5 h-3.5 text-brand-saffron" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                    Enterprise Grade
                  </span>
                </div>

                <div className="mb-4">
                  <img src="/assets/token-safenet-logo.png" alt="SafeNet 5100 by Thales" className="h-9 w-auto" />
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-2 leading-tight">
                  SafeNet 5100{" "}
                  <span className="text-gradient-cobalt">eToken</span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-xl">
                  by Thales Group &mdash; The Enterprise Standard
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  FIPS 140-2 Level 3 certified USB crypto token with
                  military-grade encryption. The premium enterprise token
                  preferred by banks, government departments, and large
                  corporations worldwide. Tamper-resistant hardware with
                  RSA 4096 support.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;1,200
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;1,800
                  </span>
                  <span className="text-xs font-bold bg-brand-saffron/20 text-brand-saffron px-3 py-1 rounded-full">
                    Enterprise Premium
                  </span>
                </div>

                {/* Key Highlights */}
                <div className="mb-8 space-y-2">
                  {[
                    "FIPS 140-2 Level 3 — Highest certification in India",
                    "Thales Group (formerly Gemalto) — Global cybersecurity leader",
                    "RSA 4096-bit key support — Maximum cryptographic strength",
                    "80KB secure storage — 25% more than standard tokens",
                    "Metal-reinforced build — Enterprise durability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20a%20SafeNet%205100%20eToken"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now &mdash; &#8377;1,200
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
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
                    { icon: Shield, label: "FIPS Level 3" },
                    { icon: Crown, label: "Thales Certified" },
                    { icon: Zap, label: "Free Shipping" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-white/50"
                    >
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                        <Icon className="w-3 h-3 text-brand-saffron" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Product Summary Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-brand-navy/[0.15] bg-brand-navy-deep/[0.08] backdrop-blur-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/10 flex items-center justify-center">
                      <UsbIcon className="w-5 h-5 text-brand-saffron" />
                    </div>
                    <h2 className="font-display font-bold text-lg text-white">
                      Product Summary
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Product",
                        value: "SafeNet eToken 5100 / 5110",
                      },
                      { label: "Manufacturer", value: "Thales Group" },
                      {
                        label: "Certification",
                        value: "FIPS 140-2 Level 3",
                      },
                      { label: "Key Support", value: "RSA 1024/2048/4096" },
                      { label: "Storage", value: "80KB Secure Element" },
                      { label: "Interface", value: "USB 2.0 Type-A" },
                      {
                        label: "Driver",
                        value: "SafeNet Auth Client (SAC)",
                      },
                      {
                        label: "OS Support",
                        value: "Windows, macOS, Linux",
                      },
                      {
                        label: "Build",
                        value: "Metal + Plastic (Premium)",
                      },
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
                      <Crown className="w-4 h-4 text-brand-saffron" />
                      Premium enterprise token trusted by banks &amp; governments
                      globally
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Overview ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is the SafeNet 5100 eToken?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                The SafeNet 5100 eToken (also known as SafeNet eToken 5110) is
                an enterprise-grade USB crypto token manufactured by{" "}
                <strong className="text-foreground">Thales Group</strong>, one
                of the world&apos;s largest defense and cybersecurity companies.
                Headquartered in Paris, France, Thales operates in 68 countries,
                employs over 81,000 people, and serves more than 30,000
                organizations globally including 50+ government agencies. They
                acquired Gemalto &mdash; the original creator of the eToken
                product line &mdash; in 2019 for &euro;4.8 billion, bringing the
                eToken brand under the Thales SafeNet umbrella.
              </p>

              <p className="text-base leading-relaxed">
                What sets the SafeNet 5100 apart from every other USB token
                available in India is its{" "}
                <strong className="text-foreground">
                  FIPS 140-2 Level 3 certification
                </strong>{" "}
                &mdash; the highest security certification among commercially
                available USB tokens in the Indian market. While standard tokens
                like the ePass 2003, Proxkey, and TrustKey hold FIPS Level 2
                certification (which provides tamper-evidence), the SafeNet 5100
                achieves Level 3, which mandates physical tamper-resistance. This
                means the token&apos;s secure element will actively detect and
                respond to physical intrusion attempts by permanently destroying
                all stored cryptographic keys &mdash; making it impossible for
                attackers to extract private keys even with direct physical
                access to the hardware.
              </p>

              <p className="text-base leading-relaxed">
                The SafeNet 5100 is the token of choice for India&apos;s largest
                banks, financial institutions, government departments, and
                enterprise organizations. Its military-grade encryption with RSA
                4096-bit key support, Common Criteria EAL4+ evaluated secure
                element, and metal-reinforced build quality make it the premium
                option for users who need the absolute highest level of security
                for their digital signature certificates. It is compatible with
                all Certifying Authorities in India and works on all government
                portals without exception.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Technical Specifications ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Complete hardware and software specifications for the SafeNet
                5100 eToken by Thales Group.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-6 py-4 w-2/5">
                        Specification
                      </th>
                      <th className="text-left font-display font-bold px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {TECH_SPECS.map((spec) => (
                      <tr
                        key={spec.label}
                        className="bg-card hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-foreground">
                          {spec.label}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["FIPS 140-2 Level 3", "Common Criteria EAL4+", "RoHS Compliant"].map(
                (cert) => (
                  <span
                    key={cert}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-brand-navy/[0.06] border border-brand-navy/[0.1] text-brand-navy"
                  >
                    <Award className="w-3 h-3" />
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* ─── Section 4: Why Enterprise Grade ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Enterprise Grade Matters
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The SafeNet 5100 is not just another USB token &mdash; it
                represents a fundamentally higher tier of cryptographic
                security. Here is what makes it enterprise-grade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ENTERPRISE_ADVANTAGES.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/[0.06] flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 5: FIPS Level 2 vs Level 3 ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                FIPS 140-2: Level 2 vs Level 3
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Understanding the critical difference between tamper-evidence
                (Level 2) and tamper-resistance (Level 3) and why banks and
                enterprises insist on Level 3.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy-deep text-white">
                      <th className="text-left font-display font-bold px-5 py-4 w-1/4">
                        Feature
                      </th>
                      <th className="text-left font-display font-bold px-5 py-4 w-[37.5%]">
                        Level 2 (Standard Tokens)
                      </th>
                      <th className="text-left font-display font-bold px-5 py-4 w-[37.5%] bg-brand-saffron/20">
                        Level 3 (SafeNet 5100)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {FIPS_COMPARISON.map((row) => (
                      <tr
                        key={row.feature}
                        className="bg-card hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-5 py-4 font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {row.level2}
                        </td>
                        <td className="px-5 py-4 text-foreground font-medium bg-brand-saffron/[0.03]">
                          {row.level3}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-brand-navy/[0.1] bg-brand-navy/[0.03] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-navy/[0.08] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    Why Does This Difference Matter?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    With a Level 2 token, if someone steals your token and has
                    the technical capability, they could potentially disassemble
                    it and extract your private key using specialized equipment.
                    The tamper-evidence seals would show that the token was
                    opened, but the key could still be compromised. With a Level
                    3 token like the SafeNet 5100, the moment someone attempts
                    to physically intrude on the secure element, the
                    tamper-detection circuits activate and permanently destroy
                    all stored keys. Your private key is destroyed before it can
                    be extracted. This is why banking regulators, defense
                    organizations, and high-security environments mandate Level
                    3 hardware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 6: Portal & CA Compatibility ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Universal Compatibility
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The SafeNet 5100 works with every Certifying Authority and every
                government portal in India. Zero compatibility issues.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Government Portals */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/[0.06] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Government Portals
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {COMPATIBILITY_PORTALS.map((portal) => (
                    <div
                      key={portal.name}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      <div>
                        <span className="text-foreground font-medium">
                          {portal.name}
                        </span>
                        <span className="text-muted-foreground text-xs ml-1">
                          ({portal.url})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    + All state e-procurement portals, NSDL, CDSL, BSE, NSE, and
                    every other platform that accepts DSC-based authentication.
                  </p>
                </div>
              </div>

              {/* Certifying Authorities */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/[0.06] flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-brand-navy" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    Certifying Authorities
                  </h3>
                </div>
                <div className="space-y-3">
                  {COMPATIBLE_CAS.map((ca) => (
                    <div
                      key={ca}
                      className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {ca}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    The SafeNet 5100 supports PKCS#11 and Microsoft CAPI/CNG
                    standards, ensuring compatibility with all CCA-licensed
                    Certifying Authorities in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 7: Driver & Software ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Driver &amp; Software Setup
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The SafeNet 5100 requires the SafeNet Authentication Client
                (SAC) software. Unlike auto-detect tokens, a one-time driver
                installation is needed.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-navy/[0.06] flex items-center justify-center">
                  <Download className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    SafeNet Authentication Client (SAC)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Required for SafeNet 5100 / 5110 tokens
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  {
                    step: "1",
                    title: "Download SAC Installer",
                    description:
                      "Download the SafeNet Authentication Client from the Thales support portal or from our downloads page. Choose the version for your operating system (Windows, macOS, or Linux).",
                  },
                  {
                    step: "2",
                    title: "Run Installer as Administrator",
                    description:
                      "Right-click the downloaded installer and select 'Run as Administrator' (Windows). On macOS, open the .dmg file and drag to Applications. On Linux, use the package manager or run the .deb/.rpm installer.",
                  },
                  {
                    step: "3",
                    title: "Complete Setup Wizard",
                    description:
                      "Accept the license agreement, choose the installation directory (default is recommended), and click Install. The process takes about 2-3 minutes.",
                  },
                  {
                    step: "4",
                    title: "Restart & Connect Token",
                    description:
                      "Restart your computer after installation. Plug in your SafeNet 5100 token — the SAC driver will recognize it automatically. You can now manage certificates, change PIN, and use the token for digital signing.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-brand-navy text-white flex items-center justify-center font-display font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/downloads">
                  <Button
                    size="sm"
                    className="rounded-lg bg-brand-navy text-white font-semibold hover:bg-brand-navy-deep"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      Download SAC Driver
                    </span>
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20installing%20SafeNet%20Authentication%20Client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-lg"
                  >
                    <span className="flex items-center gap-2">
                      <Headset className="w-3.5 h-3.5" />
                      Need Help? WhatsApp Us
                    </span>
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                {
                  os: "Windows",
                  versions: "Windows 7, 8, 10, 11",
                  icon: Monitor,
                },
                {
                  os: "macOS",
                  versions: "10.15+ (Catalina & later)",
                  icon: Monitor,
                },
                {
                  os: "Linux",
                  versions: "Ubuntu, RHEL, CentOS, SUSE",
                  icon: Monitor,
                },
              ].map((platform) => (
                <div
                  key={platform.os}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <platform.icon className="w-5 h-5 text-brand-navy mx-auto mb-2" />
                  <h4 className="font-display font-bold text-sm text-foreground">
                    {platform.os}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {platform.versions}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 8: Who Should Choose SafeNet 5100 ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Should Choose the SafeNet 5100?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The SafeNet 5100 is not for everyone &mdash; it is the premium
                choice for organizations and individuals with the highest
                security requirements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHO_SHOULD_CHOOSE.map((persona) => (
                <div
                  key={persona.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/[0.06] flex items-center justify-center mb-4">
                    <persona.icon className="w-6 h-6 text-brand-navy" />
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

        {/* ─── Section 9: Token Comparison Table ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Compare All USB Tokens
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Side-by-side comparison of all USB crypto tokens available at
                SignSecure. See how the SafeNet 5100 stands apart.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy-deep text-white">
                      <th className="text-left font-display font-bold px-4 py-4">
                        Token
                      </th>
                      <th className="text-left font-display font-bold px-4 py-4">
                        Manufacturer
                      </th>
                      <th className="text-left font-display font-bold px-4 py-4">
                        FIPS Level
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Storage
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        RSA
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Build
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Driver
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Price
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {TOKEN_COMPARISON.map((token) => (
                      <tr
                        key={token.name}
                        className={`${
                          token.highlight
                            ? "bg-brand-saffron/[0.04] border-l-2 border-l-brand-saffron"
                            : "bg-card"
                        } hover:bg-muted/50 transition-colors`}
                      >
                        <td className="px-4 py-4 font-medium text-foreground whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {token.highlight && (
                              <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
                            )}
                            {token.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                          {token.manufacturer}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded ${
                              token.highlight
                                ? "bg-brand-saffron/10 text-brand-saffron"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {token.fips}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground">
                          {token.storage}
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground">
                          {token.rsa}
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground">
                          {token.build}
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground">
                          {token.driver}
                        </td>
                        <td className="px-4 py-4 text-center font-semibold text-foreground">
                          {token.price}
                        </td>
                        <td className="px-4 py-4 text-center text-xs text-muted-foreground">
                          {token.best}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/[0.06] border border-brand-saffron/[0.1]">
                <Crown className="w-4 h-4 text-brand-saffron" />
                <span className="text-xs font-medium text-brand-saffron">
                  SafeNet 5100 is the only FIPS 140-2 Level 3 token available
                  in India
                </span>
              </div>
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
                Everything you need to know about the SafeNet 5100 eToken,
                FIPS certification, and enterprise-grade security.
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
                Explore other USB tokens and Digital Signature products from
                SignSecure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.link}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift block"
                >
                  <span className="inline-block text-[10px] font-bold text-brand-navy bg-brand-navy/[0.08] px-2 py-1 rounded-md mb-4 uppercase tracking-wide">
                    {product.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-navy transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-foreground">
                      &#8377;{product.price.toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-navy opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 12: Final CTA ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy-deep" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-cobalt/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-saffron/[0.06] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <Crown className="w-3.5 h-3.5 text-brand-saffron" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Enterprise-Grade Security
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy SafeNet 5100 eToken Now
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-4 max-w-xl mx-auto">
              Get the highest-certified USB crypto token available in India.
              FIPS 140-2 Level 3, Thales manufactured, enterprise-grade
              security. Free shipping across India.
            </p>
            <p className="font-display font-bold text-3xl text-white mb-8">
              &#8377;1,200
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20a%20SafeNet%205100%20eToken"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron-bright h-12 px-8 shimmer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Order on WhatsApp
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

            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
              {[
                "FIPS 140-2 Level 3",
                "Thales Manufactured",
                "RSA 4096 Support",
                "Free Shipping",
                "24/7 Support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-brand-saffron" />
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
