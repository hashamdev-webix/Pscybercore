import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    // Slide 1: Automotive IT — car dashboard + digital systems
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    headline: "Automotive IT & Cybersecurity Solutions for Modern Vehicle Businesses",
    subhead: "Secure, automate and optimize your operations with smart technology systems",
  },
  {
    // Slide 2: Fleet GPS tracking — trucks on highway
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
    headline: "Smart Fleet Technology & Data-Driven Operations",
    subhead: "Real-time tracking, reporting and operational visibility for transport businesses",
  },
  {
    // Slide 3: Cybersecurity — lock/shield on digital screen
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80",
    headline: "Protect Your Business with Advanced Cybersecurity",
    subhead: "Safeguard your systems, data and workflows from modern digital threats",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-cyber-navy/70" />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              {slides[current].headline}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {slides[current].subhead}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/book-consultation"
            className="inline-flex items-center gap-2 justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-white shadow hover:bg-cyber-red/90 transition-colors"
          >
            Book Consultation <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 justify-center rounded-md border-2 border-white/50 px-8 py-4 text-base font-semibold text-white hover:border-white hover:bg-white/10 transition-colors"
          >
            View Solutions
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-cyber-red w-8" : "bg-white/40 w-2"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
