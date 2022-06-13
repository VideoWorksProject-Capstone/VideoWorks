"use strict"

let avatarHoverBox = document.querySelector(".avatar-hover-box");
let avatarBox = document.querySelector(".media-element .user-avatar-box");
let userAvatarBoxImg = document.querySelector(".media-element .user-avatar-box .user-avatar-image1");
// let mediaElement = Array.from(document.querySelectorAll(".media-element"));

let body = document.querySelector("body");
let hamburgerMenuIcon = document.querySelector(".ham");
hamburgerMenuIcon.addEventListener("click",()=> body.classList.toggle("no-scroll"));


// mediaElement.forEach((element)=>{
//     element.addEventListener("mouseover",(e)=>{
//         avatarBox.classList.add("hovered");
//         userAvatarBoxImg.classList.add("hovered");
//         console.log("eeennnttteerrr")
//     })
// })



// mediaElement.addEventListener("mouseover",(e)=>{
//     avatarBox.classList.add("hovered");
//     userAvatarBoxImg.classList.add("hovered");
//     console.log("eeennnttteerrr")
// })

// mediaElement.addEventListener("mouseout",(e)=>{
//     avatarBox.classList.remove("hovered");
//     userAvatarBoxImg.classList.remove("hovered");
// })