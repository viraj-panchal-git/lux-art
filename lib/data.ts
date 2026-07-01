import type {
  Differentiator,
  JournalArticle,
  ProcessStep,
  Project,
  ProjectTypeGroup,
  Service,
  ServicePackage,
  Testimonial,
} from "@/lib/types";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=85",
  about: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=2000&q=85",
  philosophy: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000&q=85",
  og: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=85",
} as const;

export const PROJECTS: Project[] = [
  {
    id: "modern-penthouse",
    title: "Modern Penthouse",
    location: "Mumbai, Maharashtra",
    description:
      "A sky-high sanctuary where bespoke walnut furniture, honed marble, and floor-to-ceiling glass define an urban retreat of quiet luxury against the Mumbai skyline.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=2000&q=85",
    imageAlt: "Modern Mumbai penthouse living room with city views",
  },
  {
    id: "minimalist-villa",
    title: "Minimalist Villa",
    location: "Udaipur, Rajasthan",
    description:
      "Custom-crafted furniture and neutral tones sculpt a serene lakeside estate — where Rajasthani architecture breathes and every surface tells a story.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=2000&q=85",
    imageAlt: "Rajasthani palace interior with ornate arches and traditional craftsmanship in Udaipur",
  },
  {
    id: "luxury-hotel-suite",
    title: "Luxury Hotel Suite",
    location: "Bengaluru, Karnataka",
    description:
      "Hand-finished furnishings and warm ambient lighting create an intimate hospitality experience — refined comfort for Bengaluru's discerning travellers.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=2000&q=85",
    imageAlt: "Luxury hotel suite interior in Bengaluru",
  },
  {
    id: "coastal-retreat",
    title: "Coastal Retreat",
    location: "Goa, India",
    description:
      "Arabian Sea views framed by teak and linen textures — a coastal residence where indoor calm meets the rhythm of Goa's shoreline.",
    image:
      "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=2000&q=85",
    imageAlt: "Luxury Goan coastal living room with teak accents and natural light",
  },
  {
    id: "urban-loft",
    title: "Urban Loft Redesign",
    location: "Delhi, India",
    description:
      "Industrial bones refined with bespoke cabinetry and sculptural lighting — a Delhi loft transformed into a gallery of contemporary living.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&q=85",
    imageAlt: "Contemporary Delhi apartment with bespoke cabinetry and lighting",
  },
  {
    id: "heritage-haveli",
    title: "Heritage Haveli Restoration",
    location: "Jaipur, India",
    description:
      "Centuries-old architecture honoured through hand-carved furniture and restored courtyards — heritage reimagined for modern luxury.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000&q=85",
    imageAlt: "Heritage haveli courtyard and ornate interior in Jaipur",
  },
];

export const SERVICES: Service[] = [
  {
    id: "luxury-interior-design",
    title: "Luxury Interior Design",
    description:
      "Bespoke spatial narratives crafted for discerning residences — from concept to completion.",
    icon: "palette",
  },
  {
    id: "bespoke-furniture-design",
    title: "Bespoke Furniture Design",
    description:
      "Original furniture pieces designed to harmonize with your architecture and lifestyle.",
    icon: "armchair",
  },
  {
    id: "custom-furniture-manufacturing",
    title: "Custom Furniture Manufacturing",
    description:
      "Master craftsmanship brought to life — every piece built to exacting standards in our workshop.",
    icon: "hammer",
  },
  {
    id: "architectural-spatial-design",
    title: "Architectural & Spatial Design",
    description:
      "Structural vision aligned with aesthetic intent — immersive environments that endure.",
    icon: "building",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "discovery", step: 1, title: "Discovery" },
  { id: "design", step: 2, title: "Design" },
  { id: "craft", step: 3, title: "Craft" },
  { id: "deliver", step: 4, title: "Deliver" },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "in-house",
    title: "In-House Manufacturing",
    description:
      "Every piece crafted in our own workshop, not outsourced.",
    icon: "factory",
  },
  {
    id: "end-to-end",
    title: "End-to-End Service",
    description:
      "From first sketch to final installation, we handle everything.",
    icon: "layers",
  },
  {
    id: "bespoke",
    title: "Bespoke Only",
    description:
      "We never use off-the-shelf solutions. Every element is custom.",
    icon: "sparkles",
  },
  {
    id: "named-designer",
    title: "Creative Leadership",
    description:
      "Led personally by Trupal Panchal, Creative Director, with 15+ years of expertise.",
    icon: "user",
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: "essential",
    name: "Essential",
    tagline:
      "Ideal for budget-conscious homeowners looking for stylish and functional interiors.",
    features: [
      "Space Planning",
      "2D Layout",
      "Standard Material Selection",
      "Modular Furniture",
      "Basic False Ceiling",
      "Standard Lighting Plan",
      "Project Coordination",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline:
      "Designed for clients seeking a balance of luxury, functionality, and customization.",
    features: [
      "Everything in Essential",
      "3D Design & Visualization",
      "Premium Material Selection",
      "Custom Furniture",
      "Modular Kitchen Design",
      "Wardrobe Design",
      "Designer Lighting",
      "Site Supervision",
    ],
    highlighted: true,
  },
  {
    id: "luxury",
    name: "Luxury",
    tagline:
      "A complete turnkey solution for premium homes and luxury spaces.",
    features: [
      "Everything in Premium",
      "Bespoke Interior Design",
      "Luxury Materials & Finishes",
      "Smart Home Integration",
      "Designer Furniture",
      "Imported Finishes",
      "Complete Turnkey Execution",
      "Dedicated Project Manager",
      "End-to-End Project Management",
    ],
  },
];

export const PROJECT_TYPE_GROUPS: ProjectTypeGroup[] = [
  {
    label: "Residential",
    options: [
      "1 BHK Apartment",
      "2 BHK Apartment",
      "3 BHK Apartment",
      "4 BHK Apartment",
      "Villa",
      "Bungalow",
      "Penthouse",
      "Farmhouse",
    ],
  },
  {
    label: "Commercial",
    options: [
      "Office",
      "Retail Store",
      "Showroom",
      "Restaurant & Cafe",
      "Salon & Spa",
      "Clinic",
      "Hotel",
      "Co-working Space",
    ],
  },
  {
    label: "Interior Services",
    options: [
      "Modular Kitchen",
      "Living Room",
      "Bedroom",
      "Bathroom",
      "Home Renovation",
      "Office Renovation",
      "Turnkey Interior Project",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "LuxLayer transformed our penthouse with interiors and custom furniture that feel utterly inevitable. Every detail is intentional.",
    attribution: "A.R. — Penthouse Client, Mumbai",
    initials: "AR",
  },
  {
    id: "2",
    quote:
      "Their bespoke furniture and spatial design elevated our lakeside home beyond imagination. This is craftsmanship at the highest level.",
    attribution: "G.M. — Estate Owner, Udaipur",
    initials: "GM",
  },
  {
    id: "3",
    quote:
      "From concept furniture to finished suites, LuxLayer delivered a hospitality experience that feels truly five-star.",
    attribution: "F.K. — Hospitality Developer, Bengaluru",
    initials: "FK",
  },
  {
    id: "4",
    quote:
      "Rarely does a studio achieve this balance of warmth and precision across interiors and furniture. The result exceeds anything we imagined.",
    attribution: "S.L. — Art Collector, Delhi",
    initials: "SL",
  },
];

/* TODO: Connect to blog CMS or static markdown files */
export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "1",
    category: "Trends",
    title: "The Return of Warm Minimalism",
    excerpt:
      "How natural materials and restrained palettes are redefining luxury interiors for the Indian home in the decade ahead.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
    imageAlt: "Warm minimalist luxury interior for an Indian home",
  },
  {
    id: "2",
    category: "Materials",
    title: "Marble, Wood, and Light",
    excerpt:
      "A study in the three elements that anchor every LuxLayer project — and how we source them with intention from across India.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
    imageAlt: "Indian marble and wood interior detail",
  },
  {
    id: "3",
    category: "Project Story",
    title: "Inside the Heritage Haveli",
    excerpt:
      "Restoring a Jaipur haveli landmark while introducing bespoke furniture that honours centuries of Rajasthani craft and courtyard living.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
    imageAlt: "Jaipur heritage haveli restoration project",
  },
];
