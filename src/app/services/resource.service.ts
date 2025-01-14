import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  getProjectUrl(): string {
    return 'https://github.com/diprefranco/random-me';
  }

  getTemplateUrl(): string {
    return 'https://github.com/diprefranco/random-me/tree/main-template';
  }

  getRandomRoutineUrl(): string {
    return 'https://github.com/diprefranco/random-me/blob/main-layout/src/app/services/photo.service.ts';
  }
}
