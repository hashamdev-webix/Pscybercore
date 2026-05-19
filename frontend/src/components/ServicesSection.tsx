import { Link } from "react-router-dom";

const coreSolutions = [
  {
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    title: "Automotive IT Solutions",
    id: "automotive-it",
  },
  {
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    title: "Fleet Tech & GPS Tracking",
    id: "fleet-technology",
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    title: "Cybersecurity Support",
    id: "cybersecurity",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    title: "Custom Software Development",
    id: "custom-software",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">Our Solutions</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            Core Solutions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We provide end-to-end technology solutions designed to protect and optimize every layer of your automotive business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSolutions.map((solution) => (
            <Link
              key={solution.title}
              to={`/solutions#${solution.id}`}
              className="group rounded-xl overflow-hidden border border-border hover:border-cyber-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-red/10 hover:-translate-y-1 bg-card"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80"; }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-foreground group-hover:text-cyber-red transition-colors">{solution.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center justify-center rounded-md border-2 border-cyber-red text-cyber-red px-8 py-3 text-sm font-semibold hover:bg-cyber-red hover:text-cyber-red-foreground transition-colors"
          >
            View More Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
