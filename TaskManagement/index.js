let tasks = [];
const createdBy = "Prem";

function addTask(taskName) {
    return new Promise((resolve) => {
        const taskId = tasks.length + 1;
        const creationTimestamp = new Date().toISOString();

        const newTask = {
            taskId,
            taskName,
            isComplete: false,
            meta: {
                creationTimestamp,
                completionTimestamp: "Not completed",
                createdBy,
                completedBy: "Not completed",
            }
        };
        tasks.push(newTask);

        setTimeout(() => {
            console.log(`${taskName} is added successfully.`);
            displayRemainingTasks();
            resolve();
        }, 2000);
    });
}

function completeTask(taskName, completedBy) {
    return new Promise((resolve) => {
        const task = tasks.find(element => element.taskName === taskName);

        if (task) {
            task.isComplete = true;
            task.meta.completionTimestamp = new Date();
            task.meta.completedBy = completedBy;
        } else {
            console.log(`${taskName} not found`);
        }

        setTimeout(() => {
            console.log(`${taskName} is completed successfully.`);
            displayRemainingTasks();
            resolve();
        }, 2000);
    });
}

function displayRemainingTasks() {
    const remainingTasks = tasks.filter(task => !task.isComplete);
    console.log('Remaining Tasks:', remainingTasks);
}

function periodicLog() {
    setInterval(() => {
        displayRemainingTasks();
    }, 120000);
}

async function taskOperations() {
    await addTask("task 1");
    await addTask("task 2");
    await completeTask("task 1", "PPJ");
}

periodicLog();
taskOperations();