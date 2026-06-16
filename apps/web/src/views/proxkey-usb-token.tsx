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
  UsbIcon,
  Cpu,
  HardDrive,
  Monitor,
  Download,
  Lock,
  Zap,
  Headset,
  Phone,
  MessageCircle,
  Star,
  Award,
  HelpCircle,
  ExternalLink,
  Package,
  Settings,
  Fingerprint,
  Globe,
  FileText,
  AlertTriangle,
  CheckCircle2,
  Wrench,
  PlugZap,
  BadgeCheck,
  Clock,
  Layers,
  Info,
} from "lucide-react";
import { TokenBulkPricingCard, TokenBulkPricingSection } from "@/components/marketing/token-bulk-pricing";

/* --------------- Data --------------- */

const COMPATIBLE_CAS = [
  {
    name: "eMudhra",
    description: "India's largest Certifying Authority with 30M+ users",
  },
  {
    name: "Capricorn",
    description: "Trusted CA with nationwide partner network",
  },
  {
    name: "Pantasign",
    description: "CCA-licensed CA with seamless online issuance",
  },
  {
    name: "SignX",
    description:
      "SignX is a CCA-licensed Certifying Authority. The token is fully compatible with all SignX Digital Signature Certificates.",
  },
];

const COMPATIBLE_PORTALS = [
  { name: "GST Portal", url: "gst.gov.in" },
  { name: "Income Tax Portal", url: "incometax.gov.in" },
  { name: "MCA Portal", url: "mca.gov.in" },
  { name: "EPFO Portal", url: "epfindia.gov.in" },
  { name: "GeM Portal", url: "gem.gov.in" },
  { name: "CPPP / e-Tendering", url: "eprocure.gov.in" },
  { name: "IREPS (Railways)", url: "ireps.gov.in" },
  { name: "DGFT Portal", url: "dgft.gov.in" },
  { name: "IP India", url: "ipindia.gov.in" },
  { name: "ICEGATE", url: "icegate.gov.in" },
  { name: "Startup India", url: "startupindia.gov.in" },
  { name: "Udyam / MSME", url: "udyamregistration.gov.in" },
];

const COMPATIBLE_DSC_TYPES = [
  "Class 3 Individual DSC (Signature)",
  "Class 3 Organization DSC (Signature)",
  "Class 3 Combo DSC (Signature + Encryption)",
  "DGFT Digital Signature Certificate",
  "Foreign National DSC",
  "Document Signer Certificate",
];

const USAGE_STEPS = [
  {
    step: 1,
    icon: Download,
    title: "Download Proxkey Driver",
    description:
      "Download the Proxkey middleware and driver software from our Downloads page or the official WatchData website. The driver package includes the token manager utility and PKCS#11 library required for the token to communicate with your operating system.",
    time: "2 minutes",
  },
  {
    step: 2,
    icon: Settings,
    title: "Install Driver & Middleware",
    description:
      "Run the installer as Administrator on Windows. Follow the on-screen wizard to complete the installation. Restart your computer after installation to ensure the driver is properly loaded. On Linux, you may need to install the PKCS#11 module manually.",
    time: "5 minutes",
  },
  {
    step: 3,
    icon: PlugZap,
    title: "Insert Proxkey Token",
    description:
      "Plug the Proxkey USB token into any available USB 2.0 or 3.0 port on your computer. The system should recognize the token after the driver is installed. Open the Proxkey Token Manager to verify the token is detected and functioning.",
    time: "1 minute",
  },
  {
    step: 4,
    icon: Fingerprint,
    title: "Import or Use Your DSC",
    description:
      "If your DSC is already loaded on the token, you are ready to use it. For new certificates, use the DSC download utility provided by your Certifying Authority to import the certificate onto the Proxkey token. Set your token PIN for security.",
    time: "5–10 minutes",
  },
];

const PROXKEY_ADVANTAGES = [
  {
    icon: Cpu,
    title: "WatchData Secure Chip",
    description:
      "The Proxkey token uses a proprietary secure chip manufactured by WatchData Technologies, one of the world's leading smart card and security chip manufacturers based in Beijing. The chip is designed for high-reliability cryptographic operations and has been tested for over 500,000 read/write cycles, ensuring long-term durability for daily DSC usage.",
  },
  {
    icon: ShieldCheck,
    title: "FIPS 140-2 Level 2 Certified",
    description:
      "The Proxkey USB token meets the rigorous FIPS 140-2 Level 2 security standard, which requires tamper-evident physical security mechanisms. This means the token has physical seals or coatings that show evidence of tampering if someone attempts to access the internal components. Your private key is stored in a secure enclave that cannot be extracted.",
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description:
      "At just ₹500 inclusive of GST, the Proxkey token offers the same FIPS-certified security as premium tokens at a fraction of the cost. Compared to premium enterprise tokens, the Proxkey provides excellent value for individual professionals, CAs, and small businesses who need reliable DSC storage without premium pricing.",
  },
  {
    icon: Globe,
    title: "Universal Compatibility",
    description:
      "The Proxkey token is compatible with all CCA-licensed Certifying Authorities in India — eMudhra, Capricorn, Pantasign, and SignX. It works with every government portal including GST, Income Tax, MCA, EPFO, e-Tendering, and DGFT. Whether you have a Class 3 Signature, Encryption, or Combo DSC, the Proxkey token will store and serve it reliably.",
  },
  {
    icon: HardDrive,
    title: "64KB Secure Storage",
    description:
      "With 64KB of EEPROM storage, the Proxkey token can hold multiple digital certificates simultaneously. This is sufficient for storing both a signing certificate and an encryption certificate (required for Combo DSC), along with the associated private keys and certificate chain. The EEPROM technology ensures data retention even when the token is unpowered for extended periods.",
  },
  {
    icon: Award,
    title: "Proven Track Record in India",
    description:
      "The Proxkey token has been widely deployed across India for over a decade. It is used by tens of thousands of professionals including Chartered Accountants, Company Secretaries, lawyers, and government contractors. Its reliability in the Indian climate — including high humidity and temperature variations — has been proven through years of real-world usage across the country.",
  },
];

const TOKEN_COMPARISON = [
  {
    name: "ePass 2003 Auto",
    brand: "HyperSecu",
    price: 500,
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    driver: "Auto-detect (Plug & Play)",
    os: "Win / Mac / Linux",
    chip: "HyperSecu",
    popular: true,
    highlight: "Most popular in India. Auto-detect driver means no manual installation needed on most systems.",
  },
  {
    name: "Proxkey",
    brand: "WatchData",
    price: 500,
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    driver: "Manual installation required",
    os: "Win / Mac / Linux",
    chip: "WatchData",
    popular: false,
    highlight: "WatchData chip quality. Durable build. Requires manual driver installation.",
  },
  {
    name: "MToken",
    brand: "MToken",
    price: 500,
    fips: "FIPS 140-2 Level 2",
    storage: "64KB",
    driver: "Manual installation required",
    os: "Win / Mac / Linux",
    chip: "Proprietary",
    popular: false,
    highlight: "Compact design. Budget-friendly. Growing in adoption across India.",
  },
];

const FAQ_DATA = [
  {
    question: "What is a Proxkey USB token?",
    answer:
      "A Proxkey USB token is a FIPS 140-2 Level 2 certified USB cryptographic device manufactured by WatchData Technologies, a leading smart card and security technology company based in Beijing, China. The token is used to securely store Digital Signature Certificates (DSC) and their associated private keys. When plugged into your computer, it allows you to digitally sign documents, file returns on government portals, and authenticate your identity. The Proxkey token uses a proprietary WatchData secure chip that performs all cryptographic operations within the token itself, ensuring your private key never leaves the device.",
  },
  {
    question: "How do I install the Proxkey token driver?",
    answer:
      "Unlike the ePass 2003 Auto token which has auto-detect drivers, the Proxkey token requires manual driver installation. Download the Proxkey middleware and driver from our Downloads page. Run the installer as Administrator on your Windows PC and follow the installation wizard. After installation, restart your computer. Once restarted, plug in the Proxkey token — it should be recognized by the system. You can verify the installation by opening the Proxkey Token Manager utility that is installed along with the driver. On macOS and Linux, you may need to install the PKCS#11 library separately.",
  },
  {
    question: "Is the Proxkey token compatible with all Certifying Authorities?",
    answer:
      "Yes, the Proxkey USB token is fully compatible with all CCA-licensed Certifying Authorities operating in India — eMudhra, Capricorn, Pantasign, and SignX. You can store a digital signature certificate from any of these CAs on the Proxkey token. The token supports the standard PKCS#11 and Microsoft CSP interfaces that all CAs use for certificate enrollment and storage. Whether you are buying a new DSC or transferring an existing one, the Proxkey token will work seamlessly.",
  },
  {
    question: "What is the difference between Proxkey and ePass 2003?",
    answer:
      "Both the Proxkey (by WatchData) and ePass 2003 Auto (by HyperSecu) are FIPS 140-2 Level 2 certified USB tokens priced at ₹500, with 64KB storage and RSA 2048-bit key support. The main difference is in the driver experience: the ePass 2003 Auto has auto-detect drivers that work on most Windows systems without manual installation, while the Proxkey requires you to download and install the driver manually. In terms of hardware, the Proxkey uses a WatchData proprietary chip while the ePass 2003 uses a HyperSecu chip. Both are equally reliable for DSC storage and government portal use. The choice between them is largely a matter of personal preference.",
  },
  {
    question: "Can the Proxkey token store multiple certificates?",
    answer:
      "Yes, the Proxkey token has 64KB of EEPROM storage, which is sufficient to store multiple digital certificates. In practice, you can store a signing certificate and an encryption certificate simultaneously — which is exactly what's needed for a Class 3 Combo DSC. However, the token can only store certificates from one user identity. You cannot store certificates belonging to two different people on the same token. If you need DSCs for multiple individuals, each person needs their own separate token.",
  },
  {
    question: "Does the Proxkey token work on macOS and Linux?",
    answer:
      "Yes, the Proxkey token supports Windows (7, 8, 8.1, 10, 11), macOS, and Linux. However, the level of driver support varies by platform. On Windows, the installation is straightforward using the Proxkey middleware installer. On macOS and Linux, you typically need to install the PKCS#11 library manually and may need to configure your browser or signing application to use the correct library path. Most government portals in India are designed for Windows, so Windows provides the smoothest experience. If you primarily use macOS or Linux, we recommend contacting our support team for platform-specific setup guidance.",
  },
  {
    question: "Where can I download the Proxkey driver?",
    answer:
      "You can download the Proxkey token driver and middleware from our Downloads page at SignSecure. We provide the latest verified driver packages for Windows, macOS, and Linux. Alternatively, you can download the driver directly from the WatchData Technologies website. We recommend using our Downloads page as we test each driver version for compatibility with all major Certifying Authorities and government portals before making it available. The download page also includes step-by-step installation guides for each operating system.",
  },
  {
    question: "What is WatchData Technologies?",
    answer:
      "WatchData Technologies is a global smart card and digital security technology company headquartered in Beijing, China. Founded in 1994, WatchData specializes in secure element technology, identity authentication, mobile payment solutions, and cryptographic hardware. The company supplies secure chips and USB tokens to governments, banks, and enterprises worldwide. In India, WatchData is best known for the Proxkey USB crypto token, which is widely used for storing digital signature certificates. The company holds multiple international certifications including FIPS 140-2 and Common Criteria, demonstrating its commitment to security standards.",
  },
  {
    question: "How long does a Proxkey token last?",
    answer:
      "The Proxkey USB token is designed for long-term use. The EEPROM storage chip inside the token is rated for over 500,000 read/write cycles, and the WatchData secure chip can perform millions of cryptographic operations. In practical terms, with normal DSC usage (signing documents, filing on portals), the token will easily last 5–10 years or more. The USB connector is built to withstand over 10,000 insertion/removal cycles. The main reason users replace their tokens is not hardware failure but rather physical damage from rough handling, loss, or upgrading to a newer model. We recommend keeping the token in a safe place when not in use.",
  },
  {
    question: "Is the Proxkey token FIPS certified?",
    answer:
      "Yes, the Proxkey USB token is FIPS 140-2 Level 2 certified. FIPS 140-2 (Federal Information Processing Standard) is a U.S. government security standard that specifies requirements for cryptographic modules. Level 2 adds requirements for physical tamper-evidence (such as tamper-evident seals or pick-resistant locks) beyond the Level 1 requirements. This certification is mandated by the CCA (Controller of Certifying Authorities) for all USB tokens used to store Digital Signature Certificates in India. The FIPS certification ensures that the token meets rigorous security standards for protecting your private keys.",
  },
  {
    question: "Can I use a Proxkey token for e-Tendering?",
    answer:
      "Yes, the Proxkey token works with all e-Tendering and e-Procurement portals in India. This includes the Central Public Procurement Portal (CPPP) at eprocure.gov.in, the Government e-Marketplace (GeM) at gem.gov.in, IREPS (Indian Railways), and all state-level procurement portals. For e-Tendering, you typically need a Class 3 Combo DSC (Signature + Encryption) stored on the token. The Proxkey token supports both certificates simultaneously. Ensure you have the Proxkey driver installed and the Java-based signing applet configured correctly for each portal.",
  },
  {
    question: "What should I do if my Proxkey token is not detected?",
    answer:
      "If your Proxkey token is not being detected, follow these steps: (1) Ensure the Proxkey driver is installed — unlike ePass 2003, Proxkey requires manual driver installation. (2) Try a different USB port, preferably a USB 2.0 port directly on the motherboard rather than a hub. (3) Restart your computer after installing the driver. (4) Check Device Manager on Windows to see if the token appears under 'Smart card readers' or 'Universal Serial Bus controllers'. (5) Reinstall the Proxkey middleware from our Downloads page. (6) On Windows 10/11, ensure the 'Smart Card' service is running (services.msc). If none of these steps work, contact our support team via WhatsApp at +91 79907 40623 for dedicated support.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "ePass 2003 Auto Token",
    description:
      "The most popular USB crypto token in India with auto-detect drivers. Plug & Play on Windows.",
    price: 500,
    link: "/products/epass-2003-usb-token",
    badge: "Most Popular",
  },
  {
    title: "Class 3 Individual DSC",
    description:
      "Government-approved Class 3 DSC for individuals. Aadhaar eKYC, 1-day delivery.",
    price: 899,
    link: "/products/class-3-individual-dsc",
    badge: "For Individuals",
  },
  {
    title: "Class 3 Combo DSC",
    description:
      "Signature + Encryption on one token. Mandatory for e-Tendering and procurement portals.",
    price: 1599,
    link: "/products/class-3-combo-dsc",
    badge: "Sign + Encrypt",
  },
  {
    title: "DGFT Digital Signature",
    description:
      "Specialized DSC for import-export filings on the DGFT portal. Required for all IEC holders.",
    price: 2199,
    link: "/products/dgft-dsc",
    badge: "Import/Export",
  },
];

/* --------------- Component --------------- */

export default function ProxkeyUSBTokenPage() {
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
                  href="/"
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
                  href="/products"
                  className="hover:text-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href="/products#usb-tokens"
                  className="hover:text-foreground transition-colors"
                >
                  USB Tokens
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                Proxkey USB Token
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Section 1: Hero ─── */}
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
                    FIPS 140-2 Level 2 Certified
                  </span>
                </div>

                <div className="mb-4">
                  <img src="/assets/token-proxkey-logo.svg" alt="Proxkey by WatchData" className="h-9 w-auto" />
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-3 leading-tight">
                  Proxkey{" "}
                  <span className="text-gradient-cobalt">USB Token</span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-xl">
                  by WatchData Technologies
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  FIPS 140-2 Level 2 certified USB cryptographic token for
                  secure Digital Signature Certificate storage. Compatible with
                  all Certifying Authorities and government portals in India.
                  Built on the proven WatchData secure chip platform.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;500
                  </span>
                  <span className="text-sm text-white/40">incl. GST</span>
                  <span className="text-xs font-bold bg-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-full">
                    Doorstep Delivery
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20a%20Proxkey%20USB%20Token"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now — &#8377;500
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
                    { icon: ShieldCheck, label: "FIPS Level 2" },
                    { icon: Cpu, label: "WatchData Chip" },
                    { icon: Globe, label: "All CAs Compatible" },
                    { icon: Package, label: "Doorstep Delivery" },
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
                <TokenBulkPricingCard tokenName="Proxkey" singlePrice={500} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Overview ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is the Proxkey USB Token?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                The Proxkey USB token is a FIPS 140-2 Level 2 certified USB
                cryptographic device manufactured by WatchData Technologies, a
                global smart card and digital security company headquartered in
                Beijing, China. In India, the Proxkey token is one of the most
                widely used USB crypto tokens for storing Digital Signature
                Certificates (DSCs) issued by government-licensed Certifying
                Authorities. It is trusted by hundreds of thousands of
                professionals including Chartered Accountants, Company
                Secretaries, lawyers, business owners, and government
                contractors.
              </p>

              <p className="text-base leading-relaxed">
                The token uses a proprietary WatchData secure chip that performs
                all cryptographic operations — including RSA key generation,
                signing, and verification — within the hardware itself. Your
                private key is generated inside the token and never leaves it,
                making it virtually impossible for anyone to copy, extract, or
                misuse your digital signature. The 64KB EEPROM storage can hold
                multiple certificates simultaneously, supporting both signing
                and encryption certificates required for Combo DSCs.
              </p>

              <p className="text-base leading-relaxed">
                The Proxkey token is compatible with all CCA-licensed
                Certifying Authorities operating in India — eMudhra, Capricorn,
                Pantasign, and SignX. It works seamlessly with every
                Indian government portal including the GST Portal, Income Tax
                Portal, MCA Portal, EPFO, e-Tendering platforms (GeM, CPPP,
                IREPS), DGFT, and more. Whether you need a Class 3 Individual
                DSC, Organization DSC, Combo DSC, or DGFT DSC, the Proxkey
                token stores and serves them reliably. Known for its durability
                and build quality, the Proxkey has established itself as a
                dependable choice for DSC users across India.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Bulk Pricing ─── */}
        <TokenBulkPricingSection tokenName="Proxkey" singlePrice={500} />

        {/* ─── Section 4: Compatibility ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Universal Compatibility
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The Proxkey USB token works with every Certifying Authority,
                every government portal, and every type of DSC in India.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Certifying Authorities */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All Certifying Authorities
                </h3>
                <div className="space-y-3">
                  {COMPATIBLE_CAS.map((ca) => (
                    <div key={ca.name} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          {ca.name}
                        </span>
                        <p className="text-xs text-muted-foreground">
                          {ca.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Government Portals */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All Government Portals
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {COMPATIBLE_PORTALS.map((portal) => (
                    <div
                      key={portal.name}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      <span className="text-foreground/80">{portal.name}</span>
                      <span className="text-xs text-brand-cobalt flex items-center gap-0.5">
                        <ExternalLink className="w-2.5 h-2.5" />
                        {portal.url}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DSC Types */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All DSC Types
                </h3>
                <div className="space-y-3">
                  {COMPATIBLE_DSC_TYPES.map((type) => (
                    <div
                      key={type}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{type}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Info className="w-3.5 h-3.5" />
                    Supports both Signature and Encryption certificates
                    simultaneously
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Driver & Software ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Driver &amp; Software Installation
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Unlike the ePass 2003 Auto token which works with plug-and-play
                auto-detect drivers, the Proxkey token requires manual driver
                installation before use.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {/* Driver Download Card */}
              <div className="rounded-2xl border border-brand-cobalt/20 bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Proxkey Driver Download
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Download the latest Proxkey middleware and driver package from
                  our verified Downloads page. Includes the token manager
                  utility and PKCS#11 library for Windows, macOS, and Linux.
                </p>
                <Link href="/downloads">
                  <Button className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-10 px-6 group">
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Go to Downloads
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>

              {/* Middleware Info Card */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-brand-saffron" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  Proxkey Middleware
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  The Proxkey middleware includes the Token Manager application,
                  PKCS#11 library, Microsoft CSP (Cryptographic Service
                  Provider), and certificate management tools. It must be
                  installed before plugging in the token.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Token Manager",
                    "PKCS#11",
                    "Microsoft CSP",
                    "Certificate Tool",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-[10px] font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="rounded-2xl border border-brand-saffron/20 bg-brand-saffron/[0.03] p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-brand-saffron shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-2">
                    Important: Driver Must Be Installed Before Use
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Proxkey USB token will not be recognized by your
                    computer without the driver installed. Unlike the ePass 2003
                    Auto token which has auto-detect capability, the Proxkey
                    requires you to download and install the driver software
                    first, then restart your computer, and only then plug in the
                    token. If you skip this step, the token will appear as an
                    unrecognized USB device. Always install the driver as
                    Administrator for proper system integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 6: How to Use ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Use the Proxkey Token
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Follow these 4 steps to set up and start using your Proxkey USB
                token with your digital signature certificate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {USAGE_STEPS.map((step) => (
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

        {/* ─── Section 7: Why Proxkey ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose the Proxkey Token?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Here is what makes the Proxkey USB token a reliable choice for
                DSC storage — and an honest look at where it stands in the
                market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROXKEY_ADVANTAGES.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-brand-cobalt" />
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

            {/* Honest Note */}
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-cobalt shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground mb-2">
                      Honest Note on Driver Installation
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The one area where the Proxkey token falls behind the
                      ePass 2003 Auto is driver installation. The ePass 2003
                      Auto has auto-detect drivers that work on most Windows
                      systems without any manual setup — you simply plug it in
                      and it works. The Proxkey requires you to download and
                      manually install the driver before first use. For
                      tech-savvy users this is not an issue, but for those who
                      prefer a plug-and-play experience, the ePass 2003 Auto
                      may be a more convenient choice. In terms of security,
                      reliability, and compatibility, both tokens are equally
                      capable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 8: Token Comparison Table ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                USB Token Comparison
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Compare the Proxkey against all major USB crypto tokens
                available in India. All tokens are CCA-compliant and accepted
                for DSC storage.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-4 py-4">
                        Token
                      </th>
                      <th className="text-left font-display font-bold px-4 py-4">
                        Brand
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Price
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        FIPS Level
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Storage
                      </th>
                      <th className="text-left font-display font-bold px-4 py-4">
                        Driver
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {TOKEN_COMPARISON.map((token) => (
                      <tr
                        key={token.name}
                        className={`${
                          token.name === "Proxkey"
                            ? "bg-brand-cobalt/[0.04] border-l-2 border-l-brand-cobalt"
                            : "bg-card"
                        } hover:bg-muted/50 transition-colors`}
                      >
                        <td className="px-4 py-4 font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            {token.popular && (
                              <Star className="w-3.5 h-3.5 text-brand-saffron fill-brand-saffron" />
                            )}
                            {token.name === "Proxkey" && (
                              <UsbIcon className="w-3.5 h-3.5 text-brand-cobalt" />
                            )}
                            {token.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {token.brand}
                        </td>
                        <td className="px-4 py-4 text-center font-semibold text-foreground">
                          &#8377;{token.price.toLocaleString("en-IN")}
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground text-xs">
                          {token.fips}
                        </td>
                        <td className="px-4 py-4 text-center text-muted-foreground">
                          {token.storage}
                        </td>
                        <td className="px-4 py-4 text-muted-foreground text-xs">
                          {token.driver}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Token highlights below table */}
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TOKEN_COMPARISON.filter(
                (t) =>
                  t.name === "ePass 2003 Auto" ||
                  t.name === "Proxkey" ||
                  t.name === "MToken"
              ).map((token) => (
                <div
                  key={token.name}
                  className={`rounded-xl border p-4 ${
                    token.name === "Proxkey"
                      ? "border-brand-cobalt/30 bg-brand-cobalt/[0.03]"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <UsbIcon className="w-4 h-4 text-brand-cobalt" />
                    <span className="font-display font-bold text-sm text-foreground">
                      {token.name}
                    </span>
                    {token.name === "Proxkey" && (
                      <span className="text-[10px] font-bold bg-brand-cobalt/10 text-brand-cobalt px-1.5 py-0.5 rounded">
                        THIS PRODUCT
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {token.highlight}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              All tokens listed above are CCA-compliant and accepted by all
              Certifying Authorities for DSC storage in India. Prices include
              GST.
            </p>
          </div>
        </section>

        {/* ─── Section 9: FAQ ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about the Proxkey USB token —
                drivers, compatibility, troubleshooting, and more.
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

        {/* ─── Section 10: Related Products ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore other USB tokens and Digital Signature products
                available at SignSecure.
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

        {/* ─── Section 11: Final CTA ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-cobalt/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-saffron/[0.06] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <UsbIcon className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                &#8377;500 &bull; Doorstep Delivery &bull; FIPS Certified
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy Proxkey USB Token Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get the FIPS 140-2 Level 2 certified Proxkey USB token delivered
              to your doorstep. Compatible with all CAs, all DSC types, and all
              government portals. Doorstep delivery across India.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20a%20Proxkey%20USB%20Token"
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
                "FIPS Level 2 Certified",
                "WatchData Chip",
                "All CAs Compatible",
                "Doorstep Delivery",
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
