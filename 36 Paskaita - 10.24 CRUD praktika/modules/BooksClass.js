import {Modal} from './modalas.js';
import {EditForm} from './editForm.js';

export class Books {
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('card');

        const heading = document.createElement('h3');
        const headingText = document.createTextNode(this.props.title);
        heading.appendChild(headingText);

        const par = document.createElement('p');
        const parText = document.createTextNode(`Published: ${this.props.published}`);
        par.appendChild(parText);

        const image = document.createElement('img');
        image.setAttribute('src', this.props.image);
        image.setAttribute('alt', this.props.title);

        const par2 = document.createElement('p');
        const parText2 = document.createTextNode(`Genre: ${this.props.genre}`);
        par2.appendChild(parText2);

        const par3 = document.createElement('p');
        const parText3 = document.createTextNode(`Author: ${this.props.author}`);
        par3.appendChild(parText3);

        const par4 = document.createElement('p');
        const parText4 = document.createTextNode(`Country: ${this.props.country}`);
        par4.appendChild(parText4);

        const par5 = document.createElement('p');
        const parText5 = document.createTextNode(`Language: ${this.props.language}`);
        par5.appendChild(parText5);

        const delButton = document.createElement('i');
        delButton.className = 'bi bi-trash3-fill';
        delButton.addEventListener('click', () => this.delete(div))

        const editButton = document.createElement('button');
        const editButtonText = document.createTextNode('Edit');
        editButton.appendChild(editButtonText);
        editButton.addEventListener('click', () => this.editFunctionality(headingText, image, parText, parText2, parText3, parText4, parText5, div));

        div.append(image, heading, par3, par, par5, par4, par2, delButton, editButton);

        return div;
    }
    delete(element){
        element.remove();
        fetch(`http://localhost:3000/books/${this.props.id}`, {method: "DELETE"});
    }
    editFunctionality(heading, image, par, par2, par3, par4, par5, div){

        const modal = new Modal()

        const formName = document.createElement('h1');
        const formNameText = document.createTextNode('Edit book information');
        formName.appendChild(formNameText);

        const form = new EditForm(this.props);

        form.addEventListener('click', e => {
            e.preventDefault();

            const formInputs = {
                title: e.target.elements.title.value,
                author: e.target.elements.author.value,
                published: e.target.elements.published.valueAsNumber,
                language: e.target.elements.language.value,
                image: e.target.elements.image.value,
                country: e.target.elements.country.value,
                genre: e.target.elements.genre.value
            };
            this.props = {
                id: this.props.id,
                ...formInputs
            }
            heading.nodeValue = `${formInputs.title}`;
            image.setAttribute('src', formInputs.image);
            image.setAttribute('alt', `${formInputs.title}`);
            published.nodeValue = formInputs.published;
            language.nodeValue = formInputs.language;
            author.nodeValue = formInputs.author;
            country.nodeValue = formInputs.country;
            genre.nodeValue = formInputs.genre;

            fetch(`http://localhost:3000/books/${this.props.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(formInputs)
            });
            modal.closeModal();
            modal.remove();
        });
        modal.append(formName, form);
        div.appendChild(modal);
        modal.showModal();
    }
}