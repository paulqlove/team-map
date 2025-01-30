import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../interfaces/team-member.interface';

@Component({
  selector: 'app-team-member-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-member-popup.component.html',
  styleUrls: ['./team-member-popup.component.scss']
})
export class TeamMemberPopupComponent implements OnInit, OnDestroy {
  @Input() member!: TeamMember;
  localTime: string = '';
  private intervalId?: number;

  ngOnInit() {
    this.updateLocalTime();
    this.intervalId = window.setInterval(() => {
      this.updateLocalTime();
    }, 60000); // Update every minute
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateLocalTime() {
    this.localTime = new Date().toLocaleTimeString('en-US', {
      timeZone: this.member.location.timezone,
      hour: '2-digit',
      minute: '2-digit'
    });
  }
} 