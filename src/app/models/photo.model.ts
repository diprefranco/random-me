type Orientation = 'horizontal' | 'vertical';

export enum DateParts {
  DayMonthYear = 0,
  MonthYear = 1,
  Year = 2
}

export interface Photo {
  fileName: string;
  src: string;
  orientation: Orientation;
  description?: string;
  date?: Date;
  dateComposedBy?: DateParts;
  location?: string;
  photographer?: string;
  photographerUrl?: string;
}
