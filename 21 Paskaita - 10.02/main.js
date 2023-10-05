// 1 Pasirašyti / susikurti string kintamąjį.
let help = 'God is here';
// 2 Pasirašyti / susikurti number kintmąjį.
let number = 7;
// 3  Pasirašyti / susikurti masyvą tik su string kintamaisiais.
let furniture = ['table', 'couch', 'chair', 'bed', 'closet', 'coat rack', 'TV', 'arm chair', 'bookcase'];
// 4 Pasirašyti / susikurti masyvą tik su number kintamaisiais.
let numbers = [7, 18, 1, 6, 53, 22, 100, 67, 74, 99, 3, 29, 14];
// 5 Pasirašyti / susikurti masyvą ir su string ir su number kintamaisiais.
let mix = [1, 'one', 2, 'two', 3, 'three', 4, 'four', 5, 'five', 6, 'six', 7, 'seven', 8, 'eight'];
// 6 Išvesti pirmąją 1'os užduoties kintamojo raidę.
console.log(help.charAt(0));
// 7 Išvesti paskutinę 1'os užduoties kintamojo raidę.
console.log(help.at(-1));
// 8 Išvesti viduriniąją 1'os užduoties kintamojo raidę.
console.log(help.charAt(5));
// 9 Pasirašyti funkciją, kuri iš jai pateikto string kintamojo 
// išvestų jai nurodytą raidę (kelintąją). Pvz.:(uzd9("labas", 3) => "b").
function devinta(zodis, sk1){
    let raide = zodis.at(sk1);
    console.log(raide);
}
devinta('Raktas', 3);

// 10 Patikrinti ar 2'os užduoties kintamasis yra lyginis skaičius.

if (number % 2 === 0){
    console.log(number + ' is even number');
} else {
    console.log(number + ' is not even number');
}

// 11 Patikrinti ar 2'os užduoties kintamasis yra nelyginis skaičius.

if (number & 1 === 1) {
    console.log(number + ' is odd number');
} else {
    console.log(number + ' is not an odd number')
}

// 12  Patikrinti ar 2'os užduoties kintamasis yra sveikasis (integer) skaičius.

if (Number.isInteger(number)) {
    console.log(number + ' is integer');
} else {
    console.log(number + 'is not an integer');
}

// 13 Parašyti funkciją, kuri pateiktų informaciją ar jai paduotas 
// number kintamasis yra: lyginis/nelyginis skaičius. Pvz.: (uzd13(5) => nelyginis);

function skaicius(){
    if (number % 2 ===0 ){
        console.log('Even number');
    } else if (number & 1 === 1) {
        console.log('Odd number');
    }
}
skaicius(number);

// 14 Iš 3'čios užduoties masyvo išvesti tik ilgesnius nei 5 simbolių žodžius.
console.groupCollapsed('14 uzduotis');
for (let i = 0; i < furniture.length; i++){
    if (furniture[i].length > 5){
        console.log(furniture[i]);
    }
}
console.groupEnd();
// 15 Iš 3'čios užduoties masyvo išvesti tik trumpesnius nei 8 simbolių žodžius.
console.groupCollapsed('15 uzduotis');
for (let i = 0; i < furniture.length; i++){
    if (furniture[i].length < 8){
        console.log(furniture[i]);
    }
}
console.groupEnd();

// 16  Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio pirmąsias raides.
console.groupCollapsed('16 uzduotis')
function masyvas(){
    for ( let i = 0; i < furniture.length; i++){
        let zodziai = furniture[i].charAt(0);
        console.log(zodziai);
    }
}
masyvas(furniture);
console.groupEnd();
// 17 Parašyti funkciją, kuri iš 3'čios užduoties masyvo išvestų tik kiekvieno žodžio paskutiniąsias raides.
console.groupCollapsed('17 uzduotis')
for ( let i = 0; i < furniture.length; i++){
    let zodziai = furniture[i].at(-1);
    console.log(zodziai);
}
console.groupEnd();

// 18 Parašyti funkciją, kuri iš jai pateikto masyvo išvestų tik tuos žodžius, 
// kurie yra ilgesni negu A, bet trumpesni negu B. Pvz.:(funkcija uzd18(masyvas, a, b) 
// => uzd18(["Labas", "ate", "Katašunis"], 4, 8) => "Labas")

function labas(sk3, sk4, masyvas){
    for (let i = 0; i < masyvas.length; i++){
        if (masyvas[i].length > sk3 && masyvas[i].length < sk4){
            console.log(masyvas[i]);
        }
    }
}
labas(4,7, furniture);

// 19 Sudėti visus 4'tos užduoties masyvo kintamuosius ir sumą išvesti į konsolę.
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// 20 Sudėti kas antrą 4'tos užduoties masyvo kintamąjį ir sumą išvesti į konsolę.

let suma = 0;
for (let i = 0; i < numbers.length; i+=2){
    suma += numbers[i];
}
console.log(suma);

// 21 Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, jinai sudėtų
// kas kažkelintą (nurodyti funkcijai) kintamąjį ir išvestų sumą į konsolę.
function add(num, three){
    let sum2 = 0;
    for (let i = 0; i < num.length; i+=three){
        sum2 += num[i];
    }
    console.log(sum2);  // Turi consol'int už ciklo ribų.
}
add(numbers, 5);


// 22 Parašyti funkciją, kuriai padavus 4'tos užduoties masyvą, 
// jinai sudėtų kas kažkelintą (nurodyti funkcijai) kintamąjį tik 
// tada, jeigu tas kintamasis yra lyginis arba nelyginis (nurodyti funkcijai) 
// ir išvestų sumą į konsolę. Pvz.:(funk([1,2,3,4,5,6,7,8,9], 3, false) => 12)

function kintamasis(mas, sk8, lyg){
    let sum3 = 0
    for (let i=0; i < mas.length; i+=sk8){;
        if (mas[i] % 2 === lyg){  // (mas[i] % 2 === 1) nelyginė sąlyga
            sum3 += mas[i]  // Sudėtis turi būti sąlygoje.
        }
    }
    console.log(sum3);
}
kintamasis(numbers, 2, 1);



// 23  Iš 5'tos užduoties masyvo atrinkite skaičius į vieną masyvą, o string'us į kitą.
words = [];
skaitmuo = [];
for (let i = 0; i < mix.length; i++){
    if (typeof mix[i] === 'number'){
        skaitmuo.push(mix[i]);
    } else if (typeof mix[i] === 'string'){
        words.push(mix[i]);
    }
}
console.log(skaitmuo);
console.log(words);


