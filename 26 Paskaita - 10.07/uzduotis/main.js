
const tasks = document.querySelector('#one');

// 1.1) JS'u 1 sekcijoje sukurkite antraštę.
const heading = document.createElement('h1');
const headingText = document.createTextNode(tasksData[0].title);
console.log(headingText);
heading.appendChild(headingText);

// 1.2) JS'u 1 sekciją papildykite paragrafu su tekstu.

const par = document.createElement('p');
const parText = document.createTextNode(tasksData[0].paragraph);
console.log(parText);
par.appendChild(parText);

// 1.3) JS'u 1 sekciją papildykite paveikslėliu.

const img = document.createElement('img');
img.setAttribute('src', tasksData[0].image);
console.log(img);

// 1.4) JS'u 1 sekciją stilizuokite priskirdami klases.

tasks.append(heading, img, par);

// 2) Naudodamiesi tasksData[1] duomenimis atlikite šiuos veiksmus:
//	2.1) JS'u 2 sekcijoje sukurkite antraštę su paveiksliukais.
//	2.2) JS'u 2 sekciją stilizuokite priskirdami klases.

const tasks2 = document.querySelector('#two');

const heading2 = document.createElement('h1');
const headingText2 = document.createTextNode(tasksData[1].title);
console.log(headingText2);
heading2.appendChild(headingText2);

tasks2.appendChild(heading2);

tasksData[1].images.forEach( element => {
    const image = document.createElement('img');
    image.setAttribute('src', element);

    tasks2.appendChild(image);
});

// 3)  Naudodamiesi tasksData[2] duomenimis atlikite šiuos veiksmus:
//	3.1) JS'u 3 sekcijoje sukurkite antraštę su paveiksliukais.
//	3.2) JS'u 3 sekciją papildykite paveiksliukų pavadinimais. (paveiksliukus ir jų pavadinimus laikyti atskiruose div'uose)
//	3.3) JS'u 3 sekciją papildykite kiekvienam pavadinimui/paveiksliukui skirtais aprašymais.(paveiksliukus ir jų pavadinimus bei aprašymus laikyti atskiruose div'uose)
//	3.4) JS'u 3 sekciją stilizuokite priskirdami klases.

const task3 = document.querySelector('#name');

const heading3 = document.createElement('h1');
const headingText3 = document.createTextNode(tasksData[2].title);
console.log(headingText3);
heading3.appendChild(headingText3);

task3.appendChild(heading3);

tasksData[2].works.forEach(element =>{
    const card = document.createElement('div');
    card.classList.add('kortele');

    const image2 = document.createElement('img');
    image2.setAttribute('src', element.image);

    const heading4 = document.createElement('h2');
    const headingText4 = document.createTextNode(element.title);
    heading4.appendChild(headingText4);

    const par2 = document.createElement('p');
    const parText2 = document.createTextNode(element.paragraph);
    par2.appendChild(parText2);

    card.append(image2, heading4, par2);
    task3.appendChild(card);
});









