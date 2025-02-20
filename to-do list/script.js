const toDo = document.getElementById("to-do");
const btn = document.getElementById("button");
const list = document.getElementById("list");

// Retrieve tasks from localStorage and update the list
const storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
    list.innerHTML = storedTasks;
}

// Function to update localStorage with the current list state
function updateLocalStorage() {
    localStorage.setItem('tasks', list.innerHTML);
}

// Function to create a new task element and append it to the list
function createTaskElement(task) {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `${task} <span class="delete">❌</span>`;
    taskElement.classList.add('task');
    list.appendChild(taskElement);
    updateLocalStorage(); // Update localStorage after adding a new task
}


list.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentElement.remove();
        updateLocalStorage();
    }
});

btn.addEventListener('click', () => {
    let task = toDo.value.trim();
    if (task) {
        createTaskElement(task);
        toDo.value = ""; // Clear the input field
        addDeleteEventListeners(); // Add event listeners to delete buttons after adding a new task
    }
})