import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: mapboxgl.Map;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Only initialize the map in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Set the access token
      (mapboxgl as any).accessToken = environment.mapboxToken;
      
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 0],
        zoom: 2
      });
    }
  }
} 