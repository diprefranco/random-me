import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Photo } from '../../../../models/photo.model';
import { PhotoService } from '../../../../services/photo.service';
import { DatePipe } from '@angular/common';
import { NoPhotoComponent } from './no-photo/no-photo.component';

@Component({
  selector: 'rdm-photo',
  imports: [DatePipe, NoPhotoComponent],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  @Output() loadComponent = new EventEmitter<boolean>();
  photo!: Photo;

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
