const inputs = Array.from(document.querySelectorAll("input"));
const submitButton = document.querySelector(".submit-button");

const showError = (element, inputAndImageElementArray, errorElement) => {
    const addError = () => {
        inputAndImageElementArray.forEach((element) => element.classList.add("error"));
    };
    const inputName = element.name;
    addError();
    if (element.validity.valueMissing) {
        errorElement.textContent = `${inputName} cannot be empty`;
    } else if (element.validity.patternMismatch && inputName !== "Password") {
        errorElement.textContent = `This is not a valid ${inputName}.`;
    } else if (element.validity.typeMismatch) {
        errorElement.textContent = `Looks like this is not an ${inputName}`;
    } else if (element.validity.tooShort) {
        errorElement.textContent = `${inputName} must be at least 8 characters long`;
    } else if (element.validity.patternMismatch && inputName === "Password") {
        console.log(element.validity.patternMismatch);
        errorElement.textContent = `${inputName} must include at least one number and special character !@#$%^&*`;
    }
};

inputs.map((input) =>
    input.addEventListener("input", () => {
        const errorElement = input.parentElement.parentElement.lastElementChild;
        const inputAndImageElementArray = Array.from(input.parentElement.children);
        if (input.validity.valid) {
            inputAndImageElementArray.forEach((childElement) => {
                childElement.classList.remove("error");
            });
            errorElement.textContent = "";
        } else {
            showError(input, inputAndImageElementArray, errorElement);
        }
    })
);

submitButton.addEventListener("click", (event) => {
    inputs.map((input) => {
        const errorElement = input.parentElement.parentElement.lastElementChild;
        const inputAndImageElementArray = Array.from(input.parentElement.children);
        if (input.validity.valid) {
            event.preventDefault();
        } else {
            showError(input, inputAndImageElementArray, errorElement);
        }
    });
});
