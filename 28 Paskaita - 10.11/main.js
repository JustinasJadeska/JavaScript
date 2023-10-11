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

console.log(humans[0], humans[1]);
console.log(humans[0].helloWorld());
console.log(humans[1].add(100, 99));
console.log(humans[0].sayingHi(humans[1]));

