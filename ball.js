const field = document.querySelector('#field');
const ball = document.querySelector('#ball');
const ballRadius = ball.offsetWidth / 2;
const borderWidth = (field.offsetWidth - field.clientWidth) / 2;
const cords = field.getBoundingClientRect();
const posTop = cords.top + window.scrollY;
const posLeft = cords.left + window.scrollX;

field.addEventListener('click', placeBall);
function placeBall(event) {
  let topCoordinate = event.clientY - posTop + window.scrollY;
  let leftCoordinate = event.clientX - posLeft + event.pageX - event.clientX;

  if (event.clientY < posTop - window.scrollY + borderWidth + ballRadius) {
    topCoordinate = borderWidth + ballRadius;
  }

  if (event.clientY > (posTop + cords.height - window.scrollY) - (borderWidth + ballRadius)) {
    topCoordinate = cords.height - (borderWidth + ballRadius);
  }

  if (event.clientX < posLeft + (borderWidth + ballRadius) - scrollX) {
    leftCoordinate = borderWidth + ballRadius;
  }

  if (event.clientX > posLeft + cords.width - (borderWidth + ballRadius) - scrollX) {
    leftCoordinate = cords.width - (borderWidth + ballRadius);
  }

  ball.style.cssText = `top:${topCoordinate}px;
   margin-top: -${ballRadius + borderWidth}px;
   margin-left: -${ballRadius + borderWidth}px;
   left:${leftCoordinate}px`;
}
