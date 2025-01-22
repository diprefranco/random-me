# Random Me
Random Me is a fun, interactive single-page web application that displays a random photo of me every time you visit or refresh the page. The app is simple, easy to use, and perfect for sharing spontaneous moments with friends and family. Enjoy exploring Random Me and discovering new memories with every refresh!

## Demo
https://diprefranco.github.io/random-me/

![Website Screenshot](https://github.com/diprefranco/random-me/blob/main/public/assets/images/website-screenshot.png)

## App Overview
The app was built using [Angular](https://angular.dev/).
The entire site is **responsive** and adjusts to different screen sizes.

## Build Your Own Random Me
You can build your own random moments using this project.

### Run The App
First of all, clone this repository.

Install the necessary dependencies with:

```bash
npm install
```

Start the application with:

```bash
npm start
```

### Photos
The app picks photos randomly from the [`photoData`](https://github.com/diprefranco/random-me/blob/main/src/app/data/photo.data.ts) array. This array has all the information about the photos you want to show.
The photo files can be placed in the public folder inside the app, or in any other public url. Just remember to set the `src` property correctly on every photo in the [`photoData`](https://github.com/diprefranco/random-me/blob/main/src/app/data/photo.data.ts) array.
The photo dates are specified in UTC format to ensure always displaying the same date regardless of the user's time zone.

### Personal Link Resources
Inside the `src/app/services` there are some services with personal link resources. Be sure to put your owns there.

## Version Information
This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Acknowledgments
The photos you see in this first version of the app were taken from [Unsplash](https://unsplash.com/).

I want to thank the photographers for the amazing photos you are seeing.
- An older man is walking through a garden. History of Casa Suzuki. Ph: [Kawê Rodrigues](https://unsplash.com/@kawerodriguess).
- Drown in memories. A man is floating in a pool of water. Ph: [Jalil Saeidi](https://unsplash.com/@jalil_sd).
- A woman in a yellow and brown sari walking in front of a building. Ph: [Polina Kuzovkova](https://unsplash.com/@p_kuzovkova).
- Rajasthani women in their regular Rajasthani attire. Ph: [Ritul Bhattacharjee](https://unsplash.com/@rd_ritul7).

## Author
GitHub: [Franco Dipre](https://github.com/diprefranco/)

## License
This project is licensed under the [MIT License](LICENSE).
