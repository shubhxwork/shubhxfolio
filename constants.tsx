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
    subcategories: ['Channel Arts', 'Logos', 'Thumbnails']
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
    title: "Chunking",
    description: "Individual pieces of information are broken down and grouped together in a meaningful whole.",
    icon: "📦"
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
    title: "Flow",
    description: "The mental state of being fully immersed in a feeling of energized focus and enjoyment.",
    icon: "🌊"
  },
  {
    title: "Goal-Gradient Effect",
    description: "The tendency to approach a goal increases with proximity to the goal.",
    icon: "🏁"
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
    title: "Law of Common Region",
    description: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
    icon: "🔲"
  },
  {
    title: "Law of Proximity",
    description: "Objects that are near, or proximate to each other, tend to be grouped together.",
    icon: "📍"
  },
  {
    title: "Law of Similarity",
    description: "The human eye tends to perceive similar elements as a complete picture, shape, or group.",
    icon: "👥"
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
    title: "Serial Position Effect",
    description: "Users have a propensity to best remember the first and last items in a series.",
    icon: "📋"
  },
  {
    title: "Von Restorff Effect",
    description: "When multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
    icon: "⭐"
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
    id: '13',
    title: 'CalTrak Interface',
    category: 'UI/UX',
    description: 'Modern calorie tracking interface applying Jakob\'s Law for familiar patterns, Fitts\'s Law for optimal button sizing, and Cognitive Load theory for streamlined data entry.',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    liveUrl: 'https://cal-trak-app.vercel.app/',
    client: 'Personal Project',
    year: '2025'
  },
  {
    id: '14',
    title: 'REDWHISK Agency',
    category: 'UI/UX',
    description: 'High-performance agency website leveraging the Von Restorff Effect for memorable branding, Flow principles for seamless navigation, and the Goal-Gradient Effect for conversion optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&q=80&w=1200',
    liveUrl: 'https://www.redwhisk.media/',
    client: 'REDWHISK Agency',
    year: '2024'
  },
  
  // Web Apps Projects
  {
    id: '12',
    title: 'CalTrak App',
    category: 'Web Apps',
    subcategory: 'CalTrak App',
    description: 'Advanced calorie tracking application leveraging Occam\'s Razor for simplified workflows, Law of Proximity for related data grouping, and Working Memory principles for efficient data input.',
    thumbnail: '/images/projects/web-apps/caltrak-logo.png',
    liveUrl: 'https://cal-trak-app.vercel.app/',
    client: 'Personal Project',
    year: '2025'
  },
  
  // Video Editing Projects
  {
    id: '7',
    title: 'James Symons Vlog1',
    category: 'Video Editing',
    subcategory: 'Vlogs',
    description: 'Documentary-style vlog series featuring emerging creators with cinematic color grading and dynamic transitions.',
    youtubeUrl: 'https://youtu.be/gSzVHt3QpaI?si=-4AiVZsadOUaBCcK',
    client: 'Creator Hub',
    year: '2024'
  },
  {
    id: '18',
    title: 'James Symons Vlog2',
    category: 'Video Editing',
    subcategory: 'Vlogs',
    description: 'Behind-the-scenes vlog showcasing the creative process and daily workflow of content creation.',
    youtubeUrl: 'https://youtu.be/CfisMMq_I1I?si=HN9F0caFsrNFA2iD',
    client: 'Personal Brand',
    year: '2024'
  },
  {
    id: '19',
    title: 'James Symons Vlog3',
    category: 'Video Editing',
    subcategory: 'Vlogs',
    description: 'Personal vlog documenting the creative journey, challenges, and breakthroughs in design and video production.',
    youtubeUrl: 'https://youtu.be/r2qkyDPuVi4?si=jLKNfKh9kkJqkmxa',
    client: 'Personal Brand',
    year: '2024'
  },
  {
    id: '8',
    title: 'Iestyn Drummond Talking Head 1',
    category: 'Video Editing',
    subcategory: 'Talking Head',
    description: 'Professional talking head videos with dynamic graphics, lower thirds, and seamless audio synchronization.',
    youtubeUrl: 'https://www.youtube.com/watch?v=HbyoztXNvGA',
    client: 'TechCorp',
    year: '2024'
  },
  {
    id: '20',
    title: 'Iestyn Drummond Talking Head 2',
    category: 'Video Editing',
    subcategory: 'Talking Head',
    description: 'Engaging talking head presentation with professional lighting setup and clear audio delivery.',
    youtubeUrl: 'https://www.youtube.com/watch?v=nM-WWAk1QXM',
    client: 'Media Studios',
    year: '2024'
  },
  {
    id: '21',
    title: 'Iestyn Drummond Talking Head 3',
    category: 'Video Editing',
    subcategory: 'Talking Head',
    description: 'Corporate-style talking head video with branded graphics and professional presentation techniques.',
    youtubeUrl: 'https://www.youtube.com/watch?v=9u3btvo06cs',
    client: 'Business Corp',
    year: '2024'
  },
  {
    id: '15',
    title: 'Viral Moments',
    category: 'Video Editing',
    subcategory: 'Reels',
    description: 'High-energy short-form content optimized for social media engagement with dynamic cuts and trending audio.',
    thumbnail: 'https://drive.google.com/thumbnail?id=18A3ACaC7szofq7Q3edgRa94JjBm6kacj&sz=w1200-h675',
    driveVideoUrl: 'https://drive.google.com/file/d/18A3ACaC7szofq7Q3edgRa94JjBm6kacj/view?usp=sharing',
    client: 'Social Creators',
    year: '2024'
  },
  
  // Graphics Design Projects
  {
    id: '5',
    title: 'SOM323 Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Psychology-driven visual engineering designed to maximize CTR. Leverages Von Restorff Effect for feed differentiation and Selective Attention principles for instant recognition.',
    thumbnail: '/images/projects/thumbnails/SOM323.jpg',
    client: 'SOM323',
    year: '2024'
  },
  {
    id: '11',
    title: 'E-commerce Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-conversion e-commerce thumbnail designed with A/B tested color schemes and attention-grabbing typography for maximum engagement.',
    thumbnail: '/images/projects/thumbnails/ecom thumb.jpg',
    client: 'E-commerce Brand',
    year: '2024'
  },
  {
    id: '16',
    title: 'Gaming Channel Banner',
    category: 'Graphics Design',
    subcategory: 'Channel Arts',
    description: 'Dynamic gaming channel banner with bold typography and vibrant color schemes designed for maximum visual impact.',
    thumbnail: '/images/projects/graphics-design/channel-arts/1610278458423.png',
    client: 'Gaming Creator',
    year: '2021'
  },
  {
    id: '26',
    title: 'Lifestyle Channel Art',
    category: 'Graphics Design',
    subcategory: 'Channel Arts',
    description: 'Vibrant lifestyle channel banner featuring engaging visuals and compelling brand messaging for content discovery.',
    thumbnail: '/images/projects/graphics-design/channel-arts/1616219888340.png',
    client: 'Lifestyle Creator',
    year: '2021'
  },
  {
    id: '29',
    title: 'Bolte Channel Banner',
    category: 'Graphics Design',
    subcategory: 'Channel Arts',
    description: 'Custom channel banner design with personalized branding elements and optimized layout for YouTube platform.',
    thumbnail: '/images/projects/graphics-design/channel-arts/banner done bolte.png',
    client: 'Bolte',
    year: '2021'
  },
  {
    id: '23',
    title: 'Faris Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Custom thumbnail design optimized for high click-through rates with bold typography and compelling visual hierarchy.',
    thumbnail: '/images/projects/thumbnails/thumb for faris.jpg',
    client: 'Faris',
    year: '2024'
  },
  {
    id: '30',
    title: 'Gaming Thumbnail Pack 1',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-energy gaming thumbnail with dynamic composition and vibrant colors designed to stand out in crowded feeds.',
    thumbnail: '/images/projects/thumbnails/1577003552128.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '31',
    title: 'Gaming Thumbnail Pack 2',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Action-packed gaming thumbnail featuring bold typography and strategic color psychology for maximum click-through rates.',
    thumbnail: '/images/projects/thumbnails/1577003552967.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '32',
    title: 'Gaming Thumbnail Pack 3',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Engaging gaming thumbnail with compelling visual elements and optimized layout for YouTube algorithm performance.',
    thumbnail: '/images/projects/thumbnails/1577003558770.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '33',
    title: 'Gaming Thumbnail Pack 4',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Dynamic gaming thumbnail applying Aesthetic-Usability Effect and Von Restorff principles for enhanced visibility.',
    thumbnail: '/images/projects/thumbnails/1577003562412.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '34',
    title: 'Gaming Thumbnail Pack 5',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-impact gaming thumbnail with strategic visual hierarchy and attention-grabbing design elements.',
    thumbnail: '/images/projects/thumbnails/1577003647946.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '35',
    title: 'Gaming Thumbnail Pack 6',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Professional gaming thumbnail featuring bold graphics and optimized composition for maximum engagement.',
    thumbnail: '/images/projects/thumbnails/1577003698449.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '36',
    title: 'Gaming Thumbnail Pack 7',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Eye-catching gaming thumbnail with vibrant color schemes and strategic placement of visual elements.',
    thumbnail: '/images/projects/thumbnails/1577003736141.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '37',
    title: 'Gaming Thumbnail Pack 8',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Compelling gaming thumbnail designed with Peak-End Rule principles for memorable brand impact.',
    thumbnail: '/images/projects/thumbnails/1577003737278.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '38',
    title: 'Gaming Thumbnail Pack 9',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-performance gaming thumbnail with optimized visual flow and attention-directing design elements.',
    thumbnail: '/images/projects/thumbnails/1577003738308.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '39',
    title: 'Gaming Thumbnail Pack 10',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Dynamic gaming thumbnail featuring strategic color psychology and compelling visual storytelling.',
    thumbnail: '/images/projects/thumbnails/1577003739189.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '40',
    title: 'Gaming Thumbnail Pack 11',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Professional gaming thumbnail with bold typography and optimized layout for YouTube platform success.',
    thumbnail: '/images/projects/thumbnails/1577003740598.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '41',
    title: 'Gaming Thumbnail Pack 12',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'High-conversion gaming thumbnail applying Fitts\'s Law principles for optimal click target effectiveness.',
    thumbnail: '/images/projects/thumbnails/1577003743494.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '42',
    title: 'Gaming Thumbnail Pack 13',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Engaging gaming thumbnail with strategic visual hierarchy and attention-grabbing composition elements.',
    thumbnail: '/images/projects/thumbnails/1577003744626.jpg',
    client: 'Gaming Channel',
    year: '2019'
  },
  {
    id: '43',
    title: 'Content Creator Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Professional content creator thumbnail with clean design and strategic branding elements for channel growth.',
    thumbnail: '/images/projects/thumbnails/1593861641283.jpg',
    client: 'Content Creator',
    year: '2020'
  },
  {
    id: '44',
    title: 'Tech Review Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Modern tech review thumbnail featuring clean typography and professional layout for technology content.',
    thumbnail: '/images/projects/thumbnails/1612628214726.png',
    client: 'Tech Channel',
    year: '2021'
  },
  {
    id: '45',
    title: 'Educational Thumbnail',
    category: 'Graphics Design',
    subcategory: 'Thumbnails',
    description: 'Educational content thumbnail with clear visual hierarchy and engaging design elements for learning content.',
    thumbnail: '/images/projects/thumbnails/1620985843760.png',
    client: 'Educational Channel',
    year: '2021'
  }
];

export const SERVICES = [
  {
    title: 'Visual Experience',
    description: 'Building premium interfaces and high-performance digital ecosystems using Miller\'s Law for information chunking, Jakob\'s Law for familiar patterns, and Fitts\'s Law for optimal interaction design.'
  },
  {
    title: 'Post Production',
    description: 'High-octane video editing leveraging the Peak-End Rule for memorable cinematic experiences, Serial Position Effect for narrative structure, and Flow principles for seamless storytelling.'
  },
  {
    title: 'Visual Strategy',
    description: 'Designing high-performance assets using Hick\'s Law to streamline decision pathways, Von Restorff Effect for memorable differentiation, and Aesthetic-Usability Effect for trust building.'
  }
];