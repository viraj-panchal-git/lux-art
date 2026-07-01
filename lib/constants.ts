export const BRAND_NAME = "LuxLayer Interiors & Furniture";

export const WHATSAPP = {
  phone: "919714646592",
  owner: "Trupal Panchal",
} as const;

export function buildWhatsAppUrl(data: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}): string {
  const text = `New Consultation Request:
Name: ${data.name}
Email: ${data.email}
Project Type: ${data.projectType}
Message: ${data.message}`;

  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(text)}`;
}
