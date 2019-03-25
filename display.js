function hideContent() {
  clockContainer.classList.add(CN_HIDE);
  greeting.classList.add(CN_HIDE);
  toDoForm.classList.add(CN_HIDE);
}

function init() {
  hideContent();
}

init();