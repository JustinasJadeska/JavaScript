const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex spalvų paletė susideda iš '#' ir skaičių nuo 0 iki 15;
// A - 10; B - 11; C - 12; D - 13; E - 14; F - 15;
// Pvz.: #8F1D2E = #815113214
// JavaScript kodą pradedam nuo masyvo susikūrimo, kuriame yra skaičiai ir raidės norint sukurti hex 
// spalvų paletę.

const btn = document.querySelector('#btn'); // susikuriam kintamąjį pavadinimu 'btn' ir jam priskiriam HTML esantį
// elementą su id = 'btn'
const color = document.querySelector('.color'); // susikuriam kintamąjį pavadinimu 'color' ir jam priskiriam
// HTML esantį elementą su klase 'color. Ekrane atvaizduojamas spalvos kodas keisis šiame elemente.

btn.addEventListener('click', () => { // sukuriame kintamajam 'btn' event, kuriame paspaudus 'click' vykdysis
    // paskirta funkcija
    let hexColor = '#'; // susikuriam kintamąjį 'hexColor', kuriam priskiriam stringo reikšmę '#', nes be šio
    // ženklo hex spalvų paletė nesigaus. JI juk prasideda nuo '#'.
    for(let i = 0; i < 6; i++){ // Funkcijos viduje leidžiame ciklą, kuris suksis nuo 0 iki 6, kad gautumėm 6 reikšmes.
        hexColor += hex[getRandomNumber()]; // kintamajam 'hexColor' sudedama ir priskiriama reikšmė iš 'hex' masyvo
        // kuriame atliekama funkcija apskaičiuojant random spalvų reikšmes. Išrenkamos 6 reikšmės.
    }
    color.textContent = hexColor; // 'color' kintamjam teksto turinys bus lygus 'hexcolor' gautas spalvos kodas
    document.body.style.backgroundColor = hexColor; // browser esantis body elementui duodamas backgroundColor
    // stilius, kuris prilyginamas gautai reikšmei. Tai reiškia, kad body spalva bus tokia, kokia gausis
    // random reikšmė, pvz.: '#96FA6C'.
});

function getRandomNumber(){ // Susikuriame dar vieną funkciją, kuri skirta gauti random reikšmes mūsų kodui.
    return Math.floor(Math.random() * hex.length);
    // grąžinam reikšmę, reikšmė apskaičiuojama dauginant math.random (kuris duoda random reikšmę nuo
    // 0 iki 1), ir hex masyvo ilgiu (hex.length), kad gautumėm reikšmes nuo pirmojo masyvo indekso iki paskutinio.
    // Math.floor suapvaliną viską iki mažiausio sveikojo skaičiaus.
}

// Šiame JavaScript kode naudojome:
// 1. Kintamuosius su 'string' ir skaičiais;
// 2. Masyvą;
// 3. DOM;
// 4. Event;
// 5. Ciklą;
// 6. Funkciją;
// 7. Operatorius;