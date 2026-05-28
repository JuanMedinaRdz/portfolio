import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export type Technology = {
  name: string;
  category: "language" | "framework" | "database" | "tool" | "cloud";
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights?: string[];
  stack?: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  year: number;
  stack: string[];
  image?: string;
  links?: {
    live?: string;
    repo?: string;
    case?: string;
  };
  featured?: boolean;
};

export type Education = {
  title: string;
  institution: string;
  period: string;
  description?: string;
};
