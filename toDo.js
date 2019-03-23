const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const LS_TODO = "toDo";

const toDo = [];

function saveToDo() {
    localStorage.setItem(LS_TODO, JSON.stringify(toDo));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDo.length + 1;
    const toDoObj = {
        id: newId,
        text
    }

    delBtn.innerText = "❌";
    span.innerText = text;
    li.id = newId;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    const currentValue = toDoInput.value;
    event.preventDefault();

    if (!!currentValue) {
        paintToDo(currentValue);
        toDoInput.value = "";
    }
}

function loadToDo() {
    const loadedToDo = localStorage.getItem(LS_TODO);

    if (loadedToDo !== null) {
        const parsedToDo = JSON.parse(loadedToDo);
        parsedToDo.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();