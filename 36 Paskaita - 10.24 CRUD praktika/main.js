import {Books} from './modules/BooksClass.js';

fetch(`http://localhost:3000/books`)
.then(res => res.json())
.then(books => {
    console.log(books)
    books.forEach(book => {
        const card = new Books(book);
        document.querySelector('#books > div').appendChild(card);
    })
})

document
    .querySelector('#books > form')
    .addEventListener('submit', event => {
        event.preventDefault();

        const addBooks = {
            id: Date.now(),
            title: event.target.elements.title.value,
            author: event.target.elements.author.value,
            published: event.target.elements.published.valueAsNumber,
            language: event.target.elements.language.value,
            country: event.target.elements.country.value,
            image: event.target.elements.image.value,
            genre: event.target.elements.genre.value
        }

        const cardDiv = new Books (addBooks);
        document.querySelector('#books > div').appendChild(cardDiv);

        fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(addBooks)
        })
        event.target.reset();
    })