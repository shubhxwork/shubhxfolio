import { Project, WorkCategory } from './types';

export const AGENCY = {
  name: 'REDWHISK',
  url: 'https://www.redwhisk.media/',
  tagline: 'High-Performance Visual Content Agency',
  description: 'A collective of elite creators delivering enterprise-scale video editing and UI/UX solutions at the speed of culture.'
};

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: 'ui-ux',
    name: 'UI/UX',
    coolName: 'PIXEL ARCHITECTS',
    description: 'Crafting digital experiences that merge aesthetic excellence with psychological precision',
    icon: '🎨',
    subcategories: []
  },
  {
    id: 'web-apps',
    name: 'Web Apps',
    coolName: 'CODE SCULPTORS',
    description: 'Building high-performance web applications with cutting-edge technology stacks',
    icon: '⚡',
    subcategories: ['CalTrak App']
  },
  {
    id: 'video-editing',
    name: 'Video Editing',
    coolName: 'MOTION MASTERS',
    description: 'Cinematic storytelling through high-octane post-production and visual narratives',
    icon: '🎬',
    subcategories: ['Vlogs', 'Ads', 'Motion Graphics', 'Talking Head', 'Reels']
  },
  {
    id: 'graphics-design',
    name: 'Graphics Design',
    coolName: 'VISUAL ALCHEMISTS',
    description: 'Converting raw concepts into conversion-optimized visual assets',
    icon: '✨',
    subcategories: ['Thumbnails', 'Logos']
  }
];

export const UX_LAWS = [
  {
    title: "Aesthetic-Usability Effect",
    description: "Users often perceive aesthetically pleasing design as design that's more usable.",
    icon: "✦"
  },
  {
    title: "Choice Overload",
    description: "People get overwhelmed when presented with a large number of options (Paradox of Choice).",
    icon: "🌀"
  },
  {
    title: "Cognitive Load",
    description: "The amount of mental resources needed to understand and interact with an interface.",
    icon: "🧠"
  },
  {
    title: "Doherty Threshold",
    description: "Productivity soars when a computer and its users interact at a pace (<400ms).",
    icon: "⚡"
  },
  {
    title: "Fitts's Law",
    description: "The time to acquire a target is a function of the distance to and size of the target.",
    icon: "🎯"
  },
  {
    title: "Hick's Law",
    description: "The time it takes to make a decision increases with the number and complexity of choices.",
    icon: "⚖️"
  },
  {
    title: "Jakob's Law",
    description: "Users prefer your site to work the same way as all the other sites they already know.",
    icon: "🔄"
  },
  {
    title: "Miller's Law",
    description: "The average person can only keep 7 (± 2) items in their working memory.",
    icon: "📦"
  },
  {
    title: "Occam's Razor",
    description: "Among competing hypotheses, the one with the fewest assumptions should be selected.",
    icon: "🔪"
  },
  {
    title: "Pareto Principle",
    description: "Roughly 80% of the effects come from 20% of the causes.",
    icon: "📈"
  },
  {
    title: "Peak-End Rule",
    description: "People judge an experience largely based on how they felt at its peak and at its end.",
    icon: "🏔️"
  },
  {
    title: "Zeigarnik Effect",
    description: "People remember uncompleted or interrupted tasks better than completed tasks.",
    icon: "⏳"
  }
];

export const PROJECTS: Project[] = [
  // UI/UX Projects
  {
    id: '1',
    title: 'Pulse Fintech 2.0',
    category: 'UI/UX',
    description: 'Re-engineering digital wealth management with high-contrast data visualization and immersive micro-interactions. Applied Aesthetic-Usability Effect to drive user trust.',
    thumbnail: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1200',
    client: 'CyberBank',
    year: '2025'
  },
  {
    id: '4',
    title: 'Sphere 3.0',
    category: 'UI/UX',
    description: 'A minimalist crypto wallet interface focusing on the peak-end rule and accessibility standards.',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    client: 'Global Crypto',
    year: '2023'
  },
  {
    id: '13',
    title: 'CalTrak Interface',
    category: 'UI/UX',
    description: 'Modern calorie tracking interface with intuitive navigation, clean data visualization, and user-centered design principles for optimal health management.',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    liveUrl: 'https://cal-trak-app.vercel.app/',
    client: 'Personal Project',
    year: '2025'
  },
  {
    id: '14',
    title: 'REDWHISK Agency',
    category: 'UI/UX',
    description: 'High-performance agency website with premium aesthetics, smooth animations, and conversion-optimized user flows. Showcases elite creative collective branding.',
    thumbnail: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&q=80&w=1200',
    liveUrl: 'https://www.redwhisk.media/',
    client: 'REDWHISK Agency',
    year: '2024'
  },
  
  // Web Apps Projects
  {
    id: '2',
    title: 'Aether Social',
    category: 'Web Apps',
    description: 'Next-gen social architecture featuring real-time collaborative spaces. Reduced cognitive load using the Law of Common Region.',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
    client: 'Aether Lab',
    year: '2024'
  },
  {
    id: '6',
    title: 'TaskFlow Pro',
    category: 'Web Apps',
    description: 'Enterprise project management platform with AI-powered workflow optimization and real-time collaboration features.',
    thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200',
    client: 'FlowTech',
    year: '2024'
  },
  {
    id: '12',
    title: 'CalTrak App',
    category: 'Web Apps',
    subcategory: 'CalTrak App',
    description: 'Advanced calorie tracking application with intuitive UI, real-time nutrition analysis, and personalized meal planning features.',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    liveUrl: 'https://cal-trak-app.vercel.app/',
    client: 'Personal Project',
    year: '2025'
  },
  
  // Video Editing Projects
  {
    id: '3',
    title: 'Kinetic 2024 Reel',
    category: 'Video Editing',
    subcategory: 'Ads',
    description: 'High-octane commercial montage utilizing rhythmic cuts and custom sound design. Optimized for the Serial Position Effect to maximize retention.',
    thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200',
    client: 'ActiveBrands',
    year: '2024'
  },
  {
    id: '7',
    title: 'Creator Spotlight',
    category: 'Video Editing',
    subcategory: 'Vlogs',
    description: 'Documentary-style vlog series featuring emerging creators with cinematic color grading and dynamic transitions.',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
    client: 'Creator Hub',
    year: '2024'
  },
  {
    id: '8',
    title: 'Tech Talk Series',
    category: 'Video Editing',
    subcategory: 'Talking Head',
    description: 'Professional talking head videos with dynamic graphics, lower thirds, and seamless audio synchronization.',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=1200',
    client: 'TechCorp',
    year: '2024'
  },
  {
    id: '9',
    title: 'Brand Dynamics',
    category: 'Video Editing',
    subcategory: 'Motion Graphics',
    description: 'Animated brand identity system with fluid transitions, kinetic typography, and particle effects.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    client: 'DynamicBrands',
    year: '2024'
  },
  {
    id: '15',
    title: 'Viral Moments',
    category: 'Video Editing',
    subcategory: 'Reels',
    description: 'High-energy short-form content optimized for social media engagement with dynamic cuts and trending audio.',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200',
    client: 'Social Creators',
    year: '2024'
  },
  
  // Graphics Design Projects
  {
    id: '5',
    title: 'Viral Hooks Pack',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Psychology-driven visual engineering designed to maximize CTR. Leverages Von Restorff effect to stand out in feeds.',
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200',
    client: 'Creator Global',
    year: '2024'
  },
  {
    id: '10',
    title: 'Nexus Identity',
    category: 'Graphics Design',
    subcategory: 'Logos',
    description: 'Complete brand identity system with scalable logo design, color psychology, and visual hierarchy principles.',
    thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&q=80&w=1200',
    client: 'Nexus Corp',
    year: '2024'
  },
  {
    id: '11',
    title: 'YouTube Mastery Kit',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-conversion thumbnail templates with A/B tested color schemes and attention-grabbing typography.',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200',
    client: 'Content Creators',
    year: '2024'
  }
];

export const SERVICES = [
  {
    title: 'Visual Experience',
    description: 'Building premium interfaces and high-performance digital ecosystems using Miller\'s Law for information chunking.'
  },
  {
    title: 'Post Production',
    description: 'High-octane video editing using the Peak-End Rule to create memorable cinematic experiences.'
  },
  {
    title: 'Visual Strategy',
    description: 'Designing high-performance assets leveraging Hick\'s Law to streamline user decision pathways.'
  }
];