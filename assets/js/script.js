const $started = $('.started');
const $inProgress = $('.in-progress');
const $done = $('.done');

// Retrieve tasks and nextId from localStorage
function getTaskData() {
    let taskList = JSON.parse(localStorage.getItem("tasks"));
    let nextId = JSON.parse(localStorage.getItem("nextId"));
}

//Function get output Tasks
function outputTasks() {
    const tasks = getTaskData
}


function init() {
    $('#deadline').datepicker();
}
init();
// Todo: create a function to generate a unique task id

function generateTaskId() {
    const min = Math.pow(10, 14); // Minimum 15-digit number
    const max = Math.pow(10, 15) - 1; // Maximum 15-digit number
    
    // Generate a random number between min and max
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;

}
// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskID = generateTaskId();
    const $taskTitle = $('#task-name');
    const $taskInfo = $('#description-text');
    const $dueDate = $('#deadline');

    const task = {
        id: taskID,
        title: $taskTitle.val(),
        info: $taskInfo.val(),
        duedate: $dueDate.val(),
        started: false
    };
    const taskList = getTaskData();
    taskList.push(task);

    localStorage.setItem('tasks', JSON.stringify(taskList));
    $taskTitle.val('');
    $taskInfo.val('');
    $dueDate.val('');
    
    outputTasks();
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){


}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
