type Orientation = 'horizontal' | 'vertical';

export interface Photo {
  src: string;
  orientation: Orientation;
  description?: string;
  fileName: string;
  date?: Date;
  location?: string;
  photographer?: string;
}
