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
    fileName: 'my-first-birthday.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_160551310_HDR.jpg`,
    orientation: 'vertical',
    description: 'My first birthday',
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
    fileName: 'turtle-manola-kindergarten.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_164101990_HDR.jpg`,
    orientation: 'vertical',
    description: 'Me with my turtle Manola at the kindergarten',
    date: new Date(Date.UTC(1993, 2, 15)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'family-holiday-beach-carilo.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_171412051_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With my family on holiday',
    date: new Date(Date.UTC(2003, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Carilo
  },
  {
    fileName: 'manu-swimming-pool-1.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_171515598_HDR.jpg`,
    orientation: 'vertical',
    description: 'With my brother Manuel',
    date: new Date(Date.UTC(2003, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'manu-swimming-pool-2.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_171618358_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Dude, stop! You\'re going to drown me!"',
    date: new Date(Date.UTC(2003, 1, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'mdq-gang-of-four.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_172026845_HDR.jpg`,
    orientation: 'vertical',
    description: 'The MDQ Gang of Four',
    date: new Date(Date.UTC(1999, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.MDQ
  },
  {
    fileName: 'mdq-two-little-pals.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_172141756_HDR.jpg`,
    orientation: 'vertical',
    description: 'Two little pals on holiday',
    date: new Date(Date.UTC(1999, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.MDQ
  },
  {
    fileName: 'waterfall-family-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_172256391_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Mom, it\'s just a picture, relax..."',
    date: new Date(Date.UTC(2000, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'everyone-ok-at-cordoba.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_172558822_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Is everyone having a good time?"',
    date: new Date(Date.UTC(2000, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.CarlosPaz
  },
  {
    fileName: 'patan-uncomfortable.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_172810501_HDR.jpg`,
    orientation: 'horizontal',
    description: 'My dog Patan, clearly not a photo fan',
    date: new Date(Date.UTC(2000, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'patan-angry.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_173017202_HDR.jpg`,
    orientation: 'vertical',
    description: '"Dude chill, it\'s just a picture!"',
    date: new Date(Date.UTC(2000, 5, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },

  //----------- family -----------//
  {
    fileName: 'family-at-23-28.jpg',
    src: `${baseUrl}/family/458272694_8030711793713572_761629738823366545_n.jpg`,
    orientation: 'horizontal',
    description: 'My family at 23:28',
    date: new Date(Date.UTC(2012, 7, 4)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'kathleen-visiting.jpg',
    src: `${baseUrl}/family/464299638_10234701156696218_1168093251591687398_n.jpg`,
    orientation: 'horizontal',
    description: 'With my Aussie cousin Kathleen during her visit',
    date: new Date(Date.UTC(2011, 6, 31)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'brother-and-me-school-days.jpg',
    src: `${baseUrl}/family/464948882_10236055258627657_8216967442306505411_n.jpg`,
    orientation: 'vertical',
    description: 'With my brother back in our school days',
    // missing: date
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'piano-lesson-with-parents.jpg',
    src: `${baseUrl}/family/IMG_20181212_201439337.jpg`,
    orientation: 'horizontal',
    description: 'After my piano lesson, with my parents',
    date: new Date(Date.UTC(2018, 11, 12)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'got-hair-back-mom.jpg',
    src: `${baseUrl}/family/IMG_20221022_231331740_HDR.jpg`,
    orientation: 'vertical',
    description: 'Finally got my hair back, thanks Mom!',
    date: new Date(Date.UTC(2022, 9, 22)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'dad-me-uni-prom.jpg',
    src: `${baseUrl}/family/IMG_20250121_164837665_HDR.jpg`,
    orientation: 'vertical',
    description: 'With my dad at my uni prom party',
    // missing: date
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'cristo-redentor-family.jpg',
    src: `${baseUrl}/family/IMG_20250121_165110169_HDR.jpg`,
    orientation: 'vertical',
    description: 'At Cristo Redentor with the fam in Rio',
    date: new Date(Date.UTC(2009, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Brazil.Rio
  },
  {
    fileName: 'family-beach-rio.jpg',
    src: `${baseUrl}/family/IMG_20250121_165153919_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With my family at the beach in Rio',
    date: new Date(Date.UTC(2009, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Brazil.Rio
  },
  {
    fileName: 'beach-safe-team.jpg',
    src: `${baseUrl}/family/IMG_20250121_165243439_HDR.jpg`,
    orientation: 'horizontal',
    description: 'The beach was in good hands that day',
    date: new Date(Date.UTC(2009, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Brazil.Buzios
  },
  {
    fileName: 'dad-me-relax-buzios.jpg',
    src: `${baseUrl}/family/IMG_20250121_165436467_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Taking it easy with Dad at the beach',
    date: new Date(Date.UTC(2009, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Brazil.Buzios
  },

  //----------- friends -----------//
  {
    fileName: 'emif-gargi-me-wedding.jpg',
    src: `${baseUrl}/friends/466279496_10231242577585181_8120809527241641051_n.jpg`,
    orientation: 'horizontal',
    description: 'Just three handsome dudes at a wedding',
    date: new Date(Date.UTC(2016, 4, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Funes
  },

  //----------- kayak -----------//
  {
    fileName: 'kayak-first-photo.jpg',
    src: `${baseUrl}/kayak/IMG_20200208_171824738.jpg`,
    orientation: 'horizontal',
    description: 'My kayak, one of the first captures',
    date: new Date(Date.UTC(2020, 1, 8)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'noob-saibot-sunset.jpg',
    src: `${baseUrl}/kayak/IMG_20200711_181140564.jpg`,
    orientation: 'horizontal',
    description: 'Noob Saibot watching a sunset on the Paraná River',
    date: new Date(Date.UTC(2020, 6, 11)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'kayak-me-self-portrait.jpg',
    src: `${baseUrl}/kayak/IMG_20200712_134446755.jpg`,
    orientation: 'horizontal',
    description: 'My kayak and I (self-portrait)',
    date: new Date(Date.UTC(2020, 6, 12)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'kayak-friends-doing-three.jpg',
    src: `${baseUrl}/kayak/IMG_20211003_184159481.jpg`,
    orientation: 'horizontal',
    description: 'I can\'t remember what the three was',
    date: new Date(Date.UTC(2021, 9, 3)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'mariano-gabriel-san-marquitos.jpg',
    src: `${baseUrl}/kayak/IMG_20240527_164946645.jpg`,
    orientation: 'horizontal',
    description: 'With Mariano and Gabriel, two frequent kayak partners',
    date: new Date(Date.UTC(2024, 4, 27)),
    location: Locations.Argentina.Rosario
  }
];
