"use client";

import { useState } from "react";
import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import { Button } from "@/components/ui/button";
import {
  Handshake,
  TrendingUp,
  Wallet,
  LayoutDashboard,
  Headset,
  Zap,
  BadgeCheck,
  Users,
  Building2,
  Calculator,
  Laptop,
  Briefcase,
  ArrowRight,
  Check,
  ChevronDown,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const BENEFITS = [
  {
    icon: Wallet,
    title: "Wholesale Partner Rates",
    desc: "Get the best bulk pricing across all our Certifying Authorities and keep healthy margins on every certificate you sell.",
  },
  {
    icon: LayoutDashboard,
    title: "Partner Dashboard",
    desc: "Order, track and manage all your DSC applications from a single online dashboard with real-time status.",
  },
  {
    icon: Zap,
    title: "Fast 1-Day Issuance",
    desc: "Serve your customers instantly with paperless Aadhaar eKYC and certificates issued within a day.",
  },
  {
    icon: BadgeCheck,
    title: "Multi-CA Access",
    desc: "Offer your customers a choice of eMudhra, Capricorn, Pantasign & SignX — all from one partner account.",
  },
  {
    icon: Headset,
    title: "Dedicated Partner Support",
    desc: "A dedicated support team helps you with onboarding, applications, and any technical queries — free of charge.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    desc: "Add a high-demand, recurring-revenue product to your offering with zero inventory and no setup cost.",
  },
];

const WHO_CAN_PARTNER = [
  { icon: Calculator, title: "CAs, CS & Tax Consultants", desc: "Add DSC issuance to the compliance services you already provide your clients." },
  { icon: Laptop, title: "IT & Software Firms", desc: "Bundle DSCs with your accounting, ERP or e-filing solutions." },
  { icon: Briefcase, title: "Entrepreneurs & Agencies", desc: "Start a profitable DSC business with no inventory and full back-end support." },
  { icon: Building2, title: "Existing Resellers", desc: "Switch to better rates, faster issuance and a wider choice of Certifying Authorities." },
];

const STEPS = [
  { step: 1, title: "Apply for Free", desc: "Fill in the partner enquiry form below or message us on WhatsApp. There is no joining fee." },
  { step: 2, title: "Get Approved & Onboarded", desc: "Our team verifies your details and activates your partner account with wholesale rates." },
  { step: 3, title: "Access Your Dashboard", desc: "Start placing DSC orders for your customers through your partner dashboard." },
  { step: 4, title: "Sell & Earn", desc: "Issue DSCs in minutes, delight your customers, and earn on every certificate." },
];

const FAQ_DATA = [
  {
    q: "Is there any fee to become a partner?",
    a: "No. Joining the SignSecure DSC Reseller Partner Program is completely free. There is no joining fee and no inventory to maintain — you only pay the wholesale rate when you place an order for a customer.",
  },
  {
    q: "Who can apply to become a partner?",
    a: "Anyone with a customer base that needs Digital Signature Certificates can apply — Chartered Accountants, Company Secretaries, tax consultants, IT and software firms, business consultants, existing DSC resellers, and entrepreneurs looking to start a DSC business.",
  },
  {
    q: "What margins can I earn?",
    a: "Partners get wholesale rates across all our Certifying Authorities, leaving healthy margins on every certificate. Exact rates depend on your volume — contact us and we'll share the partner rate card.",
  },
  {
    q: "How quickly can I start selling?",
    a: "Once your partner account is approved and activated, you can start placing orders immediately through your dashboard. Most partners are up and running within a day.",
  },
  {
    q: "Do you provide support to partners?",
    a: "Yes. Every partner gets dedicated online support for onboarding, applications, eKYC, installation and any technical queries — free of charge.",
  },
];

export default function BecomePartnerPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* ─── Hero ─── */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="absolute top-16 -left-40 w-[480px] h-[480px] rounded-full bg-brand-saffron/[0.06] blur-[120px]" />
          <div className="absolute -bottom-20 right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-cobalt/[0.05] blur-[100px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/[0.12] border border-brand-saffron/20 mb-6">
                <Handshake className="w-3.5 h-3.5 text-brand-saffron" />
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  DSC Reseller Partner Program
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                Become Our{" "}
                <span className="text-gradient-saffron">Partner</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl mx-auto">
                Earn by reselling government-approved Digital Signature
                Certificates. Get wholesale rates, a partner dashboard, fast
                issuance and dedicated support — with zero inventory and no joining
                fee.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="#apply">
                  <Button
                    size="lg"
                    className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                  >
                    <span className="flex items-center gap-2">
                      Apply to Become a Partner
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </a>
                <a
                  href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20become%20a%20DSC%20reseller%20partner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-12 px-8"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Benefits ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Why Partner With SignSecure
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Everything you need to build a profitable DSC business — backed by
                an authorized multi-CA reseller.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-cobalt" />
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

        {/* ─── Who Can Partner ─── */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
                <Users className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">
                  Who Can Join
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Built for Anyone Serving DSC Customers
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHO_CAN_PARTNER.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-saffron/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-brand-saffron" />
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
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How to Become a Partner
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Get started in four simple steps — it&apos;s free to join.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-cobalt text-white flex items-center justify-center font-display font-bold text-lg mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-bold text-base text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Application Form ─── */}
        <section id="apply" className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: copy */}
              <div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                  Apply to Become a Partner
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Fill in your details and our partnership team will get in touch
                  with the partner rate card and next steps. It&apos;s free to apply.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "No joining fee, no inventory",
                    "Wholesale rates across 4 Certifying Authorities",
                    "Partner dashboard & dedicated support",
                    "Start selling within a day",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <div className="w-5 h-5 rounded-full bg-brand-cobalt/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-cobalt" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="space-y-3">
                  <a
                    href="tel:+919324462329"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-cobalt/[0.06] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-brand-cobalt" />
                    </div>
                    +91 93244 62329
                  </a>
                  <a
                    href="https://wa.me/917990740623?text=Hi%2C%20I%20want%20to%20become%20a%20DSC%20reseller%20partner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </div>
                    +91 79907 40623 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                        placeholder="Rajesh Mehta"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={form.business}
                        onChange={(e) => setForm({ ...form, business: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                        placeholder="Mehta & Associates"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                        placeholder="+91 93244 62329"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-1.5">
                        City
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                        placeholder="Mumbai"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-10 px-4 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all"
                      placeholder="rajesh@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Tell us about your business
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cobalt/50 focus:ring-2 focus:ring-brand-cobalt/10 outline-none transition-all resize-none"
                      placeholder="Your customer base, expected monthly volume, etc."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-11 px-8 group shimmer"
                  >
                    <span className="flex items-center gap-2">
                      Submit Application
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                Partner Program FAQs
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
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
