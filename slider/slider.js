"use strict"

let avatarHoverBox = document.querySelector(".avatar-hover-box");
let avatarBox = document.querySelector(".media-element .user-avatar-box");

avatarHoverBox.addEventListener("mouseover",(e)=>{
    avatarBox.classList.add("hovered");
    console.log("eeennnttteerrr")
})

avatarHoverBox.addEventListener("mouseout",(e)=>{
    avatarBox.classList.remove("hovered");
})