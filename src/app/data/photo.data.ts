import { Photo } from '../models/photo.model';

export const photoData: Photo[] = [
  {
    fileName: 'casa-suzuki-older-man.jpg',
    src: 'random-images/kawe-rodrigues--ayoq1jzyKc-unsplash.jpg',
    orientation: 'horizontal',
    description: 'An older man is walking through a garden',
    date: new Date(Date.UTC(2024, 11, 29)),
    location: 'Tomé-Açu, State of Pará, Brazil',
    photographer: 'Kawê Rodrigues',
    photographerUrl: 'https://unsplash.com/@kawerodriguess'
  },
  {
    fileName: 'drown-in-memories.jpg',
    src: 'random-images/jalil-saeidi-23IRsBMvmuw-unsplash.jpg',
    orientation: 'horizontal',
    description: 'A man is floating in a pool of water',
    date: new Date(Date.UTC(2024, 11, 21)),
    location: 'New York, USA',
    photographer: 'Jalil Saeidi',
    photographerUrl: 'https://unsplash.com/@jalil_sd'
  },
  {
    fileName: 'woman-yellow-and-brown-sari-walking.jpg',
    src: 'random-images/polina-kuzovkova-fv16_AJYLJY-unsplash.jpg',
    orientation: 'vertical',
    description: 'A woman in a yellow and brown sari walking in front of a building',
    date: new Date(Date.UTC(2025, 0, 6)),
    location: 'Bangkok, Thailand',
    photographer: 'Polina Kuzovkova',
    photographerUrl: 'https://unsplash.com/@p_kuzovkova'
  },
  {
    fileName: 'rajasthani-women-standing.jpg',
    src: 'random-images/ritul-bhattacharjee-HBJEJEErmlc-unsplash.jpg',
    orientation: 'vertical',
    description: 'Rajasthani women in their regular Rajasthani attire',
    date: new Date(Date.UTC(2025, 0, 4)),
    location: 'Jaipur, Rajasthan, India',
    photographer: 'Ritul Bhattacharjee',
    photographerUrl: 'https://unsplash.com/@rd_ritul7'
  }
];
