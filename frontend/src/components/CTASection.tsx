import { Link } from "react-router-dom";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export function CTASection({
  heading = "READY TO MODERNIZE YOUR BUSINESS?",
  subtext = "Work with a technology partner that understands automotive operations and digital systems",
  primaryLabel = "Book Consultation",
  primaryTo = "/book-consultation",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 bg-cyber-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyber-navy-foreground">
          {heading}
        </h2>
        <p className="mt-4 text-cyber-navy-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto">
          {subtext}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primaryTo}
            className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors animate-pulse-glow"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:border-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
