export interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  vision: string;
  imageUrl: string;
}