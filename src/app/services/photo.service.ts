import { inject, Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { PhotoDataService } from './photo-data.service';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photoDataService = inject(PhotoDataService);
  private utilityService = inject(UtilityService);

  getRandomPhoto(): Photo | undefined {
    const totalPhotoCount = this.photoDataService.getTotalPhotoCount();
    const randomIndex = this.utilityService.getRandomIndex(totalPhotoCount);
    return this.photoDataService.getPhotoAt(randomIndex);
  }
}
