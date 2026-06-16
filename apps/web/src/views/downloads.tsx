"use client";

import { SiteHeader, SiteFooter, WhatsAppButton } from "@/components/marketing";
import { Download, Monitor, Apple, UsbIcon, FileText, Shield, ExternalLink, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOKEN_DRIVERS = [
  {
    name: "ePass 2003 Auto",
    brand: "HyperSecu",
    logo: "/assets/token-epass-logo.png",
    windows: "#",
    mac: "#",
    description: "Auto-detect driver for ePass 2003 USB crypto token. Most widely used token in India.",
  },
  {
    name: "Proxkey Token",
    brand: "WatchData",
    logo: "/assets/token-proxkey-logo.svg",
    windows: "#",
    mac: "#",
    description: "Proxkey (WatchData) driver for Windows and macOS. FIPS 140-2 Level 2 certified.",
  },
  {
    name: "MToken USB",
    brand: "MToken",
    logo: "/assets/token-mtoken.svg",
    windows: "#",
    mac: "#",
    description: "MToken USB crypto token driver. Lightweight and compact token driver package.",
  },
];

const UTILITIES = [
  { name: "DSC Utility Tool", description: "View, export, and manage certificates stored on your USB token.", href: "#", icon: Shield },
  { name: "Java Setup for DSC", description: "Java runtime required for some government portals. Includes configuration guide.", href: "#", icon: FileText },
  { name: "Browser Configuration Guide", description: "Step-by-step guide to configure Chrome, Firefox & Edge for DSC usage.", href: "#", icon: FileText },
  { name: "e-Mudhra Embridge", description: "eMudhra's browser extension for signing on government portals.", href: "#", icon: Download },
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          <div className="absolute inset-0 grain-overlay" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
                <Download className="w-3.5 h-3.5 text-brand-cobalt-bright" />
                <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Downloads & Drivers</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 text-balance leading-tight">
                Drivers, Tools & <span className="text-gradient-cobalt">Setup Guides</span>
              </h1>
              <p className="text-base text-white/55 leading-relaxed max-w-xl mx-auto">
                Download USB token drivers, DSC utility tools, and configuration guides. Everything you need to get your Digital Signature working.
              </p>
            </div>
          </div>
        </section>

        {/* Token Drivers */}
        <section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cobalt/[0.06] border border-brand-cobalt/12 mb-5">
                <UsbIcon className="w-3.5 h-3.5 text-brand-cobalt" />
                <span className="text-xs font-semibold text-brand-cobalt tracking-wide uppercase">USB Token Drivers</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">Download Token Drivers</h2>
              <p className="text-muted-foreground text-base max-w-lg mx-auto">Install the correct driver for your USB crypto token to use your DSC on government portals.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {TOKEN_DRIVERS.map((driver) => (
                <div key={driver.name} className="rounded-2xl border border-border bg-card p-6 hover:border-brand-cobalt/20 transition-all hover-lift">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-cobalt/[0.06] flex items-center justify-center overflow-hidden">
                      <img src={driver.logo} alt={driver.name} className="w-10 h-10 object-contain" loading="lazy" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-foreground">{driver.name}</h3>
                      <p className="text-[11px] text-muted-foreground">by {driver.brand}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{driver.description}</p>
                  <div className="flex gap-2">
                    {driver.windows && (
                      <a href={driver.windows}>
                        <Button variant="outline" size="sm" className="rounded-lg text-xs gap-1.5">
                          <Monitor className="w-3.5 h-3.5" />
                          Windows
                        </Button>
                      </a>
                    )}
                    {driver.mac && (
                      <a href={driver.mac}>
                        <Button variant="outline" size="sm" className="rounded-lg text-xs gap-1.5">
                          <Apple className="w-3.5 h-3.5" />
                          macOS
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Utilities & Guides */}
        <section className="py-20 sm:py-28 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">Utilities & Guides</h2>
              <p className="text-muted-foreground text-base max-w-lg mx-auto">Essential tools and guides to manage your DSC and configure your browser.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {UTILITIES.map(({ name, description, href, icon: Icon }) => (
                <a key={name} href={href} className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-brand-cobalt/20 transition-all hover-lift">
                  <div className="w-10 h-10 rounded-xl bg-brand-saffron/[0.06] flex items-center justify-center shrink-0 group-hover:bg-brand-saffron/[0.12] transition-colors">
                    <Icon className="w-5 h-5 text-brand-saffron" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1 group-hover:text-brand-cobalt transition-colors">{name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/30 shrink-0 group-hover:text-brand-cobalt/60 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Help */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <HelpCircle className="w-10 h-10 text-brand-cobalt/30 mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-foreground mb-2">Need Help Installing?</h3>
            <p className="text-sm text-muted-foreground mb-6">Our support team can guide you through driver installation and DSC setup on any portal.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/917990740623" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#1da851] h-10 px-6">WhatsApp Support</Button>
              </a>
              <a href="tel:+919324462329">
                <Button variant="outline" className="rounded-xl h-10 px-6">Call +91 93244 62329</Button>
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
