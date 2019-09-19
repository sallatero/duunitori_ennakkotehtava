## Duunitorin uusi työpaikkailmoitussivu

Ajatuksen pohjana olivat seuraavat havainnot, jotka tein nykyistä sivua selatessani
- Isolla sivulla näkyy oikeassa reunassa yrityksen tietoja. Kun ruutua pienentää, se hyppää samaan kolumniin itse ilmoituksen kanssa, mutta joutuu liian kauas. Siihen väliin tulee jo sellaista asiaa joka ei liity tähän työpaikkaan.
- Työnantajasta on tietoa kahdessa paikassa, (isolla ruudulla) sivun oikeassa ylälaidassa, sekä alempana oikeassa laidassa. 
- iPhone 6:lla selattaessa landscapessa, kuvituskuva ei levene samassa suhteessa kuin teksti.

Omassa versiossa
- Rakensin ilmoituksen yhdelle palstalle ja ruudun koon mukaan ladoin asioita joko vierekkäin tai allekkain.
- Toin työpaikan päätiedot (titteli, yritys, logo ja nappulat) enemmän esiin erillisessä laatikossa kuvituskuvan päällä
  - Nappulat ohjaavat nyt kaikki samaan, eli työpaikan hakuun
- Sivulla on mukana sekä ilmoitusteksti, että yrityksen tiedot, molemmat omina laatikoinaan, jotka voi avata ja sulkea. Näin käyttäjä näkee alussa jo heti mitä osioita sivulla on
- Työpaikkakuvaus-osassa käytin selviä väliotsikoita, joista lukijan on helppo bongata eri aiheet (mitä odotetaan, mitä tarjotaan, mistä saa lisätietoja, miten haetaan jne). Hakuajat toin isommin ja selvemmin esiin osion lopussa, jossa tarjolla myös hakunappula.
- Työnantajakuvauksessa ryhmittelin tiedot perustiedoiksi osion yläosaan, sekä selvemmät koknaisuudet (taloustiedot ja sosiaalisen median linkit) omiksi laatikoikseen. Osion lopussa on samanlaine nappula kuin työpaikkakuvauksessa, mutta tämä vie tarkempiin tietoihin työnantajasta.
- Näytä lisää -toiminnallisuus työpaikkakuvauksessa ja työnantajakuvauksessa on tuotu esiin selvemmin, kun hover-toiminto kattaa koko palkin, jossa Näytä lisää lukee

Ohjelma on rakennettu JavaScriptillä ja Reactilla ja tyylit on määritelty CSS-tiedostossa. CSS-tyyleissä on defaultina käytetty isoa ruutua (yli 700px) ja pienemmille ruuduille on määritelty eroavaisuudet media queryinä.

Sivusto pyörii osoitteessa:
https://safe-inlet-89138.herokuapp.com/



## 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
