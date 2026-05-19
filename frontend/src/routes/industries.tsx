import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — PSCyberCore" },
      { name: "description", content: "Technology solutions built for automotive and transport industries." },
    ],
  }),
});

const industries = [
  {
    icon: "🔧",
    title: "Repair Shops",
    tagline: "IT systems for repair shop operations",
    fullTitle: "Repair Shop Technology Solutions",
    description: [
      "Digital systems designed for day-to-day repair shop operations",
      "Helps manage customer, vehicle and service records",
      "Improves job tracking and workflow organization",
      "Reduces manual paperwork and miscommunication",
      "CRM and booking system integration",
      "Tracks service history and customer interactions",
      "Supports technician workflow and job allocation",
      "Improves front-desk and back-end coordination",
      "Automation for routine administrative tasks",
      "Helps improve turnaround time and service efficiency",
      "Scalable systems for growing repair businesses",
    ],
  },
  {
    icon: "🚗",
    title: "Dealerships",
    tagline: "Digital solutions for vehicle sales & management",
    fullTitle: "Dealership Technology Solutions",
    description: [
      "Digital systems for managing vehicle inventory and sales",
      "CRM solutions for customer relationship management",
      "Booking systems for test drives and service appointments",
      "Improves lead management and customer tracking",
      "Supports online presence and website integration",
      "Data reporting for sales and performance tracking",
      "Helps organize dealership operations efficiently",
      "Automation for follow-ups and communication",
      "Secure handling of customer and business data",
      "Enhances overall customer experience",
      "Scalable systems for multi-location dealerships",
    ],
  },
  {
    icon: "🚚",
    title: "Fleet Operators",
    tagline: "GPS tracking & fleet management systems",
    fullTitle: "Fleet Operator Solutions",
    description: [
      "Real-time fleet tracking and monitoring systems",
      "Helps manage vehicle usage and driver activity",
      "Improves route planning and operational efficiency",
      "Reduces fuel costs and downtime",
      "Data reporting for performance insights",
      "Integration with telematics systems",
      "Improves dispatch and coordination",
      "Tracks maintenance schedules and vehicle health",
      "Enhances operational visibility across fleet",
      "Supports scaling fleet operations",
      "Secure and reliable data systems",
    ],
  },
  {
    icon: "🚛",
    title: "Transport Companies",
    tagline: "Technology for dispatch & transport operations",
    fullTitle: "Transport Company Solutions",
    description: [
      "Technology systems for managing transport operations",
      "Improves dispatch planning and coordination",
      "Fleet tracking and route optimization tools",
      "Automates scheduling and operational workflows",
      "CRM systems for managing clients and contracts",
      "Data dashboards for operational performance",
      "Reduces inefficiencies in logistics processes",
      "Improves communication between teams",
      "Supports real-time decision making",
      "Enhances overall operational control",
      "Scalable for regional and growing transport businesses",
    ],
  },
  {
    icon: "📦",
    title: "Logistics Businesses",
    tagline: "Systems for goods movement & supply chain",
    fullTitle: "Logistics Business Solutions",
    description: [
      "Systems designed for managing goods movement and operations",
      "Improves tracking of shipments and inventory",
      "Enhances coordination between warehouses and transport",
      "Automation of logistics workflows",
      "Data reporting for operational efficiency",
      "Integration with fleet and transport systems",
      "Reduces manual errors in operations",
      "Improves delivery tracking and customer updates",
      "Supports business scalability",
      "Enhances visibility across supply chain operations",
      "Secure and reliable system infrastructure",
    ],
  },
  {
    icon: "🚀",
    title: "Mobility & Automotive Startups",
    tagline: "Tech support for new automotive businesses",
    fullTitle: "Mobility & Automotive Startup Solutions",
    description: [
      "Technology support for new automotive and mobility businesses",
      "Custom software and platform development",
      "Website and booking system setup",
      "CRM and customer management tools",
      "Scalable systems for growing startups",
      "Automation of business workflows",
      "Data dashboards for business insights",
      "Cloud infrastructure and IT setup",
      "Cybersecurity support for digital platforms",
      "Helps launch and manage digital-first automotive businesses",
      "Flexible solutions tailored to startup needs",
    ],
  },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Technology Solutions Built for Automotive & Transport Industries
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            Tailored IT systems, cybersecurity, fleet technology and automation designed for real vehicle-based business operations
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">Book Consultation</Link>
            <Link to="/solutions" className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors">View Solutions</Link>
          </div>
        </div>
      </section>

      {/* Industries Overview Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <div key={ind.title} className="flex flex-col items-center text-center p-5 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">{ind.icon}</div>
                <div className="text-sm font-semibold text-foreground">{ind.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{ind.tagline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industries */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((industry, index) => (
            <div key={industry.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img src={aboutImg} alt={industry.fullTitle} className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{industry.fullTitle}</h2>
                <ul className="space-y-2">
                  {industry.description.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-cyber-red mt-0.5 flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/book-consultation" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-6 py-3 text-sm font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">
                    Request Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading="SOLUTIONS BUILT FOR YOUR INDUSTRY"
        subtext="Work with PScybercore to design technology systems tailored to your business operations"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
