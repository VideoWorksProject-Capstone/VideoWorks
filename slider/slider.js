"use strict"

let avatarHoverBox = document.querySelector(".avatar-hover-box");
let avatarBox = Array.from(document.querySelectorAll(".media-element .user-avatar-box"));
let userAvatarBoxImg = document.querySelector(".media-element .user-avatar-box .user-avatar-image1");
let sliderCards = Array.from(document.querySelectorAll(".media-element"));
let colorsArray = ["--green", "--blue", "--pink", "--purple", "--orange"];
let mediaElementBorder = Array.from(document.querySelectorAll(".media-element__border"));

// let mediaElement = Array.from(document.querySelectorAll(".media-element"));

changeAvatarColors(avatarBox, mediaElementBorder);


let body = document.querySelector("body");
let hamburgerMenuIcon = document.querySelector(".ham");
hamburgerMenuIcon.addEventListener("click", () => body.classList.toggle("no-scroll"));


function changeAvatarColors(avatarBox, mediaElementBorder){
    for(let i = 0; i < sliderCards.length; i++){
        let rand = Math.floor(Math.random() * colorsArray.length);
        sliderCards[i].style.borderTop = `var(${colorsArray[rand]}) solid 5px`;
        sliderCards[i].style.borderBottom = `var(${colorsArray[rand]}) solid 5px`;
        avatarBox[i].style.backgroundColor = `var(${colorsArray[rand]})`;
        mediaElementBorder[i].style.borderTop = `var(${colorsArray[rand]}) dashed 4px`;
    }
}