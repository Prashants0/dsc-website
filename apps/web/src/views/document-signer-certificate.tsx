"use client";

import Link from "next/link";
import { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  Stamp,
  Building2,
  Cpu,
  FileText,
  Repeat,
  Lock,
  Clock,
  BadgeCheck,
  Headset,
  MessageCircle,
  Phone,
  ServerCog,
} from "lucide-react";

const PRICING = [
  { validity: "1 Year", price: 2999, original: 4999 },
  { validity: "2 Years", price: 3999, original: 6499 },
  { validity: "3 Years", price: 4999, original: 7999 },
];

const KEY_FEATURES = [
  {
    icon: Building2,
    title: "Issued in Organization's Name",
    desc: "The certificate carries your organization's identity, not an individual's — ideal for automated, system-level signing.",
  },
  {
    icon: Repeat,
    title: "Sign Documents in Bulk",
    desc: "Digitally sign thousands of invoices, payslips and PDFs automatically without manual intervention for each file.",
  },
  {
    icon: ServerCog,
    title: "Software & API Integration",
    desc: "Integrates with ERP, HR, accounting and e-invoicing software via PKCS#11, HSM or USB token-based signing.",
  },
  {
    icon: Lock,
    title: "Tamper-Proof & Legally Valid",
    desc: "Every signed document is tamper-evident and legally valid under the IT Act, 2000 — just like a handwritten signature.",
  },
];

const USE_CASES = [
  "Bulk invoice signing",
  "Automated PDF signing",
  "e-Invoicing under GST",
  "Payslip & HR document signing",
  "ERP / accounting integration",
  "Digitally signed agreements & contracts",
  "Board resolutions at scale",
  "API-based / server-side signing",
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Share Your Requirement",
    desc: "Tell us your signing volume and the software you want to integrate with. Our team recommends the right setup (USB token or HSM).",
  },
  {
    step: 2,
    title: "Organization eKYC & Verification",
    desc: "Complete organization-level verification with the required documents. The certificate is issued in your organization's name.",
  },
  {
    step: 3,
    title: "Install on Token or HSM",
    desc: "The Document Signer Certificate is provisioned onto a secure USB token or your HSM for automated, server-side signing.",
  },
  {
    step: 4,
    title: "Integrate & Start Signing",
    desc: "Connect it to your application via PKCS#11/API and start signing documents in bulk. We provide free online setup support.",
  },
];

const FAQ_DATA = [
  {
    q: "What is a Document Signer Certificate?",
    a: "A Document Signer Certificate is an organization-level Digital Signature Certificate used to sign documents automatically, in bulk, or through software — without a person manually signing each file. It is issued in the organization's name and is commonly used for e-invoicing, bulk PDF signing, payslips, and ERP-integrated signing.",
  },
  {
    q: "How is it different from a Class 3 Individual DSC?",
    a: "A Class 3 Individual DSC is issued to a person and used to sign one document at a time, usually via a USB token. A Document Signer Certificate is issued to an organization and is designed for automated, high-volume signing integrated into software or a server (HSM), with no manual step per document.",
  },
  {
    q: "Can I integrate it with my ERP or accounting software?",
    a: "Yes. The Document Signer Certificate works with ERP, HR, accounting and e-invoicing systems through standard interfaces like PKCS#11 and HSM-based APIs. Our team helps you with the integration during setup.",
  },
  {
    q: "Is it valid for e-invoicing under GST?",
    a: "Yes. A Document Signer Certificate can be used to digitally sign e-invoices and other bulk documents with full legal validity under the IT Act, 2000.",
  },
  {
    q: "Do I need a USB token or an HSM?",
    a: "For moderate volumes, a USB token is sufficient. For high-volume, server-side or fully automated signing, a Hardware Security Module (HSM) is recommended. We help you choose the right option based on your needs.",
  },
  {
    q: "How much does a Document Signer Certificate cost?",
    a: "Our Document Signer Certificate starts at ₹2,999 for 1-year validity (organization-level). Pricing varies with validity and storage option (token vs HSM). Contact us for a tailored quote for high-volume or HSM-based deployments.",
  },
];

export default function DocumentSignerPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const whatsappHref =
    "https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20buy%20a%20Document%20Signer%20Certificate";

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ─── Breadcrumb ─── */}
        <nav className="bg-muted/30 border-b border-border" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
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
                Document Signer Certificate
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-teal-500/[0.07] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-cobalt/[0.05] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/[0.12] border border-teal-500/[0.2] mb-6">
                  <Stamp className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-xs font-semibold text-teal-300 tracking-wide uppercase">
                    For Bulk &amp; Automated Signing
                  </span>
                </div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.25rem] text-white mb-4 leading-tight">
                  Document Signer{" "}
                  <span className="text-gradient-cobalt">Certificate</span>
                </h1>
                <p className="text-base text-white/55 leading-relaxed mb-8 max-w-xl">
                  An organization-level certificate to digitally sign documents in
                  bulk or through automated systems — invoices, payslips,
                  agreements and PDFs — without manually signing each file.
                </p>

                <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-sm text-white/50">Starting at</span>
                  <span className="font-display font-bold text-4xl text-white">
                    &#8377;2,999
                  </span>
                  <span className="text-sm text-white/40">/ year, incl. GST</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <a href="/contact">
                    <Button
                      size="lg"
                      className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                    >
                      <span className="flex items-center gap-2">
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Button>
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: ShieldCheck, label: "CCA Approved" },
                    { icon: Cpu, label: "HSM / Token Support" },
                    { icon: Clock, label: "Quick Issuance" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-xs text-white/50">
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] flex items-center justify-center">
                        <Icon className="w-3 h-3 text-teal-400" />
                      </div>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing card */}
              <div className="hidden lg:block">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
                  <h2 className="font-display font-bold text-lg text-white mb-6">
                    Pricing &amp; Validity
                  </h2>
                  <div className="space-y-3">
                    {PRICING.map((tier) => (
                      <div
                        key={tier.validity}
                        className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
                      >
                        <span className="text-sm font-medium text-white/80">
                          {tier.validity}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-bold text-xl text-white">
                            &#8377;{tier.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-xs text-white/30 line-through">
                            &#8377;{tier.original.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-white/40 mt-5 leading-relaxed">
                    Organization-level certificate. Final price depends on storage
                    option (USB token or HSM) and signing volume. Contact us for
                    high-volume &amp; HSM deployments.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-sm text-white/50">
                    <BadgeCheck className="w-4 h-4 text-teal-400" />
                    From eMudhra, Capricorn, Pantasign &amp; SignX
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── What is it ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a Document Signer Certificate?
              </h2>
            </div>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed">
              <p>
                A Document Signer Certificate is an organization-level Digital
                Signature Certificate designed to sign documents automatically and
                in bulk — without a person having to manually sign each file. It is
                issued in the name of the organization rather than an individual,
                which makes it ideal for system-driven and server-side signing.
              </p>
              <p>
                Businesses use Document Signer Certificates to digitally sign large
                volumes of invoices, payslips, statements, and agreements directly
                from their ERP, HR, or accounting software. The certificate can be
                stored on a USB token for moderate volumes or on a Hardware Security
                Module (HSM) for high-volume, fully automated signing pipelines.
              </p>
              <p>
                Every document signed with a Document Signer Certificate is
                tamper-evident and carries full legal validity under the Information
                Technology Act, 2000 — the same legal standing as a handwritten
                signature.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Key Features ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Key Features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {KEY_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Use Cases ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Common Use Cases
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Wherever you need to sign documents at scale, the Document Signer
                Certificate fits in.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {USE_CASES.map((use) => (
                <div
                  key={use}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/85">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Get Your Document Signer Certificate
              </h2>
            </div>
            <div className="space-y-4">
              {HOW_IT_WORKS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500 text-white flex items-center justify-center font-display font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display font-semibold text-base text-foreground pr-4">
                      {faq.q}
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
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-teal-500/[0.1] rounded-full blur-[120px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Automate Your Document Signing
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Get a free consultation and a tailored quote for your signing volume —
              whether you need a single token or a full HSM-based pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/contact">
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 shimmer"
                >
                  Get Free Consultation
                </Button>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40 mt-8">
              {["CCA Approved", "HSM & Token Support", "ERP Integration", "Free Online Support"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Headset className="w-3 h-3 text-teal-400" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
