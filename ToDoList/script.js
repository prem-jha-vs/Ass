const tasks = [];
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, done: false });
        renderTasks();
        taskInput.value = "";
    }
}

function deleteTask(index) {
    if(tasks[index].done){
        tasks.splice(index, 1);
        renderTasks();
    }
}

function updateDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const newTask = document.createElement("li");
        newTask.textContent = task.text;

        if (task.done) {
            newTask.classList.add('done');
        }
        const markDoneButton = document.createElement('button');
        markDoneButton.id = 'mark_done_btn';
        markDoneButton.textContent = 'Done';
        markDoneButton.addEventListener('click', () => updateDone(index));

        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete_btn'
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        newTask.appendChild(markDoneButton);
        newTask.appendChild(deleteButton);

        taskList.appendChild(newTask);
    });
}
