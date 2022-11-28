const shareButton = document.querySelector(".share-button");
const sharePopup = document.querySelector(".share");

shareButton.addEventListener("click", () => {
    const popUpHidden = Array.from(sharePopup.classList).includes("hidden");
    if (popUpHidden) {
        shareButton.src = "../images/icon-share-clicked.svg";
        shareButton.classList.add("bg-[#6d7f97]");
        sharePopup.classList.remove("hidden");
    } else {
        shareButton.src = "../images/icon-share.svg";
        shareButton.classList.remove("bg-[#6d7f97]");
        sharePopup.classList.add("hidden");
    }
});
