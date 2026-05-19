const reasons = [
  {
    title: "Automotive Focus",
    description: "Built specifically for vehicle-based businesses.",
  },
  {
    title: "Practical Systems",
    description: "Solutions designed for real-world usage.",
  },
  {
    title: "Cybersecurity First",
    description: "Strong focus on protecting systems and data.",
  },
  {
    title: "Scalable Solutions",
    description: "Systems that grow with your business.",
  },
  {
    title: "Data Driven",
    description: "Better insights through structured data.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose PSCyberCore
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:shadow-lg hover:shadow-cyber-red/10 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-cyber-red transition-colors">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
