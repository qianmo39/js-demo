const bg = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const text = document.getElementById("text");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  bg.style.top = `${y * 0.5}px`;
  moon.style.left = `-${y * 0.5}px`;
  mountain.style.top = `-${y * 0.15}px`;
  road.style.top = `${y * 0.15}px`;
  text.style.top = `${y}px`;
});
