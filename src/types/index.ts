export interface NavItem {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  badge: string;
  actives: string[];
  volume: string;
  yieldPerBottle: string;
  marginB2B: string;
  colorGradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  city: string;
  content: string;
  metric: string;
  rating: number;
}

export interface Pillar {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
  details: string[];
}

export interface Brand {
  name: string;
  origin: string;
  specialty: string;
  badge: string;
}

export interface ShowcaseStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  tag: string;
}
