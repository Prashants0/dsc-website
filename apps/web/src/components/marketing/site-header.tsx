"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
  Package,
  FileCheck,
  Building2,
  Layers,
  Globe,
  UserCheck,
  UsbIcon,
  Download,
  HelpCircle,
  ShieldCheck,
  ExternalLink,
  Stamp,
  Handshake,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── Data ──────────────────────────────────────────────────────────── */

const CA_PARTNERS = [
  "eMudhra",
  "Capricorn",
  "Pantasign",
  "SignX",
] as const;

const DSC_PRODUCTS = [
  {
    label: "Class 3 Individual",
    description: "For ITR, MCA, GST & e-Tenders",
    href: "/products/class-3-individual-dsc",
    icon: UserCheck,
  },
  {
    label: "Class 3 Organization",
    description: "For company filings & compliance",
    href: "/products/class-3-organization-dsc",
    icon: Building2,
  },
  {
    label: "Class 3 Combo",
    description: "Sign + Encrypt in one token",
    href: "/products/class-3-combo-dsc",
    icon: Layers,
  },
  {
    label: "DGFT (Import/Export)",
    description: "For DGFT e-Com applications",
    href: "/products/dgft-dsc",
    icon: Globe,
  },
  {
    label: "Foreign National DSC",
    description: "For non-Indian nationals in India",
    href: "/products/foreign-national-dsc",
    icon: FileCheck,
  },
  {
    label: "Document Signer Certificate",
    description: "Bulk & automated document signing",
    href: "/products/document-signer-certificate",
    icon: Stamp,
  },
] as const;

const OTHER_PRODUCTS = [
  { label: "DSC for GST", href: "/products/dsc-for-gst" },
  { label: "DSC for MCA", href: "/products/dsc-for-mca" },
  { label: "DSC for Income Tax", href: "/products/dsc-for-income-tax" },
  { label: "DSC for e-Tendering", href: "/products/dsc-for-e-tendering" },
  { label: "DSC for EPFO", href: "/products/dsc-for-epfo" },
  { label: "DSC for ICEGATE", href: "/products/dsc-for-icegate" },
  { label: "DSC for DGFT", href: "/products/dsc-for-dgft" },
  { label: "DSC for Trademark", href: "/products/dsc-for-trademark" },
  { label: "DSC for GeM Registration", href: "/products/dsc-for-gem-registration" },
  { label: "DSC for IRCTC", href: "/products/dsc-for-irctc" },
] as const;

const TOKEN_LINKS = [
  {
    label: "ePass 2003 Token",
    description: "Most popular auto-detect token",
    href: "/products/epass-2003-usb-token",
    icon: UsbIcon,
  },
  {
    label: "Proxkey Token",
    description: "FIPS L2 certified by WatchData",
    href: "/products/proxkey-usb-token",
    icon: UsbIcon,
  },
  {
    label: "MToken",
    description: "Compact & budget-friendly token",
    href: "/products/mtoken-usb-token",
    icon: UsbIcon,
  },
] as const;

const QUICK_LINKS = [
  { label: "Compare DSC Types", href: "/pricing", icon: Zap },
  { label: "Downloads & Drivers", href: "/downloads", icon: Download },
  { label: "Need Help Choosing?", href: "/contact", icon: HelpCircle },
] as const;

type NavLink =
  | { label: string; href: string; hasMegaMenu: true }
  | { label: string; href: string; hasMegaMenu?: false };

const NAV_LINKS: readonly NavLink[] = [
  { label: "Buy DSC", href: "/products", hasMegaMenu: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Our CAs", href: "/partners" },
  { label: "About", href: "/about" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" },
];

/* ─── Top Announcement Bar ──────────────────────────────────────────── */

function AnnouncementBar() {
  return (
    <div className="bg-brand-navy-deep text-white/80 text-[11px] relative overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9">
        {/* Left: Running announcement */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-emerald-bright" />
          </span>
          <span className="truncate font-medium tracking-wide">
            Authorized Multi-CA Reseller
            <span className="mx-2 text-white/30">|</span>
            CCA Approved
            <span className="mx-2 text-white/30">|</span>
            DSC in a Day
          </span>
        </div>

        {/* Right: Contact & Track */}
        <div className="flex items-center gap-4 shrink-0 ml-6">
          <a
            href="tel:+919324462329"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            aria-label="Call us at +91 93244 62329"
          >
            <Phone className="w-3 h-3" />
            <span>+91 93244 62329</span>
          </a>
          <span className="text-white/20">|</span>
          <a
            href="mailto:dsc@signsecure.in"
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
            aria-label="Email dsc@signsecure.in"
          >
            <Mail className="w-3 h-3" />
            <span className="hidden lg:inline">dsc@signsecure.in</span>
          </a>
          <span className="text-white/20">|</span>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-brand-saffron hover:text-brand-saffron-bright transition-colors font-semibold"
            aria-label="Track your order"
          >
            <Package className="w-3 h-3" />
            Track Order
          </Link>
        </div>
      </div>

      {/* CA Partner marquee */}
      <div className="border-t border-white/[0.06] bg-brand-navy/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center h-7 gap-4 overflow-hidden">
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-semibold shrink-0">
              Our CAs
            </span>
            <div className="h-3 w-px bg-white/10 shrink-0" />
            <div className="overflow-hidden relative flex-1">
              <div className="marquee-track" aria-label="Certificate Authority partners">
                {/* Duplicate for seamless loop */}
                {[...CA_PARTNERS, ...CA_PARTNERS].map((ca, i) => (
                  <span
                    key={`${ca}-${i}`}
                    className="inline-flex items-center gap-3 px-4 text-[11px] font-medium text-white/50 whitespace-nowrap"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-cobalt/50" />
                    {ca}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mega Menu (Buy DSC Dropdown) ──────────────────────────────────── */

function MegaMenu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[calc(100vw-2rem)] bg-card/98 backdrop-blur-2xl border border-border/60 rounded-2xl shadow-2xl shadow-brand-navy/10 animate-fade-up p-1.5"
      role="menu"
      aria-label="Buy DSC products"
    >
      <div className="grid grid-cols-12 gap-1">
        {/* Column 1 — Certificate products */}
        <div className="col-span-4 p-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3 px-2">
            Digital Signature Certificates
          </p>
          <div className="space-y-0.5">
            {DSC_PRODUCTS.map((product) => (
              <a
                key={product.label}
                href={product.href}
                onClick={onClose}
                className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-muted/80 transition-colors group"
                role="menuitem"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-cobalt/10 text-brand-cobalt group-hover:bg-brand-cobalt/15 transition-colors">
                  <product.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground group-hover:text-brand-cobalt transition-colors">
                    {product.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Other Products (by use case) */}
        <div className="col-span-4 p-3 border-l border-border/50">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3 px-2">
            Other Products
          </p>
          <div className="space-y-0.5">
            {OTHER_PRODUCTS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-foreground/80 hover:text-brand-cobalt hover:bg-muted/80 transition-colors group"
                role="menuitem"
              >
                <FileCheck className="w-3.5 h-3.5 text-brand-cobalt/50 group-hover:text-brand-cobalt transition-colors shrink-0" />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 — Hardware & quick links */}
        <div className="col-span-4 bg-muted/40 rounded-xl p-3">
          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3 px-2">
            Hardware
          </p>
          {TOKEN_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-background/80 transition-colors group"
              role="menuitem"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-saffron/10 text-brand-saffron group-hover:bg-brand-saffron/15 transition-colors">
                <item.icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground group-hover:text-brand-saffron transition-colors">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>
          ))}

          <div className="h-px bg-border/60 my-3" />

          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-2 px-2">
            Quick Links
          </p>
          <div className="space-y-0.5">
            {QUICK_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-background/80 transition-colors group"
                role="menuitem"
              >
                <item.icon className="w-3.5 h-3.5 text-brand-cobalt/60 group-hover:text-brand-cobalt transition-colors" />
                {item.label}
                <ChevronRight className="w-3 h-3 ml-auto opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-3 p-3 rounded-xl bg-gradient-to-br from-brand-cobalt/10 to-brand-cobalt/5 border border-brand-cobalt/10">
            <p className="text-xs font-semibold text-foreground">
              Not sure which DSC?
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Get a free consultation from our experts.
            </p>
            <a
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-cobalt hover:text-brand-cobalt-bright transition-colors mt-1.5"
            >
              Talk to an expert
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile Menu ───────────────────────────────────────────────────── */

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [dscOpen, setDscOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Mobile menu header */}
      <div className="flex items-center justify-between h-16 px-5 border-b border-border/50">
        <a href="/" className="flex items-center gap-2.5" onClick={onClose}>
          <img
            src="/assets/logo-icon.svg"
            alt=""
            className="h-8 w-auto"
            aria-hidden="true"
          />
          <div className="flex flex-col -space-y-0.5">
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              Sign<span className="text-brand-cobalt">Secure</span>
            </span>
          </div>
        </a>
        <button
          onClick={onClose}
          className="p-2 -mr-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu content */}
      <div className="overflow-y-auto h-[calc(100dvh-4rem)] px-5 py-6">
        <nav className="space-y-1" aria-label="Mobile navigation">
          {/* Buy DSC — accordion */}
          <div>
            <button
              onClick={() => setDscOpen(!dscOpen)}
              className="flex items-center justify-between w-full px-4 py-3.5 text-base font-semibold text-foreground rounded-xl hover:bg-muted transition-colors"
              aria-expanded={dscOpen}
              aria-controls="mobile-dsc-submenu"
            >
              Buy DSC
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${dscOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dscOpen && (
              <div
                id="mobile-dsc-submenu"
                className="ml-2 mt-1 space-y-0.5 animate-fade-up"
                role="menu"
              >
                {DSC_PRODUCTS.map((product) => (
                  <a
                    key={product.label}
                    href={product.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-cobalt/10 text-brand-cobalt">
                      <product.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">{product.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {product.description}
                      </p>
                    </div>
                  </a>
                ))}
                {TOKEN_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-saffron/10 text-brand-saffron">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}

                <p className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
                  Other Products
                </p>
                {OTHER_PRODUCTS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    role="menuitem"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-brand-cobalt/50 shrink-0" />
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Other nav links */}
          {NAV_LINKS.filter((l) => !("hasMegaMenu" in l && l.hasMegaMenu)).map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="flex items-center px-4 py-3.5 text-base font-semibold text-foreground rounded-xl hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px bg-border/60 my-6" />

        {/* Mobile CTAs */}
        <div className="space-y-3">
          <Link href="/products" onClick={onClose} className="block">
            <Button
              className="w-full h-12 rounded-xl bg-brand-cobalt text-white font-semibold text-base hover:bg-brand-cobalt-bright shimmer"
            >
              Buy DSC Now
            </Button>
          </Link>
          <a href="/become-partner" onClick={onClose} className="block">
            <Button
              variant="outline"
              className="w-full h-12 rounded-xl text-base font-semibold"
            >
              <span className="flex items-center gap-2">
                <Handshake className="w-4 h-4" />
                Become Our Partner
              </span>
            </Button>
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/60 my-6" />

        {/* Contact info */}
        <div className="space-y-4">
          <a
            href="tel:+919324462329"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Call us</p>
              <p className="font-semibold text-foreground">+91 93244 62329</p>
            </div>
          </a>
          <a
            href="https://wa.me/917990740623"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]/10">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="font-semibold text-foreground">+91 79907 40623</p>
            </div>
          </a>
          <a
            href="mailto:dsc@signsecure.in"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-semibold text-foreground">
                dsc@signsecure.in
              </p>
            </div>
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-saffron/10">
              <Package className="w-4 h-4 text-brand-saffron" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Track Order</p>
              <p className="font-semibold text-foreground">
                Check order status
              </p>
            </div>
          </Link>
        </div>

        {/* Authorized badge */}
        <div className="mt-8 p-4 rounded-xl bg-muted/60 border border-border/50 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-emerald">
            <ShieldCheck className="w-3.5 h-3.5" />
            Authorized Multi-CA Reseller
          </div>
          <p className="text-[11px] text-muted-foreground mt-1">
            CCA Approved &middot; Government Licensed
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main SiteHeader ───────────────────────────────────────────────── */

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Track scroll position for header styling
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMegaMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const closeMegaMenu = useCallback(() => setMegaMenuOpen(false), []);

  const handleMegaMenuEnter = useCallback(() => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  }, []);

  const handleMegaMenuLeave = useCallback(() => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  }, []);

  return (
    <>
      {/* Announcement & CA Marquee bar */}
      <AnnouncementBar />

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl shadow-lg shadow-brand-navy/[0.04] border-b border-border/50"
            : "bg-background/60 backdrop-blur-xl border-b border-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* ── Logo ── */}
            <a
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              aria-label="SignSecure — Digital Signatures home"
            >
              <img
                src="/assets/logo-icon.svg"
                alt=""
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              />
              <div className="flex flex-col -space-y-0.5">
                <span className="font-display font-bold text-lg tracking-tight text-foreground leading-tight">
                  Sign
                  <span className="text-brand-cobalt">Secure</span>
                </span>
                <span className="text-[9.5px] text-muted-foreground tracking-[0.18em] uppercase font-medium leading-none">
                  Digital Signatures
                </span>
              </div>
            </a>

            {/* ── Desktop Navigation ── */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) =>
                link.hasMegaMenu ? (
                  /* Buy DSC — with mega menu */
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleMegaMenuEnter}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        megaMenuOpen
                          ? "text-brand-cobalt bg-brand-cobalt/[0.06]"
                          : "text-foreground/75 hover:text-foreground hover:bg-muted/70"
                      }`}
                      aria-expanded={megaMenuOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                    {megaMenuOpen && <MegaMenu onClose={closeMegaMenu} />}
                  </div>
                ) : (
                  /* Standard nav link */
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-muted/70 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </nav>

            {/* ── Desktop Right Actions ── */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Authorized badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-emerald/[0.08] border border-brand-emerald/15 mr-1">
                <ShieldCheck className="w-3 h-3 text-brand-emerald" />
                <span className="text-[10.5px] font-semibold text-brand-emerald tracking-wide">
                  Authorized Reseller
                </span>
              </div>

              <a href="/become-partner">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-lg font-semibold"
                >
                  <span className="flex items-center gap-1.5">
                    <Handshake className="w-3.5 h-3.5" />
                    Become Our Partner
                  </span>
                </Button>
              </a>

              <Link href="/products">
                <Button
                  size="sm"
                  className="rounded-lg bg-brand-cobalt text-white font-semibold hover:bg-brand-cobalt-bright shimmer"
                >
                  Buy DSC Now
                </Button>
              </Link>
            </div>

            {/* ── Mobile Menu Toggle ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-xl hover:bg-muted transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </>
  );
}
