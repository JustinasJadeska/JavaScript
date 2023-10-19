import { ToDo } from './modules/toDo.js';
import { taskData } from './modules/taskData.js';


document
    .querySelector('#tasks > form')
    .addEventListener('submit', event => {
    event.preventDefault();

    const task = event.target.elements.toDo.value;
    const newTask = new ToDo (task);
        console.log(newTask);
    });

// 3) Patobulinti aplikaciją taip, kad elementai būtų sukuriami iš duomenų kintamojo.

for (let i=0; i < taskData.length; i++) {
    const data = taskData[i];
    const naujas = new ToDo(data.task, data.completed, data.id);
    console.log(naujas);
    
    document.querySelector('#taskContainer');
}




    
// 1) Sukurti aplikaciją nenaudojant Klasių, nei duomenų, nei duomenų saugojimo vartotojo dalyje.
//  (užtenka tik naujo task'o sukūrimo funkcionalumo)

// document
//     .querySelector('#tasks > form')
//     .addEventListener('submit', event => {
//         event.preventDefault();

//         const task = event.target.elements.toDo.value;
//         // console.log(task);

//         document.querySelector('#result').innerHTML +=
//         `
//         <ul>
//             <li>${task}</li>
//         </ul>
//         `;

//         event.target.reset();
    
//     });