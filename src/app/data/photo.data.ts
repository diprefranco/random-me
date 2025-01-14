import { Photo } from '../models/photo.model';

export const photoData: Photo[] = [
  {
    src: 'img/kawe-rodrigues--ayoq1jzyKc-unsplash.jpg',
    orientation: 'horizontal',
    description: 'A farmer showing their plants.',
    fileName: 'kawe-rodrigues.jpg',
    date: new Date(Date.UTC(2025, 0, 1)),
    location: 'Rio de Janeiro',
    photographer: 'John Doe'
  },
  {
    src: 'img/jalil-saeidi-23IRsBMvmuw-unsplash.jpg',
    orientation: 'horizontal',
    description: 'A man with half face inside a swimming pool.',
    fileName: 'jalil-saeidi.jpg',
    date: new Date(Date.UTC(2022, 4, 14)),
    location: 'New York',
    photographer: 'Albert Doe'
  },
  {
    src: 'img/polina-kuzovkova-fv16_AJYLJY-unsplash.jpg',
    orientation: 'vertical',
    description: 'A woman in a temple.',
    fileName: 'polina-kuzovkova.jpg',
    date: new Date(Date.UTC(2019, 7, 12)),
    location: 'India',
    photographer: 'Margaret Doe'
  },
  {
    src: 'img/ritul-bhattacharjee-HBJEJEErmlc-unsplash.jpg',
    orientation: 'vertical',
    description: 'A woman smiling kindly.',
    fileName: 'ritul-bhattacharjee.jpg',
    date: new Date(Date.UTC(2023, 2, 4)),
    location: 'India',
    photographer: 'Emily Doe'
  }
];
