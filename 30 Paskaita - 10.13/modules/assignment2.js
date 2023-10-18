export class Trip {
    constructor(destination, image, location, price, length){
        this.destination = destination;
        this.image = image;
        this.location = location;
        this.price = price;
        this.length = length;
        return this.render();
    }
    render(){
        const tripDiv = document.createElement('div');
        tripDiv.classList.add('kortele');

        const heading = document.createElement('h1');
        const headingText = document.createTextNode(this.destination);
        heading.appendChild(headingText);

        const image = document.createElement('img');
        image.setAttribute('src', this.image);

        tripDiv.append(heading, image);

        tripDiv.addEventListener('click', () => {
            const pop = document.createElement('div');
            pop.classList.add('koretele2');

            const par = document.createElement('p');
            const parText = document.createTextNode(`Location: ${this.location}`);
            par.appendChild(parText);

            const par2 = document.createElement('p');
            const parText2 = document.createTextNode(`Price: ${this.price}`);
            par2.appendChild(parText2);

            const par3 = document.createElement('p');
            const parText3 = document.createTextNode(`Length: ${this.length} days`);
            par3.appendChild(parText3);

            tripDiv.append(par, par2, par3);
        })

        return tripDiv;
    }
}

document
    .querySelector('#assignment2 > form')
    .addEventListener('submit', e => {
        e.preventDefault();

        const destination = e.target.elements.tripDestinationName.value; // id name
        const image = e.target.elements.imageURL.value;
        const location = e.target.elements.tripLocation.value;
        const price = parseFloat(e.target.elements.tripPrice.value);
        const length = parseInt(e.target.elements.tripLength.value);

        const newTrip = new Trip (destination, image, location, price, length);

        const tripsDiv = document.querySelector('#result2');
        tripsDiv.appendChild(newTrip);
    });


