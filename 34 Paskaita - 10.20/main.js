import {Movies} from './modules/movieTask.js';
import {Button} from './modules/buttonsFilter.js';
    
const cardDiv = new Button();
document.querySelector('#button').appendChild(cardDiv)

document
    .querySelectorAll('#button button')
    .forEach(button => {
        button.addEventListener('click', () => {
            fetch(`http://localhost:3000/movies`)
            .then(res => res.json())
            .then(data => { //paleidžama nauja fukncija tvarkyti gautus duomenis iš serverio

                const selectedGenre = button.textContent; // It's assuming that the button text represents a movie genre.
                const filter = data.filter(movie => movie.genre === selectedGenre); // sukuriamas naujas masyvas saugoti filmus pasirinktus pagal nuspaustą mygtuką
                // console.log(filter)

                const moviesContainer = document.querySelector('#movies'); // elementas, kuriame bus rodomi filtruotų filmų duomenys
                moviesContainer.innerHTML = ''; // nustatomas tuščias string'as

                filter.forEach(movie => { // pradedamas ciklas per filtruotą filmų masyvą
                    const formData = new Movies(movie);
                    moviesContainer.appendChild(formData);
                })
            })
        })
    })
    
const movies = () => {
    fetch(`http://localhost:3000/movies`)
        .then( res => res.json())
        .then( data => {
            data.forEach(movie => {
                const cardDiv = new Movies(movie); // passing the movie as a parameter to the constructor of the "Movies" class.
                // console.log(cardDiv)

                document.querySelector('#movies').appendChild(cardDiv);
            })
        })
}
movies()

document
    .querySelector('#assignment > form')
    .addEventListener('submit', event => {
        event.preventDefault();

        const movie = {
            id: Date.now(),
            name: event.target.elements.movieName.value,
            releaseDate: event.target.elements.releaseDate.valueAsNumber,
            genre: event.target.elements.genre.value,
            director: event.target.elements.director.value,
            mainActor: event.target.elements.mainActor.value,
            image: event.target.elements.image.value
        }

        const cardDiv = new Movies (movie);
        document.querySelector('#movies').appendChild(cardDiv);

        fetch(`http://localhost:3000/movies`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(movie)
        })
    })


// fetch(`http://localhost:3000/human`)
//     .then(res => res.json())
//     .then(human => {
//         human.forEach(human => {
//             console.log(human);
//         })
//     })
    
// const naujas = {
//     id: Date.now(),
//     marke: "Toyta",
//     modelis: "Auris",
//     metai: 2008
// };
// fetch(`http://localhost:3000/cars`, {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify(naujas)    
// });