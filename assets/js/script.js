const $started = $('.started');
const $inProgress = $('.in-progress');
const $done = $('.done');
const taskForm = document.querySelector('#task-form');
const $saveBtn = $('#save-Btn');

// Retrieve tasks and nextId from localStorage
function getTaskData() {
    const taskList = JSON.parse(localStorage.getItem("tasks"));
    return taskList || [];
}

//Function get output Tasks
function outputTasks() {
    const tasks = getTaskData();
    tasks.forEach(function(taskObj){
        const $taskEl = $(`
            <article class="bg-white border border-dark-subtle p-3 m-4">
                <h5>Task Title: ${taskObj.title}</h5>
                <p>Description: ${taskObj.info}</p>
                <p>Due Date: ${taskObj.dueDate}</p>
                <button data-id='${taskObj.id}' class='btn bg-danger text-light'>Delete</button>
            </article>   
        `);
        if (taskObj.done) {
            $done.append($taskEl);
        } else if (taskObj.inProgress) {
            $inProgress.append($taskEl);
        }   else {
            $started.append($taskEl);
        }
        
    })
}


// Todo: create a function to generate a unique task id

function generateTaskId() {
    const min = Math.pow(10, 14); // Minimum 15-digit number
    const max = Math.pow(10, 15) - 1; // Maximum 15-digit number
    
    // Generate a random number between min and max
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randomNumber;

}
// Todo: create a function to create a task card
function createTaskCard() {
    const taskID = generateTaskId();
    const $taskTitle = $('#task-name');
    const $taskInfo = $('#description-text');
    const $dueDate = $('#deadline');

    const newTask = {
        id: taskID,
        title: $taskTitle.val(),
        info: $taskInfo.val(),
        dueDate: $dueDate.val(),
        done: false
    };
    const taskList = getTaskData();
    taskList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    $taskTitle.val('');
    $taskInfo.val('');
    $dueDate.val('');
    // to hide the modal after submission
    $('#formModal').modal('hide');

    outputTasks();

}
// Todo: create a function to render the task list and make cards draggable
function renderTaskList(eventObj, ui) {
    const area = $(eventObj.target);
    const article = $(ui.draggable[0]);
    area.append(article);
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

function init() {
    $('#deadline').datepicker({
        minDate: 0
    });
    $saveBtn.on('click', createTaskCard);
    outputTasks();
    $('.card-body').droppable({
        accept: 'article',
        drop: renderTaskList
    });

    $('article').draggable({
        opacity: 0.7,
        zIndex: 500,
        helper: function(eventObj) {
            const el = $(eventObj.target);
            let clone;
            if (el.is('article')){
                clone = el.clone();
            } else {
                clone = el.closest('article').clone();
            }
            clone.css('width', el.outerWidth());
            return clone;
        }
    });

}
init();
// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker