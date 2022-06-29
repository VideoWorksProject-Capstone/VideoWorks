"use strict";

let hamburgerImg = document.querySelector(".ham1");
let mobileMenu = document.querySelector(".mobile-menu");
let headerContainer = document.querySelector(".mobile-header-container");

let slideInMobileMenu = () => {
    mobileMenu.classList.toggle("open");
    hamburgerImg.classList.toggle("active");
    headerContainer.classList.toggle("purp-container-background");
}


hamburgerImg.addEventListener("click",slideInMobileMenu);

// onclick="this.classList.toggle('active open')