import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions — PSCyberCore" },
      { name: "description", content: "Smart technology solutions for automotive and transport businesses." },
    ],
  }),
});

const solutions = [
  {
    icon: "🚗",
    title: "Automotive IT Solutions",
    description: [
      "Designed specifically for vehicle-based businesses and operations",
      "Helps organize customer, vehicle and service data",
      "Improves workflow between front desk, technicians and management",
      "Integrates systems for better operational visibility",
      "Reduces manual record keeping and paperwork",
      "Supports repair shops, dealerships and service centers",
      "Enables faster service processing and customer handling",
      "Builds structured digital workflows for daily operations",
      "Helps track jobs, service history and customer interactions",
      "Improves internal coordination across teams",
      "Scalable systems for growing automotive businesses",
    ],
  },
  {
    icon: "🚚",
    title: "Fleet Technology & GPS Tracking",
    description: [
      "Real-time vehicle tracking and monitoring systems",
      "Helps manage fleet movement, routes and driver activity",
      "Improves operational efficiency and reduces fuel waste",
      "Provides insights into vehicle usage and performance",
      "Enables route optimization and dispatch planning",
      "Supports logistics, transport and delivery companies",
      "Tracks vehicle history and operational patterns",
      "Helps reduce downtime and improve response time",
      "Integration with reporting dashboards",
      "Enhances visibility across entire fleet operations",
      "Scalable for small to large fleet businesses",
    ],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity Support",
    description: [
      "Protects business systems, data and digital infrastructure",
      "Identifies vulnerabilities in existing IT systems",
      "Helps secure customer and operational data",
      "Prevents unauthorized access and cyber threats",
      "Supports safe digital workflows and system usage",
      "Implements practical security measures for businesses",
      "Reduces risk of data breaches and downtime",
      "Helps maintain system integrity and reliability",
      "Designed for non-technical automotive businesses",
      "Ongoing monitoring and support options",
      "Builds long-term cybersecurity awareness",
    ],
  },
  {
    icon: "💻",
    title: "Custom Software Development",
    description: [
      "Tailored software solutions for specific business needs",
      "Built around real automotive workflows and operations",
      "Replaces inefficient manual systems",
      "Improves productivity and process management",
      "Custom dashboards, tools and internal systems",
      "Integration with existing business systems",
      "Scalable architecture for future growth",
      "Supports automation and reporting features",
      "Designed for ease of use and operational clarity",
      "Enables centralized data and workflow control",
      "Reduces dependency on multiple disconnected tools",
    ],
  },
  {
    icon: "🌐",
    title: "Website Development",
    description: [
      "Professional websites designed for automotive businesses",
      "Mobile-friendly and responsive design",
      "Service pages, booking forms and customer interaction tools",
      "SEO-friendly structure for better online visibility",
      "Fast loading and performance optimized",
      "Integrated with CRM and booking systems",
      "Helps generate leads and customer inquiries",
      "Clean UI focused on business credibility",
      "Custom design aligned with brand identity",
      "Secure hosting and deployment support",
      "Scalable for future upgrades",
    ],
  },
  {
    icon: "📊",
    title: "CRM & Booking Systems",
    description: [
      "Customer relationship management system setup",
      "Centralized customer and vehicle data storage",
      "Booking and appointment scheduling systems",
      "Improves customer communication and follow-ups",
      "Tracks service history and interactions",
      "Reduces missed bookings and manual errors",
      "Streamlines front-desk operations",
      "Automated notifications and reminders",
      "Integration with website and backend systems",
      "Improves business organization and efficiency",
      "Scalable for growing customer base",
    ],
  },
  {
    icon: "⚙️",
    title: "Business Process Automation",
    description: [
      "Automates repetitive business tasks",
      "Reduces manual workload and human error",
      "Streamlines internal workflows",
      "Improves operational efficiency and speed",
      "Connects different systems for seamless operations",
      "Automates reporting, communication and task tracking",
      "Helps businesses scale without increasing complexity",
      "Custom workflows designed for automotive operations",
      "Improves consistency across processes",
      "Saves time and operational cost",
      "Enables focus on core business activities",
    ],
  },
  {
    icon: "📈",
    title: "Data Reporting & Dashboards",
    description: [
      "Real-time business performance dashboards",
      "Data visualization for better decision making",
      "Tracks KPIs, operations and financial metrics",
      "Custom reports based on business needs",
      "Improves operational visibility",
      "Helps identify trends and inefficiencies",
      "Integrates with multiple data sources",
      "Simplifies complex data into actionable insights",
      "Supports management and strategic planning",
      "Accessible dashboards for teams and owners",
      "Enhances data-driven decision making",
    ],
  },
  {
    icon: "☁️",
    title: "Cloud Systems & IT Support",
    description: [
      "Cloud setup for business applications and data",
      "Secure storage and system access",
      "Remote access for teams and operations",
      "IT infrastructure setup and maintenance",
      "Improves system reliability and uptime",
      "Scalable solutions for business growth",
      "Backup and recovery solutions",
      "Reduces dependency on physical systems",
      "Ongoing IT support and troubleshooting",
      "Improves operational flexibility",
      "Secure and efficient system management",
    ],
  },
  {
    icon: "🧩",
    title: "CAD Drafting & 3D Modelling Support",
    description: [
      "Non-regulated technical drafting support",
      "2D and 3D modelling for conceptual documentation",
      "Supports planning and visualization of systems",
      "Useful for internal documentation and presentations",
      "Helps businesses communicate technical ideas clearly",
      "Works alongside IT and system development projects",
      "Provides structured design outputs",
      "Supports automotive and transport-related concepts",
      "Improves clarity in technical workflows",
      "Not a licensed engineering or regulated design service",
      "Practical support for business-level technical needs",
    ],
  },
];

const overviewCards = [
  { icon: "🚗", title: "Automotive IT", desc: "IT systems for vehicle businesses" },
  { icon: "🚚", title: "Fleet Technology", desc: "GPS tracking & fleet management" },
  { icon: "🛡️", title: "Cybersecurity", desc: "Protect your digital infrastructure" },
  { icon: "💻", title: "Software Development", desc: "Custom software solutions" },
  { icon: "🌐", title: "Websites", desc: "Professional web presence" },
  { icon: "📊", title: "CRM Systems", desc: "Customer & booking management" },
  { icon: "⚙️", title: "Automation", desc: "Streamline business workflows" },
  { icon: "📈", title: "Data Reporting", desc: "Dashboards & analytics" },
  { icon: "☁️", title: "Cloud & IT", desc: "Cloud infrastructure & support" },
  { icon: "🧩", title: "CAD & 3D Support", desc: "Technical drafting & modelling" },
];

function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Smart Technology Solutions for Automotive & Transport Businesses
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            IT systems, cybersecurity, fleet technology, automation and data solutions built for real vehicle-based operations
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">Book Consultation</Link>
            <a href="#solutions-overview" className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors">Explore Solutions</a>
          </div>
        </div>
      </section>

      {/* Solutions Overview Grid */}
      <section id="solutions-overview" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {overviewCards.map((card) => (
              <div key={card.title} className="flex flex-col items-center text-center p-5 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold text-foreground">{card.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((solution, index) => (
            <div key={solution.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img src={servicesBg} alt={solution.title} className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="text-3xl mb-3">{solution.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{solution.title}</h2>
                <ul className="space-y-2">
                  {solution.description.map((point) => (
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
        heading="NEED A CUSTOM TECHNOLOGY SOLUTION FOR YOUR BUSINESS?"
        subtext="Work with PScybercore to design, build and secure your digital operations"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
