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
  Download,
  Lock,
  Zap,
  Headset,
  Monitor,
  Cpu,
  HardDrive,
  Thermometer,
  Ruler,
  Weight,
  Plug,
  KeyRound,
  Fingerprint,
  BadgeCheck,
  Globe,
  FileText,
  Building2,
  Settings,
  RefreshCw,
  CircleDollarSign,
  CheckCircle2,
  XCircle,
  Minus,
  ExternalLink,
  Package,
  User,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/products/epass-2003-usb-token")({
  component: EPass2003Page,
  head: () => ({
    meta: [
      {
        title:
          "Buy ePass 2003 Auto USB Token Online | FIPS Certified DSC Token | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy ePass 2003 Auto USB Token online at ₹500 incl. GST. FIPS 140-2 Level 2 certified, auto-detect driver, plug & play on Windows. Most compatible DSC token in India by HyperSecu. Works with all Certifying Authorities — eMudhra, Capricorn, VSign, Pantasign & Safescrypt. Free shipping across India.",
      },
      {
        name: "keywords",
        content:
          "epass 2003 usb token, epass 2003 auto token, epass 2003 digital signature token, buy epass 2003 token online, epass 2003 driver download, hypersecu epass 2003, epass 2003 price, epass 2003 token for dsc, usb token for digital signature, epass 2003 fips certified",
      },
    ],
  }),
});

/* --------------- Data --------------- */

const KEY_SPECS = [
  {
    icon: ShieldCheck,
    label: "FIPS 140-2",
    value: "Level 2 Certified",
  },
  {
    icon: Plug,
    label: "Interface",
    value: "USB 2.0 Type-A",
  },
  {
    icon: HardDrive,
    label: "Storage",
    value: "64KB Onboard",
  },
  {
    icon: Monitor,
    label: "OS Support",
    value: "Windows / Mac / Linux",
  },
];

const TECH_SPECS = [
  { label: "Manufacturer", value: "HyperSecu Information Systems" },
  { label: "Model", value: "ePass 2003 Auto" },
  { label: "Interface", value: "USB 2.0 Type-A" },
  { label: "Certification", value: "FIPS 140-2 Level 2" },
  { label: "Onboard Storage", value: "64KB" },
  { label: "Supported Key Sizes", value: "RSA 1024-bit / 2048-bit" },
  { label: "Operating Systems", value: "Windows 7, 8, 10, 11 / macOS / Linux" },
  { label: "Driver Type", value: "Auto-detect (plug & play on Windows)" },
  { label: "Connector", value: "USB Type-A (standard)" },
  { label: "Dimensions", value: "~60mm × 15mm × 8mm" },
  { label: "Weight", value: "~5 grams" },
  { label: "Operating Temperature", value: "0°C to 70°C" },
  { label: "Housing Material", value: "Durable plastic" },
  { label: "Cryptographic Algorithms", value: "RSA, DES, 3DES, SHA-1, SHA-256" },
  { label: "PKCS#11 Support", value: "Yes" },
  { label: "Microsoft CSP Support", value: "Yes" },
];

const COMPATIBLE_CAS = [
  {
    name: "eMudhra",
    description:
      "India's largest CA with over 30 million users. ePass 2003 is the default token recommended by eMudhra for all DSC issuances.",
  },
  {
    name: "Capricorn",
    description:
      "Capricorn fully supports ePass 2003 for all certificate types including Individual, Organization, and Combo DSCs.",
  },
  {
    name: "VSign",
    description:
      "VSign certificates are fully compatible with ePass 2003. The token is listed as an approved device on VSign's portal.",
  },
  {
    name: "Pantasign",
    description:
      "Pantasign (Pantasoft) issues certificates directly onto ePass 2003 tokens. Full compatibility with their download utility.",
  },
  {
    name: "Safescrypt",
    description:
      "Safescrypt, a Sify Technologies subsidiary, supports ePass 2003 for all their DSC certificate profiles.",
  },
];

const COMPATIBLE_PORTALS = [
  { name: "GST Portal (gst.gov.in)", icon: FileText },
  { name: "Income Tax Portal (incometax.gov.in)", icon: Building2 },
  { name: "MCA Portal (mca.gov.in)", icon: Scale },
  { name: "EPFO Portal (epfindia.gov.in)", icon: User },
  { name: "GeM (gem.gov.in)", icon: Globe },
  { name: "CPPP (eprocure.gov.in)", icon: Globe },
  { name: "IREPS (Indian Railways)", icon: Globe },
  { name: "DGFT Portal (dgft.gov.in)", icon: Globe },
  { name: "IP India (ipindia.gov.in)", icon: Award },
  { name: "Startup India Portal", icon: Zap },
  { name: "ICEGATE (Customs)", icon: Globe },
  { name: "State e-Procurement Portals", icon: Globe },
];

const USAGE_STEPS = [
  {
    step: 1,
    title: "Plug Token into USB Port",
    description:
      "Insert the ePass 2003 token into any available USB port on your computer. The token has a standard USB Type-A connector that fits all desktop and laptop USB ports. If you are using a USB-C only device, use a USB-A to USB-C adapter.",
  },
  {
    step: 2,
    title: "Wait for Auto-Detection (Windows) or Install Driver (Mac/Linux)",
    description:
      "On Windows 7, 8, 10, and 11, the ePass 2003 auto-detects and installs the necessary driver automatically. You will see a notification in the system tray. On macOS, you need to install SafeNet middleware or OpenSC. On Linux, install the OpenSC / PKCS#11 driver package.",
  },
  {
    step: 3,
    title: "Open DSC Management Tool or Government Portal",
    description:
      "Navigate to the government portal where you need to use your DSC (e.g., GST portal, MCA portal, Income Tax portal), or open the DSC management tool provided by your Certifying Authority to manage certificates on the token.",
  },
  {
    step: 4,
    title: "Select Certificate from Token",
    description:
      "When prompted to sign, the portal or application will display the certificates stored on your token. Select the appropriate Digital Signature Certificate. The token supports storing multiple certificates if needed.",
  },
  {
    step: 5,
    title: "Enter Token PIN to Authorize",
    description:
      "Enter your token PIN to authorize the signing operation. The default PIN for ePass 2003 is typically set by your CA during certificate issuance (commonly '12345678' or '1234'). You will be prompted to change this PIN on first use for security.",
  },
];

const ADVANTAGES = [
  {
    icon: BadgeCheck,
    title: "Most Compatible Token in India",
    description:
      "The ePass 2003 is supported by all five Certifying Authorities in India and works seamlessly with every government portal that accepts DSCs. No other token has this level of universal compatibility.",
  },
  {
    icon: Zap,
    title: "Auto-Detect Driver — Zero Installation",
    description:
      "On Windows systems, the ePass 2003 requires no manual driver installation. Simply plug it in and Windows recognizes it automatically. This eliminates the most common technical issue users face with other tokens.",
  },
  {
    icon: Star,
    title: "Industry Standard — Largest Market Share",
    description:
      "Over 80% of Digital Signature Certificates issued in India are stored on ePass 2003 tokens. This means virtually all DSC support documentation, tutorials, and troubleshooting guides are written for this token.",
  },
  {
    icon: Globe,
    title: "Widest Support from All CAs",
    description:
      "eMudhra, Capricorn, VSign, Pantasign, and Safescrypt all recommend and support the ePass 2003 as their primary USB token. Their download utilities and certificate management tools are optimized for this device.",
  },
  {
    icon: CircleDollarSign,
    title: "Budget Friendly at Just ₹500",
    description:
      "At ₹500 including GST, the ePass 2003 is one of the most affordable FIPS-certified tokens available. Despite the low price, it delivers the same level of cryptographic security as tokens costing three times as much.",
  },
  {
    icon: Award,
    title: "Proven Track Record in Indian Market",
    description:
      "The ePass 2003 has been in use in India for over a decade. It has a proven reliability record with millions of tokens in active use across the country, making it the most battle-tested option available.",
  },
];

const FAQ_DATA = [
  {
    question: "What is ePass 2003 USB token?",
    answer:
      "The ePass 2003 is a USB cryptographic token manufactured by HyperSecu Information Systems. It is the most widely used hardware token in India for securely storing Digital Signature Certificates (DSCs). The token features FIPS 140-2 Level 2 certification, 64KB onboard storage, and auto-detect drivers that allow it to work plug-and-play on Windows systems without any manual driver installation. It stores your private key in a tamper-proof hardware chip, ensuring your digital signature cannot be copied or extracted.",
  },
  {
    question: "Is ePass 2003 compatible with all digital signatures?",
    answer:
      "Yes, the ePass 2003 is compatible with all types of Digital Signature Certificates issued in India. This includes Class 3 Individual DSC, Class 3 Organization DSC, Class 3 Combo DSC (Signing + Encryption), DGFT DSC, and Foreign National DSC. It works with certificates issued by all five CCA-licensed Certifying Authorities — eMudhra, Capricorn, VSign, Pantasign, and Safescrypt. The token supports RSA 1024-bit and 2048-bit key sizes, which covers all current DSC standards mandated by the Controller of Certifying Authorities.",
  },
  {
    question: "Does ePass 2003 work on Windows 11?",
    answer:
      "Yes, the ePass 2003 works perfectly on Windows 11. It also supports Windows 7, Windows 8, Windows 8.1, and Windows 10. The auto-detect feature means you simply plug the token into a USB port and Windows 11 recognizes it automatically without any manual driver installation. The token's CSP (Cryptographic Service Provider) and PKCS#11 modules are fully compatible with the Windows 11 certificate store, ensuring seamless operation with all government portals and DSC-enabled applications.",
  },
  {
    question: "How do I install ePass 2003 driver?",
    answer:
      "On Windows, the ePass 2003 typically requires no manual driver installation — it auto-detects when plugged in. If auto-detection fails (rare cases on older systems), you can download the manual driver from HyperSecu's official website or from our Downloads page at /downloads. On macOS, you need to install SafeNet Authentication Client or OpenSC middleware. On Linux, install the OpenSC package using your distribution's package manager (e.g., 'sudo apt install opensc' on Ubuntu/Debian). After installation, the token will be accessible via PKCS#11 interface.",
  },
  {
    question: "What is the default PIN for ePass 2003?",
    answer:
      "The default PIN for ePass 2003 is typically set by the Certifying Authority during DSC issuance. Common default PINs include '12345678', '1234', or a custom PIN provided by the CA. You should change the default PIN immediately after receiving the token to prevent unauthorized access. You can change the PIN using the ePass 2003 token management utility or through the PKI client software provided by your Certifying Authority. If you forget your PIN after changing it, contact your CA for PIN reset assistance — note that too many incorrect PIN attempts will lock the token.",
  },
  {
    question: "How much storage does ePass 2003 have?",
    answer:
      "The ePass 2003 has 64KB of onboard secure storage. This is sufficient to store multiple Digital Signature Certificates along with their associated private keys. A typical DSC with a 2048-bit RSA key pair occupies approximately 2-4KB of storage, which means you can store between 10-15 certificates on a single token depending on the key size and certificate metadata. The 64KB storage is more than adequate for most users who typically need to store 1-3 certificates.",
  },
  {
    question: "Can I store multiple DSCs on one ePass 2003?",
    answer:
      "Yes, you can store multiple Digital Signature Certificates on a single ePass 2003 token. The 64KB onboard storage allows you to store approximately 10-15 certificates depending on key sizes. This is useful if you have DSCs from different Certifying Authorities, certificates for different purposes (signing and encryption), or if you need to maintain both your current and previous certificates. When signing, the application will prompt you to select which certificate to use from the token.",
  },
  {
    question: "Is ePass 2003 FIPS certified?",
    answer:
      "Yes, the ePass 2003 is FIPS 140-2 Level 2 certified. FIPS 140-2 (Federal Information Processing Standard) is a U.S. government computer security standard used to validate cryptographic modules. Level 2 certification means the token provides tamper-evident physical security mechanisms, role-based authentication, and meets stringent requirements for key management and cryptographic operations. This certification is mandated by the Controller of Certifying Authorities (CCA) for all USB tokens used to store Digital Signature Certificates in India.",
  },
  {
    question:
      "What is the difference between ePass 2003 and Proxkey?",
    answer:
      "Both the ePass 2003 (by HyperSecu) and Proxkey (by WatchData) are FIPS 140-2 Level 2 certified USB tokens priced at ₹500. The key difference is compatibility and market share. The ePass 2003 has auto-detect drivers on Windows (no manual installation), while Proxkey may require manual driver installation on some systems. ePass 2003 holds approximately 80% market share in India, meaning more technical support resources and tutorials are available for it. Both tokens work with all CAs and government portals, but the ePass 2003 is generally recommended as the safer choice due to its wider compatibility and plug-and-play nature.",
  },
  {
    question: "How to reset ePass 2003 token PIN?",
    answer:
      "If you have forgotten your ePass 2003 PIN, you can reset it using the ePass 2003 token management utility. Download the utility from our Downloads page or HyperSecu's website. Open the utility, select your token, and use the 'Unblock PIN' or 'Reset PIN' option. You will need the Admin PIN (also called SO PIN or PUK) to reset the user PIN. If you do not have the Admin PIN, contact your Certifying Authority for assistance. Important: If the user PIN is entered incorrectly too many times (usually 10 attempts), the token will be permanently locked and cannot be recovered — the DSC will need to be re-issued on a new token.",
  },
  {
    question: "Does ePass 2003 work on Mac?",
    answer:
      "Yes, the ePass 2003 works on macOS, but it requires middleware installation since the auto-detect feature is specific to Windows. You need to install either SafeNet Authentication Client for Mac or OpenSC (an open-source smart card middleware). Once the middleware is installed, the ePass 2003 token will be recognized by the system and you can use it with web browsers like Safari, Chrome, and Firefox for DSC-based signing on government portals. macOS Ventura, Sonoma, and Sequoia are all supported.",
  },
  {
    question: "What is auto-detect in ePass 2003?",
    answer:
      "Auto-detect is a feature of the ePass 2003 that allows Windows operating systems to automatically recognize and install the necessary drivers when the token is plugged into a USB port. Unlike other tokens that require you to manually download and install driver software before the token can be used, the ePass 2003 registers itself as a standard CCID (Chip Card Interface Device) device that Windows natively supports. This means you can plug the token into any Windows PC and start using it immediately — making it the easiest token to set up, especially for non-technical users.",
  },
];

const COMPARISON_DATA = [
  {
    name: "ePass 2003",
    brand: "HyperSecu",
    price: 500,
    fips: "Level 2",
    compatibility: "All 5 CAs",
    driver: "Auto-detect",
    storage: "64KB",
    popular: true,
  },
  {
    name: "Proxkey",
    brand: "WatchData",
    price: 500,
    fips: "Level 2",
    compatibility: "All 5 CAs",
    driver: "Manual install",
    storage: "64KB",
    popular: false,
  },
  {
    name: "MToken",
    brand: "MToken",
    price: 500,
    fips: "Level 2",
    compatibility: "All 5 CAs",
    driver: "Manual install",
    storage: "64KB",
    popular: false,
  },
  {
    name: "TrustKey",
    brand: "TrustKey",
    price: 600,
    fips: "Level 2",
    compatibility: "All 5 CAs",
    driver: "Manual install",
    storage: "64KB",
    popular: false,
  },
  {
    name: "SafeNet 5100",
    brand: "Thales",
    price: 1200,
    fips: "Level 3",
    compatibility: "All 5 CAs",
    driver: "Manual install",
    storage: "80KB",
    popular: false,
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Proxkey USB Token",
    description:
      "FIPS 140-2 Level 2 certified WatchData token. Reliable alternative to ePass 2003 with wide CA compatibility.",
    price: 500,
    link: "/products#usb-tokens",
    badge: "USB Token",
  },
  {
    title: "Class 3 Individual DSC",
    description:
      "Government-approved Class 3 Digital Signature for individuals. Aadhaar eKYC, 30-min delivery, free USB token included.",
    price: 899,
    link: "/products/class-3-individual-dsc",
    badge: "Most Popular DSC",
  },
  {
    title: "Class 3 Organization DSC",
    description:
      "Organization-level digital signature for companies, LLPs, and firms. Required for corporate filings and tenders.",
    price: 1099,
    link: "/products/class-3-organization-dsc",
    badge: "For Companies",
  },
  {
    title: "Class 3 Combo DSC",
    description:
      "Signing + Encryption on one token. Mandatory for e-Tendering portals and encrypted document submissions.",
    price: 1599,
    link: "/products/class-3-combo-dsc",
    badge: "Sign + Encrypt",
  },
];

/* --------------- Component --------------- */

function EPass2003Page() {
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
                <Link
                  to="/products"
                  hash="usb-tokens"
                  className="hover:text-foreground transition-colors"
                >
                  USB Tokens
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-foreground font-medium" aria-current="page">
                ePass 2003
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Section 1: Product Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-emerald/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-cobalt/[0.05] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/[0.12] border border-brand-emerald/[0.2] mb-6">
                  <Star className="w-3.5 h-3.5 text-brand-emerald fill-brand-emerald" />
                  <span className="text-xs font-semibold text-brand-emerald tracking-wide uppercase">
                    Most Popular Token
                  </span>
                </div>

                <div className="mb-4">
                  <img src="/assets/token-epass-logo.png" alt="ePass 2003 by HyperSecu" className="h-9 w-auto" />
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-3 leading-tight">
                  ePass 2003 Auto{" "}
                  <span className="text-gradient-cobalt">USB Token</span>
                </h1>

                <p className="text-base text-white/55 font-medium mb-2">
                  by HyperSecu Information Systems
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  India&apos;s most widely used USB cryptographic token for
                  Digital Signature Certificates. FIPS 140-2 Level 2 certified
                  with auto-detect drivers — plug in and start signing.
                  Compatible with all CAs and every government portal.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-8">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;500
                  </span>
                  <span className="text-sm text-white/40">incl. GST</span>
                  <span className="text-xs font-bold bg-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-full">
                    Free Shipping
                  </span>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {KEY_SPECS.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-brand-emerald" />
                      </div>
                      <div>
                        <div className="text-[11px] text-white/40 font-medium">
                          {label}
                        </div>
                        <div className="text-sm text-white/80 font-semibold">
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20an%20ePass%202003%20USB%20Token"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-emerald text-white font-semibold hover:bg-brand-emerald/90 h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now — &#8377;500
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
                    { icon: ShieldCheck, label: "FIPS 140-2 Certified" },
                    { icon: Zap, label: "Auto-Detect Driver" },
                    { icon: Globe, label: "All CAs Supported" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 text-xs text-white/50"
                    >
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                        <Icon className="w-3 h-3 text-brand-emerald" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Product Image / Summary Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                  {/* Token Visual */}
                  <div className="w-full aspect-square max-w-xs mx-auto mb-8 rounded-2xl bg-gradient-to-br from-brand-emerald/[0.08] to-brand-cobalt/[0.08] border border-white/[0.06] flex flex-col items-center justify-center">
                    <img src="/assets/token-epass-logo.png" alt="ePass 2003" className="h-16 w-auto mb-4" />
                    <span className="text-sm font-display font-bold text-white/60">
                      ePass 2003 Auto
                    </span>
                    <span className="text-xs text-white/30 mt-1">
                      by HyperSecu
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-lg text-white mb-6">
                    Quick Specs
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "Type", value: "USB Crypto Token" },
                      { label: "Certification", value: "FIPS 140-2 Level 2" },
                      { label: "Storage", value: "64KB" },
                      { label: "Key Size", value: "RSA 1024/2048-bit" },
                      { label: "Driver", value: "Auto-detect (Windows)" },
                      { label: "Price", value: "₹500 incl. GST" },
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
                      <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                      CCA-approved for DSC storage in India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Product Overview ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is the ePass 2003 USB Token?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                The ePass 2003 is the most widely used USB cryptographic token in
                India for storing Digital Signature Certificates (DSCs).
                Manufactured by HyperSecu Information Systems, it has become the
                de facto industry standard for DSC storage, with an estimated 80%
                or more market share among all USB tokens used for digital
                signatures in India. Whether you are a chartered accountant
                filing on MCA, a business owner filing GST returns, or a
                government contractor bidding on tenders, chances are your DSC is
                stored on an ePass 2003.
              </p>

              <p className="text-base leading-relaxed">
                What makes the ePass 2003 particularly popular is its auto-detect
                driver feature. Unlike other USB tokens that require you to
                download and install driver software before the token can be
                used, the ePass 2003 works plug-and-play on most Windows systems.
                Simply insert it into any USB port and Windows automatically
                recognizes the device, installs the necessary drivers, and makes
                it available for signing. This eliminates the single biggest pain
                point for non-technical users — driver installation and
                troubleshooting.
              </p>

              <p className="text-base leading-relaxed">
                The token stores your private key in a secure, tamper-proof
                hardware chip that is FIPS 140-2 Level 2 certified. This means
                your digital signature cannot be copied, extracted, or cloned
                from the token. Hardware token storage is mandatory for all new
                Digital Signature Certificates as per the guidelines issued by
                the Controller of Certifying Authorities (CCA), Government of
                India. The CCA requires all DSCs to be stored on FIPS-certified
                hardware to prevent unauthorized duplication of private keys and
                to ensure non-repudiation of digitally signed documents.
              </p>

              <p className="text-base leading-relaxed">
                The FIPS 140-2 Level 2 certification ensures the ePass 2003
                meets rigorous international standards for cryptographic modules.
                This certification validates that the token provides
                tamper-evident physical security, role-based authentication, and
                cryptographic key management that meets the highest standards.
                The token supports RSA 1024-bit and 2048-bit keys, SHA-1 and
                SHA-256 hashing, and standard cryptographic interfaces including
                PKCS#11 and Microsoft CSP — making it compatible with virtually
                all software and platforms that use digital certificates.
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
                Complete technical specifications for the HyperSecu ePass 2003
                Auto USB Token.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left font-display font-bold px-6 py-4 w-2/5">
                      Specification
                    </th>
                    <th className="text-left font-display font-bold px-6 py-4">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {TECH_SPECS.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={`${
                        index % 2 === 0 ? "bg-card" : "bg-muted/20"
                      } hover:bg-muted/50 transition-colors`}
                    >
                      <td className="px-6 py-3.5 font-medium text-foreground">
                        {spec.label}
                      </td>
                      <td className="px-6 py-3.5 text-muted-foreground">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── Section 4: Compatibility ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Compatibility &amp; Supported Platforms
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The ePass 2003 is compatible with all Certifying Authorities, all
                DSC types, and all government portals in India.
              </p>
            </div>

            {/* Certifying Authorities */}
            <div className="mb-16">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">
                Supported Certifying Authorities (All 5)
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {COMPATIBLE_CAS.map((ca) => (
                  <div
                    key={ca.name}
                    className="rounded-2xl border border-border bg-card p-5 text-center transition-all duration-300 hover-lift"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-emerald/[0.06] flex items-center justify-center mx-auto mb-3">
                      <BadgeCheck className="w-6 h-6 text-brand-emerald" />
                    </div>
                    <h4 className="font-display font-bold text-base text-foreground mb-2">
                      {ca.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {ca.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Portals */}
            <div className="mb-12">
              <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">
                Compatible Government Portals
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {COMPATIBLE_PORTALS.map((portal) => (
                  <div
                    key={portal.name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card"
                  >
                    <portal.icon className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span className="text-sm text-foreground">
                      {portal.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DSC Types */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-emerald/[0.06] border border-brand-emerald/15">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald" />
                <span className="text-sm font-medium text-brand-emerald">
                  Works with all DSC types: Individual, Organization, Combo, and
                  DGFT
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Driver & Software ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Driver &amp; Software Information
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The ePass 2003 works plug-and-play on Windows. Here is what you
                need for each operating system.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {/* Windows */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-blue-500/[0.08] flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Windows
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">
                      Auto-detect — No driver needed.
                    </strong>{" "}
                    The ePass 2003 is recognized automatically by Windows 7, 8,
                    10, and 11. Simply plug the token into any USB port and wait
                    a few seconds for the system to install the device.
                  </p>
                  <p>
                    In rare cases on older systems, if auto-detection fails, you
                    can download the manual driver from HyperSecu&apos;s official
                    website. The CSP (Cryptographic Service Provider) is
                    registered automatically in the Windows certificate store.
                  </p>
                </div>
              </div>

              {/* macOS */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-gray-500/[0.08] flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  macOS
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">
                      Requires middleware installation.
                    </strong>{" "}
                    Install SafeNet Authentication Client for Mac or OpenSC
                    (open-source smart card tools). Both provide the PKCS#11
                    interface required for the token.
                  </p>
                  <p>
                    Once middleware is installed, the token works with Safari,
                    Chrome, and Firefox. Compatible with macOS Ventura, Sonoma,
                    and Sequoia.
                  </p>
                </div>
              </div>

              {/* Linux */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-orange-500/[0.08] flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Linux
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">
                      Install OpenSC / PKCS#11 driver.
                    </strong>{" "}
                    Use your distribution&apos;s package manager:{" "}
                    <code className="text-xs bg-muted px-1.5 py-0.5 rounded">
                      sudo apt install opensc
                    </code>{" "}
                    on Ubuntu/Debian or equivalent for your distro.
                  </p>
                  <p>
                    Works with Ubuntu, Fedora, CentOS, and other major
                    distributions. Firefox can use the token via its built-in
                    PKCS#11 module loader.
                  </p>
                </div>
              </div>
            </div>

            {/* Downloads Link */}
            <div className="mt-8 text-center">
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-emerald/[0.06] border border-brand-emerald/15 text-brand-emerald font-medium text-sm hover:bg-brand-emerald/[0.1] transition-colors"
              >
                <Download className="w-4 h-4" />
                Visit our Downloads page for drivers &amp; software
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CSP Info */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h4 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                <Settings className="w-4 h-4 text-brand-emerald" />
                Cryptographic Service Provider (CSP) Information
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The ePass 2003 registers a CSP (Cryptographic Service Provider)
                in Windows that allows applications and browsers to access the
                token&apos;s cryptographic functions. The CSP name is typically
                &quot;ePass2003 CSP&quot; and it supports the Microsoft CryptoAPI
                interface. For Java-based applications, use the PKCS#11 library
                file. For web browsers, the token is accessible via the Windows
                certificate store (Internet Explorer, Edge, Chrome) or via
                PKCS#11 module loading (Firefox). The PKCS#11 library file is
                located at the default installation path under Program Files.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 6: How to Use ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Use the ePass 2003 Token
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Step-by-step guide to using your ePass 2003 USB token for
                digital signing.
              </p>
            </div>

            <div className="space-y-4">
              {USAGE_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-emerald text-white flex items-center justify-center font-display font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Note */}
            <div className="mt-8 rounded-2xl border border-brand-saffron/20 bg-brand-saffron/[0.04] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-saffron/[0.12] flex items-center justify-center">
                  <Lock className="w-5 h-5 text-brand-saffron" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-foreground mb-2">
                    Important: Change Your Default PIN
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For security, always change the default PIN of your ePass
                    2003 token immediately after receiving it. The default PIN is
                    set by your Certifying Authority and is commonly known. Use
                    the token management utility to set a strong PIN that only
                    you know. Never share your token PIN with anyone. If the
                    incorrect PIN is entered too many times (typically 10
                    attempts), the token will be permanently locked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 7: Why ePass 2003 ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose the ePass 2003?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The ePass 2003 has become India&apos;s most popular USB token for
                digital signatures — and for good reason.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ADVANTAGES.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-emerald/[0.06] flex items-center justify-center mb-4">
                    <advantage.icon className="w-6 h-6 text-brand-emerald" />
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

        {/* ─── Section 8: FAQ ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about the ePass 2003 Auto USB Token.
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

        {/* ─── Section 9: Compare with Other Tokens ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Compare USB Tokens
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                See how the ePass 2003 compares against other popular USB tokens
                available in India.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-5 py-4">
                        Token
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        Price
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        FIPS Level
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        CA Support
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        Driver
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        Storage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON_DATA.map((token) => (
                      <tr
                        key={token.name}
                        className={`${
                          token.popular
                            ? "bg-brand-emerald/[0.04] border-l-2 border-l-brand-emerald"
                            : "bg-card"
                        } hover:bg-muted/50 transition-colors`}
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            {token.popular && (
                              <Star className="w-3.5 h-3.5 text-brand-emerald fill-brand-emerald" />
                            )}
                            <div>
                              <div className="font-medium text-foreground">
                                {token.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {token.brand}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 text-center font-semibold text-foreground">
                          &#8377;{token.price}
                        </td>
                        <td className="px-5 py-4 text-center text-muted-foreground">
                          {token.fips}
                        </td>
                        <td className="px-5 py-4 text-center text-muted-foreground">
                          {token.compatibility}
                        </td>
                        <td className="px-5 py-4 text-center">
                          {token.driver === "Auto-detect" ? (
                            <span className="inline-flex items-center gap-1 text-brand-emerald font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Auto-detect
                            </span>
                          ) : (
                            <span className="text-muted-foreground">
                              {token.driver}
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4 text-center text-muted-foreground">
                          {token.storage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              All tokens are CCA-approved and work with all Certifying
              Authorities. The ePass 2003 is the only token with auto-detect
              drivers on Windows.
            </p>
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
                Explore our other USB tokens and Digital Signature products.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.link}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift block"
                >
                  <span className="inline-block text-[10px] font-bold text-brand-emerald bg-brand-emerald/[0.08] px-2 py-1 rounded-md mb-4 uppercase tracking-wide">
                    {product.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-emerald transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-foreground">
                      &#8377;{product.price.toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-emerald opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-emerald/[0.1] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-cobalt/[0.06] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/[0.12] border border-brand-emerald/[0.2] mb-6">
              <UsbIcon className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="text-xs font-semibold text-brand-emerald tracking-wide uppercase">
                &#8377;500 incl. GST &bull; Free Shipping
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy Your ePass 2003 Token Now
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-4 max-w-xl mx-auto">
              Get India&apos;s most trusted USB token for digital signatures.
              FIPS 140-2 certified, auto-detect drivers, compatible with all
              CAs. Order now and receive it at your doorstep.
            </p>
            <p className="text-sm text-white/35 mb-8">
              Add it to your DSC order or buy it standalone — we ship across
              India for free.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20an%20ePass%202003%20USB%20Token"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-emerald text-white font-semibold hover:bg-brand-emerald/90 h-12 px-8 group shimmer"
                >
                  <span className="flex items-center gap-2">
                    Buy ePass 2003 — &#8377;500
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
                  className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
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
                "FIPS 140-2 Certified",
                "Auto-Detect Driver",
                "All 5 CAs Supported",
                "Free Shipping",
                "24/7 Support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-brand-emerald" />
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
