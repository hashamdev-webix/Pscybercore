import { Link } from "@tanstack/react-router";
import contactBg from "@/assets/contact-bg.jpg";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactBg})` }}
      />
      <div className="absolute inset-0 bg-background/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Secure Your Business?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Contact us today for a free consultation. Our experts will evaluate your current operations and recommend actionable improvements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info cards */}
          <div className="space-y-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Call Us",
                value: "+1 825 807 6307",
                desc: "Available 24/7 for emergencies",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email Us",
                value: "info@pscybercore.com",
                desc: "We'll respond within 24 hours",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Visit Us",
                value: "219-1210 20 Ave SE, Calgary, AB, Canada T2G 1M8",
                desc: "By appointment only",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-5 bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-cyber-red/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-cyber-red/10 text-cyber-red flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.label}</div>
                  <div className="text-base font-medium text-cyber-red mt-0.5">{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-card/80 backdrop-blur-sm rounded-xl p-8 border border-border shadow-xl">
            <h3 className="text-lg font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                <input type="tel" placeholder="+1 (000) 000-0000" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                <input type="text" placeholder="Company Name" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Inquiry Type</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors">
                  <option value="">Select Inquiry Type</option>
                  <option value="general">General Inquiry</option>
                  <option value="service">Service Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea rows={4} placeholder="Tell us about your technology needs..." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors">
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Our team typically responds within 24 hours. For urgent requests, please call <a href="tel:+18258076307" className="text-cyber-red hover:underline">+1 825 807 6307</a>.
        </p>
      </div>
    </section>
  );
}
