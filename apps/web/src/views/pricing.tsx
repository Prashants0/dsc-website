"use client";

import {
  SiteHeader,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";
import {
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  Phone,
  Truck,
  RefreshCw,
  Headset,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const PRICING_DATA = [
  { product: "Class 3 Individual (Signature)", category: "individual", "1yr": 899, "2yr": 1399, "3yr": 1799, popular: false },
  { product: "Class 3 Organization (Signature)", category: "organization", "1yr": 1099, "2yr": 1599, "3yr": 1999, popular: true },
  { product: "Class 3 Individual (Encryption)", category: "individual", "1yr": 899, "2yr": 1399, "3yr": 1799, popular: false },
  { product: "Class 3 Organization (Encryption)", category: "organization", "1yr": 1099, "2yr": 1599, "3yr": 1999, popular: false },
  { product: "Class 3 Combo (Sign + Encrypt)", category: "combo", "1yr": 1599, "2yr": 2199, "3yr": 2799, popular: false },
  { product: "DGFT Individual", category: "dgft", "1yr": 2199, "2yr": 2799, "3yr": 3399, popular: false },
  { product: "DGFT Organization", category: "dgft", "1yr": 2499, "2yr": 2999, "3yr": 3599, popular: false },
  { product: "Foreign National DSC", category: "foreign", "1yr": 8999, "2yr": 10999, "3yr": 14999, popular: false },
];

const ADDONS = [
  { item: "USB Crypto Token (New)", price: 500, label: null, icon: ShieldCheck, description: "FIPS certified. ePass 2003, Proxkey, MToken & more." },
  { item: "Doorstep Delivery", price: 0, label: "FREE", icon: Truck, description: "Pan-India free shipping via courier." },
  { item: "Re-issuance (within validity)", price: 0, label: "FREE", icon: RefreshCw, description: "Lost token? Get a free replacement DSC." },
  { item: "WhatsApp + Phone Support", price: 0, label: "FREE", icon: Headset, description: "Free online assistance via call or message." },
];

const COMPETITOR_COMPARE = [
  { feature: "Class 3 Org DSC (1 Year)", us: "Rs. 1,099", eMudhra: "Rs. 1,550", others: "Rs. 1,400 - 2,000", winner: true },
  { feature: "Multiple CA Options", us: "4 CAs", eMudhra: "1 (Self)", others: "1-2 CAs", winner: true },
  { feature: "USB Token Brands", us: "5+ Brands", eMudhra: "1 Brand", others: "1-2 Brands", winner: true },
  { feature: "Delivery Time", us: "30 Minutes", eMudhra: "30 Minutes", others: "1-24 Hours", winner: false },
  { feature: "Free Re-issuance", us: "Yes", eMudhra: "Yes (eMudhra only)", others: "Limited", winner: true },
  { feature: "Free Online WhatsApp Support", us: "Yes", eMudhra: "Limited", others: "No", winner: true },
  { feature: "Free Pan-India Shipping", us: "Yes", eMudhra: "Varies", others: "Extra charge", winner: true },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Individual", value: "individual" },
  { label: "Organization", value: "organization" },
  { label: "Combo", value: "combo" },
  { label: "DGFT", value: "dgft" },
  { label: "Foreign National", value: "foreign" },
];

export default function PricingPage() {
  const [filter, setFilter] = useState("all");

  const filteredPricing =
    filter === "all"
      ? PRICING_DATA
      : PRICING_DATA.filter((row) => row.category === filter);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-saffron/[0.12] border border-brand-saffron/20 mb-6">
                <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
                  Transparent Pricing &middot; No Hidden Fees
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance leading-tight">
                Simple, Honest Pricing.{" "}
                <span className="text-gradient-saffron">Best in Market.</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
                Compare prices across all certificate types and validity
                periods. All prices include GST. What you see is what you pay.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    filter === f.value
                      ? "bg-brand-cobalt text-white shadow-lg shadow-brand-cobalt/20"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left py-4 px-5 text-xs font-semibold uppercase tracking-wider">
                        Certificate Type
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-semibold uppercase tracking-wider">
                        1 Year
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-semibold uppercase tracking-wider relative">
                        <span className="relative">
                          2 Years
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] font-bold text-brand-saffron bg-brand-saffron/20 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                            BEST VALUE
                          </span>
                        </span>
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-semibold uppercase tracking-wider">
                        3 Years
                      </th>
                      <th className="py-4 px-4 w-28" />
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPricing.map((row, index) => (
                      <tr
                        key={row.product}
                        className={`border-t border-border/50 hover:bg-brand-cobalt/[0.02] transition-colors ${
                          row.popular
                            ? "bg-brand-cobalt/[0.025] border-l-2 border-l-brand-cobalt"
                            : index % 2 === 0
                              ? ""
                              : "bg-muted/[0.025]"
                        }`}
                      >
                        <td className="py-4 px-5 text-sm font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            {row.product}
                            {row.popular && (
                              <span className="text-[9px] font-bold text-brand-cobalt bg-brand-cobalt/10 px-1.5 py-0.5 rounded-full">
                                POPULAR
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-sm font-semibold text-foreground tabular-nums">
                            &#8377;{row["1yr"].toLocaleString("en-IN")}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center bg-brand-cobalt/[0.025]">
                          <span className="text-sm font-bold text-brand-cobalt tabular-nums">
                            &#8377;{row["2yr"].toLocaleString("en-IN")}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-sm font-semibold text-foreground tabular-nums">
                            &#8377;{row["3yr"].toLocaleString("en-IN")}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <Link href="/products">
                            <Button
                              size="sm"
                              className="rounded-lg bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright text-xs h-8 px-4"
                            >
                              Buy Now
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              All prices are inclusive of GST. Prices may vary based on
              Certifying Authority selected.
            </p>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h3 className="font-display font-bold text-2xl text-foreground text-center mb-10">
              Included With Every DSC
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ADDONS.map(({ item, price, label, icon: Icon, description }) => (
                <div
                  key={item}
                  className="flex flex-col p-5 rounded-xl border border-border bg-card hover:border-brand-cobalt/20 transition-colors hover-lift"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cobalt/[0.06] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-brand-cobalt" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {item}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 flex-1">
                    {description}
                  </p>
                  <span
                    className={`text-sm font-bold self-start ${
                      price === 0 ? "text-brand-emerald" : "text-foreground"
                    }`}
                  >
                    {label || `\u20B9${price}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitor Comparison */}
        <section className="py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-emerald/[0.08] border border-brand-emerald/15 mb-5">
                <span className="text-xs font-semibold text-brand-emerald tracking-wide uppercase">
                  Why We're Better
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
                How We Compare
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                See how SignSecure stacks up against other DSC providers.
                Better pricing, more CA options, more token brands, superior support.
              </p>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left py-4 px-5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-bold text-brand-cobalt uppercase tracking-wider bg-brand-cobalt/[0.04]">
                        SignSecure
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Direct from CA
                      </th>
                      <th className="text-center py-4 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Other Resellers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPETITOR_COMPARE.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-t border-border/50 hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-3.5 px-5 text-sm font-medium text-foreground">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-brand-cobalt/[0.025]">
                          <span
                            className={`text-sm font-semibold ${
                              row.winner
                                ? "text-brand-cobalt"
                                : "text-foreground"
                            }`}
                          >
                            {row.us}
                            {row.winner && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald inline ml-1.5" />
                            )}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center text-sm text-muted-foreground">
                          {row.eMudhra}
                        </td>
                        <td className="py-3.5 px-4 text-center text-sm text-muted-foreground">
                          {row.others}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ-like Pricing Questions */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h3 className="font-display font-bold text-2xl text-foreground text-center mb-10">
              Pricing FAQs
            </h3>
            <div className="space-y-4">
              {[
                { q: "Are there any hidden charges?", a: "No. The prices listed include GST and all processing charges. The only optional add-on is the USB Crypto Token at Rs. 500 if you don't already have one." },
                { q: "Why are your prices lower than the CA's own website?", a: "As a high-volume authorized reseller, we negotiate bulk rates with multiple CAs. We pass these savings directly to our customers while maintaining the same quality and validity of certificates." },
                { q: "Can I renew my existing DSC at a discounted rate?", a: "Yes! Renewals are typically cheaper as you don't need a new USB token. Contact us for renewal-specific pricing." },
                { q: "Do I need to buy a new USB token every time?", a: "No. If you already have a FIPS-certified USB token, you can reuse it for renewals. Only new token purchases are required if you don't have one. We sell ePass 2003, Proxkey & MToken." },
                { q: "Is there a bulk discount for organizations?", a: "Yes, we offer significant discounts for bulk DSC purchases (10+ certificates). Contact us for a custom quote." },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-display font-bold text-sm text-foreground mb-2 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-cobalt shrink-0 mt-0.5" />
                    {q}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <Gift className="w-12 h-12 text-brand-saffron mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
              Get the Best Deal on Your DSC
            </h2>
            <p className="text-base text-white/45 leading-relaxed mb-8 max-w-xl mx-auto">
              Need a custom quote for bulk orders or have special requirements?
              Talk to our DSC experts for personalized pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/products">
                <Button
                  size="lg"
                  className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-12 px-8 group shimmer"
                >
                  <span className="flex items-center gap-2">
                    Buy DSC Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </Link>
              <a href="tel:+919324462329">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white dark:bg-transparent dark:border-white/20 dark:hover:bg-white/10 h-12 px-8"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Request Custom Quote
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
