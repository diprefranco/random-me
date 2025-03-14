# Random Me
Random Me is a fun, interactive single-page web application that displays a random photo of me every time you visit or refresh the page. The app is simple, easy to use, and perfect for sharing spontaneous moments with friends and family. Enjoy discovering new memories with every refresh!

## Demo
https://diprefranco.github.io/random-me/

![Website Screenshot](https://github.com/diprefranco/random-me/blob/main/public/assets/images/website-screenshot.jpg)

## App Overview
The app was built using [Angular](https://angular.dev/).<br />
The entire site is **responsive** and adjusts to different screen sizes.

## Version Information
This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Build Your Own Random Me
You can build your own random moments using this project.

### Run The App
Clone this repository:

```bash
git clone https://github.com/diprefranco/random-me.git
```

Install the necessary dependencies:

```bash
npm install
```

Start the application:

```bash
npm start
```

### Photos
The app randomly selects photos from the [`photoData`](https://github.com/diprefranco/random-me/blob/main/src/app/data/photo.data.ts) array. This array contains all the information about the photos you want to display.<br />
- Place your photo files in the [`public`](https://github.com/diprefranco/random-me/tree/main/public) folder inside the app or host them on any public URL.
- Ensure the `src` property in the [`photoData`](https://github.com/diprefranco/random-me/blob/main/src/app/data/photo.data.ts) array points to the correct file location.
- Dates are specified in `UTC` format to guarantee consistent display regardless of the user's time zone.
- As a recommendation, to balance quality and performance for both desktop and mobile users, keep images below `500 KB` for fast loading. Use `JPG` format with a maximum width of `1200 px`.

### Sample Photos
While developing, you can use sample photos instead of your own to simplify the process.<br />
Simply change the `import` statement in the [`photo-data.service.ts`](https://github.com/diprefranco/random-me/blob/main/src/app/services/photo-data.service.ts) file to import the `photoData` array from [`sample-photo.data.ts`](https://github.com/diprefranco/random-me/blob/main/src/app/data/sample-photo.data.ts) file.

~~`import { photoData } from '../data/photo.data';`~~<br />
`import { photoData } from '../data/sample-photo.data';`

### Personal Link Resources
In the [`src/app/services`](https://github.com/diprefranco/random-me/tree/main/src/app/services) folder, you’ll find services for managing personal link resources. Replace these with your own links and details as needed.

## Acknowledgments
I want to thank the photographers for the amazing photos you are seeing.

### My Own Photos
In my Italian travel experience I was lucky enough to meet two professional photographers and I wasn't going to waste the opportunity.
- [Juan Giovacchini](https://www.instagram.com/juangiovacchini/): Running in the fields in Italy.
- [Julian Guardia](https://www.julianguardiaphoto.com/): Memories of a reflective look in Italy / A man thinking about the future / With Santiago and Julian in Italy.

### Sample Photos
The sample photos included in this project were taken from [Unsplash](https://unsplash.com/).
- [Kawê Rodrigues](https://unsplash.com/@kawerodriguess): An older man is walking through a garden. History of Casa Suzuki.
- [Jalil Saeidi](https://unsplash.com/@jalil_sd): Drown in memories. A man floating in a pool of water.
- [Polina Kuzovkova](https://unsplash.com/@p_kuzovkova): A woman in a yellow and brown sari walking in front of a building.
- [Ritul Bhattacharjee](https://unsplash.com/@rd_ritul7): Rajasthani women in their regular Rajasthani attire.

## Author
Franco Dipre<br />
😎 Website: [diprefranco.github.io](https://diprefranco.github.io/)<br />
💻 GitHub: [github.com/diprefranco](https://github.com/diprefranco/)

## License
This project is open-source under the [MIT License](LICENSE).<br />
Feel free to use and modify it for your own projects.
