
let form = document.getElementById("input-container");
let todoContainer = document.getElementById('todo-container');



const handleDelete = (e) => {
    // e.target > button
    // e.target.parentElement > buttons
    // e.target.parentElement.parentElement TODO

    let clickedTodo = e.target.parentElement.parentElement;

    let todoContainer = document.getElementById('todo-container');

    todoContainer.removeChild(clickedTodo)

    // document.getElementById('todo-container').removeChild(e.target.parentElement.parentElement)

}


const handleEdit = (e) => {
    console.dir(e.target);
    let todoChildArray = e.target.parentElement.parentElement.children;
    console.log(todoChildArray);

    if (todoChildArray[1].disabled) {
        todoChildArray[1].disabled = false;
    } else {
        todoChildArray[1].disabled = true;
    }
    
}


const handleSubmit = (input) => {
    let value = input.value;




    let newTodoElement = document.createElement('div');
    newTodoElement.classList.add("todo");

    let todoInput = document.createElement('input');
    todoInput.type = "checkbox";
    todoInput.classList.add('todo-checkbox')
    newTodoElement.appendChild(todoInput)

    // TEXT ELEMENT 
    let todoTextElement = document.createElement('input');
    todoTextElement.classList.add("todo-text")
    todoTextElement.value = value;
    todoTextElement.disabled = true
    newTodoElement.appendChild(todoTextElement);



    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    let editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.addEventListener('click', handleEdit)
    editButton.textContent = "EDIT"

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.addEventListener('click', handleDelete)
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



