import { RealEstate } from "./modules/realEstate.js";

// import { BarborosCard } from './modules/barborosCard.js';
// import { RandomUser } from './modules/card.js';

// const fetchRandomUser = () => {
//     fetch(`https://randomuser.me/api`)
//         .then(response => response.json())
//         .then (data => {
//             console.log(data.results[0]);

//             const user = data.results[0];
//             const newCard = new RandomUser(user);

//             const cardSection = document.querySelector('#randomUser > div');
//             cardSection.appendChild(newCard);
//         })
//     }

// document
//     .querySelector('#randomUser > h1')
//     .addEventListener('click', fetchRandomUser);


const realEstate = () => {
    fetch(`https://robust-safe-crafter.glitch.me/`)
        .then(res => res.json())
        .then( data => {
            data.forEach(house => {
                const cardDiv = new RealEstate (house);

                document.querySelector('#home').appendChild(cardDiv);
            })
        })
}
realEstate();

document
    .querySelector('#realEstate > form')
    .addEventListener('submit', event => {
        event.preventDefault();

        const house = {
            image: event.target.elements.image.value,
            price: event.target.elements.price.valueAsNumber,
            city: event.target.elements.city.value,
            description: event.target.elements.description.value
        };

        const cardDiv = new RealEstate (house);
        document.querySelector('#home').appendChild(cardDiv);

        fetch(`https://robust-safe-crafter.glitch.me/`,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(house)
        })
    })

// const fetchBarbora = () => {
//     fetch(`https://sophisticated-humane-dandelion.glitch.me/`)
//         .then( res => res.json())
//         .then(data => {
//             // console.log(data);

//             data.forEach(preke => {
//                 const cardDiv = new BarborosCard (preke);

//             // console.log(cardDiv);
//             document.querySelector('#prekes').appendChild(cardDiv);
//             })
//         })
// }
// fetchBarbora();

// document
//     .querySelector('#barborosPrekes > form')
//     .addEventListener('submit', event => {
//         event.preventDefault();

//         const preke = {
//             id: Date.now(),
//             image: event.target.elements.image.value,
//             title: event.target.elements.name.value,
//             price: event.target.elements.price.valueAsNumber
//         };
//         const cardDiv = new BarborosCard (preke);
//         document.querySelector('#prekes').appendChild(cardDiv);

//         fetch(`https://sophisticated-humane-dandelion.glitch.me/`,{
//             method: "POST",
//             headers: {
//                 "Conetent-Type":"aplplication/json"
//             },
//             body: JSON.stringify(preke)
//         })
// })