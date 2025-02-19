import { inject, Pipe, PipeTransform } from '@angular/core';
import { DateParts } from '../models/photo.model';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateComposedBy'
})
export class DateComposedByPipe implements PipeTransform {

  private datePipe = inject(DatePipe);

  transform(date: Date, dateComposedBy?: DateParts): string {
    switch (dateComposedBy) {
      case null:
      case undefined:
      case DateParts.DayMonthYear:
        return this.datePipe.transform(date, 'MMM d, y', 'UTC') || '';
      case DateParts.MonthYear:
        return this.datePipe.transform(date, 'MMM y', 'UTC') || '';
      case DateParts.Year:
        return this.datePipe.transform(date, 'y', 'UTC') || '';
      default:
        return '';
    }
  }
}
