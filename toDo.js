const LS_TODO = "toDo";

let toDo = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const cleanToDo = toDo.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoList.removeChild(li);
    toDo = cleanToDo;
    saveToDo();
}

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
    delBtn.addEventListener("click", deleteToDo);
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