const LS_USER = "currentUser";

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
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
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