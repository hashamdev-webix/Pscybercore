import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const whatHappensNext = [
  "Our team reviews your request",
  "We contact you within 24 hours",
  "Consultation session is scheduled",
  "We propose a tailored solution",
];

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Book a Consultation with Our Experts
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            Let's understand your business and design the right technology solution
          </p>
          <div className="mt-8">
            <a href="#consultation-form" className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">
              Start Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Get Started</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground">Start Your Digital Transformation Journey</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Fill out the form below to schedule a consultation with our team. We will review your requirements, understand your operations and recommend the most suitable technology solutions for your business.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-10 border border-border shadow-xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Consultation Request Form</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input type="text" placeholder="Company Name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Industry</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors">
                  <option value="">Select Industry</option>
                  <option value="repair-shop">Repair Shop</option>
                  <option value="dealership">Dealership</option>
                  <option value="fleet-operator">Fleet Operator</option>
                  <option value="transport-company">Transport Company</option>
                  <option value="logistics">Logistics Business</option>
                  <option value="startup">Startup</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Service Needed</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors">
                  <option value="">Select Service Needed</option>
                  <option value="automotive-it">Automotive IT Solutions</option>
                  <option value="fleet-tech">Fleet Technology</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="software-dev">Software Development</option>
                  <option value="crm">CRM / Booking System</option>
                  <option value="automation">Automation</option>
                  <option value="data-reporting">Data Reporting</option>
                  <option value="cloud-it">Cloud & IT Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Contact Method</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors">
                  <option value="">Preferred Contact Method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                  <input type="date" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Time</label>
                  <input type="time" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
                <textarea rows={5} placeholder="Tell us about your project and requirements..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Next Steps</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground">What Happens Next</h2>
          </div>
          <div className="space-y-4">
            {whatHappensNext.map((step, index) => (
              <div key={step} className="flex items-center gap-5 bg-card rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-foreground font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground leading-relaxed">
              We focus on practical, secure and scalable solutions tailored to your business operations. Your information is kept confidential and used only for consultation purposes.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        heading="READY TO BUILD YOUR SYSTEM?"
        subtext="Work with PScybercore to design and implement your digital infrastructure"
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel=""
        secondaryTo=""
      />
      <Footer />
    </div>
  );
}
