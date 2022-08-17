function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let idIntteerval = null;

btnStart.addEventListener('click', () => {
  btnCheck();
  console.log(btnStart.disabled);

  idIntteerval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = `${color}`;
  }, 1000);
});
btnStop.addEventListener('click', () => {
  clearInterval(idIntteerval);
  btnCheck();
});

function btnCheck() {
  if (!btnStart.disabled) {
    btnStart.disabled = true;
    btnStop.disabled = false;
  } else {
    btnStart.disabled = false;
    btnStop.disabled = true;
  }
}

const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
stop.disabled = true;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

let timerId = null;

start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;

  timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
});

stop.addEventListener('click', () => {
  start.disabled = false;
  stop.disabled = true;
  clearInterval(timerId);
});
