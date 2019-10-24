import { Component, ChangeDetectionStrategy, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours} from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView,
CalendarDateFormatter } from 'angular-calendar';
import { CustomDateFormatter } from '../../../../../core/pipes/custom-date-formatter.provider';

import { registerLocaleData, DOCUMENT } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@Component({
  selector: 'sib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter
    }
  ]
})
export class DashboardComponent {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate = new Date();

  events: CalendarEvent[] = [];
    /*{
      title: 'An event',
      start: new Date(),
      // color: colors.red
    }
  ];*/

  locale: any = 'es';


  private readonly darkThemeClass = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document) {}

  setView(view: CalendarView) {
    this.view = view;
  }

}
