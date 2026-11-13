export interface PersonalInfo {
  name: string;
  designation: string;
  secondaryTitles: string[];
  avatarUrl: string;
  tagline: string;
  shortBio: string;
  location: string;
  email: string;
  status: string;
  resumeDownloadPath: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  username: string;
}

export interface Hobby {
  title: string;
  description: string;
  icon: string;
}

export interface AboutInfo {
  summary: string;
  journey: string;
  workEnjoyed: string;
  hobbies: Hobby[];
  personality: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  experience: string;
  color?: string;
  category?: string;
}

export interface SkillsGroup {
  frontend: SkillItem[];
  backend: SkillItem[];
  databases: SkillItem[];
  tools: SkillItem[];
  [key: string]: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  status: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface AchievementItem {
  title: string;
  event: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  featured: boolean;
  category: string;
  techStack: string[];
  briefDescription: string;
  liveLink: string;
  clientRepoLink: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  futurePlans: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  about: AboutInfo;
  skills: SkillsGroup;
  education: EducationItem[];
  experience: ExperienceItem[];
  achievements: AchievementItem[];
  projects: ProjectItem[];
}
