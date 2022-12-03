const email = document.querySelector(".email");
const errorElement = email.parentElement.lastElementChild;
const notifyButton = document.querySelector(".notify-button");
console.log(notifyButton);

const showError = () => {
    email.classList.add("error");
    errorElement.classList.remove("hidden");
    if (email.validity.typeMismatch) {
        errorElement.textContent = "Please provide a valid email address";
    } else if (email.validity.valueMissing) {
        errorElement.textContent = "You must provide an email address";
    }
};

email.addEventListener("input", () => {
    if (email.validity.valid) {
        email.classList.remove("error");
        errorElement.classList.add("hidden");
        errorElement.textContent = "";
    } else {
        showError();
    }
});

notifyButton.addEventListener("click", (event) => {
    if (email.validity.valid) {
        email.classList.remove("error");
        errorElement.classList.add("hidden");
        errorElement.textContent = "";
    } else {
        showError();
    }
    event.preventDefault();
});
