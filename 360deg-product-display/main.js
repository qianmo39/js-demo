const path = "./images/iris-";
const imgNumber = 36;
const imgType = "jpeg";

for (let i = 1; i <= imgNumber; i++) {
  document.querySelector(
    "#cache"
  ).innerHTML += `<img src='${path}${i}.${imgType}' />`;
}

let img = document.querySelector(".car img");

window.addEventListener("wheel", (e) => {
  e.wheelDelta / 120 > 0 ? next() : prev();
});

let i = 1;

function next() {
  if (++i > imgNumber) {
    i %= imgNumber;
  }
  img.src = `${path}${i}.${imgType}`;
}

function prev() {
  if (--i <= 0) {
    i += imgNumber;
  }
  img.src = `${path}${i}.${imgType}`;
}
