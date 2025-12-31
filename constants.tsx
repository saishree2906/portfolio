
import { EducationItem, SoftwareSkill, Language, Project, ExperienceItem } from './types';

// ============================================
// SOCIAL LINKS & CONTACT INFORMATION
// ============================================
export const SOCIAL_LINKS = {
  github: "https://github.com/saishree2906",
  linkedin: "https://www.linkedin.com/in/saishree-s",
  email: "sairithu33@gmail.com",
  resume: "/SAISHREE (1) (1).pdf", // Resume download link
  portfolio: "https://saishree-portfolio.netlify.app" // Live portfolio URL
};

// Profile Image - Professional photo
export const PROFILE_IMAGE = "/WhatsApp Image 2025-12-12 at 1.40.24 PM.jpeg";

// ============================================
// EDUCATION DATA
// ============================================
export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "KGISL Institute of Technology",
    location: "Coimbatore",
    period: "2022 - 2026",
    degree: "B.E Computer Science and Engineering",
    grade: "CGPA: 8.28"
  },
  {
    institution: "AVB Matric Higher Secondary School",
    location: "Coimbatore",
    period: "2020 - 2022",
    degree: "Higher Secondary, Major in Computer Science",
    grade: "Percentage: 87.6%"
  }
];

// ============================================
// WORK EXPERIENCE
// ============================================
export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Web Development Intern",
    company: "CODE CLAUSE Pvt Ltd (Virtual)",
    period: "JUL 2025 - AUG 2025",
    description: [
      "Designed and implemented responsive, user-friendly web pages using HTML, CSS, and JavaScript.",
      "Integrated REST APIs to enable real-time data updates and improve website interactivity.",
      "Enhanced UI/UX consistency and performance across multiple browsers and devices."
    ]
  },
  {
    role: "MERN Stack Trainee",
    company: "QTREE TECHNOLOGIES",
    period: "MAY 2025 - AUG 2025",
    description: [
      "Gained hands-on training in Full-Stack Web Development using MongoDB, Express.js, React, and Node.js.",
      "Trained to develop end-to-end web applications with modern front-end architecture and back-end integration."
    ]
  }
];

// ============================================
// TECHNICAL SKILLS
// ============================================
export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  { name: "React", fullName: "React.js", level: 5, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Node", fullName: "Node.js", level: 4, icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "JS", fullName: "JavaScript (ES6+)", level: 5, icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.svg" },
  { name: "Mongo", fullName: "MongoDB", level: 4, icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
  { name: "Python", fullName: "Python", level: 4, icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Figma", fullName: "Figma (UI/UX)", level: 4, icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" }
];

// ============================================
// LANGUAGES KNOWN
// ============================================
export const LANGUAGES: Language[] = [
  { name: "Tamil", proficiency: "Native" },
  { name: "English", proficiency: "Professional (Linguaskill Certified)" },
  { name: "Hindi", proficiency: "Intermediate (Hindi Pandit Certified)" }
];

// ============================================
// CORE COMPETENCIES
// ============================================
export const CORE_SKILLS = [
  "Full-Stack Development (MERN)",
  "Responsive Web Design",
  "RESTful API Integration",
  "UI/UX Design Concepts",
  "Database Management (SQL & NoSQL)",
  "Version Control (Git)"
];

// ============================================
// SOFT SKILLS
// ============================================
export const SOFT_SKILLS = [
  "Problem Solving",
  "Team Collaboration",
  "Time Management",
  "Continuous Learning",
  "Adaptability",
  "Detail Oriented"
];

// ============================================
// FEATURED PROJECTS
// ============================================
export const PROJECTS: Project[] = [
  {
    title: "Full-Stack E-Commerce Platform",
    category: "Full Stack",
    technologies: "React, Vite, Node.js, Express, MongoDB, Tailwind CSS",
    description: [
      "Built a modern e-commerce platform with seamless shopping experience and intuitive UI.",
      "Implemented product browsing, cart management, and secure checkout functionality.",
      "Features responsive design optimized for all devices with fast performance."
    ],
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/ecommer",
    liveDemo: "https://sai-ecom.netlify.app/"
  },
  {
    title: "Real-Time Weather Dashboard",
    category: "Web App",
    technologies: "HTML, CSS, JavaScript, OpenWeather API",
    description: [
      "Interactive weather application providing real-time meteorological data and forecasts.",
      "Features location-based search with dynamic UI updates based on weather conditions.",
      "Integrated third-party weather API for accurate live data visualization."
    ],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/CodeClauseInternship_weather-app",
    liveDemo: "https://weather-saii.netlify.app/"
  },
  {
    title: "Responsive Fashion Store",
    category: "Front End",
    technologies: "HTML, CSS, JavaScript",
    description: [
      "E-commerce prototype with product catalog, filters, and category navigation.",
      "Fully responsive layout optimized for seamless UX across all device types."
    ],
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/fashion-store",
    liveDemo: "https://fashion-store-saishree.netlify.app"
  },
  {
    title: "Dynamic Study Planner",
    category: "Productivity",
    technologies: "React, Node.js, MongoDB, Express",
    description: [
      "Personalized scheduling tool for task management and academic routines.",
      "Features real-time updates and data persistence to track student progress.",
      "Intuitive dashboard for organizing study sessions and deadlines."
    ],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/study-planner",
    liveDemo: "https://study-planner-saishree.netlify.app"
  }
];
