export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  level: string;
  sublevel: string;
}
