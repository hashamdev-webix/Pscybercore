import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  serviceNeeded: string;
  preferredContactMethod: string;
  preferredDate: string;
  preferredTime: string;
  projectDetails: string;
}

/**
 * Submit consultation form data to Firestore
 * @param formData - Consultation form data
 * @returns Promise with document ID
 */
export async function submitConsultationForm(formData: ConsultationFormData) {
  try {
    // Firestore collection reference
    const consultationsRef = collection(db, "consultations");

    // Add document to Firestore
    const docRef = await addDoc(consultationsRef, {
      ...formData,
      status: "pending", // Initial status
      createdAt: serverTimestamp(),
    });

    console.log("Consultation request submitted with ID:", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting consultation form:", error);
    throw error;
  }
}
