let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function clock() {
  let date = new Date();
  hour.innerHTML = `${date.getHours()} <span>hours</span>`;
  minute.innerHTML = `${date.getMinutes()} <span>minutes</span>`;
  second.innerHTML = `${date.getSeconds()} <span>seconds</span>`;

  if (date.getHours() < 10) {
    hour.innerHTML = `0${date.getHours()} <span>hours</span>`;
  } else {
    hour.innerHTML = `${date.getHours()} <span>hours</span>`;
  }
  if (date.getMinutes() < 10) {
    minute.innerHTML = `0${date.getMinutes()} <span>minutes</span>`;
  } else {
    minute.innerHTML = `${date.getMinutes()} <span>minutes</span>`;
  }
  if (date.getSeconds() < 10) {
    second.innerHTML = `0${date.getSeconds()} <span>second</span>`;
  } else {
    second.innerHTML = `${date.getSeconds()} <span>second</span>`;
  }
}

setInterval(() => {
  clock();
}, 1000);
