import {
  Receipt,
  Building,
  Landmark,
  Gavel,
  Package,
  FileSpreadsheet,
  Globe2,
  Ship,
  UserCheck,
  Scale,
} from "lucide-react";

const USE_CASES = [
  { icon: Receipt, label: "GST Filing", portal: "gst.gov.in" },
  { icon: Building, label: "MCA / ROC", portal: "mca.gov.in" },
  { icon: Landmark, label: "Income Tax", portal: "incometax.gov.in" },
  { icon: Gavel, label: "e-Tendering", portal: "gem.gov.in" },
  { icon: Package, label: "EPFO / EPF", portal: "epfindia.gov.in" },
  { icon: Ship, label: "ICEGATE", portal: "icegate.gov.in" },
  { icon: Globe2, label: "DGFT", portal: "dgft.gov.in" },
  { icon: FileSpreadsheet, label: "Trademark", portal: "ipindia.gov.in" },
  { icon: UserCheck, label: "Director KYC", portal: "mca.gov.in" },
  { icon: Scale, label: "Legal Filing", portal: "ecourts.gov.in" },
];

export function UseCases() {
  return (
    <section className="py-16 sm:py-22 border-y border-border/50 relative overflow-hidden">
      {/* Subtle stripe accent */}
      <div className="absolute inset-0 stripe-accent opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-2">
            One DSC. Every Government Portal.
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            Our digital signatures are accepted across all major Indian
            government platforms &mdash; no separate certificates needed.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {USE_CASES.map(({ icon: Icon, label, portal }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card hover:border-brand-cobalt/30 hover:bg-brand-cobalt/[0.02] transition-all duration-250 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-brand-cobalt/10 flex items-center justify-center transition-colors">
                <Icon
                  className="w-5 h-5 text-muted-foreground group-hover:text-brand-cobalt transition-colors"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-center">
                <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground transition-colors block">
                  {label}
                </span>
                <span className="text-[9px] text-muted-foreground/60 group-hover:text-brand-cobalt/60 transition-colors">
                  {portal}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
