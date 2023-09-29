// 1) Sukurti funkciją, kuri į konsolę išvestų visus
// jai duotojo masyvo elementus nuo paskutinio iki pirmojo.
console.groupCollapsed('1 užduotis');
let animals = ['dog', 'cat', 'lion', 'emu', 'tiger', 'pig', 'cow', 'chicken'];
function gyvunai(visi) {
    for (let i = visi.length-1; i >=0; i--)
    console.log(visi[i]);
}
gyvunai(animals);

console.groupEnd();

// 2) Sukurti funkciją, kuri surikiuotų gautąją informaciją
// (parametrą(masyvą(tik su string kintamaisiais))) abeceliškai ir ją išvestų į konsolę.
console.groupCollapsed('2 užduotis');
let names = ['John', 'Jack', 'Rose', 'Ben', 'Stephen', 'Kevin', 'Pam', 'Angela', 'Erin'];
function parametras(vardai) {
    let names = vardai.sort((a,b) => a.localeCompare(b));
    console.log(names);
}
parametras(names);

console.groupEnd();

// 3) Sukurti funkciją, kuri surikiuotų gautąją informaciją (parametrą(masyvą(tik su number kintamaisiais)))
// nuo didžiausio iki mažiausio ir ją išvestų į konsolę.
console.groupCollapsed('3 užduotis');
let numbers = [1,2,3,4,5,6,7,8,9,10];
function skaiciai(numeris) {
    let numbers = numeris.sort((a,b) => b - a);
    console.log(numbers);
}
skaiciai(numbers);

console.groupEnd();

// 4+) Sukurti funkciją, kuri į konsolę išvestų skaičius kas pirmąjį duotajį
//  parametrą nuo antrojo duotojo parametro (imtinai) iki trečiojo duotojo
//   parametro (imtinai). (paduodu 2,5,16 => grąžina 5,7,9,11,13,15)
console.groupCollapsed('4 užduotis');
function numbers2(sk1, sk2, sk3){
    for (let i = sk1; i <= sk2; i += sk3) {
        console.log(i);
    }
}
numbers2(5, 16, 2);

console.groupEnd();

// 5+) Sukurti funkciją, kuri grąžintų 10 ilgio masyvą random skaičių (nuo 0 iki 100).
console.groupCollapsed('5 užduotis');
function number3(ilgis){
    let randoms = [];

    for (let i = 0; i < ilgis; i++){
        let random = Math.floor(Math.random() * 101);
        randoms.push(random);
    }
    return randoms;
    
}
console.log(number3(10));

//  5.1+) Sukurti funkciją, kuri priimtų argumentą,
// kuris nurodytų kokio ilgio masyvą su random skaičiais (nuo 0 iki 100) funkcija turi grąžinti.

function number3(ilgis){
    let randoms = [];

    for (let i = 0; i < ilgis; i++){
        let random = Math.floor(Math.random() * 101);
        randoms.push(random);
    }
    return randoms;
    
}
console.log(number3(15));

// 5.2++) Sukurti funkciją, kuri priimtų 3 argumentus, kurie nurodytų:
// 1-kokio ilgio masyvą funkcija turi grąžinti su random skaičiais
// 2-nuo kokio skaičiaus 3-iki kokio skaičiaus.

function number4(sk6, sk7, sk8){
    let skirtingi = [];
    for (let i = 0; i < sk6; i++) {
        let skirtingas = Math.floor(Math.random() * (sk7 - sk8 + 1)) + sk7;
        skirtingi.push(skirtingas);
    }
    return skirtingi;
}
console.log(number4(5, 40, 60));

console.groupEnd();
