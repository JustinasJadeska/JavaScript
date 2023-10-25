import {FormInput} from './formInput.js';

export class EditForm {
    constructor(props){
        this.props = props;
        return this.render()
    }
    render(){
        const form = document.createElement('form');

        const titleInput = new FormInput({
            for: 'title',
            labelText: 'Title:',
            inputAttributes: {
                type: 'text',
                value: this.props.title
            }
        });

        const authorInput = new FormInput({
            for: 'author',
            labelText: 'Author:',
            inputAttributes: {
                type: 'text',
                value: this.props.author
            }
        });

        const publishedInput = new FormInput({
            for: 'published',
            labelText: 'Published',
            inputAttributes: {
                type: 'number',
                max: new Date().getFullYear()+1,
                value: this.props.published
            }
        });

        const imageInput = new FormInput({
            for: 'image',
            labelText: 'Book image: ',
            inputAttributes: {
                type: 'url',
                value: this.props.image
            }
        });

        const languageInput = new FormInput({
            for: 'language',
            labelText: 'Language:',
            inputAttributes: {
                type: 'text',
                value: this.props.language
            }
        });

        const countryInput = new FormInput({
            for: 'country',
            labelText: 'Country:',
            inputAttributes: {
                type: 'text',
                value: this.props.country
            }
        });

        const genreInput = new FormInput({
            for: 'genre',
            labelText: 'Genre:',
            inputAttributes: {
                type: 'text',
                value: this.props.genre
            }
        });

        const submitInput = document.createElement('input');
        submitInput.setAttribute('type', 'submit');
        submitInput.setAttribute('value', 'Submit');

        form.append(titleInput, authorInput, publishedInput, imageInput, languageInput, countryInput, genreInput, submitInput);

        return form;
    }
}