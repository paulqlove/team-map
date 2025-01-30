import { TeamMember } from '../interfaces/team-member.interface';
import { TeamGroup } from '../interfaces/team-group.interface';

export const sampleTeamMembers: TeamMember[] = [
  {
    id: '1',
    email: 'john.smith@example.com',
    name: 'John Smith',
    profileImage: 'https://i.pravatar.cc/150?img=1',
    role: 'superuser',
    location: {
      coordinates: {
        latitude: 32.7767,
        longitude: -96.7970
      },
      city: 'Dallas',
      country: 'United States',
      timezone: 'America/Chicago'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'native' },
      { code: 'es', proficiency: 'basic' },
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
    email: 'sarah.beach@example.com',
    name: 'Sarah Beach',
    profileImage: 'https://i.pravatar.cc/150?img=2',
    role: 'user',
    location: {
      coordinates: {
        latitude: 27.9944,
        longitude: -82.4451
      },
      city: 'Tampa',
      country: 'United States',
      timezone: 'America/New_York'
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
    email: 'elena.petrova@example.com',
    name: 'Elena Petrova',
    profileImage: 'https://i.pravatar.cc/150?img=3',
    role: 'user',
    location: {
      coordinates: {
        latitude: 55.7558,
        longitude: 37.6173
      },
      city: 'Moscow',
      country: 'Russia',
      timezone: 'Europe/Moscow'
    },
    workingHours: {
      start: '10:00',
      end: '19:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'ru', proficiency: 'native' },
      { code: 'en', proficiency: 'fluent' },
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
      online: true,
      message: 'Available',
      lastActive: new Date()
    }
  },
  {
    id: '4',
    email: 'raj.patel@example.com',
    name: 'Raj Patel',
    profileImage: 'https://i.pravatar.cc/150?img=4',
    role: 'user',
    location: {
      coordinates: {
        latitude: 19.0760,
        longitude: 72.8777
      },
      city: 'Mumbai',
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
      { code: 'gu', proficiency: 'native' },
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
      message: 'In development',
      lastActive: new Date()
    }
  },
  {
    id: '5',
    email: 'marko.nikolovski@example.com',
    name: 'Marko Nikolovski',
    profileImage: 'https://i.pravatar.cc/150?img=5',
    role: 'user',
    location: {
      coordinates: {
        latitude: 41.9973,
        longitude: 21.4280
      },
      city: 'Skopje',
      country: 'Macedonia',
      timezone: 'Europe/Skopje'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'mk', proficiency: 'native' },
      { code: 'en', proficiency: 'fluent' },
      { code: 'sr', proficiency: 'fluent' },
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
    email: 'maria.santos@example.com',
    name: 'Maria Santos',
    profileImage: 'https://i.pravatar.cc/150?img=6',
    role: 'user',
    location: {
      coordinates: {
        latitude: 14.5995,
        longitude: 120.9842
      },
      city: 'Manila',
      country: 'Philippines',
      timezone: 'Asia/Manila'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'fluent' },
      { code: 'fil', proficiency: 'native' },
      { code: 'tl', proficiency: 'native' },
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
    email: 'michael.chen@example.com',
    name: 'Michael Chen',
    profileImage: 'https://i.pravatar.cc/150?img=7',
    role: 'user',
    location: {
      coordinates: {
        latitude: 37.7749,
        longitude: -122.4194
      },
      city: 'San Francisco',
      country: 'United States',
      timezone: 'America/Los_Angeles'
    },
    workingHours: {
      start: '08:30',
      end: '17:30',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'native' },
      { code: 'zh', proficiency: 'fluent' },
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
    email: 'emily.parker@example.com',
    name: 'Emily Parker',
    profileImage: 'https://i.pravatar.cc/150?img=8',
    role: 'user',
    location: {
      coordinates: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      city: 'New York',
      country: 'United States',
      timezone: 'America/New_York'
    },
    workingHours: {
      start: '09:00',
      end: '18:00',
      workDays: [1, 2, 3, 4, 5]
    },
    languages: [
      { code: 'en', proficiency: 'native' },
      { code: 'fr', proficiency: 'intermediate' },
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
  createdBy: '1', // John Smith's ID (Dallas)
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