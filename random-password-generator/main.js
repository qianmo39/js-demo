const btn = document.getElementById("btn");
btn.addEventListener("click", () => getPassword());

function getPassword() {
  const chars =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
  const passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }
  document.getElementById("password").value = password;
}
