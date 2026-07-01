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
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
}
