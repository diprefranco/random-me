import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Photo } from '../../../../models/photo.model';
import { PhotoService } from '../../../../services/photo.service';
import { DateComposedByPipe } from '../../../../pipes/date-composed-by.pipe';
import { NoPhotoComponent } from './no-photo/no-photo.component';
import { PhotoErrorComponent } from './photo-error/photo-error.component';

@Component({
  selector: 'rdm-photo',
  imports: [DateComposedByPipe, NoPhotoComponent, PhotoErrorComponent],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  @Output() loadComponent = new EventEmitter<boolean>();
  photo: Photo | undefined;
  imgLoadedSuccess = false;
  imgLoadedError = false;

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
