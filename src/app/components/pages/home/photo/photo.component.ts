import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { DateParts, Photo } from '../../../../models/photo.model';
import { PhotoService } from '../../../../services/photo.service';
import { DatePipe } from '@angular/common';
import { NoPhotoComponent } from './no-photo/no-photo.component';

@Component({
  selector: 'rdm-photo',
  imports: [NoPhotoComponent],
  providers: [DatePipe],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  @Output() loadComponent = new EventEmitter<boolean>();
  photo!: Photo;
  imgLoaded = false;

  private photoService = inject(PhotoService);
  private datePipe = inject(DatePipe);

  ngOnInit() {
    this.photo = this.photoService.getRandomPhoto();
    if (!this.photo) {
      setTimeout(() => {
        this.loadComponentCompleted();
      }, 0.001);
    }
  }

  loadComponentCompleted() {
    this.loadComponent.emit(true);
  }

  formatPhotoDate(): string {
    switch (this.photo.dateComposedBy) {
      case null:
      case undefined:
      case DateParts.DayMonthYear:
        return this.datePipe.transform(this.photo.date, 'MMM d, y', 'UTC') || '';
      case DateParts.MonthYear:
        return this.datePipe.transform(this.photo.date, 'MMM y', 'UTC') || '';
      case DateParts.Year:
        return this.datePipe.transform(this.photo.date, 'y', 'UTC') || '';
      default:
        return '';
    }
  }
}
