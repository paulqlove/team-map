import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TeamMember } from '../../interfaces/team-member.interface';
import { HolidayService } from '../../services/holiday/holiday.service';
import { Holiday } from '../../interfaces/holiday.interface';

@Component({
  selector: 'app-user-profile-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile-panel.component.html',
  styleUrls: ['./user-profile-panel.component.scss']
})
export class UserProfilePanelComponent implements OnChanges, OnInit, OnDestroy {
  @Input() member?: TeamMember;
  timeDifference: string = '';
  localTime: string = '';
  private timeInterval?: number;
  upcomingHolidays: Holiday[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private holidayService: HolidayService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTimeUpdate();
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId) && this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['member']) {
      this.updateTimeDifference();
      this.updateLocalTime();
      this.loadHolidays();
    }
  }

  getWorkDays(days: number[]): string {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days.map(day => dayNames[day]).join(', ');
  }

  getLanguageName(code: string): string {
    const languages: { [key: string]: string } = {
      'en': 'English',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'it': 'Italian',
      'pt': 'Portuguese',
      'ru': 'Russian',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ko': 'Korean',
      'hi': 'Hindi',
      'ar': 'Arabic',
      'gu': 'Gujarati'
    };
    return languages[code] || code;
  }

  private startTimeUpdate(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Update immediately
    this.updateLocalTime();
    
    // Then update every minute
    this.timeInterval = window.setInterval(() => {
      this.updateLocalTime();
    }, 60000);
  }

  private updateLocalTime(): void {
    if (!this.member || !isPlatformBrowser(this.platformId)) return;

    this.localTime = new Date().toLocaleTimeString('en-US', {
      timeZone: this.member.location.timezone,
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private updateTimeDifference(): void {
    if (!this.member || !isPlatformBrowser(this.platformId)) {
      this.timeDifference = '';
      return;
    }
    
    const localTime = new Date();
    const userTime = new Date(localTime.toLocaleString('en-US', { 
      timeZone: this.member.location.timezone 
    }));
    
    const diffHours = Math.round((userTime.getTime() - localTime.getTime()) / (1000 * 60 * 60));
    
    if (diffHours === 0) {
      this.timeDifference = 'Same timezone';
    } else {
      const ahead = diffHours > 0;
      this.timeDifference = `${Math.abs(diffHours)} hours ${ahead ? 'ahead' : 'behind'}`;
    }
  }

  private loadHolidays(): void {
    if (!this.member) return;
    
    
    this.holidayService.getUpcomingHolidays(this.member.location.country)
      .subscribe({
        next: (holidays) => {
          this.upcomingHolidays = holidays;
        },
        error: (error) => {
          console.error('Error loading holidays:', error);
          this.upcomingHolidays = [];
        }
      });
  }
} 