import { Link } from "react-router-dom";

const industries = [
  { name: "Repair Shops" },
  { name: "Dealerships" },
  { name: "Fleet Operators" },
  { name: "Transport Companies" },
  { name: "Logistics Businesses" },
  { name: "Mobility & Automotive Startups" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We design tailored systems for vehicle-dependent businesses across multiple automotive sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to="/industries"
              className="group flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-cyber-red/40 hover:shadow-lg hover:shadow-cyber-red/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-sm font-semibold text-foreground group-hover:text-cyber-red transition-colors">{industry.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
