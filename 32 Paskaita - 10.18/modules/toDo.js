// 2) Patobulinti aplikaciją, kad nauji elementai būtų kuriami su Klasės pagalba.
//  Toje pačioje klasėje būtų aprašyti ir funkcionalumai kaip metodai,
//   kurie būtų kviečiami nuspaudus atitinkamą vietą elemente.
//    (čia jau reikia pažymėjimo/atžymėjimo ir trinimo funkcionalumų)

export class ToDo {
    constructor(task, completed, id){
        this.task = task;
        this.isCompleted = completed;
        this.id = id;
        return this.render ();
    }
    render() {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const heading = document.createElement('h3');
        const headingText = document.createTextNode(this.task);
        heading.appendChild(headingText);


        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', () => this.select(heading, checkbox));

        const deleteTask = document.createElement('i');
        deleteTask.className = 'bi bi-trash3-fill';
        deleteTask.addEventListener('click', () => {
            this.deleteTask(taskDiv);
            this.deleteLocalStorage();
        });

        taskDiv.append(checkbox, heading, deleteTask);

        const tasksDiv = document.querySelector('#result');
        tasksDiv.appendChild(taskDiv);

        return taskDiv;
    }

    select(heading, checkbox){
        this.isCompleted = checkbox.checked;

        if (this.isCompleted) {
            heading.style.textDecoration = 'line-through';
        } else {
            heading.style.textDecoration = 'none';
        }
    }

    deleteTask(taskDiv){
        if (taskDiv) {
            taskDiv.remove();
        }
    }
    deleteLocalStorage () {
        const storedTasks = JSON.parse(localStorage.getItem('taskData')) || []; // It uses JSON.parse to convert the stored data from a JSON string into a JavaScript array. If no data is found in localStorage, an empty array is created using || [].
        const updatedTasks = storedTasks.filter(task => task.id !== this.id); //The filter method is used on the storedTasks array to create a new array called updatedTasks.
        localStorage.setItem('taskData', JSON.stringify(updatedTasks)); //Finally, the updatedTasks array, which no longer contains the current task, is converted to a JSON string using JSON.stringify.
    }

    
}

