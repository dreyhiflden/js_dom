const field = document.querySelector('#field');
const ball = document.querySelector('#ball');
const borderWidth = (field.offsetWidth - field.clientWidth) / 2;

let posY = field.offsetTop;
let posX = field.offsetLeft;


field.addEventListener('click', placeBall);

function placeBall(event) {

  console.log(event);

  console.log(posY);

  if ((event.clientY - posY + (event.pageY - event.clientY)) < posY) {
    console.log(`${(event.clientY - posY + (event.pageY - event.clientY)) < posY}`);
  }

  ball.style.cssText = `top:${(event.clientY - posY + (event.pageY - event.clientY))}px;
   margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
   margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
   left:${event.clientX - posX + (event.pageX - event.clientX)}px`;

}
