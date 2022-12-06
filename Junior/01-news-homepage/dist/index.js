const body = document.body;
const hamburger = document.querySelector(".burger-button");
const [burgerTop, burgerMiddle, burgerBottom] = hamburger.children;
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

const toggleNav = () => {
      const navClosed = Array.from(navMenu.classList).includes("translate-x-[100%]");
      if (navClosed) {
            hamburger.classList.add("fixed");
            navMenu.classList.add("fixed");
            burgerTop.classList.add("rotate-down");
            burgerMiddle.classList.add("fade");
            burgerBottom.classList.add("rotate-up");
            navMenu.classList.add("unhide-menu");
            body.classList.add("darken");
            setTimeout(() => {
                  burgerTop.classList.add("burger-top-active");
                  burgerMiddle.classList.add("opacity-0");
                  burgerBottom.classList.add("burger-bottom-active");
                  navMenu.classList.remove("absolute");
                  navMenu.classList.remove("translate-x-[100%]");
                  navMenu.classList.add("translate-x-[30%]");
                  body.classList.add("bg-[rgba(0,0,26,0.5)]");
            }, 300);
            setTimeout(() => {
                  burgerTop.classList.remove("rotate-down");
                  burgerMiddle.classList.remove("fade");
                  burgerBottom.classList.remove("rotate-up");
                  navMenu.classList.remove("unhide-menu");
                  body.classList.remove("darken");
            }, 600);
      } else if (!navClosed) {
            hamburger.classList.remove("fixed");
            navMenu.classList.add("absolute");
            burgerTop.classList.add("restore-top");
            burgerMiddle.classList.add("appear");
            burgerBottom.classList.add("restore-bottom");
            navMenu.classList.add("hide-menu");
            body.classList.add("lighten");
            setTimeout(() => {
                  burgerTop.classList.remove("burger-top-active");
                  burgerMiddle.classList.remove("opacity-0");
                  burgerBottom.classList.remove("burger-bottom-active");
                  navMenu.classList.remove("fixed");
                  navMenu.classList.remove("translate-x-[30%]");
                  body.classList.remove("bg-[rgba(0,0,26,0.5)]");
                  navMenu.classList.add("translate-x-[100%]");
            }, 300);
            setTimeout(() => {
                  burgerTop.classList.remove("restore-top");
                  burgerMiddle.classList.remove("appear");
                  burgerBottom.classList.remove("restore-bottom");
                  navMenu.classList.remove("hide-menu");
                  body.classList.add("lighten");
            }, 600);
      }
};

hamburger.addEventListener("click", () => {
      toggleNav();
});

window.addEventListener("resize", () => {
      const navClosed = Array.from(navMenu.classList).includes("translate-x-[100%]");
      const darkened = Array.from(body.classList).includes("bg-[rgba(0,0,26,0.5)]");
      if (navClosed) {
            return;
      } else {
            if (window.innerWidth >= 640 && darkened) {
                  body.classList.add("lighten");
                  setTimeout(() => {
                        body.classList.remove("bg-[rgba(0,0,26,0.5)]");
                  }, 300);
                  setTimeout(() => {
                        body.classList.remove("lighten");
                  }, 600);
            } else if (window.innerWidth < 640 && !darkened) {
                  body.classList.add("darken");
                  setTimeout(() => {
                        body.classList.add("bg-[rgba(0,0,26,0.5)]");
                  }, 300);
                  setTimeout(() => {
                        body.classList.remove("lighten");
                  }, 600);
            }
      }
});
