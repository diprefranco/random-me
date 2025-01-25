import { DateParts, Photo } from '../models/photo.model';
import { Locations } from './locations.data';

const baseUrl = 'https://diprefranco.github.io/random-me-photos/photos';

export const photoData: Photo[] = [

  //----------- alone -----------//
  {
    fileName: 'when-you-really-feel-it.jpg',
    src: `${baseUrl}/alone/464225532_10235293245888829_5377867425533438746_n.jpg`,
    orientation: 'horizontal',
    description: 'When you really feel it',
    // missing: date
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'in-the-yard-posing-parrilla.jpg',
    src: `${baseUrl}/alone/IMG_20210708_135043942_HDR.jpg`,
    orientation: 'vertical',
    description: 'A handsome man posing in yellow background with parrilla',
    date: new Date(Date.UTC(2021, 6, 8)),
    location: Locations.Argentina.Casilda,
    photographer: 'My Mom'
  },
  {
    fileName: 'man-chair-casual.jpg',
    src: `${baseUrl}/alone/IMG_20220807_012528692_HDR.jpg`,
    orientation: 'vertical',
    description: 'A handsome man in a chair trying to be casual',
    date: new Date(Date.UTC(2022, 7, 7)),
    location: Locations.Argentina.Rosario
  },

  //----------- childhood -----------//
  {
    fileName: 'childhood-with-my-cousins-wal-caro.jpg',
    src: `${baseUrl}/childhood/464830574_10235566878536573_8173798425946225976_n.jpg`,
    orientation: 'horizontal',
    description: 'With my cousins Walter and Carolina',
    // missing: date
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'baptism-with-parents.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_160338255_HDR.jpg`,
    orientation: 'vertical',
    description: 'My parents and I at my baptism party',
    date: new Date(Date.UTC(1989, 7, 27)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'in-my-first-birthday.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_160551310_HDR.jpg`,
    orientation: 'vertical',
    description: 'In my first birthday',
    date: new Date(Date.UTC(1990, 5, 25)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'cool-bath-at-grandma.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_160742008_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Cool bath at my grandma\'s house',
    date: new Date(Date.UTC(1990, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'baptism-with-grandparents.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_160915193_HDR.jpg`,
    orientation: 'horizontal',
    description: 'My grandparents and I at my baptism party',
    date: new Date(Date.UTC(1989, 7, 27)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'brother-baptism-with-parents.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_161526837_HDR.jpg`,
    orientation: 'vertical',
    description: 'My brother baptism party with our parents',
    date: new Date(Date.UTC(1990, 3, 25)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'brother-baptism-with-cousin.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_161650998_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Dude, I think you\'re hurting him"',
    date: new Date(Date.UTC(1990, 3, 25)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'childhood-with-my-cousins-wal-caro-yard.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162436337_HDR.jpg`,
    orientation: 'vertical',
    description: 'With my cousins Walter and Carolina',
    date: new Date(Date.UTC(1991, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'reposera-dad-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162830880_HDR.jpg`,
    orientation: 'vertical',
    description: 'Taking it easy on holiday with Dad',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'river-dad-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162908604_HDR.jpg`,
    orientation: 'vertical',
    description: 'Dad and me, seeing how cold the river is',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'i-do-like-rivers.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162924078_HDR.jpg`,
    orientation: 'vertical',
    description: '"Hey, I do like rivers!"',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'classic-90-holiday-vibes.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163304690_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Classic \'90s holiday vibes',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'chilling-mom-dad-river.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163314836_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Chilling with Mom and Dad during our holiday',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'in-the-river-with-my-cousin.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163324246_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Two little buddies in the river',
    date: new Date(Date.UTC(1991, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'my-own-reposera-dad-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163516376_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Holiday vibes with Dad',
    date: new Date(Date.UTC(1992, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'mom-sun-bright-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163655814_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Mom, the sun it\'s too bright!"',
    date: new Date(Date.UTC(1992, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'dad-did-it-again-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163702986_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Son, the last cookie is gone... I ate it"',
    date: new Date(Date.UTC(1992, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'mom-dad-not-smiling.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163712794_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Come on, smile! It\'s holiday time!"',
    date: new Date(Date.UTC(1992, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'dad-hot-mate-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163754261_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Easy boy, you\'re going to burn your tongue!"',
    date: new Date(Date.UTC(1992, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'childhood-seeing-photo-album.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_163936391_HDR.jpg`,
    orientation: 'horizontal',
    description: '"When I\'m all ground up, I\'ll build a website to show all of this"',
    date: new Date(Date.UTC(1993, 2, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'turtle-manola-at-kindergarten.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_164101990_HDR.jpg`,
    orientation: 'vertical',
    description: 'Me with my turtle Manola at the kindergarten',
    date: new Date(Date.UTC(1993, 2, 15)),
    location: Locations.Argentina.Casilda
  }
];
