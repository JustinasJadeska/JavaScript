class Human {
    constructor(name, surname, born){
        this.name = name;
        this.surname = surname;
        this.sleeps = false;
        this.fullName = this.name +' '+ this.surname;
        this.born = born;
        this.age = new Date().getFullYear() - this.born;
        this.initials = this.name[0] +'.'+this.surname[0]+'.';
    }
    goToSleep(){
        if(this.sleeps === true){
            return `${this.name} sleeps.`
        }
        this.sleeps = true;
        return `${this.name} went to bed.`
    }
    wakeUp(){
        if(this.sleeps === false){
            return `${this.name} already woke up.`
        }
        this.sleeps = false;
        return `${this.name} woke up.`
    }
    helloWorld(){
        return this.name + ' say "Hello World!"';
    }
    add(num1, num2){
        return `${this.name} adds ${num1} with ${num2} his answer is: ${num1+num2}`;
    }
    sayingHi(human){
        return `${this.name} saying hello to ${human.name}`
    }
}

// const human0 = {
//     name: 'Justinas',
//     surname: 'Jadeska',
//     born: 1993
// }

// const human0 = new Human('Justinas', 'Jadeska', 1993);
// const human1 = new Human('Justinas', 'Jodeska', 1994);

const humans = [
    new Human('Justinas', 'Jadeska', 1993),
    new Human('Martynas', 'Jodeska', 1994)
];
console.groupCollapsed('Humans');
console.log(humans[0], humans[1]);
console.log(humans[0].helloWorld());
console.log(humans[1].add(100, 99));
console.log(humans[0].sayingHi(humans[1]));
console.groupEnd();

// 1 assignment

class Car {
    constructor(name, year){
        this.name = name; // savybės
        this.year = year;
        this.helloCar = `Hi, this is my car ${this.name} made in ${this.year}`;
    }
    age(){
        let currentDate = new Date();
        return `This car is ${currentDate.getFullYear() - this.year} years old.`;
    }
}

const cars = [
    new Car('Fiat', 2003),
    new Car('BMW', 2010),
    new Car('Audi', 2010),
    new Car('Tesla', 2014),
];
console.groupCollapsed('cars');
console.log(cars);
console.log(cars[0].age());
console.log(cars[1].age());
console.groupEnd();

// 2 assignment

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.color = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
    }
    area(){
        return this.width * this.height
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }
}

const rectang = [
    new Rectangle(4,5),
    new Rectangle(3,4),
    new Rectangle(9,15),
    new Rectangle(20,3)
];
console.log(rectang);
console.log(rectang[1].area());
console.log(rectang[1].perimeter());



// 3 assignment

// Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus ir savybes.
//   3.1) Sukurkite papildomą savybę "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
//   3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). 
//   (siūlau naudoti Math.hypot() metodą).

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.coordinates = [x, y];
    }
    distance(){
        return Math.hypot(this.coordinates[0], this.coordinates[1]);
    }
}
const numbers = [
    new Point(2, 10),
    new Point(10, 15),
    new Point(8, 9),
    new Point(20, 10)
];

console.log(numbers[1].distance());

// document
//     .querySelector('#fifth > form')
//     .addEventListener('submit', event =>{
//         event.preventDefault();

//         const x = event.target.xInput.valueAsNumber;
//         const y = event.target.yInput.valueAsNumber;
//         const resultElement = new Point(x, y);

//         const pav2 = document.createElement('h1');
//         const pavText2 = document.createTextNode('You counted this bad boy!');
//         pav2.appendChild(pavText2);

//         const distance = Math.hypot(x, y);
//         resultElement.textContent = `Distance from (${x}, ${y}) to the origin (0, 0): ${distance}`;
//     })

// 4 assignment

//  Sukurkite klasę vardu "3D_Rectangle" ir duokite jai "width", "height" ir "depth" parametrus ir savybes.
//   4.1) Sukurkite metodą "volume", kuris grąžina 3D stačiakampio tūrį.
//   4.2) Sukurkite metodą "surfaceArea", kuris grąžina 3D stačiakampio paviršiaus plotą.
//   4.3) Sukurkite metodą "perimeter", kuris grąžina 3D stačiakampio perimetrą.

class ThreeD_Rectangle {
    constructor(width, height, depth){
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
    volume(){
        return this.width * this.height * this.depth;
    }
    surfaceArea(){
        return 2 * (this.depth * this.width + this.depth * this.height + this.width * this.height);
    }
    perimeter(){
        return 2 * (this.width + this.depth + this.height);
    }
}
const shape = [
    new ThreeD_Rectangle(3, 3, 4),
    new ThreeD_Rectangle(5, 5, 4),
    new ThreeD_Rectangle(6, 6, 6),
    new ThreeD_Rectangle(3, 5, 10)
];
console.log(shape);
console.log(shape[1].volume());
console.log(shape[2].surfaceArea());
console.log(shape[3].perimeter());

// 5 extra assignment

// Pabandyti sukurti UI (User Interface (Vartotojo Sąsaja)) 2-4 užduotims
// ir spausdinti informaciją į ekraną. (Kas nori pasižiūrėkite JS Canvas
// ir su juo pabandykite atvaizduoti figūras puslapyje(bent jau 2D))

