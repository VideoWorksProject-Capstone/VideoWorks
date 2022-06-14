"use strict"

let categoryCardsPopupPerson = document.querySelector(".category-cards__person-popup");
let categoryCards = document.querySelector(".category-cards");
let categoryShape = document.querySelector(".category-cards__shape");
let categoryImg = document.querySelector(".category-cards__img");
let categoryImgBlur = document.querySelector(".category-cards:hover .category-cards__img");
let isMouseHover = false;
// let cardDomRect = categoryCards.getBoundingClientRect();





categoryCards.addEventListener("mouseover",()=> {


        setTimeout(() => mouseOutFunc(), 2000);
        categoryCardsPopupPerson.classList.add("hovered");
        categoryShape.classList.add("hovered");
        categoryImg.classList.add("hovered");
        // categoryImgBlur.classList.add("hovered");
        isMouseHover = true;
        console.log(categoryCards.getBoundingClientRect())

}, {capture:true, once:true});


let mouseOutFunc = ()=> {
    categoryCardsPopupPerson.classList.remove("hovered");
    categoryShape.classList.remove("hovered");
    categoryImg.classList.remove("hovered");
    // categoryImgBlur.classList.remove("hovered");
    isMouseHover
}


// Event Listener
categoryCards.addEventListener("mouseout",mouseOutFunc);