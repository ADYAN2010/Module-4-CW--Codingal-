function validateUsername() {
  let input = document.getElementById("username").value;
  let msg = document.getElementById("message");

  if (input.length < 3) {
    msg.innerHTML = "Username must be at least 3 characters";
  } else {
    msg.innerHTML = "";
  }
}
