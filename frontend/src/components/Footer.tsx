import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{ background: "#e8eaf0", borderTop: "4px solid #c0392b" }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo + tagline */}
          <div className="md:col-span-1">
            {/* Logo with same size as header */}
            <img
              src={logo}
              alt="PSCyberCore"
              className="h-48 w-96 object-contain -ml-8"
            />
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              Automotive IT, cybersecurity and digital solutions for modern vehicle businesses.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61589245538262"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-all hover:border-cyber-red hover:bg-cyber-red hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/pscyber_core/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-all hover:border-cyber-red hover:bg-cyber-red hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition-all hover:border-cyber-red hover:bg-cyber-red hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-cyber-red">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "Solutions", to: "/solutions" },
                { label: "Industries", to: "/industries" },
                { label: "About", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavClick(item.to)}
                    className="text-sm text-gray-600 transition-colors hover:text-cyber-red text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-cyber-red">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "IT Solutions",
                "Fleet Tech",
                "Cybersecurity",
                "CRM & Booking",
                "Automation",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick("/solutions")}
                    className="text-sm text-gray-600 transition-colors hover:text-cyber-red text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-cyber-red">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+18258076307"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-cyber-red"
                >
                  <Phone className="h-4 w-4 shrink-0 text-cyber-red" />
                  +1 825 807 6307
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pscybercore.com"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-cyber-red"
                >
                  <Mail className="h-4 w-4 shrink-0 text-cyber-red" />
                  info@pscybercore.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.pscybercore.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-cyber-red"
                >
                  <Globe className="h-4 w-4 shrink-0 text-cyber-red" />
                  www.pscybercore.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyber-red" />
                219-1210 20 Ave SE, Calgary, AB, Canada T2G 1M8
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-300 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} PSCyberCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
