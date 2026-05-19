import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, Menu, X, PhoneCall } from "lucide-react";
import { useState, useRef, useEffect, type ReactNode } from "react";
import logo from "@/assets/logo.png";

// ─── Smart nav helper ──────────────────────────────────────────────────────
function NavLink({
  to,
  onClick,
  className,
  children,
}: {
  to: string;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}) {
  const navigate = useNavigate();

  if (to.startsWith("tel:") || to.startsWith("mailto:")) {
    return (
      <a href={to} onClick={onClick} className={className}>
        {children}
      </a>
    );
  }

  const hashIdx = to.indexOf("#");
  const path = hashIdx !== -1 ? to.slice(0, hashIdx) : to;
  const hash = hashIdx !== -1 ? to.slice(hashIdx + 1) : null;

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    onClick?.();
    navigate(path || "/");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────
type MenuLink = { label: string; to: string };

type DropdownCategory = {
  id: "solutions" | "industries";
  label: string;
  to: string;
  links: MenuLink[];
  mostRequested: MenuLink[];
};

type SimpleCategory = {
  id: "how-it-works" | "about" | "contact";
  label: string;
  to: string;
};

type NavCategory = DropdownCategory | SimpleCategory;

function isDropdown(cat: NavCategory): cat is DropdownCategory {
  return cat.id === "solutions" || cat.id === "industries";
}

// ─── Data ──────────────────────────────────────────────────────────────────
const navCategories: NavCategory[] = [
  {
    id: "solutions",
    label: "Solutions",
    to: "/solutions",
    links: [
      { label: "Automotive IT Solutions", to: "/solutions#automotive-it" },
      { label: "Fleet Technology & GPS Tracking", to: "/solutions#fleet-technology" },
      { label: "Cybersecurity Support", to: "/solutions#cybersecurity" },
      { label: "Custom Software Development", to: "/solutions#custom-software" },
      { label: "Website Development", to: "/solutions#website-development" },
      { label: "CRM & Booking Systems", to: "/solutions#crm-booking" },
      { label: "Business Process Automation", to: "/solutions#automation" },
      { label: "Data Reporting & Dashboards", to: "/solutions#data-reporting" },
      { label: "Cloud & IT Support", to: "/solutions#cloud-it" },
      { label: "CAD & 3D Modelling Support", to: "/solutions#cad-3d" },
    ],
    mostRequested: [
      { label: "Security Setup", to: "/solutions#cybersecurity" },
      { label: "Fleet Tracking", to: "/solutions#fleet-technology" },
      { label: "Book Consultation", to: "/book-consultation" },
    ],
  },
  {
    id: "industries",
    label: "Industries",
    to: "/industries",
    links: [
      { label: "Repair Shops", to: "/industries#repair-shops" },
      { label: "Dealerships", to: "/industries#dealerships" },
      { label: "Fleet Operators", to: "/industries#fleet-operators" },
      { label: "Transport Companies", to: "/industries#transport-companies" },
      { label: "Logistics Businesses", to: "/industries#logistics-businesses" },
      { label: "Mobility & Automotive Startups", to: "/industries#mobility-startups" },
    ],
    mostRequested: [
      { label: "Fleet Operators", to: "/industries#fleet-operators" },
      { label: "Auto Dealerships", to: "/industries#dealerships" },
      { label: "Get a Quote", to: "/book-consultation" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  { id: "how-it-works", label: "How It Works", to: "/how-it-works" },
  { id: "about", label: "About", to: "/about" },
  { id: "contact", label: "Contact", to: "/contact" },
];

// ─── Mega Menu ─────────────────────────────────────────────────────────────
function MegaMenu({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  // null = no right panel (when How It Works / About / Contact is hovered)
  const [activeId, setActiveId] = useState<"solutions" | "industries" | null>(null);

  const activeDropdown = navCategories.find((c) => c.id === activeId && isDropdown(c)) as
    | DropdownCategory
    | undefined;

  function handleSimpleClick(cat: SimpleCategory) {
    onClose();
    navigate(cat.to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="fixed left-0 right-0 z-50 border-t-2 border-cyber-red shadow-2xl"
      style={{ top: "var(--header-height, 96px)" }}
    >
      <div className="flex" style={{ minHeight: 340 }}>
        {/* ── Left sidebar — all 5 items ── */}
        <div className="flex flex-col bg-cyber-navy" style={{ minWidth: 260, width: 260 }}>
          {navCategories.map((cat) => {
            if (isDropdown(cat)) {
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveId(cat.id)}
                  className={`flex w-full items-center justify-between px-6 py-3.5 text-left text-sm font-medium transition-colors ${
                    activeId === cat.id
                      ? "bg-white text-gray-900"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{cat.label}</span>
                  {activeId === cat.id && (
                    <ChevronRight className="size-3.5 shrink-0 text-gray-500" />
                  )}
                </button>
              );
            } else {
              // How It Works / About / Contact — hover clears panel, click navigates
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveId(null)}
                  onClick={() => handleSimpleClick(cat)}
                  className="flex w-full items-center px-6 py-3.5 text-left text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span>{cat.label}</span>
                </button>
              );
            }
          })}
        </div>

        {/* ── Right panel — ONLY when Solutions or Industries is active ── */}
        {activeDropdown && (
          <div className="flex flex-1 gap-16 bg-white px-10 py-7">
            <div style={{ minWidth: 240 }}>
              <NavLink
                to={activeDropdown.to}
                onClick={onClose}
                className="mb-5 block border-b-2 border-cyber-red pb-2 text-xl font-black text-gray-900 hover:text-cyber-red hover:underline"
              >
                {activeDropdown.label}
              </NavLink>
              <ul className="space-y-3">
                {activeDropdown.links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      onClick={onClose}
                      className="group flex items-start gap-2 text-sm text-cyber-navy"
                    >
                      <span className="mt-0.5 size-1.5 shrink-0 rounded-full bg-cyber-red transition-transform group-hover:scale-125" />
                      <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-cyber-red/70">
                        {link.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ minWidth: 240 }}>
              <ul className="space-y-3 mt-10">
                {activeDropdown.mostRequested.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      onClick={onClose}
                      className="group flex items-start gap-2 text-sm text-cyber-navy"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400 transition-colors group-hover:bg-cyber-red" />
                      <span className="underline underline-offset-2 group-hover:no-underline group-hover:text-cyber-red/70">
                        {link.label}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Mobile Menu ───────────────────────────────────────────────────────────
function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white" style={{ overflowY: "auto" }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-0">
        <Link to="/" onClick={onClose} aria-label="PSCyberCore home" className="-ml-16 -my-5">
          <img src={logo} alt="PSCyberCore" className="h-40 w-80 object-contain" />
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
        >
          <X className="size-6" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-2">
        {navCategories.map((cat) => (
          <div key={cat.id} className="border-b border-gray-100">
            {isDropdown(cat) ? (
              <>
                <button
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase text-gray-900"
                  onClick={() => setOpenSection(openSection === cat.id ? null : cat.id)}
                >
                  <span>{cat.label}</span>
                  <ChevronRight
                    className={`size-4 shrink-0 transition-transform duration-200 ${
                      openSection === cat.id ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {openSection === cat.id && (
                  <div className="mb-3 space-y-1 bg-white pl-4">
                    {cat.links.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={onClose}
                        className="block py-2 text-sm text-gray-700 hover:text-cyber-red"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={cat.to}
                onClick={onClose}
                className="flex w-full items-center py-4 text-left text-sm font-bold uppercase text-gray-900 hover:text-cyber-red"
              >
                {cat.label}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom CTA - 2 buttons with space-y-3 */}
      <div className="border-t border-gray-200 px-4 py-4 space-y-3">
        <a
          href="tel:+18258076307"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cyber-red py-3 text-sm font-bold text-white"
        >
          <PhoneCall className="size-4" /> Talk to an Expert
        </a>
        <a
          href="mailto:info@pscybercore.com"
          onClick={onClose}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-cyber-navy py-3 text-sm font-bold text-white"
        >
          ✉ info@pscybercore.com
        </a>
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────
export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Update --header-height CSS var
  useEffect(() => {
    if (headerRef.current) {
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`,
      );
    }
  });

  // Close mega menu on outside click
  useEffect(() => {
    if (!megaOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [megaOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMegaOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      <header ref={headerRef} className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        {/* Desktop Header */}
        <div className="hidden lg:flex mx-auto max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-0">
          {/* Left — Menu button + Logo */}
          <div className="flex items-center gap-0">
            <button
              className={`relative z-10 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                megaOpen ? "bg-primary/85 text-white" : "bg-primary text-white hover:bg-primary/85"
              }`}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              onClick={() => setMegaOpen((v) => !v)}
            >
              <Menu className="size-5" />
            </button>
            <Link to="/" aria-label="PSCyberCore home" className="-ml-16 -my-6 relative z-0">
              <img
                src={logo}
                alt="PSCyberCore"
                className="h-32 w-64 object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Right — CTA button */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-consultation"
              className="flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between px-4 py-0">
          {/* Logo left */}
          <Link to="/" aria-label="PSCyberCore home" className="-ml-24 -my-5">
            <img src={logo} alt="PSCyberCore" className="h-40 w-80 object-contain cursor-pointer" />
          </Link>

          {/* Hamburger right */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
          >
            <Menu className="size-6" />
          </button>
        </div>

        {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
      </header>
    </>
  );
}
