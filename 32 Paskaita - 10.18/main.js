import { ToDo } from './modules/toDo.js';
import { taskData } from './modules/taskData.js';


document
    .querySelector('#tasks > form')
    .addEventListener('submit', event => {
    event.preventDefault();

    const newTask = {
        id: Date.now(),
        task: event.target.elements.toDo.value,
        completed: false   
    };

    const storedTasks = JSON.parse(localStorage.getItem('taskData')) ? JSON.parse(localStorage.getItem('taskData')) : [];
    
    storedTasks.push(newTask)
    localStorage.setItem('taskData', JSON.stringify(storedTasks));

    const newToDo = new ToDo (newTask.task, newTask.completed, newTask.id);
    taskContainer.appendChild(newToDo);
    
    event.target.elements.toDo.value = ""; // Clear the input field

    console.log(storedTasks);

    });

const taskContainer = document.querySelector('#taskContainer');

taskData.forEach(data => {
    const newToDo = new ToDo(data.task, data.completed, data.id);
    taskContainer.appendChild(newToDo);
});

if(localStorage.getItem('taskData')){
    const storedTasks = JSON.parse(localStorage.getItem('taskData'))

    storedTasks.forEach(task => {
        const newToDo = new ToDo(task.task, task.completed, task.id);
        taskContainer.appendChild(newToDo);
    })
}

// for (let i=0; i < taskData.length; i++) {
//     const data = taskData[i];
//     const newToDo = new ToDo(data.task, data.completed, data.id);
//     console.log(newToDo);
    
    
// }

// console.log(taskData);


    
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