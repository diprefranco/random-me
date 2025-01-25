import { Injectable } from '@angular/core';
import { photoData } from '../data/sample-photo.data';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoDataService {

  getTotalPhotoCount(): number {
    return photoData.length;
  }

  getPhotoAt(index: number): Photo {
    return photoData[index];
  }
}
