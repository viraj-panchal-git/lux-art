export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "palette" | "armchair" | "hammer" | "building";
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  initials: string;
  thumbnail: string;
  thumbnailAlt: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: "factory" | "layers" | "sparkles" | "user";
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
}

export interface JournalArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
}

export interface ProjectTypeGroup {
  label: string;
  options: string[];
}
