//          Ciklai / Loops
/*

Ciklas - besikartojantys veiksmai. Ciklai vykdomi tol, kol atitinka nurodytą sąlygą.
    Gali vykti numatytą kiekį kartų.
    Gali vykti nenumatytą kiekį kartų.
    Gali vykti begalybę kartų - BLOGAI (reikia vengti). Vyksta kai nurodoma neteisinga sąlyga.

Ciklų tipai:
    1. for(skaitliukoSukūrimas; sąlyga; skaitliukoKitimas){....veiksmai...}
        for of - masyvams
        for in - objektams
    2. while(sąlyga){....veiksmai...}
        do{} while () - pradžiai padaro veiksmą, po to tikrina sąlygą
    masyvų iteraciniai metodai:
        forEach()
        filter()
        map()
        reduce()
        some()
        every()
        flatMap()
        reduceRight()
        find()
        findLast()
        findIndex()
        findLastIndex()
        ...

    Operatoriai:
        kintamasis++ - didinti kintmąjį per vienetą PO ciklo iteracijos
        kintamasis-- - mažinti kintmąjį per vienetą PO ciklo iteracijos
        ++kintamasis - didinti kintmąjį per vienetą PRIEŠ ciklo iteracijos
        --kintamasis - mažinti kintmąjį per vienetą PRIEŠ ciklo iteracijos
*/

//      for
/*
    for(skaitliukoSukūrimas; sąlyga; skaitliukoKitimas){veiksmai....}
    Naudojamas, tuomet kai galima apskaičiuoti reikalingą iteracijų kiekį.

*/
console.groupCollapsed('for intro');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');
console.log('labas rytas');

for(let i=1; i <= 10; i++){
    console.log('labas rytas' + i);
}

console.groupEnd();

//      while
/*
    while(sąlyga){veiksmai...}
    Naudojamas tuomet, kai negalime (labai nepatogu/sunku) apskaičiuoti reikalingo kiekio iteracijų.
*/

console.groupCollapsed('While intro');
let iteracija = 1
while(iteracija <= 10){
    console.log('while ciklas' + iteracija);
    iteracija++;
}
console.groupEnd();

//      do while
/*
    do{ veiksmai...}while(sąlyga)
    Naudojamas, tuomet kai reikia, kad veiksmas būtų atliktas BENT vieną kartą, nesvarbu
    sąlyga tiesa ar melas.
*/

console.groupCollapsed('Do While');
do {
    console.log('do while daro');
} while(false);
console.groupEnd();

//      for of (masyvams)
/*
    for(left value of array/list){ veiksmai.... }
    Naudojamas norint iteruoti per iteruojamą duomenį (dažniausiai masyvas bet gali būti 
    kažkoks sąrašas).
*/

console.groupCollapsed('for of');
    let masyvas = [1,5,15,5,7,8,9,12,16];
    let suma = 0
    let didziausias = Number.NEGATIVE_INFINITY;
    for(let element of masyvas){
        console.log(element);
        suma += element;
        if(didziausias < element){
            didziausias = element;
        }
    }
    console.log('suma:', suma);
    console.log('vidurkis:', suma/masyvas.length);
    console.log('didziausias:', didziausias);
console.groupEnd();

//      for in
/*
    for(let key in object){ veiksmai....}
    Naudojamas norint iteruoti per objektą

    Naudojant for in IR Object.keys() objekto raktiniai žodžiai yra patalpinami kintamuosiuose
    ir tam, kad juos panaudotumėm, turim į objektą kreiptis nebe per tašką, bet per
    laužtinius skliaustelius: objektas.raktas - blogai; objektas[raktas].
*/

console.groupCollapsed('for in');
    let objektas = { pirmas:'haha', antras:'hihi', trecias:'einam valgyt'}
    for(let raktas in objektas){
        console.log(raktas);
        console.log(objektas.raktas); // bad
        console.log(objektas[raktas]); // good
    }
console.groupEnd();

//  for of vs for
let masyvasPalyginimui = [1,2,3,4,5,6,7,8,9];
// reikia visus skaičius išspausdinti į ekraną
console.groupCollapsed('for of vs for');
console.log('for of');
for(let element of masyvasPalyginimui){
    console.log(element);
}
console.log('-------------');
console.log('for');
for(let i = 0; i < masyvasPalyginimui.length; i++){
    console.log(masyvasPalyginimui[i]);
}

console.groupEnd();

// Užduotys
console.groupCollapsed('Praktika');
for(let i = 1000; i > 1; i-=55){
    console.log(i);
}
console.groupEnd();

console.groupCollapsed('Praktika2')
let augintiniai = ['šuo', 'katė', 'žiurkė', 'gyvatė', 'voras', 'lama', 'triušis', 'žubelė',
'žirafa', 'šeškas', 'dramblys'];
// Ciklas nuo pirmo iki paskutinio masyvo elemento
for(let i = 0; i < augintiniai.length; i++){
    console.log(augintiniai[i]);
}

// ciklas nuo paskutinio iki pirmo masyvo elemento
for(let i = augintiniai.length-1; i >= 0; i--){
    console.log(augintiniai[i]);
}

// ciklas kuris spausdintu nuo 3 iki 8 elemento kas antrą
// masyvo index nr; masyvo index nr; kas 2
for(let i = 2; i <= 7; i+=2){
    console.log(augintiniai[i]);
}
console.groupEnd();

// Namų darbai

// Easy

console.group('Name');

let vardas = 'Justinas';
let kartai = 10;

for(let i=0; i < kartai; i++){
    console.log(vardas);
}

for(let i=1; i < kartai; i++){
    console.log(i + '.' + vardas);
}

for(let i=kartai; i >= 1; i--){
    console.log(i);
}

console.groupEnd();

// Harder

let zaidimai = ['Call of Duty', 'Diablo 3', 'God of War', 'Mortal Combat', 'Tekken', 'World of Warcraft',
'FIFA23', 'Marves Spider-man', 'The last of us', 'Gran Turismo'];

for(let i = 0; i < zaidimai.length; i++){
    console.log(zaidimai[i]);
}
console.log('--------------');

for(let i = 0; i < zaidimai.length; i+=3){
    console.log(zaidimai[i]);
}

console.log('------------');

for(let i = zaidimai.length-1; i >= 0; i-=2){
    console.log(zaidimai[i]);
}

console.log('------------');

/*
let skaiciai = [45,2,12,85,123,695,987,1,14,67,32,88];
for (let i=0; i < skaiciai.length; i++){
    if(skaiciai[i] > 54){
        console.log(skaiciai[i]);
    }
}
*/

/*
let skaiciai = [45,2,12,85,123,695,987,1,14,67,32,88];
for (let i=0; i < skaiciai.length; i++){
    if(skaiciai[i] % 2 === 0 ){
        console.log(skaiciai[i]);
    }
}
*/

let skaiciai = [45,2,12,85,123,695,987,1,14,67,32,88];
for (let i=0; i < skaiciai.length; i++){
    if(skaiciai[i] & 1 === 1 ){
        console.log(skaiciai[i]);
    }
}

