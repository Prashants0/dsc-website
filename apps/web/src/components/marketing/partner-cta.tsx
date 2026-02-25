import { Users, ArrowRight, IndianRupee, BarChart3, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const BENEFITS = [
  {
    icon: IndianRupee,
    title: "Earn Rs 30K-1L/month",
    description: "Competitive commissions on every DSC sold through your referrals",
  },
  {
    icon: BarChart3,
    title: "Partner Dashboard",
    description: "Track orders, commissions, and customer status in real-time",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Dedicated account manager and priority processing for your clients",
  },
];

export function PartnerCTA() {
  return (
    <section id="partner" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 grain-overlay" />
      <div className="absolute top-10 -right-40 w-96 h-96 bg-brand-cobalt/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-10 -left-40 w-80 h-80 bg-brand-saffron/[0.04] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.08] border border-brand-cobalt/20 mb-6">
              <Users className="w-3.5 h-3.5 text-brand-cobalt-bright" />
              <span className="text-xs font-semibold text-brand-cobalt-bright tracking-wide uppercase">
                Partner Program
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4 text-balance leading-tight">
              Become a Partner.{" "}
              <span className="text-gradient-cobalt">Earn Without Investing.</span>
            </h2>

            <p className="text-base text-white/55 mb-8 leading-relaxed max-w-lg">
              Join our partner network and resell Digital Signature Certificates to your clients.
              Perfect for CAs, tax consultants, legal professionals, and IT service providers.
            </p>

            <div className="space-y-4 mb-8">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand-cobalt-bright" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-0.5">
                      {title}
                    </h3>
                    <p className="text-xs text-white/45">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="rounded-xl bg-brand-saffron text-brand-navy-deep font-bold hover:bg-brand-saffron-bright h-11 px-8 group shimmer">
              <span className="flex items-center gap-2">
                Join Partner Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10,000+", label: "Certificates Sold" },
              { value: "500+", label: "Active Partners" },
              { value: "30 Min", label: "Avg. Delivery Time" },
              { value: "4.9/5", label: "Customer Rating" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors"
              >
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-brand-cobalt-bright mb-1">
                  {value}
                </p>
                <p className="text-xs text-white/45 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
