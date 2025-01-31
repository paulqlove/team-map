import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ButtonComponent } from '../shared/ui/button/button.component';
import { DropdownComponent } from '../shared/ui/dropdown/dropdown.component';
import { UserProfilePanelComponent } from '../components/user-profile-panel/user-profile-panel.component';
import { DropdownItem } from '../shared/ui/dropdown/dropdown.interface';
import { MapboxService } from '../services/map/map.service';
import { TeamMember } from '../interfaces/team-member.interface';
import { sampleTeamMembers } from '../data/sample-data';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ButtonComponent, DropdownComponent, UserProfilePanelComponent],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  selectedMember?: TeamMember;

  get isGlobe(): boolean {
    return this.mapService.currentProjection === 'globe';
  }

  get mapStyles(): DropdownItem[] {
    return this.mapService.styles;
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private mapService: MapboxService
  ) {
    // Subscribe to selected member changes
    this.mapService.selectedMember$.subscribe(member => {
      this.selectedMember = member;
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.mapService.initialize({
          container: 'map',
          style: this.mapService.currentStyle as string,
          center: [0, 30],
          zoom: 2.25,
          projection: 'mercator'
        });
        
        // Add team members to map
        this.mapService.addTeamMembers(sampleTeamMembers);
      }, 0);
    }
  }

  ngOnDestroy() {
    this.mapService.clearMarkers();
  }

  toggleProjection() {
    this.mapService.setProjection(this.isGlobe ? 'mercator' : 'globe');
  }

  onStyleChange(item: DropdownItem) {
    this.mapService.setStyle(item.value as string);
  }
} 