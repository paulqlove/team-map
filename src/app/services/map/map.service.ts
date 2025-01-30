import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import mapboxgl from 'mapbox-gl';
import { MapConfig, MapService } from './map.interface';
import { DropdownItem } from '../../shared/ui/dropdown/dropdown.interface';

@Injectable({
  providedIn: 'root'
})
export class MapboxService implements MapService {
  private map!: mapboxgl.Map;
  currentProjection: 'globe' | 'mercator' = 'mercator';

  readonly styles: DropdownItem[] = [
    { label: 'Standard', value: 'mapbox://styles/mapbox/standard' },
    { label: 'Standard Satellite', value: 'mapbox://styles/mapbox/standard-satellite' },
    { label: 'Streets', value: 'mapbox://styles/mapbox/streets-v12' },
    { label: 'Outdoors', value: 'mapbox://styles/mapbox/outdoors-v12' },
    { label: 'Light', value: 'mapbox://styles/mapbox/light-v11' },
    { label: 'Dark', value: 'mapbox://styles/mapbox/dark-v11' },
    { label: 'Satellite', value: 'mapbox://styles/mapbox/satellite-v9' },
    { label: 'Satellite Streets', value: 'mapbox://styles/mapbox/satellite-streets-v12' },
    { label: 'Navigation Day', value: 'mapbox://styles/mapbox/navigation-day-v1' },
    { label: 'Navigation Night', value: 'mapbox://styles/mapbox/navigation-night-v1' }
  ];

  currentStyle: string = this.styles[0].value as string;

  constructor() {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }

  initialize(config: MapConfig): void {
    try {
      this.map = new mapboxgl.Map({
        container: config.container,
        style: config.style,
        center: config.center,
        zoom: config.zoom,
        projection: config.projection
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  setStyle(style: string): void {
    if (!this.map) return;
    this.currentStyle = style;
    this.map.setStyle(style);
  }

  setProjection(projection: 'globe' | 'mercator'): void {
    if (!this.map) return;
    this.currentProjection = projection;
    this.map.setProjection(projection);
  }
} 