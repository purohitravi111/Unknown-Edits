import { 
  Play, Video, Film, MonitorPlay, Presentation, Clapperboard, 
  Users, Award, Globe, Scissors, Zap, Sparkles, CheckCircle2 
} from 'lucide-react';
import type { 
  AgencyInfo, NavigationItem, HeroSection, Service, PortfolioProject, 
  TeamMember, Testimonial, ClientLogo, WorkflowStep,
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
  { label: "Work With Us", url: "#pricing" },
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
    { label: "Projects Completed", value: "500+" },
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
    video: "",
    cta: { label: "Learn More", url: "#contact" },
    displayOrder: 2,
    featured: true
  },
  {
    title: "Commercial & Ad Creatives",
    description: "Direct-response video ads for Facebook, Instagram, and YouTube that actually convert.",
    icon: Clapperboard,
    image: "/images/service-commercial.jpg",
    video: "",
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
    videoUrl: "https://youtu.be/aGqK2UpsWQY?si=aSW691xOiJ2yiqW6", // PASTE THE MAIN VIDEO URL HERE
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
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/YOT_Z1p2YTk?si=twj9YEaGSjO-q3xS", // PASTE THE MAIN VIDEO URL HERE
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
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/4LEI6fmMS8U?si=1LlGjHxk_dt8Loey", // PASTE THE MAIN VIDEO URL HERE
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
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/YXUQHmeAPfo?si=Z2C3ByW3-LEZOA2K", // PASTE THE MAIN VIDEO URL HERE
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
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/VPI8LDMEUQg?si=9LTD-AAeW7m8qwzt", // PASTE THE MAIN VIDEO URL HERE
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
    projectName: "Long-form video title",
    category: "Long Form",
    industry: "",
    description: "",
    videoUrl: "https://youtu.be/8qpMopHwQJ4?si=RYAB0ApfIPuoSZhr", // PASTE THE MAIN VIDEO URL HERE
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
    videoUrl: "", // PASTE THE MAIN VIDEO URL HERE
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
    clientName: "Alex Morgan", // SAMPLE ONLY: replace with a real client's public name
    company: "Content Creator · Sample", // SAMPLE ONLY: replace with their approved role/company
    photo: "", // OPTIONAL: approved photo path under public/; initials show if blank
    rating: 5, // SAMPLE ONLY: replace with a verified client rating, or use 0 to hide
    review: "The edit felt polished and clear from the first cut. The pacing kept the story moving and made the final video feel ready to share.", // SAMPLE ONLY: replace with the client's exact approved quote
    isSample: true
  },
  {
    clientName: "Jordan Lee", // SAMPLE ONLY: replace with a real client's public name
    company: "Small Business Owner · Sample", // SAMPLE ONLY: replace with their approved role/company
    photo: "", // OPTIONAL: approved photo path under public/; initials show if blank
    rating: 5, // SAMPLE ONLY: replace with a verified client rating, or use 0 to hide
    review: "Communication was smooth throughout the project, and the finished cut matched the tone we wanted for our brand.", // SAMPLE ONLY: replace with the client's exact approved quote
    isSample: true
  },
  {
    clientName: "Taylor Chen", // SAMPLE ONLY: replace with a real client's public name
    company: "YouTube Creator · Sample", // SAMPLE ONLY: replace with their approved role/company
    photo: "", // OPTIONAL: approved photo path under public/; initials show if blank
    rating: 5, // SAMPLE ONLY: replace with a verified client rating, or use 0 to hide
    review: "The final video had a strong flow and clean sound. It was easy to review the edits and give feedback along the way.", // SAMPLE ONLY: replace with the client's exact approved quote
    isSample: true
  }
  // These are fictional preview entries. Replace them with real, approved feedback before publishing.
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
