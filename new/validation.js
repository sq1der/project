document.addEventListener("DOMContentLoaded", checkLoginStatus);

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Сохраняем данные пользователя в localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("isLoggedIn", "true");

        // Обновляем интерфейс
        showWelcomeMessage(username);
    } else {
        alert("Введите имя пользователя и пароль.");
    }
}

function logout() {
    // Удаляем данные из localStorage
    localStorage.removeItem("username");
    localStorage.setItem("isLoggedIn", "false");

    // Обновляем интерфейс
    document.getElementById("welcome").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
}

function checkLoginStatus() {
    // Проверяем, залогинен ли пользователь
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("username");

    if (isLoggedIn === "true" && username) {
        showWelcomeMessage(username);
    }
}

function showWelcomeMessage(username) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("welcome").style.display = "flex";
    document.getElementById("display-username").textContent = username;
}
