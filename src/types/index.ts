export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavMenu {
  label: string;
  items: NavLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  tag: string;
}

export type RoadmapStatus = 'done' | 'active' | 'next' | 'later';

export interface RoadmapPhase {
  quarter: string;
  title: string;
  items: string[];
  status: RoadmapStatus;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FamilyRoleDefinition {
  name: string;
  description: string;
  permissions: string[];
}
