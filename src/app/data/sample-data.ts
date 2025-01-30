import { TeamMember } from '../interfaces/team-member.interface';
import { TeamGroup } from '../interfaces/team-group.interface';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    email: 'sarah.chen@example.com',
    name: 'Sarah Chen',
    profileImage: 'https://i.pravatar.cc/150?img=1',
    role: 'superuser',
    location: {
      coordinates: {
        latitude: 1.3521,
        longitude: 103.8198
      },
      city: 'Singapore',
      country: 'Singapore',
      timezone: 'Asia/Singapore'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'fluent' },
      { code: 'zh', proficiency: 'native' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '09:00',
        end: '17:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: true,
      message: 'Working on Atlas project',
      lastActive: new Date()
    }
  },
  {
    id: '2',
    email: 'james.wilson@example.com',
    name: 'James Wilson',
    profileImage: 'https://i.pravatar.cc/150?img=2',
    role: 'user',
    location: {
      coordinates: {
        latitude: 51.5074,
        longitude: -0.1278
      },
      city: 'London',
      country: 'United Kingdom',
      timezone: 'Europe/London'
    },
    workingHours: {
      start: '08:30',
      end: '17:30',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'native' },
      { code: 'fr', proficiency: 'intermediate' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: true,
      preferredContactHours: {
        start: '09:00',
        end: '16:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: true,
      message: 'In a meeting',
      lastActive: new Date()
    }
  },
  {
    id: '3',
    email: 'maria.garcia@example.com',
    name: 'Maria Garcia',
    profileImage: 'https://i.pravatar.cc/150?img=3',
    role: 'user',
    location: {
      coordinates: {
        latitude: 19.4326,
        longitude: -99.1332
      },
      city: 'Mexico City',
      country: 'Mexico',
      timezone: 'America/Mexico_City'
    },
    workingHours: {
      start: '08:00',
      end: '17:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'es', proficiency: 'native' },
      { code: 'en', proficiency: 'fluent' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '08:00',
        end: '16:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: true,
      message: 'Available',
      lastActive: new Date()
    }
  },
  {
    id: '4',
    email: 'alex.kumar@example.com',
    name: 'Alex Kumar',
    profileImage: 'https://i.pravatar.cc/150?img=4',
    role: 'user',
    location: {
      coordinates: {
        latitude: 12.9716,
        longitude: 77.5946
      },
      city: 'Bangalore',
      country: 'India',
      timezone: 'Asia/Kolkata'
    },
    workingHours: {
      start: '10:00',
      end: '19:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'fluent' },
      { code: 'hi', proficiency: 'native' },
      { code: 'kn', proficiency: 'native' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '10:00',
        end: '18:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: false,
      message: 'Out for lunch',
      lastActive: new Date()
    }
  },
  {
    id: '5',
    email: 'emma.mueller@example.com',
    name: 'Emma Mueller',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    role: 'user',
    location: {
      coordinates: {
        latitude: 52.5200,
        longitude: 13.4050
      },
      city: 'Berlin',
      country: 'Germany',
      timezone: 'Europe/Berlin'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'de', proficiency: 'native' },
      { code: 'en', proficiency: 'fluent' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '09:00',
        end: '17:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: true,
      message: 'Working remotely',
      lastActive: new Date()
    }
  },
  {
    id: '6',
    email: 'yuki.tanaka@example.com',
    name: 'Yuki Tanaka',
    profileImage: 'https://i.pravatar.cc/150?img=6',
    role: 'user',
    location: {
      coordinates: {
        latitude: 35.6762,
        longitude: 139.6503
      },
      city: 'Tokyo',
      country: 'Japan',
      timezone: 'Asia/Tokyo'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'ja', proficiency: 'native' },
      { code: 'en', proficiency: 'intermediate' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: true,
      preferredContactHours: {
        start: '09:00',
        end: '17:00'
      },
      notifications: {
        email: true,
        inApp: false
      }
    },
    status: {
      online: true,
      message: 'In development mode',
      lastActive: new Date()
    }
  },
  {
    id: '7',
    email: 'david.anderson@example.com',
    name: 'David Anderson',
    profileImage: 'https://i.pravatar.cc/150?img=7',
    role: 'user',
    location: {
      coordinates: {
        latitude: -33.8688,
        longitude: 151.2093
      },
      city: 'Sydney',
      country: 'Australia',
      timezone: 'Australia/Sydney'
    },
    workingHours: {
      start: '08:30',
      end: '17:30',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'native' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '08:30',
        end: '16:30'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: false,
      message: 'Back tomorrow',
      lastActive: new Date()
    }
  },
  {
    id: '8',
    email: 'sofia.silva@example.com',
    name: 'Sofia Silva',
    profileImage: 'https://i.pravatar.cc/150?img=8',
    role: 'user',
    location: {
      coordinates: {
        latitude: -23.5505,
        longitude: -46.6333
      },
      city: 'São Paulo',
      country: 'Brazil',
      timezone: 'America/Sao_Paulo'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'pt', proficiency: 'native' },
      { code: 'en', proficiency: 'fluent' },
      { code: 'es', proficiency: 'intermediate' },
    ],
    groups: ['team-atlas'],
    preferences: {
      doNotDisturb: false,
      preferredContactHours: {
        start: '09:00',
        end: '17:00'
      },
      notifications: {
        email: true,
        inApp: true
      }
    },
    status: {
      online: true,
      message: 'Available',
      lastActive: new Date()
    }
  }
];

export const sampleTeamGroup: TeamGroup = {
  id: 'team-atlas',
  name: 'Team Atlas',
  description: 'Global development team working on Project Atlas',
  createdBy: '1', // Sarah Chen's ID
  members: sampleTeamMembers.map(member => member.id),
  settings: {
    visibility: 'private',
    joinPolicy: 'invite-only'
  },
  calendar: {
    events: [
      {
        id: 'daily-standup',
        title: 'Daily Standup',
        description: 'Team sync-up meeting',
        startTime: new Date('2024-03-20T13:00:00Z'), // UTC time
        endTime: new Date('2024-03-20T13:30:00Z'),
        attendees: sampleTeamMembers.map(member => member.id),
        meetingLink: 'https://meet.example.com/daily-standup',
        recurringPattern: {
          frequency: 'daily',
          interval: 1,
          endDate: new Date('2024-12-31')
        }
      }
    ],
    sharedCalendarUrl: 'https://calendar.example.com/team-atlas'
  }
}; 