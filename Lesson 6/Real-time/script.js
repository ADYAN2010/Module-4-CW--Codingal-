function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("message");

  if (user === "admin" && pass === "1234") {
    msg.style.color = "green";
    msg.innerHTML = "Login successful!";
  } else {
    msg.style.color = "red";
    msg.innerHTML = "Login Successful.";
  }
}
