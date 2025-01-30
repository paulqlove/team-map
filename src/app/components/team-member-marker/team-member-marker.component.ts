import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../interfaces/team-member.interface';

@Component({
  selector: 'app-team-member-marker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member-marker.component.html',
  styleUrls: ['./team-member-marker.component.scss']
})
export class TeamMemberMarkerComponent {
  @Input() member!: TeamMember;
} 