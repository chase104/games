
let form = document.getElementById("input-container");
let todoContainer = document.getElementById('todo-container');


// let todos = [
//     {
//     done: false,
//     content: "code 3 hours"
//     }
// ]


const handleDelete = (e) => {
    // e.target > button
    // e.target.parentElement > buttons
    // e.target.parentElement.parentElement TODO

    let clickedTodo = e.target.parentElement.parentElement;

    let todoContainer = document.getElementById('todo-container');

    todoContainer.removeChild(clickedTodo)

    // document.getElementById('todo-container').removeChild(e.target.parentElement.parentElement)

}

const toggle = (element) => {
    
    if (element.disabled) {
        element.disabled = false;
    } else {
        element.disabled = true;
    }
}

const handleEdit = (e) => {
    let todoChildArray = e.target.parentElement.parentElement.children;

    // if (todoChildArray[1].disabled) {
    //     todoChildArray[1].disabled = false;
    // } else {
    //     todoChildArray[1].disabled = true;
    // }
    toggle(todoChildArray[1])
    
}


const handleSubmit = (input) => {
    let value = input.value;




    let newTodoElement = document.createElement('div');
    newTodoElement.classList.add("todo");

    // make checkbox
    let todoInput = document.createElement('input');
    todoInput.type = "checkbox";
    todoInput.classList.add('todo-checkbox')
    newTodoElement.appendChild(todoInput)

    // Make TEXT ELEMENT (input) 
    let todoTextElement = document.createElement('input');
    todoTextElement.classList.add("todo-text")
    todoTextElement.value = value;
    todoTextElement.disabled = true
    newTodoElement.appendChild(todoTextElement);


    // make buttons container
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    // make edit button
    let editButton = document.createElement('button');
    editButton.classList.add("edit");
    editButton.addEventListener('click', handleEdit)
    editButton.textContent = "EDIT"

    // make delete button
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("delete");
    deleteButton.addEventListener('click', handleDelete)
    deleteButton.textContent = "DELETE"

    // add buttons to container
    buttonsContainer.appendChild(editButton)
    buttonsContainer.appendChild(deleteButton)

    newTodoElement.appendChild(buttonsContainer);




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





// is the second todo done?