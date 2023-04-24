

// from database
let user = {
    email: "chase@chase.com",
    password: "qqq"
}

let loginButton = document.querySelector('#login-form button');
let form = document.getElementById("login-form");
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("running login");
    // check if password is correct, hide form
    // show user info
    let name = document.getElementById('name-input').value;
    let password = document.getElementById('password-input').value;
    
    if (password === user.password && name) {
        let userInfoContainer = document.querySelector('.user-info');
        form.style.display = "none";
        userInfoContainer.style.display = "block";
        let userH1 = document.querySelector('.user-info h1');
        userH1.textContent = `You are logged in as ${name}`;
        let postForm = document.getElementById('new-post');
        postForm.style.display = "flex";
    }

})


let newPostForm = document.querySelector('#new-post');

newPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("running function");
    let name = document.getElementById('name-input').value;
    let postTitle = document.querySelector('#new-post input').value;
    let postContent = document.querySelector('#new-post textarea').value;

    // make a new post and put it on the page
    // innerHTML works here because there are NO event listeners!
    let postContainer = document.getElementById('posts-container');
    let dateRightNow = new Date().toDateString("YYYY-MM-DD")
    postContainer.innerHTML += `
    <div class="post">
        <div>Posted by ${name} on ${dateRightNow}</div>
        <h2>${postTitle}</h2>
        <p>${postContent}</p>
    </div>
    `

})