// Define your TypeScript types and interfaces here

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon?: string;
  color?: string;
}

