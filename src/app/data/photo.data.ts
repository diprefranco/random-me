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
    src: `${baseUrl}/travels/europe/italy-spain-2023/italy-with-the-guys.jpg`,
    orientation: 'horizontal',
    description: 'With Santiago and Julian in Italy',
    date: new Date(Date.UTC(2023, 6, 17)),
    location: Locations.Italy.Country,
    photographer: Photographers.JulianGuardia.Name,
    photographerUrl: Photographers.JulianGuardia.Url
  }
];
