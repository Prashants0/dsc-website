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
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Cpu,
  Zap,
  Lock,
  Monitor,
  Globe,
  Download,
  HardDrive,
  Fingerprint,
  Phone,
  MessageCircle,
  Star,
  HelpCircle,
  ExternalLink,
  Package,
  RefreshCw,
  Headset,
  Clock,
  CheckCircle,
  Settings,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/products/trustkey-usb-token")({
  component: TrustKeyUSBTokenPage,
  head: () => ({
    meta: [
      {
        title:
          "Buy TrustKey USB Token Online | Modern Crypto Token for DSC | SignSecure",
      },
      {
        name: "description",
        content:
          "Buy TrustKey USB Token online at best price in India. Modern chip architecture, FIPS certified, 64KB storage, RSA 2048-bit encryption. Compatible with all CAs and government portals. Cross-platform support for Windows, Mac & Linux. Price ₹600 with free shipping.",
      },
      {
        name: "keywords",
        content:
          "trustkey usb token, trustkey digital signature token, buy trustkey token online, trustkey crypto token india, trustkey dsc token, trustkey usb token price, trustkey token for digital signature, trustkey fips token, trustkey usb crypto token, buy trustkey token india",
      },
    ],
  }),
});

/* --------------- Data --------------- */

const TECH_SPECS = [
  { label: "Chip Architecture", value: "Modern Secure Microcontroller" },
  { label: "Interface", value: "USB 2.0 Type-A (High Speed)" },
  { label: "Certification", value: "FIPS 140-2 Level 2" },
  { label: "Storage Capacity", value: "64 KB Secure EEPROM" },
  { label: "Cryptographic Algorithm", value: "RSA 2048-bit / 4096-bit" },
  { label: "Hash Algorithms", value: "SHA-256, SHA-384, SHA-512" },
  { label: "Key Generation", value: "On-chip RSA key pair generation" },
  { label: "Operating Systems", value: "Windows, macOS, Linux" },
  { label: "Driver Type", value: "Manual install (driver package)" },
  { label: "PKCS Standards", value: "PKCS#11, MS CAPI, CNG" },
  { label: "Operating Temperature", value: "0°C to 70°C" },
  { label: "Dimensions", value: "Compact USB stick form factor" },
  { label: "Weight", value: "~6 grams" },
  { label: "Certifications", value: "CE, FCC, RoHS compliant" },
];

const COMPATIBLE_CAS = [
  {
    name: "eMudhra",
    description: "India's largest CA with 30M+ users. Full TrustKey support.",
  },
  {
    name: "Capricorn",
    description: "Wide partner network across India. TrustKey compatible.",
  },
  {
    name: "VSign",
    description: "Affordable DSCs with fast eKYC. Works with TrustKey tokens.",
  },
  {
    name: "Pantasign",
    description: "Seamless online issuance. Supports TrustKey token enrollment.",
  },
  {
    name: "Safescrypt",
    description: "Sify Technologies subsidiary. TrustKey tokens fully supported.",
  },
];

const COMPATIBLE_PORTALS = [
  {
    name: "GST Portal",
    url: "gst.gov.in",
    description: "GST registration, return filing, refund claims, e-way bills",
  },
  {
    name: "Income Tax Portal",
    url: "incometax.gov.in",
    description: "ITR filing, tax audit reports, refund claims, notice responses",
  },
  {
    name: "MCA Portal",
    url: "mca.gov.in",
    description: "Company incorporation, annual filings, DIR-3 KYC, ROC forms",
  },
  {
    name: "GeM Portal",
    url: "gem.gov.in",
    description: "Government e-Marketplace seller registration and bid submission",
  },
  {
    name: "EPFO Portal",
    url: "epfindia.gov.in",
    description: "ECR filing, PF withdrawal, employer registration, KYC approval",
  },
  {
    name: "e-Tendering (CPPP)",
    url: "eprocure.gov.in",
    description: "Central and state government tender submissions and bid signing",
  },
  {
    name: "DGFT Portal",
    url: "dgft.gov.in",
    description: "Import-export license applications, IEC filings, MEIS/SEIS claims",
  },
  {
    name: "IP India Portal",
    url: "ipindia.gov.in",
    description: "Patent, trademark, and design registration filings",
  },
];

const USAGE_STEPS = [
  {
    step: 1,
    icon: Download,
    title: "Download TrustKey Driver",
    description:
      "Visit the TrustKey support page or use the driver CD included in the package. Download and install the TrustKey Token Manager software and PKCS#11 driver for your operating system (Windows, macOS, or Linux). Run the installer with administrator privileges.",
    time: "5 minutes",
  },
  {
    step: 2,
    icon: UsbIcon,
    title: "Insert the TrustKey Token",
    description:
      "Plug the TrustKey USB token into any available USB port on your computer. Wait for the operating system to detect the device. The TrustKey Token Manager should automatically recognize the token. If prompted, enter the default PIN provided in the token documentation.",
    time: "1 minute",
  },
  {
    step: 3,
    icon: Lock,
    title: "Import or Generate Your DSC",
    description:
      "Open the TrustKey Token Manager or your CA's enrollment utility. If you have a new DSC, the certificate will be enrolled directly onto the token during the issuance process. For existing certificates, use the import function in the Token Manager to load your .pfx file onto the secure chip.",
    time: "5–10 minutes",
  },
  {
    step: 4,
    icon: CheckCircle,
    title: "Sign Documents on Any Portal",
    description:
      "Navigate to any government portal (GST, MCA, Income Tax, etc.) and initiate the signing process. Your browser will detect the TrustKey token via the installed driver. Select your certificate, enter your token PIN, and your document is digitally signed with full legal validity.",
    time: "Under 1 minute",
  },
];

const WHY_TRUSTKEY = [
  {
    icon: Cpu,
    title: "Modern Chip Architecture",
    description:
      "TrustKey uses a next-generation secure microcontroller with modern chip architecture, providing faster cryptographic operations and stronger tamper resistance compared to legacy token designs. The chip is designed for high-throughput signing workloads.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security Features",
    description:
      "FIPS 140-2 Level 2 certified with advanced physical tamper protection, secure key storage in hardware, and on-chip RSA key generation. Private keys never leave the token, making it virtually impossible to clone or extract your digital signature.",
  },
  {
    icon: Zap,
    title: "Fast Read/Write Performance",
    description:
      "TrustKey tokens deliver noticeably faster signing and certificate operations thanks to optimized firmware and the modern secure chip. Whether you are signing a single document or batch-processing multiple filings, TrustKey keeps up with your workflow.",
  },
  {
    icon: Monitor,
    title: "Cross-Platform Compatibility",
    description:
      "Full driver support for Windows (7, 8, 10, 11), macOS, and major Linux distributions. TrustKey provides dedicated driver packages for each platform, ensuring reliable operation across your entire device ecosystem without compatibility headaches.",
  },
  {
    icon: Globe,
    title: "Growing Adoption in India",
    description:
      "TrustKey is rapidly gaining market share among DSC users in India. Its modern design, competitive pricing, and strong compatibility with all Certifying Authorities and government portals make it an increasingly popular choice for professionals and businesses.",
  },
  {
    icon: RefreshCw,
    title: "Long-Term Reliability",
    description:
      "Built with premium components and rigorous quality control, TrustKey tokens offer excellent durability. The solid-state design means no moving parts, and the secure EEPROM supports over 500,000 write cycles — ensuring years of reliable service.",
  },
];

const FAQ_DATA = [
  {
    question: "What is a TrustKey USB Token?",
    answer:
      "A TrustKey USB Token is a FIPS 140-2 certified hardware security device used to store Digital Signature Certificates (DSCs) securely. It features a modern secure microcontroller chip that performs all cryptographic operations on-device, ensuring your private key never leaves the token. TrustKey tokens are manufactured with contemporary chip architecture and are compatible with all Indian Certifying Authorities and government portals. They plug into any standard USB port and work with Windows, macOS, and Linux operating systems.",
  },
  {
    question: "Is TrustKey compatible with all Certifying Authorities in India?",
    answer:
      "Yes, TrustKey USB tokens are fully compatible with all CCA-licensed Certifying Authorities in India, including eMudhra, Capricorn, VSign, Pantasign, and Safescrypt. You can enroll and store digital signature certificates from any of these CAs on your TrustKey token. The token supports standard PKCS#11 and Microsoft CAPI/CNG interfaces, which are the universal protocols used by all Indian CAs for certificate enrollment and signing operations.",
  },
  {
    question: "Does TrustKey work on all government portals?",
    answer:
      "Yes, TrustKey USB tokens work seamlessly on all Indian government portals that require digital signatures. This includes the GST portal (gst.gov.in), Income Tax portal (incometax.gov.in), MCA portal (mca.gov.in), EPFO portal (epfindia.gov.in), GeM portal (gem.gov.in), e-Tendering portals (CPPP, IREPS), DGFT portal, IP India portal, and all state government procurement portals. Once you install the TrustKey driver, the token is recognized by all portal-based signing applets and utilities.",
  },
  {
    question: "How do I install TrustKey drivers?",
    answer:
      "TrustKey requires manual driver installation, unlike some auto-detect tokens. Download the driver package from the TrustKey support website or use the driver CD included with your token. For Windows, run the installer executable with administrator privileges and follow the on-screen prompts. For macOS, mount the DMG file and install the PKCS#11 library. For Linux, install the provided .deb or .rpm package. After installation, plug in your TrustKey token, and it will be recognized by the Token Manager software and all signing applications.",
  },
  {
    question: "What is the storage capacity of TrustKey?",
    answer:
      "TrustKey USB tokens come with 64 KB of secure EEPROM storage. This is sufficient to store multiple digital signature certificates along with their associated key pairs. A typical Class 3 DSC with its RSA 2048-bit key pair occupies approximately 2-4 KB, meaning you can comfortably store 10-15 certificates on a single TrustKey token. The storage is non-volatile, so your certificates are retained even when the token is unplugged.",
  },
  {
    question: "Is TrustKey FIPS certified?",
    answer:
      "Yes, TrustKey USB tokens are FIPS 140-2 Level 2 certified. FIPS (Federal Information Processing Standards) 140-2 is the U.S. government standard for cryptographic modules, and Level 2 certification ensures physical tamper-evidence, role-based authentication, and secure key management. This certification is recognized by the Controller of Certifying Authorities (CCA) in India and is mandatory for USB tokens used to store Digital Signature Certificates. TrustKey meets and exceeds these security requirements.",
  },
  {
    question: "What is the price of TrustKey USB Token?",
    answer:
      "The TrustKey USB Token is priced at ₹600 (inclusive of GST) at SignSecure. This price includes the token hardware, driver software, and free shipping across India. TrustKey is competitively priced compared to other FIPS-certified tokens in the market, offering modern chip architecture and cross-platform compatibility at a reasonable cost. Bulk discounts are available for orders of 10 or more tokens — contact us on WhatsApp for volume pricing.",
  },
  {
    question: "Can I use TrustKey on Mac and Linux?",
    answer:
      "Yes, TrustKey provides full cross-platform support with dedicated driver packages for macOS and Linux in addition to Windows. On macOS, the TrustKey PKCS#11 library integrates with Safari, Chrome, and Firefox browsers for web-based signing. On Linux (Ubuntu, Fedora, CentOS, and other distributions), the driver package installs the necessary PKCS#11 shared library. This makes TrustKey an excellent choice for users who work across multiple operating systems or prefer non-Windows environments.",
  },
  {
    question: "How does TrustKey compare to ePass 2003?",
    answer:
      "TrustKey and ePass 2003 are both FIPS 140-2 certified USB tokens, but they differ in several key areas. TrustKey features a more modern chip architecture with faster cryptographic processing, while ePass 2003 uses a tried-and-tested design. ePass 2003 has auto-detect drivers (plug and play), whereas TrustKey requires manual driver installation. Both offer 64 KB storage and RSA 2048-bit support. TrustKey is priced at ₹600 compared to ₹500 for ePass 2003. Choose TrustKey if you value modern hardware and cross-platform support; choose ePass 2003 if you prefer plug-and-play convenience.",
  },
  {
    question: "How does TrustKey compare to Proxkey?",
    answer:
      "Both TrustKey and Proxkey are modern USB crypto tokens with FIPS certification. Proxkey is often considered the premium option with biometric features on some models and auto-detect drivers, while TrustKey offers a solid modern chip at a more competitive price point. TrustKey is priced at ₹600 versus ₹700 for Proxkey. Both support RSA 2048-bit, have 64 KB storage, and work across Windows, macOS, and Linux. TrustKey requires manual driver installation while Proxkey offers auto-detect. Both are fully compatible with all CAs and government portals.",
  },
  {
    question: "Can I store multiple certificates on TrustKey?",
    answer:
      "Yes, the TrustKey token's 64 KB secure storage can hold multiple digital signature certificates simultaneously. You can store both signing and encryption certificates from the same or different Certifying Authorities. This is particularly useful for professionals who hold separate signing and encryption DSCs (Class 3 Combo), or those who manage certificates for both individual and organizational use. The TrustKey Token Manager software allows you to view, manage, and switch between all stored certificates easily.",
  },
  {
    question: "What happens if my TrustKey token is lost or damaged?",
    answer:
      "If your TrustKey token is lost or damaged, your digital signature certificate can be revoked and re-issued by your Certifying Authority. The private key stored on the lost token cannot be extracted by anyone without your PIN, so your digital identity remains secure. Contact SignSecure via WhatsApp at +91 98765 43210, and we will help you revoke the old certificate, purchase a replacement TrustKey token, and get your new DSC enrolled. Many CAs offer free re-issuance within the certificate validity period.",
  },
];

const COMPARISON_TABLE = [
  {
    feature: "Price (incl. GST)",
    epass: "₹500",
    proxkey: "₹700",
    mtoken: "₹600",
    trustkey: "₹600",
    safenet: "₹1,800",
  },
  {
    feature: "Chip Architecture",
    epass: "Legacy",
    proxkey: "Modern",
    mtoken: "Modern",
    trustkey: "Modern",
    safenet: "Advanced",
  },
  {
    feature: "FIPS Certification",
    epass: "FIPS 140-2 L2",
    proxkey: "FIPS 140-2 L2",
    mtoken: "FIPS 140-2 L2",
    trustkey: "FIPS 140-2 L2",
    safenet: "FIPS 140-2 L3",
  },
  {
    feature: "Storage",
    epass: "64 KB",
    proxkey: "64 KB",
    mtoken: "64 KB",
    trustkey: "64 KB",
    safenet: "80 KB",
  },
  {
    feature: "RSA Support",
    epass: "2048-bit",
    proxkey: "2048-bit",
    mtoken: "2048-bit",
    trustkey: "2048 / 4096-bit",
    safenet: "4096-bit",
  },
  {
    feature: "Driver Type",
    epass: "Auto-detect",
    proxkey: "Auto-detect",
    mtoken: "Manual",
    trustkey: "Manual",
    safenet: "Manual",
  },
  {
    feature: "USB Interface",
    epass: "USB 2.0",
    proxkey: "USB 2.0",
    mtoken: "USB 2.0",
    trustkey: "USB 2.0",
    safenet: "USB 2.0",
  },
  {
    feature: "Windows Support",
    epass: "Yes",
    proxkey: "Yes",
    mtoken: "Yes",
    trustkey: "Yes",
    safenet: "Yes",
  },
  {
    feature: "macOS Support",
    epass: "Yes",
    proxkey: "Yes",
    mtoken: "Limited",
    trustkey: "Yes",
    safenet: "Yes",
  },
  {
    feature: "Linux Support",
    epass: "Yes",
    proxkey: "Yes",
    mtoken: "Limited",
    trustkey: "Yes",
    safenet: "Yes",
  },
  {
    feature: "Form Factor",
    epass: "Compact USB",
    proxkey: "Compact USB",
    mtoken: "Compact USB",
    trustkey: "Compact USB",
    safenet: "Compact USB",
  },
  {
    feature: "Best For",
    epass: "Budget / Plug & Play",
    proxkey: "Premium / Biometric",
    mtoken: "Value / Emerging",
    trustkey: "Modern / Cross-Platform",
    safenet: "Enterprise / Max Security",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "ePass 2003 USB Token",
    description:
      "India's most popular USB token. Auto-detect drivers, 64 KB storage, FIPS certified. Plug-and-play convenience.",
    price: 500,
    link: "/products/epass-2003-usb-token",
    badge: "Most Popular",
  },
  {
    title: "Proxkey USB Token",
    description:
      "Premium FIPS-certified token with biometric support, auto-detect drivers, and enterprise-grade security.",
    price: 700,
    link: "/products/proxkey-usb-token",
    badge: "Premium",
  },
  {
    title: "MToken USB Token",
    description:
      "Emerging token brand with modern chip design, competitive pricing, and growing adoption across India.",
    price: 600,
    link: "/products/mtoken-usb-token",
    badge: "Value Pick",
  },
  {
    title: "SafeNet 5110 Token",
    description:
      "Enterprise-grade Thales token. FIPS 140-2 Level 3, 80 KB storage, RSA 4096-bit. For maximum security needs.",
    price: 1800,
    link: "/products/safenet-5110-usb-token",
    badge: "Enterprise",
  },
];

/* --------------- Component --------------- */

function TrustKeyUSBTokenPage() {
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
                TrustKey
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
                  <Cpu className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                    Modern Architecture
                  </span>
                </div>

                <div className="mb-4">
                  <img src="/assets/token-trustkey.svg" alt="TrustKey" className="h-9 w-auto" />
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-4 leading-tight">
                  TrustKey{" "}
                  <span className="text-gradient-cobalt">USB Token</span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-3 max-w-xl">
                  Modern Crypto Token for Digital Signature Certificates
                </p>

                <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl">
                  Next-generation FIPS-certified USB token with modern secure
                  chip architecture. Enhanced security, fast performance, and
                  cross-platform compatibility for Windows, macOS, and Linux.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;600
                  </span>
                  <span className="text-base text-white/40 line-through">
                    &#8377;999
                  </span>
                  <span className="text-xs font-bold bg-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-full">
                    Save &#8377;399
                  </span>
                </div>

                {/* Quick Specs */}
                <div className="mb-8">
                  <span className="text-xs text-white/50 font-medium block mb-2">
                    Quick Specifications:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "FIPS 140-2 L2",
                      "64 KB Storage",
                      "RSA 2048/4096",
                      "USB 2.0",
                      "Cross-Platform",
                    ].map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-white/70"
                      >
                        <Check className="w-3 h-3 text-brand-cobalt-bright" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20a%20TrustKey%20USB%20Token"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-white font-semibold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Buy Now — &#8377;600
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
                    { icon: Zap, label: "Fast Performance" },
                    { icon: Monitor, label: "Win / Mac / Linux" },
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

              {/* Right: Product Summary Card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                  <h2 className="font-display font-bold text-lg text-white mb-6">
                    Product Summary
                  </h2>
                  <div className="space-y-4">
                    {[
                      { label: "Product", value: "TrustKey USB Token" },
                      { label: "Type", value: "USB Crypto Token (PKI)" },
                      { label: "Chip", value: "Modern Secure Microcontroller" },
                      { label: "Certification", value: "FIPS 140-2 Level 2" },
                      { label: "Storage", value: "64 KB Secure EEPROM" },
                      { label: "Encryption", value: "RSA 2048 / 4096-bit" },
                      { label: "Interface", value: "USB 2.0 High Speed" },
                      { label: "OS Support", value: "Windows, macOS, Linux" },
                      { label: "Driver", value: "Manual Install" },
                      { label: "Price", value: "₹600 (incl. GST)" },
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
                      <Package className="w-4 h-4 text-brand-cobalt-bright" />
                      Free shipping across India
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
                What is the TrustKey USB Token?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p className="text-base leading-relaxed">
                TrustKey is a newer entrant in the Indian Digital Signature
                Certificate (DSC) token market, bringing modern chip
                architecture and enhanced security features to the USB crypto
                token segment. Designed to meet the growing demands of
                professionals and businesses who rely on digital signatures for
                government filings, e-tendering, and document signing, TrustKey
                offers a compelling combination of performance, security, and
                cross-platform compatibility at a competitive price point.
              </p>

              <p className="text-base leading-relaxed">
                At its core, TrustKey features a modern secure microcontroller
                that performs all cryptographic operations — including RSA key
                generation, digital signing, and certificate storage — entirely
                on the hardware chip. This means your private key is generated
                on-device and never leaves the token, providing the highest level
                of protection against key theft or cloning. The token is FIPS
                140-2 Level 2 certified, meeting the stringent security
                standards mandated by the Controller of Certifying Authorities
                (CCA) for DSC storage in India.
              </p>

              <p className="text-base leading-relaxed">
                One of TrustKey&apos;s standout features is its fast read/write
                performance. Thanks to the optimized firmware and modern chip
                design, TrustKey delivers noticeably quicker signing operations
                and certificate enrollment compared to older-generation tokens.
                With 64 KB of secure EEPROM storage, support for RSA 2048-bit
                and 4096-bit keys, and full compatibility with PKCS#11, MS CAPI,
                and CNG standards, TrustKey is fully interoperable with all
                Indian Certifying Authorities and government portals. It
                supports Windows, macOS, and Linux, making it an ideal choice
                for users who work across multiple operating systems.
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
                Detailed hardware and software specifications for the TrustKey
                USB crypto token.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
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
          </div>
        </section>

        {/* ─── Section 4: Compatibility — CAs ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Compatible with All Certifying Authorities
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                TrustKey USB tokens work with every CCA-licensed Certifying
                Authority in India. Enroll, store, and use DSCs from any CA.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {COMPATIBLE_CAS.map((ca) => (
                <div
                  key={ca.name}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6 text-brand-cobalt" />
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
                <Check className="w-4 h-4 text-brand-cobalt" />
                <span className="text-xs font-medium text-brand-cobalt">
                  All CAs are licensed by CCA, Government of India — TrustKey
                  is compatible with all of them
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Compatibility — Portals ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Works on All Government Portals
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                TrustKey USB tokens are accepted on every Indian government
                portal that supports digital signature-based authentication and
                signing.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMPATIBLE_PORTALS.map((portal) => (
                <div
                  key={portal.name}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <Globe className="w-5 h-5 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-1">
                    {portal.name}
                  </h3>
                  <p className="text-xs text-brand-cobalt font-medium mb-3 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    {portal.url}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {portal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Section 6: Driver & Software ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Driver &amp; Software
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                TrustKey requires manual driver installation. Download the
                appropriate driver package for your operating system.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  os: "Windows",
                  versions: "Windows 7, 8, 10, 11",
                  icon: Monitor,
                  instructions: [
                    "Download the TrustKey Windows driver package (.exe)",
                    "Run the installer with administrator privileges",
                    "Follow the installation wizard prompts",
                    "Plug in TrustKey token after installation completes",
                    "Open TrustKey Token Manager to verify detection",
                  ],
                },
                {
                  os: "macOS",
                  versions: "macOS 10.14+",
                  icon: Monitor,
                  instructions: [
                    "Download the TrustKey macOS driver package (.dmg)",
                    "Mount the DMG and run the installer",
                    "Install the PKCS#11 library component",
                    "Restart your browser after installation",
                    "Insert TrustKey token and verify in Token Manager",
                  ],
                },
                {
                  os: "Linux",
                  versions: "Ubuntu, Fedora, CentOS",
                  icon: Monitor,
                  instructions: [
                    "Download the .deb (Debian/Ubuntu) or .rpm (Fedora/CentOS) package",
                    "Install via package manager (dpkg -i or rpm -i)",
                    "Install the PKCS#11 shared library",
                    "Add your user to the appropriate device group",
                    "Plug in token and verify with pkcs11-tool",
                  ],
                },
              ].map((platform) => (
                <div
                  key={platform.os}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <platform.icon className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {platform.os}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    {platform.versions}
                  </p>
                  <ul className="space-y-2">
                    {platform.instructions.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-brand-cobalt font-bold text-xs mt-0.5">
                          {i + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-saffron/[0.06] border border-brand-saffron/15">
                <HelpCircle className="w-4 h-4 text-brand-saffron" />
                <span className="text-sm font-medium text-brand-saffron">
                  Need help with installation? WhatsApp us at +91 98765 43210
                  for step-by-step assistance
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 7: How to Use ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Use TrustKey USB Token
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get started with your TrustKey token in 4 simple steps. From
                driver installation to signing your first document.
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

        {/* ─── Section 8: Why TrustKey ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose TrustKey USB Token?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                TrustKey brings modern chip technology and cross-platform
                versatility to the USB crypto token market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_TRUSTKEY.map((feature) => (
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

        {/* ─── Section 9: FAQ ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to know about the TrustKey USB Token for
                digital signature certificates.
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

        {/* ─── Section 10: Comparison Table ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                USB Token Comparison
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Compare TrustKey with all other USB crypto tokens available at
                SignSecure. Find the right token for your needs.
              </p>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left font-display font-bold px-4 py-4">
                        Feature
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        ePass 2003
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        Proxkey
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        MToken
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4 relative">
                        TrustKey
                        <span className="absolute -top-1 right-1 text-[10px] font-bold bg-brand-saffron text-white px-1.5 py-0.5 rounded-b-md">
                          THIS PRODUCT
                        </span>
                      </th>
                      <th className="text-center font-display font-bold px-4 py-4">
                        SafeNet 5110
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {COMPARISON_TABLE.map((row) => (
                      <tr
                        key={row.feature}
                        className="bg-card hover:bg-muted/50 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3 text-center text-muted-foreground">
                          {row.epass}
                        </td>
                        <td className="px-4 py-3 text-center text-muted-foreground">
                          {row.proxkey}
                        </td>
                        <td className="px-4 py-3 text-center text-muted-foreground">
                          {row.mtoken}
                        </td>
                        <td className="px-4 py-3 text-center font-semibold text-brand-cobalt bg-brand-cobalt/[0.03]">
                          {row.trustkey}
                        </td>
                        <td className="px-4 py-3 text-center text-muted-foreground">
                          {row.safenet}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              All tokens are FIPS 140-2 certified and compatible with all Indian
              Certifying Authorities and government portals. Prices include GST.
            </p>
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
                Explore other USB crypto tokens and digital signature products
                available at SignSecure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map((product) => (
                <Link
                  key={product.title}
                  to={product.link}
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
              <UsbIcon className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                TrustKey USB Token — &#8377;600
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Buy TrustKey USB Token Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get the modern, FIPS-certified TrustKey USB crypto token delivered
              to your doorstep. Compatible with all CAs and government portals.
              Cross-platform support for Windows, macOS, and Linux.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20buy%20a%20TrustKey%20USB%20Token"
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
                "Modern Chip",
                "64 KB Storage",
                "Cross-Platform",
                "Free Shipping",
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
