// 1) Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach,
// atspausdink kiekvieną elementą (automobilio reikšmę).

const cars = ['BMW', 'VW', 'Audi'];
cars.forEach((element) => console.log(element));

// 2) Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

cars.forEach((element, index) => console.log(index, element));

// 3) Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok
//  (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array
// (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const friends = ['LukAS', 'ANDrius', 'dariuS', 'gieDRius', 'MartYnaAs', 'gInTaS', 'roBERTas'];
const map1 = friends.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
console.log(map1);

//  4) Sukurk Array su savo draugų amžiais (nuo 1 iki 99).
// Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs jūsų amžiui.

const friendsAge = [27, 32, 33, 31, 25, 43, 40];
const results = friendsAge.filter((element) => element >= 29);
console.log(results);

// 5) Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas", "Klaipėda", ...). 
// Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

const cities = ['Vilnius', 'Kaunas', 'Klaipeda', 'Alytus', 'Pasvalys', 'Druskininkai', 'Kedainiai'];
const found = cities.find((element) => element.charAt(0) === 'K');
console.log(found);

// 6) Penktame pratime esantį sprendimą pakoreguot ir patikrink
// su some ar bent vienas miestas prasideda iš mažosios.

const lower = cities.some((element) => element[0] === element.charAt(0).toLowerCase());
console.log(lower);

// 7) Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas
// prasideda iš mažosios, bet ar visi iš didžiosios.

const upper = (element) => element[0] === element.charAt(0).toUpperCase();
console.log(cities.every(upper));



// Destruktūrizavimas:

// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes,
// iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.

let [, ,a, ...b] = ['Labas', 'mano', 'vardas', 'Justinas', 'Jadeška']; // Two commas in the front for 'a' to have third element value;
console.log(a, b);

// 2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji
// būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto,
// 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.

let filmai = {
    pavadinimas: 'The Lord of the Rings',
    geras: true,
    IMDB: 8.8,
    kurejai: {
        rezisierius: 'Peter Jackson',
        scenaristas: 'J. R. R. Tolkien',
        prodiuseris: 'Tim Sanders',
        aktoriai: 14
    }
}
let {pavadinimas: vardas, metai = 'default', kurejai:{aktoriai}, kurejai:{rezisierius: vardas2}} = filmai;
console.log(vardas, metai, aktoriai, vardas2);

// 3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.

let [, , , ...rest] = cities;
console.log(...rest);

// 4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.

let [c, d] = [12345, 678910];
[c, d] = [d, c];
console.log(c, d);


// Filter

// 1) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale.
// (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius,
//  C - didžiausias galimas masyvo skaičius). (naudoti Math.random())
let numbers = [];  // store random numbers
function numeris(random, sk1, sk2){
    for (let i=0; i < random; i++){  
    let numeriai = sk1 + Math.floor(Math.random() * (sk2 - sk1 + 1)); // generate random numbers of random values
    numbers.push(numeriai);  // pushed into the 'numbers' array
    }
    let rest = numbers.filter((numbers) => numbers >= sk1 && numbers <= sk2);
    // filter the numbers that fall within the specified range
    console.log(rest);
}
numeris(10, 12, 30);

//  2) Sukurti funkciją, kuri iš jai paduoto string'o sukurtų string'ų masyvą
// atskirdama kiekvieną žodį. (tarpai ir skiriamieji ženklai neturi būti įtraukti).

let lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit';
let loremis = [];
function loremIpsum(ipsum){
    let loremis = ipsum.split(' ');
    console.log(loremis);
}
loremIpsum(lorem)

//  3) Naudojant 1'ios užduoties masyvą išfiltruoti lyginius skaičius.

let even = numbers.filter((element) => element % 2 === 0);
console.log(even);

// 4) Naudojant 1'ios užduoties masyvą išfiltruoti nelyginius skaičius.

let odd = numbers.filter((element) => element % 2 !== 0);
console.log(odd);

//  5) Naudojant 1'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

let inter = numbers.filter((element) => Number.isInteger(element));
console.log(inter);

//  6) Sukurti funkciją, kuri 1'ios užduoties masyvą išfiltruotų
// A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).
let naujas = [];
function masyvas(mass, sk4, sk5){
    naujas = mass.filter((numbers) => numbers >= sk4 && numbers <= sk5);
    console.log(naujas);
}
masyvas(numbers, 12, 20);

// 7) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.

words = lorem.split(' ').filter((element) => element.charAt(0) === element.charAt(0).toUpperCase());
console.log(words);

//  8) Naudojant 2'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.

words = lorem.split(' ').filter((element) => element.charAt(0) === element.charAt(0).toLowerCase());
console.log(words);

// 9) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide prasidedančius žodžius.

function labas(hello){
    let words = hello.split(' ');
    let wordas = words.filter((element) => element.charAt(0).toLowerCase() === 'a');
    console.log(wordas);
}
labas(lorem);

// 10) Sukurti funkciją, kuri iš 2'tos užduoties masyvo išfiltruotų nurodyta raide pasibaigiančius žodžius.

function viskas(bye){
    let words = bye.split(' ');
    let wordas = words.filter((element) => element.at(-1).toLowerCase() === 't');
    console.log(wordas);
}
viskas(lorem);

// 11) Naudojant reduce metodą suskaičiuoti 3'tos užduoties masyvo bendrą sumą.

let sum = even.reduce((acc, curr) => acc + curr);
console.log(sum);

// 12) Naudojant reduce metodą suskaičiuoti 4'tos užduoties masyvo bendrą sandaugą.

let suma = odd.reduce((acc, curr) => acc * curr);
console.log(suma);


// Daugiau uždavinių

// 1) Parašyti arrow funkciją, kuri iš jai duoto masyvo grąžina pirmąjį elementą,
// kuris prasideda didžiąja arba mažąja raide (true arba false / "d" arba "s" kaip jau nuspręsit)
// ir yra ilgenis už A, bet trumpesnis už B (A ir B - funkcijos parametras skaičius).
// (function name(masyvas, d/s, ilgNeg, trumpNeg))

let array = ['Strong', 'weak', 'Equal', 'odd', 'even', 'Safe','Music'];
let array1 = (arr, starts, ilgNeg, trumpNeg) => {
    return arr.filter((element) => {
        let starts = element.charAt(0).toLowerCase() === element.charAt(0);
        let ilgis = element.length > ilgNeg && element.length < trumpNeg;
        return starts && ilgis;
    });
}
let filtered = array1(array, true, 3, 10);
console.log(filtered);

// 2) Parašykite arrow funkciją, kuri iš jai paduoto mišraus masyvo grąžina masyvą
// tik su number kintamaisiais, kurie yra didesni negu A, bet mažesni negu B ir lyginiai
// arba nelyginiai (lyginis - true, nelyginis - false) (arba galima priskirti raides,
// tarkim jei nori lyginių, parašai "l" kaip parametrą, jei nelyginių, parašai "n" kaip parametrą ir pns.)

let mixed = [1, 'a', 2, 'b', 3, 'c', 4, 'b', 5, 'c'];
let array2 = (arr1, fillNumbers, ilg, trump) => {
        num = arr1.filter((element) => typeof element === 'number');
        return num.filter((skaicius) => skaicius > ilg && skaicius < trump);
    }
let naujasis = array2(mixed, true, 1, 5); 
console.log(naujasis);

// 3) Sukurti arrow funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale.
// (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius,
// C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

let newer = [];
let array3 = (betKoks, nuo, iki) => {
    for (let i=0; i < betKoks; i++){
        let sk7 = nuo + Math.floor(Math.random() * (iki - nuo + 1));
        newer.push(sk7);
    }
    let viskas = newer.filter((elements) => elements >= nuo && elements <= iki);
    console.log(viskas);
}
array3(5, 40, 50);

// 4) Sukurti arrow funkciją, kuri iš jai paduoto
// string'o sukurtų string'ų masyvą atskirdama kiekvieną žodį.

let string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit';
let vienas = [];
let string2 = (strin) => {vienas = strin.split(' '); console.log(vienas) }
string2(string);

// 5) Naudojant 3'ios užduoties masyvą išfiltruoti lyginius skaičius.

let even2 = newer.filter((element) => element % 2 === 0);
console.log(even2);

//  6) Naudojant 3'ios užduoties masyvą išfiltruoti nelyginius skaičius.

let odd2 = newer.filter((element) => element % 2 !== 0);
console.log(odd2);

// 7) Naudojant 3'ios užduoties masyvą išfiltruoti sveikuosius skaičius.

let inter2 = newer.filter((element) => Number.isInteger(element));
console.log(inter2);

//  8) Sukurti arrow funkciją, kuri 3'ios užduoties masyvą išfiltruotų
// A ir B intervale (nuo skaičiaus A iki skaičiaus B imtinai).

let hell = [];
let number2 = (num2, sk10, sk11) => {
    hell = num2.filter((element) => element >= sk10 && element <= sk11);
    console.log(hell);
}
number2(newer, 40, 45);

// 9) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda didžiąja raide.

let zodziai = string.split(' ').filter((element) => element.charAt(0) === element.charAt(0).toUpperCase());
console.log(zodziai);

// 10) Naudojant 4'tos užduoties masyvą išfiltruoti žodžius, kurie prasideda mažąja raide.

let zodziai2 = string.split(' ').filter((element) => element.charAt(0) === element.charAt(0).toLowerCase());
console.log(zodziai2);

