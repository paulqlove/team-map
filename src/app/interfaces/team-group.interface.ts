import { GroupEvent } from './group-event.interface';

export interface TeamGroup {
  id: string;
  name: string;
  description: string;
  createdBy: string; // User ID
  members: string[]; // Array of user IDs
  settings: {
    visibility: 'public' | 'private';
    joinPolicy: 'open' | 'invite-only';
  };
  calendar: {
    events: GroupEvent[];
    sharedCalendarUrl?: string;
  };
} 