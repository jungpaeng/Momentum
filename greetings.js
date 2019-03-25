function saveName(text) {
    localStorage.setItem(LS_USER, text);
}

function handleSubmit(event) {
    const currentValue = input.value;
    event.preventDefault();

    saveName(currentValue);
    paintGreeting(currentValue);
    switchHideState(form);
    setTimeout(function() {
        switchHideState(clockContainer);
        switchHideState(greeting);
        switchHideState(toDoForm);
    }, 1200);
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
        switchHideClass(form);
        switchHideClass(clockContainer);
        switchHideClass(greeting);
        switchHideClass(toDoForm);
    }
}

function init() {
    loadName();
}

init();