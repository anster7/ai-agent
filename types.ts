import { LucideIcon } from 'lucide-react';

export interface ProblemCard {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Product {
  id: number;
  title: string;
  subtitle: string;
  features: string[];
  color: 'blue' | 'orange' | 'purple';
  icon: LucideIcon;
}

export interface ComparisonItem {
  before: string;
  after: string;
}

export interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  workType: string;
  message: string;
}