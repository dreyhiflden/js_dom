const field = document.querySelector('#field');
const ball = document.querySelector('#ball');
const ballRadius = ball.offsetWidth / 2;
const borderWidth = (field.offsetWidth - field.clientWidth) / 2;
const cords = field.getBoundingClientRect();

const body = document.querySelector('body');

let posTop = cords.top + window.scrollY;
let posLeft = cords.left + window.scrollX;

console.log(`posY = field.offsetTop = ${field.offsetTop}`);
console.log(`posY = cords.top = ${cords.top}`);
console.log(`posX = field.offsetLeft = ${field.offsetLeft}`);
console.log(`posX = cords.left = ${cords.left}`);
console.log(`ball radius = cords.left = ${ball.offsetWidth / 2}`);


field.addEventListener('click', placeBall);
// body.addEventListener('mousemove', info);


function info(event) {
  if (event.clientY < cords.top + borderWidth) {
    // body.style.background = 'green';
  } else {
    // body.style.background = 'red';
  }

  if (event.clientY > cords.bottom - borderWidth) {
    // body.style.background = 'green';
  } else {
    // body.style.background = 'red';
  }

  if (event.clientX < cords.left + borderWidth) {
    // body.style.background = 'green';
  } else {
    // body.style.background = 'red';
  }

  if (event.clientX > cords.right - borderWidth - window.scrollX) {
    body.style.background = 'green';
  } else {
    body.style.background = 'red';
  }
}

function placeBall(event) {

  console.log(event);

  console.log(posTop);
  console.log(posTop + window.scrollY);

  if (event.clientY < posTop - window.scrollY + borderWidth + ballRadius) {
    ball.style.cssText = `top:${borderWidth + ballRadius}px;
   margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
   margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
   left:${event.clientX - posLeft + (event.pageX - event.clientX)}px`;
    console.log(`posTop + borderWidth + ballRadius = ${posTop + borderWidth + ballRadius}`);
    console.log(`event.clientY = ${event.clientY}`);
    return;
  }

  if (event.clientY > (posTop + cords.height - window.scrollY) - (borderWidth + ballRadius)) {
    ball.style.cssText = `top:${cords.height - (borderWidth + ballRadius)}px;
   margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
   margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
   left:${event.clientX - posLeft + (event.pageX - event.clientX)}px`;
    return;
  }

  if (event.clientX < posLeft + (borderWidth + ballRadius)) {
    ball.style.cssText = `top:${(event.clientY - (posTop - window.scrollY))}px;
   margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
   margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
   left:${borderWidth + ballRadius}px`;
    return;
  }

  if (event.clientX > cords.right - (borderWidth + ballRadius + scrollX)) {
    ball.style.cssText = `top:${(event.clientY - (posTop - window.scrollY))}px;
     margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
     margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
     left: ${cords.width - (borderWidth + ballRadius)}px`;
    return;
  }

  ball.style.cssText = `top:${(event.clientY - (posTop - window.scrollY))}px;
   margin-top: -${(ball.offsetHeight / 2) + borderWidth}px;
   margin-left: -${(ball.offsetWidth / 2) + borderWidth}px;
   left:${event.clientX - posLeft + (event.pageX - event.clientX)}px`;
}

