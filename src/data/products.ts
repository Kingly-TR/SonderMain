export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "beta" | "coming_soon";
  href?: string;
  tags: string[];
  icon: string;
};

export const products: Product[] = [
  {
    slug: "sondermusic",
    name: "SonderMusic",
    tagline: "AI-generated Spotify playlists, perfectly tuned to you.",
    description: "Create dynamic, taste-aware Spotify playlists using AI. Share, refresh, and explore new sounds automatically.",
    status: "live",
    href: "https://example.com/sondermusic",
    tags: ["AI", "Music", "Spotify"],
    icon: "Music",
  },
  {
    slug: "sonderuni",
    name: "SonderUni",
    tagline: "Find universities that match your grades—instantly.",
    description: "Input your grades and constraints; get a personalized list of universities you can target, with filters and insights.",
    status: "live",
    href: "https://example.com/sonderuni",
    tags: ["Education", "Admissions", "AI"],
    icon: "GraduationCap",
  },
  {
    slug: "sondercloud",
    name: "SonderCloud",
    tagline: "Infrastructure automation that just works.",
    description: "Deploy, scale, and manage your applications with intelligent automation and zero-config infrastructure.",
    status: "coming_soon",
    tags: ["Infra", "Automation"],
    icon: "Cloud",
  },
  {
    slug: "sonderpay",
    name: "SonderPay",
    tagline: "Smart payments, simplified.",
    description: "Automated payment processing with intelligent routing, fraud detection, and seamless integration.",
    status: "beta",
    tags: ["Payments", "Automation"],
    icon: "Wallet",
  },
];

export const getAllTags = (): string[] => {
  const tagSet = new Set<string>();
  products.forEach(product => {
    product.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const filterProducts = (searchTerm: string, selectedTags: string[]): Product[] => {
  return products.filter(product => {
    const matchesSearch = searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => product.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
};
