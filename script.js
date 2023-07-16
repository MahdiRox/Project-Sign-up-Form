let submitButton = document.querySelector(".submit");
let confirmPassword = document.getElementById("confirm-pass");
let password = document.getElementById("password");
let passError = document.querySelector(".pass-error");
function validatePasswords() {
  if (password.value !== confirmPassword.value) {
    passError.textContent = "* Passwords do not match";
    password.classList.add("error");
    confirmPassword.classList.add("error");
    submitButton.disabled = true;
  } else {
    passError.textContent = "";
    submitButton.disabled = false;
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  }
}

confirmPassword.addEventListener("input", validatePasswords);
