import { Project, FounderInfo } from './types';

// Ensure you place your 'sn-logo.png' file in the public/ folder of your project
export const BRAND_LOGO = "/sn-logo.png"; 

export const NAV_ITEMS = [
  { label: 'Showcase', href: '#showcase' },
  { label: 'Vision', href: '#founder' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Obsidian Villa",
    category: "Residential Exterior",
    // Represents a high-quality modern luxury villa exterior
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description: "A modern masterpiece combining raw concrete with panoramic glass facades."
  },
  {
    id: 2,
    title: "Azure Lounge",
    category: "Commercial Interior",
    // Represents: /projects/project2.jpg
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "High-end lounge design focusing on ambient lighting and velvet textures."
  },
  {
    id: 3,
    title: "Serenity Penthouse",
    category: "Residential Interior",
    // Represents: /projects/project3.jpg
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description: "Minimalist aesthetic with warm wood tones and open-plan living."
  },
  {
    id: 4,
    title: "Urban Oasis Garden",
    category: "Landscape Design",
    // Represents: /projects/project4.jpg
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "A seamless blend of exterior hardscaping and lush vertical gardens."
  }
];

export const FOUNDER_DATA: FounderInfo = {
  name: "S. Nathish Kumar",
  role: "Founder & Lead Designer",
  vision: "My vision is to dissolve the boundaries between structure and nature. We do not just build spaces; we curate atmospheres that breathe, evolve, and inspire. True luxury lies in the silence of perfect proportion.",
  // Updated path to ensure it picks up the file from the public directory
  imageUrl: "/founder.jpg" 
};

export const CONTACT_INFO = {
  email: "sninteriorexterior@gmail.com",
  phone: "+91 97901 25395",
  address: "Opposite Taluk Office, Nanguneri, Tirunelveli - 627108, Tamil Nadu",
  whatsapp: "919791993350"
};