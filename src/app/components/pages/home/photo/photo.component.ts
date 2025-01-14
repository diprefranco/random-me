import { Component, inject, OnInit } from '@angular/core';
import { Photo } from '../../../../models/photo.model';
import { PhotoService } from '../../../../services/photo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'rdm-photo',
  imports: [DatePipe],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {
  photo!: Photo;

  private photoService = inject(PhotoService);

  ngOnInit() {
    this.photo = this.photoService.getRandomPhoto();
  }
}
