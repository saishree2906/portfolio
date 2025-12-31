
export interface EducationItem {
  institution: string;
  location: string;
  period: string;
  degree: string;
  grade?: string;
  specialization?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SoftwareSkill {
  name: string;
  fullName: string;
  level: number; // 1-5
  icon: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Project {
  title: string;
  category: string;
  technologies: string;
  description: string[];
  imageUrl: string;
  link?: string;      // GitHub repository link
  liveDemo?: string;  // Live demo URL
}
