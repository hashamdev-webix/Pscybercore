import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 825 807 6307",
    href: "tel:+18258076307",
    desc: "Available for calls",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pscybercore.com",
    href: "mailto:info@pscybercore.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "219-1210 20 Ave SE, Calgary, AB, Canada T2G 1M8",
    href: null,
    desc: "Our office address",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Get in Touch with PScybercore
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            Have questions or need support? Our team is here to help you
          </p>
          <div className="mt-8">
            <Link to="/book-consultation" className="inline-flex items-center gap-2 justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors">
              <MessageSquare className="w-5 h-5" />
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-5 bg-card rounded-xl p-6 border border-border hover:border-cyber-red/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyber-red/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-cyber-red" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-foreground hover:text-cyber-red transition-colors block">{item.value}</a>
                    ) : (
                      <div className="text-base font-semibold text-foreground">{item.value}</div>
                    )}
                    <div className="text-sm text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-muted-foreground mb-12">
            Reach out to us for general inquiries, service questions or support requests.
          </p>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-10 border border-border shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyber-red/10 flex items-center justify-center">
                <Send className="w-5 h-5 text-cyber-red" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input type="email" placeholder="Email Address" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input type="text" placeholder="Company Name" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Inquiry Type</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors">
                  <option value="">Select Inquiry Type</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea rows={5} placeholder="Your message..." className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors">
                <Send className="w-5 h-5" />
                Submit Message
              </button>
            </form>
          </div>

          {/* Support Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-cyber-red flex-shrink-0" />
            <p>Our team typically responds within 24 hours. For urgent requests, please call <a href="tel:+18258076307" className="text-cyber-red hover:underline font-medium">+1 825 807 6307</a>.</p>
          </div>

          {/* Map / Location */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-xl">
            <iframe
              title="PSCyberCore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.5!2d-114.0435!3d51.0375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fc3b5b5b5b5%3A0x0!2s219-1210+20+Ave+SE%2C+Calgary%2C+AB+T2G+1M8!5e0!3m2!1sen!2sca!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection
        heading="NEED A CUSTOM TECHNOLOGY SOLUTION?"
        subtext="Speak with our team to explore the right solution for your business"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel=""
        secondaryTo=""
      />
      <Footer />
    </div>
  );
}
