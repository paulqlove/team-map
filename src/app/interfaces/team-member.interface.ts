export interface TeamMember {
  id: string;
  email: string;
  name: string;
  title: string;
  profileImage: string;
  role: 'superuser' | 'user';
  location: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
    city: string;
    country: string;
    timezone: string;
  };
  workingHours: {
    start: string; // 24h format "HH:mm"
    end: string;
    workDays: number[]; // 0-6, where 0 is Sunday
  };
  languages: {
    code: string; // ISO language code
    proficiency: 'native' | 'fluent' | 'intermediate' | 'basic';
  }[];
  groups: string[]; // Array of group IDs
  preferences: {
    doNotDisturb: boolean;
    preferredContactHours: {
      start: string;
      end: string;
    };
    notifications: {
      email: boolean;
      inApp: boolean;
    };
  };
  status: {
    online: boolean;
    message: string;
    lastActive: Date;
  };
} 