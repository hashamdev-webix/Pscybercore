import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const stepImages = [
  // Step 1 Consultation — business meeting / client discussion
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  // Step 2 Analysis — data analysis / system review on screens
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  // Step 3 System Design — architecture diagram / whiteboard planning
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
  // Step 4 Development — developer writing code on laptop
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  // Step 5 Deployment — server launch / cloud deployment
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  // Step 6 Support — support team monitoring dashboard
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
];

const steps = [
  {
    number: "1", icon: "🧭", title: "Consultation",
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
    number: "2", icon: "🔍", title: "Analysis",
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
    number: "3", icon: "🧩", title: "System Design",
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
    number: "4", icon: "💻", title: "Development",
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
    number: "5", icon: "🚀", title: "Deployment",
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
    number: "6", icon: "🔧", title: "Support & Optimization",
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
  { title: "Structured Approach", desc: "Every project follows a clear, proven process from start to finish." },
  { title: "Industry Focus", desc: "Solutions built specifically for automotive and transport businesses." },
  { title: "Scalable Systems", desc: "Designed to grow alongside your business needs." },
  { title: "Secure Design", desc: "Security is built into every stage of the process." },
  { title: "Long-Term Support", desc: "We stay with you beyond deployment for ongoing success." },
];

export default function HowItWorksPage() {
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
                  <div className="w-12 h-12 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center text-lg font-bold">{step.number}</div>
                  <div className="mt-1 text-xs font-semibold text-foreground">{step.title}</div>
                </div>
                {index < steps.length - 1 && <div className="text-cyber-red text-xl font-bold hidden sm:block">→</div>}
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
                  <img
                    src={stepImages[index]}
                    alt={step.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"; }}
                  />
                </div>
              </div>
              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center text-xl font-bold">{step.number}</div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Step {step.number}: {step.title}</h2>
                <ul className="space-y-2">
                  {step.description.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-cyber-red mt-0.5 flex-shrink-0">✓</span>{point}
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
