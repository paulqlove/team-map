export interface Holiday {
  id: string;
  name: string;
  date: Date;
  country: string;
  type: 'public' | 'observance' | 'bank' | 'other';
  description?: string;
} 