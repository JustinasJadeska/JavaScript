document
  .querySelector('#validationPvz')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(e);
  });

const DOM_pvz = document.querySelector('#DOM_pvz');
DOM_pvz.classList.add('mediumSizeCard','card');
console.dir(DOM_pvz);

let heading = document.createElement('h1');
// heading.textContent = 'Kortelės pavadinimas';
let headingText = document.createTextNode('Kortelės pavadinimas');
heading.appendChild(headingText);
heading.classList.add('blueText','centeredText');
DOM_pvz.addEventListener('mouseenter', () => heading.classList.toggle('redText'));
// heading.style.background = 'orange';
// DOM_pvz.appendChild(heading);

let paragraph = document.createElement('p');
let parText = document.createTextNode('Aš esu paragrafas šitai kortelei, kuris pasakoja apie labai skanias baronkas :P');
paragraph.appendChild(parText);
paragraph.classList.add('justifiedText');
// DOM_pvz.appendChild(paragraph);

let image = document.createElement('img');
console.dir(image);
// image.src='...'
// image.alt='...'
image.setAttribute('src', 'https://www.lrt.lt/img/2020/03/06/616185-745992-756x425.jpg');
image.setAttribute('alt', 'riestainiai Kaziuko mugėje');
image.classList.add('imageSize');
// DOM_pvz.appendChild(image);

DOM_pvz.append(heading, image, paragraph);

// Kartu
const daromKartu = document.querySelector('#darom');
// console.log(duomenysKartu);

duomenysKartu.forEach(element => {
    // console.log(element)
    console.log(element.pavadinimas);
    const card = document.createElement('div');
    card.classList.add('kortele');

    const heading = document.createElement('h1');
    const headingText = document.createTextNode(element.pavadinimas);
    heading.appendChild(headingText);
    
    const image = document.createElement('img');
    image.setAttribute('src', element.paveiksliukas);
    image.setAttribute('alt', element.paveiksliukoAlt);

    const par = document.createElement('p');
    const parText = document.createTextNode(element.paragrafas);
    par.appendChild(parText);

    card.append(heading, image, par);
    daromKartu.appendChild(card);
});