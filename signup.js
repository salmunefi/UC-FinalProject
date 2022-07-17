const loginForm = document.getElementById("formw");
const loginButton = document.getElementById("login");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("login", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "salman@gmail.com" && password === "salmano") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})