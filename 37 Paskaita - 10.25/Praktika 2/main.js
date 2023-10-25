let price = 29.88;
let discount = 10;
let total = price - (price * (discount / 100)); // 26.896
// let total = Math.floor(price - (price * (discount / 100))); // 26
// let total = Math.ceil(price - (price * (discount / 100))); // 27
console.log(total);

if (total > 25){
    // freeShipping(); 
    console.log('Yay');
}

let dog = { // sukuriamas objektas su dvejomis reikšmėmis
    name: 'Rover', // string
    weight: 24 // number
}

if (dog.weight > 30 ){ // if sąlyga, kuri sako, jeigu kintamojo 'dog' svoris (24) yra didesnis nei 30
    // iškonsolink string 'Woof", jeigu mažiau string 'Miau'. Šiuo atveju iškonsolins 'Miau'.
    console.log('Woof')
} else {
    console.log('Miau')
}

let circleRadius = 20; // kintamasis su reikšme 20
let circleArea = Math.PI * (circleRadius * circleRadius); // kintamasis, kurio reikšmė bus skaičius gautas atlikus
// visus veiksmus.
console.log(circleArea);

let temp = 10;
let answer = (9/5) * temp + 32;
console.log(answer); 
