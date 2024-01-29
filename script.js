const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskTest = taskInput.value.trim();
    if (taskTest !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskTest}</span>
            <button class="deleteButton">Delete</button>
            `;
        taskList.appendChild(listItem);
        taskInput.value = '';
        bindDeleteButton(listItem);
    }
}

function bindDeleteButton(listItem) {
    const deleteButton = listItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);

    });
}