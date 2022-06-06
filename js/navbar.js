// For mobile/hamburger menu
const doc = document;
const menuOpen = doc.querySelector(".hamburger-label-wrapper");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
    menuOpen.classList.remove("opacity-one");
    menuOpen.classList.add("opacity-zero");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
    menuOpen.classList.remove("opacity-zero");
    menuOpen.classList.add("opacity-one");
});

