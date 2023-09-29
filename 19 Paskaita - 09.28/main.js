/*      FUNKCIJOS   /   FUNCTION

    Kodas, kuris nevyksta pats iš savęs, kurį reikia iškviesti (reikia į jį kreiptis).
    Funkcijos gali priimti duomenis (priimti argumentus ir naudoti juos kaip parametrus).
    Funkcijos gali grąžinti duomenis.

    Syntax:
        function pavadinimas(){veiksmai....}
        function pavadinimas(params){veiksmai....}
    
    Call:
        pavadinimas();
        pavadinimas(args);

    params - funkcijos viduje naudojamas kitamasis, kurio reikšmė priklauso nuo jai paduodamos informacijos
    į ją kreipimosi metu.
    args - reikšmė, kurią paduodame funkcijai į ją kreipdamiesi.
*/
console.groupCollapsed('Funkcijos');
function pasisveikinimas(vardas, nuotaika){
    console.log('Good morning ' + vardas);
    console.log('Why are you so ' + nuotaika + '?');
}

pasisveikinimas('Justinas', 'lazy');
pasisveikinimas('Petras', 'busy');
pasisveikinimas('Juozas', 'crazy');
pasisveikinimas('Algis', 'smart');

function adding(par1, par2){
    let suma = par1 + par2;
    return suma;
}
console.log(adding(5, 4));

console.groupEnd();

//      Kreipimasis į DOM | Event
/*
    DOM - Document Object Model
    Kreipimasis į dokumente esančius elementus (tag'us) - document.querySelector('selektorius');

    Įvykio klausimasis dokumente esančio elemento - element.
    addEventListener('event', callback/function)

*/

function puslapioKoregavimas(){
    let sekcija = document.querySelector('#pirmas');
    console.dir(sekcija);
    console.dir(sekcija.children[0]);
    sekcija.children[0].innerHTML = 'Labas';
    sekcija.children[0].style.textAlign = 'center';
    sekcija.children[0].style.fontSize = '50px';

    let img = document.createElement('img');
    img.style.height = '200px';
    img.style.width = 'auto';
    img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png');
    sekcija.appendChild(img);

    //sekcija.innerHTML +=`
    //<img src='https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    //height='200px' width='auto'>
    //`
}

// Event
let button = document.querySelector('#pirmas > button');
console.dir(button);
button.addEventListener('click', puslapioKoregavimas);

//      Metodai
/*
    Metodas yra funkcija, kuri priklauso kažkokiam elementui/kintamajam/objektui.
    Vieni metodai modifikuoja pradinius duomenis, kiti metodai nemodifikuoja pradinių duomenų.
*/

// String metodai
/*
    concat - sujungia du arba daugiau 'string' ė vieną.
        string.concat(string1, string2, string3...)
        NEmodifikuoja string, o grąžina jų sumą.
    endsWith - patikrina ar string baigiasi su nurodyta galūne.
        'katinas'.endsWith('as') - true
        NEmodifikuoja string, o grąžina true arba false.
    slice - iškerpa simbolius nuo nurodytos vietos(imtinai) iki nurodytos vietos(neimtinai)
        'katinas'.slice(2,5) - 'tin'
        NEmodifikuoja string, o grąžina iškirptus simbolius, kaip string.
    toLowerCase - paverčia string į mažąsias raides
        'KatinAs'.toLowerCase - 'katinas'
        NEmodifikuoja string, o grąžiną naują string, kuriame būtų pradinis string  mažosiomis raidėmis.
    toUpperCase - paverčia string į didžiąsias raides
        'KatinAs'.toUpperCase - 'KATINAS
        NEmodifikuoja string, o grąžiną naują string, kuriame būtų pradinis string  didžiosiomis raidėmis.
    trim - panaikina tarpus string pradžioje ir gale
        '       daug tarpų       '.trim() - 'daug tarpų'
        NEmodifikuoja string, o grąžiną naują string, kuriame nebūtų tarpų pradžioje ir gale.
*/

//      Array metodai
/*
    push() - prideda naują reikšmę į masyvo galą.
        [1,2,3].push('Labas') - 4 (naujas ilgis)
        MODIFIKUOJA  pradinį masyvą. Šiuo atveju iš pradinio masyvo lieka [1,2,3, 'Labas'].
    pop() - išima reikšmę iš masyvo galo.
        [1,2,3].pop() - 3 (paskutinis masyvo elementas)
        MODIFIKUOJA pradinį masyvą. Šiuo atveju iš pradinio masyvo lieka [1,2,].
    unshift() - prideda naują reikšmę į masyvo pradžią.
        [1,2,3].unshift('Labas') - 4 (naujas ilgis)
        MODIFIKUOJA pradinį masyvą. Šiuo atveju iš pradinio masyvo lieka ['Labas', 1,2,3]
    shift() - išima reikšmę iš masyvo pradžios.
        [1,2,3].shift() - 1 (pirmasis masyvo elementas)
        MODIFIKUOJA pradinį masyvą. Šiuo atveju iš pradinio masyvo liek [2,3].
    concat() - sujungia nurodytus masyvus į vieną.
        [1,2].concat(['Labas', 'hihi'], [54, false, 'reikšmė']) - [1,2, 'haha', 'hihi', 54, false, 'reikšmė']
        NEmodifikuoja pradinio masyvo, o grąžina pateiktų masyvų junginį.
    slice - grąžina elementus nuo (imtinai), iki (neimtinai) pozicijos.
        [1,2,3,4,5,6].slice(2,5) - [3,4,5]
        NEmodifikuoja pradinio masyvo, o grąžina iškirptą gabaliuką kaip naują  masyvą.
    splice - iš pateikto masyvo, išima nuo nurodytos pozicijos, nurodytą kiekį elementų ir į tą vietą
    patalpina naujus išvardintus elementus.
        [1,2,3,4,5,6].splice(2,2,'Labas', false) - [1,2, 'Labas', false, 5,6]
        MODIFIKUOJA pradinį masyvą, gražina masyvą su išimtais elementais.
    reverse - apverčia masyvą, pirma reikšmė tampa paskutinė, paskutinė pirmąją....
        [1,2,3,4].reverse() - [4,3,2,1]
        MODIFIKUOJA pradinį masyvą, grąžina modifikuotą masyvą.
    sort() - išrikiuoja abecelės tvarka/didėjimo tvarka
        Skaičiams: sort((a,b) => a-b)
        Raidėms: sort((a,b) => a.localeCompare(b))
        MODIFIKUOJA pradinį masyvą, grąžina modifikuotą masyvą.
*/

/*  Math methods

    floor - suapvalina iki mažiausio sveikojo skaičiaus
        Math.floor(5.5) - 5 
    ceil - suapvalina iki didžiausio sveikojo skaičiaus
        Math.ceil(5.5) - 6
    random - gražina skaičių nuo 0 (neimtinai) iki 1 (neimtinai)
        Math.random() - (0; 1) nuo 0 iki 1
*/      

// UŽDUOTYS

// 1. Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins
/*
function sveiki(vardas){
    window.alert(vardas);
}

sveiki('Justinas');
*/

// 2. Sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

function number(random){
    return Math.floor(Math.random()*random + 1)
}
console.log(number(5));


// 3. Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę 
//- ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petraitis" => 15).

function parametrai(vardas, pavarde){
    let sum = vardas.length + pavarde.length;
    return console.log(vardas, pavarde, sum);
}
parametrai('Justinas', 'Jadeska');

// 4. Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę
// (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti
// Array su visomis raidėmis (["A", "B", "C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę.

let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

console.log(abc);

function givenNumber(number){
    let randomRaide = abc [number];
    return randomRaide;
}
console.log(givenNumber(6));
console.log(givenNumber(16));
console.log(givenNumber(23));

// 5. Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.

function elementai(numeriai){
    for (let i = 0; i < numeriai.length; i++){
        console.log(numeriai[i]);
    }
}
let masyvas = [1,2,3,4,5,6,7,8,9,10];
elementai(masyvas);

// 6. Sukurti funkciją, kuri į konsolę išvestų visus skaičius nuo pirmo
// duotojo parametro (imtinai) iki antrojo (imtinai).
// (paduodu 5,16 => išveda 5,6,7,8,9,10,11,12,13,14,15,16)

function bigNumbers(start, end) {
    for (let i=start; i <= end; i++){
        console.log(i);
    }
}

bigNumbers(5, 16);

// 7. Sukurti funkcijas, kurios atliktų paprastus matematinius veiksmus
// su duotaisiais parametrais (du parametrai) ir išvestų juos į konsolę.
// (4 funkcijos) (optional 7 funkcijos)

function add(sk1, sk2){
    let sum = sk1 + sk2;
    console.log(sum);
}
add(546, 463);

function sub(sk3, sk4){
    let sum2 = sk3 - sk4;
    console.log(sum2);
}
sub(4562, 4560);

function mul(sk5, sk6){
    let sum3 = sk5 * sk6;
    console.log(sum3);
}
mul(7,9);

function div(sk7, sk8){
    let sum4 = sk7 / sk8;
    console.log(sum4);
}
div(90, 10);

// 8. Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). 
// Operator gali būti "+", "-", "/", "*" (optional dar "**", "**(1/x)", "%"). 
// n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė
// operacija (pvz.: 5, 1, "-" => 4; 6, 3, "+" => 9...).

function mathOperation(n1, n2, operator){
    if (operator === "*"){
        return n1 * n2
    }
}
console.log(mathOperation(10, 10, "*"));
