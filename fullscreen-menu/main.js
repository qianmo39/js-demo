const menuToggle = () => {
  const nav = document.querySelector("#menu-overlay");
  nav.classList.toggle("active");
  const icon = document.querySelector("#toggle-icon");
  icon.classList.toggle("active");
};
