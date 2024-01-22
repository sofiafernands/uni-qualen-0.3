// 1. Obtén los elementos del DOM
let taskInput = document.getElementById('taskInput');
let addTaskButton = document.getElementById('addTaskButton');
let taskList = document.getElementById('taskList');

// 2. se crea un arreglo para guardar las tareas(vacio en un principio)
let tasks = [];

// 3. se agrega un evento para agrefar tareas 
addTaskButton.addEventListener('click', function() {
    if(taskInput.value.trim() !== '') {
        let task = {
            id: new Date().getTime(),
            name: taskInput.value,
            completed: false
        };
        tasks.push(task);
        taskInput.value = '';
        renderTasks();
    }
});

// 4. se crea una funcion para renderizar las tareas cada vez que recargue la pagina
function renderTasks() {
    taskList.innerHTML = '';
    for(let task of tasks) {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
        });
        checkbox.addEventListener('change', function() {
            task.completed = checkbox.checked;
            if(task.completed) {
                span.classList.add('completed');
            } else {
                span.classList.remove('completed');
            }
        });
        let span = document.createElement('span');
        span.textContent = task.name;
        let i = document.createElement('i');
        i.className = 'fa fa-trash';
        i.addEventListener('click', function() {
            tasks = tasks.filter(t => t.id !== task.id);
            renderTasks();
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(i);
        taskList.appendChild(li);
    }
}