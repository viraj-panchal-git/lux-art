export const BRAND_NAME = "LuxLayer Interiors & Furniture";
export const CONTACT_EMAIL = "luxlayerinteriors@gmail.com";
export const SITE_URL = "https://luxlayerinteriors.com";

export const CREATIVE_DIRECTOR = {
  name: "Trupal Panchal",
  title: "Creative Director",
} as const;

export const WHATSAPP = {
  phone: "919714646592",
} as const;

export function buildWhatsAppUrl(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}): string {
  const text = `New Consultation Request:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}
Message: ${data.message}`;

  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(text)}`;
}

const PACKAGE_QUOTE_TEMPLATES: Record<string, string> = {
  essential: `Hello LuxLayer Interiors,

I am interested in the *Essential* service package.

Package includes: Space Planning, 2D Layout, Standard Materials, Modular Furniture, and more.

Please share a quote and next steps.

Thank you.`,
  premium: `Hello LuxLayer Interiors,

I am interested in the *Premium* service package.

Package includes: Everything in Essential plus 3D Design, Premium Materials, Custom Furniture, Modular Kitchen, and more.

Please share a quote and next steps.

Thank you.`,
  luxury: `Hello LuxLayer Interiors,

I am interested in the *Luxury* service package.

Package includes: Everything in Premium plus Bespoke Design, Luxury Finishes, Smart Home Integration, Turnkey Execution, and Dedicated Project Manager.

Please share a quote and next steps.

Thank you.`,
};

export function buildPackageQuoteWhatsAppUrl(packageId: string): string {
  const text =
    PACKAGE_QUOTE_TEMPLATES[packageId] ??
    `Hello LuxLayer Interiors,\n\nI would like a quote for a service package.\n\nThank you.`;

  return `https://wa.me/${WHATSAPP.phone}?text=${encodeURIComponent(text)}`;
}
