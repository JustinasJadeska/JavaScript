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

// Events

// 1) Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")

function vardas() {
    window.alert('Justinas');
}

// 2) Perrašyti pirmą pratimą su addEventListener (kaip visad ir reikės daryti).

function koregavimas(){
    window.alert('Justinas');
}

let button = document.querySelector('#vienas > button');
console.dir(button);
button.addEventListener('click', koregavimas);

// 3) Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

function koregavimasAntras(){
    let sekcija = document.querySelector('#antras');
    sekcija.children[3].innerHTML = 'Mano vardas Justinas. Man 29 metai. Miegas man labai patikti.';
}

let button2 = document.querySelector('#antras > button');
console.dir(button2);
button2.addEventListener('click', koregavimasAntras);

// 4) Sukurk programą, kurioje bus h1 tekstas su
// skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).
let number = 1;
function koregavimasTrys() {
    let sekcija2 = document.querySelector('#trys');
    number++;
    sekcija2.children[0].innerHTML = number;
}

let button3 = document.querySelector('#trys > button');
button3.addEventListener('click', koregavimasTrys);

//  5++) Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.
function koregavimasKeturi(){
    window.alert('Unable to copy');
}

let par = document.querySelector('#keturi > p');
par.addEventListener('copy', koregavimasKeturi);

// 6+) Sukurk programą, kur paspaudus ant mygtuko - 
// sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.
let betkoks = [];
function koregavimasPenki(){
    let betkoks = Math.floor(Math.random() * 100) + 1;
    let sekcija3 = document.querySelector('#penki');
    sekcija3.children[0].innerHTML = betkoks;
}

let button4 = document.querySelector('#penki > button');
button4.addEventListener('click', koregavimasPenki);

// 7+) Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". 
// Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - 
// išmeta alert su "nepilnametis - užauk".

function koregavimasSix() {
    let sekcija4 = document.querySelector('#six');
    sekcija4.children[0].innerHTML = 'Alus';
}

let button5 = document.querySelector('.bandymas');
button5.addEventListener('click', koregavimasSix);

function koregavimasSeven() {
    let sekcija4 = document.querySelector('#six');
    sekcija4.children[0].innerHTML = 'Nepilnametis - užauk';
}

let button6 = document.querySelector('.bandymas2');
button6.addEventListener('click', koregavimasSeven);

// 9) Parašykite programą, kurioje būtų tekstas "Do NOT click". 
// Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Pants are an illusion and so is death".

function koregavimasNine(){
    let sekcija5 = document.querySelector('#seven');
    sekcija5.children[0].innerHTML = 'Pants are an illusion and so is death';
}

let button7 = document.querySelector('#seven > p');
button7.addEventListener('click', koregavimasNine);

// 10+) Sukurkite h1, jam duokite 100vh aukštį ir 100vh line-height. 
// Jame įrašykite "Nejudinkite pelytės". Jeigu vartotojas pajudins pelytę - 
// pakeiskite tekstą į "Why are you running?".

function koregavimasTen(){
    let sekcija6 = document.querySelector('#eight');
    sekcija6.children[0].innerHTML = "Why are you running?";
}

let button8 = document.querySelector('#eight > h1');
button8.addEventListener('mousemove', koregavimasTen);

function koregavimasEleven(){
    let sekcija6 = document.querySelector('#eight');
    sekcija6.children[0].innerHTML = "Nejudink pelytės";
}

let button9 = document.querySelector('#eight > h1');
button9.addEventListener('mouseout', koregavimasEleven);

// 8++) Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3,
// kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). 
// Ekrane - trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo.
// Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

let skaicius = Math.floor(Math.random() * 3) + 1;
console.log(skaicius);

function koregavimasEight(sk1){
    let spejimas = parseInt(sk1.target.innerHTML);

    if (spejimas === skaicius) {
        window.alert('Yay');
    } else {
        window.alert('Nay');
    }
}

let button10 = document.querySelector('.one');
button10.addEventListener('click', koregavimasEight);

let button11 = document.querySelector('.two');
button11.addEventListener('click', koregavimasEight);

let button12 = document.querySelector('.three');
button12.addEventListener('click', koregavimasEight);