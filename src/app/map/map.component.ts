import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
import mapboxgl from 'mapbox-gl';
import { ButtonComponent } from '../shared/ui/button/button.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: mapboxgl.Map;
  isGlobe = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      (mapboxgl as any).accessToken = environment.mapboxToken;
      
      // Add a small delay to ensure the container is ready
      setTimeout(() => {
        this.initializeMap();
      }, 0);
    }
  }

  private initializeMap() {
    try {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 0],
        zoom: 2,
        projection: 'globe'
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  toggleProjection() {
    if (!this.map) return;
    this.isGlobe = !this.isGlobe;
    this.map.setProjection(this.isGlobe ? 'globe' : 'mercator');
  }
} 