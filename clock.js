function getTime() {
  const date = new Date();

  clockTitle.innerText = moment(date).format('hh:mm');
}

function init() {
  setInterval(getTime, 1000);
}

init();