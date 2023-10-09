// 1) Sukurti 4-7 formas HTML'e, kuriose galima būtų įvesti du skaičius ir būtų išvedama
// tų skaičių: sudėtis, atimtis, daugyba, dalyba, laipsnio kėlimas, šaknies traukimas, liekanos radimas.

document
    .querySelector('#bandymas > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk1 = e.target.elements.nr1.valueAsNumber;
        let sk2 = e.target.elements.nr2.valueAsNumber;
        let result = sk1 + sk2;
        document.querySelector('#pvzKartuResult').innerHTML = `
        ${sk1} + ${sk2} = ${result}
        `;
    });

    document
    .querySelector('#bandymas2 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk3 = e.target.elements.sk3.valueAsNumber;
        let sk4 = e.target.elements.sk4.valueAsNumber;
        let result = sk3 - sk4;
        document.querySelector('#result2').innerHTML = `
        ${sk3} - ${sk4} = ${result}
        `;
    });

    document
    .querySelector('#bandymas3 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk5 = e.target.elements.sk5.valueAsNumber;
        let sk6 = e.target.elements.sk6.valueAsNumber;
        let result = sk5 * sk6;
        document.querySelector('#result3').innerHTML = `
        ${sk5} * ${sk6} = ${result}
        `;
    });

    document
    .querySelector('#bandymas4 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk7 = e.target.elements.sk7.valueAsNumber;
        let sk8 = e.target.elements.sk8.valueAsNumber;
        let result = sk7 / sk8;
        document.querySelector('#result4').innerHTML = `
        ${sk7} / ${sk8} = ${result}
        `;
    });

    document
    .querySelector('#bandymas5 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk9 = e.target.elements.sk9.valueAsNumber;
        let sk10 = e.target.elements.sk10.valueAsNumber;
        let result = sk9 ** sk10;
        document.querySelector('#result5').innerHTML = `
        ${sk9} ** ${sk10} = ${result}
        `;
    });

    document
    .querySelector('#bandymas6 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk11 = e.target.elements.sk11.valueAsNumber;
        let sk12 = e.target.elements.sk12.valueAsNumber;
        let result = sk11 ** (1/sk12);
        document.querySelector('#result6').innerHTML = `
        ${sk11} ** (1/${sk12}) = ${result}
        `;
    });


    document
    .querySelector('#bandymas7 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk13 = e.target.elements.sk13.valueAsNumber;
        let sk14 = e.target.elements.sk14.valueAsNumber;
        let result = sk13 % sk14;
        document.querySelector('#result7').innerHTML = `
        ${sk13} % ${sk14} = ${result}
        `;
    });

// 2) Sukurkite kino teatro kainos apskaičiavimo platformą.
// Joje turi būti vienas input laukelis, kur žmogus įrašo savo
// amžių, o JS apskaičiuoja kainą ir išveda ją h1 elemente.
// Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida,
// 1/3 nuolaida vyresniems nei 60.

document
    .querySelector('#bandymas8 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let standartinis = 6;
        let jaunas = 3;
        let senas = 2;
        let sk15 = e.target.elements.sk15.valueAsNumber;
        let result;
        if(sk15 <= 16){
            result = jaunas;
        } else if (sk15 >= 60){
            result = senas;
        } else {
            result = standartinis;
        }
        document.querySelector('#result8').innerHTML = `
         Mokėti: ${result}
        `;
    })

// 3) Kai kuriose šalyse reikia eiti į kariuomenę, jei tau tarp 18 ir 30 metų
// ir jei neturi kriminalinio įrašo. Sukurti programą, kuri su input + checkBox
// pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente).
// Hint: pasirinkite su querySelector tik pažymėtą checkBox input
// (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

document
    .querySelector('#bandymas9 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault(); // page won't reload
        const teistas = document.querySelector('#teistas').checked;
        const neteistas = document.querySelector('#neteistas').checked;
        let sk16 = e.target.elements.sk16.valueAsNumber;
        let result;
        if (!teistas && sk16 >= 18 && sk16 <=30){
            result = 'reiks į kariuomenę';
        } else if (!neteistas || sk16 < 18 || sk16 > 30){
            result = 'nereiks į kariuomenę';
        } else {
            result = 'reikia įvesti amžių ir pažymėti vieną iš dviejų laukelių'
        }
        document.querySelector('#result9').innerHTML = `
        Jums: ${result}
        `;
    })

// 4) Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
// Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus
// 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus
// 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui
// įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų
// tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

document
    .querySelector('#bandymas10 > form')
    .addEventListener('submit', (e) => {
    e.preventDefault();
    let bonusas = 50;
    let bonusas2 = 100;
    let bonusas3 = 200;
    let sk17 = e.target.elements.sk17.valueAsNumber;
    let result;
    if (sk17 < 10){
        result = bonusas;
    } else if (sk17 < 20) {
        result = bonusas2;
    } else if (sk17 >= 20){
        result = bonusas3;
    } else {
        result = '0'
    }
    document.querySelector('#bonusas').setAttribute('value', `Jūsų bonusas: ${result} eurų`);
    })

// 5) Kiek dienų šiais metais? Parašykite programą, kur įvedus metus
// - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti
// ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi
// iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji.

document
    .querySelector('#bandymas12 > form')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        let sk19 = e.target.elements.sk19.valueAsNumber;
        let result;
        if ((sk19 % 4 === 0 && sk19 % 100 !== 0) || sk19 % 400 === 0){
            result = 'keliamieji'
        } else {
            result = 'nekeliamieji'
        }
        document.querySelector('#bonusas3').innerHTML = `
        Metai: ${result}
        `;
    })


// 6) Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi,
// o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.
document
    .querySelector('#bandymas11 > form')
    .addEventListener('submit', (e) => {
    e.preventDefault();
    let sk18 = e.target.elements.sk18.valueAsNumber;
    let result = (sk18 * 9/5) + 32;
    document.querySelector('#bonusas2').setAttribute('value', result);
    })