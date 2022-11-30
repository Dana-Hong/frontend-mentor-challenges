const submitButton = document.querySelector(".submit-button");
const textField = document.querySelector(".text-field");
const errorMessage = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

textField.addEventListener("input", (event) => {
    if (textField.validity.valid) {
        errorMessage.textContent = "";
        errorIcon.classList.add("hidden");
        errorIcon.classList.remove("block");
        errorMessage.className = "error";
    } else {
        showError();
    }
});

function showError() {
    if (textField.validity.valueMissing) {
        errorMessage.textContent = "You must enter a valid e-mail address.";
        errorIcon.classList.remove("hidden");
        errorIcon.classList.add("block");
    } else if (email.validity.typeMismatch) {
        errorMessage.textContent = "Please provide a valid email.";
        errorIcon.classList.remove("hidden");
        errorIcon.classList.add("block");
    }
    errorMessage.className = "error-active";
}
