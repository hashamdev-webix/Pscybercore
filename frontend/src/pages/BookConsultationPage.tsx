import { useState, FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import { submitConsultationForm, type ConsultationFormData } from "@/lib/consultationService";
import { sendConsultationEmails } from "@/lib/emailService";
import { toast } from "sonner";

const whatHappensNext = [
  "Our team reviews your request",
  "We contact you within 24 hours",
  "Consultation session is scheduled",
  "We propose a tailored solution",
];

export default function BookConsultationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ConsultationFormData, boolean>>>({});

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    serviceNeeded: "",
    preferredContactMethod: "",
    preferredDate: "",
    preferredTime: "",
    projectDetails: "",
  });

  // Validation function
  const validateField = (name: keyof ConsultationFormData, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Please enter a valid email address";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value)) return "Please enter a valid phone number";
        return "";

      default:
        return "";
    }
  };

  // Validate all required fields
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    newErrors.fullName = validateField("fullName", formData.fullName);
    newErrors.email = validateField("email", formData.email);
    newErrors.phone = validateField("phone", formData.phone);

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (touched[name as keyof ConsultationFormData]) {
      const error = validateField(name as keyof ConsultationFormData, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    const error = validateField(name as keyof ConsultationFormData, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
    });

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitConsultationForm(formData);

      if (result.success) {
        // Step 2: Send email notifications (won't block if it fails)
        try {
          await sendConsultationEmails(formData);
          toast.success("✅ Request submitted successfully! Check your email for confirmation.");
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
          // Still show success since data was saved to Firebase
          toast.success("✅ Request submitted successfully! We'll contact you soon.");
        }

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          industry: "",
          serviceNeeded: "",
          preferredContactMethod: "",
          preferredDate: "",
          preferredTime: "",
          projectDetails: "",
        });

        // Reset errors and touched
        setErrors({});
        setTouched({});
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("❌ Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-cyber-navy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-navy-foreground leading-tight">
            Book a Consultation with Our Experts
          </h1>
          <p className="mt-6 text-lg text-cyber-navy-foreground/80 max-w-2xl mx-auto">
            Let's understand your business and design the right technology solution
          </p>
          <div className="mt-8">
            <a
              href="#consultation-form"
              className="inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground hover:bg-cyber-red/90 transition-colors"
            >
              Start Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Consultation Intro */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground">
            Start Your Digital Transformation Journey
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Fill out the form below to schedule a consultation with our team. We will review your
            requirements, understand your operations and recommend the most suitable technology
            solutions for your business.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-10 border border-border shadow-xl">
            <h2 className="text-2xl font-bold text-foreground mb-2">Consultation Request Form</h2>
            <p className="text-sm text-muted-foreground mb-8">
              Fields marked with <span className="text-red-500">*</span> are required
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="John Doe"
                    className={`w-full rounded-lg border ${errors.fullName && touched.fullName ? "border-red-500 focus:ring-red-500/50" : "border-input focus:ring-cyber-red/50"} bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-cyber-red transition-colors`}
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="john@example.com"
                    className={`w-full rounded-lg border ${errors.email && touched.email ? "border-red-500 focus:ring-red-500/50" : "border-input focus:ring-cyber-red/50"} bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-cyber-red transition-colors`}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="+1 (555) 123-4567"
                    className={`w-full rounded-lg border ${errors.phone && touched.phone ? "border-red-500 focus:ring-red-500/50" : "border-input focus:ring-cyber-red/50"} bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-cyber-red transition-colors`}
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                  />
                </div>
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Select Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                >
                  <option value="">Select Industry</option>
                  <option value="repair-shop">Repair Shop</option>
                  <option value="dealership">Dealership</option>
                  <option value="fleet-operator">Fleet Operator</option>
                  <option value="transport-company">Transport Company</option>
                  <option value="logistics">Logistics Business</option>
                  <option value="startup">Startup</option>
                </select>
              </div>

              {/* Service Needed */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Select Service Needed
                </label>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                >
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

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Preferred Contact Method
                </label>
                <select
                  name="preferredContactMethod"
                  value={formData.preferredContactMethod}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                >
                  <option value="">Preferred Contact Method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Preferred Date */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                  />
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Project Details
                </label>
                <textarea
                  rows={5}
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project and requirements..."
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyber-red/50 focus:border-cyber-red transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center rounded-md bg-cyber-red px-8 py-4 text-base font-semibold text-cyber-red-foreground shadow hover:bg-cyber-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-widest uppercase text-cyber-red">
              Next Steps
            </span>
            <h2 className="mt-3 text-2xl font-bold text-foreground">What Happens Next</h2>
          </div>
          <div className="space-y-4">
            {whatHappensNext.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 bg-card rounded-xl p-5 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-cyber-red text-cyber-red-foreground flex items-center justify-center font-bold shrink-0">
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
            <div className="text-3xl mb-4">🔒</div>
            <p className="text-muted-foreground leading-relaxed">
              We focus on practical, secure and scalable solutions tailored to your business
              operations. Your information is kept confidential and used only for consultation
              purposes.
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
