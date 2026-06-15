import {
  SiteHeader,
  HeroSection,
  HowItWorks,
  ProductCards,
  UseCases,
  PricingTable,
  Testimonials,
  TrustSection,
  FAQSection,
  PartnerCTA,
  SiteFooter,
  WhatsAppButton,
} from "@/components/marketing";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero: Interactive buy form + trust signals */}
        <HeroSection />

        {/* How It Works: 3-step process */}
        <HowItWorks />

        {/* Product Cards: Class 3, DGFT, Combo, Foreign */}
        <ProductCards />

        {/* Use Cases: GST, MCA, IT, e-Tender, etc. */}
        <UseCases />

        {/* Pricing Table: Full comparison */}
        <PricingTable />

        {/* Testimonials: Customer reviews */}
        <Testimonials />

        {/* Trust & Security: Badges, certifications */}
        <TrustSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Partner CTA: Join program */}
        <PartnerCTA />
      </main>

      <SiteFooter />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
