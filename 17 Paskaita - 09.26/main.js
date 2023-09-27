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
    Tiek objektas, tiek masyvas yra konteineriniai kintamieji skirti talpinti 
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


/* Nestinti masyvai ir objektai
Kadangi masyvai ir objektai yra skirti talpinti kintamuosius, jie taip pat gali
talpinti vieni kitus.
1) masyvas masyve - [[]] Retai naudojamas.
2) objektas ojekte - { raktZod:{} }
3) masyvas objekte - { rektZod:[] }
4) objektas masyve - [{}]
*/
console.groupCollapsed("Nestinti masyvai ir objektai");
    console.group('Masyvas masyve');
        let matrica = [
            ['A', 'B', 'C'],
            ['D', 'E', 'F'],
            ['G', 'H', 'I']
        ];
        console.log(matrica);
        console.log(matrica[0]);
        console.log(matrica[1][2]);

    console.groupEnd();
    console.group('Objektas objekte');
        let objektasObjekte = {
            vardas: "Justinas",
            amzius: 29,
            plikas: false,
            gyvenamojiVieta: {
                miestas: 'Kaunas',
                gatve: 'Karaliaus Mindaugo',
                namoNr: 27,
                butoNr: 32,
                planeta: 'Žemė',
                zemynas: 'Europa',
                salis: 'Lietuva'
            }
        };
        console.log(objektasObjekte);
        console.log(objektasObjekte.vardas);
        console.log(objektasObjekte.gyvenamojiVieta.gatve);

    console.groupEnd();
    console.group('Masyvas objekte');
        let masyvasObjekte = {
            vardas: 'Justinas',
            amzius: 29,
            dead: false,
            pomegiai: ['skaityti', 'filmai', 'zaidimai', 'sportas', 'keliauti', 'dainuoti',
            'kalnai', 'dviratis', 'miegas']
        }
        console.log(masyvasObjekte);
        console.log(masyvasObjekte.pomegiai);
        console.log(masyvasObjekte.pomegiai[7]);
        console.log(masyvasObjekte.pomegiai[masyvasObjekte.pomegiai.length-1]);
    console.groupEnd();
    console.group('Objektas masyve');
        let objektasMasyve = [
            {
                vardas: 'Justinas',
                pavarde: 'Jadeska',
                amzius: '29',
                alkanas: true
            }, {
                vardas: 'Edmundas',
                pavarde: 'Jadeska',
                amzius: '57',
                alkanas: false
            }, {
                vardas: 'Darius',
                pavarde: 'Jadeska',
                amzius: '34',
                alkanas: true
            }
        ]
        console.log(objektasMasyve);
        console.log(objektasMasyve[2]);
        console.log(objektasMasyve[2].vardas);

    console.groupEnd();
console.groupEnd();

/*      Sąlygos / Conditions

    Loginiai operatoriai
        ! - NOT - apverčia reikšmę
        && - AND - ar bent vienoje pusėje yra 'false', tokiu atveju grąžina 'false' 
        || - OR - ar bent vienoje pusėje yra 'true;, tokiu atveju grąžiną 'true'

    Truthy         /    Falsy
        true       |   false
        none zero  |   0
        "string"   |   ""
        object     |   undefined
        array      |   null
        function   |   NaN 

    Sąlyos    
        if else_if else


    if(if'o sąlyga){
        vykdomas jeigu if'o sąlyga yra tiesa
    } else if (else if'o sąlyga) {
        vykdoma jeigu ankščiau buvusios sąlygos buvo melai, o šitą sąlyga - tiesa
    } else {
        vykdomas TIK TUOMET jeigu visos prieš tai buvusios SĄLYGOS sąlygos buvo melai
    }
    
*/
/*
let amzius = 17;
console.log(amzius);
if(amzius >= 18){
    console.log('pilnametis');
} else if(amzius < 18 && amzius >= 13){
    console.log('paauglys');
} else if(amzius < 13 && amzius >= 7){
    console.log('mokyklinukas');
} else if(amzius < 7 && amzius >= 2){
    console.log('iki mokyklinis');
} else if(amzius < 2 && amzius >= 0){
    console.log('baby');
} else {
    console.log('Neteisingas amžiaus duomuo');
}
*/

let amzius = 18;
console.log(amzius);
if(amzius >= 18){
  console.log('pilnametis');
} else if(amzius < 0){
  console.log('Neteisingas amžiaus duomuo');
} else if(amzius < 2){
  console.log('baby');
} else if(amzius < 7){
  console.log('iki mokyklinis');
} else if(amzius < 13){
  console.log('mokyklinukas');
} else if(amzius < 18){
  console.log('paauglys');
} else {
  console.log('Neteisingas amžiaus duomuo');
}


//          Nest'intos sąlygos
let amziusDar = 85;
console.log(amziusDar);
if(amziusDar >= 65){
    console.log('Pensininkai');
    if(amziusDar >= 90){
        console.log('Prosenelis');
    } else {
        console.log('Ne prosenelis');
    }
} else if( amziusDar < 18){
    console.log('Nepilnamečiai');
    if(amziusDar > 13){
        console.log('paauglys');
    } else if (amziusDar >=7){
        console.log('mokyklinukas');
    } else {
        console.log('iki mokyklinio amžiaus');
    }
} else if( amziusDar < 65){
    console.log('Darbo amžius');
} else {
    console.log('Klaidingi duomenys');
}

console.log('--------------------------------------------');

// UŽDUOTYS
console.groupCollapsed('Užduotis');
let asmuo = {
    vardas: 'David',
    pavarde: 'Goggins',
    amzius: 48,
    tautybe: 'Amerikietis',
    lytis: 'vyras',
    karys: true
}

let hobiai = ['Bėgimas', 'Savęs kankinimas', 'Mentorystė',
 'Anksti keltis', 'UFC', 'Amerikietiškas futbolas']

console.log(asmuo);
console.log(asmuo.pavarde)
console.log(hobiai);
console.log(hobiai[3]);
console.groupEnd();

console.groupCollapsed('MasyvasMasyve');
    let luckyNumbers = [
        [7, 14, 21, 28],
        [35, 42, 49, 56],
        [63, 70, 77, 84],
        [91, 98, 105, 112]
    ];
    console.log(luckyNumbers);
    console.log(luckyNumbers[2]);
    console.log(luckyNumbers[3][2]);
console.groupEnd();

console.groupCollapsed('Autoriai');
    let autoriai = [
        {
            vardas: 'George R.R. Martin',
            amzius: 75,
            knyga: 'Ledo ir ugnies giesmė',
            hobis: 'žudyti veikėjus',
            senas: true
        }, {
            vardas: 'Haruki Murakami',
            amzius: 74,
            knyga: 'Norvegų giria',
            hobis: 'suklaidinti skaitytojus',
            senas: true
        }, {
            vardas: 'J. K. Rowling',
            amzius: 58,
            knyga: 'Haris Poteris',
            hobis: 'Magija',
            sena: false
        }, {
            vardas: 'Stephen King',
            amzius: 76,
            knyga: 'Tas',
            hobis: 'žiaurumas',
            senas: true
        }
    ]
    console.log(autoriai);
    console.log(autoriai[3]);
    console.log(autoriai[3].hobis);
console.groupEnd();

console.groupCollapsed('Asmenybė');
    let asmenybe = {
        vardas: 'Justinas',
        pavarde: 'Jadeska',
        amzius: 29,
        gyvas: true,
        zaidimai: ['Call of Duty', 'Diablo', 'Mortal Combat', 'God of War']
    }
    console.log(asmenybe);
    console.log(asmenybe.zaidimai);
    console.log(asmenybe.zaidimai[3]);
console.groupEnd();

console.groupCollapsed('Filmai');
    let filmai = {
        pavadinimas: 'The Lord of the Rings',
        metai: 2001,
        geras: true,
        IMDB: 8.8,
        kurejai: {
            rezisierius: 'Peter Jackson',
            scenaristas: 'J. R. R. Tolkien',
            prodiuseris: 'Tim Sanders',
            aktoriai: 14
        }
    };
    console.log(filmai);
    console.log(filmai.pavadinimas);
    console.log(filmai.kurejai.aktoriai);
console.groupEnd();

// Sąlygos (simple)
console.groupCollapsed('Simple');
let legalAge = 20;
let clientAge = 25;
    console.log(legalAge);
    if(clientAge >= legalAge){
        console.log('Pasiekęs');
    } else {
        console.log('Nepasiekęs');
    }

let vardas = 'Justinas';
    console.log(vardas);
    if(vardas.length > 6){
        console.log('Ilgas vardas');
    } else {
        console.log();
    }

let age = 29;
    console.log(age);
    if(age > 100 && age < 0){
        console.log('Invalid Age');
    } else if(age >= 1 && age <=18){
        console.log('Child');
    } else if(age >= 19 && age <=99){
        console.log('Adult');
    } else {
        console.log();
    }

let VW = ['VW', 'Audi', 'Bentley', 'Bugatti', 'Lamborghini', 'Porsche'];
let BMW = ['BMW', 'Mini', 'Rolls-Royce']; 
let car = 'Lamborghini';
    console.log(car);
    if(car == VW[0] || car == VW[1] || car == VW[2] || car == VW[3] || car == VW[4] || car == VW[5]){
        console.log('Priklauso VW');
    } else if (car == BMW[0] || car == BMW[1] || car == BMW[2]){
        console.log('Priklauso BMW');
    } else {
        console.log('Nepriklauso niekam');
    }

let turiTeise = true;
let turiAuto = true;
let blaivas = true;

    if(turiTeise === true){
        console.log('Vairuotojas turi teises');
    } else {
        console.log('Vairuotoja neturi teisių')
    }


if(turiTeise === true){
    console.log('Vairuotojas turi teises');
    if(turiAuto === true){
        console.log('Vairuotojas turi automobilį');
    } else {
        console.log('Vairuotojas neturi automobolio');
    }
} else {
    console.log('Vairuotoja neturi teisių')
}

if(turiTeise === true){
    console.log('Vairuotojas turi teises');
    if(turiAuto === true && blaivas === true){
        console.log('Vairuotojas turi automobilį ir yra blaivas');
    } else if(turiAuto === true && blaivas === false){
        console.log('Vairuotojas turi auto bet vairuoti negali');
    } else {
        console.log('Vairuotojas automobilio neturi');
    }
} else {
    console.log('Vairuotojas neturi teisių')
}
console.groupEnd();

// 2 Harder assignment

/* let name = prompt('Koks tavo vardas');
window.alert('Labas' + name + '!');
let city = prompt('Kokiame mieste gyveni?');
if(city === 'Alytus'){
    window.alert('Alytus labai miškingas');
} else if (city === 'Vilnius' || city === 'Vilniuje'){
    window.alert('Didžiausias Europinis miestas');
} else if(city === 'Klaipėda'){
    window.alert('Gyvenimas prie jūros');
} else {
    window.alert('Labai gražus miestas');
} */

let menuo = 'Sausis';
if(menuo === 'Gruodis' || menuo === 'Sausis' || menuo === 'Vasaris'){
    console.log('Žiema')
} else if(menuo === 'Kovas' || menuo ===  'Balandis' || menuo ===  'Gegužė'){
    console.log('Pavasaris')
} else if(menuo === 'Birželis' || menuo ===  'Liepa' || menuo ===  'Rugpjūtis'){
    console.log('Vasara')
} else if(menuo === 'Rugsėjis' || menuo ===  'Spalis' || menuo ===  'Lapkritis'){
    console.log('Ruduo')
}