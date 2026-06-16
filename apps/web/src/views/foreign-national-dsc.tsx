"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  Clock,
  FileText,
  Fingerprint,
  Globe,
  Headset,
  Languages,
  Landmark,
  Mail,
  Package,
  Phone,
  Plus,
  Minus,
  Scale,
  Shield,
  ShieldCheck,
  Star,
  Users,
  Video,
  Building2,
  Briefcase,
  Home,
  CreditCard,
  Stamp,
  FileCheck,
  Truck,
  MonitorSmartphone,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const WHO_NEEDS = [
  {
    icon: Building2,
    title: "Foreign Directors of Indian Companies",
    description:
      "Non-Indian passport holders appointed as directors of Indian private limited or public limited companies who need DSC for MCA portal filings, DIR-3 KYC, and board resolution submissions.",
  },
  {
    icon: Briefcase,
    title: "NRIs with Businesses in India",
    description:
      "Non-Resident Indians who own or operate businesses registered in India and need to sign GST returns, income tax filings, or company annual returns digitally.",
  },
  {
    icon: CreditCard,
    title: "Foreign Investors in Indian Companies",
    description:
      "Overseas investors holding equity in Indian companies who need DSC for shareholder agreements, FEMA compliance filings, and FDI reporting to RBI.",
  },
  {
    icon: Scale,
    title: "Overseas Partners in Indian LLPs/Firms",
    description:
      "Foreign nationals who are designated partners in Indian Limited Liability Partnerships or partnership firms, requiring DSC for LLP annual filings on MCA.",
  },
  {
    icon: FileText,
    title: "Foreign Professionals Filing Indian Taxes",
    description:
      "NRIs and foreign nationals with taxable income in India who need to file Income Tax Returns, claim TDS refunds, or respond to tax notices electronically.",
  },
  {
    icon: Home,
    title: "NRI Property Owners",
    description:
      "Non-Resident Indians who own property in India and need DSC for property registration documents, Power of Attorney execution, or capital gains tax filings.",
  },
  {
    icon: Landmark,
    title: "Foreign Nationals Incorporating Companies in India",
    description:
      "Foreign entrepreneurs looking to register a new company in India through the MCA portal, requiring DSC as a mandatory part of the company incorporation process.",
  },
];

const USE_CASES = [
  {
    portal: "MCA Portal (mca.gov.in)",
    icon: Landmark,
    color: "bg-blue-500",
    tasks: [
      "Company incorporation (SPICe+ form) as a foreign director or subscriber",
      "DIR-3 KYC — mandatory annual Director KYC compliance",
      "Filing Annual Returns (AOC-4, MGT-7) as an authorized signatory",
      "Board resolution filings, director appointment/resignation forms (DIR-12)",
      "Charge creation/modification filings for secured loans",
    ],
    why: "MCA requires Class 3 DSC for all electronic filings. Foreign directors must have a valid DSC linked to their DIN (Director Identification Number) to sign and submit forms on the MCA21 portal.",
  },
  {
    portal: "GST Portal (gst.gov.in)",
    icon: FileCheck,
    color: "bg-emerald-500",
    tasks: [
      "GST registration for foreign-owned entities and NRI businesses",
      "Monthly/quarterly GST return filing (GSTR-1, GSTR-3B)",
      "GST refund applications for export-oriented businesses",
      "Responding to GST notices and assessments digitally",
    ],
    why: "Companies and LLPs must file GST returns signed with the authorized signatory's DSC. If the signatory is a foreign national or NRI, they need a Foreign National DSC to authenticate these filings.",
  },
  {
    portal: "Income Tax (incometax.gov.in)",
    icon: CreditCard,
    color: "bg-amber-500",
    tasks: [
      "ITR filing for NRIs (ITR-2, ITR-3 for business income)",
      "TDS refund claims for excess tax deducted on Indian income",
      "Responding to income tax notices under Section 142/143/148",
      "Filing Form 15CA/15CB for foreign remittances",
    ],
    why: "NRIs with income exceeding ₹50 lakh or companies with foreign directors are required to file digitally signed returns. DSC ensures non-repudiation and legal validity of tax filings.",
  },
  {
    portal: "RBI Compliance",
    icon: Shield,
    color: "bg-violet-500",
    tasks: [
      "FEMA (Foreign Exchange Management Act) compliance filings",
      "FDI reporting through FIRMS portal (Foreign Investment Reporting and Management System)",
      "Annual Return on Foreign Liabilities and Assets (FLA Return)",
      "ECB (External Commercial Borrowing) reporting",
    ],
    why: "Reserve Bank of India mandates digital reporting for foreign investment flows. Companies with foreign shareholders or directors must submit FEMA-related returns authenticated with DSC.",
  },
  {
    portal: "DPIIT (dpiit.gov.in)",
    icon: Globe,
    color: "bg-indigo-500",
    tasks: [
      "Foreign investment approval applications under DPIIT guidelines",
      "Startup India registration for NRI-founded startups",
      "Industrial license applications for foreign-invested entities",
      "FDI policy compliance documentation",
    ],
    why: "Department for Promotion of Industry and Internal Trade requires DSC-authenticated submissions for foreign investment approvals and industrial licensing, particularly for sectors under the automatic and approval routes.",
  },
  {
    portal: "Contract & Legal Signing",
    icon: Stamp,
    color: "bg-rose-500",
    tasks: [
      "Power of Attorney (PoA) for authorized representatives in India",
      "Board resolutions authorizing transactions or appointments",
      "Shareholder agreements and share transfer deeds",
      "Joint venture agreements and collaboration contracts",
    ],
    why: "Digitally signed documents using a CCA-approved DSC carry the same legal validity as wet signatures under the Indian IT Act, 2000. Foreign nationals can remotely execute legally binding documents for Indian transactions.",
  },
  {
    portal: "Property Registration",
    icon: Home,
    color: "bg-teal-500",
    tasks: [
      "NRI property sale/purchase deed execution",
      "Property registration documents in states with e-registration",
      "Capital gains tax filings on Indian property transactions",
      "Rental income declarations and TDS compliance",
    ],
    why: "Several Indian states now accept digitally signed property documents. NRIs who cannot be physically present in India can use DSC along with Power of Attorney to authorize property transactions remotely.",
  },
];

const KYC_STEPS = [
  {
    step: 1,
    title: "Submit Passport Copy",
    description:
      "Provide a clear, colour scan of your valid passport (all pages with information). The passport copy must be either attested by an Indian Embassy or Consulate in your country of residence, OR notarized by a certified notary public. Self-attested copies are not accepted for foreign national DSC.",
    timeline: "Day 1",
    icon: FileText,
  },
  {
    step: 2,
    title: "Schedule Video KYC",
    description:
      "Once your documents are submitted and pre-verified, eMudhra's verification team will schedule a video KYC call at a time convenient for your time zone. You will receive an email and SMS with the video call link, date, and time. Slots are typically available within 1–3 business days of document submission.",
    timeline: "Day 1–3",
    icon: Video,
  },
  {
    step: 3,
    title: "Complete Video Verification",
    description:
      "During the video call (typically 10–15 minutes), you will need to show your original passport to the camera, undergo face verification (matching your face to the passport photo), answer basic identity questions, and provide consent for DSC issuance. The call is recorded for audit compliance as per CCA guidelines.",
    timeline: "Day 2–4",
    icon: MonitorSmartphone,
  },
  {
    step: 4,
    title: "DSC Issued & Token Shipped",
    description:
      "After successful video KYC approval, your DSC is generated and loaded onto a USB crypto token. The token is then shipped internationally via courier (DHL/FedEx) to your address. You will receive tracking details via email. Domestic (Indian) addresses typically receive the token within 2–3 days; international delivery takes 5–7 business days.",
    timeline: "Day 3–5",
    icon: Package,
  },
];

const REQUIRED_DOCUMENTS = [
  {
    document: "Valid Passport",
    details:
      "Colour scan of all information pages. Must have at least 6 months validity remaining. This is your primary identity document for DSC issuance.",
    mandatory: true,
  },
  {
    document: "Passport-Size Photograph",
    details:
      "Recent colour photograph with white background. JPEG/PNG format, minimum 200×200 pixels. Must match your current appearance for video KYC verification.",
    mandatory: true,
  },
  {
    document: "Address Proof (Home Country)",
    details:
      "Utility bill (electricity, water, gas), bank statement, or government-issued document from your country of residence. Must be dated within the last 3 months and show your current residential address.",
    mandatory: true,
  },
  {
    document: "Indian PAN Card",
    details:
      "Permanent Account Number card issued by Indian Income Tax Department. Required if you are filing taxes in India or are a director of an Indian company. NRIs can apply for PAN through NSDL/UTIITSL.",
    mandatory: false,
  },
  {
    document: "Board Resolution / Authorization Letter",
    details:
      "If applying as a director or authorized signatory of an Indian company, a certified board resolution or authorization letter from the company appointing you and authorizing DSC procurement.",
    mandatory: false,
  },
  {
    document: "Embassy Attestation or Notarized Copies",
    details:
      "All document copies must be attested by the Indian Embassy/High Commission/Consulate in your country, OR notarized by a certified notary public. Apostille is also accepted for Hague Convention countries.",
    mandatory: true,
  },
];

const PRICING = [
  { validity: "1 Year", price: 8999, mrp: 12999 },
  { validity: "2 Years", price: 11999, mrp: 16999 },
  { validity: "3 Years", price: 14999, mrp: 20999 },
];

const FEATURES = [
  {
    icon: Fingerprint,
    title: "No Aadhaar Required",
    description:
      "Foreign nationals and NRIs without Aadhaar can get DSC using passport-based identity verification through video KYC.",
  },
  {
    icon: Video,
    title: "Video-Based KYC",
    description:
      "Secure video call verification replaces Aadhaar eKYC. Face-to-face identity confirmation with trained verification officers.",
  },
  {
    icon: ShieldCheck,
    title: "Passport Verification",
    description:
      "Your passport is verified against international databases during video KYC to ensure authentic identity confirmation.",
  },
  {
    icon: Truck,
    title: "Global Courier for USB Token",
    description:
      "USB crypto token shipped internationally via DHL/FedEx with tracking. Delivered to any address worldwide.",
  },
  {
    icon: Users,
    title: "Dedicated NRI Support Team",
    description:
      "Specialized support team experienced in handling foreign national DSC applications, available across multiple time zones.",
  },
  {
    icon: Globe,
    title: "Works on All Indian Portals",
    description:
      "Fully compatible with MCA, GST, Income Tax, DGFT, RBI, and all other Indian government portals that accept DSC.",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description:
      "Application assistance available in English, Hindi, and other languages. Document guidance in your preferred language.",
  },
  {
    icon: Clock,
    title: "Time Zone Friendly",
    description:
      "Video KYC slots available across multiple time zones to accommodate applicants in USA, UK, UAE, Singapore, and other countries.",
  },
];

const NRI_NOTES = [
  {
    title: "Time Zone Friendly Video KYC Slots",
    content:
      "eMudhra offers video KYC slots that accommodate major NRI destinations including USA (EST/PST), UK (GMT), UAE (GST), Singapore (SGT), and Australia (AEST). When scheduling your video KYC, you can request a slot that works for your local time. Weekend slots may also be available on request.",
  },
  {
    title: "International Token Delivery",
    content:
      "Your USB crypto token is shipped via international courier (DHL Express or FedEx) with full tracking. Delivery to USA, UK, and UAE typically takes 5–7 business days. For other countries, delivery may take 7–10 business days. Customs duties, if any, are borne by the recipient. We provide all shipping documentation including commercial invoice for customs clearance.",
  },
  {
    title: "PAN Card Requirements for NRIs",
    content:
      "While PAN is not mandatory for DSC issuance itself, it is required for most Indian filings (MCA, GST, Income Tax). NRIs can apply for PAN online through NSDL (onlineservices.nsdl.com) or UTIITSL. You can apply using Form 49AA (for foreign nationals) or Form 49A (for Indian citizens including NRIs). PAN processing takes 15–20 days for overseas applicants. We recommend applying for PAN simultaneously with your DSC to save time.",
  },
  {
    title: "Power of Attorney Considerations",
    content:
      "Many NRIs appoint a Power of Attorney (PoA) holder in India for various filings. However, MCA, GST, and Income Tax portals require the DSC of the actual director/signatory, not the PoA holder. Your DSC cannot be delegated — it is tied to your personal identity. The PoA holder can prepare the documents, but the final signing must be done using your personal DSC.",
  },
  {
    title: "Embassy Attestation Process",
    content:
      "Visit the Indian Embassy/High Commission/Consulate in your country with original documents and photocopies. The embassy will verify originals and attest the copies with an official stamp and signature. Attestation fees vary by country (typically $5–$25 per document). Some embassies offer postal attestation services. Processing time is usually 2–5 working days. Alternatively, you can get documents notarized by a local notary public — both are accepted by eMudhra.",
  },
  {
    title: "Passport Not in English",
    content:
      "If your passport is issued in a language other than English, you will need to provide a certified English translation along with the original passport scan. The translation must be done by a certified/sworn translator or by an official translation service. The translation should be notarized or attested along with the original document copies.",
  },
];

const FAQ_DATA = [
  {
    question: "What is a Foreign National DSC?",
    answer:
      "A Foreign National DSC (Digital Signature Certificate) is a Class 3 digital signature issued to individuals who do not hold Indian citizenship or who are Non-Resident Indians (NRIs). It serves the same legal purpose as a regular DSC under the Indian Information Technology Act, 2000 — authenticating electronic documents and filings on Indian government portals. The key difference is in the issuance process: instead of Aadhaar-based eKYC (which requires an Indian Aadhaar card), Foreign National DSC uses video-based KYC with passport verification, making it accessible to anyone regardless of their nationality or residency status.",
  },
  {
    question: "Can NRIs get a digital signature for India?",
    answer:
      "Yes, NRIs can absolutely obtain a Digital Signature Certificate for use in India. If you are an NRI with a valid Aadhaar card and Indian mobile number linked to Aadhaar, you may be eligible for a regular DSC through Aadhaar eKYC. However, many NRIs do not have an active Aadhaar or Indian mobile number. In such cases, the Foreign National DSC is the right choice — it uses video KYC with passport verification, so no Aadhaar is needed. The DSC issued is identical in functionality and legal validity; only the KYC process differs.",
  },
  {
    question: "What documents do foreign nationals need for DSC?",
    answer:
      "Foreign nationals need the following documents: (1) Valid passport — colour scan of all information pages, (2) Passport-size photograph — recent, colour, white background, (3) Address proof from home country — utility bill, bank statement, or government ID dated within 3 months, (4) Indian PAN card — if available and applicable, (5) Board resolution or authorization letter — if applying as a company director, and (6) All copies must be attested by Indian Embassy/Consulate or notarized by a certified notary. Original documents are not submitted; only attested copies are required.",
  },
  {
    question: "How is video KYC done for foreign DSC?",
    answer:
      "Video KYC is a live video call with an eMudhra verification officer. Here is how it works: You receive a video call link via email after document pre-verification (1–3 days after submission). During the 10–15 minute call, you show your original passport to the camera, the officer verifies your face against the passport photo, you answer basic identity questions (name, date of birth, address), you provide verbal and recorded consent for DSC issuance. The call is conducted in English and recorded for compliance. You need a stable internet connection, a device with camera and microphone, and your original passport at hand. The officer may ask you to tilt or rotate the passport to verify security features.",
  },
  {
    question: "Why is Foreign National DSC more expensive than regular DSC?",
    answer:
      "Foreign National DSC costs more due to several factors: (1) Manual video KYC process — unlike Aadhaar eKYC which is automated and takes seconds, video KYC requires a trained verification officer to conduct a live call, which involves significant human resource cost, (2) International document verification — passport and address proof from various countries need manual verification against different document formats and security features, (3) Limited CA availability — only eMudhra currently has the CCA-approved infrastructure for foreign national video KYC, so there is no price competition, (4) International courier costs — USB token shipping via DHL/FedEx internationally adds to the cost, (5) Extended support — dedicated NRI support team across time zones adds operational overhead.",
  },
  {
    question: "How long does it take to get Foreign National DSC?",
    answer:
      "The typical timeline is 2–5 business days from application to DSC issuance, plus additional time for international courier delivery of the USB token. Breakdown: Document submission and pre-verification takes 1 day, video KYC scheduling takes 1–2 days, video KYC call and approval takes 1 day, DSC generation and token loading takes same day as approval, domestic shipping takes 2–3 days, and international shipping takes 5–7 days. So the total end-to-end time including international delivery is approximately 7–12 business days. This is significantly longer than regular DSC (which is issued in 30 minutes via Aadhaar eKYC) due to the manual verification process.",
  },
  {
    question: "Can I get DSC without Aadhaar?",
    answer:
      "Yes, the Foreign National DSC is specifically designed for applicants who do not have Aadhaar. It uses video-based KYC with passport verification instead of Aadhaar eKYC. This makes it the only option for foreign nationals (non-Indian passport holders) and NRIs who do not have an active Aadhaar card. The DSC issued is functionally identical to an Aadhaar-eKYC-issued DSC — it works on all the same government portals and carries the same legal validity under the IT Act.",
  },
  {
    question: "Is PAN card mandatory for Foreign National DSC?",
    answer:
      "PAN card is not mandatory for the DSC issuance itself. You can obtain a Foreign National DSC using just your passport and other required documents. However, PAN is required for most Indian filings where you would use the DSC — for example, MCA filings (directors need PAN linked to DIN), GST registration, and Income Tax filings all require PAN. So while you can get the DSC without PAN, you will likely need PAN to actually use it for most purposes. We recommend applying for PAN simultaneously if you do not already have one. Foreign nationals can apply using Form 49AA through NSDL or UTIITSL.",
  },
  {
    question: "Which Certifying Authority issues Foreign National DSC?",
    answer:
      "Currently, only eMudhra (a CCA-licensed Certifying Authority) issues DSC for foreign nationals through video KYC. This is because eMudhra is the only CA that has invested in the video KYC infrastructure required by the Controller of Certifying Authorities (CCA) for non-Aadhaar verification. Other CAs like Capricorn, Pantasign, and SignX primarily rely on Aadhaar eKYC and do not currently offer video-based verification for foreign nationals. eMudhra is India's largest Certifying Authority and is listed on the Bombay Stock Exchange (BSE) and National Stock Exchange (NSE), ensuring reliability and trust.",
  },
  {
    question: "How is the USB token delivered internationally?",
    answer:
      "The USB crypto token containing your DSC is shipped via international courier — typically DHL Express or FedEx International Priority. Here's the process: After your DSC is generated and loaded onto the token, it is dispatched from our facility in India. You will receive a tracking number via email and SMS within 24 hours of dispatch. Delivery timelines: USA and Canada — 5–7 business days, UK and Europe — 5–7 business days, UAE and Middle East — 3–5 business days, Singapore and Southeast Asia — 4–6 business days, Australia — 6–8 business days. Customs duties or import taxes, if applicable in your country, are borne by the recipient. We provide a commercial invoice declaring the token as a 'USB Cryptographic Security Device' to facilitate customs clearance.",
  },
  {
    question: "Can foreign nationals be directors of Indian companies?",
    answer:
      "Yes, foreign nationals can absolutely be directors of Indian companies. Under the Companies Act, 2013, there is no restriction on foreign nationals being appointed as directors, provided they obtain a Director Identification Number (DIN) and a valid DSC. The process involves: (1) Obtain a Foreign National DSC, (2) Apply for DIN using form DIR-3 on the MCA portal (signed with DSC), (3) Get appointed as director through a board resolution, (4) File DIR-12 with MCA for appointment registration. At least one director must be a resident of India (stayed in India for 182+ days in the previous calendar year), but there is no limit on the number of foreign directors. Foreign nationals can also be Managing Directors or Whole-Time Directors subject to RBI and FEMA regulations.",
  },
  {
    question: "What if my video KYC call fails or gets disconnected?",
    answer:
      "If your video KYC call fails due to technical issues (poor internet, call drops, audio/video problems), eMudhra will reschedule the call at no additional cost. You will receive a new time slot within 1–2 business days. To minimize issues, ensure you have a stable broadband connection (minimum 2 Mbps), use a device with a good quality camera, sit in a well-lit room, keep your original passport ready, and close other bandwidth-heavy applications during the call. If the call is disconnected mid-way, the officer will attempt to reconnect within 5 minutes. If reconnection fails, a fresh slot will be scheduled.",
  },
  {
    question: "Can I renew my Foreign National DSC?",
    answer:
      "Yes, Foreign National DSC can be renewed before or after expiry. The renewal process is similar to a fresh application — you will need to undergo video KYC again, as CCA regulations do not allow automatic renewal without re-verification for foreign nationals. We recommend starting the renewal process at least 2–3 weeks before expiry to ensure continuity. The renewed DSC will be loaded onto a new USB token (or the same token if you return it). Renewal pricing is the same as fresh issuance. If your passport has been renewed or your details have changed, you will need to provide updated documents.",
  },
];

const RELATED_PRODUCTS = [
  {
    title: "Class 3 Organization DSC",
    subtitle: "For Companies & LLPs",
    price: "₹1,099",
    description:
      "Organization-level DSC for Indian companies. Aadhaar eKYC, issued in 30 minutes. Choose from 4 Certifying Authorities.",
    link: "/products#class3-org",
    badge: "Most Popular",
    badgeColor: "bg-brand-cobalt",
  },
  {
    title: "DGFT Digital Signature",
    subtitle: "For Import/Export",
    price: "₹2,199",
    description:
      "Specialized DSC for DGFT portal filings. Required for IEC holders and foreign trade businesses.",
    link: "/products#dgft",
    badge: "Import / Export",
    badgeColor: "bg-indigo-500",
  },
  {
    title: "Class 3 Combo DSC",
    subtitle: "Sign + Encrypt",
    price: "₹1,599",
    description:
      "Combined signing and encryption certificate. Mandatory for e-Tendering portals and encrypted submissions.",
    link: "/products#class3-combo",
    badge: "Best for Tenders",
    badgeColor: "bg-brand-saffron",
  },
  {
    title: "USB Crypto Tokens",
    subtitle: "Hardware Security",
    price: "₹500",
    description:
      "FIPS-certified USB tokens from HyperSecu, WatchData, MToken & more. Required for all new DSC certificates.",
    link: "/products#usb-tokens",
    badge: "Hardware",
    badgeColor: "bg-gray-600",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ Accordion Component                                                    */
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
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="w-6 h-6 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 mt-0.5">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-rose-500" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-rose-500" />
          )}
        </div>
        <span className="font-display font-semibold text-sm text-foreground leading-relaxed">
          {question}
        </span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pl-15">
          <p className="text-sm text-muted-foreground leading-relaxed pl-10">
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

export default function ForeignNationalDSCPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------------- */}
        {/*  Hero Section                                                     */}
        {/* ---------------------------------------------------------------- */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-rose-500/[0.08] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-white/40 mb-8"
            >
              <Link
                href="/"
                className="hover:text-white/70 transition-colors"
              >
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
              <span className="text-white/70 font-medium">
                Foreign National DSC
              </span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/15 border border-rose-500/20 mb-6">
                  <Globe className="w-3.5 h-3.5 text-rose-400" />
                  <span className="text-xs font-bold text-rose-300 tracking-wide uppercase">
                    For NRIs &amp; Foreign Directors
                  </span>
                </div>

                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] text-white mb-4 leading-tight text-balance">
                  Foreign National{" "}
                  <span className="text-gradient-cobalt">
                    Digital Signature
                  </span>
                </h1>

                <p className="text-lg text-white/55 leading-relaxed mb-6 max-w-xl">
                  For Non-Resident Indians &amp; Overseas Directors. Video-based
                  KYC — no Aadhaar required. Legally valid for all Indian
                  government portals, company filings, and contract signing.
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-bold text-4xl text-white">
                    ₹8,999
                  </span>
                  <span className="text-base text-white/35 line-through">
                    ₹12,999
                  </span>
                  <span className="text-xs text-brand-emerald font-bold bg-brand-emerald/15 px-2.5 py-1 rounded-full">
                    Save ₹4,000
                  </span>
                </div>
                <p className="text-xs text-white/35 mb-6">
                  Starting price for 1 Year validity. Inclusive of all taxes.
                </p>

                {/* Quick info */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    <BadgeCheck className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-white/70 font-medium">
                      Issued by eMudhra
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    <Video className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-white/70 font-medium">
                      Video KYC (No Aadhaar)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                    <Clock className="w-4 h-4 text-rose-400" />
                    <span className="text-xs text-white/70 font-medium">
                      1 / 2 / 3 Year Validity
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/917990740623?text=Hi%2C%20I%20need%20a%20Foreign%20National%20DSC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Get Foreign National DSC
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
                        +91 93244 62329
                      </span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right — Summary card */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-8 backdrop-blur-sm">
                <h2 className="font-display font-bold text-lg text-white mb-6">
                  Quick Summary
                </h2>
                <div className="space-y-4">
                  {[
                    ["Certificate Type", "Class 3 Digital Signature (Signing)"],
                    ["Target Users", "Foreign Nationals, NRIs, Overseas Directors"],
                    ["KYC Method", "Video KYC with Passport Verification"],
                    ["Certifying Authority", "eMudhra (only CA)"],
                    ["Validity Options", "1 Year / 2 Years / 3 Years"],
                    ["Delivery Time", "2–5 Business Days + Courier"],
                    ["Token Delivery", "International Courier (DHL/FedEx)"],
                    ["Aadhaar Required", "No — Passport based"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-4 text-sm"
                    >
                      <span className="text-white/40 shrink-0">{label}</span>
                      <span className="text-white/80 font-medium text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  What is Foreign National DSC                                      */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Understanding Foreign National DSC
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a Foreign National DSC?
              </h2>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none space-y-5 text-muted-foreground leading-relaxed">
              <p>
                India's digital governance ecosystem requires Digital Signature
                Certificates (DSC) for a wide range of regulatory filings,
                company registrations, tax submissions, and contract
                authentication. A DSC issued under the Indian Information
                Technology Act, 2000, serves as the electronic equivalent of a
                handwritten signature and is legally recognized for all
                electronic transactions in India.
              </p>
              <p>
                For Indian residents, the process is straightforward — Aadhaar-based
                eKYC allows DSC issuance in under 30 minutes with zero
                paperwork. However, <strong>foreign nationals</strong>{" "}
                (non-Indian passport holders) and{" "}
                <strong>Non-Resident Indians (NRIs)</strong> who do not possess a
                valid Aadhaar card cannot use this streamlined process.
              </p>
              <p>
                This is where the <strong>Foreign National DSC</strong> comes in.
                It is a Class 3 Digital Signature Certificate issued through a
                special <strong>video-based Know Your Customer (KYC)</strong>{" "}
                process that uses passport verification instead of Aadhaar. The
                Controller of Certifying Authorities (CCA), the apex body
                governing digital signatures in India, has approved this
                alternative verification method specifically for foreign
                nationals and NRIs who cannot authenticate via Aadhaar.
              </p>
              <p>
                Under the CCA guidelines, the video KYC process involves a live
                video call with a trained verification officer who confirms the
                applicant's identity by matching their face to their passport
                photograph, verifying passport details, and recording the
                applicant's consent. This process is more thorough and
                time-consuming than Aadhaar eKYC, but it ensures that foreign
                nationals receive a DSC that carries the same legal weight and
                technical specifications as any other Class 3 DSC issued in
                India.
              </p>
              <p>
                Currently, <strong>eMudhra</strong> is the only Certifying
                Authority (CA) in India that has the CCA-approved video KYC
                infrastructure to issue DSC to foreign nationals. eMudhra is
                India's largest and most established CA, publicly listed on BSE
                and NSE, and processes over 50% of all DSCs issued in the
                country. Their investment in video verification technology makes
                them the sole option for foreign national DSC — other CAs like
                Capricorn, Pantasign, and SignX currently only
                support Aadhaar-based eKYC.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Who Needs This                                                    */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <Users className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Who Needs This
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs a Foreign National DSC?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                If you are a non-Indian passport holder or NRI involved in any
                business, investment, or regulatory activity in India, you likely
                need a Foreign National DSC.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {WHO_NEEDS.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-rose-500/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-500/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Use Cases                                                         */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <Stamp className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Use Cases
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Where You Will Use Foreign National DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your Foreign National DSC works across all Indian government
                portals and is accepted for all electronic filings that require
                a Class 3 Digital Signature.
              </p>
            </div>

            <div className="space-y-6">
              {USE_CASES.map(({ portal, icon: Icon, color, tasks, why }) => (
                <div
                  key={portal}
                  className="rounded-2xl border border-border bg-card overflow-hidden hover-lift transition-all duration-300"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-11 h-11 rounded-xl ${color}/10 flex items-center justify-center shrink-0`}
                      >
                        <Icon className={`w-5 h-5 ${color.replace("bg-", "text-")}`} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {portal}
                        </h3>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider mb-3">
                          What You Can Do
                        </h4>
                        <ul className="space-y-2.5">
                          {tasks.map((task) => (
                            <li
                              key={task}
                              className="flex items-start gap-2.5 text-sm text-foreground/80"
                            >
                              <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-muted/50 p-5">
                        <h4 className="text-xs font-bold text-muted-foreground/70 uppercase tracking-wider mb-3">
                          Why DSC is Required
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {why}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  KYC Process                                                       */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <Video className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Video KYC Process
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How Video KYC Works for Foreign Nationals
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Unlike regular DSC which uses automated Aadhaar eKYC (30
                minutes), Foreign National DSC requires a manual video
                verification process that takes 2–5 business days.
              </p>
            </div>

            <div className="space-y-6">
              {KYC_STEPS.map(
                ({ step, title, description, timeline, icon: Icon }) => (
                  <div
                    key={step}
                    className="flex gap-6 items-start group"
                  >
                    {/* Step indicator */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-rose-500 text-white font-display font-bold text-lg flex items-center justify-center shadow-lg shadow-rose-500/20">
                        {step}
                      </div>
                      {step < KYC_STEPS.length && (
                        <div className="w-px h-full min-h-8 bg-rose-500/20 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="rounded-2xl border border-border bg-card p-6 flex-1 hover-lift transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-rose-500" />
                          <h3 className="font-display font-bold text-base text-foreground">
                            {title}
                          </h3>
                        </div>
                        <span className="text-xs font-medium text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-full">
                          {timeline}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-10 rounded-2xl bg-rose-500/[0.05] border border-rose-500/15 p-6">
              <h3 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rose-500" />
                Why Does Foreign National DSC Take Longer?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Regular DSC uses Aadhaar eKYC — an automated, API-driven process
                that verifies your identity using UIDAI's database in seconds.
                Foreign National DSC replaces this with a manual, human-verified
                process: documents are pre-checked by hand, a live video call is
                conducted by a trained officer, passport security features are
                visually inspected, and the recording is reviewed for compliance.
                This multi-step manual process, combined with international
                courier delivery of the USB token, means the end-to-end timeline
                is 2–5 business days for DSC issuance plus 5–7 days for
                international delivery — compared to 30 minutes for regular DSC.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Required Documents                                                */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <FileText className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Required Documents
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Documents Required for Foreign National DSC
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Keep these documents ready before starting your application.
                All copies must be attested or notarized.
              </p>
            </div>

            <div className="space-y-4">
              {REQUIRED_DOCUMENTS.map(
                ({ document, details, mandatory }) => (
                  <div
                    key={document}
                    className="rounded-xl border border-border bg-card p-5 flex items-start gap-4 hover-lift transition-all duration-300"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        mandatory
                          ? "bg-rose-500/10 text-rose-500"
                          : "bg-amber-500/10 text-amber-500"
                      }`}
                    >
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-display font-bold text-sm text-foreground">
                          {document}
                        </h3>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            mandatory
                              ? "bg-rose-500/10 text-rose-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {mandatory ? "Mandatory" : "If Applicable"}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {details}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Certifying Authority                                              */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <BadgeCheck className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Certifying Authority
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Issued Exclusively by eMudhra
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/[0.08] border border-rose-500/15 flex items-center justify-center shrink-0">
                  <Shield className="w-7 h-7 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    eMudhra Limited
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    India's Largest Certifying Authority | BSE & NSE Listed
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  eMudhra is the only Certifying Authority (CA) in India
                  currently authorized by the Controller of Certifying
                  Authorities (CCA) to issue Digital Signature Certificates to
                  foreign nationals through video-based KYC. This exclusivity
                  exists because eMudhra is the only CA that has made the
                  significant investment in building the video KYC infrastructure
                  required by CCA guidelines for non-Aadhaar verification.
                </p>
                <p>
                  The CCA's guidelines specify that for applicants who cannot
                  authenticate via Aadhaar (which includes all foreign nationals
                  and many NRIs), the Certifying Authority must conduct a live
                  video verification with a trained officer, record the session,
                  verify physical passport documents on camera, and maintain
                  audit logs for compliance. Setting up this infrastructure
                  requires substantial technology investment, trained personnel
                  across time zones, and regulatory approval from CCA.
                </p>
                <p>
                  Other major CAs in India — Capricorn, Pantasign,
                  and SignX — currently support only
                  Aadhaar-based eKYC and have not yet built the video
                  verification capability. As a result, eMudhra remains the sole
                  option for Foreign National DSC. While this limits price
                  competition, eMudhra's status as India's largest CA (processing
                  over 50% of all DSCs in the country) and its public listing on
                  BSE and NSE ensure reliability, regulatory compliance, and
                  continuity of service.
                </p>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "DSC Market Share",
                    value: "50%+",
                    sub: "India's largest CA",
                  },
                  {
                    label: "Listed On",
                    value: "BSE & NSE",
                    sub: "Publicly traded company",
                  },
                  {
                    label: "CCA License",
                    value: "Active",
                    sub: "Licensed since 2008",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-muted/50 p-4 text-center"
                  >
                    <div className="font-display font-bold text-xl text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-muted-foreground/60 mt-0.5">
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Pricing                                                           */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <CreditCard className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Pricing
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Foreign National DSC Pricing
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Issued exclusively by eMudhra. Pricing is higher than regular
                DSC due to manual video KYC verification and international
                courier delivery.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {PRICING.map(({ validity, price, mrp }, index) => (
                <div
                  key={validity}
                  className={`rounded-2xl border p-6 text-center hover-lift transition-all duration-300 ${
                    index === 0
                      ? "border-rose-500/30 bg-rose-500/[0.02] shadow-lg shadow-rose-500/5"
                      : "border-border bg-card"
                  }`}
                >
                  {index === 0 && (
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-full mb-4">
                      <Star className="w-2.5 h-2.5 fill-rose-500" />
                      MOST CHOSEN
                    </div>
                  )}
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    {validity}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    eMudhra Foreign National DSC
                  </p>
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="font-display font-bold text-3xl text-foreground">
                      ₹{price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-through mb-4">
                    MRP ₹{mrp.toLocaleString("en-IN")}
                  </p>
                  <div className="text-xs text-brand-emerald font-bold bg-brand-emerald/10 px-2.5 py-1 rounded-full inline-block mb-5">
                    Save ₹{(mrp - price).toLocaleString("en-IN")}
                  </div>

                  <ul className="space-y-2.5 text-left mb-6">
                    {[
                      "Video KYC verification",
                      "USB token included",
                      "International courier",
                      "Dedicated NRI support",
                      "All Indian portals",
                    ].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <Check className="w-4 h-4 text-brand-emerald shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/917990740623?text=Hi%2C%20I%20need%20Foreign%20National%20DSC%20-%20${encodeURIComponent(validity)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className={`w-full rounded-xl font-semibold h-10 ${
                        index === 0
                          ? "bg-rose-500 text-white hover:bg-rose-600 shimmer"
                          : "bg-foreground/5 text-foreground hover:bg-foreground/10"
                      }`}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6">
              All prices inclusive of GST. USB crypto token and international
              courier charges included. Additional customs duty, if applicable,
              is borne by the recipient.
            </p>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  Features                                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <Star className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Features
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What Makes Foreign National DSC Different
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Designed specifically for non-Indian residents with a process
                that does not depend on Indian identity infrastructure.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-rose-500/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-500/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-rose-500" />
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
        {/*  Important Notes for NRIs                                          */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <Mail className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Important Notes
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Important Information for NRIs
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Essential details that NRIs and foreign nationals should know
                before applying for a Foreign National DSC.
              </p>
            </div>

            <div className="space-y-5">
              {NRI_NOTES.map(({ title, content }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border bg-card p-6 hover-lift transition-all duration-300"
                >
                  <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  FAQ                                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-rose-500" />
                <span className="text-xs font-semibold text-rose-500 tracking-wide uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Foreign National DSC — FAQ
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Answers to the most common questions about Digital Signature
                Certificates for foreign nationals and NRIs.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_DATA.map(({ question, answer }, index) => (
                <FAQItem
                  key={question}
                  question={question}
                  answer={answer}
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
        {/*  Related Products                                                  */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Related Products
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore other Digital Signature Certificates and accessories
                from our complete product range.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {RELATED_PRODUCTS.map(
                ({ title, subtitle, price, description, link, badge, badgeColor }) => (
                  <Link
                    key={title}
                    href={link}
                    className="rounded-2xl border border-border bg-card p-6 hover-lift transition-all duration-300 hover:border-brand-cobalt/20 block"
                  >
                    <div
                      className={`inline-flex items-center gap-1 text-[10px] font-bold text-white px-2 py-0.5 rounded-full mb-3 ${badgeColor}`}
                    >
                      {badge}
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-0.5">
                      {title}
                    </h3>
                    <p className="text-xs text-brand-cobalt font-semibold mb-2">
                      {subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-lg text-foreground">
                        {price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/*  CTA                                                               */}
        {/* ---------------------------------------------------------------- */}
        <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 -left-20 w-72 h-72 bg-rose-500/[0.08] rounded-full blur-[100px]" />
          <div className="absolute bottom-10 -right-20 w-72 h-72 bg-brand-cobalt/[0.08] rounded-full blur-[100px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <Globe className="w-3.5 h-3.5 text-rose-400" />
              <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                Available Worldwide
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Get Your Foreign National DSC
            </h2>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-xl mx-auto">
              Whether you are an NRI in the USA, UK, UAE, Singapore, or anywhere
              in the world — we will help you get your Indian Digital Signature
              Certificate with dedicated support throughout the process.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a
                href="https://wa.me/917990740623?text=Hi%2C%20I%20need%20a%20Foreign%20National%20DSC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-rose-500 text-white font-semibold hover:bg-rose-600 h-12 px-8 group shimmer"
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
              <a href="mailto:dsc@signsecure.in">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Us
                  </span>
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                CCA Licensed CA
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                2–5 Day Processing
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5" />
                Global Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <Headset className="w-3.5 h-3.5" />
                Dedicated NRI Support
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
