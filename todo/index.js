
let form = document.getElementById("input-container");
let todoContainer = document.getElementById('todo-container');




const handleSubmit = (input) => {
    let value = input.value;




    let newTodoElement = document.createElement('div');
    newTodoElement.classList.add("todo");

    let todoInput = document.createElement('input');
    todoInput.type = "checkbox";
    todoInput.classList.add('todo-checkbox')
    newTodoElement.appendChild(todoInput)

    let todoTextElement = document.createElement('div');
    todoTextElement.classList.add("todo-text")
    todoTextElement.textContent = value;
    newTodoElement.appendChild(todoTextElement);

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    let editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.textContent = "EDIT"

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.textContent = "DELETE"

    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    newTodoElement.appendChild(buttonsContainer);



    console.log(newTodoElement);


    todoContainer.appendChild(newTodoElement);

    input.value = ""
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector("#input-container input");
    
    if (input.value.length > 0) {
        handleSubmit(input);
    }
});