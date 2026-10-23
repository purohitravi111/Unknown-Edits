import { 
  Play, Video, Film, MonitorPlay, Presentation, Clapperboard, 
  Users, Award, Globe, Scissors, Zap, Sparkles, CheckCircle2 
} from 'lucide-react';
import type { 
  AgencyInfo, NavigationItem, HeroSection, Service, PortfolioProject, 
  TeamMember, Testimonial, ClientLogo, WorkflowStep, PricingPackage, 
  FAQItem, ContactInfo, SocialMedia, FooterInfo 
} from '../types';

export const agencyInfo: AgencyInfo = {
  name: "UNKNOWN EDITS",
  tagline: "We edit. You scale.",
  description: "We are a premier video editing agency dedicated to transforming raw footage into captivating visual stories that drive engagement and convert audiences.",
  email: "unknownedits2905@gmail.com",
  phone: "+91-9274527632",
  location: "Anand, Gujarat",
  businessHours: "Mon-Fri, 9AM - 6PM PST",
  foundedYear: 2020,
  logo: "/logos/logo.svg",
  primaryCTA: { label: "Start a Project", url: "#contact" },
  secondaryCTA: { label: "View Our Work", url: "#portfolio" }
};

export const navigation: NavigationItem[] = [
  { label: "Services", url: "#services" },
  { label: "Work", url: "#portfolio" },
  { label: "Workflow", url: "#workflow" },
  { label: "Team", url: "#team" },
  { label: "Plans", url: "#pricing" },
  { label: "Contact", url: "#contact" }
];

export const heroSection: HeroSection = {
  badge: "WE DON'T JUST EDIT. WE ELEVATE.",
  headline: "Elevating Every Frame ",
  highlightedWords: "Beyond Expectations.",
  description: "Stop settling for average content. We deliver high-retention video editing that scales your brand, builds your audience, and drives revenue.",
  buttons: [
    { label: "Book a Discovery Call", url: "#contact", primary: true },
    { label: "See Our Work", url: "#portfolio", primary: false }
  ],
  video: "/videos/hero-background.mp4",
  thumbnail: "/images/hero-thumbnail.jpg",
  backgroundImage: "/images/hero-bg.jpg",
  stats: [
    { label: "Projects Completed", value: "100+" },
    { label: "Years Of Experience", value: "4+" },
    { label: "Commitment to Quality", value: "100%" },
    { label: "Average Response Time", value: "24 Hrs" }
  ]
};

export const categories: string[] = [
  "Long Form", "Short Form", "Motion Graphics", "Commercials"
];

export const services: Service[] = [
  {
    title: "Short-Form Content",
    description: "High-retention TikToks, Reels, and Shorts optimized for virality and algorithmic growth.",
    icon: Zap,
    image: "/images/service-short-form.jpg",
    video: "",
    cta: { label: "Learn More", url: "#contact" },
    displayOrder: 1,
    featured: true
  },
  {
    title: "YouTube Long-Form",
    description: "Engaging A-roll editing, dynamic B-roll, sound design, and retention-focused storytelling.",
    icon: MonitorPlay,
    image: "/images/service-long-form.jpg",
    video: "/videos/hero-background.mp4",
    cta: { label: "Learn More", url: "#contact" },
    displayOrder: 2,
    featured: true
  },
  {
    title: "Commercial & Ad Creatives",
    description: "Direct-response video ads for Facebook, Instagram, and YouTube that actually convert.",
    icon: Clapperboard,
    image: "/images/service-commercial.jpg",
    video: "https://youtu.be/-83iPP77htA?si=77FxW7Iw4zkRVVa4",
    cta: { label: "Learn More", url: "#contact" },
    displayOrder: 3,
    featured: true
  },
  {
    title: "Motion graphics",
    description: "Custom 2D/3D animations, lower thirds, and visual effects to elevate your production value.",
    icon: Sparkles,
    image: "/images/service-motion.jpg",
    video: "",
    cta: { label: "Learn More", url: "#contact" },
    displayOrder: 4,
    featured: false
  }
];

export const portfolio: PortfolioProject[] = [
  {
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/-83iPP77htA?si=77FxW7Iw4zkRVVa4", // PASTE THE MAIN VIDEO URL HERE
    thumbnailUrl: "", // Optional thumbnail URL; YouTube thumbnails are automatic
    embedUrl: "", // Optional official player URL for a provider not detected automatically
    projectUrl: "",
    clientName: "",
    softwareUsed: [],
    duration: "",
    tags: [],
    featured: false,
    platform: "",
    caseStudy: false,
    format: "Long Form",
    displayOrder: 1
  },
  {
    projectName: "Short-form video title",
    category: "Short Form",
    industry: "",
    description: "",
    videoUrl: "https://youtube.com/shorts/fZ6Ey3jJmPY?si=3xFHgNHhp8jnKMta", // PASTE THE MAIN VIDEO URL HERE
    thumbnailUrl: "", // YouTube and Instagram previews are automatic; other links may need a thumbnail URL
    embedUrl: "", // Optional official player URL for a provider not detected automatically
    projectUrl: "",
    clientName: "",
    softwareUsed: [],
    duration: "",
    tags: [],
    featured: false,
    platform: "",
    caseStudy: false,
    format: "Short Form",
    displayOrder: 2
  }
];

export const team: TeamMember[] = [
  {
    name: "Ravi Purohit",
    role: "Founder & Creative Director",
    photo: "/images/ravi.webp",
    bio: "With over 4 years of post-production experience, Ravi leads the creative vision for all major campaigns.",
    socialLinks: { linkedin: "#", twitter: "#" },
    skills: ["Creative Direction", "Client Management ", "Project Management","Video Editing"]
  },
  {
    name: "Akshay Purohit",
    role: "Co-Founder & Lead Video Editor",
    photo: "/images/Akshay.webp",
    bio: "Akshay specializes in cinematic video editing, storytelling, pacing, and post-production, transforming raw footage into engaging, high-quality visual content.",
    socialLinks: { behance: "#", instagram: "#" },
    skills: ["Video Editing", "Color Grading", "Motion Graphics","Sound Design"]
  }
];

export const testimonials: Testimonial[] = [
  {
    clientName: "Cinematic Storytelling",
    company: "Every Frame Matters",
    photo: "/testimonials/storytelling.jpg",
    rating: 5,
    review:
      "We believe great editing is more than cutting clips together. Every frame, transition, sound effect, and color grade is carefully crafted to tell a compelling story that keeps viewers engaged.",
    videoTestimonial: ""
  },
  {
    clientName: "Quality & Precision",
    company: "Built for Creators & Brands",
    photo: "/testimonials/quality.jpg",
    rating: 5,
    review:
      "Unknown Edits focuses on delivering premium-quality edits with clear communication, attention to detail, and a workflow designed to bring every creative vision to life.",
    videoTestimonial: ""
  }
];

export const clients: ClientLogo[] = [];


export const workflow: WorkflowStep[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We align on your goals, target audience, and visual style.",
    bulletPoints: ["Creative Briefing", "Asset Collection", "Style Guidelines"],
    icon: Globe
  },
  {
    number: "02",
    title: "The Rough Cut",
    description: "We assemble the story, pacing, and core structure for your review.",
    bulletPoints: ["Story Assembly", "Pacing Checks", "Initial Feedback"],
    icon: Scissors
  },
  {
    number: "03",
    title: "Polish & VFX",
    description: "Adding the magic: color grading, sound design, and motion graphics.",
    bulletPoints: ["Color Grading", "Sound Mixing", "Motion Graphics"],
    icon: Sparkles
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Rendered in the highest quality, optimized for every platform.",
    bulletPoints: ["Multi-format Export", "Source Files", "Performance Review"],
    icon: CheckCircle2
  }
];

export const pricing: PricingPackage[] = [
  {
    packageName: "Short-Form Retainer",
    price: "$2,500/mo",
    features: ["15 Vertical Videos", "Advanced Captions", "Sound Design", "2 Revisions per video", "48-Hour Turnaround"],
    cta: { label: "Get Started", url: "#contact" },
    featured: false
  },
  {
    packageName: "YouTube Pro",
    price: "$4,000/mo",
    features: ["4 Long-Form Videos", "Custom Thumbnails", "A/B Hook Variations", "Full Sound & Color", "Dedicated Editor"],
    cta: { label: "Most Popular", url: "#contact" },
    featured: true
  },
  {
    packageName: "Agency Partner",
    price: "Custom",
    features: ["Unlimited Editing", "Motion Graphics Support", "Slack Channel", "Priority Rendering", "Strategy Calls"],
    cta: { label: "Contact Us", url: "#contact" },
    featured: false
  }
];

export const faq: FAQItem[] = [
  {
    question: "What is your typical turnaround time?",
    answer: "For standard short-form videos, we deliver within 48 hours. Long-form videos typically take 3-5 business days depending on complexity."
  },
  {
    question: "How do revisions work?",
    answer: "We use Frame.io for seamless feedback. Every package includes 2 rounds of revisions to ensure you are 100% satisfied with the final product."
  },
  {
    question: "What software do you use?",
    answer: "Our team consists of experts in Adobe Premiere Pro, After Effects, DaVinci Resolve, and Cinema 4D."
  },
  {
    question: "Do you offer source files?",
    answer: "Yes, project files can be provided upon request. Depending on your package, there might be an additional handover fee."
  }
];

export const contact: ContactInfo = {
  email: "unknownedits2905@gmail.com",
  phone: "+91-9274527632",
  whatsapp: "+91-9274527632",
  address: "Brampole, Kankapura (388550), Ta-Borsad, Dis-Anand, Gujarat, India",
  googleMapsUrl: "https://maps.google.com",
  businessHours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
};

export const socialMedia: SocialMedia = {
  instagram: "https://www.instagram.com/unknownedits_29/?utm_source=ig_web_button_share_sheet",
  youtube: "https://youtube.com/@unknownedits",
  linkedin: "https://linkedin.com/company/unknownedits",
  twitter: "https://twitter.com/unknownedits",
  tiktok: "https://tiktok.com/@unknownedits",
  behance: "https://behance.net/unknownedits",
  dribbble: "",
  facebook: "",
  threads: ""
};

export const footer: FooterInfo = {
  links: [
    // {
    //   title: "Company",
    //   items: [
    //     { label: "About", url: "#" },
    //     { label: "Careers", url: "#" },
    //     { label: "Privacy Policy", url: "#" },
    //     { label: "Terms of Service", url: "#" }
    //   ]
    // },
    {
      title: "Services",
      items: [
        { label: "Short Form", url: "#" },
        { label: "Long Form", url: "#" },
        { label: "Commercials", url: "#" },
        { label: "Motion Graphics", url: "#" }
      ]
    }
  ],
  copyright: "© 2026 UNKNOWN EDITS. All rights reserved.",
  newsletter: {
    heading: "Join our newsletter",
    description: "Get the latest editing tips and industry news delivered to your inbox."
  }
};
