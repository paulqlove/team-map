import { DropdownItem } from '../../shared/ui/dropdown/dropdown.interface';

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
} 