export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyIcon: React.ReactNode;
  tags: string[];
  testimonial: string;
  earnings: string;
  earningsSubtext: string;
  rating: number;
  videoThumbnail: string;
  platformIcon: React.ReactNode;
}

export interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;
  large?: boolean;
  gradient?: boolean;
}