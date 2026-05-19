import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const coreSolutions = [
  {
    title: "Automotive IT Solutions",
    // Mechanic with tablet in garage — automotive IT
    image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
    id: "automotive-it",
  },
  {
    title: "Fleet Tech & GPS Tracking",
    // Trucks on highway — fleet operations
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    id: "fleet-technology",
  },
  {
    title: "Cybersecurity Support",
    // Cybersecurity lock on digital screen
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    id: "cybersecurity",
  },
  {
    title: "Custom Software Development",
    // Developer coding on laptop
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
    id: "custom-software",
  },
];

const industries = [
  { name: "Repair Shops" },
  { name: "Dealerships" },
  { name: "Fleet Operators" },
  { name: "Transport Companies" },
  { name: "Logistics Businesses" },
  { name: "Mobility & Automotive Startups" },
];

const steps = [
  { number: "1", title: "Consultation" },
  { number: "2", title: "Analysis" },
  { number: "3", title: "System Design" },
  { number: "4", title: "Development" },
  { number: "5", title: "Deployment" },
  { number: "6", title: "Support" },
];

const whyUs = [
  { title: "Automotive Focus", desc: "Built specifically for vehicle-based businesses." },
  { title: "Practical Systems", desc: "Solutions designed for real-world usage." },
  { title: "Cybersecurity First", desc: "Strong focus on protecting systems and data." },
  { title: "Scalable Solutions", desc: "Systems that grow with your business." },
  { title: "Data Driven", desc: "Better insights through structured data." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Automotive IT & Systems Integration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
                Technology Built for Automotive & Transport Businesses
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                PScybercore helps automotive, fleet and transport businesses modernize operations through practical IT solutions, cybersecurity support, fleet systems, automation tools, CRM platforms and data-driven reporting.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We design systems around real vehicle-based workflows to improve visibility, security and business performance.
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-md bg-cyber-red px-6 py-3 text-sm font-semibold text-white hover:bg-cyber-red/90 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Core Solutions</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSolutions.map((solution, index) => (
              <AnimatedSection key={solution.id} direction="up" delay={index * 0.1}>
                <Link
                  to={`/solutions#${solution.id}`}
                  className="group block rounded-2xl overflow-hidden border border-border hover:border-cyber-red/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80"; }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-cyber-red transition-colors">{solution.title}</h3>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.4} className="mt-10 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 rounded-md border-2 border-cyber-red text-cyber-red px-8 py-3 text-sm font-semibold hover:bg-cyber-red hover:text-white transition-colors"
            >
              View More Solutions <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Industries We Serve</h2>
            <p className="mt-4 text-muted-foreground">
              We design tailored systems for vehicle-dependent businesses across multiple automotive sectors.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} direction="up" delay={index * 0.08}>
                <Link
                  to="/industries"
                  className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-border hover:border-cyber-red/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-sm font-semibold text-foreground group-hover:text-cyber-red transition-colors">{industry.name}</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-muted-foreground">
              We follow a structured approach to understand your operations, build the right system, and provide ongoing support for long-term efficiency.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-red text-white flex items-center justify-center text-xl font-bold shadow-lg shadow-cyber-red/30">
                    {step.number}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-foreground">{step.title}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden sm:block text-cyber-red text-2xl font-bold">→</div>
                )}
              </motion.div>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.5} className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 rounded-md border-2 border-cyber-red text-cyber-red px-8 py-3 text-sm font-semibold hover:bg-cyber-red hover:text-white transition-colors"
            >
              Learn More About Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose PSCyberCore */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Why Choose PSCyberCore</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((reason, index) => (
              <AnimatedSection key={reason.title} direction="up" delay={index * 0.1}>
                <div className="group flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-border hover:border-cyber-red/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-cyber-red transition-colors">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-cyber-red flex-shrink-0 mt-0.5" />
                    {reason.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="READY TO MODERNIZE YOUR BUSINESS?"
        subtext="Work with a technology partner that understands automotive operations and digital systems"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
