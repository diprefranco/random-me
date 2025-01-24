import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  getProjectUrl(): string {
    return 'https://github.com/diprefranco/random-me';
  }

  getRandomRoutineUrl(): string {
    return 'https://github.com/diprefranco/random-me/blob/main/src/app/services/photo.service.ts';
  }
}
