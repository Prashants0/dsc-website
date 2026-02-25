import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRICING_DATA = [
  {
    product: "Class 3 Individual (Signature)",
    "1yr": 899,
    "2yr": 1399,
    "3yr": 1799,
  },
  {
    product: "Class 3 Organization (Signature)",
    "1yr": 1099,
    "2yr": 1599,
    "3yr": 1999,
  },
  {
    product: "Class 3 Individual (Encryption)",
    "1yr": 899,
    "2yr": 1399,
    "3yr": 1799,
  },
  {
    product: "Class 3 Organization (Encryption)",
    "1yr": 1099,
    "2yr": 1599,
    "3yr": 1999,
  },
  {
    product: "Class 3 Combo (Sign + Encrypt)",
    "1yr": 1599,
    "2yr": 2199,
    "3yr": 2799,
  },
  {
    product: "DGFT Individual",
    "1yr": 2199,
    "2yr": 2799,
    "3yr": 3399,
  },
  {
    product: "DGFT Organization",
    "1yr": 2499,
    "2yr": 2999,
    "3yr": 3599,
  },
  {
    product: "Foreign National DSC",
    "1yr": 8999,
    "2yr": 10999,
    "3yr": 14999,
  },
];

const ADDONS = [
  { item: "USB Crypto Token (New)", price: 500 },
  { item: "Doorstep Delivery", price: 0, label: "FREE" },
  { item: "Re-issuance (within validity)", price: 0, label: "FREE" },
  { item: "WhatsApp + Phone Support", price: 0, label: "FREE" },
];

export function PricingTable() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
            <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
              Transparent Pricing
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
            Simple, Competitive Pricing
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            No hidden fees. All prices include GST. Compare and choose the best
            plan for your needs.
          </p>
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
                {PRICING_DATA.map((row, index) => (
                  <tr
                    key={row.product}
                    className={`border-t border-border/50 hover:bg-brand-cobalt/[0.02] transition-colors ${
                      index % 2 === 0 ? "" : "bg-muted/[0.025]"
                    }`}
                  >
                    <td className="py-3.5 px-5 text-sm font-medium text-foreground">
                      {row.product}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-sm font-semibold text-foreground tabular-nums">
                        &#8377;{row["1yr"].toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center bg-brand-cobalt/[0.025]">
                      <span className="text-sm font-bold text-brand-cobalt tabular-nums">
                        &#8377;{row["2yr"].toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="text-sm font-semibold text-foreground tabular-nums">
                        &#8377;{row["3yr"].toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <a
                        href="/products"
                        className="text-xs font-semibold text-brand-cobalt hover:text-brand-cobalt-bright transition-colors"
                      >
                        Buy Now
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ADDONS.map(({ item, price, label }) => (
            <div
              key={item}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-card"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-cobalt shrink-0" />
              <div className="flex-1">
                <span className="text-xs font-medium text-foreground">
                  {item}
                </span>
              </div>
              <span
                className={`text-xs font-bold ${
                  price === 0 ? "text-brand-emerald" : "text-foreground"
                }`}
              >
                {label || `\u20B9${price}`}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="/products">
            <Button className="rounded-xl bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright h-11 px-8 group shimmer">
              <span className="flex items-center gap-2">
                Get Your DSC Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
