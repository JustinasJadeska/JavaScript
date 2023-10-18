export class Fullname {
    constructor(vardas, pavarde) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        return this.render();
    }
    render(){
        const row = document.createElement('tr');

        const coll1 = document.createElement('td');
        const coll1Text = document.createTextNode(this.vardas);
        coll1.appendChild(coll1Text);
        
        const coll2 = document.createElement('td');
        const coll2Text = document.createTextNode(this.pavarde);
        coll2.appendChild(coll2Text);

        row.append(coll1, coll2);

        return row;
    }
}

document
    .querySelector('#name > form')
    .addEventListener('submit', e => {
        e.preventDefault();
        const vardasPavarde = e.target.elements.fullname.value;
        const add = vardasPavarde.split(' ');
        const first = add[0];
        const second = add[1];

        const result = document.querySelector('#results');
        const tablerow = new Fullname(first, second);
        result.appendChild(tablerow);
    });

