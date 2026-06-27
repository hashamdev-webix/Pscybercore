import emailjs from "@emailjs/browser";
import { ConsultationFormData } from "./consultationService";

// EmailJS Configuration
// Get these from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

/**
 * Send consultation form confirmation email
 * @param formData - Consultation form data
 * @returns Promise with success status
 */
export async function sendConsultationEmail(formData: ConsultationFormData) {
  try {
    // Prepare email template parameters
    const templateParams = {
      to_name: "PScybercore Team",
      from_name: formData.fullName,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.companyName || "Not provided",
      industry: formData.industry || "Not specified",
      service: formData.serviceNeeded || "Not specified",
      contact_method: formData.preferredContactMethod || "Not specified",
      preferred_date: formData.preferredDate || "Not specified",
      preferred_time: formData.preferredTime || "Not specified",
      message: formData.projectDetails || "No additional details provided",
      reply_to: formData.email,
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    console.log("Email sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

/**
 * Send confirmation email to the customer
 * @param formData - Consultation form data
 * @returns Promise with success status
 */
export async function sendCustomerConfirmationEmail(formData: ConsultationFormData) {
  try {
    // Template parameters for customer confirmation
    const templateParams = {
      to_name: formData.fullName,
      to_email: formData.email,
      company_name: "PScybercore",
      service_requested: formData.serviceNeeded || "Consultation",
      preferred_date: formData.preferredDate || "To be determined",
      preferred_time: formData.preferredTime || "To be determined",
    };

    // Use a separate template for customer confirmation
    const CUSTOMER_TEMPLATE_ID =
      import.meta.env.VITE_EMAILJS_CUSTOMER_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      CUSTOMER_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY,
    );

    console.log("Customer confirmation email sent:", response);
    return { success: true, response };
  } catch (error) {
    console.error("Error sending customer confirmation:", error);
    // Don't throw error - customer confirmation is optional
    return { success: false, error };
  }
}

/**
 * Send both admin notification and customer confirmation
 * @param formData - Consultation form data
 * @returns Promise with success status
 */
export async function sendConsultationEmails(formData: ConsultationFormData) {
  try {
    // Send admin notification (required)
    await sendConsultationEmail(formData);

    // Send customer confirmation (optional - won't fail if this fails)
    await sendCustomerConfirmationEmail(formData);

    return { success: true };
  } catch (error) {
    console.error("Error in email service:", error);
    throw error;
  }
}
