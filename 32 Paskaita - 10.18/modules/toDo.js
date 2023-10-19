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

        const deleteTask = document.createElement('button');
        const deleteTaskText = document.createTextNode('Delete');
        deleteTask.appendChild(deleteTaskText);
        deleteTask.addEventListener('click', () => this.deleteTask(taskDiv));

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
}

