fetch(`http://localhost:3000/human`)
    .then(res => res.json())
    .then(human => {
        human.forEach(human => {
            console.log(human);
        })
    })
    
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