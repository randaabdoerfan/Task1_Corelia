let tasks = [];

// Load tasks from localStorage on page load
window.onload = function () {
  loadTasks();
  renderTasks();
};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push({ text: taskText, done: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

function toggleTaskDone(index) {
  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    const statusIcon = document.createElement("span");
    statusIcon.className = "status-icon";
    statusIcon.textContent = task.done ? "☑️" : "⬜";
    statusIcon.onclick = () => toggleTaskDone(index);

    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.disabled = task.done;
    deleteBtn.onclick = () => deleteTask(index);

    li.appendChild(statusIcon);
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
}
