import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { AnimatedSection } from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  "Practical Solutions Over Complexity",
  "Security First Approach",
  "Industry-Focused Thinking",
  "Long-Term Client Partnerships",
  "Continuous Improvement",
];

const whyUs = [
  { title: "Automotive Expertise", desc: "Built specifically for vehicle-based businesses" },
  { title: "Practical Systems", desc: "Solutions designed for real-world usage" },
  { title: "Cybersecurity Focus", desc: "Strong focus on protecting systems and data" },
  { title: "Scalable Solutions", desc: "Systems that grow with your business" },
  { title: "Data Driven", desc: "Better insights through structured data" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Driving Digital Transformation in Automotive & Transport Businesses
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            Combining industry understanding with modern technology to build secure, efficient and scalable business systems
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">Book Consultation</Link>
            <Link to="/solutions" className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors">View Solutions</Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="PSCyberCore Team" className="w-full h-auto object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Who We Are</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                PScybercore is an automotive-focused IT, cybersecurity and digital solutions company dedicated to helping vehicle-dependent businesses modernize their operations. We work with repair shops, dealerships, fleet operators, transport companies and logistics businesses to design practical technology systems that improve efficiency, organization and decision-making.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our approach combines real-world understanding of automotive workflows with modern digital tools, allowing businesses to move from manual processes to structured, data-driven operations.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">To deliver practical, secure and scalable technology solutions that improve operations for automotive and transport businesses.</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">To become a trusted technology partner for vehicle-based businesses seeking digital transformation, operational clarity and long-term growth.</p>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Values</h3>
              <ul className="space-y-2">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-cyber-red mt-0.5">✓</span> {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What We Do</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">We provide a wide range of technology and digital services designed specifically for automotive and transport businesses. Our solutions include IT systems, cybersecurity support, fleet technology, CRM platforms, workflow automation, custom software development and data reporting systems.</p>
              <p className="mt-4 text-muted-foreground leading-relaxed">We focus on building systems that are easy to use, scalable and aligned with real business operations, ensuring that technology becomes a practical asset rather than a complexity.</p>
            </div>
            <AnimatedSection direction="right" delay={0.2}>
              {/* What We Do — dashboard + systems visual */}
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Dashboard and Systems" className="w-full h-auto object-cover rounded-2xl" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Our Approach</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">At PScybercore, we follow a structured and practical approach to every project. We begin by understanding the client's operations, identifying inefficiencies and designing solutions tailored to real workflows. From system design to deployment and ongoing support, we ensure that every solution delivers measurable values.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">Our focus is not just on implementing technology, but on improving how businesses operate on a daily basis through smarter systems and better data visibility.</p>
        </div>
      </section>

      {/* Why PSCyberCore */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Why Choose Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Why PSCyberCore</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Positioning */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-10 border border-border">
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground">Our Role</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">PScybercore operates as a technology and digital solutions provider. We do not function as a vehicle repair shop, dealership, vehicle sales provider, engineering firm, investigation service, locksmith or physical security company.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">Our role is to support businesses through IT systems, cybersecurity, automation and digital tools that improve operational efficiency and business performance.</p>
          </div>
        </div>
      </section>

      <CTASection
        heading="READY TO MODERNIZE YOUR BUSINESS OPERATIONS?"
        subtext="Work with PScybercore to design and implement systems that improve efficiency, security and long-term growth"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
