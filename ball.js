let el = document.querySelector('#field');

el.addEventListener('click', func);

function func(event) {
  alert(event.type + " на " + event.currentTarget);
  alert(event.clientX + ":" + event.clientY);
}