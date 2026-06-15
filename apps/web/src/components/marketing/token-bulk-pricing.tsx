import { Button } from "@/components/ui/button";
import { Layers, MessageCircle, Phone, Check, Truck } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Quantity-wise bulk pricing for USB token product pages.            */
/*  Replaces the technical-specification blocks with a qty price list. */
/* ------------------------------------------------------------------ */

interface Tier {
  qty: string;
  price: number | null; // null => "Contact Sales"
}

/** Build qty tiers from a single-unit price with standard bulk discounts. */
function buildTiers(single: number): Tier[] {
  const round10 = (n: number) => Math.round(n / 10) * 10;
  return [
    { qty: "1 – 9 units", price: single },
    { qty: "10 units", price: round10(single * 0.92) },
    { qty: "25 units", price: round10(single * 0.86) },
    { qty: "50 units", price: round10(single * 0.8) },
    { qty: "100 units", price: round10(single * 0.75) },
    { qty: "Above 100 units", price: null },
  ];
}

/* Compact card — used in the product hero (dark theme). */
export function TokenBulkPricingCard({
  tokenName,
  singlePrice,
}: {
  tokenName: string;
  singlePrice: number;
}) {
  const tiers = buildTiers(singlePrice);
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
      <div className="flex items-center gap-2 mb-1">
        <Layers className="w-4 h-4 text-brand-saffron" />
        <h2 className="font-display font-bold text-lg text-white">
          Bulk Pricing
        </h2>
      </div>
      <p className="text-xs text-white/40 mb-6">
        Per-unit price (incl. GST) for the {tokenName}. The more you order, the
        less you pay.
      </p>
      <div className="space-y-2.5">
        {tiers.map((tier) => (
          <div
            key={tier.qty}
            className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
          >
            <span className="text-sm text-white/70">{tier.qty}</span>
            {tier.price !== null ? (
              <span className="font-display font-bold text-base text-white">
                &#8377;{tier.price.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-white/40">/unit</span>
              </span>
            ) : (
              <span className="text-sm font-semibold text-brand-saffron">
                Contact Sales
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-2 text-sm text-white/50">
        <Truck className="w-4 h-4 text-brand-emerald" />
        Free shipping across India on bulk orders
      </div>
    </div>
  );
}

/* Full section — replaces the "Technical Specifications" section (light theme). */
export function TokenBulkPricingSection({
  tokenName,
  singlePrice,
}: {
  tokenName: string;
  singlePrice: number;
}) {
  const tiers = buildTiers(singlePrice);
  const waText = encodeURIComponent(
    `Hi, I want bulk / quantity pricing for the ${tokenName} USB token.`,
  );
  const whatsappHref = `https://wa.me/917990740623?text=${waText}`;

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-saffron/[0.08] border border-brand-saffron/15 mb-5">
            <Layers className="w-3.5 h-3.5 text-brand-saffron" />
            <span className="text-xs font-semibold text-brand-saffron tracking-wide uppercase">
              Quantity Pricing
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Bulk &amp; Quantity Price List
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Buying tokens in volume? Get the best per-unit price on the{" "}
            {tokenName}. Prices below are inclusive of GST with free shipping
            across India.
          </p>
        </div>

        <div className="rounded-2xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left font-display font-bold px-6 py-4 w-1/2">
                  Quantity
                </th>
                <th className="text-left font-display font-bold px-6 py-4">
                  Price Per Unit (incl. GST)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tiers.map((tier, index) => (
                <tr
                  key={tier.qty}
                  className={`${
                    index % 2 === 0 ? "bg-card" : "bg-muted/20"
                  } hover:bg-muted/50 transition-colors`}
                >
                  <td className="px-6 py-3.5 font-medium text-foreground">
                    {tier.qty}
                  </td>
                  <td className="px-6 py-3.5">
                    {tier.price !== null ? (
                      <span className="font-display font-bold text-foreground">
                        &#8377;{tier.price.toLocaleString("en-IN")}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-semibold text-brand-cobalt">
                        Contact Sales for best price
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contact-sales CTA */}
        <div className="mt-8 rounded-2xl border border-brand-cobalt/20 bg-brand-cobalt/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-cobalt/[0.1] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-brand-cobalt" />
            </div>
            <div>
              <p className="font-display font-bold text-lg text-foreground">
                Ordering more than 100 tokens?
              </p>
              <p className="text-sm text-muted-foreground">
                Contact our sales team for special wholesale pricing and partner
                rates.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-11 px-6">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Sales
                </span>
              </Button>
            </a>
            <a href="tel:+919324462329">
              <Button
                variant="outline"
                className="rounded-xl h-11 px-6 font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Sales
                </span>
              </Button>
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-brand-emerald" />
          All tokens are CCA-approved, FIPS-certified and ship free across India.
        </p>
      </div>
    </section>
  );
}
