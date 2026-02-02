
export type Category = 'UI/UX' | 'Web Apps' | 'Video Editing' | 'Graphics Design';

export type VideoSubcategory = 'Vlogs' | 'Ads' | 'Motion Graphics' | 'Talking Head';
export type GraphicsSubcategory = 'Thumbnails' | 'Logos';
export type WebAppSubcategory = 'CalTrak App';

export interface Project {
  id: string;
  title: string;
  category: Category;
  subcategory?: VideoSubcategory | GraphicsSubcategory | WebAppSubcategory;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  liveUrl?: string; // Add live URL for web apps
  client?: string;
  year: string;
}

export interface WorkCategory {
  id: string;
  name: string;
  coolName: string;
  description: string;
  icon: string;
  subcategories?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
