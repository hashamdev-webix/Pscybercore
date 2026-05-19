import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-team.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cyber-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side — image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-cyber-navy-foreground/10 shadow-2xl shadow-cyber-red/10">
              <img
                src={aboutImg}
                alt="Automotive IT & Systems Integration"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right side — content */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">About PSCyberCore</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-cyber-navy-foreground">
              Technology Built for Automotive & Transport Businesses
            </h2>
            <p className="mt-6 text-cyber-navy-foreground/70 leading-relaxed">
              PScybercore helps automotive, fleet and transport businesses modernize operations through practical IT solutions, cybersecurity support, fleet systems, automation tools, CRM platforms and data-driven reporting.
            </p>
            <p className="mt-4 text-cyber-navy-foreground/70 leading-relaxed">
              We design systems around real vehicle-based workflows to improve visibility, security and business performance.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md bg-cyber-red px-6 py-3 text-sm font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
