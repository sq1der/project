document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;  
    let message = document.getElementById("message").value;
    let errorMsg = "";

    if (name === "") {
        errorMsg += "Please enter your name.\n";
    }
    if (email === "") {
        errorMsg += "Please enter your email.\n";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMsg += "Please enter a valid email address.\n";
    }
    if (message === "") {
        errorMsg += "Please enter your message.\n";
    }

    if (errorMsg !== "") {
        alert(errorMsg);
    } else {
        alert("Form submitted successfully!");
    }
});
//H
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", function() {
        let answer = this.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

document.getElementById("popup-btn").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "none";
});

document.getElementById("bg-change-btn").addEventListener("click", function() {
    let colors = ["#FF4C4C", "#262626", "#1a1a1a", "#FF3333"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

function displayDateTime() {
    const dateTime = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    document.getElementById("current-date").innerHTML = dateTime.toLocaleDateString("en-US", options);
}

setInterval(displayDateTime, 1000);

document.querySelector("#sound-button").addEventListener("click", () => {
    const sound = new Audio("notification.wav");
    sound.play();
});

function displayGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
  
    if (hours >= 5 && hours < 12) {
      greeting = "Good morning!";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good afternoon!";
    } else if (hours >= 18 && hours < 22) {
      greeting = "Good evening!";
    } else {
      greeting = "Good night!";
    }
  
    
    document.querySelector("#greeting").textContent = greeting;
  }
  
  
  window.onload = displayGreeting;

document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;

    const greetingElement = document.getElementById('greeting');

    if (name) {
        greetingElement.innerHTML = `Hello, ${name}!`;
    } else {
        greetingElement.innerHTML = 'Hello, stranger!';
    }
});

const themeToggleButton = document.getElementById("theme-toggle-btn");
const themeLink = document.querySelector('link[rel="stylesheet"]');

// Устанавливаем начальную тему
const isDarkTheme = localStorage.getItem("theme") === "dark";
themeLink.href = isDarkTheme ? "style.css" : "light.css";
themeToggleButton.textContent = isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme";

// Переключаем тему при клике
themeToggleButton.addEventListener("click", () => {
    const darkMode = themeLink.href.includes("style.css");
    themeLink.href = darkMode ? "light.css" : "style.css";
    themeToggleButton.textContent = darkMode ? "Switch to Dark Theme" : "Switch to Light Theme";
    localStorage.setItem("theme", darkMode ? "light" : "dark");
});


