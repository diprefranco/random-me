import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  getProjectUrl(): string {
    return 'https://github.com/diprefranco/random-me/tree/main-v1.0';
  }

  getRandomRoutineUrl(): string {
    return 'https://github.com/diprefranco/random-me/blob/main-v1.0/src/app/services/photo.service.ts';
  }
}
