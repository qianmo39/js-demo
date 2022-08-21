const darkmode = new darken({
  variables: {
    "--container-background": ["#00eeff", "#091921"],
    "--clock-background": ["#fff url(clock.png)", "#091921 url(clock.png)"],
    "--clock-border": ["20px solid #fff", "20px solid #091921"],
    "--clock-box-shadow": [
      "inset 0 0 30px rgba(0, 0, 0, 0.1),0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(255, 255, 255, 1)",
      "inset 0 0 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(255, 255, 255, 0.2), 0 0 0 4px rgba(0, 0, 0, 1)",
    ],
    "--clock-before-background": ["#848484", "#848484"],
    "--clock-before-border": ["2px solid #fff", "2px solid #fff"],
    "--hr-background": ["#848484", "#d6d6d6"],
    "--min-background": ["#d6d6d6", "#848484"],
    "--sec-background": ["#ff6767", "#ff105e"],
  },
  toggle: "#darkmode-button",
});

let mql = window.matchMedia("(prefers-color-scheme: dark)");
mql.addEventListener("change", (mql) =>
  mql.matches ? darkmode.on() : darkmode.off()
);

setInterval(() => {
  const hr = document.querySelector("#hr");
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
