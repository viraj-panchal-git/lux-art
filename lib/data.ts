import type { Project, Service, Testimonial } from "@/lib/types";

export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  philosophy: "/images/philosophy.jpg",
} as const;

export const PROJECTS: Project[] = [
  {
    id: "modern-penthouse",
    title: "Modern Penthouse",
    location: "Manhattan, New York",
    description:
      "A sky-high sanctuary where bespoke walnut furniture, honed marble, and floor-to-ceiling glass define an urban retreat of quiet luxury.",
    image: "/images/project-penthouse.jpg",
    imageAlt: "Modern penthouse living room with panoramic city views",
  },
  {
    id: "minimalist-villa",
    title: "Minimalist Villa",
    location: "Tuscany, Italy",
    description:
      "Custom-crafted furniture and neutral tones sculpt a serene countryside estate — where architecture breathes and every surface tells a story.",
    image: "/images/project-villa.jpg",
    imageAlt: "Minimalist villa interior with neutral tones and natural light",
  },
  {
    id: "luxury-hotel-suite",
    title: "Luxury Hotel Suite",
    location: "Dubai, UAE",
    description:
      "Hand-finished furnishings and warm ambient lighting create an intimate hospitality experience — refined comfort at its most cinematic.",
    image: "/images/project-hotel.jpg",
    imageAlt: "Luxury hotel suite with warm ambient lighting",
  },
];

export const SERVICES: Service[] = [
  {
    id: "luxury-interior-design",
    title: "Luxury Interior Design",
    description:
      "Bespoke spatial narratives crafted for discerning residences — from concept to completion.",
  },
  {
    id: "bespoke-furniture-design",
    title: "Bespoke Furniture Design",
    description:
      "Original furniture pieces designed to harmonize with your architecture and lifestyle.",
  },
  {
    id: "custom-furniture-manufacturing",
    title: "Custom Furniture Manufacturing",
    description:
      "Master craftsmanship brought to life — every piece built to exacting standards in our workshop.",
  },
  {
    id: "architectural-spatial-design",
    title: "Architectural & Spatial Design",
    description:
      "Structural vision aligned with aesthetic intent — immersive environments that endure.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "LuxLayer transformed our penthouse with interiors and custom furniture that feel utterly inevitable. Every detail is intentional.",
    attribution: "Private Client — Manhattan",
  },
  {
    id: "2",
    quote:
      "Their bespoke furniture and spatial design elevated our estate beyond imagination. This is craftsmanship at the highest level.",
    attribution: "Estate Owner — Tuscany",
  },
  {
    id: "3",
    quote:
      "From concept furniture to finished suites, LuxLayer delivered a hospitality experience that feels truly five-star.",
    attribution: "Hospitality Developer — Dubai",
  },
  {
    id: "4",
    quote:
      "Rarely does a studio achieve this balance of warmth and precision across interiors and furniture. The result exceeds anything we imagined.",
    attribution: "Art Collector — London",
  },
];
