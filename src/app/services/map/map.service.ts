import { Injectable, Injector, ApplicationRef, ComponentRef, createComponent, EnvironmentInjector } from '@angular/core';
import { environment } from '../../../environments/environment';
import mapboxgl from 'mapbox-gl';
import { MapConfig, MapService } from './map.interface';
import { DropdownItem } from '../../shared/ui/dropdown/dropdown.interface';
import { TeamMember } from '../../interfaces/team-member.interface';
import { TeamMemberMarkerComponent } from '../../components/team-member-marker/team-member-marker.component';
import { TeamMemberPopupComponent } from '../../components/team-member-popup/team-member-popup.component';

@Injectable({
  providedIn: 'root'
})
export class MapboxService implements MapService {
  private map!: mapboxgl.Map;
  private markers: mapboxgl.Marker[] = [];
  private popupRefs: ComponentRef<TeamMemberPopupComponent>[] = [];
  private timeUpdateInterval?: number;
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

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
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

  addTeamMembers(members: TeamMember[]): void {
    this.clearMarkers();
    
    members.forEach(member => {
      // Create marker component
      const markerComponent = createComponent(TeamMemberMarkerComponent, {
        environmentInjector: this.injector as EnvironmentInjector,
      });
      markerComponent.instance.member = member;
      this.appRef.attachView(markerComponent.hostView);
      
      // Create popup component
      const popupComponent = createComponent(TeamMemberPopupComponent, {
        environmentInjector: this.injector as EnvironmentInjector,
      });
      popupComponent.instance.member = member;
      this.appRef.attachView(popupComponent.hostView);
      this.popupRefs.push(popupComponent);

      // Create popup
      const popup = new mapboxgl.Popup({ 
        offset: 25,
        closeButton: false
      })
        .setDOMContent(popupComponent.location.nativeElement);

      // Create and store marker
      const marker = new mapboxgl.Marker(markerComponent.location.nativeElement)
        .setLngLat([member.location.coordinates.longitude, member.location.coordinates.latitude])
        .setPopup(popup)
        .addTo(this.map);

      this.markers.push(marker);
    });

    // Clear existing interval if any
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
    }

    // Start time update interval
    this.timeUpdateInterval = window.setInterval(() => {
      document.querySelectorAll('.team-member-time').forEach(el => {
        const timezone = el.getAttribute('data-timezone');
        if (timezone) {
          el.textContent = new Date().toLocaleTimeString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      });
    }, 60000); // Update every minute
  }

  clearMarkers(): void {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
    
    // Cleanup component references
    this.popupRefs.forEach(ref => {
      this.appRef.detachView(ref.hostView);
      ref.destroy();
    });
    this.popupRefs = [];

    // Clear the time update interval
    if (this.timeUpdateInterval) {
      clearInterval(this.timeUpdateInterval);
      this.timeUpdateInterval = undefined;
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