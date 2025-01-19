import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  /**
   * Returns a zero-based random index.
   * @param length 
   * @returns number between 0 and the length.
   */
  getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }
}
