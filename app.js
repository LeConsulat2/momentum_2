const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit() {    
    const username =loginInput.value;
    console.log(username);
}

function handleLinkClick() {
    event.preventDefault();
    alert("clicked");
}


loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);