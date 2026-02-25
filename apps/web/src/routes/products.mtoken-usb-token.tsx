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
  UsbIcon,
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  Cpu,
  Monitor,
  HardDrive,
  Lock,
  Zap,
  Download,
  Phone,
  MessageCircle,
  Star,
  Award,
  HelpCircle,
  ExternalLink,
  Fingerprint,
  Globe,
  FileText,
  Settings,
  Package,
  Layers,
  BadgeCheck,
  Clock,
  Weight,
  Ruler,
} from "lucide-react";

export const Route = createFileRoute("/products/mtoken-usb-token")({
  component: MTokenUSBTokenPage,
  head: () => ({
    meta: [
      {
        title:
          "Buy MToken USB Crypto Token Online | Compact DSC Token | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy MToken USB crypto token online in India. Compact, lightweight FIPS-certified digital signature token at just Rs. 500. Compatible with all CAs — eMudhra, Capricorn, VSign. Works on all government portals. Free shipping across India.",
      },
      {
        name: "keywords",
        content:
          "mtoken usb token, mtoken digital signature token, buy mtoken online india, mtoken crypto token, mtoken usb price, mtoken dsc token, mtoken driver download, compact usb token india, budget usb crypto token, mtoken fips token",
      },
    ],
  }),
});

/* --------------- Data --------------- */

const TECH_SPECS = [
  { label: "Manufacturer", value: "MToken" },
  { label: "Security Certification", value: "FIPS 140-2 Certified" },
  { label: "Interface", value: "USB 2.0 Type-A" },
  { label: "Storage Capacity", value: "64 KB Secure EEPROM" },
  { label: "Cryptographic Algorithms", value: "RSA 1024-bit / 2048-bit" },
  { label: "Hash Algorithms", value: "SHA-1, SHA-256, SHA-384, SHA-512" },
  { label: "On-Board Key Generation", value: "Yes (RSA 2048-bit)" },
  { label: "Operating System Support", value: "Windows, macOS, Linux" },
  { label: "Driver Installation", value: "Manual Install Required" },
  { label: "API / Middleware", value: "PKCS#11, Microsoft CSP, CryptoAPI" },
  { label: "Operating Temperature", value: "0°C to 70°C" },
  { label: "Certifications", value: "CE, FCC, RoHS" },
  { label: "Dimensions", value: "~42mm x 16mm x 8mm (Ultra-compact)" },
  { label: "Weight", value: "~5g (Lightest in category)" },
  { label: "Warranty", value: "1 Year Manufacturer Warranty" },
];

const COMPATIBILITY_CAS = [
  "eMudhra",
  "Capricorn",
  "VSign",
  "Pantasign",
  "Safescrypt",
  "n(Code) Solutions",
  "CDAC",
];

const COMPATIBILITY_PORTALS = [
  { name: "GST Portal", url: "gst.gov.in" },
  { name: "Income Tax Portal", url: "incometax.gov.in" },
  { name: "MCA Portal", url: "mca.gov.in" },
  { name: "EPFO Portal", url: "epfindia.gov.in" },
  { name: "GeM Portal", url: "gem.gov.in" },
  { name: "CPPP / e-Tender", url: "eprocure.gov.in" },
  { name: "IREPS (Indian Railways)", url: "ireps.gov.in" },
  { name: "Trace / TDS Portal", url: "tdscpc.gov.in" },
  { name: "IP India", url: "ipindia.gov.in" },
  { name: "DGFT Portal", url: "dgft.gov.in" },
  { name: "Startup India", url: "startupindia.gov.in" },
  { name: "State e-Procurement", url: "Various state portals" },
];

const COMPATIBILITY_DSC_TYPES = [
  "Class 3 Individual Signing DSC",
  "Class 3 Organization Signing DSC",
  "Class 3 Combo (Sign + Encrypt) DSC",
  "DGFT Digital Signature",
  "Foreign National DSC",
  "Document Signer Certificate",
];

const HOW_TO_USE_STEPS = [
  {
    step: 1,
    icon: Download,
    title: "Download & Install MToken Driver",
    description:
      "Visit the SignSecure Downloads page or the official MToken website and download the MToken driver package for your operating system. Run the installer and follow the on-screen wizard. You may need to restart your computer after installation for the driver to take effect.",
    time: "5 minutes",
  },
  {
    step: 2,
    icon: UsbIcon,
    title: "Plug In Your MToken",
    description:
      "Insert the MToken USB token into any available USB 2.0 or 3.0 port on your computer. Wait for the operating system to recognize the device. On Windows, you should see a notification in the system tray confirming the token is detected. On macOS and Linux, the token will appear in the token management software.",
    time: "1 minute",
  },
  {
    step: 3,
    icon: Lock,
    title: "Import or Generate Your DSC",
    description:
      "Open the MToken management utility or your CA's DSC download tool. Import your digital signature certificate (.pfx file) onto the token, or complete the CA's online process to generate the key pair directly on the token. Set a strong PIN (default is usually 12345678 — change it immediately for security).",
    time: "5 minutes",
  },
  {
    step: 4,
    icon: Globe,
    title: "Sign Documents & Use on Portals",
    description:
      "Your MToken is now ready. Open any government portal (GST, MCA, Income Tax, etc.), navigate to the signing section, select your certificate from the token, enter your PIN, and sign. The MToken works with all major browsers and Java-based signing applets used by Indian government portals.",
    time: "Ongoing",
  },
];

const WHY_MTOKEN = [
  {
    icon: Ruler,
    title: "Ultra-Compact Form Factor",
    description:
      "The MToken is one of the smallest USB crypto tokens available in India. At just ~42mm in length, it barely protrudes from your USB port, making it ideal for laptop users who carry their token everywhere. It fits easily in a pocket, wallet, or keychain.",
  },
  {
    icon: Weight,
    title: "Featherlight at ~5 Grams",
    description:
      "Weighing approximately 5 grams, the MToken is the lightest USB token in the Indian DSC market. You will barely notice it when carrying it around. Despite its small size, the build quality is solid and reliable for daily professional use.",
  },
  {
    icon: Star,
    title: "Budget-Friendly Pricing",
    description:
      "At just Rs. 500, the MToken delivers exceptional value. It offers the same FIPS certification and cryptographic capabilities as tokens costing twice as much. For cost-conscious professionals, CAs, and bulk buyers, MToken is the smartest choice.",
  },
  {
    icon: Layers,
    title: "Growing Ecosystem in India",
    description:
      "MToken adoption has grown rapidly across India, especially among individual DSC users and small businesses. Its growing user base means better community support, more troubleshooting resources online, and wider acceptance among CA partners.",
  },
  {
    icon: ShieldCheck,
    title: "FIPS 140-2 Certified Security",
    description:
      "Despite being budget-friendly, the MToken does not compromise on security. It carries FIPS 140-2 certification, the same security standard required by the CCA (Controller of Certifying Authorities) for all USB tokens used to store digital signature certificates in India.",
  },
  {
    icon: Cpu,
    title: "Full RSA 2048-bit Support",
    description:
      "The MToken supports on-board RSA 2048-bit key generation and storage, which is the current industry standard for digital signatures in India. All cryptographic operations happen on the token itself, ensuring your private key never leaves the secure hardware.",
  },
];

const FAQ_DATA = [
  {
    question: "What is an MToken USB token?",
    answer:
      "An MToken USB token is a compact, FIPS-certified USB cryptographic device used to securely store digital signature certificates (DSCs) in India. It is a hardware security module in a USB stick form factor that ensures your private key never leaves the device. The MToken is one of the smallest and most affordable USB tokens available in the Indian market, making it popular among individual DSC users, chartered accountants, and small businesses.",
  },
  {
    question: "What is the price of MToken USB token?",
    answer:
      "The MToken USB token is priced at Rs. 500 (inclusive of GST) at SignSecure. This makes it one of the most affordable FIPS-certified USB crypto tokens available in India. The price includes the token hardware, and shipping is free across India. There are no recurring fees or subscription charges — you buy it once and use it for the lifetime of the hardware.",
  },
  {
    question: "Is MToken compatible with all Certifying Authorities?",
    answer:
      "Yes, the MToken USB token is compatible with all CCA-licensed Certifying Authorities in India, including eMudhra, Capricorn, VSign, Pantasign, Safescrypt, n(Code) Solutions, and CDAC. You can store digital signature certificates from any of these CAs on your MToken. It supports the standard PKCS#11 and Microsoft CSP interfaces that all Indian CAs use for certificate enrollment and storage.",
  },
  {
    question: "Does MToken work on all government portals?",
    answer:
      "Yes, the MToken works on all Indian government portals that require digital signatures. This includes the GST portal (gst.gov.in), Income Tax portal (incometax.gov.in), MCA portal (mca.gov.in), EPFO, GeM, CPPP e-Tendering, IREPS, DGFT, Traces, IP India, Startup India, and all state government e-procurement portals. Any portal that accepts FIPS-certified USB tokens for DSC signing will work with the MToken.",
  },
  {
    question: "How do I install MToken drivers?",
    answer:
      "Unlike some tokens that have auto-detect drivers, the MToken requires manual driver installation. Download the MToken driver package from the SignSecure Downloads page (/downloads) or the official MToken website. Run the installer on your Windows, macOS, or Linux computer, follow the setup wizard, and restart your computer if prompted. After installation, plug in the MToken and it will be recognized by the operating system and all DSC signing applications.",
  },
  {
    question: "What operating systems does MToken support?",
    answer:
      "The MToken USB token supports Windows (Windows 7, 8, 8.1, 10, and 11 — both 32-bit and 64-bit), macOS (10.12 Sierra and later), and Linux (major distributions including Ubuntu, Fedora, and CentOS). Driver packages are available for all three operating systems. On Windows, which is the most common platform for government portal usage in India, installation is straightforward with the standard MSI installer.",
  },
  {
    question: "Is MToken FIPS certified?",
    answer:
      "Yes, the MToken USB token is FIPS 140-2 certified, which is the security certification mandated by the Controller of Certifying Authorities (CCA), Government of India, for all USB tokens used to store digital signature certificates. FIPS 140-2 certification ensures that the token meets rigorous security standards for cryptographic modules, including tamper resistance, key management, and secure key generation.",
  },
  {
    question: "Can I store multiple DSCs on one MToken?",
    answer:
      "Yes, you can store multiple digital signature certificates on a single MToken USB token, as long as the total storage does not exceed the token's 64 KB capacity. In practice, a typical DSC certificate is 2-4 KB in size, so you can comfortably store 10-15 certificates on one token. This is useful for professionals like chartered accountants who hold DSCs from multiple clients or for individuals who have both signing and encryption certificates.",
  },
  {
    question: "How does MToken compare to ePass 2003?",
    answer:
      "Both MToken and ePass 2003 are FIPS-certified USB tokens priced similarly (around Rs. 500). The key differences are: (1) Size — MToken is significantly smaller and lighter than ePass 2003, making it more portable. (2) Drivers — ePass 2003 Auto has auto-detect drivers while MToken requires manual installation. (3) Market share — ePass 2003 is the most widely used token in India with broader support resources. (4) Build — MToken has a more modern, compact design. Both are equally capable for DSC storage and signing.",
  },
  {
    question: "How does MToken compare to Proxkey?",
    answer:
      "MToken and Proxkey are both FIPS-certified tokens in a similar price range. Proxkey (by WatchData) has a slightly larger form factor but is known for its durable build quality and FIPS 140-2 Level 2 certification. MToken is more compact and lighter. Both support RSA 2048-bit keys, work with all CAs, and function on all government portals. The choice often comes down to personal preference — MToken for compactness, Proxkey for ruggedness.",
  },
  {
    question: "What is the default PIN for MToken?",
    answer:
      "The default User PIN for a new MToken USB token is typically 12345678 (eight digits). The default Admin/SO (Security Officer) PIN is also typically set by the manufacturer and is included in the documentation that comes with the token. It is extremely important to change both the User PIN and Admin PIN immediately after first use to prevent unauthorized access to your digital signature. Use the MToken management utility to change PINs.",
  },
  {
    question: "What if my MToken stops working or is damaged?",
    answer:
      "If your MToken stops working, first try basic troubleshooting: reinstall the driver, try a different USB port, and test on another computer. If the token hardware has failed, you will need to purchase a new token and get your DSC re-issued onto the new token. SignSecure provides free DSC re-issuance within the certificate validity period if your token is damaged. The MToken comes with a 1-year manufacturer warranty against hardware defects.",
  },
  {
    question: "Can I use MToken for e-Tendering and GeM?",
    answer:
      "Yes, the MToken is fully compatible with all e-Tendering platforms in India, including the Government e-Marketplace (GeM), Central Public Procurement Portal (CPPP), IREPS (Indian Railways), and all state government e-procurement portals. For e-Tendering, you typically need a Class 3 Combo DSC (Signing + Encryption) stored on the token. The MToken supports both signing and encryption certificates simultaneously.",
  },
  {
    question: "Does SignSecure provide support for MToken setup?",
    answer:
      "Yes, SignSecure provides complete support for MToken setup and configuration. Our support team can help you with driver installation, DSC import, PIN management, portal configuration, and troubleshooting. You can reach us via WhatsApp at +91 98765 43210 (available 24/7), phone call, or email. We also provide step-by-step video guides and documentation on our Downloads page for self-service setup.",
  },
];

const COMPARISON_TABLE = [
  {
    feature: "Price",
    mtoken: "Rs. 500",
    epass: "Rs. 500",
    proxkey: "Rs. 500",
    trustkey: "Rs. 600",
    safenet: "Rs. 1,200",
  },
  {
    feature: "Manufacturer",
    mtoken: "MToken",
    epass: "HyperSecu",
    proxkey: "WatchData",
    trustkey: "TrustKey",
    safenet: "Thales",
  },
  {
    feature: "FIPS Certification",
    mtoken: "FIPS 140-2",
    epass: "FIPS 140-2",
    proxkey: "FIPS 140-2 L2",
    trustkey: "FIPS 140-2",
    safenet: "FIPS 140-2 L3",
  },
  {
    feature: "Form Factor",
    mtoken: "Ultra-Compact",
    epass: "Standard",
    proxkey: "Standard",
    trustkey: "Standard",
    safenet: "Standard",
  },
  {
    feature: "Weight",
    mtoken: "~5g",
    epass: "~10g",
    proxkey: "~12g",
    trustkey: "~10g",
    safenet: "~15g",
  },
  {
    feature: "Storage",
    mtoken: "64 KB",
    epass: "64 KB",
    proxkey: "64 KB",
    trustkey: "64 KB",
    safenet: "80 KB",
  },
  {
    feature: "RSA Support",
    mtoken: "1024 / 2048",
    epass: "1024 / 2048",
    proxkey: "1024 / 2048",
    trustkey: "2048 / 4096",
    safenet: "2048 / 4096",
  },
  {
    feature: "USB Interface",
    mtoken: "USB 2.0",
    epass: "USB 2.0",
    proxkey: "USB 2.0",
    trustkey: "USB 2.0",
    safenet: "USB 2.0",
  },
  {
    feature: "Driver",
    mtoken: "Manual Install",
    epass: "Auto-Detect",
    proxkey: "Manual Install",
    trustkey: "Manual Install",
    safenet: "Manual Install",
  },
  {
    feature: "OS Support",
    mtoken: "Win / Mac / Linux",
    epass: "Win / Mac / Linux",
    proxkey: "Win / Mac / Linux",
    trustkey: "Windows Only",
    safenet: "Win / Mac / Linux",
  },
  {
    feature: "Best For",
    mtoken: "Budget & Portability",
    epass: "General Use",
    proxkey: "Durability",
    trustkey: "Modern Security",
    safenet: "Enterprise",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "ePass 2003 Auto Token",
    description:
      "India's most widely used USB crypto token. Auto-detect drivers, plug-and-play setup.",
    price: 500,
    link: "/products/epass-2003-usb-token",
    badge: "Most Popular",
  },
  {
    title: "Proxkey USB Token",
    description:
      "FIPS 140-2 Level 2 certified WatchData token. Known for durability and reliable performance.",
    price: 500,
    link: "/products/proxkey-usb-token",
    badge: "Durable",
  },
  {
    title: "TrustKey USB Token",
    description:
      "Modern chip architecture with enhanced security. Supports RSA 4096-bit keys.",
    price: 600,
    link: "/products/trustkey-usb-token",
    badge: "Modern",
  },
  {
    title: "SafeNet 5100 Token",
    description:
      "Enterprise-grade Thales token. FIPS 140-2 Level 3 for organizations needing premium security.",
    price: 1200,
    link: "/products/safenet-5100-usb-token",
    badge: "Enterprise",
  },
];

/* --------------- Component --------------- */

function MTokenUSBTokenPage() {
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
                MToken
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Section 1: Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-saffron/[0.07] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-cobalt/[0.05] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Product Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                  <Package className="w-3.5 h-3.5 text-brand-saffron" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                    Compact &amp; Budget Friendly
                  </span>
                </div>

                <div className="mb-4">
                  <img src="/assets/token-mtoken.svg" alt="MToken" className="h-9 w-auto" />
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-4 leading-tight">
                  MToken{" "}
                  <span className="text-gradient-cobalt">USB Token</span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-xl">
                  Ultra-Compact USB Crypto Token for Digital Signatures
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  The MToken is a compact, lightweight FIPS-certified USB
                  cryptographic token designed for storing digital signature
                  certificates. One of the smallest and most affordable tokens in
                  India, perfect for professionals who value portability and
                  budget-friendly pricing.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;500
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;899
                  </span>
                  <span className="text-xs font-bold bg-brand-saffron/20 text-brand-saffron px-3 py-1 rounded-full">
                    Save &#8377;399
                  </span>
                </div>

                {/* Quick Specs */}
                <div className="mb-8 space-y-2">
                  {[
                    "FIPS 140-2 Certified",
                    "RSA 2048-bit on-board key generation",
                    "64 KB secure storage",
                    "Ultra-compact (~42mm) & lightweight (~5g)",
                    "Windows, macOS & Linux support",
                    "Compatible with all CAs & government portals",
                  ].map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-sm text-white/60"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-saffron shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20an%20MToken%20USB%20Token"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron/90 h-12 px-8 group shimmer"
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
                    { icon: ShieldCheck, label: "FIPS Certified" },
                    { icon: Zap, label: "Free Shipping" },
                    { icon: Award, label: "1-Year Warranty" },
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

              {/* Right: Quick Summary Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                  <h2 className="font-display font-bold text-lg text-white mb-6">
                    Product Summary
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "Product", value: "MToken USB Crypto Token" },
                      { label: "Manufacturer", value: "MToken" },
                      { label: "Type", value: "USB Cryptographic Token" },
                      { label: "Certification", value: "FIPS 140-2" },
                      { label: "Encryption", value: "RSA 1024 / 2048-bit" },
                      { label: "Storage", value: "64 KB Secure EEPROM" },
                      { label: "Interface", value: "USB 2.0 Type-A" },
                      { label: "OS Support", value: "Windows / macOS / Linux" },
                      { label: "Driver", value: "Manual Install" },
                      { label: "Form Factor", value: "Ultra-Compact (~42mm)" },
                      { label: "Weight", value: "~5 grams" },
                      { label: "Warranty", value: "1 Year" },
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
                      <ShieldCheck className="w-4 h-4 text-brand-saffron" />
                      FIPS 140-2 Certified — CCA Approved for DSC Storage
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
                What is the MToken USB Token?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                The MToken USB token is a compact, lightweight USB cryptographic
                device designed for securely storing digital signature
                certificates (DSCs) in India. It is a hardware security module in
                a USB stick form factor — one of the smallest available in the
                Indian market. The MToken is gaining rapid popularity among DSC
                users, particularly those who value portability, affordability,
                and a clean modern design. At just Rs. 500, it is one of the most
                budget-friendly FIPS-certified tokens you can buy.
              </p>

              <p className="text-base leading-relaxed">
                Despite its compact size (approximately 42mm in length and just
                5 grams in weight), the MToken packs the same cryptographic
                capabilities as larger, more expensive tokens. It supports
                on-board RSA 2048-bit key generation, which means your private
                key is generated inside the token and never leaves the secure
                hardware. The token carries FIPS 140-2 certification, which is
                the mandatory security standard required by the Controller of
                Certifying Authorities (CCA) for all USB tokens used to store
                digital signature certificates in India.
              </p>

              <p className="text-base leading-relaxed">
                The MToken is compatible with all CCA-licensed Certifying
                Authorities in India — including eMudhra, Capricorn, VSign,
                Pantasign, and Safescrypt. It works on all major government
                portals such as GST, Income Tax, MCA, EPFO, GeM, CPPP, and state
                e-procurement platforms. It supports Windows, macOS, and Linux
                operating systems, though it does require manual driver
                installation (unlike auto-detect tokens like ePass 2003). For
                users who prioritize a small form factor and budget-friendly
                pricing, the MToken is an excellent choice.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Technical Specifications ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.06] border border-brand-saffron/12 mb-5">
                <Cpu className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Technical Specifications
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                MToken USB Token Specifications
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Detailed technical specifications of the MToken USB crypto token.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="text-left font-display font-bold px-6 py-4">
                      Specification
                    </th>
                    <th className="text-left font-display font-bold px-6 py-4">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {TECH_SPECS.map((spec, index) => (
                    <tr
                      key={spec.label}
                      className={`${index % 2 === 0 ? "bg-card" : "bg-muted/20"} hover:bg-muted/50 transition-colors`}
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
                Universal Compatibility
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The MToken USB token works with every Certifying Authority, every
                government portal, and every type of DSC issued in India.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* CAs */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-brand-saffron" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All Certifying Authorities
                </h3>
                <ul className="space-y-2.5">
                  {COMPATIBILITY_CAS.map((ca) => (
                    <li
                      key={ca}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      {ca}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portals */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-brand-cobalt" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All Government Portals
                </h3>
                <ul className="space-y-2.5">
                  {COMPATIBILITY_PORTALS.map((portal) => (
                    <li
                      key={portal.name}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0 mt-0.5" />
                      <span>
                        {portal.name}{" "}
                        <span className="text-xs text-muted-foreground/60">
                          ({portal.url})
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* DSC Types */}
              <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-brand-emerald/[0.06] flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-brand-emerald" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4">
                  All DSC Types
                </h3>
                <ul className="space-y-2.5">
                  {COMPATIBILITY_DSC_TYPES.map((type) => (
                    <li
                      key={type}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-brand-emerald shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Driver & Software ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.06] border border-brand-saffron/12 mb-5">
                <Settings className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Driver & Software
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                MToken Driver Installation
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The MToken requires manual driver installation. Download the
                driver package for your operating system and follow the setup
                wizard.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: Monitor,
                    os: "Windows",
                    versions: "Windows 7, 8, 10, 11 (32/64-bit)",
                    status: "Available",
                  },
                  {
                    icon: Monitor,
                    os: "macOS",
                    versions: "macOS 10.12 Sierra and later",
                    status: "Available",
                  },
                  {
                    icon: Monitor,
                    os: "Linux",
                    versions: "Ubuntu, Fedora, CentOS",
                    status: "Available",
                  },
                ].map(({ icon: Icon, os, versions, status }) => (
                  <div
                    key={os}
                    className="text-center p-4 rounded-xl border border-border"
                  >
                    <Icon className="w-8 h-8 text-brand-saffron mx-auto mb-3" />
                    <h4 className="font-display font-bold text-base text-foreground mb-1">
                      {os}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {versions}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-emerald">
                      <Check className="w-3 h-3" />
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-saffron/[0.04] border border-brand-saffron/10 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-saffron shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground mb-1">
                      Important: Manual Installation Required
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Unlike ePass 2003 Auto which has auto-detect drivers, the
                      MToken requires you to manually download and install the
                      driver before plugging in the token. Make sure to install the
                      driver first, then insert the token. If you face any issues,
                      our support team is available 24/7 via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/downloads">
                  <Button
                    size="lg"
                    className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron/90 h-12 px-8 group"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Download MToken Drivers
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-3">
                  Visit our Downloads page for MToken drivers, setup guides, and
                  DSC utilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 6: How to Use ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Use MToken USB Token
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get your MToken set up and working in 4 simple steps. The entire
                process takes under 15 minutes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_TO_USE_STEPS.map((step) => (
                <div key={step.step} className="relative">
                  {step.step < 4 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px border-t-2 border-dashed border-border -translate-x-4 z-0" />
                  )}
                  <div className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-saffron text-white flex items-center justify-center font-display font-bold text-sm">
                        {step.step}
                      </div>
                      <step.icon className="w-5 h-5 text-brand-saffron/60" />
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-saffron font-medium">
                      <Clock className="w-3 h-3" />
                      {step.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 7: Why MToken ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose MToken USB Token?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                The MToken stands out in the Indian USB token market for its
                unique combination of compact design, budget pricing, and
                reliable security.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_MTOKEN.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-brand-saffron" />
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

        {/* ─── Section 8: Comparison Table ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                MToken vs Other USB Tokens
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Compare the MToken with all other USB crypto tokens available at
                SignSecure. All tokens are FIPS-certified and compatible with all
                CAs and government portals.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-5 py-4">
                        Feature
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4 bg-brand-saffron/20 relative">
                        MToken
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-brand-saffron text-white px-1.5 py-0.5 rounded-b-md whitespace-nowrap">
                          THIS PRODUCT
                        </span>
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        ePass 2003
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        Proxkey
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        TrustKey
                      </th>
                      <th className="text-center font-display font-bold px-5 py-4">
                        SafeNet 5100
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON_TABLE.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={`${index % 2 === 0 ? "bg-card" : "bg-muted/20"} hover:bg-muted/50 transition-colors`}
                      >
                        <td className="px-5 py-3.5 font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-5 py-3.5 text-center text-foreground font-semibold bg-brand-saffron/[0.03]">
                          {row.mtoken}
                        </td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground">
                          {row.epass}
                        </td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground">
                          {row.proxkey}
                        </td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground">
                          {row.trustkey}
                        </td>
                        <td className="px-5 py-3.5 text-center text-muted-foreground">
                          {row.safenet}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              All tokens are available for purchase at SignSecure. Prices include
              GST. Free shipping across India.
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
                Everything you need to know about the MToken USB crypto token —
                pricing, compatibility, drivers, and more.
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
                Compare with other USB crypto tokens available at SignSecure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.link}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift block"
                >
                  <span className="inline-block text-[10px] font-bold text-brand-saffron bg-brand-saffron/[0.08] px-2 py-1 rounded-md mb-4 uppercase tracking-wide">
                    {product.badge}
                  </span>
                  <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-brand-saffron transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-foreground">
                      &#8377;{product.price.toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-saffron opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-saffron/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-brand-cobalt/[0.06] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <UsbIcon className="w-3.5 h-3.5 text-brand-saffron" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Just &#8377;500 — Free Shipping
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy MToken USB Token Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get India&apos;s most compact FIPS-certified USB crypto token
              delivered to your doorstep. Compatible with all CAs and all
              government portals. Perfect for professionals who value portability
              and affordability.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20an%20MToken%20USB%20Token"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron/90 h-12 px-8 group shimmer"
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
                "All CAs Compatible",
                "Free Shipping",
                "1-Year Warranty",
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
