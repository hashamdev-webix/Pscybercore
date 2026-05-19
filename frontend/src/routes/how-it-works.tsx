import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — PSCyberCore" },
      { name: "description", content: "A structured approach to design, build, secure and optimize your digital systems." },
    ],
  }),
});

const steps = [
  {
    number: "1",
    icon: "🧭",
    title: "Consultation",
    description: [
      "Initial discussion to understand your business operations",
      "Identify current challenges and inefficiencies",
      "Understand your industry-specific workflows",
      "Gather requirements for systems, tools and processes",
      "Discuss business goals and expected outcomes",
      "Evaluate current technology setup",
      "Define scope of work and service requirements",
      "Provide initial guidance on possible solutions",
      "Establish communication and project expectations",
      "Prepare foundation for structured project planning",
    ],
  },
  {
    number: "2",
    icon: "🔍",
    title: "Analysis",
    description: [
      "Detailed evaluation of existing workflows and operations",
      "Identify inefficiencies and process gaps",
      "Analyze data flow and system dependencies",
      "Review current IT infrastructure and tools",
      "Assess cybersecurity risks and vulnerabilities",
      "Evaluate fleet, CRM or operational systems (if applicable)",
      "Map out opportunities for automation and improvement",
      "Define system requirements and priorities",
      "Align solutions with business goals",
      "Create a structured roadmap for implementation",
    ],
  },
  {
    number: "3",
    icon: "🧩",
    title: "System Design",
    description: [
      "Design customized solutions based on analysis",
      "Create system architecture and workflow structure",
      "Plan integrations between different tools and platforms",
      "Define user roles, access and system flow",
      "Design dashboards and reporting structure",
      "Ensure scalability and flexibility of system",
      "Include cybersecurity considerations in design",
      "Prepare UI/UX flow for platforms and tools",
      "Align design with operational needs",
      "Finalize blueprint before development",
    ],
  },
  {
    number: "4",
    icon: "💻",
    title: "Development",
    description: [
      "Build custom software, systems and platforms",
      "Develop websites, CRM systems and automation tools",
      "Integrate third-party tools and APIs",
      "Implement designed workflows and system logic",
      "Ensure responsive and user-friendly interfaces",
      "Follow best practices for clean and scalable code",
      "Continuous testing during development",
      "Maintain alignment with approved system design",
      "Optimize performance and usability",
      "Prepare system for deployment phase",
    ],
  },
  {
    number: "5",
    icon: "🚀",
    title: "Deployment",
    description: [
      "Launch systems in live business environment",
      "Configure cloud infrastructure and hosting",
      "Ensure system security and stability",
      "Migrate data (if required)",
      "Test live workflows and integrations",
      "Train staff on system usage",
      "Monitor initial performance and resolve issues",
      "Ensure smooth transition from old systems",
      "Optimize system based on real-time usage",
      "Prepare for ongoing support phase",
    ],
  },
  {
    number: "6",
    icon: "🔧",
    title: "Support & Optimization",
    description: [
      "Continuous monitoring of system performance",
      "Regular updates and improvements",
      "Troubleshooting and technical support",
      "Cybersecurity monitoring and updates",
      "System optimization based on usage data",
      "Add new features and enhancements",
      "Scale systems as business grows",
      "Maintain system reliability and uptime",
      "Provide long-term technical partnership",
      "Ensure business continuity through strong support",
    ],
  },
];

const whyItWorks = [
  { icon: "📋", title: "Structured Approach", desc: "Every project follows a clear, proven process from start to finish." },
  { icon: "🚗", title: "Industry Focus", desc: "Solutions built specifically for automotive and transport businesses." },
  { icon: "📈", title: "Scalable Systems", desc: "Designed to grow alongside your business needs." },
  { icon: "🛡️", title: "Secure Design", desc: "Security is built into every stage of the process." },
  { icon: "🤝", title: "Long-Term Support", desc: "We stay with you beyond deployment for ongoing success." },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            How PScybercore Transforms Your Business Operations
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            A structured approach to design, build, secure and optimize your digital systems
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-consultation" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">Book Consultation</Link>
            <Link to="/solutions" className="inline-flex items-center justify-center rounded-md border-2 border-cyber-navy-foreground/50 px-8 py-4 text-base font-semibold text-cyber-navy-foreground hover:bg-cyber-navy-foreground/10 transition-colors">View Solutions</Link>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-muted-foreground">Our process ensures every solution is aligned with your business operations and long-term goals</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-3">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-foreground">{step.title}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className="text-cyber-red text-xl font-bold hidden sm:block">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {steps.map((step, index) => (
            <div key={step.number} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
                  <img src={aboutImg} alt={step.title} className="w-full h-64 object-cover" />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Step {step.number}: {step.title}</h2>
                <ul className="space-y-2">
                  {step.description.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-cyber-red mt-0.5 flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Our Advantage</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">Why Our Process Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyItWorks.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="READY TO BUILD YOUR DIGITAL SYSTEM?"
        subtext="Work with PScybercore to design, develop and manage your technology infrastructure"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
