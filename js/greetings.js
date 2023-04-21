const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY      = "username";

function onLoginSubmit(event) {
    event.preventDefault();

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreetings(userName)
}

function paintGreetings(userName) {
    greeting.innerText = `Hi ${userName}`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUserName)
}