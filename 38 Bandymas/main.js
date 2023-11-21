let vardas = 'Justinas'

let result = vardas.indexOf('t') // Output - 3

let result1 = vardas.lastIndexOf('s') // Output - 7

let result2 = vardas.slice(0, 4)  // Output - Just

let result3 = vardas.substr(0, 5) // Output - Justi

let result4 = vardas.replace('J', 'P') // Output - Pustinas

let numeris = 10
numeris++ // Prideda 1 prie 10 = 11
numeris += 25; // Veikia su visais operatoriais (+ - * / ** %), šiuo atveju prideda 25 prie 11 = 36


// Array

let books = ["The Lord of the Rings", "Marvel", "Dune"]

let test = books.join('+') // Output - The Lord of the Rings+Marvel+Dune

let test1 = books.indexOf('Dune') // Output - 2

let test2 = books.concat(["Harry Potter", "Stardust"]) // Output -  ['The Lord of the Rings', 'Marvel', 'Dune', 'Harry Potter', 'Stardust']

let test3 = books.push('The wheel of Times') // Output - 4

let test4 = books.pop() // Output - The wheel of time (grąžina paskutinę reikšmę)


// Type coversion

let score = "100";

score = Number(score) // Output - number 100
score = Boolean(score) // Output - true

score = 100
score = String(score) // Output - "100" (as string)
console.log(score)

// for loops

const names = ['Justinas', 'Giedrius', 'Martynas']

for (let i = 0; i < names.length; i++){ // kodas veiks kol sąlyga yra ties (true), kol i yra mažiau už names.length;
   console.log(names[i])
}

// while loop                while ir for ciklai daro visiškai tą patį, tik jų sintaksė skirtinga

const surnames = ['Justinas', 'Giedrius', 'Martynas']

let i = 0;
while(i < 5){
   console.log(surnames[i])
   i++
}

// do while loop

let j = 5;

do{
   console.log('number', j)
   j++
} while (j < 5)

// if statements

const password = 'Labuka8zzzz'

if(password.length >= 8 && password.charAt(0) === password.charAt(0).toUpperCase() 
&& /\d/.test(password)){
   console.log('Good password')
} else {
   console.log('Week password ma dude, first letter should be uppercase')
}

// !isNaN(password.slice(-1)) - tikrina ar kintamojo reikšmės pabaioje yra skaičius
// /\d/.test(variable) - patikrina ar kintamojo reikšmėje yra skaičius