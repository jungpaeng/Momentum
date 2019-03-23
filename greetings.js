const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const LS_USER = "currentUser";
const CN_SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(LS_USER, text);
}

function handleSubmit(event) {
    const currentValue = input.value;
    event.preventDefault();

    saveName(currentValue);
    paintGreeting(currentValue);
}

function askName() {
    form.classList.add(CN_SHOWING);
    greeting.classList.remove(CN_SHOWING);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(CN_SHOWING);
    greeting.classList.add(CN_SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(LS_USER);

    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();