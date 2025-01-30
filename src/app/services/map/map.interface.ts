import { DropdownItem } from '../../shared/ui/dropdown/dropdown.interface';
import { TeamMember } from '../../interfaces/team-member.interface';

export interface MapConfig {
  container: string;
  style: string;
  center: [number, number];
  zoom: number;
  projection: 'globe' | 'mercator';
}

export interface MapService {
  styles: DropdownItem[];
  currentStyle: string;
  currentProjection: 'globe' | 'mercator';
  initialize(config: MapConfig): void;
  setStyle(style: string): void;
  setProjection(projection: 'globe' | 'mercator'): void;
  addTeamMembers(members: TeamMember[]): void;
  clearMarkers(): void;
} 