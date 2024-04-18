const addProduct = () => {
  const taskInput = document.querySelector('input[type="text"]');
  const taskText = taskInput.value;
  const taskList = document.querySelector("ul");
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  } else {
    console.log("Inserisci un task valido!");
  }
};
