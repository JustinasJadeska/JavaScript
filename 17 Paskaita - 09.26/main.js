/*      Kintamieji 
    string, number, boolean

    objektas/object - { raktinis Zodis:reiksme, kitasRAktinisZodis:reiksme }
        Grupuoti kintamuosius. PO paskutinio elemento nedėti.
        Reikšmės turi RAKTINIUS žodžius, pagal kuriuos galima suprasti reikšmės reikšmę.
        Eiliškumas nėra svarbus.
        Objektai dažniausiai naudojami kai reikšmes reikia kažkaip atskirti.
    masyvas/array - [ reiksme, reiksme, reiksme, reiksme ir t.t. ]
        Grupuoti kintamuosius
        Reikšmės neturi raktinio žodžio, o tik numeriuką, dėl to nėra aišku, kas ką reiškia.
        Eiliškumas LABAI svarbus.
        Masyvai dažniausiai naudojami kai norima vardinti vieno dalyko variacijas.
    Tiek objektas, tiek masyvas yra konteineriniai kintamieji skirti talpnti 
    kitus kintamuosius.
*/
console.groupCollapsed('Objektai ir masyvai');
let asmensObjektas = {
    vardas : 'Justinas',
    pavarde : 'Jadeska',
    amzius : 29,
    vedes : false
}

let asmensMasyvas = ['Petras', 'Petrauskas', 99, true]

console.log('objektas', asmensObjektas);
console.log('masyvas', asmensMasyvas);

console.log('objekto vardas:', asmensObjektas.vardas);
console.log('objekto amzius:', asmensObjektas.amzius);

let masinosMarke1 = 'BMW';
let masinosMarke2 = 'Audi';
let masinosMarke3 = 'Fiat';
let masinosMarke4 = 'Volvo';

let masinosMarkiuObjektas = {
    marke1 :'BMW',
    marke2 :'Audi',
    marke3 :'Fiat',
    marke4 :'Volvo'
}

let masinosMarkiuMasyvas = ['BMW', 'Audi', 'Fiat', 'Volvo']

console.log('objektas', masinosMarkiuObjektas);
console.log('masyvas', masinosMarkiuMasyvas);

console.log('1', masinosMarkiuMasyvas[1]); // Audi
console.log('3', masinosMarkiuMasyvas[3]); // Volvo
console.log('5', masinosMarkiuMasyvas[5]); // Undefined

console.groupEnd();