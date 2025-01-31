import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Holiday } from '../../interfaces/holiday.interface';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  // This would typically come from an API, but for demo we'll use static data
  private holidayData: { [countryCode: string]: Holiday[] } = {
    'US': [
      {
        id: 'us-1',
        name: 'Memorial Day',
        date: this.createDate('2024-05-27'),
        country: 'United States',
        type: 'public',
        description: 'National day of remembrance for fallen U.S. military service members'
      },
      {
        id: 'us-2',
        name: 'Independence Day',
        date: this.createDate('2024-07-04'),
        country: 'United States',
        type: 'public',
        description: 'Federal holiday celebrating nation\'s independence'
      }
    ],
    'IN': [
      {
        id: 'in-1',
        name: 'Holi',
        date: this.createDate('2024-03-25'),
        country: 'India',
        type: 'public',
        description: 'Festival of colors'
      },
      {
        id: 'in-2',
        name: 'Ram Navami',
        date: this.createDate('2024-04-17'),
        country: 'India',
        type: 'public',
        description: 'Celebration of Lord Rama\'s birth'
      }
    ],
    'RU': [
      {
        id: 'ru-1',
        name: 'Victory Day',
        date: this.createDate('2024-05-09'),
        country: 'Russia',
        type: 'public',
        description: 'Commemoration of victory in Great Patriotic War'
      },
      {
        id: 'ru-2',
        name: 'Russia Day',
        date: this.createDate('2024-06-12'),
        country: 'Russia',
        type: 'public',
        description: 'National holiday celebrating Russian Federation'
      }
    ],
    'PH': [
      {
        id: 'ph-1',
        name: 'Araw ng Kagitingan',
        date: this.createDate('2024-04-09'),
        country: 'Philippines',
        type: 'public',
        description: 'Day of Valor'
      },
      {
        id: 'ph-2',
        name: 'Labor Day',
        date: this.createDate('2024-05-01'),
        country: 'Philippines',
        type: 'public',
        description: 'International Workers\' Day'
      }
    ],
    'MK': [
      {
        id: 'mk-1',
        name: 'Independence Day',
        date: this.createDate('2024-09-08'),
        country: 'Macedonia',
        type: 'public',
        description: 'Day of Independence'
      },
      {
        id: 'mk-2',
        name: 'Saint Clement of Ohrid Day',
        date: this.createDate('2024-12-08'),
        country: 'Macedonia',
        type: 'public',
        description: 'Cultural celebration'
      }
    ]
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('HolidayService initialized');
  }

  getUpcomingHolidays(countryName: string, count: number = 2): Observable<Holiday[]> {
    const countryCode = this.getCountryCode(countryName);
    const holidays = this.holidayData[countryCode] || [];
    
    if (!isPlatformBrowser(this.platformId)) {
      console.log('Server-side rendering, returning first holidays');
      return of(holidays.slice(0, count));
    }

    // Get current year
    const currentYear = new Date().getFullYear();
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Create next year's holidays if all of this year's holidays have passed
    const allHolidays = holidays.flatMap(holiday => {
      const thisYearDate = new Date(holiday.date);
      thisYearDate.setFullYear(currentYear);
      thisYearDate.setHours(0, 0, 0, 0);

      const nextYearDate = new Date(holiday.date);
      nextYearDate.setFullYear(currentYear + 1);
      nextYearDate.setHours(0, 0, 0, 0);

      return [
        { ...holiday, date: thisYearDate },
        { ...holiday, date: nextYearDate }
      ];
    });

    const upcomingHolidays = allHolidays
      .filter(holiday => {
        return holiday.date >= now;
      })
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .slice(0, count);

    return of(upcomingHolidays);
  }

  private getCountryCode(countryName: string): string {
    // Normalize the country name to handle variations
    const normalizedName = countryName.toLowerCase().trim();
    
    const countryMap: { [key: string]: string } = {
      'united states': 'US',
      'india': 'IN',
      'russia': 'RU',
      'philippines': 'PH',
      'macedonia': 'MK',
      // Add common variations
      'usa': 'US',
      'united states of america': 'US',
      'russian federation': 'RU',
      'republic of india': 'IN',
      'republic of the philippines': 'PH',
      'north macedonia': 'MK',
      'republic of north macedonia': 'MK',
      'republic of macedonia': 'MK'
    };

    const code = countryMap[normalizedName];
    if (!code) {
      console.warn(`No country code found for: ${countryName}`);
    }
    return code || '';
  }

  private createDate(dateString: string): Date {
    // Parse the date and set it to the current year
    const date = new Date(dateString);
    date.setFullYear(new Date().getFullYear());
    date.setHours(0, 0, 0, 0);
    return date;
  }
} 