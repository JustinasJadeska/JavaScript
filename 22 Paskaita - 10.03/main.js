// 1. Parašykite funkciją, kuri iš jai duotojo masyvo suformuotų ir grąžintų string'ą.
let masyvas = [1,2,3,4,5,6,7];
function uzd1(vienas){
    let du = vienas.toString();
    console.log(du);
}
uzd1(masyvas);

// 2.  Parašykite funkciją, kuriai padavus kažkokį number kintamąjį (ilgą 10+ skaitmenų),
// jinai jį išvestų į konsolę su "-" simboliu tarp dviejų lyginių skaičių.
//  (pvz: paduodi 645286344, grąžina 6-452-8-634-4)
// let num = 654112236694788;
// function uzd2(antras){
//     let trys = antras.toString();   // array.join('-');
//     let three = '';
//     for (let i = 0; i < trys.length; i++){
//         if (parseInt(trys[i]) % 2 === 0){
//             three += trys[i];
//             if (parseInt(trys[i + 1]) % 2 !== 0){
//                 three += '-';
//             }
//         } else {
//             three += trys[i];
//         }
//     }
//     console.log(three);
// }
// uzd2(num);

// 3. Parašykite funkciją, kuri atliktų tą patį, ką daro 
// .reverse() metodas. (žinoma nenaudokite reverse ir toReversed)
let masyvas2 = [3,75,145,789,64,67,14,6,5,9];
function uzd3(mass){
    let mass2 = []; // I need this to store reversed elements;
    for (let i = mass.length-1; i >= 0; i--){  // start from last(mass.length-1) to first(i >= 0);
        mass2.push(mass[i]); // arejus.push(reiksme) - prideda reikšmę į masyvo galą ir grąžina naują masyvo ilgį.
    }
    console.log(mass2);
}
uzd3(masyvas2);

// 4. Parašykite funkciją, kuri iš jai paduoto masyvo išrinktų nurodytas reikšmes
// ir išvestų į konsolę likusias. (paduodama masyvas=[1,4,5,6,4,8,4,5],
// funkcija: func(masyvas, [4,6,8]), išveda: 1,5,5).

function uzd4(numbers, sk1){
    let mass3 = [];
    for( let i=0; i < numbers.length; i++){
        if (!sk1.includes(numbers[i])){ // '!' check elements that do not exist in sk1;
            mass3.push(numbers[i]); // push - add elements to mass3 array;
        }
    }
    console.log(mass3);
}
uzd4(masyvas2, [3, 145, 67, 6]);

// 5. Parašykite funkciją, kuri iš jai paduoto masyvo randa ir išspausdina didžiausią ir mažiausią skaičius.

function uzd5(numbers2){
    let mass4 = numbers2[0];
    let mass5 = numbers2[0];
    for (let i=0; i < numbers2.length; i++){
        if(numbers2[i] < mass4){
            mass4 = numbers2[i];
        }
        if (numbers2[i] > mass5){
            mass5 = numbers2[i];
        } 
    }
    console.log(mass4);
    console.log(mass5);
}
uzd5(masyvas2);

// 6. Parašykite funkciją, kuri iš 2 jai paduotų masyvų išveda
// į konsolę pasikartojančias reikšmes. (jeigu yra dvi vienodos
// reikšmės abejuose masyvuose, ta reikšmė turi būti išvesta į konsolę)

let masyvas3 = [1,5,4,6,8,9,4,6,4,2];
let masyvas4 = [1,10,18,6,23,45,45,7,200,2];

function uzd6(array1, array2){
    let newArray = [];
    for (let i=0; i < array1.length; i++){
       if (array2.includes(array1[i])){
            newArray.push(array1[i]);
       }
    }
    console.log(newArray);
}
uzd6(masyvas3, masyvas4);

// 7.  Parašykite funkciją, kuriai padavus du masyvus
// (pirmas: informacijos, antras: indeksų), suformuotų naują masyvą
// iš pirmojo, paimdamas tik tas reikšmes, kurios nurodytos indeksuose.
// (pirmas=["a","b","c","d","e","f"], antras=[0,3,4], naujas=["a","d","e"])

function uzd7(mas3, mas4){
    let naujasMasyvas = [];
    for (let i = 0; i < mas3.length; i++){

    }
}
uzd7(masyvas3, masyvas4);

// 8. Parašykite funkciją, kuri iš jai paduoto masyvo atrinktų ir į
// konsolę išspausdintų tik unikalius/nesikartojančius duomenis.

// 10.  Parašykite funkciją, kuri iš jai paduoto skaičių masyvo atrinktų
// n'tąjį didžiausią skaičių. (funkcija([12,54,1,65,78,91,45],3) grąžintų 65).

function uzd10(array3, sk2){
    return array3.indexOf(sk2);
}
console.log(uzd10(masyvas4, 1));

