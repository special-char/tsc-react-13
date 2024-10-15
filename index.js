const todoForm = document.getElementById("todo-form");

let todoList = [];

const displayTodoList = (lst) => {
  const tdList = document.getElementById("todo-list");
  tdList.innerHTML = ""; // Remove children from tdList

  for (let i = 0; i < lst.length; i++) {
    const element = lst[i];

    const todoItem = document.createElement("li");
    todoItem.innerHTML = `
          <div>
            <label for="complete-todo" class="sr-only"
              >Toggle Complete Todo</label
            >
            <input type="checkbox" name="complete-todo" ${
              element.isDone === true ? "checked" : ""
            } id="complete-todo-${element.id}" onchange="toggleTodoComplete(${
      element.id
    })" />
          </div>
          <p class="flex-1">
            ${element.todotext}
          </p>
          <button class="btn" onclick="deleteTodo(${
            element.id
          })">Delete Todo</button>
        `;
    tdList.append(todoItem);
  }
};

const toggleTodoComplete = (id) => {
  const index = todoList.findIndex((x) => x.id === id);

  console.log("index", index);

  const updatedList = [
    ...todoList.slice(0, index),
    { ...todoList[index], isDone: !todoList[index].isDone },
    ...todoList.slice(index + 1),
  ];

  todoList = updatedList;

  displayTodoList(todoList);
};

const deleteTodo = (id) => {
  const index = todoList.findIndex((x) => x.id === id);

  console.log("index", index);

  const updatedList = [
    ...todoList.slice(0, index),
    ...todoList.slice(index + 1),
  ];

  todoList = updatedList;

  displayTodoList(todoList);
};

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(todoForm);
  const formDataObj = Object.fromEntries(formData.entries());
  const id = new Date().valueOf();
  todoList.push({ ...formDataObj, isDone: false, id });
  todoForm.reset(); // Reset the form after submitting
  displayTodoList(todoList);
});

const filterButtons = document.getElementsByName("filter");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const filterType = e.target.innerHTML;

    switch (filterType) {
      case "Pending":
        displayTodoList(todoList.filter((x) => x.isDone === false));
        break;
      case "Completed":
        displayTodoList(todoList.filter((x) => x.isDone === true));
        break;

      default:
        displayTodoList(todoList);
        break;
    }
  });
});
