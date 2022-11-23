const submitCard = document.querySelector(".submit-card");
const submittedCard = document.querySelector(".submitted-card");
const selection = document.querySelector(".selection");
const buttons = document.querySelectorAll(".rate-button");

let ratingSelected = false;
let rating;

buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
        buttons.forEach((button) => button.classList.remove("clicked"));
        event.target.classList.add("clicked");
        ratingSelected = true;
        rating = event.target.textContent;
    })
);

const submitButton = document.querySelector(".submit-button");

submitButton.addEventListener("click", () => {
    if (ratingSelected) {
        submitCard.classList.add("hide");
        selection.textContent = `You selected ${rating} out of 5`;
        setTimeout(() => {
            submitCard.classList.add("hidden");
            submittedCard.classList.remove("hidden");
            submittedCard.classList.add("show");
        }, 1000);
    }
});
