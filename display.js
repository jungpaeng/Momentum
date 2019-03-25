function getTransitioned(element) {
  if (element.style.transition !== undefined) {
    return 'transitionend';
  }

  return undefined;
}

function switchHideClass(element) {
  if (
    element.classList.contains(CN_HIDE)
    || element.classList.contains(CN_VISUALLY_HIDE)
  ) {
    element.classList.remove(CN_HIDE);
    element.classList.remove(CN_VISUALLY_HIDE);
  } else {
    element.classList.add(CN_HIDE);
    element.classList.add(CN_VISUALLY_HIDE);
  }
}

function switchContentState() {
  switchHideClass(clockContainer);
  switchHideClass(greeting);
  switchHideClass(toDoForm);
}

function switchHideState(element) {
  if (element.classList.contains(CN_HIDE)) {
    element.classList.remove(CN_HIDE);
    setTimeout(function() {
      element.classList.remove(CN_VISUALLY_HIDE);
    }, 20);
  } else {
    element.classList.add(CN_VISUALLY_HIDE);

    if (getTransitioned(form)) {
      form.addEventListener('transitionend', function(event) {
        element.classList.add(CN_HIDE);
      });
    }
  }
}

function init() {
  switchContentState();
}

init();