// 1) 1 sekcijoje sukurti formą:
//   1.1) Kurioje vartotojas gali įkelti:
//     1.1.1) Nuotrauką
//     1.1.2) Pavadinimą
//     1.1.3) Aprašymą
//     1.1.4) Datą (optional)
//     1.1.5) Lokacija (optional)
//   1.2 optional) Stilizuoti formą (minimaliai)
//   1.3) Paspaudus "submit" - žemiau formos, turi būti sukurta kortelė
//   su formoje įvestais duomenimis. (kortelė minimaliai stilizuota)
//   1.4 extra) Galimybė vartotojui pasirinkti kortelės dizainą. (spalvos tema, elementų išdėstymas)

document
    .querySelector('#section1 > form')
    .addEventListener('submit', e => {
        e.preventDefault();

        const el = e.target.elements;
        const section1 = {
            nuotrauka: el.image.value,
            pavadinimas: el.name.value,
            aprasymas: el.description.value,
        }
        // console.log(section1);
        const cards = document.createElement('div');
        cards.classList.add('cards');

        const card = document.createElement('div');

        const image = document.createElement('img');
        image.setAttribute('src', section1.nuotrauka);

        const pav = document.createElement('h1');
        const pavText = document.createTextNode(section1.pavadinimas);
        pav.appendChild(pavText);

        const par = document.createElement('p');
        const parText = document.createTextNode(section1.aprasymas);
        par.appendChild(parText);

        card.append(image, pav, par);
        cards.append(card);

        e.target.parentElement.appendChild(cards);

        e.target.reset();
    });

// 2) JS'u 2 sekcijos div'e sukurkite x stulpelių ir y eilučių
// (x ir y nurodomas formoje) lentelę (table) paspaudžiant ant mygtuko.

document
    .querySelector('#section2 > form')
    .addEventListener('submit', e => {
        e.preventDefault();

        const el = e.target;
        const section2 = {
            stulpeliai: el.columns.valueAsNumber,
            eilutes: el.rows.valueAsNumber
        };

        const lent = document.createElement('div');
        lent.classList.add('lentele');

        const pav2 = document.createElement('h1');
        const pavText2 = document.createTextNode('You created this bad boy!');
        pav2.appendChild(pavText2);

        const bandymas = document.createElement('table');

        for (let i=0; i < section2.eilutes; i++) {
        const row = document.createElement('tr');

            for (let i=0; i < section2.stulpeliai; i++) {
            const col = document.createElement('td');
            row.appendChild(col);
            }
            bandymas.appendChild(row);
        }
        lent.append(pav2, bandymas);

        e.target.parentElement.appendChild(lent);
    })

// 3) JS'u iš 3 sekcijoje esančios formos išimkite pažymėtą opciją kai paspaudžiate mygtuką.

document
    .querySelector('#section3 > form')  // document.querySelector is used to find the first element that matches the given CSS selector.
    .addEventListener('submit', e => { // form is submitted, callback function is executed
        e.preventDefault();

        const section3 = document.querySelector('#colorSelect'); // assign to variable
        const selectedOption = section3.options[section3.selectedIndex];
        if (selectedOption){
            section3.remove(section3.selectedIndex); // removes the selected option from the "colorSelect" select element
        }
    });

// 4) JS'u 4 sekcijoje esančiose formose užpildykite x/y/z laukelius ir
// paspaudus atitinkamą mygtuką apskaičiuokite 2D arba 3D (priklausomai
// ar z paliktas tušias/0 ar duotas dydis) keturkampio Plotą, Perimetrą, Paviršiaus plotą ir Turį.

document
    .querySelector('#section4 > form')
    .addEventListener('submit', e => {
        e.preventDefault();

        const el = e.target;
        const section4 = {
            ilgis: el.x.valueAsNumber,
            plotis: el.y.valueAsNumber,
            bendras: el.z.valueAsNumber
        }
        console.log(section4);
        let result;

        const lent = document.createElement('div');
        lent.classList.add('shape');

        const pav3 = document.createElement('h1');
        const pavText3 = document.createTextNode(`Result: ${result}`);
        pav3.appendChild(pavText3);

        const plotas = document.createElement('p');
        const perimetras = document.createElement('p');
        const pavirPlotas = document.createElement('p');
        const turis = document.createElement('p');

    });