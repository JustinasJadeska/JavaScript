document
    .querySelector('#vardoTask > form')
    .addEventListener('submit', e => {
        e.preventDefault();
        console.log(e.target.elements);
        console.log(e.target.elements.vardas.value);
        console.log(e.target.elements.kartai.valueAsNumber);
        const vardas = e.target.elements.vardas.value.trim();
        const kartai = e.target.elements.kartai.valueAsNumber;

        const resultDiv = e.target.nextElementSibling;
        // console.log(resultDiv);

        let text = '';
        for( let i=0; i < kartai; i++){
            text+=vardas + ' ';
            // console.log(text);
            const par = document.createElement('p');
            const parText = document.createTextNode(text.trim());
            par.appendChild(parText);
            // console.log(par);
            resultDiv.appendChild(par);
        }
    });


// Harder assignment
document
    .querySelector('#bilietoTask > form')
    .addEventListener('submit', e => {
        e.preventDefault();
        console.log(e.target.elements);
        const el = e.target.elements;
        const bilietoInfo = {
            vardas: el.name.value,
            pavarde: el.surname.value,
            filmas: el.movie.value,
            date: el.date.value.slice(0, 10),
            laikas: el.date.value.slice(11),
            vieta: el.place.valueAsNumber,
            ekranas: el.screen.value,
            kaina: el.screen.value === '2D' ? 6.5 : 9
        };
        console.log(bilietoInfo);
        
        const bilietas = document.createElement('div');
        bilietas.classList.add('bilietas');

        const firstDiv = document.createElement('div');

        const movieName = document.createElement('h1');
        const movieNameText = document.createTextNode(bilietoInfo.filmas);
        movieName.appendChild(movieNameText);

        const pirkejoVardas = document.createElement('p');
        const pirkejoVardasText = document.createTextNode('Vardas: ' + bilietoInfo.vardas);
        pirkejoVardas.appendChild(pirkejoVardasText);

        const pirkejoPavarde = document.createElement('p');
        const pirkejoPavardeText = document.createTextNode('Pavarde: ' + bilietoInfo.pavarde);
        pirkejoPavarde.appendChild(pirkejoPavardeText);

        const vieta = document.createElement('p');
        const vietaText = document.createTextNode('Vieta: ' + bilietoInfo.vieta);
        vieta.appendChild(vietaText);

        const ekranas = document.createElement('p');
        const ekranasText = document.createTextNode('Ekranas: ' + bilietoInfo.ekranas);
        ekranas.appendChild(ekranasText);

        firstDiv.append(movieName, pirkejoVardas, pirkejoPavarde, vieta, ekranas);
        // antras div
        const secondDiv = document.createElement('div');

        const data = document.createElement('p');
        const dataText = document.createTextNode('Date ' + bilietoInfo.date);
        data.appendChild(dataText);

        const laikas = document.createElement('p');
        const laikasText = document.createTextNode('Laikas ' + bilietoInfo.laikas);
        laikas.appendChild(laikasText);

        const kaina = document.createElement('p');
        const kainaText = document.createTextNode('Kaina ' + bilietoInfo.kaina + 'EUR');
        kaina.appendChild(kainaText);
        
        secondDiv.append(data, laikas, kaina);
        // Sudedame abu 'div'
        bilietas.append(firstDiv, secondDiv);
        e.target.parentElement.appendChild(bilietas);
    });