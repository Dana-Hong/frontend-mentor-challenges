const toggleButtons = document.querySelectorAll(".toggle-button");
const questions = document.querySelectorAll(".question");
const responses = document.querySelectorAll(".response");

const handleToggle = (event) => {
    const id = event.target.id;
    if (!responses[id].classList.contains("show")) {
        toggleButtons[id].classList.add("flip");
        responses[id].classList.add("show");
        questions[id].classList.add("selected");
        setTimeout(() => {
            responses[id].classList.add("displayed");
        }, 300);
    } else {
        toggleButtons[id].classList.remove("flip");
        toggleButtons[id].classList.add("unflip");
        responses[id].classList.remove("show");
        responses[id].classList.remove("displayed");
        responses[id].classList.add("hide");
        questions[id].classList.remove("selected");
        setTimeout(() => {
            responses[id].classList.remove("hide");
            toggleButtons[id].classList.remove("unflip");
        }, 350);
    }
};

toggleButtons.forEach((button, index) => {
    button.addEventListener("click", (event) => {
        handleToggle(event);
    });
    button.id = index;
});

questions.forEach((question, index) => {
    question.addEventListener("click", (event) => {
        handleToggle(event);
    });
    question.id = index;
});
