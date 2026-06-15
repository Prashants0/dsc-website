"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Check,
  ChevronRight,
  ChevronDown,
  Clock,
  BadgeCheck,
  Headset,
  MessageCircle,
  Phone,
  FileCheck,
  Users,
  Stamp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import type { UseCaseDscData } from "@/lib/use-case-dsc-data";

/* Generic "how to get it" steps — shared across all use-case pages. */
const STEPS = [
  {
    step: 1,
    title: "Choose Your DSC",
    desc: "Pick the right Class 3 certificate for your needs. Our experts will recommend the best fit in a free consultation.",
  },
  {
    step: 2,
    title: "Complete Paperless eKYC",
    desc: "Verify your identity online using Aadhaar-based eKYC. No paperwork and no office visit required.",
  },
  {
    step: 3,
    title: "Get Your DSC in 30 Minutes",
    desc: "Once verified, your certificate is issued and downloaded onto a secure USB token in as little as 30 minutes.",
  },
  {
    step: 4,
    title: "Register & Start Filing",
    desc: "We help you register the DSC on the relevant government portal so you can start signing right away.",
  },
];

/* Generic "why SignSecure" benefits. */
const WHY_US = [
  { icon: Clock, title: "Issued in 30 Minutes", desc: "Fast, paperless Aadhaar eKYC — get your DSC the same day." },
  { icon: BadgeCheck, title: "4 Certifying Authorities", desc: "Choose from eMudhra, Capricorn, Pantasign & SignX." },
  { icon: Headset, title: "Free Online Support", desc: "Free help with installation, registration & portal setup." },
  { icon: ShieldCheck, title: "CCA Approved", desc: "Government-licensed Class 3 certificates with full legal validity." },
];

export function UseCaseDscPage({ data }: { data: UseCaseDscData }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const whatsappHref = `https://wa.me/917990740623?text=${encodeURIComponent(
    `Hi, I need a ${data.title} (for ${data.portal}). Please help me.`,
  )}`;

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
                {data.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* ─── Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-20 -left-40 w-96 h-96 bg-brand-cobalt/[0.06] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">
                  For {data.portal}
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                {data.title}
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl">
                {data.heroTagline}
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-sm text-white/50">Starting at</span>
                <span className="font-display font-bold text-3xl text-white">
                  &#8377;{data.recommended.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs font-bold bg-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-full">
                  incl. GST
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
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
                <Link href={data.recommended.href}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                  >
                    View {data.recommended.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Overview ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What is a {data.title.replace("DSC", "Digital Signature")}?
              </h2>
            </div>
            <div className="space-y-6">
              {data.intro.map((para, i) => (
                <p key={i} className="text-base text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Who Needs It ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
                <Users className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
                  Who Needs It
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Who Needs a {data.title}?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.whoNeedsIt.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <BadgeCheck className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── What You Can Do ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                What You Can Do on {data.portal.split(" (")[0]}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Your {data.shortName} Digital Signature Certificate is accepted for
                all of the following on the portal.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.uses.map((use) => (
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

        {/* ─── How to Get It ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Get Your {data.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                A simple, 100% paperless process — from application to download in
                under 30 minutes.
              </p>
            </div>
            <div className="space-y-4">
              {STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-cobalt text-white flex items-center justify-center font-display font-bold text-lg">
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

        {/* ─── Why SignSecure ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Choose SignSecure for Your {data.shortName} DSC
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY_US.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-brand-cobalt" />
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Recommended product callout */}
            <div className="mt-12 rounded-2xl border border-brand-cobalt/20 bg-brand-cobalt/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.1] flex items-center justify-center shrink-0">
                  <Stamp className="w-6 h-6 text-brand-cobalt" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-foreground">
                    Recommended: {data.recommended.label}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {data.recommended.note}
                  </p>
                </div>
              </div>
              <Link href={data.recommended.href} className="shrink-0">
                <Button className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-11 px-6 group shimmer">
                  <span className="flex items-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                {data.title}: Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, index) => (
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
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-cobalt/[0.1] rounded-full blur-[120px]" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Get Your {data.title} Today
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-xl mx-auto">
              Talk to our experts for a free consultation. We&apos;ll help you pick
              the right certificate and get you signing on {data.portal.split(" (")[0]}{" "}
              in minutes.
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
                  className="rounded-xl border-white/20 text-white hover:bg-white/10 h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call +91 93244 62329
                  </span>
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40 mt-8">
              {["CCA Approved", "Issued in 30 Minutes", "Free Online Support", "Pan-India Delivery"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <FileCheck className="w-3 h-3 text-brand-emerald" />
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
