import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PSCyberCore — Automotive IT & Cybersecurity Solutions" },
      { name: "description", content: "PSCyberCore delivers automotive IT, cybersecurity, fleet technology and digital solutions for modern vehicle businesses." },
      { property: "og:title", content: "PSCyberCore — Automotive IT & Cybersecurity Solutions" },
      { property: "og:description", content: "Automotive IT, cybersecurity and digital solutions for modern vehicle businesses." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <CTASection
        heading="READY TO MODERNIZE YOUR BUSINESS?"
        subtext="Work with a technology partner that understands automotive operations and digital systems"
        primaryLabel="Book Consultation"
        primaryTo="/book-consultation"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
      <Footer />
    </div>
  );
}
