
// function front(word){
//     if(word.length >= 3){
//         back = word.substring(word.length-3);
//         return back + word + back;
//     } else {
//         return false;
//     }
// }
// console.log(front('Swift'));

// 1 užduotis

let word = "Swift";

if (word.length >= 3){
    back = word.substring(word.length - 3);
    console.log(back + word + back);
} else {
    console.log(false);
}

// 2 užduotis

function numbers(num1, num2){
    let sum = num2 - num1;
    if(num1 === 8 || num2 === 8 || sum === 8){
        return true
    } else {
        return false
    }
}
console.log(numbers(24, 32));
console.log(numbers(12, 20));
console.log(numbers(12, 28));

// 3 užduotis

let vowel = 'w3resource.com'
let letters = ['a', 'e', 'o', 'u', 'i']

let vowelCount = 0;

for(let i = 0; i < vowel.length; i++){
    if (letters.includes(vowel[i].toLowerCase())){
        vowelCount++;
    }
}
console.log(vowelCount);

// 4 užduotis

function digits(num3){
    return num3 % 10 + Math.floor(num3 / 10);
}
console.log(digits(25));
console.log(digits(48));


