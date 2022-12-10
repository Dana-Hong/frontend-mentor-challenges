const inputElements = Array.from(document.querySelectorAll("input"));
const confirmButton = document.querySelector("button");
const formElement = document.querySelector("form");
const formCompleteElement = document.querySelector(".form-complete");

const showError = (element, borderElement, errorElement) => {
      borderElement.classList.add("bg-[#FF5050]");
      const inputName = element.name;
      if (element.validity.valueMissing) {
            if (inputName === "month" || inputName === "year") {
                  errorElement.textContent = `Can't be blank`;
            } else {
                  errorElement.textContent = `${
                        inputName.charAt(0).toUpperCase() + inputName.slice(1)
                  } cannot be empty`;
            }
      } else if (element.validity.patternMismatch) {
            errorElement.textContent = `Invalid ${inputName}`;
      } else if (element.validity.patternMismatch && inputName === "Card number") {
            errorElement.textContent = "Wrong format, numbers only";
      } else if (element.validity.tooShort && inputName === "name") {
            errorElement.textContent = `${inputName} must be at least 3 characters long`;
      }
};

inputElements.forEach((element) => {
      element.addEventListener("click", () => {
            inputElements.forEach((element) => {
                  if (element === document.activeElement) {
                        element.parentElement.classList.add(
                              "bg-gradient-to-b",
                              "from-[#6348FE]",
                              "to-[#610595]"
                        );
                  } else {
                        element.parentElement.classList.remove(
                              "bg-gradient-to-b",
                              "from-[#6348FE]",
                              "to-[#610595]"
                        );
                  }
            });
      });

      element.addEventListener("input", () => {
            const borderElement = element.parentElement;
            const errorElement = element.parentElement.nextElementSibling;
            if (element.validity.valid) {
                  errorElement.textContent = "";
                  borderElement.classList.remove("bg-[#FF5050]");
            } else {
                  showError(element, borderElement, errorElement);
            }
      });
});

confirmButton.addEventListener("click", (event) => {
      event.preventDefault();
      const validInputs = inputElements.every((element) => (element.validity.valid ? true : false));
      if (!validInputs) {
            return;
      } else {
            formElement.classList.add("hidden");
            formCompleteElement.classList.remove("hidden");
      }
});
