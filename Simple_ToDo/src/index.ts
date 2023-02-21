const list = document.querySelector<HTMLUListElement>("#list");
const taskForm = document.querySelector<HTMLFormElement>("#task-form");
const taskInput = document.querySelector<HTMLInputElement>("#task-input");

const uniqueId = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36);
  return date + random;
};

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const saveToLocal = () => {
  localStorage.setItem("tasks list", JSON.stringify(savedTasks));
};

const loadFromLocal = (): Task[] => {
  const tasksJSON = localStorage.getItem("tasks list");
  if (tasksJSON == null) return [];
  return JSON.parse(tasksJSON);
};

taskForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (taskInput?.value == "" || taskInput?.value == null) return;

  const task: Task = {
    id: uniqueId(),
    title: taskInput.value,
    completed: false,
  };
  savedTasks.push(task);
  addTask(task);
  taskInput.value = "";
});

const addTask = (task: Task) => {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    console.log(savedTasks)
    saveToLocal();
  });
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item);
};

const savedTasks: Task[] = loadFromLocal();
savedTasks.forEach(addTask)