import { DateParts, Photo } from '../models/photo.model';
import { Locations } from './locations.data';
import { Photographers } from './photographers.data';

const baseUrl = 'https://diprefranco.github.io/random-me-photos/photos';

export const photoData: Photo[] = [

  //----------- alone -----------//
  {
    fileName: 'when-you-really-feel-it.jpg',
    src: `${baseUrl}/alone/464225532_10235293245888829_5377867425533438746_n.jpg`,
    orientation: 'horizontal',
    description: 'When you really feel it',
    date: new Date(Date.UTC(2011, 11, 18)),
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
    fileName: 'childhood-with-my-cousins-yard.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162436337_HDR.jpg`,
    orientation: 'vertical',
    description: 'With my cousins Walter and Carolina',
    date: new Date(Date.UTC(1991, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'childhood-with-my-cousins-pool.jpg',
    src: `${baseUrl}/childhood/IMG_20250121_162516424_HDR.jpg`,
    orientation: 'vertical',
    description: 'We are the gang of cousins. Be careful, we have our own pool',
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
    fileName: 'dad-me-graduation-party-2013.jpg',
    src: `${baseUrl}/family/IMG_20250121_164837665_HDR.jpg`,
    orientation: 'vertical',
    description: 'With my dad at my university graduation party',
    date: new Date(Date.UTC(2013, 10, 23)),
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
  },

  //----------- mountains -----------//
  {
    fileName: 'champaqui-summit-2021.jpg',
    src: `${baseUrl}/mountains/champaqui-2021/IMG_20210402_144336554.jpg`,
    orientation: 'horizontal',
    description: 'At 2,790 m.a.s.l. on Cerro Champaquí\'s summit',
    date: new Date(Date.UTC(2021, 3, 2)),
    location: Locations.Argentina.Champaqui
  },
  {
    fileName: 'champaqui-with-my-staff.jpg',
    src: `${baseUrl}/mountains/champaqui-2021/IMG_20210404_085008343.jpg`,
    orientation: 'vertical',
    description: 'On my favorite mountain Cerro Champaquí, with everything on my back',
    date: new Date(Date.UTC(2021, 3, 4)),
    location: Locations.Argentina.Champaqui
  },
  {
    fileName: 'champaqui-posing-landscape.jpg',
    src: `${baseUrl}/mountains/champaqui-2021/IMG_20210404_112711626_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Cerro Champaquí, one of my favorite places',
    date: new Date(Date.UTC(2021, 3, 4)),
    location: Locations.Argentina.Champaqui
  },
  {
    fileName: 'penitentes-full-load.jpg',
    src: `${baseUrl}/mountains/penitentes-2022/IMG_20220117_161459963.jpg`,
    orientation: 'vertical',
    description: 'Cerro Penitentes, carrying the full load',
    date: new Date(Date.UTC(2022, 0, 17)),
    location: Locations.Argentina.Penitentes
  },
  {
    fileName: 'penitentes-aconcagua-behind.jpg',
    src: `${baseUrl}/mountains/penitentes-2022/IMG_20220119_091446693.jpg`,
    orientation: 'vertical',
    description: 'Cerro Penitentes, with Aconcagua behind me',
    date: new Date(Date.UTC(2022, 0, 19)),
    location: Locations.Argentina.Penitentes
  },
  {
    fileName: 'penitentes-summit-2022.jpg',
    src: `${baseUrl}/mountains/penitentes-2022/IMG_20220119_125805540.jpg`,
    orientation: 'horizontal',
    description: 'At 4,350 m.a.s.l. on Cerro Penitentes\'s summit',
    date: new Date(Date.UTC(2022, 0, 19)),
    location: Locations.Argentina.Penitentes
  },

  //----------- music -----------//
  {
    fileName: 'gacela-after-show.jpg',
    src: `${baseUrl}/music/bands/gacela/463024149_9668367793192785_6941176996549501011_n.jpg`,
    orientation: 'horizontal',
    description: 'Gacela band, after the show',
    date: new Date(Date.UTC(2012, 9, 28)),
    location: Locations.Argentina.Colon
  },
  {
    fileName: 'gacela-trying-things.jpg',
    src: `${baseUrl}/music/bands/gacela/465060533_10235251854983983_2695746888049226135_n.jpg`,
    orientation: 'horizontal',
    description: 'Gacela power glam trio',
    date: new Date(Date.UTC(2012, 11, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'gacela-nico-birthday.jpg',
    src: `${baseUrl}/music/bands/gacela/465147383_10235253067294290_9106692767440672547_n.jpg`,
    orientation: 'horizontal',
    description: 'Gacela rocking at the guitarist\'s birthday party',
    date: new Date(Date.UTC(2013, 2, 12)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'el-gato-live-efecto-tequila.jpg',
    src: `${baseUrl}/music/bands/gato-de-strodinger/462124117_8443157039072477_1758295598529245119_n.jpg`,
    orientation: 'horizontal',
    description: 'El Gato de Strodinger live at Efecto Tequila\'s Studios',
    date: new Date(Date.UTC(2012, 9, 29)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'Jamming-with-el-gato.jpg',
    src: `${baseUrl}/music/bands/gato-de-strodinger/465030269_10235691398122582_6761139447243853546_n.jpg`,
    orientation: 'vertical',
    description: 'Jamming with El Gato de Strodinger',
    date: new Date(Date.UTC(2013, 4, 8)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'el-gato-drummer.jpg',
    src: `${baseUrl}/music/bands/gato-de-strodinger/465042422_10235691399442615_396362529821482665_n.jpg`,
    orientation: 'vertical',
    description: 'Gato de Strodinger\'s drummer at a regular jam session',
    date: new Date(Date.UTC(2013, 4, 8)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'el-gato-garage-2013.jpg',
    src: `${baseUrl}/music/bands/gato-de-strodinger/465585501_10235691404322737_4073119602024133594_n.jpg`,
    orientation: 'horizontal',
    description: 'Gato de Strodinger\'s playing in the garage back in 2013',
    date: new Date(Date.UTC(2013, 4, 8)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-puegliese-2015.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/463756663_8372369919511784_7094779197241019996_n.jpg`,
    orientation: 'vertical',
    description: 'Sal de la Huella live at Pugliese, 2015',
    date: new Date(Date.UTC(2015, 4, 17)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'sal-de-la-huella-charlie-2014.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/463925685_27313711314910996_4688003728001945229_n.jpg`,
    orientation: 'vertical',
    description: 'Sal de la Huella live at Charlie Brown, 2014',
    date: new Date(Date.UTC(2014, 4, 8)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-charlie-2015.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/464487333_27387824987499628_6166780699165050016_n.jpg`,
    orientation: 'horizontal',
    description: 'Sal de la Huella live at Charlie Brown, 2015',
    date: new Date(Date.UTC(2015, 5, 30)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-charlie-2015-2.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/464583629_27387825350832925_1684015672988980556_n.jpg`,
    orientation: 'vertical',
    description: 'Sal de la Huella live at Charlie Brown, 2015',
    date: new Date(Date.UTC(2015, 5, 30)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-canteros.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/466044607_10234932171429096_1989847782995078513_n.jpg`,
    orientation: 'horizontal',
    description: 'Sal de la Huella live at Canteros del Lisandro de la Torre, Casilda',
    date: new Date(Date.UTC(2014, 3, 12)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-preparing.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/466097211_10235446880899509_5452639489997943944_n.jpg`,
    orientation: 'vertical',
    description: 'Sal de la Huella preparing for the show',
    date: new Date(Date.UTC(2014, 8, 30)),
    location: Locations.Argentina.Casilda
  },
  {
    fileName: 'sal-de-la-huella-pre-spring-2015.jpg',
    src: `${baseUrl}/music/bands/sal-de-la-huella/466588575_10234754020812239_5461487149594783941_n.jpg`,
    orientation: 'horizontal',
    description: 'Sal de la Huella after playing at the Pre-Spring Band Contest 2015',
    date: new Date(Date.UTC(2015, 6, 1)),
    location: Locations.Argentina.Rosario
  },

  //----------- school -----------//
  {
    fileName: 'kindergarten-mise.jpg',
    src: `${baseUrl}/school/kindergarten/463333867_10233570662705721_4725719448651518375_n.jpg`,
    orientation: 'horizontal',
    description: 'Kindergarten at Nuestra Señora de la Misericordia',
    date: new Date(Date.UTC(1994, 2, 1)),
    dateComposedBy: DateParts.Year,
    location: Locations.Argentina.Casilda
  },

  //----------- travels -----------//
  {
    fileName: 'memories-reflective-look-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/CBDC6719-0DCD-4992-A603-788BD9D6541D.JPG`,
    orientation: 'vertical',
    description: 'Memories of a reflective look in Italy',
    date: new Date(Date.UTC(2023, 8, 25)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  },
  {
    fileName: 'dude-forgot-bread-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/D92A81EB-EE92-4E89-97B6-BDA8061C6AA9.JPG`,
    orientation: 'vertical',
    description: '"Oh man, I forgot to buy the bread"',
    date: new Date(Date.UTC(2023, 8, 25)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  },
  {
    fileName: 'running-fields-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/DSC_3637.JPG`,
    orientation: 'horizontal',
    description: 'Running in the fields',
    date: new Date(Date.UTC(2023, 8, 27)),
    location: Locations.Italy.Country,
    photographer: Photographers.JuanGiovacchini.Name,
    photographerUrl: Photographers.JuanGiovacchini.Url
  },
  {
    fileName: 'running-fields-italy-2.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/DSC_3638.JPG`,
    orientation: 'horizontal',
    description: 'Running in the fields',
    date: new Date(Date.UTC(2023, 8, 27)),
    location: Locations.Italy.Country,
    photographer: Photographers.JuanGiovacchini.Name,
    photographerUrl: Photographers.JuanGiovacchini.Url
  },
  {
    fileName: 'man-thinking-future-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/F077F2BA-4F00-465F-B42C-386EA3AC4A6F.JPG`,
    orientation: 'vertical',
    description: 'A man thinking about the future',
    date: new Date(Date.UTC(2023, 8, 25)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  },
  {
    fileName: 'man-relaxing-thinking-future-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/FDA43F10-BF91-46E7-A53B-6CDB66642170.JPG`,
    orientation: 'vertical',
    description: 'A man relaxing after thinking about the future',
    date: new Date(Date.UTC(2023, 8, 25)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  },
  {
    fileName: 'emif-double-jar-montjuic.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_2833.JPG`,
    orientation: 'vertical',
    description: 'With Emiliano in Montjuïc Castle',
    date: new Date(Date.UTC(2023, 9, 14)),
    location: Locations.Spain.Barcelona
  },
  {
    fileName: 'thinking-build-website-italy.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20230723_155322390_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Maybe I can build a website to show this photo"',
    date: new Date(Date.UTC(2023, 6, 23)),
    location: Locations.Italy.Country
  },
  {
    fileName: 'juli-castel-sant-angelo.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20230806_144516364_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With Juli on the roof of Castel Sant\'Angelo',
    date: new Date(Date.UTC(2023, 7, 6)),
    location: Locations.Italy.Rome
  },
  {
    fileName: 'alcazaba-almeria-spain-2023.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20231108_154352334_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Me at the Alcazaba of Almería',
    date: new Date(Date.UTC(2023, 10, 8)),
    location: Locations.Spain.Almeria
  },
  {
    fileName: 'malaga-behind-2023.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20231113_115945946_HDR.jpg`,
    orientation: 'vertical',
    description: 'With Málaga behind me',
    date: new Date(Date.UTC(2023, 10, 13)),
    location: Locations.Spain.Malaga
  },
  {
    fileName: 'autumn-granada-2023.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20231124_173524069_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Autumn in Granada',
    date: new Date(Date.UTC(2023, 10, 24)),
    location: Locations.Spain.Granada
  },
  {
    fileName: 'monte-san-anton-2023.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20240403_180016096_HDR.jpg`,
    orientation: 'horizontal',
    description: 'On top of Monte San Antón',
    date: new Date(Date.UTC(2024, 3, 3)),
    location: Locations.Spain.Malaga
  },
  {
    fileName: 'ronda-behind-2023.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20240501_152957209_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With Ronda behind me',
    date: new Date(Date.UTC(2024, 4, 1)),
    location: Locations.Spain.Ronda
  },
  {
    fileName: 'italy-with-the-guys.jpg',
    src: `${baseUrl}/travels/europe/italy-spain-2023/IMG_20230717_2319.jpg`,
    orientation: 'horizontal',
    description: 'With Santiago and Julian in Italy',
    date: new Date(Date.UTC(2023, 6, 17)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  },
  {
    fileName: 'giant-causeway-2019.jpg',
    src: `${baseUrl}/travels/europe/spain-irland-italy-2019/IMG_20190427_132034982_HDR.jpg`,
    orientation: 'horizontal',
    description: 'At Giant\'s Causeway',
    date: new Date(Date.UTC(2019, 3, 27)),
    location: Locations.UK.NorthernIreland
  },
  {
    fileName: 'tower-of-pisa-2019.jpg',
    src: `${baseUrl}/travels/europe/spain-irland-italy-2019/IMG_20190430_152229606.jpg`,
    orientation: 'vertical',
    description: 'I had to do it',
    date: new Date(Date.UTC(2019, 3, 30)),
    location: Locations.Italy.Pisa
  },
  {
    fileName: 'sitges-beach-2019.jpg',
    src: `${baseUrl}/travels/europe/spain-irland-italy-2019/IMG_20190510_115846418.jpg`,
    orientation: 'horizontal',
    description: '"Dude, it\'s a beach. Take your clothes off!"',
    date: new Date(Date.UTC(2019, 4, 10)),
    location: Locations.Spain.Sitges
  },
  {
    fileName: 'carrer-bisbe-barcelona-2019.jpg',
    src: `${baseUrl}/travels/europe/spain-irland-italy-2019/IMG_20190513_202833998.jpg`,
    orientation: 'horizontal',
    description: 'Carrer del Bisbe, Barcelona',
    date: new Date(Date.UTC(2019, 4, 13)),
    location: Locations.Spain.Barcelona
  },
  {
    fileName: 'refugio-frey-bariloche-2020.jpg',
    src: `${baseUrl}/travels/south-america/argentina/bariloche-2020/20200125_102118.jpg`,
    orientation: 'horizontal',
    description: 'Refugio Frey in summer',
    date: new Date(Date.UTC(2020, 0, 25)),
    location: Locations.Argentina.Bariloche
  },
  {
    fileName: 'mascardi-bariloche-2020.jpg',
    src: `${baseUrl}/travels/south-america/argentina/bariloche-2020/IMG_20200120_095731479.jpg`,
    orientation: 'horizontal',
    description: 'Before starting the adventure, at Mascardi Lake',
    date: new Date(Date.UTC(2020, 0, 20)),
    location: Locations.Argentina.Bariloche
  },
  {
    fileName: 'relaxing-nature-bariloche-2020.jpg',
    src: `${baseUrl}/travels/south-america/argentina/bariloche-2020/IMG_20200123_165829723_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Relaxing a little bit in nature',
    date: new Date(Date.UTC(2020, 0, 23)),
    location: Locations.Argentina.Bariloche
  },
  {
    fileName: 'francos-lucians-team-belgrano.jpg',
    src: `${baseUrl}/travels/south-america/argentina/capilla-del-monte-2019/IMG_20190706_170529069.jpg`,
    orientation: 'horizontal',
    description: 'From left to right: Franco, Luciana, Luciano, Franco (easy to remember)',
    date: new Date(Date.UTC(2019, 6, 6)),
    location: Locations.Argentina.VillaGeneralBelgrano
  },
  {
    fileName: 'francos-lucians-team-capilla.jpg',
    src: `${baseUrl}/travels/south-america/argentina/capilla-del-monte-2019/IMG_20190707_155854481.jpg`,
    orientation: 'horizontal',
    description: 'The Francos and Lucians Team on holiday',
    date: new Date(Date.UTC(2019, 6, 7)),
    location: Locations.Argentina.CapillaDelMonte
  },
  {
    fileName: 'old-man-uritorco-summit.jpg',
    src: `${baseUrl}/travels/south-america/argentina/capilla-del-monte-2019/IMG_20190708_121550574.jpg`,
    orientation: 'horizontal',
    description: 'At 1,949 m.a.s.l. on Cerro Uritorco\'s summit',
    date: new Date(Date.UTC(2019, 6, 8)),
    location: Locations.Argentina.CapillaDelMonte
  },
  {
    fileName: 'rada-tilly-view.jpg',
    src: `${baseUrl}/travels/south-america/argentina/comodoro-puerto-madryn-2022/IMG_20220827_171016883_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Stunning view from Rada Tilly',
    date: new Date(Date.UTC(2022, 7, 27)),
    location: Locations.Argentina.RadaTilly
  },
  {
    fileName: 'valdes-peninsula-view.jpg',
    src: `${baseUrl}/travels/south-america/argentina/comodoro-puerto-madryn-2022/IMG_20220911_114344599_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Amazing view from Valdes Peninsula',
    date: new Date(Date.UTC(2022, 8, 11)),
    location: Locations.Argentina.PuertoMadryn
  },
  {
    fileName: 'puerto-piramides-view.jpg',
    src: `${baseUrl}/travels/south-america/argentina/comodoro-puerto-madryn-2022/IMG_20220911_183413792_HDR.jpg`,
    orientation: 'horizontal',
    description: 'In Puerto Pirámides, after the whale watching experience',
    date: new Date(Date.UTC(2022, 8, 11)),
    location: Locations.Argentina.PuertoPiramides
  },
  {
    fileName: 'el-bolson-lost.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230110_122615737_HDR.jpg`,
    orientation: 'vertical',
    description: '"Umm. And now what?"',
    date: new Date(Date.UTC(2023, 0, 10)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-hielo-azul.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230110_150039279_MF_PORTRAIT.jpg`,
    orientation: 'vertical',
    description: '"Excuse me sir, can you take a picture of me? It\'s for a random website"',
    date: new Date(Date.UTC(2023, 0, 10)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-hielo-azul-2.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230110_160704914.jpg`,
    orientation: 'horizontal',
    description: 'This was the view on the mountain near Refugio Hielo Azul',
    date: new Date(Date.UTC(2023, 0, 10)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-cajon-azul.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230112_155756277_HDR.jpg`,
    orientation: 'horizontal',
    description: '"Excuse me, miss, could you tell me where El Cajón del Azul is?"',
    date: new Date(Date.UTC(2023, 0, 12)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-dangerous-picture.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230112_161114478_MF_PORTRAIT.jpg`,
    orientation: 'vertical',
    description: '"It\'s high from here, common, take that picture!"',
    date: new Date(Date.UTC(2023, 0, 12)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-fishing.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230114_203622315_HDR.jpg`,
    orientation: 'vertical',
    description: '"I\'ll bet you the next one will be big"',
    date: new Date(Date.UTC(2023, 0, 14)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-waterfall-guy.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230119_125009288_HDR.jpg`,
    orientation: 'vertical',
    description: 'I imagine heaven looks something like this',
    date: new Date(Date.UTC(2023, 0, 19)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'el-bolson-lost.jpg',
    src: `${baseUrl}/travels/south-america/argentina/el-bolson-2023/IMG_20230119_125053991_HDR.jpg`,
    orientation: 'vertical',
    description: '"What\'s that smell? Don\'t look at me!"',
    date: new Date(Date.UTC(2023, 0, 19)),
    location: Locations.Argentina.ElBolson
  },
  {
    fileName: 'mendoza-duna-love.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472103612_10162969501846019_8225677459689060081_n.jpg`,
    orientation: 'horizontal',
    description: '"They look really nice together. I like that couple"',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Potrerillos
  },
  {
    fileName: 'mendoza-big-effort.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472143666_10162971868331019_745720350090581797_n.jpg`,
    orientation: 'horizontal',
    description: '"Maybe If I just pull this..."',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Mendoza
  },
  {
    fileName: 'mendoza-dont-jump.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472194529_10162971335786019_348591528595031561_n.jpg`,
    orientation: 'horizontal',
    description: '"Maybe If I jump the fence I can..."',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Mendoza
  },
  {
    fileName: 'mendoza-duna-cute.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472313110_10162971773491019_440054262218766600_n.jpg`,
    orientation: 'horizontal',
    description: '"Hey, look who I found. Where were you little buddy?"',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Mendoza
  },
  {
    fileName: 'mendoza-matecitos-holiday.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472318429_10162970907126019_5294242965235418594_n.jpg`,
    orientation: 'horizontal',
    description: 'Having Matecitos on holiday',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanRafael
  },
  {
    fileName: 'mendoza-rafting-san-rafael.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472363549_10162972207381019_7775837811409311699_n.jpg`,
    orientation: 'horizontal',
    description: 'Rafting in San Rafael!',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanRafael
  },
  {
    fileName: 'mendoza-tirolesa-san-rafael.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472386308_10162970860471019_7519454413996787252_n.jpg`,
    orientation: 'horizontal',
    description: '"Okay, but this is safe, right?"',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanRafael
  },
  {
    fileName: 'mendoza-potrerillos-trying-something.jpg',
    src: `${baseUrl}/travels/south-america/argentina/mendoza-2015/472685556_10162972506201019_5679809176131978911_n.jpg`,
    orientation: 'horizontal',
    description: '"Here we can see the Homo sapiens trying... um... something"',
    date: new Date(Date.UTC(2015, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Potrerillos
  },
  {
    fileName: 'purmamarca-2022-tree.jpg',
    src: `${baseUrl}/travels/south-america/argentina/purmamarca-2022/IMG_20220305_134101738_HDR.jpg`,
    orientation: 'horizontal',
    description: 'It was about an hour and a half north of Purmamarca. Let me know if you know it',
    date: new Date(Date.UTC(2022, 2, 5)),
    location: Locations.Argentina.Purmamarca
  },
  {
    fileName: 'cabalango-being-zen.jpg',
    src: `${baseUrl}/travels/south-america/argentina/rio-zeballos-2021/IMG_20210217_171034.jpg`,
    orientation: 'horizontal',
    description: 'Being Zen',
    date: new Date(Date.UTC(2021, 1, 17)),
    location: Locations.Argentina.Cabalango
  },
  {
    fileName: 'rio-ceballos-river-worried.jpg',
    src: `${baseUrl}/travels/south-america/argentina/rio-zeballos-2021/IMG_20210218_150456.jpg`,
    orientation: 'horizontal',
    description: '"Dude, I think something was moving there"',
    date: new Date(Date.UTC(2021, 1, 18)),
    location: Locations.Argentina.RioCeballos
  },
  {
    fileName: 'rio-ceballos-condorito.jpg',
    src: `${baseUrl}/travels/south-america/argentina/rio-zeballos-2021/IMG_20210219_154636.jpg`,
    orientation: 'horizontal',
    description: 'With Condorito, a dog that guided us to the \'Cascada de los Cóndores\'',
    date: new Date(Date.UTC(2021, 1, 19)),
    location: Locations.Argentina.RioCeballos
  },
  {
    fileName: 'rio-ceballos-condorito-chill.jpg',
    src: `${baseUrl}/travels/south-america/argentina/rio-zeballos-2021/IMG_20210219_170559.jpg`,
    orientation: 'vertical',
    description: 'With Condorito, a dog that really knows how to chill',
    date: new Date(Date.UTC(2021, 1, 19)),
    location: Locations.Argentina.RioCeballos
  },
  {
    fileName: 'waterfall-sexy-stare.jpg',
    src: `${baseUrl}/travels/south-america/argentina/rio-zeballos-2021/IMG_20210219_171918.jpg`,
    orientation: 'horizontal',
    description: 'Natural sexy stare guy',
    date: new Date(Date.UTC(2021, 1, 19)),
    location: Locations.Argentina.RioCeballos
  },
  {
    fileName: 'ushuaia-dating-apps-dude.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221120_123807455_MF_PORTRAIT.jpg`,
    orientation: 'vertical',
    description: '"Give me a sexy nice photo. You know, for dating apps"',
    date: new Date(Date.UTC(2022, 10, 20)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'ushuaia-bahia-lapataia.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221120_164024707_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Entering to Bahía Lapataia National Park',
    date: new Date(Date.UTC(2022, 10, 20)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'ushuaia-loren-martial.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221121_125641435_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With Lorenzo on the Glaciar Martial trail',
    date: new Date(Date.UTC(2022, 10, 21)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'ushuaia-loren-vinciguerra.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221123_114808752_HDR.jpg`,
    orientation: 'horizontal',
    description: 'With Lorenzo at Glaciar Vinciguerra',
    date: new Date(Date.UTC(2022, 10, 23)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'ushuaia-glaciar-vinciguerra-cave.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221123_125502583_HDR.jpg`,
    orientation: 'horizontal',
    description: 'At Glaciar Vinciguerra',
    date: new Date(Date.UTC(2022, 10, 23)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'ushuaia-faro-les-eclaireurs.jpg',
    src: `${baseUrl}/travels/south-america/argentina/ushuaia-2022/IMG_20221124_112414818_HDR.jpg`,
    orientation: 'vertical',
    description: 'At Faro Les Éclaireurs',
    date: new Date(Date.UTC(2022, 10, 24)),
    location: Locations.Argentina.Ushuaia
  },
  {
    fileName: 'chachin-waterfall-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/465559014_10235473302360029_6634168466318742626_n.jpg`,
    orientation: 'horizontal',
    description: 'All the team at Chachin waterfall',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanMartinDeLosAndes
  },
  {
    fileName: 'big-fallen-tree-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/465740761_10235473303600060_8112153356760009831_n.jpg`,
    orientation: 'horizontal',
    description: 'With the big fallen tree on the Chachin waterfall trail',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanMartinDeLosAndes
  },
  {
    fileName: 'flying-sandwich-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/465764034_10235403550656280_5340835464647742056_n.jpg`,
    orientation: 'horizontal',
    description: '"I think with AI we can remove that sandwich now"',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.VillaLaAngostura
  },
  {
    fileName: 'morning-coffee-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/465908450_10235474722515532_3418924094336593557_n.jpg`,
    orientation: 'horizontal',
    description: '"Hey Edu, how is the coffee this morning? Is it good?"',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanMartinDeLosAndes
  },
  {
    fileName: 'sinking-boat-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/466380844_10235478562531530_530030742405152431_n.jpg`,
    orientation: 'horizontal',
    description: '"Ahh, Ahhh, help!"',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.VillaLaAngostura
  },
  {
    fileName: 'cottage-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/466412290_10235487701039987_4331649296590245355_n.jpg`,
    orientation: 'horizontal',
    description: '"I set up the camera. Everyone, gather for the photo! Uh... do something!"',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.VillaLaAngostura
  },
  {
    fileName: 'matrix-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/472288238_10162944572686019_1203623246811316914_n.jpg`,
    orientation: 'horizontal',
    description: 'All the team gathered in a 3x3 matrix',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanMartinDeLosAndes
  },
  {
    fileName: 'siete-lagos-falkner-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/472294106_10162944555571019_6974311427996614617_n.jpg`,
    orientation: 'horizontal',
    description: 'Falkner lake, the 4th lake we visited. Or... Maybe the 5th one?',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.SanMartinDeLosAndes
  },
  {
    fileName: 'lago-puelo-waterfall-sur-2014.jpg',
    src: `${baseUrl}/travels/south-america/argentina/viaje-al-sur-2014/472470024_10162944574576019_4347088207995396543_n.jpg`,
    orientation: 'horizontal',
    description: 'Photo with the waterfall!',
    date: new Date(Date.UTC(2014, 0, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.LagoPuelo
  },
  {
    fileName: 'pacha-cuty-hostel-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180122_115602455.jpg`,
    orientation: 'horizontal',
    description: 'With the Pacha Cuty Hostel Staff',
    date: new Date(Date.UTC(2018, 0, 22)),
    location: Locations.Argentina.AmaichaDelValle
  },
  {
    fileName: '7-waterfalls-cafayate-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180123_152351758.jpg`,
    orientation: 'vertical',
    description: 'Rio Colorado waterfalls',
    date: new Date(Date.UTC(2018, 0, 23)),
    location: Locations.Argentina.Cafayate
  },
  {
    fileName: 'big-waterfall-cafayate-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180123_160640315.jpg`,
    orientation: 'vertical',
    description: 'Rio Colorado waterfalls, the bigger one',
    date: new Date(Date.UTC(2018, 0, 23)),
    location: Locations.Argentina.Cafayate
  },
  {
    fileName: 'cafayate-travel-mode-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_143915322.jpg`,
    orientation: 'vertical',
    description: 'Travel Mode: On',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Cafayate
  },
  {
    fileName: 'castillos-quebrada-conchas-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_155031596.jpg`,
    orientation: 'horizontal',
    description: 'Los Castillos, Quebrada de las Conchas',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'quebrada-conchas-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_171334011.jpg`,
    orientation: 'horizontal',
    description: 'Quebrada de las Conchas',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'quebrada-conchas-2-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_183641490.jpg`,
    orientation: 'horizontal',
    description: 'Quebrada de las Conchas',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'anfiteatro-quebrada-conchas-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_190501626.jpg`,
    orientation: 'vertical',
    description: 'Feeling really small at El Anfiteatro in Quebrada de las Conchas',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'autostop-quebrada-conchas-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180125_200718534.jpg`,
    orientation: 'horizontal',
    description: 'Autostop Mode: On',
    date: new Date(Date.UTC(2018, 0, 25)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'los-cardones-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180129_133549488.jpg`,
    orientation: 'horizontal',
    description: 'Parque Nacional Los Cardones',
    date: new Date(Date.UTC(2018, 0, 29)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'road-los-cardones-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180129_133936139.jpg`,
    orientation: 'vertical',
    description: 'First time lying down on a road at Parque Nacional Los Cardones',
    date: new Date(Date.UTC(2018, 0, 29)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'high-cachi-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180130_133915708.jpg`,
    orientation: 'horizontal',
    description: 'I climbed really high that day!',
    date: new Date(Date.UTC(2018, 0, 30)),
    location: Locations.Argentina.Cachi
  },
  {
    fileName: 'museum-cachi-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180131_110328680.jpg`,
    orientation: 'horizontal',
    description: 'Museo Arqueológico de Cachi',
    date: new Date(Date.UTC(2018, 0, 31)),
    location: Locations.Argentina.Cachi
  },
  {
    fileName: 'mamama-hostel-cachi-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180201_113650575.jpg`,
    orientation: 'horizontal',
    description: 'With La Mamama Hostel staff',
    date: new Date(Date.UTC(2018, 1, 1)),
    location: Locations.Argentina.Cachi
  },
  {
    fileName: 'chachi-salta-ride-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180201_185226733.jpg`,
    orientation: 'horizontal',
    description: 'A father and son gave me a ride from Cachi to Salta City. I was very grateful to them',
    date: new Date(Date.UTC(2018, 1, 1)),
    location: Locations.Argentina.Salta
  },
  {
    fileName: 'cuesta-lipan-jujuy-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180205_165325199.jpg`,
    orientation: 'horizontal',
    description: 'Cuesta de Lipán, Jujuy',
    date: new Date(Date.UTC(2018, 1, 5)),
    location: Locations.Argentina.Jujuy
  },
  {
    fileName: 'salinas-grandes-jujuy-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180205_174455737.jpg`,
    orientation: 'horizontal',
    description: 'Salinas Grandes, Jujuy',
    date: new Date(Date.UTC(2018, 1, 5)),
    location: Locations.Argentina.Jujuy
  },
  {
    fileName: 'garganta-tilcara-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180206_140642418.jpg`,
    orientation: 'vertical',
    description: 'A moustache guy at Garganta del Diablo',
    date: new Date(Date.UTC(2018, 1, 6)),
    location: Locations.Argentina.Tilcara
  },
  {
    fileName: 'hornocal-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180209_161807858.jpg`,
    orientation: 'horizontal',
    description: 'El Hornocal, the hill of 14 colors',
    date: new Date(Date.UTC(2018, 1, 9)),
    location: Locations.Argentina.Jujuy
  },
  {
    fileName: 'hornocal-pov-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180209_164011106.jpg`,
    orientation: 'vertical',
    description: 'El Hornocal POV',
    date: new Date(Date.UTC(2018, 1, 9)),
    location: Locations.Argentina.Jujuy
  },
  {
    fileName: 'hornocal-2-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180209_172842453.jpg`,
    orientation: 'horizontal',
    description: 'El Hornocal, the hill of 14 colors',
    date: new Date(Date.UTC(2018, 1, 9)),
    location: Locations.Argentina.Jujuy
  },
  {
    fileName: 'bajada-diablos-uquia-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180210_161841278.jpg`,
    orientation: 'vertical',
    description: '"Was that really necessary?" At Bajada de los diablos de Uquía',
    date: new Date(Date.UTC(2018, 1, 10)),
    location: Locations.Argentina.Uquia
  },
  {
    fileName: 'fortunato-humahuaca-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG-20180217-WA0109.jpg`,
    orientation: 'vertical',
    description: 'With Fortunato Ramos, at La Peña de Fortunato Restaurant',
    date: new Date(Date.UTC(2018, 1, 17)),
    location: Locations.Argentina.Humahuaca
  },
  {
    fileName: 'pepe-goat-iruya-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180213_150436987.jpg`,
    orientation: 'horizontal',
    description: 'With Pepe, the Goat',
    date: new Date(Date.UTC(2018, 1, 13)),
    location: Locations.Argentina.Iruya
  },
  {
    fileName: 'san-isidro-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180215_120314307.jpg`,
    orientation: 'horizontal',
    description: 'You can only reach this beautiful little town after an interesting walk from Iruya',
    date: new Date(Date.UTC(2018, 1, 15)),
    location: Locations.Argentina.SanIsidro
  },
  {
    fileName: 'road-laguna-colorada-noa-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180218_172110890.jpg`,
    orientation: 'horizontal',
    description: 'The road to Laguna Colorada',
    date: new Date(Date.UTC(2018, 1, 18)),
    location: Locations.Argentina.Yavi
  },
  {
    fileName: 'train-cemetery-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_110954702.jpg`,
    orientation: 'horizontal',
    description: '"I don\'t want to be buried in a Train Cemetery"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'dakar-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_135448691.jpg`,
    orientation: 'horizontal',
    description: 'Dakar monument at Salar de Uyuni',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'small-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_141856049.jpg`,
    orientation: 'horizontal',
    description: '"Please, don\'t, I\'m begging you!"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'brothers-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_155302937.jpg`,
    orientation: 'vertical',
    description: 'Flags of brothers',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'uyuni-attack-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_164247444.jpg`,
    orientation: 'horizontal',
    description: '"Run! Run for your life!"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'pringles-tube-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_164501145.jpg`,
    orientation: 'vertical',
    description: '"Ok, I\'m out of here!"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'uyuni-double-attack-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_171717679.jpg`,
    orientation: 'horizontal',
    description: '"Don\'t do it! Please!"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'invisible-man-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180222_173318028.jpg`,
    orientation: 'vertical',
    description: '"I\'m Franco, nice to meet you"',
    date: new Date(Date.UTC(2018, 1, 22)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'geyser-road-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180223_124904816.jpg`,
    orientation: 'vertical',
    description: '"Look! An Homo sapiens, over there!"',
    date: new Date(Date.UTC(2018, 1, 23)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'lagunas-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180223_151438459.jpg`,
    orientation: 'horizontal',
    description: 'In some of the Lagunas de Colores',
    date: new Date(Date.UTC(2018, 1, 23)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'arbol-piedra-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180223_164320999.jpg`,
    orientation: 'horizontal',
    description: 'Stone Tree',
    date: new Date(Date.UTC(2018, 1, 23)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'laguna-colorada-uyuni-bolivia-2018.jpg',
    src: `${baseUrl}/travels/south-america/argentina-bolivia-2018/IMG_20180223_171900935.jpg`,
    orientation: 'horizontal',
    description: 'Laguna Colorada',
    date: new Date(Date.UTC(2018, 1, 23)),
    location: Locations.Bolivia.Uyuni
  },
  {
    fileName: 'monument-colonia-uruguay-2016.jpg',
    src: `${baseUrl}/travels/south-america/colonia-uruguay-2016/467335756_10235683784261945_763181451835413526_n.jpg`,
    orientation: 'vertical',
    description: 'Living monument',
    date: new Date(Date.UTC(2016, 5, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Uruguay.Colonia
  },
  {
    fileName: 'joke-colonia-uruguay-2016.jpg',
    src: `${baseUrl}/travels/south-america/colonia-uruguay-2016/467456071_10235683781981888_3887547748916434177_n.jpg`,
    orientation: 'horizontal',
    description: '"Where do ghosts like to vacation? The boo-hamas"',
    date: new Date(Date.UTC(2016, 5, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Uruguay.Colonia
  },
  {
    fileName: 'planet-earth-colonia-uruguay-2016.jpg',
    src: `${baseUrl}/travels/south-america/colonia-uruguay-2016/467512323_10235683779501826_5911607443931757076_n.jpg`,
    orientation: 'horizontal',
    description: '"Welcome to planet Earth"',
    date: new Date(Date.UTC(2016, 5, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Uruguay.Colonia
  },
  {
    fileName: 'evidence-colonia-uruguay-2016.jpg',
    src: `${baseUrl}/travels/south-america/colonia-uruguay-2016/467546593_10235683781861885_8828018186315683108_n.jpg`,
    orientation: 'horizontal',
    description: 'This is the proof we were there',
    date: new Date(Date.UTC(2016, 5, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Uruguay.Colonia
  },

  //----------- university -----------//
  {
    fileName: 'isi-graduation-party-2013.jpg',
    src: `${baseUrl}/university/graduation/465418140_10234853287341304_6529494060457380117_n.jpg`,
    orientation: 'horizontal',
    description: 'Information Systems Engineering Graduation Party',
    date: new Date(Date.UTC(2013, 10, 23)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'isi-graduation-party-cake-2013.jpg',
    src: `${baseUrl}/university/graduation/IMG_20250121_164650847_HDR.jpg`,
    orientation: 'horizontal',
    description: 'Information Systems Engineering Graduation Party',
    date: new Date(Date.UTC(2013, 10, 23)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'la-chamuyera-with-lu.jpg',
    src: `${baseUrl}/university/les-ebries/462512472_2601032123416885_4864519707539126700_n.jpg`,
    orientation: 'vertical',
    description: 'With Luciana at La Chamuyera, the best place Rosario ever had',
    date: new Date(Date.UTC(2016, 8, 4)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'mj-nadina-edu-wedding.jpg',
    src: `${baseUrl}/university/mj/52970996_10219104045415801_8707207222318333952_n.jpg`,
    orientation: 'horizontal',
    description: 'MJ team at the Nadina & Edu\'s wedding party',
    date: new Date(Date.UTC(2019, 2, 2)),
    location: Locations.Argentina.Funes
  },
  {
    fileName: 'weird-chord-tarca.jpg',
    src: `${baseUrl}/university/mj/461202018_8332929030094253_9127325568694487224_n.jpg`,
    orientation: 'horizontal',
    description: '"What? F#? What programming language is that?"',
    date: new Date(Date.UTC(2012, 8, 14)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'uni-young-dudes-2010.jpg',
    src: `${baseUrl}/university/mj/462463940_10234830549971891_7236880875476532329_n.jpg`,
    orientation: 'horizontal',
    description: 'University gang back in the old days',
    date: new Date(Date.UTC(2010, 6, 2)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'mj-gonzalez-hotel-2012.jpg',
    src: `${baseUrl}/university/mj/462846690_9664836953545869_6228514025460918034_n.jpg`,
    orientation: 'horizontal',
    description: 'MJ team at Gonzalez Hotel. First releases',
    date: new Date(Date.UTC(2012, 9, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'club-mitre-jamming-2012.jpg',
    src: `${baseUrl}/university/mj/464421466_10235326126470823_5755406377111369614_n.jpg`,
    orientation: 'horizontal',
    description: 'Guitar solo at Club Mitre',
    date: new Date(Date.UTC(2012, 2, 15)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'the-dude-array-2012.jpg',
    src: `${baseUrl}/university/mj/465009758_10235424928620815_6700930370204558740_n.jpg`,
    orientation: 'vertical',
    description: 'I\'m in fourth position',
    date: new Date(Date.UTC(2012, 11, 8)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'the-last-song-tarca.jpg',
    src: `${baseUrl}/university/mj/465018428_10235429485374731_3158619530533459461_n.jpg`,
    orientation: 'horizontal',
    description: '"Come oooon, just one more... pleeease?"',
    date: new Date(Date.UTC(2012, 11, 23)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'lucas-the-first-engineer.jpg',
    src: `${baseUrl}/university/mj/465111422_10233934402919909_4093185883105647874_n.jpg`,
    orientation: 'horizontal',
    description: 'Lucas is engineer',
    date: new Date(Date.UTC(2013, 4, 8)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'fola-me-titina-2012.jpg',
    src: `${baseUrl}/university/mj/465143727_10236247523155261_2253760286521756783_n.jpg`,
    orientation: 'horizontal',
    description: 'Fola Me, Titina',
    date: new Date(Date.UTC(2012, 8, 26)),
    location: Locations.Argentina.Pergamino
  },
  {
    fileName: 'the-mj-show.jpg',
    src: `${baseUrl}/university/mj/465366682_10236323420532648_6233594996273021016_n.jpg`,
    orientation: 'horizontal',
    description: '"Man, this show is so boring..."',
    date: new Date(Date.UTC(2013, 3, 25)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'mj-gacela-playing-2013.jpg',
    src: `${baseUrl}/university/mj/465453095_10236342145080750_1639035126841455257_n.jpg`,
    orientation: 'horizontal',
    description: 'The Tebi\'s Gacela experience',
    date: new Date(Date.UTC(2013, 5, 21)),
    location: Locations.Argentina.Funes
  },
  {
    fileName: 'random-time-travel-moment.jpg',
    src: `${baseUrl}/university/mj/465580513_10236413778271535_8255287327576885763_n.jpg`,
    orientation: 'horizontal',
    description: '"I\'m telling you. This guy built a random website and he looks just like you"',
    date: new Date(Date.UTC(2013, 11, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'double-g-major-tebi.jpg',
    src: `${baseUrl}/university/mj/465976816_10236413784951702_626979564142561947_n.jpg`,
    orientation: 'horizontal',
    description: '"Give me everything you\'ve got, come on!"',
    date: new Date(Date.UTC(2013, 11, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'the-pope-costume.jpg',
    src: `${baseUrl}/university/the-pope-costume-party/472351803_10163026032106019_5193330733424039290_n.jpg`,
    orientation: 'horizontal',
    description: '"Man, making a Pope costume is no piece of cake"',
    date: new Date(Date.UTC(2013, 7, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'the-pope-cardinals.jpg',
    src: `${baseUrl}/university/the-pope-costume-party/472523892_10163026017126019_1125686851546216467_n.jpg`,
    orientation: 'horizontal',
    description: 'The Pope and the cardinals in Paraná',
    date: new Date(Date.UTC(2013, 7, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Parana
  },
  {
    fileName: 'the-pope-and-kick-ass.jpg',
    src: `${baseUrl}/university/the-pope-costume-party/472768035_10163026002656019_8185504035995224297_n.jpg`,
    orientation: 'horizontal',
    description: 'Bringing peace and justice with Kick Ass',
    date: new Date(Date.UTC(2013, 7, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Parana
  },
  {
    fileName: 'the-pope-greeting.jpg',
    src: `${baseUrl}/university/the-pope-costume-party/473024706_10163026003336019_337373674209624426_n.jpg`,
    orientation: 'vertical',
    description: 'White smoke, a new Pope has been selected',
    date: new Date(Date.UTC(2013, 7, 1)),
    dateComposedBy: DateParts.MonthYear,
    location: Locations.Argentina.Rosario
  },

  //----------- work -----------//
  {
    fileName: 'qgood-after-office.jpg',
    src: `${baseUrl}/work/qgood/IMG-20171229-WA0005.jpg`,
    orientation: 'horizontal',
    description: 'With the QGood team hanging out',
    date: new Date(Date.UTC(2017, 11, 29)),
    location: Locations.Argentina.Rosario
  },
  {
    fileName: 'dev-simulator.jpg',
    src: `${baseUrl}/work/sancris/IMG_20190913_163242170_BURST001.jpg`,
    orientation: 'horizontal',
    description: 'This guy works harder than me!',
    date: new Date(Date.UTC(2019, 8, 13)),
    location: Locations.Argentina.Rosario
  }
];
