import axios from "axios";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  theme: string;
  question: string;
}

export const submitContactForm = async (
  data: ContactFormData
): Promise<void> => {
  try {
    const response = await axios.post(
      "https://server.internal.anjela.info/api/contact_form",
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log("Form submitted successfully:", response.data);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Грешка при изпращане на заявката. Моля, опитайте отново.");
  }
};
