// Objective:
// Implement a simple task tracker application that utilizes various JavaScript concepts. 
// The application should allow users to add tasks, mark them as completed, and display the remaining tasks.

// Task is an object and looks like
// Task = {
//     taskId: number,
//     taskName: string,
//     isComplete: boolean,
//     meta: {
//         creationTimestamp: string,
//         completionTimestamp: string,
//         createdBy: string,
//         completedBy: string,
//     }
// }

// Requirements:
// 1. Implement a function addTasks that accepts a variable number of task info as arguments. 
// This function should add each task to a tasks array.

// 2. Create functions for adding tasks (addTask), marking a task as completed (completeTask), and displaying remaining tasks (displayRemainingTasks). Ensure proper separation of concerns.
// a. addTask - takes 1 parametere(taskName). taskId should be unique, creationTimestamp you can generate as well, createdBy should be your name which you can store somewhere globally.
// b. completeTask - takes 2 parameters(taskName, completedBy). completionTimestamp can be generated.

// 3. Implement a feature that periodically checks and logs the remaining tasks after every 2 minutes. When adding a task, add a delay of 2 seconds before showing log to the user depicting async behaviour.

let tasks = [];
const createdBy = "Prem";

function addTask(taskName){
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
    setTimeout(()=>{
        console.log(`${taskName} is added successfully `);
        //displayRemainingTasks();
    },2000)
}
function completeTask(taskName, completedBy){
    const task = tasks.find(element => element.taskName===taskName)

    if(task){
        task.isComplete = true;
        task.meta.completionTimestamp = new Date();
        task.meta.completedBy = completedBy;

    }else{
        console.log(`${taskName} not found`);
    }
    setTimeout(()=>{
        console.log(`${taskName} is completed successfully`);
        displayRemainingTasks();
    },2000)
}
function displayRemainingTasks(){
    const remainingTasks = tasks.filter(task => !task.isCompleted)
    console.log(remainingTasks);
}
function periodicLog(){
    setInterval(()=>{
        displayRemainingTasks();
    }, 120000)
}


setTimeout(() =>{
    addTask("task 1");
}, 100)

setTimeout(() =>{
    addTask("task 2");

}, 400)

setTimeout(() =>{
    completeTask("task 1","PPJ");
}, 500)