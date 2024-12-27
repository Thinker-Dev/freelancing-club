export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'workshop' | 'networking' | 'conference' | 'webinar';
  isFeatured?: boolean;
}