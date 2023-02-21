const list = document.querySelector<HTMLUListElement>("#list");
const taskForm = document.querySelector<HTMLFormElement>("#task-form");
const taskInput = document.querySelector<HTMLInputElement>("#task-input");

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const uniqueId = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36);
  return date + random;
};

taskForm?.addEvenListener("submit", (e: { prevendDefault: () => Event }) => {
  e.prevendDefault();
  if (taskInput?.value == "" || taskInput?.value == null) return;

  const task: Task = {
    id: uniqueId(),
    title: taskInput.value,
    completed: false,
  };
  addTask(task);
});

const addTask = (task: Task) => {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = (document.createElement("input").type = "checkbox");
  label.append(checkbox, task.title);
  item.append(label);
  list?.append(item)
};
