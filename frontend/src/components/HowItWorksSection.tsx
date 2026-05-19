import { Link } from "react-router-dom";

const steps = [
  { number: "1", title: "Consultation" },
  { number: "2", title: "System Design" },
  { number: "3", title: "Development" },
  { number: "4", title: "Deployment" },
  { number: "5", title: "Support" },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Our Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We follow a structured approach to understand your operations, build the right system, and provide ongoing support for long-term efficiency.
          </p>
        </div>

        {/* Horizontal flow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center text-xl font-bold shadow-lg shadow-cyber-red/30">
                  {step.number}
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground">{step.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block text-cyber-red text-2xl font-bold">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center justify-center rounded-md border-2 border-cyber-red text-cyber-red px-8 py-3 text-sm font-semibold hover:bg-cyber-red hover:text-cyber-red-foreground transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
