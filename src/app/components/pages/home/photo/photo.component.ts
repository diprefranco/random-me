import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Photo } from '../../../../models/photo.model';
import { PhotoService } from '../../../../services/photo.service';
import { DateComposedByPipe } from '../../../../pipes/date-composed-by.pipe';
import { NoPhotoComponent } from './no-photo/no-photo.component';

@Component({
  selector: 'rdm-photo',
  imports: [DateComposedByPipe, NoPhotoComponent],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  @Output() loadComponent = new EventEmitter<boolean>();
  photo!: Photo;
  imgLoaded = false;

  private photoService = inject(PhotoService);

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
}
