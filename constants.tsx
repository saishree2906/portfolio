
import { EducationItem, SoftwareSkill, Language, Project, ExperienceItem } from './types';

// ============================================
// SOCIAL LINKS & CONTACT INFORMATION
// ============================================
export const SOCIAL_LINKS = {
  github: "https://github.com/saishree2906",
  linkedin: "https://www.linkedin.com/in/saishree-s",
  email: "sairithu33@gmail.com",
  resume: "/Saishree S.pdf", // Resume download link
  portfolio: "https://saishree-portfolio.netlify.app" // Live portfolio URL
};

// Profile Image - Professional photo
export const PROFILE_IMAGE = "/profile-saishree.jpg";

// ============================================
// EDUCATION DATA
// ============================================
export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "KGISL Institute of Technology",
    location: "Coimbatore",
    period: "2022 - 2026",
    degree: "B.E Computer Science and Engineering",
    grade: "CGPA: 8.26"
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
  "Python",
  "C",
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
    title: "VectoRAG – Domain-Specific Tech Guidance",
    category: "AI-LLM",
    technologies: "Python, Streamlit, OCR, ChromaDB, NLP, TinyLlama",
    description: [
      "Engineered an OCR pipeline to extract structured text from scanned academic PDFs.",
    "Designed a semantic search system using embeddings and ChromaDB for high-accuracy retrieval.",
    "Implemented a RAG-based Q&A system with page-level citations for trustworthy, context-aware responses.",
    "Developed a Streamlit application with chatbot interface and automated MCQ quiz generation."
    ],
    imageUrl: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/",
    liveDemo: "https://Vectorag-saishree.netlify.app"
  },
  {
    title: "Intelligent Overtime Shift Validation(Module)– HRMS",
    category: "AI / Machine Learning",
    technologies: "Python, Streamlit, Isolation Forest, Gemini API",
    description: [
      "Engineered an anomaly detection system using Isolation Forest to identify irregular overtime patterns in employee data.",
    "Developed a Streamlit-based dashboard with heatmap visualizations for intuitive workforce monitoring.",
    "Integrated Gemini API to provide explainable insights for flagged overtime violations.",
    "Delivered as part of a remote internship to enhance HR analytics and decision-making processes."
    ],
    imageUrl: "https://images.unsplash.com/photo-1661310112344-e1f708f5ad3c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/saishree2906/intelligent-overtime-validation",
    liveDemo: "https://intelligent-overtime-validation-saishree.netlify.app"
  }
];
